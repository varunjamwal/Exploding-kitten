import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Input,
    InputGroup,
    VStack,
    Button,
    Divider,
    Center,
    Box } from '@chakra-ui/react'
import {addUser} from '../redux/actions/ActionCreator'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState([]);
    const handleChange = (event) => {  
      setUser(event.target.value)
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
  };
    const handleClick = () => {  
      fetch('http://localhost:8080/addUser?' + new URLSearchParams({
        user: user,
    }), requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
     dispatch(addUser(user))
     navigate('/home');
    }
    return ( 
        <Center h="500px">
        <VStack spacing="4">
          <Box>Enter User Name</Box>
          <InputGroup>
            <Input
             // onChange={handleChange}
              name="username"
              type="text"
              placeholder="User Name"
              value={user}
              onChange={handleChange}
            />
          </InputGroup>
          <Button
            isFullWidth
            onClick={handleClick}
            colorScheme="green"
            //isLoading={isLoading}
          >
            Login
          </Button>
          <Divider />
        </VStack>
      </Center>
        );
}

export default Login;