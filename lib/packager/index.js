exports.packager = {
	'0': {
		length: 4,
		name: 'Message Type Indicator',
		type: 'n'
	},
	'1': {
		length: 16,
		name: 'Bitmap',
		type: 'b'
	},
	'2': {
		length: 19,
		name: 'Primary Account Number',
		type: 'lln'
	},
	'3': { 
		length: 6,
		name: 'Processing Code',
		type: 'n'
	},
	'4': {
		length: 12,
		name: 'Amount, Transaction',
		type: 'n'
	},
	'5': {
		length: 12,
		name: 'Amount, Settlement',
		type: 'n'
	},
	'6': {
		length: 12,
		name: 'Amount, Cardholder Billing',
		type: 'n'
	},
	'7': {
		length: 10,
		name: 'Transmission Date and Time',
		type: 'n'
	},
	'8': {
		length: 8,
		name: 'Amount, Cardholder Billing Fee',
		type: 'n'
	},
	'9': {
		length: 8,
		name: 'Conversion Rate, Settlement',
		type: 'n'
	},
	'10': {
		length: 8,
		name: 'Conversion Rate, Cardholder Billing',
		type: 'n'
	},
	'11': {
		length: 6,
		name: 'System Trace Audit Number',
		type: 'n'
	},
	'12': {
		length: 6,
		name: 'Time, Local Transaction',
		type: 'n'
	},
	'13': {
		length: 4,
		name: 'Date, Local Transaction',
		type: 'n'
	},
	'15': {
		length: 4,
		name: 'Date, Expiration',
		type: 'n'
	},
	'15': {
		length: 4,
		name: 'Date, Settlement',
		type: 'n'
	},
	'32': {
		length: 11,
		name: 'Acquiring Institution Ident Code',
		type: 'lln'
	},
	'37': {
		length: 12,
		name: 'Retrieval Reference Number',
		type: 'an'
	},
	'38': {
		length: 6,
		name: 'Authorization identification response',
		type: 'an'
	},
	'39': {
		length: 2,
		name: 'Response code',
		type: 'an'
	},
	//
	'41': {
		length: 8,
		name: 'Card Acceptor Terminal Identification',
		type: 'ans'
	}, 
	'49': {
		length: 3,
		name: 'Currency code, transaction',
		type: 'a'
	}, 
	'54': {
		length: 120,
		name: 'Additional amounts',
		type: 'lllan'
	}, 
	'70': {
		length: 3,
		name: 'Network Management Information Code',
		type: 'n'
	}
}
