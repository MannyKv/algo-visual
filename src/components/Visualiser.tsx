import { Box } from "@chakra-ui/react";
import React from "react";
const Visualiser: React.FC<{data: number[]}> = ({ data }) => {

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

            {data.map((d:number)=>{
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
                            bg={"#C9ADA7"}
                            style={{ height: `${d}px` }}
                        ></Box>
                    </Box>
                );
            })}

        </Box>
    )
};
export default Visualiser;