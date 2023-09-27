var size = 0;
var placement = 'point';

var style_mx1_volumen_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#f4e80d";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("zipcodes_vol_tag") !== null) {
        labelText = String(feature.get("zipcodes_vol_tag"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.633)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}),fill: new ol.style.Fill({color: 'rgba(141,90,153,0.633)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
