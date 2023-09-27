var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mx1_volumen_1 = new ol.format.GeoJSON();
var features_mx1_volumen_1 = format_mx1_volumen_1.readFeatures(json_mx1_volumen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mx1_volumen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mx1_volumen_1.addFeatures(features_mx1_volumen_1);
var lyr_mx1_volumen_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mx1_volumen_1, 
                style: style_mx1_volumen_1,
                interactive: false,
                title: '<img src="styles/legend/mx1_volumen_1.png" /> mx1_volumen'
            });
var format_mx1_zonas_volumen_2 = new ol.format.GeoJSON();
var features_mx1_zonas_volumen_2 = format_mx1_zonas_volumen_2.readFeatures(json_mx1_zonas_volumen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mx1_zonas_volumen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mx1_zonas_volumen_2.addFeatures(features_mx1_zonas_volumen_2);
var lyr_mx1_zonas_volumen_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mx1_zonas_volumen_2, 
                style: style_mx1_zonas_volumen_2,
                interactive: true,
                title: '<img src="styles/legend/mx1_zonas_volumen_2.png" /> mx1_zonas_volumen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mx1_volumen_1.setVisible(true);lyr_mx1_zonas_volumen_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mx1_volumen_1,lyr_mx1_zonas_volumen_2];
lyr_mx1_volumen_1.set('fieldAliases', {'zipcodes_vol_tag': 'zipcodes_vol_tag', 'zipcodes_vol_zipcode': 'zipcodes_vol_zipcode', });
lyr_mx1_zonas_volumen_2.set('fieldAliases', {'zonificación ': 'zonificación ', 'volumen': 'volumen', });
lyr_mx1_volumen_1.set('fieldImages', {'zipcodes_vol_tag': 'TextEdit', 'zipcodes_vol_zipcode': 'TextEdit', });
lyr_mx1_zonas_volumen_2.set('fieldImages', {'zonificación ': 'TextEdit', 'volumen': 'TextEdit', });
lyr_mx1_volumen_1.set('fieldLabels', {'zipcodes_vol_tag': 'no label', 'zipcodes_vol_zipcode': 'no label', });
lyr_mx1_zonas_volumen_2.set('fieldLabels', {'zonificación ': 'header label', 'volumen': 'header label', });
lyr_mx1_zonas_volumen_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});