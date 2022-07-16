import {TypeNames, variant, VariantOf} from 'variant';

export const View = variant({
    About: {},
    Home: {},
    MainMenu: {},
    Options: {},
    /**
     * Doing a "reading" of the future.
     */
    Reading: {},
})
export type View<T extends TypeNames<typeof View> = undefined> = VariantOf<typeof View, T>