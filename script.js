// let  promise = new Promise((resolve, reject)=>{
//     console.log("I am a Promise");
//     resolve(123);
// });

// function getData(dataId)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Data", dataId);
//             resolve("Finsihed");
//         }, 3000);
//     });
// }
// let p1 = getData(1);
// p1.then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res);
//     })
// })

// getData("Hello how are you!!")
// .then(()=>{
//     return getData("Yeahh! boy");
// }).then(()=>{
//     return getData("go now!");
// }).then(() =>{
//     return getData("OK dude");
// }).then((res)=>{
//     console.log(res);
// })

// callback
// function asynfunc()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Some Deals 1");
//             resolve("Success");
//         }, 4000);
//     })
// };
// function asynfunc2()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Some Deals 2");
//             resolve("Success");
//         }, 4000);
//     })
// };
// console.log("Fetching1...")
// let p1 = asynfunc();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Fetching2...")
//     let p2 = asynfunc2();
//     p2.then((res)=>{
//         console.log(res); 
//     })
// });

// Async-Await
function hello(yup)
{
    // console.log("Hello");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(yup);
            resolve(200);
        }, 2000);
    })
}

(async function (){
    await hello("Gerogia");
    await hello("i Until found you");
})();