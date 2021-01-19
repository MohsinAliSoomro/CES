const Company = require('../model/company.model.js');
const Product = require('../model/product.model.js');

exports.init = (req, res) => {
	var apple = new Company({
		name: 'Apple',
		street: 'Cupertino, CA 95014',
		phone: '1-408-996-1010'
	});

	apple.save(function(err) {
		if (err) return console.error(err.stack);

		console.log('Apple company is added');

		//Apple now exists, so lets create a Product
		var iphone7 = new Product({
			code: 'A-123',
			name: 'Iphone7',
			details: 'Price: 649.00 USD & FREE shipping',
			company: apple._id
		});

		iphone7.save(function(err) {
			if (err) return console.error(err.stack);

			console.log('Iphone 7 is added');
		});

		var iPadPro = new Product({
			code: 'A-456',
			name: 'IPadPro',
			details: 'Price: 417.67 USD & FREE shipping',
			company: apple._id
		});

		iPadPro.save(function(err) {
			if (err) return console.error(err.stack);

			console.log('IPadPro is added');
		});
	});
	var samsung = new Company({
		name: 'Samsung',
		street: 'Seocho District, Seoul, South Korea',
		phone: '+82-2-2053-3000'
	});

	samsung.save(function(err) {
		if (err) return console.error(err.stack);

		console.log('Samsung company is added');

		// Samsung now exists, so lets create a Product
		var galaxyJ7 = new Product({
			code: 'S-012',
			name: 'GalaxyJ7',
			details: 'Price: 219.00 USD & FREE shipping',
			company: samsung._id
		});

		galaxyJ7.save(function(err) {
			if (err) return console.error(err.stack);
			console.log('GalaxyJ7 is added');
		});

		var galaxyTabA = new Product({
			code: 'S-456',
			name: 'GalaxyTabA',
			details: 'Price: 299.99 USD & FREE shipping',
			company: samsung._id
		});

		galaxyTabA.save(function(err) {
			if (err) return console.error(err.stack);
			console.log('GalaxyTabA is added');
		});
	});

	res.send('Done Initial Data!');
};

exports.findAll = (req, res) => {
	Company.find()
		.then((products) => {
			res.send(products);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message
			});
		});
};
