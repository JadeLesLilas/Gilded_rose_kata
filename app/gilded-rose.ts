import { Item } from "./item_model";
import { updateQualityForAgedBrie, updateQualityForBackstagePasses, updateQualityForConjuredGoods, updateQualityForNormalGoods } from "./update_quality_all_functions";


export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        this.items.forEach(item => {
            item.sellIn --;
            switch (item.name) {
                case "Aged Brie": {
                    updateQualityForAgedBrie(item);
                    break;
                }
                case "Backstage passes to a TAFKAL80ETC concert": {
                    updateQualityForBackstagePasses(item);
                    break;
                }
                case "Conjured": {
                    updateQualityForConjuredGoods(item);
                    break;
                }
                case "Sulfuras, Hand of Ragnaros" : {
                    item.quality = 80;
                    break;
                }
                default: updateQualityForNormalGoods(item);
            }
        })

        return this.items;
    }
}
