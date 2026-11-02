/* Shared logic: languages, menu, offers, links, page titles. */
const NT={"Cienki":["Thin","Тонкий"],"Gruby":["Thick","Товстий"],"Amerykański":["American","Американський"],"Samo mięso":["Meat only","Лише м'ясо"],
"Burger wołowy":["Beef burger","Бургер з яловичиною"],"Burger kurczak":["Chicken burger","Бургер з куркою"],
"Talerz z kurczakiem":["Chicken plate","Тарілка з куркою"],"Talerz z baraniną":["Lamb plate","Тарілка з бараниною"],
"Greckie z wołowiną lub kurczakiem":["Greek-style with beef or chicken","По-грецьки з яловичиною або куркою"],"Kapsalon":["Kapsalon","Капсалон"],
"Pierś z kurczaka":["Chicken breast","Куряча грудка"],"Talerz smażona ryba":["Fried fish plate","Тарілка зі смаженою рибою"],"Talerz falafel":["Falafel plate","Тарілка з фалафелем"],
"Fajita":["Fajita","Фахіта"],"Philadelphia":["Philadelphia","Філадельфія"],"Libański specjał grill mix":["Lebanese special grill mix","Ліванський спеціал гриль-мікс"],
"Kebab box":["Kebab box","Кебаб бокс"],"Kalmary":["Calamari","Кальмари"],"Nuggets":["Nuggets","Нагетси"],"Onion rings":["Onion rings","Цибулеві кільця"],
"Chilli cheese nuggets":["Chilli cheese nuggets","Нагетси чилі з сиром"],"Ryba smażona":["Fried fish","Смажена риба"],
"Butterfly shrimps":["Butterfly shrimps","Креветки «метелик»"],"Torpedo shrimps":["Torpedo shrimps","Креветки «торпедо»"],"Hot wings":["Hot wings","Гострі крильця"],
"Sałatka firmowa":["House salad","Фірмовий салат"],"Sałatka grecka":["Greek salad","Грецький салат"],"Sałatka szefa":["Chef's salad","Салат від шефа"],
"Ryż":["Rice","Рис"],"Frytki":["Fries","Картопля фрі"],"Frytki kręcone":["Curly fries","Кучерява картопля фрі"],"Dodatkowe mięso":["Extra meat","Додаткове м'ясо"],
"Sosy":["Sauces","Соуси"],"Baklava":["Baklava","Пахлава"],"Ayran":["Ayran","Айран"],"Woda":["Water","Вода"],"Soki (mango, owocowy)":["Juices (mango, fruit)","Соки (манго, фруктовий)"]};
const I={pl:{
t_index:"Kebab Pruszków – Kebab 05-800 | ul. Waryńskiego 5, dostawa 501 199 755",d_index:"Kebab w Pruszkowie przy ul. Waryńskiego 5: kanapki kebab, mięso kraftowe, burgery, talerze i kebab box. Codziennie 8:00–23:00. Dostawa: 501 199 755.",
t_offers:"Oferty i promocje | Kebab 05-800 Pruszków",d_offers:"Aktualne oferty Kebab 05-800 w Pruszkowie: ser gratis w wersji Specjał, kebab box w jednej cenie, dostawa i karta lojalnościowa.",
t_menu:"Menu i ceny – Kebab Pruszków | Kebab 05-800",d_menu:"Pełne menu Kebab 05-800 w Pruszkowie z cenami: kanapki kebab, mięso kraftowe, burgery, dania główne, kebab box, sałatki, dodatki i napoje.",
t_about:"O nas | Kebab 05-800 Pruszków",d_about:"Kebab 05-800 w Pruszkowie: mięso z rożna krojone na bieżąco, świeże warzywa i sosy. Na miejscu, na wynos i z dostawą.",
t_contact:"Kontakt i dojazd – Kebab Pruszków | Kebab 05-800",d_contact:"Kebab 05-800, ul. Ludwika Waryńskiego 5 lok. 18, Pruszków. Codziennie 8:00–23:00. Zamówienia i dostawa: 501 199 755. Mapa dojazdu."},
en:{n_home:"HOME",n_offers:"OFFERS",n_menu:"MENU",n_about:"ABOUT",n_contact:"CONTACT",skip:"Skip to content",sb_call:"CALL: 501 199 755",
t_index:"Kebab Pruszków – Kebab 05-800 | Waryńskiego 5, delivery 501 199 755",d_index:"Kebab in Pruszków at ul. Waryńskiego 5: kebab sandwiches, craft meat, burgers, plates and kebab box. Open daily 8:00–23:00. Delivery: 501 199 755.",
t_offers:"Offers and promotions | Kebab 05-800 Pruszków",d_offers:"Current offers at Kebab 05-800 in Pruszków: free cheese in the Special version, kebab box at one price, delivery and a loyalty card.",
t_menu:"Menu and prices – Kebab Pruszków | Kebab 05-800",d_menu:"Full Kebab 05-800 menu with prices in Pruszków: kebab sandwiches, craft meat, burgers, main dishes, kebab box, salads, sides and drinks.",
t_about:"About us | Kebab 05-800 Pruszków",d_about:"Kebab 05-800 in Pruszków: spit-roasted meat sliced to order, fresh vegetables and sauces. Eat in, take away or delivery.",
t_contact:"Contact and directions – Kebab Pruszków | Kebab 05-800",d_contact:"Kebab 05-800, ul. Ludwika Waryńskiego 5 lok. 18, Pruszków. Open daily 8:00–23:00. Orders and delivery: 501 199 755. Map.",
alt_hero:"Kebab wraps, fries and grilled skewers at Kebab 05-800",alt_k1:"Kebab in pita with salad and sauce",alt_k2:"Kebab wraps in tortilla",alt_k3:"Kebab box with fries and meat",alt_about:"Kebab dishes at Kebab 05-800",
hero_p:"Spit-roasted meat, fresh sides and sauces. Open every day from 8:00 to 23:00.",hero_k:"Kebab in Pruszków",b_menu:"VIEW MENU",b_call:"CALL",
h_picks:"Our picks",s_picks:"Three ways to enjoy a great kebab.",
k1_t:"Kebab sandwiches",k1_d:"Thin, thick or American, in a tortilla or pita. Special: free cheese.",k2_t:"Craft meat",k2_d:"Chicken, lamb or mixed meat, in a tortilla or pita.",k3_t:"Kebab box",k3_d:"Kebab, calamari, nuggets, shrimp and more, in sizes S, M and XL.",
from1:"from 20 zł",from2:"from 28 zł",from3:"from 22 zł",b_full:"FULL MENU",d_h:"Delivery by phone",b_order:"ORDER BY PHONE",
seo_h:"Kebab in Pruszków",seo_p:"Kebab 05-800 is a kebab restaurant in Pruszków at ul. Ludwika Waryńskiego 5, unit 18. The menu has kebab sandwiches in a tortilla or pita (thin, thick, American, meat only, falafel), craft meat, burgers, plated main dishes, kebab box, salads, sides, dessert and drinks. We are open every day from 8:00 to 23:00. Delivery: 501 199 755.",
of_h:"Offers",of_s:"Current offers at Kebab 05-800 Pruszków.",of_how_h:"How to order",of_how_p:"Call, order online or drop in. Open every day 8:00 – 23:00.",
m_h:"Menu",m_sub:"Takeaway meals or a sandwich: +1 zł.",m_note:"Sandwich prices are listed from the smallest to the largest size.",m_jump:"Menu categories",
a_h:"A taste worth coming back to",a_p1:"Kebab 05-800 is a place in the heart of Pruszków. We focus on spit-roasted meat sliced to order, fresh vegetables, warm bread and a wide choice: from classic sandwiches, through burgers and plated dishes, to the kebab box.",a_p2:"Eat in, take away or order delivery. Families and friends are always welcome. We are open all week.",
c_h:"Contact",c_sub:"Order by phone or drop in.",c_addr:"Address",c_hours:"Hours",c_hv:"Every day<br>8:00 – 23:00",c_deliv:"Phone and delivery",c_online:"Order online",b_map:"OPEN IN GOOGLE MAPS",b_dir:"GET DIRECTIONS",map_t:"Map: Kebab 05-800, ul. Ludwika Waryńskiego 5, Pruszków",f_nav:"Footer navigation"},
uk:{n_home:"ГОЛОВНА",n_offers:"АКЦІЇ",n_menu:"МЕНЮ",n_about:"ПРО НАС",n_contact:"КОНТАКТИ",skip:"Перейти до вмісту",sb_call:"ТЕЛЕФОНУЙТЕ: 501 199 755",
t_index:"Кебаб Pruszków – Kebab 05-800 | Waryńskiego 5, доставка 501 199 755",d_index:"Кебаб у Прушкові за адресою ul. Waryńskiego 5: кебаб-сендвічі, крафтове м'ясо, бургери, тарілки та kebab box. Щодня 8:00–23:00. Доставка: 501 199 755.",
t_offers:"Акції та пропозиції | Kebab 05-800 Pruszków",d_offers:"Актуальні пропозиції Kebab 05-800 у Прушкові: сир безкоштовно у версії Спеціал, kebab box за однією ціною, доставка та картка лояльності.",
t_menu:"Меню та ціни – кебаб Pruszków | Kebab 05-800",d_menu:"Повне меню Kebab 05-800 у Прушкові з цінами: кебаб-сендвічі, крафтове м'ясо, бургери, основні страви, kebab box, салати, додатки та напої.",
t_about:"Про нас | Kebab 05-800 Pruszków",d_about:"Kebab 05-800 у Прушкові: м'ясо з рожна, нарізане на місці, свіжі овочі та соуси. У закладі, з собою та з доставкою.",
t_contact:"Контакти та як дістатися – кебаб Pruszków | Kebab 05-800",d_contact:"Kebab 05-800, ul. Ludwika Waryńskiego 5 lok. 18, Pruszków. Щодня 8:00–23:00. Замовлення та доставка: 501 199 755. Мапа.",
alt_hero:"Кебаб-роли, картопля фрі та шашлики гриль у Kebab 05-800",alt_k1:"Кебаб у піті із салатом і соусом",alt_k2:"Кебаб-роли в тортильї",alt_k3:"Kebab box із картоплею фрі та м'ясом",alt_about:"Страви кебаб у Kebab 05-800",
hero_p:"М'ясо з рожна, свіжі добавки та соуси. Працюємо щодня з 8:00 до 23:00.",hero_k:"Кебаб у Прушкові",b_menu:"ДИВИТИСЬ МЕНЮ",b_call:"ЗАТЕЛЕФОНУВАТИ",
h_picks:"Наші пропозиції",s_picks:"Три способи насолодитися гарним кебабом.",
k1_t:"Кебаб-сендвічі",k1_d:"Тонкий, товстий або американський, у тортильї чи піті. Спеціал: сир безкоштовно.",k2_t:"Крафтове м'ясо",k2_d:"Курка, баранина або мікс, у тортильї чи піті.",k3_t:"Kebab box",k3_d:"Кебаб, кальмари, нагетси, креветки та інше, розміри S, M і XL.",
from1:"від 20 zł",from2:"від 28 zł",from3:"від 22 zł",b_full:"ПОВНЕ МЕНЮ",d_h:"Доставка за телефоном",b_order:"ЗАМОВИТИ ПО ТЕЛЕФОНУ",
seo_h:"Кебаб у Прушкові",seo_p:"Kebab 05-800 — заклад кебабу у Прушкові за адресою ul. Ludwika Waryńskiego 5, прим. 18. У меню: кебаб-сендвічі в тортильї або піті (тонкий, товстий, американський, лише м'ясо, фалафель), крафтове м'ясо, бургери, основні страви на тарілці, kebab box, салати, додатки, десерт і напої. Працюємо щодня з 8:00 до 23:00. Доставка: 501 199 755.",
of_h:"Акції",of_s:"Актуальні пропозиції Kebab 05-800 Pruszków.",of_how_h:"Як замовити",of_how_p:"Телефонуйте, замовляйте онлайн або заходьте до нас. Щодня 8:00 – 23:00.",
m_h:"Меню",m_sub:"Страви з собою або сендвіч: +1 zł.",m_note:"Ціни на сендвічі вказано від найменшого до найбільшого розміру.",m_jump:"Категорії меню",
a_h:"Смак, до якого хочеться повертатися",a_p1:"Kebab 05-800 — заклад у серці Прушкова. Ми робимо ставку на м'ясо з рожна, нарізане на місці, свіжі овочі, теплий хліб і широкий вибір: від класичних сендвічів і бургерів до страв на тарілці та кебаб боксу.",a_p2:"Їжте в закладі, беріть з собою або замовляйте доставку. Родини та друзі завжди раді. Працюємо всі дні тижня.",
c_h:"Контакти",c_sub:"Замовляйте по телефону або заходьте до нас.",c_addr:"Адреса",c_hours:"Години роботи",c_hv:"Щодня<br>8:00 – 23:00",c_deliv:"Телефон і доставка",c_online:"Замовити онлайн",b_map:"ВІДКРИТИ В GOOGLE MAPS",b_dir:"ПРОКЛАСТИ МАРШРУТ",map_t:"Мапа: Kebab 05-800, ul. Ludwika Waryńskiego 5, Pruszków",f_nav:"Навігація внизу сторінки"}};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
const slug=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ł/g,"l").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
let lang="pl";try{const q=new URLSearchParams(location.search).get("lang");lang=["pl","en","uk"].includes(q)?q:(localStorage.getItem("lang")||"pl")}catch(e){}
if(!["pl","en","uk"].includes(lang))lang="pl";
const li=()=>lang==="en"?0:1;
const catT=i=>lang==="pl"?[M[i][0],M[i][1]]:lang==="en"?[CT[i][0],CT[i][1]]:[CT[i][2],CT[i][3]];
const nm=n=>lang==="pl"||!NT[n]?n:NT[n][li()];
const pr=p=>p.replace(/^od /,lang==="en"?"from ":lang==="uk"?"від ":"od ");
function renderMenu(){const box=document.getElementById("menu-all");if(!box||typeof M==="undefined")return;
 document.getElementById("jump").innerHTML=M.map((c,i)=>`<a href="#${slug(c[0])}">${esc(catT(i)[0])}</a>`).join("");
 box.innerHTML=M.map((c,i)=>{const t=catT(i);return `<section class="mcat" id="${slug(c[0])}"><h2>${esc(t[0])}</h2>${t[1]?`<p class="sub">${esc(t[1])}</p>`:""}<div class="list">${c[2].map(r=>{
  const n=nm(r[0]),d=r[1]?(lang==="pl"?r[1]:(DT[r[1]]||[r[1],r[1]])[li()]):"",o=lang!=="pl"&&n!==r[0]?`<span class="orig" lang="pl">${esc(r[0])}</span>`:"",sm=[o,d?esc(d):""].filter(Boolean).join(" · ");
  return `<div class="row"><div class="ph" aria-hidden="true"><svg><use href="#cam"/></svg><img src="images/thumb/${slug(c[0])}-${slug(r[0])}.webp" width="64" height="64" alt="" loading="lazy" decoding="async" onerror="this.remove()"></div><div class="m"><span class="n">${esc(n)}</span>${sm?`<small>${sm}</small>`:""}</div><span class="p">${esc(pr(r[2]))}</span></div>`}).join("")}</div></section>`}).join("")}
