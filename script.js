// --- CONFIGURAÇÕES PRINCIPAIS ---
const WHATSAPP_NUMBER = "5543988024099"; // Substitua pelo número real da pizzaria

// --- BANCO DE DADOS: PREÇOS DAS PIZZAS ---
const pizzaPrices = {
  executiva: { "4 fatias": 54.90, "6 fatias": 65.90, "8 fatias": 75.90, "12 fatias": 85.90 },
  tradicional: { "4 fatias": 44.90, "6 fatias": 50.90, "8 fatias": 59.90, "12 fatias": 66.90 },
  especial: { "4 fatias": 48.90, "6 fatias": 55.90, "8 fatias": 67.90, "12 fatias": 76.90 },
  doce: { "4 fatias": 45.90, "6 fatias": 55.90, "8 fatias": 65.90, "12 fatias": 75.90 },
};

// --- BANCO DE DADOS: SABORES DE PIZZAS ---
const pizzaFlavors = [
  // EXECUTIVAS
  { id: "p501", name: "501 Alliche", tier: "executiva", category: "salgada", desc: "Mussarela, tomate, filé de anchova, orégano e azeitonas." },
  { id: "p502", name: "502 Camarão com brócolis", tier: "executiva", category: "salgada", desc: "Mussarela, camarão ao molho, brócolis, orégano e azeitonas." },
  { id: "p503", name: "503 Camarão com catupiry", tier: "executiva", category: "salgada", desc: "Mussarela, camarão ao molho, catupiry, orégano e azeitonas." },
  { id: "p504", name: "504 Carne seca", tier: "executiva", category: "salgada", desc: "Mussarela, carne seca, tomate picado, cebola, orégano e azeitonas." },
  { id: "p505", name: "505 Clássica", tier: "executiva", category: "salgada", desc: "Mussarela, peito de peru defumado, catupiry, orégano e azeitonas." },
  { id: "p506", name: "506 Mussarela de búfala", tier: "executiva", category: "salgada", desc: "Mussarela, mussarela de búfala, tomate cereja, manjericão, orégano e azeitonas." },
  { id: "p507", name: "507 Peruana", tier: "executiva", category: "salgada", desc: "Mussarela, peito de peru, palmito, ervilha, ovo, cebola, orégano e azeitonas." },
  { id: "p508", name: "508 Strogonoff de camarão", tier: "executiva", category: "salgada", desc: "Mussarela, camarão ao molho, batata palha, orégano e azeitonas." },
  { id: "p509", name: "509 Veneza", tier: "executiva", category: "salgada", desc: "Mussarela, peito de peru defumado, cheddar, alho frito, orégano e azeitonas." },
  { id: "p510", name: "510 Carne seca com catupiry", tier: "executiva", category: "salgada", desc: "Mussarela, carne seca, catupiry, tomate, cebola, orégano e azeitonas." },
  { id: "p511", name: "511 Carne seca com cheddar", tier: "executiva", category: "salgada", desc: "Mussarela, carne seca, cheddar, tomate, cebola, orégano e azeitonas." },
  // ESPECIAIS
  { id: "p201", name: "201 4 Estações", tier: "especial", category: "salgada", desc: "Mussarela, bacon, presunto, catupiry, champignon, alho frito, orégano e azeitonas." },
  { id: "p202", name: "202 4 Queijos", tier: "especial", category: "salgada", desc: "Mussarela, gorgonzola, provolone, catupiry, orégano e azeitonas." },
  { id: "p203", name: "203 4 Queijos especial", tier: "especial", category: "salgada", desc: "Mussarela, gorgonzola, provolone, catupiry, bacon, orégano e azeitonas." },
  { id: "p204", name: "204 Atum", tier: "especial", category: "salgada", desc: "Mussarela, atum, cebola, orégano e azeitonas." },
  { id: "p205", name: "205 Atum com brócolis", tier: "especial", category: "salgada", desc: "Mussarela, atum, brócolis, champignon, orégano e azeitonas." },
  { id: "p206", name: "206 Baiana especial", tier: "especial", category: "salgada", desc: "Mussarela, calabresa, ovo, tomate, pimenta, cebola, orégano e azeitonas." },
  { id: "p207", name: "207 Brasileirinha", tier: "especial", category: "salgada", desc: "Mussarela, presunto, bacon, cebola, catupiry, azeitonas fatiadas e orégano." },
  { id: "p208", name: "208 Brócolis com palmito", tier: "especial", category: "salgada", desc: "Mussarela, brócolis, palmito, orégano e azeitonas." },
  { id: "p209", name: "209 Caipira", tier: "especial", category: "salgada", desc: "Mussarela, frango, catupiry, milho, orégano e azeitonas." },
  { id: "p210", name: "210 Camponesa", tier: "especial", category: "salgada", desc: "Mussarela, palmito, bacon, ovo, milho, orégano e azeitonas." },
  { id: "p211", name: "211 Capri", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, bacon, cebola, provolone, orégano e azeitonas." },
  { id: "p212", name: "212 Carbonara", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, cebola, ovo, milho, provolone e orégano." },
  { id: "p213", name: "213 Coreana", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, champignon, cheddar, orégano e azeitonas." },
  { id: "p214", name: "214 Da casa", tier: "especial", category: "salgada", desc: "Mussarela, frango, presunto, palmito, ervilha, tomate, orégano e azeitonas." },
  { id: "p215", name: "215 Del pizzolo", tier: "especial", category: "salgada", desc: "Mussarela, atum, palmito, champignon, cebola, orégano e azeitonas." },
  { id: "p216", name: "216 Dinapoli", tier: "especial", category: "salgada", desc: "Mussarela, brócolis, palmito, alho frito, orégano e azeitonas." },
  { id: "p217", name: "217 Domênica", tier: "especial", category: "salgada", desc: "Mussarela, palmito, alho frito, tomate seco, orégano e azeitonas." },
  { id: "p218", name: "218 Escarola especial", tier: "especial", category: "salgada", desc: "Mussarela, escarola, catupiry, tomate seco, orégano e azeitonas." },
  { id: "p219", name: "219 Executiva", tier: "especial", category: "salgada", desc: "Mussarela, frango, catupiry, bacon, lombo canadense, orégano e azeitonas." },
  { id: "p220", name: "220 Fiorentina", tier: "especial", category: "salgada", desc: "Mussarela, presunto, palmito, bacon, orégano e azeitonas." },
  { id: "p221", name: "221 Frango com bacon", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, bacon, orégano e azeitonas." },
  { id: "p222", name: "222 Frango com catupiry", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, catupiry, orégano e azeitonas." },
  { id: "p223", name: "223 Frango com cheddar", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, cheddar, orégano e azeitonas." },
  { id: "p224", name: "224 Frango com mussarela", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, tomate, orégano e azeitonas." },
  { id: "p225", name: "225 Frango com palmito", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, palmito, orégano e azeitonas." },
  { id: "p226", name: "226 Havaiana", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, abacaxi, orégano e azeitonas." },
  { id: "p227", name: "227 Italiana", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, brócolis, bacon, orégano e azeitonas." },
  { id: "p228", name: "228 Lombo com bacon", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, bacon, orégano e azeitonas." },
  { id: "p229", name: "229 Lombo com brócolis", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, brócolis, orégano e azeitonas." },
  { id: "p230", name: "230 Lombo com catupiry", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, catupiry, orégano e azeitonas." },
  { id: "p231", name: "231 Lombo com cheddar", tier: "especial", category: "salgada", desc: "Mussarela, lombo canadense, cheddar, orégano e azeitonas." },
  { id: "p232", name: "232 Marguerita especial", tier: "especial", category: "salgada", desc: "Mussarela, tomate seco, manjericão, orégano e azeitonas." },
  { id: "p233", name: "233 Palmito", tier: "especial", category: "salgada", desc: "Mussarela, palmito, tomate, orégano e azeitonas." },
  { id: "p234", name: "234 Pappa’s dog", tier: "especial", category: "salgada", desc: "Mussarela, frango desfiado, salsicha, bacon, tomate, orégano e azeitonas." },
  { id: "p235", name: "235 Parmegiana", tier: "especial", category: "salgada", desc: "Mussarela, calabresa, cheddar, cebola, orégano e azeitonas." },
  { id: "p236", name: "236 Paulistana", tier: "especial", category: "salgada", desc: "Mussarela, calabresa, palmito, bacon, catupiry, cebola, orégano e azeitonas." },
  { id: "p237", name: "237 Pepperoni com cheddar", tier: "especial", category: "salgada", desc: "Mussarela, salame pepperoni, cheddar, orégano e azeitonas." },
  { id: "p238", name: "238 Pizza do rafa", tier: "especial", category: "salgada", desc: "Mussarela, frango, bacon, champignon, catupiry, orégano e azeitonas." },
  { id: "p239", name: "239 Pizza VIP", tier: "especial", category: "salgada", desc: "Mussarela, frango, catupiry, bacon, champignon, ovo, tomate, orégano e azeitonas." },
  { id: "p240", name: "240 Rúcula com tomate seco", tier: "especial", category: "salgada", desc: "Mussarela, rúcula, tomate seco, orégano e azeitonas." },
  { id: "p241", name: "241 Siciliana", tier: "especial", category: "salgada", desc: "Mussarela, bacon, champignon, calabresa, cebola, orégano e azeitonas." },
  { id: "p242", name: "242 Strogonoff de carne", tier: "especial", category: "salgada", desc: "Mussarela, strogonoff de carne, champignon, batata palha, orégano e azeitonas." },
  { id: "p243", name: "243 Strogonoff de frango", tier: "especial", category: "salgada", desc: "Mussarela, strogonoff de frango, batata palha, orégano e azeitonas." },
  { id: "p244", name: "244 Suprema", tier: "especial", category: "salgada", desc: "Mussarela, rúcula, tomate seco, palmito, orégano e azeitonas." },
  { id: "p245", name: "245 Toscana", tier: "especial", category: "salgada", desc: "Mussarela, linguiça toscana, palmito, ovo, bacon, cebola, orégano e azeitonas." },
  { id: "p246", name: "246 Turim", tier: "especial", category: "salgada", desc: "Mussarela, atum, champignon, catupiry, orégano e azeitonas." },
  { id: "p247", name: "247 Vegetariana", tier: "especial", category: "salgada", desc: "Mussarela, brócolis, milho, palmito, champignon, orégano e azeitonas." },
  // TRADICIONAIS
  { id: "p101", name: "101 Alho", tier: "tradicional", category: "salgada", desc: "Mussarela, alho frito, orégano e azeitonas." },
  { id: "p102", name: "102 Bacon", tier: "tradicional", category: "salgada", desc: "Mussarela, bacon, cebola, orégano e azeitonas." },
  { id: "p103", name: "103 Banana caramelizada", tier: "tradicional", category: "salgada", desc: "Mussarela, banana, canela e caramelo." },
  { id: "p104", name: "104 Bolonhesa", tier: "tradicional", category: "salgada", desc: "Mussarela, carne moída, tomate, orégano e azeitonas." },
  { id: "p105", name: "105 Calabresa", tier: "tradicional", category: "salgada", desc: "Mussarela, calabresa, cebola, orégano e azeitonas." },
  { id: "p106", name: "106 Catupiry", tier: "tradicional", category: "salgada", desc: "Mussarela, catupiry, tomate, orégano e azeitonas." },
  { id: "p107", name: "107 Cebola com alho frito", tier: "tradicional", category: "salgada", desc: "Mussarela, cebola, alho frito, orégano e azeitonas." },
  { id: "p108", name: "108 Chilena", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, pimentão, ovo, cebola, orégano e azeitonas." },
  { id: "p109", name: "109 Com e bacon", tier: "tradicional", category: "salgada", desc: "Mussarela, milho, bacon e orégano, azeitonas." },
  { id: "p110", name: "110 Cubana", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, bacon, abacaxi, orégano e azeitonas." },
  { id: "p111", name: "111 Escarola com bacon", tier: "tradicional", category: "salgada", desc: "Mussarela, escarola, bacon, cebola, orégano e azeitonas." },
  { id: "p112", name: "112 Espanhola", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, ovo, cebola, orégano e azeitonas." },
  { id: "p113", name: "113 Frangalho", tier: "tradicional", category: "salgada", desc: "Mussarela, frango desfiado, tomate, alho frito, orégano e azeitonas." },
  { id: "p114", name: "114 Grega", tier: "tradicional", category: "salgada", desc: "Mussarela, carne moída, abacaxi, tomate, orégano e azeitonas." },
  { id: "p115", name: "115 Hot dog", tier: "tradicional", category: "salgada", desc: "Mussarela, salsicha, milho, ervilha, batata palha, orégano e azeitonas." },
  { id: "p116", name: "116 Lusitana", tier: "tradicional", category: "salgada", desc: "Mussarela, calabresa, ovo, bacon, orégano e azeitonas." },
  { id: "p117", name: "117 Marguerita", tier: "tradicional", category: "salgada", desc: "Mussarela, manjericão, tomate, orégano e azeitonas." },
  { id: "p118", name: "118 Mexicana", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, pimenta, orégano e azeitonas." },
  { id: "p119", name: "119 Milho", tier: "tradicional", category: "salgada", desc: "Mussarela, milho, tomate, orégano e azeitonas." },
  { id: "p120", name: "120 Mussarela", tier: "tradicional", category: "salgada", desc: "Mussarela, tomate, orégano e azeitonas." },
  { id: "p121", name: "121 Napolitana", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, tomate, orégano e azeitonas." },
  { id: "p122", name: "122 Pepperoni", tier: "tradicional", category: "salgada", desc: "Mussarela, salame pepperoni, orégano e azeitonas." },
  { id: "p123", name: "123 Portuguesa", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, ervilha, ovo, cebola, orégano e azeitonas." },
  { id: "p124", name: "124 Qualquer uma", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, bacon, milho, orégano e azeitonas." },
  { id: "p125", name: "125 Romanesca", tier: "tradicional", category: "salgada", desc: "Mussarela, presunto, bacon, champignon, orégano e azeitonas." },
  { id: "p126", name: "126 Romeu e julieta", tier: "tradicional", category: "salgada", desc: "Mussarela, goiabada e leite condensado." },
  { id: "p127", name: "127 Sardinha", tier: "tradicional", category: "salgada", desc: "Mussarela, sardinha, milho, cebola, orégano e azeitonas." },
  { id: "p128", name: "128 Tropical", tier: "tradicional", category: "salgada", desc: "Mussarela, abacaxi e leite condensado." },
  // DOCES
  { id: "p301", name: "301 Banoffee", tier: "doce", category: "doce", desc: "Mussarela, banana, doce de leite e canela." },
  { id: "p302", name: "302 Beijinho", tier: "doce", category: "doce", desc: "Mussarela, chocolate branco, coco ralado, leite condensado e cereja." },
  { id: "p303", name: "303 Brigadeiro", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, granulado, leite condensado e cereja." },
  { id: "p304", name: "304 Califórnia", tier: "doce", category: "doce", desc: "Mussarela, pêssego em calda, figo em calda, abacaxi, cereja e leite condensado." },
  { id: "p305", name: "305 Chocoban", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, banana e cereja." },
  { id: "p306", name: "306 Confetes", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, confetes e cereja." },
  { id: "p307", name: "307 Crocante", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, paçoca, leite condensado e cereja." },
  { id: "p308", name: "308 Doçura", tier: "doce", category: "doce", desc: "Mussarela, doce de leite, coco em flocos e leite condensado." },
  { id: "p309", name: "309 Dois amores", tier: "doce", category: "doce", desc: "Mussarela, chocolate branco, chocolate ao leite, leite condensado e cereja." },
  { id: "p310", name: "310 Kitkat", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, kitkat, leite condensado e cereja." },
  { id: "p311", name: "311 Ouro branco", tier: "doce", category: "doce", desc: "Mussarela, chocolate branco, bombom ouro branco, leite condensado e cereja." },
  { id: "p312", name: "312 Prestígio", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, coco em flocos, leite condensado e cereja." },
  { id: "p313", name: "313 Sensação", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, morangos em calda e calda de morango." },
  { id: "p314", name: "314 Sonho de valsa", tier: "doce", category: "doce", desc: "Mussarela, chocolate ao leite, bombom sonho de valsa, leite condensado e cereja." }
];

// --- BANCO DE DADOS: ESFIHAS ---
const esfihasSalgadas = [
  { id: "es1", name: "Esfiha de Pepperoni", desc: "Mussarela e pepperoni", price: 6.49 },
  { id: "es2", name: "Esfiha de Bacon", desc: "Bacon e mussarela.", price: 6.90 },
  { id: "es3", name: "Esfiha Aberta de Atum", desc: "Mussarela e atum", price: 6.90 },
  { id: "es4", name: "Esfiha de Carne Seca", desc: "Mussarela e carne seca", price: 6.90 },
  { id: "es5", name: "Esfiha de Brócolis com Bacon", desc: "Mussarela, brócolis e bacon", price: 6.90 },
  { id: "es6", name: "Esfiha de Carne", desc: "Carne temperada", price: 4.99 },
  { id: "es7", name: "Esfiha de Queijo", desc: "Mussarela", price: 4.99 },
  { id: "es8", name: "Esfiha de Presunto e Queijo", desc: "Mussarela e presunto", price: 4.99 },
  { id: "es9", name: "Esfiha de Calabresa", desc: "Calabresa fatiada e cebola", price: 4.99 },
  { id: "es10", name: "Esfiha de Frango com Catupiry", desc: "Frango e Catupiry", price: 5.99 },
  { id: "es11", name: "Esfiha de Frango com Cheddar", desc: "Frango e Cheddar", price: 5.99 },
  { id: "es12", name: "Esfiha de Frango com Queijo", desc: "Frango e Mussarela", price: 5.99 },
  { id: "es13", name: "Esfiha de Carne com Queijo", desc: "Carne temperada e mussarela.", price: 5.99 },
  { id: "es14", name: "Esfiha de Calabresa com Queijo", desc: "Calabresa, cebola e mussarela.", price: 5.99 },
  { id: "es15", name: "Esfiha de Brócolis", desc: "Mussarela e brócolis", price: 5.99 }
];

const esfihasDoces = [
  { id: "ed1", name: "Esfiha de Sensação", desc: "Chocolate ao leite e morango em calda", price: 6.49 },
  { id: "ed2", name: "Esfiha de Sonho de Valsa", desc: "Chocolate ao leite e Sonho de Valsa", price: 6.90 },
  { id: "ed3", name: "Esfiha de Ouro Branco", desc: "Chocolate ao leite e Ouro Branco", price: 6.90 },
  { id: "ed4", name: "Esfiha de Kit Kat", desc: "Chocolate ao leite e Kit Kat", price: 6.90 },
  { id: "ed5", name: "Esfiha de Banana com Canela", desc: "Mussarela, banana e canela", price: 4.99 },
  { id: "ed6", name: "Esfiha de Romeu e Julieta", desc: "Mussarela e goiabada", price: 4.99 },
  { id: "ed7", name: "Esfiha de Doce de leite", desc: "Mussarela e doce de leite", price: 4.99 },
  { id: "ed8", name: "Esfiha de Brigadeiro", desc: "Chocolate ao leite e granulado", price: 5.99 },
  { id: "ed9", name: "Esfiha de Paçoca", desc: "Chocolate ao leite e paçoca", price: 5.99 },
  { id: "ed10", name: "Esfiha de Beijinho", desc: "Chocolate branco e coco em flocos", price: 6.49 },
  { id: "ed11", name: "Esfiha de Prestígio", desc: "Chocolate ao leite e coco em flocos", price: 6.49 }
];

// --- BANCO DE DADOS: BEBIDAS ---
const drinksData = [
  { id: "b1", name: "Sprite Original 2L", desc: "Garrafa 2L", price: 14.90 },
  { id: "b2", name: "Suco Natú Uva 900ml", desc: "Garrafa 900ml", price: 19.50 },
  { id: "b3", name: "Fanta Uva 2L", desc: "Garrafa 2L", price: 14.90 },
  { id: "b4", name: "Coca-Cola sem Açúcar 350ml", desc: "Lata 350ml", price: 5.99 },
  { id: "b5", name: "Refrigerante Laranja Refriko 2L", desc: "Garrafa 2L", price: 9.99 },
  { id: "b6", name: "Refrigerante Limão Refriko 2L", desc: "Garrafa 2L", price: 9.99 },
  { id: "b7", name: "Refrigerante Tubaina Refriko 2L", desc: "Garrafa 2L", price: 9.99 },
  { id: "b8", name: "Refrigerante Uva Refriko 2L", desc: "Garrafa 2L", price: 9.99 },
  { id: "b9", name: "Guaraná Antarctica 2L", desc: "Garrafa 2L", price: 14.90 },
  { id: "b10", name: "Refrigerante Guaraná Refriko 2L", desc: "Garrafa 2L", price: 9.99 },
  { id: "b11", name: "Refrigerante Pepsi 2L", desc: "Garrafa 2L", price: 14.90 },
  { id: "b12", name: "Pepsi Black Sem Açúcar 2L", desc: "Garrafa 2L", price: 14.90 },
  { id: "b13", name: "Cerveja Chopp Brahma 350ml", desc: "Apenas maiores de 18 anos", price: 7.49 },
  { id: "b14", name: "Cerveja Skol Pilsen 350ml", desc: "Apenas maiores de 18 anos", price: 7.49 },
  { id: "b15", name: "Chopp Vinho Bella Roma 473ml", desc: "Apenas maiores de 18 anos", price: 11.99 },
  { id: "b16", name: "Coca-Cola Original 1L", desc: "Garrafa 1L", price: 9.99 },
  { id: "b17", name: "Coca-Cola Original 2L", desc: "Garrafa 2L", price: 16.99 },
  { id: "b18", name: "Coca-Cola Original 350ml", desc: "Lata 350ml", price: 5.99 },
  { id: "b19", name: "Coca-Cola Original 600ml", desc: "Garrafa 600ml", price: 7.99 },
  { id: "b20", name: "Coca-Cola sem Açúcar 1L", desc: "Garrafa 1L", price: 9.99 },
  { id: "b21", name: "Coca-Cola sem Açúcar 2L", desc: "Garrafa 2L", price: 16.99 },
  { id: "b22", name: "Fanta Laranja 2L", desc: "Garrafa 2L", price: 14.90 }
];


// --- ESTADO GLOBAL ---
let cart = [];
let customerData = {
  saved: false, name: "", phone: "", cpf: "", orderCode: "", deliveryMethod: "Entrega", address: "", paymentMethod: "Pix", change: ""
};
let builderState = { type: "", size: "", basePrice: 0, border: "Sem borda recheada", borderPrice: 0, qtyFlavors: 1, flavors: [], notes: "" };
let hasPromptedDrink = false;

// --- ELEMENTOS DO DOM ---
const els = {
  menuToggle: document.getElementById('menuToggle'),
  mainNav: document.getElementById('mainNav'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartOverlay: document.getElementById('cartOverlay'),
  cartBadge: document.getElementById('cartBadge'),
  
  esfihasSalgadasGrid: document.getElementById('esfihasSalgadasGrid'),
  esfihasDocesGrid: document.getElementById('esfihasDocesGrid'),
  drinksGrid: document.getElementById('drinksGrid'),
  
  pizzaBuilderModal: document.getElementById('pizzaBuilderModal'),
  drinkUpsellModal: document.getElementById('drinkUpsellModal'),
  confirmModal: document.getElementById('confirmModal'),
  
  customerDataSection: document.getElementById('customerDataSection'),
  cartItemsSection: document.getElementById('cartItemsSection'),
  checkoutForm: document.getElementById('checkoutForm'),
  customerCPF: document.getElementById('customerCPF'),
  deliveryMethod: document.getElementById('deliveryMethod'),
  addressLabel: document.getElementById('addressLabel'),
  paymentMethod: document.getElementById('paymentMethod'),
  changeLabel: document.getElementById('changeLabel'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartTotal: document.getElementById('cartTotal'),
  
  buildTypeSize: document.getElementById('buildTypeSize'),
  buildBorder: document.getElementById('buildBorder'),
  buildFlavorQty: document.getElementById('buildFlavorQty'),
  buildFlavorList: document.getElementById('buildFlavorList'),
  buildNotes: document.getElementById('buildNotes'),
  builderTotal: document.getElementById('builderTotal'),
  addPizzaToCartBtn: document.getElementById('addPizzaToCartBtn'),
  flavorWarning: document.getElementById('flavorWarning'),
  step2: document.getElementById('step2'),
  step3: document.getElementById('step3'),
  step4: document.getElementById('step4'),
  step5: document.getElementById('step5')
};


// --- INICIALIZAÇÃO ---
function init() {
  lucide.createIcons();
  renderMenus();
  populateBuilderTypeSize();
  bindEvents();
}

function renderMenus() {
  function createCard(item, isEsfiha = false) {
    return `
      <div class="menu-card">
        <div>
          <h4 class="menu-card-title">${item.name}</h4>
          <p class="menu-card-desc">${item.desc}</p>
        </div>
        <div class="menu-card-footer">
          <span class="menu-card-price">R$ ${item.price.toFixed(2).replace('.',',')}</span>
          <button class="btn btn-primary" onclick="addDirectToCart('${item.id}', '${item.name}', ${item.price}, ${isEsfiha})">
            <i data-lucide="plus" style="width:18px;"></i> Add
          </button>
        </div>
      </div>
    `;
  }
  els.esfihasSalgadasGrid.innerHTML = esfihasSalgadas.map(e => createCard(e, true)).join('');
  els.esfihasDocesGrid.innerHTML = esfihasDoces.map(e => createCard(e, true)).join('');
  els.drinksGrid.innerHTML = drinksData.map(d => createCard(d, false)).join('');
}

function populateBuilderTypeSize() {
  let options = `<option value="" disabled selected>Selecione o Tipo e Tamanho...</option>`;
  const order = ['executiva', 'especial', 'tradicional', 'doce'];
  
  order.forEach(type => {
    options += `<optgroup label="Pizzas ${type.charAt(0).toUpperCase() + type.slice(1)}s">`;
    Object.entries(pizzaPrices[type]).forEach(([size, price]) => {
      options += `<option value="${type}|${size}|${price}">${type.toUpperCase()} - ${size} - R$ ${price.toFixed(2).replace('.',',')}</option>`;
    });
    options += `</optgroup>`;
  });
  els.buildTypeSize.innerHTML = options;
}

// --- REGRAS DE CASCATA DA PIZZA ---
function handleTypeSizeChange() {
  const val = els.buildTypeSize.value;
  if(!val) return;
  const [type, size, price] = val.split('|');
  
  builderState.type = type;
  builderState.size = size;
  builderState.basePrice = parseFloat(price);
  builderState.flavors = [];
  builderState.border = "Sem borda recheada";
  builderState.borderPrice = 0;
  
  els.buildBorder.value = "Sem borda recheada";
  els.buildFlavorQty.value = "1";
  builderState.qtyFlavors = 1;

  els.step2.classList.remove('disabled'); els.buildBorder.disabled = false;
  els.step3.classList.remove('disabled'); els.buildFlavorQty.disabled = false;
  els.step4.classList.remove('disabled');
  els.step5.classList.remove('disabled'); els.buildNotes.disabled = false;
  
  document.getElementById('opt3sabores').style.display = (size === "8 fatias" || size === "12 fatias") ? "block" : "none";
  document.getElementById('opt4sabores').style.display = (size === "12 fatias") ? "block" : "none";

  renderBuilderFlavors();
  updateBuilderTotal();
}

function handleBorderChange() {
  const val = els.buildBorder.value;
  builderState.border = val;
  if(val.includes('Catupiry') || val.includes('Cheddar')) builderState.borderPrice = 10;
  else if(val.includes('Chocolate')) builderState.borderPrice = 12;
  else builderState.borderPrice = 0;
  updateBuilderTotal();
}

function getAllowedFlavors(type) {
  if (type === 'executiva') return pizzaFlavors.filter(f => f.category === 'salgada');
  else if (type === 'especial') return pizzaFlavors.filter(f => (f.tier === 'especial' || f.tier === 'tradicional') && f.category === 'salgada');
  else if (type === 'tradicional') return pizzaFlavors.filter(f => f.tier === 'tradicional' && f.category === 'salgada');
  else if (type === 'doce') return pizzaFlavors.filter(f => f.category === 'doce');
  return [];
}

function renderBuilderFlavors() {
  const allowed = getAllowedFlavors(builderState.type);
  els.buildFlavorList.innerHTML = allowed.map(f => `
    <label class="flavor-item">
      <input type="checkbox" value="${f.name}" class="flavor-checkbox" onchange="handleFlavorSelection(this)">
      <div class="flavor-info">
        <div class="flavor-name">${f.name} <span class="flavor-tier">${f.tier.toUpperCase()}</span></div>
        <div class="flavor-desc">${f.desc}</div>
      </div>
    </label>
  `).join('');
}

window.handleFlavorSelection = function(checkbox) {
  const checkboxes = document.querySelectorAll('.flavor-checkbox:checked');
  if(checkboxes.length > builderState.qtyFlavors) {
    checkbox.checked = false;
    els.flavorWarning.textContent = `(Permitido apenas ${builderState.qtyFlavors} sabor${builderState.qtyFlavors > 1 ? 'es' : ''})`;
    setTimeout(() => els.flavorWarning.textContent = '', 3000);
    return;
  }
  builderState.flavors = Array.from(checkboxes).map(cb => cb.value);
  validateBuilder();
};

function validateBuilder() {
  const isComplete = builderState.type && builderState.size && builderState.flavors.length > 0;
  els.addPizzaToCartBtn.disabled = !isComplete;
}

function updateBuilderTotal() {
  const total = builderState.basePrice + builderState.borderPrice;
  els.builderTotal.textContent = `R$ ${total.toFixed(2).replace('.',',')}`;
}

function addBuilderToCart() {
  const cartItem = {
    id: "pizza-" + Date.now(),
    isPizza: true,
    isDrink: false,
    name: `Pizza ${builderState.type.toUpperCase()} (${builderState.size})`,
    flavors: [...builderState.flavors],
    border: builderState.border,
    notes: els.buildNotes.value,
    price: builderState.basePrice + builderState.borderPrice,
    qty: 1
  };
  cart.push(cartItem);
  
  els.pizzaBuilderModal.classList.remove('active');
  els.buildTypeSize.value = "";
  els.buildBorder.value = "Sem borda recheada";
  [els.step2, els.step3, els.step4, els.step5].forEach(step => step.classList.add('disabled'));
  els.buildBorder.disabled = true; els.buildFlavorQty.disabled = true; els.buildNotes.disabled = true;
  els.buildFlavorList.innerHTML = ""; els.buildNotes.value = "";
  els.addPizzaToCartBtn.disabled = true;
  builderState = { type: "", size: "", basePrice: 0, border: "Sem borda recheada", borderPrice: 0, qtyFlavors: 1, flavors: [], notes: "" };
  
  updateCartUI();
  checkDrinkUpsell();
}

window.addDirectToCart = function(id, name, price, isFood) {
  const isDrink = !isFood;
  const existing = cart.find(item => item.id === id);
  if(existing) {
    existing.qty++;
  } else {
    cart.push({ id, name, price, qty: 1, isPizza: false, isDrink: isDrink });
  }
  
  updateCartUI();
  if(isFood) checkDrinkUpsell();
  
  els.cartDrawer.classList.add('active');
  els.cartOverlay.classList.add('active');
};


// --- LÓGICA DO CARRINHO E ETAPAS ---
function updateCartUI() {
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  els.cartBadge.textContent = totalItems;
  
  if (cart.length === 0) {
    els.cartItemsList.innerHTML = '<p class="empty-cart" style="text-align:center; color:var(--text-muted); padding: 20px;">Seu carrinho está vazio.</p>';
    els.cartTotal.textContent = 'R$ 0,00';
    return;
  }

  let totalValue = 0;
  els.cartItemsList.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    totalValue += itemTotal;
    
    if(item.isPizza) {
      return `
        <div class="cart-item">
          <div class="cart-item-header">
            <span>${item.name}</span>
            <span>R$ ${itemTotal.toFixed(2).replace('.',',')}</span>
          </div>
          <div class="cart-item-details">
            Sabores: ${item.flavors.join(' / ')}<br>
            Borda: ${item.border}
            ${item.notes ? `<br>Obs: ${item.notes}` : ''}
          </div>
          <div class="cart-item-actions">
            <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
            <span style="font-weight:bold; width: 20px; text-align:center;">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            <button class="remove-btn" onclick="removeItem(${index})"><i data-lucide="trash-2" style="width:16px;"></i> Remover</button>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="cart-item">
          <div class="cart-item-header">
            <span>${item.name}</span>
            <span>R$ ${itemTotal.toFixed(2).replace('.',',')}</span>
          </div>
          <div class="cart-item-actions" style="margin-top:10px; border-top:none; padding-top:0;">
            <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
            <span style="font-weight:bold; width: 20px; text-align:center;">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            <button class="remove-btn" onclick="removeItem(${index})"><i data-lucide="trash-2" style="width:16px;"></i> Remover</button>
          </div>
        </div>
      `;
    }
  }).join('');
  
  els.cartTotal.textContent = `R$ ${totalValue.toFixed(2).replace('.',',')}`;
  lucide.createIcons();
}

window.changeQty = function(index, delta) {
  cart[index].qty += delta;
  if(cart[index].qty <= 0) cart.splice(index, 1);
  updateCartUI();
};

window.removeItem = function(index) {
  cart.splice(index, 1);
  updateCartUI();
};

function toggleCartSteps() {
  if(customerData.saved) {
    els.customerDataSection.classList.remove('active');
    els.cartItemsSection.classList.add('active');
    document.getElementById('summaryName').innerHTML = `${customerData.name} <span style="color:var(--primary); font-size:0.9em; margin-left:5px;">(Pedido #${customerData.orderCode})</span>`;
    document.getElementById('summaryDetails').innerHTML = `CPF: ${customerData.cpf}<br>${customerData.deliveryMethod} | Pgto: ${customerData.paymentMethod}`;
  } else {
    els.customerDataSection.classList.add('active');
    els.cartItemsSection.classList.remove('active');
  }
}

// --- UPSELL DE BEBIDA ---
function checkDrinkUpsell() {
  if (hasPromptedDrink) return;
  const hasFood = cart.some(item => !item.isDrink);
  const hasDrink = cart.some(item => item.isDrink);

  if (hasFood && !hasDrink) {
    setTimeout(() => {
      els.drinkUpsellModal.classList.add('active');
      hasPromptedDrink = true;
    }, 600);
  }
}

// --- CONFERÊNCIA FINAL E WHATSAPP ---
function openConfirmModal() {
  if(cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }
  
  let html = `
    <div class="confirm-section">
      <h4>Dados do Cliente</h4>
      <p><strong>Código do Pedido:</strong> <span style="color:var(--primary); font-size:1.1rem; font-weight:bold;">#${customerData.orderCode}</span></p>
      <p><strong>Nome:</strong> ${customerData.name}</p>
      <p><strong>WhatsApp:</strong> ${customerData.phone}</p>
      <p><strong>CPF:</strong> ${customerData.cpf}</p>
      <p><strong>Entrega/Retirada:</strong> ${customerData.deliveryMethod}</p>
      ${customerData.deliveryMethod === 'Entrega' ? `<p><strong>Endereço:</strong> ${customerData.address}</p>` : ''}
    </div>
    <div class="confirm-section">
      <h4>Pagamento</h4>
      <p><strong>Forma:</strong> ${customerData.paymentMethod}</p>
      ${customerData.paymentMethod === 'Dinheiro' && customerData.change ? `<p><strong>Troco para:</strong> ${customerData.change}</p>` : ''}
    </div>
    <div class="confirm-section">
      <h4>Resumo do Pedido</h4>
  `;
  
  let total = 0;
  cart.forEach(item => {
    let itemT = item.price * item.qty;
    total += itemT;
    if(item.isPizza) {
      html += `<p style="margin-top: 10px;"><strong>${item.qty}x ${item.name}</strong> - R$ ${itemT.toFixed(2).replace('.',',')}<br>
               <span style="font-size:0.85em; color:var(--text-muted)">Sabores: ${item.flavors.join(', ')}<br>Borda: ${item.border} ${item.notes ? `<br>Obs: ${item.notes}` : ''}</span></p>`;
    } else {
      html += `<p style="margin-top: 10px;"><strong>${item.qty}x ${item.name}</strong> - R$ ${itemT.toFixed(2).replace('.',',')}</p>`;
    }
  });
  
  html += `</div>
    <div style="font-size:1.3rem; font-weight:bold; color:var(--primary); text-align:right; margin-top:15px; border-top: 1px solid var(--border-color); padding-top:10px;">
      Total: R$ ${total.toFixed(2).replace('.',',')}
    </div>
  `;
  
  document.getElementById('confirmData').innerHTML = html;
  
  els.cartDrawer.classList.remove('active');
  els.cartOverlay.classList.remove('active');
  els.confirmModal.classList.add('active');
}

function sendToWhatsApp() {
  let text = `*NOVO PEDIDO - PAPPA'S PIZZA*%0A%0A`;
  text += `*🏷️ Código do Pedido:* #${customerData.orderCode}%0A`;
  text += `*👤 Cliente:* ${customerData.name}%0A`;
  text += `*📄 CPF:* ${customerData.cpf}%0A`;
  text += `*📱 Telefone:* ${customerData.phone}%0A`;
  text += `*🛵 Método:* ${customerData.deliveryMethod}%0A`;
  if(customerData.deliveryMethod === 'Entrega') text += `*📍 Endereço:* ${customerData.address}%0A`;
  text += `*💳 Pagamento:* ${customerData.paymentMethod}%0A`;
  if(customerData.change) text += `*💵 Troco para:* ${customerData.change}%0A`;
  
  text += `%0A*--- ITENS DO PEDIDO ---*%0A`;
  let total = 0;
  cart.forEach(item => {
    let itemT = item.price * item.qty;
    total += itemT;
    if(item.isPizza) {
      text += `🍕 *${item.qty}x ${item.name}* - R$ ${itemT.toFixed(2).replace('.',',')}%0A`;
      text += `   ↳ Sabores: ${item.flavors.join(', ')}%0A`;
      text += `   ↳ Borda: ${item.border}%0A`;
      if(item.notes) text += `   ↳ Obs: ${item.notes}%0A`;
    } else {
      text += `🛍️ *${item.qty}x ${item.name}* - R$ ${itemT.toFixed(2).replace('.',',')}%0A`;
    }
  });
  
  text += `%0A*💰 TOTAL A PAGAR: R$ ${total.toFixed(2).replace('.',',')}*%0A`;
  
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, '_blank');
  els.confirmModal.classList.remove('active');
}

// --- EVENTOS E LISTENERS GERAIS ---
function bindEvents() {
  els.menuToggle.addEventListener('click', () => els.mainNav.classList.toggle('active'));
  
  // Carrinho Overlay/Close
  document.getElementById('openCartBtn').addEventListener('click', () => {
    els.cartDrawer.classList.add('active');
    els.cartOverlay.classList.add('active');
    toggleCartSteps();
  });
  els.cartOverlay.addEventListener('click', () => {
    els.cartDrawer.classList.remove('active');
    els.cartOverlay.classList.remove('active');
  });
  document.getElementById('closeCartBtn').addEventListener('click', () => {
    els.cartDrawer.classList.remove('active');
    els.cartOverlay.classList.remove('active');
  });

  // --- LÓGICA DA MÁSCARA DO CPF ---
  els.customerCPF.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (value.length > 11) value = value.slice(0, 11);
    
    // Aplicação visual da máscara (000.000.000-00)
    if (value.length > 9) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (value.length > 3) {
      value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
    e.target.value = value;
  });

  // Formulário do Cliente
  els.deliveryMethod.addEventListener('change', (e) => {
    els.addressLabel.style.display = e.target.value === 'Entrega' ? 'block' : 'none';
    document.getElementById('customerAddress').required = e.target.value === 'Entrega';
  });
  els.paymentMethod.addEventListener('change', (e) => {
    els.changeLabel.style.display = e.target.value === 'Dinheiro' ? 'block' : 'none';
  });
  
  // Submit Formulário de Dados
  els.checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validação do CPF
    const rawCpf = els.customerCPF.value.replace(/\D/g, '');
    if(rawCpf.length !== 11) {
      alert("Por favor, informe um CPF válido para gerar o código do pedido.");
      return;
    }
    
    // Geração do Código do Pedido (posições 7, 8, 9, 10 do CPF bruto - índices 6, 7, 8, 9)
    const orderCode = rawCpf.substring(6, 10);
    
    customerData = {
      saved: true,
      name: document.getElementById('customerName').value,
      phone: document.getElementById('customerPhone').value,
      cpf: els.customerCPF.value,
      orderCode: orderCode,
      deliveryMethod: els.deliveryMethod.value,
      address: document.getElementById('customerAddress').value,
      paymentMethod: els.paymentMethod.value,
      change: document.getElementById('customerChange').value
    };
    toggleCartSteps();
  });
  
  document.getElementById('editDataBtn').addEventListener('click', () => {
    customerData.saved = false;
    toggleCartSteps();
  });

  // Eventos do Modal Builder de Pizza
  document.getElementById('startOrderBtn').addEventListener('click', () => els.pizzaBuilderModal.classList.add('active'));
  document.getElementById('closeBuilderBtn').addEventListener('click', () => els.pizzaBuilderModal.classList.remove('active'));
  els.buildTypeSize.addEventListener('change', handleTypeSizeChange);
  els.buildBorder.addEventListener('change', handleBorderChange);
  els.buildFlavorQty.addEventListener('change', (e) => {
    builderState.qtyFlavors = parseInt(e.target.value);
    document.querySelectorAll('.flavor-checkbox').forEach(cb => cb.checked = false);
    builderState.flavors = [];
    validateBuilder();
  });
  els.addPizzaToCartBtn.addEventListener('click', addBuilderToCart);

  // Eventos Modal de Upsell (Aviso Bebida)
  document.getElementById('closeUpsellBtn').addEventListener('click', () => els.drinkUpsellModal.classList.remove('active'));
  document.getElementById('noDrinkBtn').addEventListener('click', () => els.drinkUpsellModal.classList.remove('active'));
  document.getElementById('goToDrinksBtn').addEventListener('click', () => {
    els.drinkUpsellModal.classList.remove('active');
    els.cartDrawer.classList.remove('active');
    els.cartOverlay.classList.remove('active');
    document.getElementById('bebidas').scrollIntoView({ behavior: 'smooth' });
  });

  // Eventos Modal Conferência
  document.getElementById('openConfirmModalBtn').addEventListener('click', openConfirmModal);
  document.getElementById('editOrderBtn').addEventListener('click', () => {
    els.confirmModal.classList.remove('active');
    els.cartDrawer.classList.add('active');
    els.cartOverlay.classList.add('active');
  });
  document.getElementById('sendToWhatsAppBtn').addEventListener('click', sendToWhatsApp);
}

// Start
document.addEventListener('DOMContentLoaded', init);