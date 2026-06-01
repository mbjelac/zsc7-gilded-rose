export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.update(this.items[i]);
    }

    return this.items;
  }

  private update(item: Item) {
    if (item.name == 'Sulfuras, Hand of Ragnaros') {
      return;
    }

    item.sellIn = item.sellIn - 1;

    switch(item.name) {
      case 'Aged Brie':
        this.handleAgedBrie(item);
        return;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.handleBackstagePasses(item);
        return;
      case 'Conjured':
        this.decreaseQuality(item);
        this.decreaseQuality(item);
        return;
      default:
        this.decreaseQuality(item);
        if (item.sellIn < 0) {
          this.decreaseQuality(item);
        }
    }
  }

  private decreaseQuality(item: Item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1
    }
  }

  private handleBackstagePasses(item: Item) {
    if (item.sellIn < 10) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
    if (item.sellIn < 5) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }

    if (item.sellIn < 0) {
      item.quality = 0
    }
  }

  private handleAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }
}
