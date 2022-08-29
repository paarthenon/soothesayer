import {TypeNames, variant, VariantOf} from 'variant';
import {Pronoun} from './pronoun';

/**
 * Appearance represents a character type.
 *
 * Probably good to go with portraits
 * - https://fineartamerica.com/featured/4-jean-baptiste-faure-edouard-manet.html (generic man)
 * - https://fineartamerica.com/featured/1-beggar-with-a-duffle-coat-edouard-manet.html (male begger)
 * - https://fineartamerica.com/featured/1-portrait-of-jeanne-wenz-henri-de-toulouse-lautrec.html (wealthy woman)
 * - https://fineartamerica.com/featured/gypsy-will-bullas.html (gypsy)
 * -
 * - https://fineartamerica.com/featured/egyptian-woman-with-earrings-art-dozen.html (egyptian/gypsy)
 * - https://fineartamerica.com/featured/carmen-art-dozen.html (neutral woman)
 * - https://fineartamerica.com/featured/portrait-of-miss-katherine-elizabeth-lewis-art-dozen.html (aristocratic woman)
 * - https://fineartamerica.com/featured/portrait-of-a-young-man-by-hans-motionage-designs.html (young man)
 */
export const Appearance = variant({
    /**
     * Person in poor work-stained clothes
     */
    Worker: {},
    /**
     * Rich person in fine clothes
     */
    FamilyHead: {},
});
export type Appearance<T extends TypeNames<typeof Appearance> = undefined> = VariantOf<
    typeof Appearance,
    T
>;

export enum Wealth {
    Poor,
    Middle,
    High,
    Aristocrat,
}

export interface Person {
    name: string;
    pronoun: Pronoun;
    appearance: Appearance;
    /**
     * @deprecated DON'T USE IT. Not enough time.
     */
    wealth: Wealth;
}
