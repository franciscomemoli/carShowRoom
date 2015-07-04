'use strict';

/**
 * @ngdoc service
 * @name carShowRoomApp.carService
 * @description
 * # carService
 * Factory in the carShowRoomApp.
 */
angular.module('carShowRoomApp')
  .factory('carService', function ($q) {
    // Public API here
    return {
      getAll: function () {
      	var deferred = $q.defer();
        var data = [
        		{
        		id: 1,
        		image:  'images/cars/car_1.jpg',
				model:  'luna',
				year :  '1981',
				brand:  'mercedez',
				price:  8482363,
        		},
        		{
        		id: 2,
        		image:  'images/cars/car_2.jpg',
				model:  'night',
				year :  '1982',
				brand:  'lamborghini',
				price:  8482363,
        		},
        		{
        		id: 3,
        		image:  'images/cars/car_3.jpg',
				model:  'fit',
				year :  '1983',
				brand:  'lamborghini',
				price:  8482363,
        		},
        		{
        		id: 4,
        		image:  'images/cars/car_4.jpg',
				model:  'sport',
				year :  '1984',
				brand:  'toyota',
				price:  8482363,
        		},
        		{
        		id: 5,
        		image:  'images/cars/car_5.jpg',
				model:  'fit',
				year :  '1985',
				brand:  'audi',
				price:  8482363,
        		},
        		{
        		id: 6,
        		image:  'images/cars/car_6.jpg',
				model:  'fit',
				year :  '1986',
				brand:  'ferrari',
				price:  8482363,
        		},
        		{
        		id: 7,
        		image:  'images/cars/car_7.jpg',
				model:  'fit',
				year :  '1987',
				brand:  'Koenigsegg',
				price:  8482363,
        		},];
        	deferred.resolve(data);
            return deferred.promise;
      }
    };
  });




