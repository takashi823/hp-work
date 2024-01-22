import { Box, SxProps, Theme } from "@mui/material";
import "./style.css";
import { Link } from 'react-router-dom';
import moko from "../..//resources/work1/images/もこみち.jpeg"

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
        <img className="rogo" src={moko} width="500px" height="80" alt="logo"/>

      <Box className="linkhako">
        <Link to="" className="hed">TOP</Link>
        <Link to="" className="hed">SERVICE</Link>
        <Link to="" className="hed">ABOUT</Link>
        <Link to="" className="hed">COMPANY</Link>
      </Box>
      
      <Box className="dekakuro">
        <Link to="" className="con">CONTACT</Link>
      </Box>

    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    width: "100%",
    height:"100px",
    position:"absolute",


  },
};
