var size = 0;
var placement = 'point';

var style_RedGrandesClientesAct16122024_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#e9f909";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("nis_rad") !== null) {
        labelText = String(feature.get("nis_rad"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.4 + size, points: 4,
            stroke: new ol.style.Stroke({color: 'rgba(6,12,9,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(219,30,42,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
