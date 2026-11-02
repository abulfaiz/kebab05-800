#!/usr/bin/env python3
"""Regenerates the 5 pages (with a static Polish copy of the menu/offers for search engines),
sitemap.xml, robots.txt, 404.html and favicon.svg. The site also works without running this:
the browser renders the menu/offers from assets/*.js. Run after editing menu-data.js / config.js:
    python3 tools/build.py        (needs Node.js)"""
import os, json, subprocess, html, datetime
from urllib.parse import quote_plus
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(ROOT)
BASE = 'https://abulfaiz.github.io/kebab-05-800/'
MAPS = 'https://maps.app.goo.gl/HZWJGaL7ULREbf1F7'
ADDR_Q = quote_plus('Ludwika Waryńskiego 5, 05-800 Pruszków')
js = open('assets/menu-data.js', encoding='utf8').read() + open('assets/config.js', encoding='utf8').read()
open('/tmp/_d.js', 'w', encoding='utf8').write(js + ';console.log(JSON.stringify({M,OFFERS}))')
D = json.loads(subprocess.check_output(['node', '/tmp/_d.js']))
M, OFFERS = D['M'], D['OFFERS']
e = html.escape
import unicodedata, re
def slug(s):
    s = unicodedata.normalize('NFD', s.lower().replace('ł', 'l')); s = ''.join(c for c in s if not unicodedata.combining(c))
    return re.sub(r'(^-|-$)', '', re.sub(r'[^a-z0-9]+', '-', s))
CAM = '<svg><use href="#cam"/></svg>'
def menu_html():
    out = ''
    for c in M:
        rows = ''.join(
            f'<div class="row"><div class="ph" aria-hidden="true">{CAM}<img src="images/thumb/{slug(c[0])}-{slug(r[0])}.webp" width="64" height="64" alt="" loading="lazy" decoding="async" onerror="this.remove()"></div>'
            f'<div class="m"><span class="n">{e(r[0])}</span>' + (f'<small>{e(r[1])}</small>' if r[1] else '') + f'</div><span class="p">{e(r[2])}</span></div>' for r in c[2])
        out += f'<section class="mcat" id="{slug(c[0])}"><h2>{e(c[0])}</h2>' + (f'<p class="sub">{e(c[1])}</p>' if c[1] else '') + f'<div class="list">{rows}</div></section>'
    return out
def jump_html(): return ''.join(f'<a href="#{slug(c[0])}">{e(c[0])}</a>' for c in M)
def offers_html():
    out = ''
    for i, o in enumerate(OFFERS):
        x = o['pl']
        ph = ('<div class="ph stampcard" aria-hidden="true"><b>KEBAB 05-800</b><span>' + '<i></i>' * 10 + '</span></div>') if o.get('art') == 'card' else f'<div class="ph"><img src="images/{o["img"]}.webp" width="800" height="600" alt="" loading="lazy" decoding="async"></div>'
        pts = ('<ul>' + ''.join(f'<li>{e(p)}</li>' for p in x['points']) + '</ul>') if x['points'] else ''
        big = f'<p class="big">{e(o["price"])}</p>' if o.get('price') else ''
        out += f'<article class="promo{" rev" if i % 2 else ""}">{ph}<div class="pt"><span class="tag">{e(x["tag"])}</span><h2>{e(x["title"])}</h2><p>{e(x["text"])}</p>{pts}{big}<a class="btn fill" href="{e(o["href"])}">{e(x["cta"]).upper()}</a></div></article>'
    return out
