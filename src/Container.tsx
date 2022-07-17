import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    extendTheme,
} from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools';
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"
import {store, persister} from "redux/store"
import {App} from "App"

const myTheme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles: {
        global: (props: any) => ({
          body: {
            color: mode('red.900', '#d38870')(props),
            bg: mode('#DFD7D6', '#1c081c')(props),
          },
        }),
      }
});

export const Container = () => (
    <Provider store={store}>
        <PersistGate persistor={persister} loading={
            <div>
                Your app is loading.
            </div>
        }>
            <ChakraProvider theme={myTheme}>
                <Box textAlign="center" fontSize="xl">
                    <Grid minH="100vh" p={3}>
                        <VStack spacing={8}>
                            <App />
                        </VStack>
                    </Grid>
                </Box>
            </ChakraProvider>
        </PersistGate>
    </Provider>
)
