import { Box, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = props => (
  <Box
   style={{border:" solid 1px #F6F676",borderRadius:"20px"}}
    bg={useColorModeValue('rgb(214,214,212)', 'gray.700')}
    py='8'
    px={{ base: '4', md: '10' }}
    shadow='base'
    rounded={{ sm: 'lg' }}
    {...props}
  />
)
