///<reference path="./../typings/index.d.ts" />

module ASG {

	var app : ng.IModule = angular.module('angularSuperGallery', ['ngAnimate']);

	app.filter('asgBytes', () => {
		return function (bytes : any, precision : number) : string {

			if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return ''
			if (bytes === 0) return '0';
			if (typeof precision === 'undefined') precision = 1;

			var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
				number = Math.floor(Math.log(bytes) / Math.log(1024));

			return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];

		}
	});

}

