
/**Fichier répértoriant toutes les fonctions pour chaque type de biens voyant sa qualité évoluer (tous les biens sauf les "Sulfuras, Hand of Ragnaros") */

import { Item } from "./item_model";


/**La qualité d'un produit (excepté les produits "Sulfura") doit être située entre 0 et 50*/
const maxQuality = 50;
const minQuality = 0;


 const increaseOfQuality = (item) =>{
    item.quality < maxQuality ? item.quality++ : item.quality;
}

const decreaseOfQuality = (item) =>{
    item.quality > minQuality ? item.quality-- : item.quality;
}

const decreaseOfQualityConjuredGoods = (item) =>{
    item.quality > minQuality ? item.quality-=2 : item.quality;
}
/**Fonction créée pour les biens du type "BackstagePasses" 
 * 
 * Principe de variation de la quantité : la qualité augmente de plus en plus au fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item
 * */

export function updateQualityForBackstagePasses(item) {
    increaseOfQuality(item);
    item.sellIn < 11 ? increaseOfQuality(item) : item.quality = item.quality;
    item.sellIn < 6 ? increaseOfQuality(item) : item.quality = item.quality;
    if (item.sellIn < 0) {
        item.quality = 0;
    }
}

/**Fonction créée pour les biens du type "Aged Brie" 
 * 
 * Principe de variation de la quantité : la qualité augmente fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item
 * */

export function updateQualityForAgedBrie(item): Item {
    increaseOfQuality(item);
    return item;
}

/**Fonction créée pour les biens 'normaux'
 * 
 * Principe de variation de la quantité : la qualité baisse au fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item 
 */
export function updateQualityForNormalGoods(item) {
    decreaseOfQuality(item);
    if (item.sellIn < 0) {
        decreaseOfQuality(item)
    }
    return item;
}

/**Fonction créée pour les biens de type "Conjured"
 * 
 * Principe de variation de la quantité : la qualité baisse deux fois plus vite que les biens normaux au fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item 
 */
export function updateQualityForConjuredGoods(item) {
    decreaseOfQualityConjuredGoods(item);
    if (item.sellIn < 0) {
        decreaseOfQualityConjuredGoods(item);
    }
    return item;
}