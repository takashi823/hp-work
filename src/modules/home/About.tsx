import { Box, SxProps, Theme } from "@mui/material";
import figma from "../../resources/work1/images/figma.png";
import { red } from "@mui/material/colors";

export const About = () => {
  return (
    <Box className="About" sx={sx}>
    <Box className="title" sx={sx}>
          <Box className="a" sx={sx}>A</Box>
          <Box className="bout" sx={sx}>bout</Box>
    </Box>
    <Box className="subtitle" sx={sx}>私たちについて</Box>
    <Box className="img" sx={sx}>
      <img width = "1000px" height =  "300px" src = {figma} />
    </Box>
    <Box className="text" sx={sx}>副業人材を主体とした<span style={{ color: '#23a1b9' }}>「業務委託サービス」</span>です</Box>

    <Box className="text2" sx={sx}>通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う</Box>
    <Box className="text3" sx={sx}>フリーランスエンジニアが<span style={{ color: '#23a1b9' }}>現在約100名</span>ほど所属しています。</Box>
    
    <Box className="text4" sx={sx}>副業を主体としているため長時間の拘束稼働はできませんが、</Box>
    <Box className="text5" sx={sx}>トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。</Box>
    <Box className="text6" sx={sx}>クライアント側のチームメンバーと共同して開発を行うこともできるため、</Box>
    <Box className="text7" sx={sx}><span style={{ color: '#23a1b9' }}>クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。</Box>

    </Box>
  );
};

const sx: SxProps<Theme> = {

  "&.About" : {
    width: "100%",
    height: 800,
    backgroundColor: "#e8f6f8"
  },

  "&.title" : {
    position: "absolute",
    display: "flex",
  },

  "&.a" : {
    paddingLeft: 80,
    fontSize: 70,
    color: "#23a1b9",
  },

  "&.bout" : {
    paddingLeft: 0,
    fontSize: 70
  },

  "&.subtitle" : {
    paddingTop: 10,
    paddingLeft: 83,
    fontSize: 20
  },

  "&.img" : {
    paddingLeft: 30,

  },
  "&.text" : {
    paddingLeft: 65,
    fontSize: 18

  },
  "&.text2" : {
    paddingTop: 1,
    paddingLeft: 35,
    fontSize: 18

  },
  "&.text3" : {
    paddingTop: 1,
    paddingLeft: 60,
    fontSize: 18

  },

  "&.text4" : {
    paddingTop: 8,
    paddingLeft: 60,
    fontSize: 18

  },
  
  "&.text5" : {
    paddingTop: 1,
    paddingLeft: 41,
    fontSize: 18

  },

  "&.text6" : {
    paddingTop: 1,
    paddingLeft: 53,
    fontSize: 18

  },


  "&.text7" : {
    paddingTop: 1,
    paddingLeft: 55,
    fontSize: 18

  },

};
