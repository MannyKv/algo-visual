import React, {useState} from 'react';
import './App.css';
import {Box, Heading, Flex, Button, Link, Grid, Text, GridItem} from "@chakra-ui/react";
import Visualiser from "./components/Visualiser";
import BubbleSort from "./algorithms/BubbleSort";
import {resolve} from "dns/promises";
function App() {
    const [data, setData] = useState([100,200,300,500,400,50,20,500,550,600]);
    const maxValue = Math.max(...data.map(o => o), 0);
    const [sorting, setSorting] = useState(false);
    const colorArray: number[] = Array(data.length).fill(0)
    const [color , setColor] = useState([...colorArray]);
    const barColors=['#C9ADA7', '#ADA7C9', '#A7C9AD']
    const BubbleSort = async () => {
        await new Promise<void>((resolve, reject) => {
            setTimeout(async () => {
                let colorArrayOriginal = [...color];
                let newArr = [...data];
                let sorted = true;

                for (let i = 0; i < data.length - 1; i++) {
                    console.log('checking this index' + i)
                    for (let j = 0; j < data.length - i - 1; j++) {
                        let newColorArray = [...colorArrayOriginal];
                        newColorArray[j] = 1;
                        newColorArray[j + 1] = 1;
                        setColor([...newColorArray]);
                        if (newArr[j] > newArr[j + 1]) {
                            let temp = newArr[j];
                            newArr[j] = newArr[j + 1];
                            newArr[j + 1] = temp;


                            let newStep = [...newArr];

                            await new Promise(resolve => setTimeout(resolve, j * 150));


                            setData([...newStep]);
                            sorted = false;
                        }

                    }

                    if (sorted) {
                        resolve();
                        break;
                    }
                }
                console.log('I am here');
                setColor(Array(data.length).fill(2));
            }, 500);
        });
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
                <Visualiser data={data} maxValue={maxValue} colorArray={color} barColor={barColors}></Visualiser>
            </GridItem>

        </Grid>
    );
}

export default App;
