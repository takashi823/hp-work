import { Box, SxProps, Theme } from "@mui/material";

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <Box className="dekamoji">安心と信頼×<br></br>高度な技術力</Box>
      <p className="uso">高品質な開発を基準に</p>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
    height:"800px",
    zIndex:"10",
  },
};
