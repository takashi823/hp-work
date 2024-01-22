import { Box, SxProps, Theme } from "@mui/material";
import Img from "../../resources/work1/images/visual.jpg";
import { url } from "inspector";
export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
        <Box className="img" sx={sx}>
        <Box className="text" sx={sx}>安心と信頼</Box>
        <Box className="text2" sx={sx}>×</Box>
        <Box className="text3" sx={sx}>高度な技術力</Box>
        <Box className="text4" sx={sx}>高品質な開発を標準に。</Box>
      </Box>

   
    </Box>
    
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
  },

  "&.img" : {
    backgroundImage: `url(${Img})`,
    backgroundSize: "cover",
    // width: "100%",
    height: "700px",


  },
  "&.text" : {
    position: "absolute",
    paddingTop: 30,
    paddingLeft: 10,
    fontSize: 60,
  
  },
  "&.text2" : {
    paddingTop: 31,
    paddingLeft: 48,
    fontSize: 70,
    
  },
  "&.text3" : {
    
    paddingLeft: 10,
    fontSize: 60,
  },
  "&.text4" : {
    
    paddingLeft: 10,
    fontSize: 35,
  },
};
