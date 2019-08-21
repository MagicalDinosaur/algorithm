// // 这里模拟异步事件
// function getPromise1() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       resole('get promise1')
//     }, 2000)
//   })
// }
// // 这里模拟异步事件
// function getPromise2() {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       resole('get promise2')
//     }, 1000)
//   })
// }



// function async(gen) {
//   let g = gen();
//   function run() {
//     let gResult = g.next()
//     if (gResult.done) return;
//     let gIndex = gResult.value
//     gIndex.then(res => {
//       // console.log(res);
//       run()
//     })
//   }
//   run()
// }

// // async(function* () {
// //   console.log('run gen function');
// //   yield getPromise1();
// //   console.log('wait primise1 done,output this');
// //   yield getPromise2();
// //   console.log('wait primise2 done,output this');
// // });

// async function func() {
//   console.log('run gen function');
//   await getPromise1();
//   console.log('wait primise1 done,output this');
//   await getPromise2();
//   console.log('wait primise2 done,output this');
// }

// b()


// new Promise(resolve => {
//   resolve(1)
// }).then(res => {
//   new Promise(resolve => {
//     resolve(2)
//   }).then(res => {
//     new Promise(resolve => {
//       resolve(3)
//     }).then(res => {
//       // ...
//     })
//   })
// })

// async function a(){
//   await promise1()
//   await promise2()
//   await promise3()
// }



let a = 0
let b = async () => {
  let c = await 10
  a = a + c
  console.log('2', a)
}
b()
a++
console.log('1', a)