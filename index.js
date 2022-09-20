// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return new Set(filmingLocations).size;
}
//console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`);

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function compare (a, b)
{
	return new Date(b.fields.date_debut) - new Date(a.fields.date_debut) ;
}
function sortFilmingLocationsByStartDate () {
	return filmingLocations.sort(compare);
}
/*let a =sortFilmingLocationsByStartDate()
console.log(a[0])
console.log(a[a.length-1])*/

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result

function getFilmingLocationsNumber2020 () {
	let a = 0
	for (let i=0;i<filmingLocations.length;i++)
	{
		if((new Date (filmingLocations[i].fields.date_debut).getFullYear() == 2020) )
		a=a+1
	}
	return a
}
//console.log("Number of filming locations in 2020 : "+getFilmingLocationsNumber2020())


// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result

function getFilmingLocationsNumberYear(year) {
	let a = 0
	for (let i=0;i<filmingLocations.length;i++)
	{
		if((new Date (filmingLocations[i].fields.date_debut).getFullYear() == year) )
			a=a+1
	}
	return a
}

function getFilmingLocationsNumberPerYear () {
	let a = {}

	for (let i = 2016; i < 2022; i++)
	{
		a[i]=getFilmingLocationsNumberYear(i)
	}
	return a
}
//const filmingLocationsPerYear = getFilmingLocationsNumberPerYear()
//console.log(filmingLocationsPerYear)

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberDistrict(district) {
	let count = 0
	for (let i=0;i<filmingLocations.length;i++)
	{
		if(filmingLocations[i].fields.ardt_lieu == district )
			count+=1
	}
	return count
}
function getFilmingLocationsNumberPerDistrict () {
	let dico ={}
	let list = []
	for(let i=0;i<filmingLocations.length;i++)
	{
		let ardt=filmingLocations[i].fields.ardt_lieu
		if(!(list.includes(ardt)))
			list.push(ardt)
	}
	list.sort()
	for (let i=0;i<list.length;i++ )
	{
		dico[list[i]]=getFilmingLocationsNumberDistrict(list[i])
	}
	return dico
}
//const filmingLocationsPerDistrict = getFilmingLocationsNumberPerDistrict()
//console.log(filmingLocationsPerDistrict)

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmingLocationsNumberDistrict(district) {
	let nb = 0
	for (let i=0;i<filmingLocations.length;i++)
	{
		if(filmingLocations[i].fields.ardt_lieu == district )
			nb+=1
	}
	return nb
}
function getFilmLocationsByFilm () {
	return []
}
console.log(filmingLocations[0].fields.nom_tournage)

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	return ''
}

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	return []
}

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	return []
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
