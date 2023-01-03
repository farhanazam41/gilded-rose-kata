// The reason to separate the update functions from the main file is to make the main file more readable
// and to make the update functions more testable.
// We separated the function for each item because each item has different logic.

function updateBrie(item) {  // updateBrie is a function for the Brie item only (not generic)
	if (item.quality < 50) {
		item.quality = item.quality + 1;
	}
	item.sellIn = item.sellIn - 1;

	if (item.sellIn < 0 && item.quality < 50) {
		item.quality = item.quality + 1;
	}
}
function updateBackstage(item) {   // updateBackstage is a function for the Backstage item only (not generic)
	if (item.quality < 50) {
		item.quality = item.quality + 1;
		if (item.sellIn < 11 && item.quality < 50) {
			item.quality = item.quality + 1;
		}
		if (item.sellIn < 6 && item.quality < 50) {
			item.quality = item.quality + 1;
		}
	}

	item.sellIn = item.sellIn - 1;

	if (item.sellIn < 0) {
		item.quality = item.quality - item.quality;
	}
}
function updateSulfuras(item) {
    // As per requiremnts, there is no need to add logic in this function because 
    //Sulfuras is a legendary item that never has to be sold or decreases in Quality  
	// do nothing
}
function updateNormal(item) {   // updateNormal is a generic function that can be used for all items except Brie, Backstage and Sulfuras
	if (item.quality > 0) {
		item.quality = item.quality - 1;
	}

	item.sellIn = item.sellIn - 1;

	if (item.sellIn < 0 && item.quality > 0) {
		item.quality = item.quality - 1;
	}
}

module.exports = {
	updateBackstage,
	updateBrie,
	updateSulfuras,
	updateNormal,
};
