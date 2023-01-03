const {Shop, Item} = require("../src/gilded_rose.js");
const tests = require('../tests.json');

describe("Gilded Rose", function() {
  for( const test of tests ){
    const [ name, sellIn, quality, outputSellIn, outputQuality ] = test;
    const description = {
      name,
      sellIn,
      quality,
      outputSellIn,
      outputQuality
    }
    
    it(JSON.stringify(description), () => {
      const gildedRose = new Shop([ new Item(name, sellIn, quality) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(outputSellIn);
      expect(items[0].quality).toEqual(outputQuality);
    })
  }


// code to generate output in tests.json file
  // it(
  //   "should foo", () => {
  //     const names = [
  //       "Aged Brie",
  //       "Backstage passes to a TAFKAL80ETC concert",
  //       "Sulfuras, Hand of Ragnaros",
  //       "normal item"
  //     ]
    
  //     const tests = []
  //     const [ minSellIn, maxSellIn ] = [ -1, 12 ];
  //     const [ minQuality, maxQuality ] = [ -1, 51 ];
      
  //     for(const name of names){
  //       for(let sellIn = minSellIn; sellIn <= maxSellIn; sellIn++){
  //         for(let quality = minQuality; quality <= maxQuality; quality++){
  //          const gildedRose = new Shop([ new Item(name, sellIn, quality) ]);
  //           const items = gildedRose.updateQuality();
    
  //           const outputSellIn = items[0].sellIn;
  //           const outputQuality = items[0].quality;
    
  //           tests.push([
  //             name,
  //             sellIn,
  //             quality,
  //             outputSellIn,
  //             outputQuality
  //           ])
  //         }
  //       }
  //     }
    
  //     console.log(JSON.stringify(tests))
  //     console.log(tests.length)
  //   }
  // )
});
