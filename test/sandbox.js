/*jshint curly: false, eqeqeq: true, laxcomma: true, node: true, indent: 4*/

var util = require('util')
, Report = require('../')
, report
;

report = new Report({
    server: ''
    , gateway: '/cognos8/cgi-bin/cognos.cgi'
});

report.run('CAMID("AD:u:cc4e4a9faf8d08488b4d9f64f74d8b33")/folder[@name="My Folders"]/report[@name="DC54_01A_02a_ECI_XML"]', {Report_ID:1026 ,Report_Language:'en'}, function(err, data) {
    if(err) throw err;
    console.log(util.inspect(data.metadata, {depth:3}));
});
	
	