import {fields, TypeNames, variant, VariantOf} from 'variant';

export const MenuView = variant({
    About: {},
    Game: {},
    MainMenu: {},
    Options: {},
});
export type MenuView<T extends TypeNames<typeof MenuView> = undefined> = VariantOf<
    typeof MenuView,
    T
>;

export const View = variant({
    Home: {},
    Reading: fields<{
        customerId: string;
    }>(),
    People_debug: {},
    Tutorial: {},
})
export type View<T extends TypeNames<typeof View> = undefined> = VariantOf<typeof View, T>;