SPIT = '<svg viewBox="0 0 26 52" aria-hidden="true"><rect x="12" y="0" width="2" height="52" fill="#26201d"/><path d="M5 6h16l3 38H2z" fill="#c8344f"/><path d="M6 14h14M5 24h16M4 34h18" stroke="#a82740" stroke-width="1.5"/></svg>'
FAV = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#f7f1e8"/><rect x="31" y="4" width="2" height="56" fill="#26201d"/><path d="M18 14h28l5 34H13z" fill="#c8344f"/><path d="M19 24h26M17 33h30M15 42h34" stroke="#a82740" stroke-width="2.5"/></svg>'
NAV = [('index.html', 'n_home', 'START'), ('offers.html', 'n_offers', 'OFERTY'), ('menu.html', 'n_menu', 'MENU'), ('about.html', 'n_about', 'O NAS'), ('contact.html', 'n_contact', 'KONTAKT')]
navh = ''.join(f'<a href="{h}" data-i="{k}">{t}</a>' for h, k, t in NAV)
HEADER = f'''<header><div class="in">
  <a class="brand" href="index.html" aria-label="Kebab 05-800 Pruszków">{SPIT}<span><b>KEBAB 05-800</b><i>Pruszków</i></span></a>
  <div class="lang" role="group" aria-label="Language"><button type="button" data-l="pl">PL</button><button type="button" data-l="en">EN</button><button type="button" data-l="uk">UK</button></div>
  <nav aria-label="Menu">{navh}</nav>
</div></header>'''
FOOTER = f'''<footer><nav class="fnav" data-al="f_nav" aria-label="Footer">{navh}</nav>
<p>© <span id="y">2026</span> Kebab 05-800 Pruszków · ul. Waryńskiego 5 lok. 18 · <a href="tel:+48501199755">501 199 755</a></p></footer>'''
def orderbar(page):
    alt = ('offers.html', 'n_offers', 'OFERTY') if page == 'menu.html' else ('menu.html', 'n_menu', 'MENU')
    return f'<div class="orderbar"><a class="btn fill" href="tel:+48501199755" data-i="sb_call">ZADZWOŃ: 501 199 755</a><a class="btn" href="{alt[0]}" data-i="{alt[1]}">{alt[2]}</a></div>'
LD = {"@context": "https://schema.org", "@type": "Restaurant", "name": "Kebab 05-800 Pruszków", "url": BASE, "image": BASE + "images/og.jpg",
      "telephone": "+48501199755", "servesCuisine": "Kebab", "hasMenu": BASE + "menu.html", "hasMap": MAPS,
      "address": {"@type": "PostalAddress", "streetAddress": "ul. Ludwika Waryńskiego 5 lok. 18", "postalCode": "05-800", "addressLocality": "Pruszków", "addressCountry": "PL"},
      "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:00", "closes": "23:00"}]}
PAGES = {
 'index.html': ('Kebab Pruszków – Kebab 05-800 | ul. Waryńskiego 5, dostawa 501 199 755', 'Kebab w Pruszkowie przy ul. Waryńskiego 5: kanapki kebab, mięso kraftowe, burgery, talerze i kebab box. Codziennie 8:00–23:00. Dostawa: 501 199 755.', BASE, True),
 'offers.html': ('Oferty i promocje | Kebab 05-800 Pruszków', 'Aktualne oferty Kebab 05-800 w Pruszkowie: ser gratis w wersji Specjał, kebab box w jednej cenie, dostawa i karta lojalnościowa.', BASE + 'offers.html', False),
 'menu.html': ('Menu i ceny – Kebab Pruszków | Kebab 05-800', 'Pełne menu Kebab 05-800 w Pruszkowie z cenami: kanapki kebab, mięso kraftowe, burgery, dania główne, kebab box, sałatki, dodatki i napoje.', BASE + 'menu.html', False),
 'about.html': ('O nas | Kebab 05-800 Pruszków', 'Kebab 05-800 w Pruszkowie: mięso z rożna krojone na bieżąco, świeże warzywa i sosy. Na miejscu, na wynos i z dostawą.', BASE + 'about.html', False),
 'contact.html': ('Kontakt i dojazd – Kebab Pruszków | Kebab 05-800', 'Kebab 05-800, ul. Ludwika Waryńskiego 5 lok. 18, Pruszków. Codziennie 8:00–23:00. Zamówienia i dostawa: 501 199 755. Mapa dojazdu.', BASE + 'contact.html', True)}
def img(src, w, h, key, alt, eager=False):
    a = 'fetchpriority="high"' if eager else 'loading="lazy"'
    return f'<div class="ph">{CAM}<img src="images/{src}.webp" width="{w}" height="{h}" alt="{e(alt)}" data-ia="{key}" {a} decoding="async" onerror="this.remove()"></div>'
