let left = -3581.548
let upper = 6287.504
let right = 8709.583
let lower = -10106.229

// wms的方式，不推荐
// let yuanshenLayer = L.tileLayer.wms("http://ddns.minemc.top:10010/geoserver/wms", {
//     layers: 'yuanshen:yuanshenMap',
//     format: 'image/png',
//     transparent: true,
// })

//wmts的方式，推荐
let yuanshenLayer = L.tileLayer("http://ddns.minemc.top:10101/{z}/{x}/{y}.png",{
    tms:true,
    tranparent:true,
})

//wmts的方式
// let yuanshenLayer = L.tileLayer("http://ddns.minemc.top:10010/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yuanshen:yuanshenMap&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}", {
//     transparent: true,
//     style:"raster",
//     maxBounds: [[0.05648160028151732, -0.03217359309655564], [-0.09078576177883144, 0.07823951528296658]]
// })

let map = L.map("map", {
    layers: [yuanshenLayer],
    minZoom: 13,
    maxZoom: 18,
    center: [0, 0],
    zoom: 13,
    maxBounds: [[0.05648160028151732, -0.03217359309655564], [-0.09078576177883144, 0.07823951528296658]]
})



