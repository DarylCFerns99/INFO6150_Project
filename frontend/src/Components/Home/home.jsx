import React from 'react'
import TabOptions from './TabOptions/tabOptions'
import { ChakraProvider } from '@chakra-ui/react'

const Home = () => {
    return (
        <ChakraProvider>
            <div>
                <TabOptions/>
            </div>
        </ChakraProvider>
    )
}

export default Home