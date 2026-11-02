/* YOUR SETTINGS
   1) LINKS: paste your real URLs between the quotes. Empty links are simply not shown.
   2) OFFERS: current promotions (pl / en / uk). Delete an entry to remove it; empty list shows "coming soon". */
const LINKS={pyszne:"",glovo:"",uber:"",facebook:""};
const OFFERS=[
{img:"home-kanapki",href:"menu.html#kanapki-kebab",
 pl:{tag:"SPECJAŁ",title:"Ser gratis",text:"Wybierz wersję Specjał, a ser dostaniesz gratis.",points:["Kanapki kebab: cienki, gruby, amerykański","Mięso kraftowe: cienki, gruby, amerykański","Tortilla lub pita, z surówkami, ogórkami, pomidorami i sosem"],cta:"Zobacz kanapki"},
 en:{tag:"SPECIAL",title:"Free cheese",text:"Choose the Special version and get cheese for free.",points:["Kebab sandwiches: thin, thick, American","Craft meat: thin, thick, American","Tortilla or pita, with salads, cucumbers, tomatoes and sauce"],cta:"See sandwiches"},
 uk:{tag:"СПЕЦІАЛ",title:"Сир безкоштовно",text:"Оберіть версію Спеціал, і сир буде безкоштовно.",points:["Кебаб-сендвічі: тонкий, товстий, американський","Крафтове м'ясо: тонкий, товстий, американський","Тортилья або піта, із салатами, огірками, помідорами та соусом"],cta:"Дивитись сендвічі"}},
{img:"home-box",href:"menu.html#kebab-box",price:"22 zł (S) · 26 zł (M) · 32 zł (XL)",
 pl:{tag:"KEBAB BOX",title:"Jedna cena, wiele smaków",text:"Każdy box w wybranym rozmiarze kosztuje tyle samo. Kurczak lub baranina; samo mięso: dopłata 3 zł.",points:["Kebab box, kalmary, nuggets, onion rings","Chicken pops, chilli cheese nuggets, ryba smażona","Butterfly shrimps, torpedo shrimps, hot wings, strips"],cta:"Zobacz boxy"},
 en:{tag:"KEBAB BOX",title:"One price, many flavours",text:"Every box costs the same in the size you choose. Chicken or lamb; meat only: +3 zł.",points:["Kebab box, calamari, nuggets, onion rings","Chicken pops, chilli cheese nuggets, fried fish","Butterfly shrimps, torpedo shrimps, hot wings, strips"],cta:"See the boxes"},
 uk:{tag:"KEBAB BOX",title:"Одна ціна, багато смаків",text:"Кожен бокс обраного розміру коштує однаково. Курка або баранина; лише м'ясо: доплата 3 zł.",points:["Kebab box, кальмари, нагетси, цибулеві кільця","Chicken pops, нагетси чилі з сиром, смажена риба","Креветки «метелик», креветки «торпедо», hot wings, strips"],cta:"Дивитись бокси"}},
{art:"card",href:"contact.html",price:"-20 zł · -50 zł · -100 zł",
 pl:{tag:"KARTA LOJALNOŚCIOWA",title:"Zbieraj pieczątki i odbieraj rabaty",text:"Pytaj o kartę lojalnościową przy zamówieniu. Za zebrane pieczątki czekają rabaty.",points:[],cta:"Zapytaj w lokalu"},
 en:{tag:"LOYALTY CARD",title:"Collect stamps and get discounts",text:"Ask for a loyalty card when you order. Collected stamps earn you discounts.",points:[],cta:"Ask in store"},
 uk:{tag:"КАРТКА ЛОЯЛЬНОСТІ",title:"Збирайте штампи й отримуйте знижки",text:"Просіть картку лояльності під час замовлення. За зібрані штампи — знижки.",points:[],cta:"Запитайте в закладі"}},
{img:"home-kraftowe",href:"tel:+48501199755",price:"501 199 755",
 pl:{tag:"DOSTAWA",title:"Zamów do domu",text:"Zadzwoń lub zamów online. Czynne codziennie 8:00 – 23:00.",points:[],cta:"Zadzwoń"},
 en:{tag:"DELIVERY",title:"Order to your door",text:"Call or order online. Open every day 8:00 – 23:00.",points:[],cta:"Call"},
 uk:{tag:"ДОСТАВКА",title:"Замовляйте додому",text:"Телефонуйте або замовляйте онлайн. Щодня 8:00 – 23:00.",points:[],cta:"Зателефонувати"}}
];
const EMPTY={pl:["Nowe oferty wkrótce","Sprawdź tu ponownie albo zadzwoń: 501 199 755."],en:["New offers coming soon","Check back or call: 501 199 755."],uk:["Нові акції скоро","Завітайте пізніше або телефонуйте: 501 199 755."]};
