/*
    We ask: does this browser support ServiceWorker? if so, lets spawn one
*/
if('ServiceWorker' in window) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('sw registered!');
    });
}
