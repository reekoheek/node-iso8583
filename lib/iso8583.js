var util = require('util');
var ISO8583 = function(packager) {
	packager && (this.packager = packager);
	
	this.fields = {};
	
	this._unpack = function(msg, id) {
		var result;
		try {
			var packager = this.packager[id];
			result = require('./packer/' + packager.type).unpack(msg, packager);
			this.fields[id] = result.data;
		} catch(e) {
			var errMsg = 'Error unpacking data from bit ' + id + '\nPackager: ' + util.inspect(packager);
			console.error(errMsg);
			throw new Error(errMsg + ': ' + e.message);
		}
		return result;
	};
	
	this._pack = function(row, id) {
		var result;
		try {
			var packager = this.packager[id];
			result = require('./packer/' + packager.type).pack(row, packager);
		} catch(e) {
			var errMsg = 'Error packing data from bit ' + id + '\nPackager: ' + util.inspect(packager);
			console.error(errMsg);
			throw new Error(errMsg + ': ' + e.message);
		}
		return result;
	};
	
	this.unpack = function(msg) {
		var result;
		var fields = {};
		
		result = this._unpack(msg, 0);
		fields['0'] = result.data;
		result = this._unpack(result.restData, 1);
		fields['1'] = result.data;
		var fieldIds = result.fieldIds;
		
		for(var i in fieldIds) {
			result = this._unpack(result.restData, fieldIds[i]);
			fields[i] = result.data;
		}
		return this.fields;
	};
	
	this._sort = function(o) {
		var sorted = {},
		key, a = [];

		for (key in o) {
			if (o.hasOwnProperty(key)) {
					a.push(key);
			}
		}

		a.sort();

		for (key = 0; key < a.length; key++) {
			sorted[a[key]] = o[a[key]];
		}
		return sorted;
	};
	
	this.pack = function(data) {
		var retMsg = '', retMap = {};
		var result;
		data = this._sort(data);
		for(var i in data) {
			if (i == 1) {
				result = this._pack(data, i);
			} else {
				result = this._pack(data[i], i);
			}
			
			retMap[i] = result.msg;
			retMsg += result.msg;
			//console.log(retMap);
		}
		
		
		return retMsg;
	};
};

exports.ISO8583 = ISO8583;
exports.defaultPackager = require('./packager').packager;
