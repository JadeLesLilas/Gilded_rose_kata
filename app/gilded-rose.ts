import { Item } from "./item_model";
import { updateQualityForAgedBrie } from "./update_quality_all_functions";

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Item[] {

        this.items.forEach(item => {
            item.sellIn--;
            if (item.name === "Aged Brie") {
                updateQualityForAgedBrie(item)
            }
            // switch (item.name) {
            //     case "Aged Brie": {
            //         item =updateQualityForAgedBrie(item);
            //         break;
            //     }
            //     case "Backstage passes to a TAFKAL80ETC concert": {
            //         updateQualityForBackstagePasses(item);
            //         break;
            //     }
            //     case "Conjured": {
            //         updateQualityForConjuredGoods(item);
            //         break;
            //     }
            //     default: updateQualityForNormalGoods(item);
            // }
        })

        return this.items;
    }
}
