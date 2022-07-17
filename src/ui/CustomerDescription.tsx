import {Person} from "core/person"
import {match} from "variant";

interface CustomerDescriptionProps {
    customer: Person;
}
export const CustomerDescription = ({customer}: CustomerDescriptionProps) => {
    return match(customer.apperance, {
        FamilyHead: _ => <>
            {customer.pronoun.they} is wearing a fine outfit. {customer.pronoun.their} clothes are tastefully tailored with modest but well-crafted decorations.
        </>,
        Worker: _ => <>Worker</>
    })
}