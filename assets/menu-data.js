/* Menu data: M = categories and dishes, CT/DT = EN and UK translations. */
const M=[
["Kanapki kebab","Tortilla lub pita. Mięso, surówki, ogórki, pomidory, sos. Specjał: ser gratis.",[
["Cienki","kurczak, baranina lub mieszane","20 / 24 / 29 / 33 zł"],
["Gruby","kurczak, baranina lub mieszane","24 / 28 / 32 / 36 zł"],
["Amerykański","z mięsem i frytkami","21 / 26 / 30 / 34 zł"],
["Samo mięso","","24 / 28 / 32 / 38 zł"],
["Falafel","","15 / 18 / 22 / 26 zł"]]],
["Mięso kraftowe","Tortilla lub pita. Mięso, surówki, ogórki, pomidory, sos. Specjał: ser gratis.",[
["Cienki","","28 / 34 / 40 zł"],["Gruby","","30 / 35 / 40 zł"],["Amerykański","kebab z mięsem i frytkami","29 / 35 / 40 zł"],["Samo mięso","","32 / 38 / 42 zł"]]],
["Burgery","Normalny / powiększony",[["Burger wołowy","","22 / 30 zł"],["Burger kurczak","","22 / 30 zł"]]],
["Dania główne","",[
["Talerz z kurczakiem","","30 / 35 / 40 zł"],["Talerz z baraniną","","30 / 35 / 40 zł"],["Greckie z wołowiną lub kurczakiem","","30 / 35 / 40 zł"],
["Kapsalon","","25 / 31 zł"],["Pierś z kurczaka","","30 zł"],["Talerz smażona ryba","","31 / 35 zł"],["Fish and chips","","31 / 35 zł"],["Talerz falafel","","19 / 23 / 27 zł"],
["Fajita","grillowane kawałki kurczaka, papryka, pieczarki, cebula, surówki, frytki, sos","45 zł"],["Philadelphia","grillowane kawałki, papryka, pieczarki, cebula, surówki, frytki, sos","45 zł"],["Libański specjał grill mix","grillowane mięso, papryka, pieczarki, cebula, surówki, frytki, sos","45 zł"]]],
["Kebab box","S / M / XL. Kurczak lub baranina, samo mięso: dopłata 3 zł.",[
["Kebab box","","22 / 26 / 32 zł"],["Kalmary","","22 / 26 / 32 zł"],["Nuggets","","22 / 26 / 32 zł"],["Onion rings","","22 / 26 / 32 zł"],["Chicken pops","","22 / 26 / 32 zł"],["Chilli cheese nuggets","","22 / 26 / 32 zł"],["Ryba smażona","","22 / 26 / 32 zł"],["Butterfly shrimps","","22 / 26 / 32 zł"],["Torpedo shrimps","","22 / 26 / 32 zł"],["Hot wings","","22 / 26 / 32 zł"],["Strips","","22 / 26 / 32 zł"]]],
["Sałatki","",[["Sałatka firmowa","","12 zł"],["Sałatka grecka","","18 zł"],["Sałatka szefa","","30 zł"]]],
["Dodatki i deser","",[["Ryż","","10 zł"],["Frytki","","12 / 18 zł"],["Frytki kręcone","","14 / 20 zł"],["Dodatkowe mięso","","9 zł"],["Sosy","","4 zł"],["Baklava","","10 zł"]]],
["Napoje","0,33 l / 0,5 l / 1 l",[["Ayran","","7 zł"],["Woda","","7 zł"],["Coca-Cola, Pepsi, Mirinda, 7Up","","7 / 9 / 12 zł"],["Mountain Dew, Lipton Ice Tea","","7 / 9 / 12 zł"],["Soki (mango, owocowy)","","od 8 zł"],["Red Bull","","12 zł"],["Tiger","","8 zł"]]]
];
const CT=[
["Kebab sandwiches","Tortilla or pita. Meat, salads, cucumbers, tomatoes, sauce. Special: free cheese.","Kebab-сендвічі","Тортилья або піта. М'ясо, салати, огірки, помідори, соус. Спеціал: сир безкоштовно."],
["Craft meat","Tortilla or pita. Meat, salads, cucumbers, tomatoes, sauce. Special: free cheese.","Крафтове м'ясо","Тортилья або піта. М'ясо, салати, огірки, помідори, соус. Спеціал: сир безкоштовно."],
["Burgers","Regular / large","Бургери","Звичайний / збільшений"],
["Main dishes","","Основні страви",""],
["Kebab box","S / M / XL. Chicken or lamb; meat only: +3 zł.","Kebab box","S / M / XL. Курка або баранина; лише м'ясо: доплата 3 zł."],
["Salads","","Салати",""],
["Sides and dessert","","Додатки та десерт",""],
["Drinks","0.33 l / 0.5 l / 1 l","Напої","0,33 л / 0,5 л / 1 л"]];
const DT={
"kurczak, baranina lub mieszane":["chicken, lamb or mixed","курка, баранина або мікс"],
"z mięsem i frytkami":["with meat and fries","з м'ясом і картоплею фрі"],
"kebab z mięsem i frytkami":["kebab with meat and fries","кебаб з м'ясом і картоплею фрі"],
"grillowane kawałki kurczaka, papryka, pieczarki, cebula, surówki, frytki, sos":["grilled chicken pieces, peppers, mushrooms, onion, salads, fries, sauce","гриль-шматочки курки, перець, печериці, цибуля, салати, картопля фрі, соус"],
"grillowane kawałki, papryka, pieczarki, cebula, surówki, frytki, sos":["grilled pieces, peppers, mushrooms, onion, salads, fries, sauce","гриль-шматочки, перець, печериці, цибуля, салати, картопля фрі, соус"],
"grillowane mięso, papryka, pieczarki, cebula, surówki, frytki, sos":["grilled meat, peppers, mushrooms, onion, salads, fries, sauce","гриль-м'ясо, перець, печериці, цибуля, салати, картопля фрі, соус"]};
