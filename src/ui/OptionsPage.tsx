import {Box, Text } from '@chakra-ui/react';
import {ColorModeSwitcher} from '@/ColorModeSwitcher';
import {MenuView} from '@/core/view';
import {Link} from './Link';

export const OptionsPage = () => (
    <Box>
        <ColorModeSwitcher justifySelf="flex-end" />

        <Text>Use light or dark mode.</Text>

        <Link goto={MenuView.MainMenu()} text="back" />
    </Box>
);
