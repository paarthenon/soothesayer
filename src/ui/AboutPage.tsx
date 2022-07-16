import {Box, Heading, List, ListItem, Text} from "@chakra-ui/react";
import {View} from "core/view";
import {Link} from "./Link";

export const AboutPage = () => (
    <Box>
        <Text>A game made for GMTK 2022.</Text>

        <Heading>Credits & Attributions</Heading>
        <Text>
            This game would not have been possible without the use 
            of these wonderful freely available assets created by 
            the community
        </Text>

        <List>
            <ListItem>
                Person — Work
            </ListItem>
        </List>

        <Link goto={View.MainMenu()} text='back' />
    </Box>
)