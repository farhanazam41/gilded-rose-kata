// Best practices that I followed to refactor this code:
// 1. Use constants instead of magic strings
// 2. Use switch statement instead of nested if/else
// 3. Use continue instead of else
// 4. Use destructuring assignment
// 5. Modularize code & extract common logic into shared utiity functions
// 6. Keep code DRY
// 7. Remove unnecessary code
// 8. Use decriptive & meaningful variable & funcation names
// 9. Use comments to explain the purpose of code

const { BRIE, BACKSTAGE, SULFURAS } = require("../constants");
const {
	updateBrie,
	updateBackstage,
	updateSulfuras,
	updateNormal,
} = require("../update_utils.js");

class Item {
	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

class Shop {
	constructor(items = []) {
		this.items = items;
	}
	updateQuality() {
		for (const item of this.items) {
			switch (item.name) {
				case BRIE:
					updateBrie(item);
					continue;
				case BACKSTAGE:
					updateBackstage(item);
					continue;
				case SULFURAS:
					updateSulfuras(item);
					continue;
				default:
					updateNormal(item);
					continue;
			}
		}
		return this.items;
	}
}

module.exports = {
	Item,
	Shop,
};
