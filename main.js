// IF MASALALARI

// if1
// let a = +prompt("a = ")
// if (a>0) {
//     console.log(++a);
// } else {
//     console.log(a);
// }


// if2
// let a = +prompt("a = ")
// if (a>0) {
//     a += 1;
// } else if (a == 0) {
//     a = 10;
// } else {
//     a -= 2;
// }
// console.log(a);


// if3
// let sanogich = 0
// alert("3 ta musbat son kiriting")
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// if (Number.isInteger(a)) {
//     sanogich ++;
// }
// if (Number.isInteger(b)) {
//     sanogich ++;
// }
// if (Number.isInteger(c)) {
//     sanogich ++;
// }
// console.log(sanogich);


// if4
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }


// if5
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// if (a > b) {
//     console.log(2);
// } else {
//     console.log(1);
// }


// if6
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// if (a > b) {
//     console.log(a);
//     console.log(b);
// } else {
//     console.log(b);
//     console.log(a);
// }


// if7
// let a = +prompt("A = ")
// let b = +prompt("B = ")
// let d
// if (a > b) {
//     d = a;
//     a = b;
//     b = d;
// }
// console.log(a);
// console.log(b);


// if8
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = a + b;
// if (a != b) {
//     a = c;
//     b = c;
// }
//     else {
//     a = 0
//     b = 0
// }
// console.log(a);
// console.log(b);


// if9
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// if (a > b) {
//     b = a;
// } else if (b > a){
//     a = b;
// } else {
//     a = 0
//     b = 0
// }
// console.log(a);
// console.log(b);
   

// if10
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// if (a<b && a<c) {
//     console.log(a);
// } else if (b<a && b<c) {
//     console.log(b);
// } else {
//     console.log(c);
// }


// if11
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// if ((b<=a && a<=c) || (b>=a && a>=c)) {
//     console.log(a);
// } else if ((a<=b && b<=c) || (a>=b && b>=c)) {
//     console.log(b);
// } else {
//     console.log(c);
// }


// if12
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// if (a<b && a<c) {
//     console.log(b+c);
// } else if (b<a && b<c) {
//     console.log(a+c);
// }   else {
//        console.log(b+a);
// }


// if13
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// if (a<b && b<c) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// }   else {
//     a *= -1;
//     b *= -1;
//     c *= -1;
// }
// console.log(a);
// console.log(b);
// console.log(c);


// if14
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// if ((a<b && b<c) || (a>b && b>c)) {
//     a *= 2;
//     b *= 2;
//     c *= 2;
// }   else {
//     a *= -1;
//     b *= -1;
//     c *= -1;
// }
// console.log(a);
// console.log(b);
// console.log(c);


// if15
// alert("4 ta son kiriting va ulardan 3 tasi o'zaro teng bo'lsin")
// let a = +prompt("a = ")
// let b = +prompt("b = ")
// let c = +prompt("c = ")
// let d = +prompt("d = ")

// if (a==b && b==c) {
//     console.log(4);
// } else if (a==b && b==d) {
//     console.log(3);
// } else if (a==c && c==d) {
//     console.log(2);
// } else {
//     console.log(1);
// }


// if16
// let x = +prompt("x=")
// if (x<=0) {
//     x *= -1;
// } else if (x>=2) {
//     x = 4;
// } else {
//     x = x ** 2;
// }
// console.log(x);


// if17
// alert("Kabisa yilini aniqlaymiz")
// let yil = +prompt("Yilni kiriting:")
// if ( yil % 4 == 0) {
//     if ( ((yil % 100) * 100) % 400 == 0)
//         console.log("Kabisa yili 366");
// } else {
//     console.log(365);
// }


// if18
// let a = +prompt("a = ")
// let x=a/10;
// if (x<1) {
//     if (a%2==0) {
//         console.log("bir xonali juft son");
//     } else {
//         console.log("bir xonali toq son");
//     }
// } else if (x<10) {
//     if (a%2==0) {
//         console.log("ikki xonali juft son");
//     } else {
//         console.log("ikki xonali toq son");
//     }
// } else if (x<100) {
//     if (a%2==0) {
//         console.log("uch xonali juft son");
//     } else {
//         console.log("uch xonali toq son");
//     }
// }



// SWITCH CASE masalalari 
// case1
// let baho = +prompt("Bahoni kiriting:")
// switch (baho) {
//     case 1:
//         console.log("Yomon");
//         break;
//     case 2:
//         console.log("Qoniqarsiz");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Bunday baho yo'q");
//   }


// case2
// let oy = +prompt("Oy raqamini kiriting:")
// switch (oy) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Qish");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Kuz");
//         break;
//     default:
//         console.log("Bunday oy yo'q");
//   }


// case3
// let oy = +prompt("Oy raqamini kiriting:")
// switch (oy) {
//     case 1:
//         console.log("28 kun");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 kun");
//         break;
//     case 2:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 kun");
//         break;
//     default:
//         console.log("Bunday oy yo'q");
//   }