BODY = {}
BODY['index.html'] = f'''<div class="hero"><div class="wrap">
  <div>
    <h1>Kebab 05-800<em>Pruszków</em></h1>
    <p data-i="hero_p">Mięso z rożna, świeże dodatki i sosy. Czynne codziennie od 8:00 do 23:00.</p>
    <div class="btns"><a class="btn fill" href="menu.html" data-i="b_menu">ZOBACZ MENU</a><a class="btn" href="tel:+48501199755" data-i="b_call">ZADZWOŃ</a></div>
    <p class="meta">ul. Ludwika Waryńskiego 5 lok. 18, Pruszków</p>
  </div>
  {img('home-hero', 800, 1000, 'alt_hero', 'Kebab w tortilli, frytki i szaszłyki z grilla w Kebab 05-800', True)}
</div></div>
<section><div class="wrap">
  <div class="title"><h2 data-i="h_picks">Nasze propozycje</h2><p data-i="s_picks">Trzy sposoby na dobry kebab.</p></div>
  <div class="three">
    <div class="dish">{img('home-kanapki', 800, 600, 'alt_k1', 'Kebab w picie z surówką i sosem')}<div class="t"><h3><a href="menu.html#kanapki-kebab" data-i="k1_t">Kanapki kebab</a></h3><p data-i="k1_d">Cienki, gruby lub amerykański, w tortilli albo w picie. Specjał: ser gratis.</p><span class="pr" data-i="from1">od 20 zł</span></div></div>
    <div class="dish">{img('home-kraftowe', 800, 600, 'alt_k2', 'Kebab w tortilli')}<div class="t"><h3><a href="menu.html#mieso-kraftowe" data-i="k2_t">Mięso kraftowe</a></h3><p data-i="k2_d">Kurczak, baranina lub mięso mieszane, w tortilli lub picie.</p><span class="pr" data-i="from2">od 28 zł</span></div></div>
    <div class="dish">{img('home-box', 800, 600, 'alt_k3', 'Kebab box z frytkami i mięsem')}<div class="t"><h3><a href="menu.html#kebab-box" data-i="k3_t">Kebab box</a></h3><p data-i="k3_d">Kebab, kalmary, nuggetsy, krewetki i inne, w rozmiarach S, M i XL.</p><span class="pr" data-i="from3">od 22 zł</span></div></div>
  </div>
  <p class="note"><a class="btn" href="menu.html" data-i="b_full">PEŁNE MENU</a></p>
</div></section>
<section class="band"><div class="wrap">
  <h2 data-i="d_h">Dostawa pod numerem</h2>
  <a class="tel" href="tel:+48501199755">501 199 755</a>
  <a class="btn fill" href="tel:+48501199755" data-i="b_order">ZAMÓW TELEFONICZNIE</a>
  <div class="chips olinks"></div>
</div></section>
<section><div class="wrap seo"><h2 data-i="seo_h">Kebab w Pruszkowie</h2><p data-i="seo_p">Kebab 05-800 to lokal z kebabem w Pruszkowie przy ul. Ludwika Waryńskiego 5 lok. 18. W menu: kanapki kebab w tortilli lub picie (cienki, gruby, amerykański, samo mięso, falafel), mięso kraftowe, burgery, dania główne na talerzu, kebab box, sałatki, dodatki, deser i napoje. Czynne codziennie od 8:00 do 23:00. Dostawa: 501 199 755.</p></div></section>'''
BODY['offers.html'] = f'''<section><div class="wrap">
  <div class="title"><h1 class="h1" data-i="of_h">Oferty</h1><p data-i="of_s">Aktualne oferty Kebab 05-800 Pruszków.</p></div>
  <div id="offers">{offers_html()}</div>
</div>
<div class="how"><div class="wrap"><h2 data-i="of_how_h">Jak zamówić</h2><p data-i="of_how_p">Zadzwoń, zamów online lub wpadnij do lokalu. Czynne codziennie 8:00 – 23:00.</p>
<a class="tel" href="tel:+48501199755">501 199 755</a><div class="chips olinks"></div></div></div></section>'''
BODY['menu.html'] = f'''<section><div class="wrap">
  <div class="title"><h1 class="h1" data-i="m_h">Menu</h1><p data-i="m_sub">Dania na wynos lub kanapka: +1 zł.</p></div>
  <nav class="jump" id="jump" data-al="m_jump" aria-label="Kategorie menu">{jump_html()}</nav>
  <div id="menu-all">{menu_html()}</div>
  <p class="note" data-i="m_note">Przy kanapkach ceny podano od najmniejszego do największego rozmiaru.</p>
</div></section>'''
BODY['about.html'] = f'''<section><div class="wrap about">
  <div>
    <h1 class="h1" data-i="a_h">Smak, do którego się wraca</h1>
    <div class="rule"></div>
    <p data-i="a_p1">Kebab 05-800 to lokal w sercu Pruszkowa. Stawiamy na mięso z rożna krojone na bieżąco, świeże warzywa, ciepłe pieczywo i szeroki wybór: od klasycznych kanapek, przez burgery i dania na talerzu, po kebab box.</p>
    <p data-i="a_p2">Zjesz u nas, weźmiesz na wynos albo zamówisz dostawę. Zapraszamy całą rodzinę i znajomych. Działamy cały tydzień.</p>
    <a class="btn fill" href="menu.html" data-i="b_menu">ZOBACZ MENU</a>
  </div>
  {img('home-hero', 800, 1000, 'alt_about', 'Dania kebab w Kebab 05-800')}
</div></section>'''
BODY['contact.html'] = f'''<section><div class="wrap">
  <div class="title"><h1 class="h1" data-i="c_h">Kontakt</h1><p data-i="c_sub">Zamów telefonicznie albo wpadnij na miejscu.</p></div>
  <div class="info">
    <div><h2 class="h3" data-i="c_addr">Adres</h2><p>ul. Ludwika Waryńskiego 5 lok. 18<br>05-800 Pruszków</p><a class="btn" href="{MAPS}" target="_blank" rel="noopener" data-i="b_map">OTWÓRZ W MAPACH GOOGLE</a><a class="btn" href="https://www.google.com/maps/dir/?api=1&amp;destination={ADDR_Q}" target="_blank" rel="noopener" data-i="b_dir">WYZNACZ TRASĘ</a></div>
    <div><h2 class="h3" data-i="c_hours">Godziny</h2><p data-i="c_hv">Codziennie<br>8:00 – 23:00</p></div>
    <div><h2 class="h3" data-i="c_deliv">Telefon i dostawa</h2><p><a href="tel:+48501199755">501 199 755</a></p><a class="btn fill" href="tel:+48501199755" data-i="b_call">ZADZWOŃ</a></div>
    <div class="olinks-wrap"><h2 class="h3" data-i="c_online">Zamów online</h2><div class="chips lt olinks"></div></div>
  </div>
  <iframe class="map" title="Mapa: Kebab 05-800, ul. Ludwika Waryńskiego 5, Pruszków" data-it="map_t" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q={ADDR_Q}&amp;z=17&amp;output=embed"></iframe>
</div></section>'''
FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Montserrat:wght@300;400;500;600&display=swap">'
SYM = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="cam" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></symbol></svg>'
def page(fn):
    t, d, url, ld = PAGES[fn]
    og = f'''<meta property="og:type" content="website"><meta property="og:site_name" content="Kebab 05-800 Pruszków"><meta property="og:title" content="{e(t)}"><meta property="og:description" content="{e(d)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{BASE}images/og.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="pl_PL"><meta property="og:locale:alternate" content="en_US"><meta property="og:locale:alternate" content="uk_UA">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{e(t)}"><meta name="twitter:description" content="{e(d)}"><meta name="twitter:image" content="{BASE}images/og.jpg">'''
    ldj = f'<script type="application/ld+json">{json.dumps(LD, ensure_ascii=False)}</script>' if ld else ''
    sc = '<script src="assets/config.js" defer></script>' + ('<script src="assets/menu-data.js" defer></script>' if fn == 'menu.html' else '') + '<script src="assets/site.js" defer></script>'
    return f'''<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light"><meta name="theme-color" content="#f7f1e8">
<title>{e(t)}</title>
<meta name="description" content="{e(d)}">
<link rel="canonical" href="{url}">
<link rel="icon" href="favicon.svg" type="image/svg+xml">
{og}
{FONTS}
<link rel="stylesheet" href="assets/style.css">
{ldj}
</head>
<body data-page="{fn}">
<a class="skip" href="#main" data-i="skip">Przejdź do treści</a>
{SYM}
{HEADER}
<main id="main"><div class="view on">
{BODY[fn]}
</div></main>
{FOOTER}
{orderbar(fn)}
{sc}
</body>
</html>
'''
for fn in PAGES: open(fn, 'w', encoding='utf8').write(page(fn))
open('favicon.svg', 'w').write(FAV)
today = datetime.date.today().isoformat()
open('sitemap.xml', 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(f'<url><loc>{PAGES[f][2]}</loc><lastmod>{today}</lastmod></url>\n' for f in PAGES) + '</urlset>\n')
open('robots.txt', 'w').write(f'User-agent: *\nAllow: /\nSitemap: {BASE}sitemap.xml\n')
open('404.html', 'w', encoding='utf8').write(f'''<!DOCTYPE html><html lang="pl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>404 | Kebab 05-800 Pruszków</title><link rel="stylesheet" href="{BASE}assets/style.css"></head><body><main style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem"><div><h1 style="font-size:4rem">404</h1><p>Nie znaleziono strony / Page not found</p><p><a class="btn fill" href="{BASE}">Kebab 05-800 Pruszków</a></p></div></main></body></html>\n''')
print('built', list(PAGES), 'menu items', sum(len(c[2]) for c in M))
