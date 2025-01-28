const snapSave = "snap-save-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/img/facebook.png",
  "/img/favicon.png",
  "/img/instagram.webp",
  "/img/app-screenshot.png",
  "/img/app-screenshot-wide.png",
  "/img/yt.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(snapSave).then(cache => {
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

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}