// case4
// alert("Uzunlik birliklari: 1) Detsimetr, 2) Kilometr, 3) Metr 4) Millimetr, 5) Santimetr")
// let uzunlikBirligi = +prompt("Uzunlik birligini kiriting") 
// let Qiymat = +prompt("Qiymatini kiriting")
// switch (uzunlikBirligi) {
//     case 1:
//         console.log(Qiymat + " detsimetr bu " + Qiymat/10 + " metr");
//         break;
//     case 2:
//         console.log(Qiymat + " kilometr bu " + Qiymat*1000 + " metr");
//         break;
//     case 3:
//         console.log(Qiymat + " metr bu " + Qiymat + " metr");
//         break;
//     case 4:
//         console.log(Qiymat + " millimetr bu " + Qiymat/1000 + " metr");
//         break;
//     case 5:
//         console.log(Qiymat + " sm bu " + Qiymat/100 + " metr");
//         break;
//     default:
//         console.log("Bunday uzunlik o'lchov birligi yo'q");
//   }


// case5
// alert("Og'irlik birliklari: 1) Kilogramm, 2) Milligramm, 3) Gramm 4) Tonna, 5) Sentner")
// let uzunlikBirligi = +prompt("Og'irlik birligini kiriting") 
// let Qiymat = +prompt("Qiymatini kiriting")
// switch (uzunlikBirligi) {
//     case 1:
//         console.log(Qiymat + " kilogramm bu " + Qiymat + " kilogramm");
//         break;
//     case 2:
//         console.log(Qiymat + " milligramm bu " + Qiymat/10000 + " kilogramm");
//         break;
//     case 3:
//         console.log(Qiymat + " gramm bu " + Qiymat/1000 + " kilogramm");
//         break;
//     case 4:
//         console.log(Qiymat + " tonna bu " + Qiymat*1000 + " kilogramm");
//         break;
//     case 5:
//         console.log(Qiymat + " sentner bu " + Qiymat*100 + " kilogramm");
//         break;
//     default:
//         console.log("Bunday og'irlik o'lchov birligi yo'q");
//   }


// case6
// let Day = +prompt("Sanani kiriting:")
// let Month = +prompt("Oyni kiriting:")
// switch (Month) {
//     case 1:
//         console.log(Day + " - yanvar");
//         break;
//     case 2:
//         console.log(Day + " - fevral");
//         break;
//     case 3:
//         console.log(Day + " - mart");
//         break;
//     case 4:
//         console.log(Day + " - aprel");
//         break;
//     case 5:
//         console.log(Day + " - may");
//         break;
//     case 6:
//         console.log(Day + " - iyun");
//         break;
//     case 7:
//         console.log(Day + " - iyul");
//         break;
//     case 8:
//         console.log(Day + " - avgust");
//         break;
//     case 9:
//         console.log(Day + " - sentabr");
//         break;
//     case 10:
//         console.log(Day + " - oktabr");
//         break;
//     case 11:
//         console.log(Day + " - noyabr");
//         break;
//     case 12:
//         console.log(Day + " - dekabr");
//         break;
//     default:
//         console.log("Bunday oy yoki kun yo'q");
//   }


// case7
// let Day = +prompt("Sanani kiriting:")
// let Month = +prompt("Oyni kiriting:")
// switch (Month) {
//     case 1:
//         console.log(Day + " - yanvar");
//         break;
//     case 2:
//         console.log(Day + " - fevral");
//         break;
//     case 3:
//         console.log(Day + " - mart");
//         break;
//     case 4:
//         console.log(Day + " - aprel");
//         break;
//     case 5:
//         console.log(Day + " - may");
//         break;
//     case 6:
//         console.log(Day + " - iyun");
//         break;
//     case 7:
//         console.log(Day + " - iyul");
//         break;
//     case 8:
//         console.log(Day + " - avgust");
//         break;
//     case 9:
//         console.log(Day + " - sentabr");
//         break;
//     case 10:
//         console.log(Day + " - oktabr");
//         break;
//     case 11:
//         console.log(Day + " - noyabr");
//         break;
//     case 12:
//         console.log(Day + " - dekabr");
//         break;
//     default:
//         console.log("Bunday oy yoki kun yo'q");
//   }


// case8
// alert("Robotning harakatlanish yo'nalishlari: 1-shimol, 2-janub, 3-sharq, 4-g'arb")
// let yonalish = +prompt("Yonalishni kiriting:")
// alert("Robotning harakatlanish raqamli buyuqlari: 0-harakatni davom ettir, 1-chapga buril, 2-o'ngga buril")
// let buyruq = +prompt("Buyruqni kiriting:")

// switch (yonalish) {
//     case 1:
//         console.log("shimolga ");
//         break;
//     case 2: 
//         console.log("janubga ");
//         break;
//     case 3: 
//         console.log("sharqqa ");
//         break;
//     case 4: 
//         console.log("g'arbga ");
//         break;
// }
// switch (buyruq) {
//     case 0: 
//         console.log("harakatni davom ettir");
//         break;
//     case 1: 
//         console.log("chapga buril");
//         break;
//     case 2: 
//         console.log("o'ngga buril");
//         break;
//     default:
//         console.log("Xatolik");
// }