function renderOffers(){const el=document.getElementById("offers");if(!el)return;
 el.innerHTML=OFFERS.length?OFFERS.map((o,i)=>{const x=o[lang]||o.pl,ph=o.art==="card"?`<div class="ph stampcard" aria-hidden="true"><b>KEBAB 05-800</b><span>${"<i></i>".repeat(10)}</span></div>`:`<div class="ph"><img src="images/${o.img}.webp" width="800" height="600" alt="" loading="lazy" decoding="async"></div>`;
  return `<article class="promo${i%2?" rev":""}">${ph}<div class="pt"><span class="tag">${esc(x.tag)}</span><h2>${esc(x.title)}</h2><p>${esc(x.text)}</p>${x.points.length?`<ul>${x.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>`:""}${o.price?`<p class="big">${esc(o.price)}</p>`:""}<a class="btn fill" href="${esc(o.href)}">${esc(x.cta).toUpperCase()}</a></div></article>`}).join(""):`<div class="empty"><h3>${EMPTY[lang][0]}</h3><p>${EMPTY[lang][1]}</p></div>`}
const LN=[["pyszne","Pyszne.pl"],["glovo","Glovo"],["uber","Uber Eats"],["facebook","Facebook"]];
function renderLinks(){let any=false;document.querySelectorAll(".olinks").forEach(c=>{const h=LN.filter(([k])=>LINKS[k]).map(([k,n])=>`<a href="${esc(LINKS[k])}" target="_blank" rel="noopener">${n}</a>`).join("");c.innerHTML=h;if(h)any=true});
 document.querySelectorAll(".olinks-wrap").forEach(w=>w.hidden=!any)}
document.querySelectorAll("[data-i]").forEach(e=>e.dataset.pl=e.innerHTML);
function setLang(l){lang=l;try{localStorage.setItem("lang",l)}catch(e){}
 document.documentElement.lang=l;
 document.querySelectorAll("[data-i]").forEach(e=>{const t=(I[l]||{})[e.dataset.i];e.innerHTML=t!==undefined?t:e.dataset.pl});
 [["ia","alt"],["it","title"],["al","aria-label"]].forEach(([a,at])=>document.querySelectorAll("[data-"+a+"]").forEach(e=>{if(!e.dataset["o"+a])e.dataset["o"+a]=e.getAttribute(at)||"";const t=(I[l]||{})[e.dataset[a]];e.setAttribute(at,t!==undefined?t:e.dataset["o"+a])}));
 const pg=(document.body.dataset.page||"index.html").replace(".html","");
 document.title=I[l]["t_"+pg]||I.pl["t_"+pg]||document.title;
 const md=document.querySelector('meta[name="description"]');if(md)md.content=I[l]["d_"+pg]||I.pl["d_"+pg]||md.content;
 document.querySelectorAll(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
 renderMenu();renderOffers();renderLinks()}
document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
setLang(lang);
const cur=document.body.dataset.page;
document.querySelectorAll("nav[aria-label] a,footer nav a").forEach(a=>{if(a.getAttribute("href")===cur)a.setAttribute("aria-current","page")});
const hd=document.querySelector("header");
const hh=()=>document.documentElement.style.setProperty("--hh",(hd?hd.offsetHeight:64)+"px");hh();addEventListener("resize",hh);
document.getElementById("y").textContent=new Date().getFullYear();
if(location.hash){const t=document.getElementById(location.hash.slice(1));if(t)setTimeout(()=>t.scrollIntoView(),50)}
