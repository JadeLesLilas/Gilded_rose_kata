import { expect } from 'chai';
import { GildedRose } from '../app/gilded-rose';
import { Item } from '../app/item_model';

describe('Gilded Rose', function () {

    it('should add a new Item', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        expect(gildedRose.items[0].name).to.equal('foo');
        expect(gildedRose.items[0].sellIn).to.equal(0);
        expect(gildedRose.items[0].quality).to.equal(0);
    });

});

describe('aged brie update of quality', function () {

    it('should the quality increase', function() {
        const gildedRose = new GildedRose([   new Item("Aged Brie", 2, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
        expect(items[0].sellIn).to.equal(1);
    });

});