// case9
// alert("Karta turi: 1 dan 10 gacha va 11-valet, 12-dama, 13-qirol 13-tuz")
// let Turi = +prompt("Turini kiriting:")
// alert("Karta nomi: 1-g'isht, 2-olma, 3-chillak, 4-qarg'a")
// let Nomi = +prompt("Nomini kiriting kiriting:")

// switch (Turi) {
//     case 1:
//         console.log("bir ");
//         break;
//     case 2: 
//         console.log("ikki ");
//         break;
//     case 3: 
//         console.log("uch ");
//         break;
//     case 4: 
//         console.log("to'rt ");
//         break;
//     case 5: 
//         console.log("besh");
//         break;
//     case 6: 
//         console.log("olti");
//         break;
//     case 7: 
//         console.log("yetti");
//         break;
//     case 8: 
//         console.log("sakkiz");
//         break;
//     case 9: 
//         console.log("to'qqiz");
//         break;
//     case 10: 
//         console.log("o'n");
//         break;
//     case 11: 
//         console.log("valet ");
//         break;
//     case 12: 
//         console.log("dama ");
//         break;
//     case 13: 
//         console.log("qirol ");
//         break;
//     case 14: 
//         console.log("tuz ");
//         break;
//     default:
//         console.log("Xatolik");
//     }
// switch (Nomi) {
//     case 1: 
//         console.log("g'isht");
//         break;
//     case 2: 
//         console.log("olma");
//         break;
//     case 3: 
//         console.log("chillak");
//         break;
//     case 4: 
//         console.log("qarg'a");
//         break;
//     default:
//         console.log("Xatolik");
// }


// case10
// let masala = +prompt("masalalar sonini kiriting")
// let onlik = Math.floor(masala/10)
// let birlik = masala % 10;

// switch (onlik) {
//     case 1:
//         console.log("O'n ");
//         break;
//     case 2:
//         console.log("Yigirma ");
//         break;
//     case 3:
//         console.log("O'ttiz ");
//         break;
//     case 4:
//         console.log("Qiriq ");
//         break;
//     default:
//         console.log("Xatolik");
// }
// switch (birlik) {
//     case 1:
//         console.log("bitta masala ");
//         break;
//     case 2:
//         console.log("ikta masala ");
//         break;
//     case 3:
//         console.log("uchta masala ");
//         break;
//     case 4:
//         console.log("to'rtta masala ");
//         break;
//     case 5:
//         console.log("beshta masala ");
//         break;
//     case 6:
//         console.log("oltita masala ");
//         break;
//     case 7:
//         console.log("yettita masala ");
//         break;
//     case 8:
//         console.log("sakkizta masala ");
//         break;
//     case 9:
//         console.log("to'qqizta masala");
//         break;
//     default:
//         console.log("Xatolik");
// }


// case11
let son = +prompt("100-999 oralig'ida son kiriting kiriting")
let yuzlik = Math.floor(son/100)
let onlik = Math.floor(son/10)%10
let birlik = son % 10;

console.log(son);

switch (yuzlik) {
    case 1:
        console.log("Bir yuz");
        break;
    case 2:
        console.log("ikki yuz ");
        break;
    case 3:
        console.log("uch yuz ");
        break;
    case 4:
        console.log("to'rt yuz ");
        break;
    case 5:
        console.log("besh yuz ");
        break;
    case 6:
        console.log("olti yuz ");
        break;
    case 7:
        console.log("yetti yuz ");
        break;
    case 8:
        console.log("sakkiz yuz ");
        break;
    case 9:
        console.log("to'qqiz yuz");
        break;
    default:
        console.log("Xatolik");
}
switch (onlik) {
    case 1:
        console.log("o'n ");
        break;
    case 2:
        console.log("yigirma ");
        break;
    case 3:
        console.log("o'ttiz ");
        break;
    case 4:
        console.log("qirq ");
        break;
    case 5:
        console.log("ellik ");
        break;
    case 6:
        console.log("oltmush ");
        break;
    case 7:
        console.log("yetmush ");
        break;
    case 8:
        console.log("sakson ");
        break;
    case 9:
        console.log("to'qson");
        break;
    default:
        console.log("Xatolik");
}
switch (birlik) {
    case 1:
        console.log("bir");
        break;
    case 2:
        console.log("ikki");
        break;
    case 3:
        console.log("uch");
        break;
    case 4:
        console.log("to'rt");
        break;
    case 5:
        console.log("besh");
        break;
    case 6:
        console.log("olti");
        break;
    case 7:
        console.log("yetti");
        break;
    case 8:
        console.log("sakkiz");
        break;
    case 9:
        console.log("to'qqiz");
        break;
    default:
        console.log("Xatolik");
}


// case12



