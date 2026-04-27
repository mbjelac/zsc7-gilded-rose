import { Item, GildedRose } from '@/gilded-rose';



describe('Gilded Rose', () => {
  it('should lower quality and sell in by one', () => {
    //given
    const gildedRose = new GildedRose([new Item('foo', 10, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
  });

  it('quality should degrade by one', () => {
    //given
    const gildedRose = new GildedRose([new Item('foo', 1, 1)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(0);
  });

  it('quality should not go below zero', () => {
    //given
    const gildedRose = new GildedRose([new Item('foo', 1, 0)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(0);
  });

  it('quality should degrade twice as fast after the sell date has passed', () => {
    //given
    const gildedRose = new GildedRose([new Item('foo', 0, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(8);
  });

  it('quality of an item should never be more than 50', () => {
    //given
    const gildedRose = new GildedRose([new Item('foo', 10, 51)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(50);
  });

  it('Aged Brie should increase in quality the older it gets', () => {
    //given
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(11);
  });

  it('Aged Brie should not increase in quality above 50', () => {
    //given
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(50);
  });

  it('"Sulfuras, Hand of Ragnaros" should never change Sell In or Quality', () => {
    //given
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(10);
  });

  it('Backstage passes should increase in quality by 3 if 5 days or less', () => {
    //given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(13);
  });

  it('Backstage passes should increase in quality by 2 if 10 days or less (but more than 5)', () => {
    //given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(12);
  });

  it('Backstage passes should increase in quality by 1 if more than 10 days', () => {
    //given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(11);
  });

  it('Backstage passes should increase in quality by 1 if more than 10 days', () => {
    //given
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
    //when
    const items = gildedRose.updateQuality();
    //then
    expect(items[0].quality).toBe(0);
  });
})


