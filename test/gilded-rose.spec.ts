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

describe('Aged Brie items update of quality', function () {

    it('should the quality increase', function() {
        const gildedRose = new GildedRose([   new Item("Aged Brie", 2, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(3);
    });

    it('should the quality stop increasing when it is 50', function() {
        const gildedRose = new GildedRose([   new Item("Aged Brie", 2, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(50);
    });

});


describe('Backstage passes to a TAFKAL80ETC concert update of quality', function () {

    it('should the quality increase by 3 when sellIn < 5', function() {
        const gildedRose = new GildedRose([   new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(3);
        expect(items[0].quality).to.equal(13);
    });

    it('should the quality increase by 2 when sellIn < 10', function() {
        const gildedRose = new GildedRose([   new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(22);
    });

    it('should the quality decrease to 0', function() {
        const gildedRose = new GildedRose([   new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});

describe('Conjured items', function () {

    it('should the quality decrease by 2', function() {
        const gildedRose = new GildedRose([   new Item("Conjured", 3, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(3);
    });

    it('should the quality decrease by 4 when the sellIn <0', function() {
        const gildedRose = new GildedRose([   new Item("Conjured", -1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-2);
        expect(items[0].quality).to.equal(6);
    });

    it('should the quality decrease but not be less than 0', function() {
        const gildedRose = new GildedRose([   new Item("Conjured", 5, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(0);
    });

});

describe('Normal items update of quality', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("normal", 15, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(39);
    });

    it('should the quality decrease twice as fast when sellIn <0 ', function() {
        const gildedRose = new GildedRose([   new Item("normal", 0, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

});

describe('Sulfuras items', function () {

    it('should the quality decrease', function() {
        const gildedRose = new GildedRose([   new Item("Sulfuras, Hand of Ragnaros", 15, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(80);
    });

});