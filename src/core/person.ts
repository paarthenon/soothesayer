import {TypeNames, variant, VariantOf} from "variant";

/**
 * Appearance represents a character type.
 */
export const Appearance = variant({
    /**
     * Person in poor work-stained clothes
     */
    WasherWoman: {},
    /**
     * Rich man in fine clothes
     */
    FamilyPatriarch: {},
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
    apperance: Appearance;
    wealth: Wealth;
}