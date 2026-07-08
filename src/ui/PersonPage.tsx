import {useGame} from '@/redux/hooks';
import {Link} from './Link';
import {View} from '@/core/view';
import {Box, Center, Image } from '@chakra-ui/react';
import {CustomerPortrait} from './CustomerPortrait';


interface PersonPageProps {
   personId: string;
}
export const PersonPage = ({personId}: PersonPageProps) => {
    const person = useGame(g => g.people[personId]);
   return (
      <Box>
        <Center>
            <CustomerPortrait customer={person} />
        </Center>
        <Box>
            {person.name}
        </Box>
        <Link goto={View.People_debug()}>People list</Link>
      </Box>
   )
}