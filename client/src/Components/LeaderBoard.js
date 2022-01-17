import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table,
    Thead,
    Tbody,
    Heading,
    Tr,
    Th,
    Td,
    Center,
    VStack
 } from '@chakra-ui/react'


const LeaderBoard = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getScore")
          .then((response) => response.json())
          .then((json) => {
              console.log(data)
            setData(json);
          });
      }, []);

    return ( 
        
        <>
        <Center h="500px">
            <Heading top={0} p={15} pos="fixed">
            LeaderBoard {" "}
        </Heading>
        <Table
            maxW="88%"
            m={15}
            mt={20}
            shadow="base"
            rounded="lg"
            variant="striped"
            colorScheme="facebook"
        >
                <Thead>
                    <Tr>
                        <Th>Id</Th>
                        <Th>User</Th>
                        <Th>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((data,key) => (
                        <Tr key={key}>
                            <Td>{key + 1}</Td>
                            <Td>{data.user}</Td>
                            <Td>{data.score}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </Center></>
        );
}

export default LeaderBoard;