import * as React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    defineConfig,
    defineRecipe,
} from '@chakra-ui/react';
import {createSystem, defaultConfig } from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persister} from './redux/store';
import {App} from './App';
import {ColorModeProvider} from './components/ui/color-mode';


export const myTheme = createSystem(defaultConfig, defineConfig({
    // globalCss: (props: any) => ({
    //     body: {
    //         color: mode('red.900', '#d38870')(props),
    //         bg: mode('#DFD7D6', '#1c081c')(props),
    //     },
    // }),
    theme: {
        recipes: {
            ul: defineRecipe({
                base: {
                    listStyleType: 'none',
                }
            }),
        },
        semanticTokens: {
            colors: {
                fg: {
                    value: {base: 'red.900', _dark: '#d38870'}
                },
                bg: {
                    value: {base: '#DFD7D6', _dark: '#1c081c'}
                }
            },
        }
    }
}));

export const Container = () => (
    <Provider store={store}>
        <PersistGate persistor={persister} loading={<div>Your app is loading.</div>}>
            <ChakraProvider value={myTheme}>
                <ColorModeProvider>
                    <App />
                </ColorModeProvider>
            </ChakraProvider>
        </PersistGate>
    </Provider>
);
