//==================================================================================================================


//==================================================================================================================

// Asynchronous functionlarni qo'llash
console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling",
    "togri boshliq tanlang va koproq hato qiling",
    "uzingizga ishlashni boshlang",
    "siz kuchli bolgan narsalarni qiling",
    "yoshlarga invest qiling",
    "endi dam oling, foydasi yoq endi",

];

async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error("insert number");
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
}}

// THEN & CATCH

// console.log('passed here 0')
// maslahatBering(25).then(data => { // then & catch
//     console.log('JAVOB:', data);
// }).catch(err => {
// console.log('ERROR:', err);
// })
// console.log("passed here 1")

// ASYN & WAIT

async function run() {
    let javob = await maslahatBering(65);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();

//=================================================================================================================

// EVENT LOOP va CALLBACK FUNCTIONLAR

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling",
//     "togri boshliq tanlang va koproq hato qiling",
//     "uzingizga ishlashni boshlang",
//     "siz kuchli bolgan narsalarni qiling",
//     "yoshlarga invest qiling",
//     "endi dam oling, foydasi yoq endi",

// ];

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