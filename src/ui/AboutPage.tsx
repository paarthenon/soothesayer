import {Box, Heading, List, ListItem, Text} from '@chakra-ui/react';
import {MenuView} from 'core/view';
import {Link} from './Link';

export const AboutPage = () => (
    <Box>
        <Text>A game made for GMTK 2022 by Paarth and Boibi</Text>

        <Heading>Credits & Attributions</Heading>
        <Text>
            This game would not have been possible without the use of these wonderful
            freely available assets created by the community and artists of the past.
        </Text>

        <List>
            <ListItem>
                https://fineartamerica.com/featured/1-portrait-of-jeanne-wenz-henri-de-toulouse-lautrec.html
            </ListItem>
            <ListItem>
                "Stay the Course" Kevin MacLeod (incompetech.com)
            Licensed under Creative Commons: By Attribution 4.0 License
            http://creativecommons.org/licenses/by/4.0/
            </ListItem>
            <ListItem>
                https://www.metmuseum.org/art/collection/search/338232
            </ListItem>
            <ListItem>
                Altar image - 
                https://www.meisterdrucke.ie/fine-art-prints/Henri-Matisse/1550504/Still-Life-with-Books-and-Candle.html
            </ListItem>
        </List>

        <Link goto={MenuView.MainMenu()} text="back" />
    </Box>
);
