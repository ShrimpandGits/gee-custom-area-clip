var table = ee.FeatureCollection("add desired clipping area");
var dataset = ee.ImageCollection('add image collection')
                  .filter(ee.Filter.date('from date', 'to date'));
var nighttimeLights = dataset.select('b1');
var nighttimeLightsVis = {
  min: 3.0,
  max: 60.0,
};
Map.setCenter("add your subject area");
Map.addLayer(nighttimeLights, nighttimeLightsVis, 'Nighttime Lights');
var image=dataset.first().clip(table)
var counties = ee.FeatureCollection(table);


//may need to configure based on subject area 
Export.image.toDrive({
  image: image,
  description: 'image_export',
  folder: 'ee_demos',
  region: counties,
  scale: 30000,
  crs: 'EPSG:5070'
});
