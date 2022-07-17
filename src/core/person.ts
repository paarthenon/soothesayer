import {TypeNames, variant, VariantOf} from "variant";
import {Pronoun} from "./pronoun";

/**
 * Appearance represents a character type.
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
})
export type Appearance<T extends TypeNames<typeof Appearance> = undefined> = VariantOf<typeof Appearance, T>;

export enum Wealth {
    Poor,
    Middle,
    High,
    Aristocrat,
}

export interface Person {
    name: string;
    pronoun: Pronoun;
    apperance: Appearance;
    wealth: Wealth;
}