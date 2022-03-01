//EPSG:3857转换经纬度(EPSG:4326)
function mercatorToLonlat(mercator) {
    var lonlat = {
        x: 0,
        y: 0
    };
    var x = mercator[0] / 20037508.34 * 180;
    var y = mercator[1] / 20037508.34 * 180;
    y = 180 / Math.PI * (2 * Math.atan(Math.exp(y * Math.PI / 180)) - Math.PI / 2);
    lonlat.x = x;
    lonlat.y = y;
    return [lonlat.x, lonlat.y];
}

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

//经纬度(EPSG:4326)转换EPSG:3857
function lonLat2Mercator(lonlat) {
    var mercator = {
        x: 0,
        y: 0
    };
    var earthRad = 6378137.0;
    mercator.x = lonlat[0] * Math.PI / 180 * earthRad;
    var a = lonlat[1] * Math.PI / 180;
    mercator.y = earthRad / 2 * Math.log((1.0 + Math.sin(a)) / (1.0 - Math.sin(a)));
    return [mercator.x, mercator.y];
}

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

//用于测试转换是否准确
// function test() {
//     testx = 354
//     testy = 4372
//     testxy = [testx,testy]
//     xy4326 = mercatorToLatlng(testxy)
//     xy3857 = latLng2Mercator(xy4326)
//     console.log(xy4326)
//     console.log(xy3857)
// }
