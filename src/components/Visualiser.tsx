import { Box } from "@chakra-ui/react";
import React from "react";
const Visualiser: React.FC<{data: number[], maxValue: number, colorArray:number[], barColor: string[]}> = ({ data , maxValue, colorArray,barColor  }) => {

    return (
        <Box
            rounded={"lg"}
            display="grid"
            gridAutoFlow={"column"}
            gridAutoColumns={"auto"}
            minH={"full"}
           padding={"10px"}
            overflow={"auto"}
            flex="1">

            {data.map((d:number,index:number)=>{
                return(
                    <Box
                        display={"flex"}
                        justifyContent="flex-end"
                        textAlign="center"
                        flexDirection="column"
                        margin={"5px"}
                        fontFamily={"Montserrat"}
                        color={"#F2E9E4"}
                    >
                        <p>{d}</p>
                        <Box
                            roundedTop={"20px"}
                            bg={barColor[colorArray[index]]}
                            style={{ height: `${d%(maxValue+1)}px` }}
                        ></Box>
                    </Box>
                );
            })}

        </Box>
    )
};
export default Visualiser;