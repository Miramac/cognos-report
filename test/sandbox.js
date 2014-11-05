/*jshint curly: false, eqeqeq: true, laxcomma: true, node: true, indent: 4*/
var util = require('util')
, parser = new require('xml2js').Parser()
, Dataset = require('cognos-report-dataset')
,  XMLReader = require('cognos-report-xmlreader')
;

xmlReader = new XMLReader({
    server: ''
    , gateway: '/cognos8/cgi-bin/cognos.cgi'
});

xmlReader.data('CAMID("AD:u:cc4e4a9faf8d08488b4d9f64f74d8b33")/folder[@name="My Folders"]/report[@name="DC54_01A_02a_ECI_XML"]', {Report_ID:1026 ,Report_Language:'en'}, function(err, data) {
    if(err) throw err;
    parser.parseString(data, function (err, result) {
        var dataset =  new Dataset (result.dataset, { sortBy: ['Split_SortOrder', 'Wave_SortOrder']});
        console.log(util.inspect(dataset.metadata, {depth:3}));
    });
});



       



