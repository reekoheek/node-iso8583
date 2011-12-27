exports.unpack = function(msg, packager) {
	var length = parseInt(msg.substring(0, 3), 10);
	
	if(length > packager.length) {
		length = packager.length;
	}
	
	var result = {
		data: msg.substring(3, length + 3),
		chunk: msg.substring(0, length + 3),
		restData: msg.substring(length + 3)
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
		msg = '00' + msg;
	} else if (length < 100) {
		msg = '0' + msg;
	}
	
	return {
		msg: msg + row.substr(0, length)
	}
};

