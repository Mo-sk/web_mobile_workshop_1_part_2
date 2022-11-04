const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "/index.html",
    "./src/css/style.css",
    "./src/js/app.js",
    "./src/images/coffee1.jpg",
    "./src/images/coffee2.jpg",
    "./src/images/coffee3.jpg",
    "./src/images/coffee4.jpg",
    "./src/images/coffee5.jpg",
    "./src/images/coffee6.jpg",
    "./src/images/coffee7.jpg",
    "./src/images/coffee8.jpg",
    "./src/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
    cache.addAll(assets)
    })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
    return res || fetch(fetchEvent.request)
    })
    )
})