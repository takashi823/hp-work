import { Box, SxProps, Theme } from "@mui/material";
import Img from "/Users/takuma/vantan/hp/hp-work/src/resources/work1/images/mainvisual.jpg";
import { url } from "inspector";
export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
         <Box className="text" sx={sx}>安心と信頼</Box>
      <Box className="text" sx={sx}>×</Box>
      <Box className="text" sx={sx}>高度な技術力</Box>
      <Box className="text" sx={sx}>高品質な開発を標準に。</Box>
      <Box className="img" sx={sx}>
        <img width = "100%" height =  "650px" src = {Img} />
      </Box>
   
    </Box>
    
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },
  
  "&.img" : {
    width: "100%",
    height: "650px",

  },
  "&.text" : {
  
  }
};
