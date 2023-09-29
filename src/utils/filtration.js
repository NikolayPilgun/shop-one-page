import { dataCards } from "../data/dataCards";

export let filteredArray = [];
const dataFilter = {
	season: [],
	color: [],
	size: [],
};
export const inputCheck = {
	summer: false,
	spring: false,
	winter: false,
	autumn: false,
	red: false,
	black: false,
	white: false,
	yellow: false,
	long: false,
	short: false,
	thinnest: false,
};
export let filteringStatus = {
	firstBoot: true,
};

const findPropertyKey = (value) => {
	for (let i = 0; i < dataCards.length; i++) {
		let keyObj = Object.keys(dataCards[i]).find(
			(key) => dataCards[i][key] === value
		);
		if (keyObj) {
			return keyObj;
		}
	}
};

const filtrationData = (value, event) => {
	const properties = findPropertyKey(value);
	if (event) {
		let filteredArr = dataCards.filter((card) => card[properties] === value);
		dataFilter[properties] = [...dataFilter[properties], ...filteredArr];
	} else {
		let filteredArr = dataFilter[properties].filter(
			(card) => card[properties] !== value
		);
		dataFilter[properties] = filteredArr;
	}
};

const searchForMatches = (arr1, arr2) => {
	let concatenatedArray = [];

	for (let i = 0; i < arr1.length; i++) {
		let cache = arr1[i];

		for (let j = 0; j < arr2.length; j++) {
			if (cache.id === arr2[j].id) {
				concatenatedArray.push(arr2[j]);
			}
		}
	}
	return concatenatedArray;
};

export const mergeFilterResult = (value, event) => {
	inputCheck[value] = event;
	filtrationData(value, event);
	let gluingArray = [];
	for (let key in dataFilter) {
		if (dataFilter[key].length > 0) gluingArray.push(dataFilter[key]);
	}

	if (gluingArray.length === 3) {
		let firstPass = searchForMatches(gluingArray[0], gluingArray[1]);
		let secondPass = searchForMatches(firstPass, gluingArray[2]);

		filteredArray = secondPass;
	} else if (gluingArray.length === 2) {
		filteredArray = searchForMatches(gluingArray[0], gluingArray[1]);
	} else if (gluingArray.length === 1) {
		filteredArray = gluingArray[0];
	} else {
		filteredArray = dataCards;
	}
};
