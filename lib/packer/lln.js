exports.unpack = function(msg, packager) {
	var length = parseInt(msg.substring(0, 2), 10);
	
	if(length > packager.length) {
		length = packager.length;
	}
	
	var result = {
		data: msg.substring(2, length + 2),
		chunk: msg.substring(0, length + 2),
		restData: msg.substring(length + 2)
	};
	
	return result;
};

exports.pack = function(row, packager) {
	var length = row.length;
	if (length > packager.length) {
		length = packager.length;
	}
	
	var msg = '' + length;
	if (length < 10) {
		msg = '0' + msg;
	}
	
	return {
		msg: msg + row.substr(0, length)
	}
};
