//==================================================================================================================
                                                //TASK C
                                                
class Shop {
    constructor(non, osh, Dena) {
        this.non = non;
        this.osh = osh;
        this.Dena = Dena;
    }

    qoldiq() {
        console.log(
            `Hozir shopda ${this.non} ta non, ${this.osh} ta osh, ${this.Dena} ta Dena bor`
        );
    }

    sotish(tovar, soni) {
        this[tovar] -= soni;
        console.log(`${soni} ta ${tovar} sotildi`);
    }

    qabul(tovar, soni) {
        this[tovar] += soni;
        console.log(`${soni} ta ${tovar} zakaz qabul qilindi`);
    }
}

const shop = new Shop(15, 25, 50);
shop.qoldiq();
shop.sotish("non", 8);
shop.sotish("osh", 10);
shop.sotish("Dena", 24)
shop.qabul("Dena", 4);

shop.qoldiq();


//==================================================================================================================
                                                // TASK B

// function mittaskB(taskb) {
//     let count = 0;
//     for(let i = 0; i <= taskb.length; i++) {
//         if(taskb[i] >= "0" && taskb[i] <= "9") {
//             count++;
//         }
//     }
//     console.log("MITTASKB javob:", count);
// }

// mittaskB("asdjakj655ehnkj6676k");


                                                    // TASK A

// function countLetter(harf, soz) {
//     let count = 0;

//     for (let i = 0; i < soz.length; i++) {
//         if (soz[i] === harf) {
//             count++; 
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "TurdalievSamandar")); 
//==================================================================================================================

                                                    // Asynchronous functionlarni qo'llash

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling",
//     "togri boshliq tanlang va koproq hato qiling",
//     "uzingizga ishlashni boshlang",
//     "siz kuchli bolgan narsalarni qiling",
//     "yoshlarga invest qiling",
//     "endi dam oling, foydasi yoq endi",

// ];

// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error("insert number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
// }}

                                                    // THEN & CATCH

// console.log('passed here 0')
// maslahatBering(25).then(data => { // then & catch
//     console.log('JAVOB:', data);
// }).catch(err => {
// console.log('ERROR:', err);
// })
// console.log("passed here 1")

                                                    // ASYN & WAIT

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//=================================================================================================================

                                                // EVENT LOOP va CALLBACK FUNCTIONLAR

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000)
     
//     };
// }
// console.log('passed here 0')
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     console.log('JAVOB', data);
// });
// console.log('passed here 1');