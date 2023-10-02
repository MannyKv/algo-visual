import React, {useState} from 'react';
import './App.css';
import {Box, Heading, Flex, Button, Link, Grid, Text, GridItem} from "@chakra-ui/react";
import Visualiser from "./components/Visualiser";
import BubbleSort from "./algorithms/BubbleSort";
function App() {
    const [data, setData] = useState([100,200,300,500,400,50,20,500,550,600]);

    const [sorting, setSorting] = useState(false);

    const BubbleSort = ()=>{
        setTimeout(() => {
             let newArr = [...data];
            for (let i = 0; i < data.length - 1; i++) {
                setTimeout(() => {
                    for (let j = i + 1; j < data.length; j++) {
                        if (newArr[i] > newArr[j]) {
                            let temp = newArr[i];
                            newArr[i] = newArr[j];
                            newArr[j] = temp;
                            let newStep = [...newArr];
                            setTimeout(() => {
                                setData([...newStep]);
                            }, j * 100);
                        }

                    }
                }, i * 1000);
            }
        }, 500);

    };
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
                    <Button onClick={BubbleSort}></Button>

                </Flex>
            </GridItem>
            <GridItem  rowSpan={5} colSpan={2} bg='#4A4E69' borderRadius={"20px"} >
                <Visualiser data={data}></Visualiser>
            </GridItem>

        </Grid>
    );
}

export default App;
