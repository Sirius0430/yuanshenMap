### 使用方法：

#### 以leaflet为例：

##### 方式1：wms

```javascript
let yuanshenLayer = L.tileLayer("http://ddns.minemc.top:10101/{z}/{x}/{y}.png",{
    tms:true,
    tranparent:true,
})
```

##### 方式2：wmts 使用nginx自制(推荐使用)

```javascript
let yuanshenLayer = L.tileLayer("http://ddns.minemc.top:10101/{z}/{x}/{y}.png",{
    tms:true,
    tranparent:true,
})
```

##### 方式3：wmts 使用geowebcache，莫名其妙更卡一些，坐标系记得是EPSG:900913或EPSG:3857

```css
let yuanshenLayer = L.tileLayer("http://ddns.minemc.top:10010/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=yuanshen:yuanshenMap&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}", {
    transparent: true,
    style:"raster",
    maxBounds: [[0.05648160028151732, -0.03217359309655564], [-0.09078576177883144, 0.07823951528296658]]
})
```

如果可以接受使用更多的时间获取更高的分辨率，请使用detectRetina:true
```javascript
let yuanshenLayer = L.tileLayer("http://ddns.minemc.top:10101/{z}/{x}/{y}.png", {
    tms: true,
    tranparent: true,
    detectRetina:true,
})
```

##### 边界及缩放推荐设置
```javascript
let map = L.map("map", {
    layers: [yuanshenLayer],
    minZoom: 13,
    maxZoom: 18,
    center: [0, 0],
    zoom: 13,
    maxBounds: [[0.05648160028151732, -0.03217359309655564], [-0.09078576177883144, 0.07823951528296658]]
})
```
#### 附：空荧酒馆坐标系转wgs84经纬度：

##### xy转经纬度（latlng）

```javascript
function mercatorToLatlng(mercator) {
    var lonlat = {
        x: 0,
        y: 0
    };
    var x = mercator[0] / 20037508.34 * 180;
    var y = mercator[1] / 20037508.34 * 180;
    y = 180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2);
    lonlat.x = x;
    lonlat.y = y;
    return [lonlat.y, lonlat.x];
}
```

##### 经纬度（latlng）转xy

```javascript
function latLng2Mercator(latlng) {
    var mercator = {
        x: 0,
        y: 0
    };
    var earthRad = 6378137.0;
    mercator.x = latlng[1] * Math.PI / 180 * earthRad;
    var a = latlng[0] * Math.PI / 180;
    mercator.y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
    return [mercator.x, mercator.y];
}
```

**注意！！**由于空荧酒馆坐标系y轴正方向向下，而wgs84 Mercator坐标系y轴正方向向上，因此需要将xy坐标的y取负后使用再函数转换

```javascript
x = 100
y = 200
latlng = mercatorToLatlng([x,-y])
```

地图示例（poi数据来源于空荧酒馆）：
![image](https://user-images.githubusercontent.com/54973009/156194870-a7eabb77-1798-4c5b-8e43-f75e83a38951.png)


地图来源：空荧酒馆原神地图https://github.com/kongying-tavern/yuan-shen-map
