// install event
self.addEventListener("install" , event => {
    console.log("servise worcer has inistall", event);
    
})

// activate event

self.addEventListener("activate" , event => {
    console.log("servise worcer has activate", event);
    
})

// fetch event
self.addEventListener("fetch" , event => {
    console.log("servise worcer has fetch", event);
    
})