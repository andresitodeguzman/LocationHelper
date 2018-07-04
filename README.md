# LocationHelper.js
Location Helper Library for Javascript.
2018


```
approximateTime(d,s)
    d - distance in meters
    s - speed in meters/second

kmToMeters(d)
    d - distance in kilometers

metersToKm(d)
    d - distance in meters

degToRad(i)
    i - must be in degrees

distance(lat1, lon1, lat2, lon2)
    lat1, lon1 - coordinates of from
    lat2, lon2 - coordinates of to

nearest(lat,lon,list)
    lat, lon - coordinates of from
    list - array of places, must include a 'latitude' and 'longitude'

PythagorasEquirectangular(lat1, lon1, lat2, lon2)
    lat1, lon1 - coordinates of from
    lat2, lon2 - coordinates of to

timeFormatter(secDouble)
    secDouble - Seconds must be as Double

```