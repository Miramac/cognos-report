/*jshint curly: false, eqeqeq: true, laxcomma: true, node: true, indent: 4*/
var util = require('util')
, xmlParser = new require('xml2js').Parser()
, Dataset = require('cognos-report-dataset')
, XMLReader = require('cognos-report-xmlreader')
;

function Report(options) {
	options = options || {};
	var report = {}
	, xmlReader = new XMLReader({
		'server': options.server
		, 'gateway': options.gateway
	})
	;
	
	//runs a cognos report
	report.run = function(reportUrl, param, cb) {
		var options = (typeof reportUrl === 'string') ? { 'reportUrl': reportUrl} : reportUrl;
		options.parameter = (typeof param === 'object') ? param : options.parameter;
		cb = (typeof param === 'function') ? param : cb;
		//run report and get xml data 
		xmlReader.data(options.reportUrl, options.parameter, function(err, data) {
			if(err) throw err;
			xmlParser.parseString(data, function (err, result) {
				if (err) throw err; 
				var dataset =  new Dataset(result.dataset, options);
				//retrun result dataset
				cb(null, dataset);
    		});
		});
	};
	
	return report;
}

