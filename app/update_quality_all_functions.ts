
/**Fichier répértoriant toutes les fonctions pour chaque type de biens voyant sa qualité évoluer (tous les biens sauf les "Sulfuras, Hand of Ragnaros") */



/**Fonction créée pour les biens du type "BackstagePasses" 
 * 
 * Principe de variation de la quantité : la qualité augmente de plus en plus au fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item
 * */

export function updateQualityForBackstagePasses(item) {
  

}

/**Fonction créée pour les biens du type "Aged Brie" 
 * 
 * Principe de variation de la quantité : la qualité augmente fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item
 * */

export function updateQualityForAgedBrie(item) {
}

/**Fonction créée pour les biens 'normaux'
 * 
 * Principe de variation de la quantité : la qualité baisse au fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item 
 */
export function updateQualityForNormalGoods(item) {

}

/**Fonction créée pour les biens de type "Conjured"
 * 
 * Principe de variation de la quantité : la qualité baisse deux fois plus vite que les biens normaux au fur et à mesure que la valeur 'SellIn' diminue
 * 
 * @param item 
 */
export function updateQualityForConjuredGoods(item) {

}