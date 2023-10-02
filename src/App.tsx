import React from 'react';
import './App.css';
import {Box, Heading, Flex, Button, Link, Grid, Text, GridItem} from "@chakra-ui/react";
import Visualiser from "./components/Visualiser";
const data = [10,20,30,50,40];
function App() {
    return (
        <Grid
            h={"100vh"}
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(3, 1fr)'
            padding={"30px"}
            gap={10}
        >
            <GridItem rowSpan={1} colSpan={3}>
                <Flex>
                    <Text className="Header" color={"F2E9E4"}
                    >Algo-Visu</Text>
                </Flex>
            </GridItem>
            <GridItem alignContent={"center"} rowSpan={5} colSpan={1} minHeight={'100%'} bg='#4A4E69' borderRadius={"20px"}>
                <Flex alignItems={"center"}>
                    <Text fontSize={'2xl'}
                          color={"#F2E9E4"}
                          fontFamily={"Montserrat"}>Choose The Sort Algorithm</Text>


                </Flex>
            </GridItem>
            <GridItem  rowSpan={5} colSpan={2} bg='#4A4E69' borderRadius={"20px"} >
                <Visualiser data={data}></Visualiser>
            </GridItem>

        </Grid>
    );
}

export default App;
