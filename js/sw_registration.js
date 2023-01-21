if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Registration has worked!');
	})
	.catch(function() {
		console.log('Registration has failed!');
	});
}