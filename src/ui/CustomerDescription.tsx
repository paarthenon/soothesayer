import {Appearance, Person} from '@/core/person';
import {caps} from '@/core/stringUtil';
import {match} from 'variant';


interface CustomerDescriptionProps {
    customer: Person;
}
export const CustomerDescription = ({customer}: CustomerDescriptionProps) => {
    return match(customer.appearance, {
        FamilyHead: _ => (
            <>
                {caps(customer.pronoun.they)} is wearing a fine outfit today.{' '}
                {caps(customer.pronoun.their)} clothes are tastefully tailored with modest
                but well-crafted decorations.
            </> 
        ),
        Worker: _ => (
            <>
                {caps(customer.pronoun.they)} is dressed in simple work clothes. The
                fabric is wrinkled and lightly stained, but functional.{' '}
            </>
        ),
        TravelingSoldier: _ => (
            <>
                {caps(customer.pronoun.they)} is sporting a sharp uniform, with reinforced panels
                along {customer.pronoun.their} chestplate and leggings.
            </>
        )
    });
};

