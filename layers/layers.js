var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_RedGrandesClientesAct16122024_1 = new ol.format.GeoJSON();
var features_RedGrandesClientesAct16122024_1 = format_RedGrandesClientesAct16122024_1.readFeatures(json_RedGrandesClientesAct16122024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedGrandesClientesAct16122024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedGrandesClientesAct16122024_1.addFeatures(features_RedGrandesClientesAct16122024_1);
var lyr_RedGrandesClientesAct16122024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedGrandesClientesAct16122024_1, 
                style: style_RedGrandesClientesAct16122024_1,
                popuplayertitle: 'Red Grandes Clientes Act. 16/12/2024',
                interactive: true,
                title: '<img src="styles/legend/RedGrandesClientesAct16122024_1.png" /> Red Grandes Clientes Act. 16/12/2024'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_RedGrandesClientesAct16122024_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_RedGrandesClientesAct16122024_1];
lyr_RedGrandesClientesAct16122024_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'v_idcarga': 'v_idcarga', 'n_idreg': 'n_idreg', 'cod_unicom': 'cod_unicom', 'anno': 'anno', 'mes': 'mes', 'ciclo_fact': 'ciclo_fact', 'ruta': 'ruta', 'num_itin': 'num_itin', 'aol': 'aol', 'nom_raz_social': 'Razon Social', 'nom_local': 'Urbanizacion', 'nom_calle': 'Calle', 'compl_direc': 'Direccion', 'cod_munic': 'cod_munic', 'mz_lot': 'Mz/Lote ', 'cgv': 'cgv', 'acc_predio': 'Acceso predio', 'acc_caja': 'Acceso caja ', 'num_apa': 'num_apa', 'lect_ant': 'lect_ant', 'num_rue': 'num_rue', 'cod_tar': 'cod_tar', 'nis_rad': 'N°  de Suministro', 'cod_cnae': 'cod_cnae', 'num_apa_obs': 'num_apa_obs', 'obs': 'obs', 'lect': 'lect', 'inc_1': 'inc_1', 'det_1': 'det_1', 'inc_2': 'inc_2', 'det_2': 'det_2', 'inc_3': 'inc_3', 'det_3': 'det_3', 'fecha': 'fecha', 'hora': 'hora', 'cod_lector': 'cod_lector', 'medio': 'medio', 'csmo_actual': 'csmo_actual', 'des_inc_1': 'des_inc_1', 'des_inc_2': 'des_inc_2', 'des_inc_3': 'des_inc_3', 'des_det1': 'des_det1', 'des_det2': 'des_det2', 'des_det3': 'des_det3', 'lect_ori': 'lect_ori', 'fecha_ori': 'fecha_ori', 'hora_ori': 'hora_ori', 'tip_lectura': 'tip_lectura', 'cup': 'cup', 'sector': 'sector', 'csmo_prom': 'csmo_prom', 'ccss': 'CCSS ', 'distrito': 'Distrito', 'carga': 'carga', 'act': 'act', 'observaci': 'observaci', 'Rev_MR': 'Rev_MR', 'Geo_OK': 'Geo_OK', 'FUENTE_GEO': 'FUENTE_GEO', });
lyr_RedGrandesClientesAct16122024_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'v_idcarga': 'TextEdit', 'n_idreg': 'Range', 'cod_unicom': 'Range', 'anno': 'Range', 'mes': 'Range', 'ciclo_fact': 'Range', 'ruta': 'Range', 'num_itin': 'Range', 'aol': 'Range', 'nom_raz_social': 'TextEdit', 'nom_local': 'TextEdit', 'nom_calle': 'TextEdit', 'compl_direc': 'TextEdit', 'cod_munic': 'Range', 'mz_lot': 'TextEdit', 'cgv': 'TextEdit', 'acc_predio': 'TextEdit', 'acc_caja': 'TextEdit', 'num_apa': 'TextEdit', 'lect_ant': 'Range', 'num_rue': 'Range', 'cod_tar': 'TextEdit', 'nis_rad': 'Range', 'cod_cnae': 'Range', 'num_apa_obs': 'TextEdit', 'obs': 'TextEdit', 'lect': 'TextEdit', 'inc_1': 'TextEdit', 'det_1': 'TextEdit', 'inc_2': 'TextEdit', 'det_2': 'TextEdit', 'inc_3': 'TextEdit', 'det_3': 'TextEdit', 'fecha': 'TextEdit', 'hora': 'TextEdit', 'cod_lector': 'TextEdit', 'medio': 'TextEdit', 'csmo_actual': 'Range', 'des_inc_1': 'TextEdit', 'des_inc_2': 'TextEdit', 'des_inc_3': 'TextEdit', 'des_det1': 'TextEdit', 'des_det2': 'TextEdit', 'des_det3': 'TextEdit', 'lect_ori': 'TextEdit', 'fecha_ori': 'TextEdit', 'hora_ori': 'TextEdit', 'tip_lectura': 'TextEdit', 'cup': 'TextEdit', 'sector': 'Range', 'csmo_prom': 'Range', 'ccss': 'TextEdit', 'distrito': 'TextEdit', 'carga': 'TextEdit', 'act': 'Range', 'observaci': 'TextEdit', 'Rev_MR': 'TextEdit', 'Geo_OK': 'TextEdit', 'FUENTE_GEO': 'TextEdit', });
lyr_RedGrandesClientesAct16122024_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'v_idcarga': 'hidden field', 'n_idreg': 'hidden field', 'cod_unicom': 'hidden field', 'anno': 'hidden field', 'mes': 'hidden field', 'ciclo_fact': 'hidden field', 'ruta': 'hidden field', 'num_itin': 'hidden field', 'aol': 'hidden field', 'nom_raz_social': 'inline label - visible with data', 'nom_local': 'inline label - visible with data', 'nom_calle': 'inline label - visible with data', 'compl_direc': 'inline label - visible with data', 'cod_munic': 'hidden field', 'mz_lot': 'inline label - visible with data', 'cgv': 'hidden field', 'acc_predio': 'inline label - visible with data', 'acc_caja': 'inline label - visible with data', 'num_apa': 'hidden field', 'lect_ant': 'hidden field', 'num_rue': 'hidden field', 'cod_tar': 'hidden field', 'nis_rad': 'inline label - always visible', 'cod_cnae': 'hidden field', 'num_apa_obs': 'hidden field', 'obs': 'hidden field', 'lect': 'hidden field', 'inc_1': 'hidden field', 'det_1': 'hidden field', 'inc_2': 'hidden field', 'det_2': 'hidden field', 'inc_3': 'hidden field', 'det_3': 'hidden field', 'fecha': 'hidden field', 'hora': 'hidden field', 'cod_lector': 'hidden field', 'medio': 'hidden field', 'csmo_actual': 'hidden field', 'des_inc_1': 'hidden field', 'des_inc_2': 'hidden field', 'des_inc_3': 'hidden field', 'des_det1': 'hidden field', 'des_det2': 'hidden field', 'des_det3': 'hidden field', 'lect_ori': 'hidden field', 'fecha_ori': 'hidden field', 'hora_ori': 'hidden field', 'tip_lectura': 'hidden field', 'cup': 'hidden field', 'sector': 'hidden field', 'csmo_prom': 'hidden field', 'ccss': 'inline label - visible with data', 'distrito': 'inline label - visible with data', 'carga': 'hidden field', 'act': 'hidden field', 'observaci': 'hidden field', 'Rev_MR': 'hidden field', 'Geo_OK': 'hidden field', 'FUENTE_GEO': 'hidden field', });
lyr_RedGrandesClientesAct16122024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});