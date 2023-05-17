import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const PaymentSuccess = () => {



    
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                    Reference No.25789045
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess