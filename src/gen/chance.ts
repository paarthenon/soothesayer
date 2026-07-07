import {Chance} from 'chance';
import {VariantModule} from 'variant';

export const chance = new Chance();
export default chance;

export function pickVariant<V extends VariantModule<string>>(v: V) {
    return chance.pickone(Object.values(v)) as V[keyof V];
}
