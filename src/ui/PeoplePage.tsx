import {Box, List, ListItem, Text} from '@chakra-ui/react'
import {Wealth} from '@/core/person';
import {useMemo} from 'react';
import {useGame} from '@/redux/hooks'


export const PeoplePageDebug = () => {
    const people = useGame(g => g.people);

    const personList = useMemo(() => Object.values(people), [people]);


    return (
        <Box>
            <Text>Person list has {personList.length} entries.</Text>
            <List>
                {personList.map((person, index) => (
                    <ListItem key={person.id}>{index} - {person.name} - {person.pronoun.they}/{person.pronoun.them} - {person.appearance.type} - {Wealth[person.wealth]}</ListItem>
                ))}
            </List>
        </Box>
    )
}
