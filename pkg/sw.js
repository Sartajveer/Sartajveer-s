const C="solar-vr-v10",PRE=["./","index.html","manifest.webmanifest","icon.svg","https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(PRE.map(u=>fetch(u,{mode:u.startsWith("http")?"no-cors":"same-origin"}).then(r=>c.put(u,r)).catch(()=>{})))));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const k=n.clone();caches.open(C).then(c=>c.put(e.request,k));return n}).catch(()=>caches.match("index.html"))))});
