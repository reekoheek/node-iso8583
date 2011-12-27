exports.unpack = function(msg, packager) {
	return {
		data: msg.substring(0, packager.length),
		restData: msg.substring(packager.length)
	};
};

exports.pack = function(row, packager) {
	return {
		msg: row
	};
};

