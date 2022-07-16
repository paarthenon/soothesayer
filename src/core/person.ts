import {TypeNames, variant, VariantOf} from "variant";

/**
 * Appearance represents a character type.
 */
const Appearance = variant({
    /**
     * Person in poor clothes who
     */
    WasherWoman: {},
    /**
     * Rich man in fine clothes
     */
    FamilyPatriarch: {},
})
export type Appearance<T extends TypeNames<typeof Appearance> = undefined> = VariantOf<typeof Appearance, T>;

export interface Person {
    name: string;
    apperance: Appearance;
}