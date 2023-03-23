
// this.addEventListener('install', (event) => {
//   console.log('service worker installed successfully')
//   console.log(this)
  // event.waitUntil(
  //     caches.open(cacheData).then((cache) => {
  //         cache.addAll([
  //             '/static/js/array.js',
  //             '/static/js/main.chunk.js',
  //             '/static/js/0.chunk.js',
  //             '/index.html',
  //             '/',
  //         ])
  //     })
  // )
// })

// this.addEventListener('sync', function (event) {
//   // if (event.tag === 'order') {
//   // //   event.waitUntil(getOrderData());
//   //     console.log(`got event tag = ${event.tag}`)
//   //     event.waitUntil(sendOfflineAnalytics())
//   // }
//   try {
//     console.log(event)
//     // const eventData = JSON.parse(event.tag)
//     // console.log(eventData)
//     // console.log(this.window)
//     // event.waitUntil(
//     //     // this.heap.track('this is some error message')
//     //     this.window.heap.track('this is some error message')
//     //     // window.heap.track('this is some error message')
//     // )
//   } catch (error) {
//     console.log(error.message)
//   }
// })

// const syncStore = []
// this.addEventListener('message', (event) => {
//   if (event.data.type === 'sync') {
//     syncStore.push(event.data)
//     // register a sync and pass the id as tag for it to get the data
//     // this.registration.sync.register(id)
//   }
//   console.log(event.data)
// })

// this.addEventListener('sync', (event) => {
//   // get the data by tag
//   const { url, options } = syncStore[event.tag]
//   event.waitUntil(fetch(url, options))
// })

// this.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((result) => {
//             console.log(result)
//             if (result) return result
//             return 'no result'
//         }).catch(error=> console.log(error.message))
//     )
// })
// this.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.open(event.request.url).then(function(cache) {
//         return cache.match(event.request).then(function (response) {
//           if(navigator.onLine){
//             return fetch(event.request).then(function(response) {
//                 console.log(event.request)
//               if(event.request.method === 'GET'){
//                 cache.put(event.request, response.clone());
//               }
//               return response;
//             });
//           }else{
//             if(response){
//               return response
//             }else{
//               return null
//             }
//           }
//         });
//       })
//     );
// });
