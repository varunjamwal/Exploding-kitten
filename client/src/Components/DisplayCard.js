import React from 'react';

import { Box, Center } from '@chakra-ui/react'

const imageStyle = {width: 40, height: 40, position: 'sticky', top: 10, left: '47%'}
const renderSwitch = (param) => {
    switch(param) {
      case 'Cat card':
        return <img style={imageStyle} alt = 'card' src = {require('../assets/cat.png')} />
      case 'Shuffle card':
        return <img style={imageStyle} alt = 'card' src = {require('../assets/shuffle.png')} />
      case 'Defuse card':
        return <img style={imageStyle} alt = 'card' src = {require('../assets/defuse.png')} />
      case 'Exploding kitten card':
        return <img style={imageStyle} alt = 'card' src = {require('../assets/bomb.png')} />
      default:
        return null;
    }
  }
const DisplayCard = ({ heading, cardLeft, status, defuseCards }) => (
    
    <Center h="500px">
    <Box
    m="18px"
    p="18px"
    border="1px"
    rounded="10px"
    borderColor="gray.300"
    boxShadow="md"
    bg="lavender"
    color="#2d383c"
    fontSize="1rem"
    textAlign="center"
    fontFamily="Consolas"
    w="700px"
    h="200px"
    isTruncated
    >
        {heading} <br></br>
        {renderSwitch(heading)}<br/>
          Cards Left: {cardLeft}<br></br>
          {status}<br></br>
          Defuse Cards Available: {defuseCards}<br></br>
    </Box>
    </Center>
);

export default DisplayCard;
