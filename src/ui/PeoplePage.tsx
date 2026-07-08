import {Box, List, Text } from '@chakra-ui/react';
import {Wealth} from '@/core/person';
import {useMemo} from 'react';
import {useGame} from '@/redux/hooks'
import {Link} from './Link';
import {View} from '@/core/view';


export const PeoplePageDebug = () => {
    const people = useGame(g => g.people);

    const personList = useMemo(() => Object.values(people), [people]);

    return (
        <Box>
            <Text>Person list has {personList.length} entries.</Text>
            <List.Root listStyleType='none'>
                {personList.map((person, index) => (
                    <List.Item key={person.id}>{index} - <Link goto={View.Person_debug({personId: person.id})}>{person.name}</Link> - {person.pronoun.they}/{person.pronoun.them} - {person.appearance.type} - {Wealth[person.wealth]}</List.Item>
                ))}
            </List.Root>
        </Box>
    );
}
