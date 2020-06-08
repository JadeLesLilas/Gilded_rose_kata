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


describe('Backstage passes to a TAFKAL80ETC concert update of quality', function () {

    it('should the quality increase', function() {
        const gildedRose = new GildedRose([   new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(13);
        expect(items[0].sellIn).to.equal(3);
    });
});

describe('Backstage passes to a TAFKAL80ETC concert update of quality  when sellIn < 0 ', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-1);
    });
});

describe('Conjured Goods update of quality', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("Conjured", 3, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
        expect(items[0].sellIn).to.equal(2);
    });

});

describe('Quality for Conjured Goods should not be less than 0', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("Conjured", 5, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(4);
    });

});

describe('Quality for Normal and Conjured Goods should degrades twice as fast', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("normal", 0, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[0].sellIn).to.equal(-1);
    });

});

describe('Normal Goods update of quality', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("normal", 15, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(39);
        expect(items[0].sellIn).to.equal(14);
    });

});

