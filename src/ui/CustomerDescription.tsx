import {Image} from "@chakra-ui/react";
import {Appearance, Person} from "core/person"
import {caps} from "core/stringUtil";
import {match} from "variant";

interface CustomerDescriptionProps {
    customer: Person;
}
export const CustomerDescription = ({customer}: CustomerDescriptionProps) => {
    return match(customer.appearance, {
        FamilyHead: _ => <>
            {caps(customer.pronoun.they)} is wearing a fine outfit today. {caps(customer.pronoun.their)} clothes
            {' '}
            are tastefully tailored with modest but well-crafted decorations.
        </>,
        Worker: _ => <>Worker</>
    })
}

export const CustomerPortrait = ({customer}: CustomerDescriptionProps) => {
    let srcMap: Record<Appearance['type'], string> = {
        FamilyHead: '',
        Worker: '',
    };

    return <Image src={'https://via.placeholder.com/250x400'}></Image>
}