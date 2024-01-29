import { Box, SxProps, Theme } from "@mui/material";
import img1 from "../../resources/work1/images/startup.jpg";

export const Service = () => {
  return (
    <Box className="Service" sx={sx}>
      <Box className="service" sx={sx}><span style={{ color: '#23a1b9' }}>S</span>ERVICE</Box>
      <Box className="subtitle" sx={sx}>事業内容</Box>

      <Box className="guild" sx={sx}>
        <Box className="img" sx={sx}>
          <img width = "720px" height =  "500px" src = {img1} />
        </Box>

        <Box className="text" sx={sx}>プログラマーズビルド</Box>
        <Box className="title" sx={sx}>Programmers Guild</Box>
        <Box className="text1" sx={sx}>チーム開発の請負サービス</Box>
        <Box className="text2" sx={sx}>副業人材を主体とした「業務委託サービス」です。 通常では人材派遣の<br></br>市場に出てこないような大企業に勤めているベテランのエンジニアや開発<br></br>の中核を担うフリーランスエンジニアが現在約100名ほど所属していま<br></br>す。副業を主体としているため長時間の拘束稼働はできませんが、トップ<br></br>レベルの知識と経験を活かして複数人でチームとなってクライアントの業<br></br>務を請け負います。 クライアント側のチームメンバーと共同して開発を行<br></br>うこともできるため、クライアント所属のエンジニアのスキルアップを行<br></br>うことも可能です。</Box>
      </Box>

    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Service" : {
    width: "100%",
    height: 2000,
  },

  "&.service" : {
    letterSpacing: 8,
    paddingLeft: 70,
    fontSize: 70
  },
  "&.subtitle" : {
    paddingTop: 0,
    paddingLeft: 85,
    fontSize: 20
  },
  "&.guild" : {
    position: "absolute",

  },
  "&.img" :{
    paddingTop: 5,
    position: "absolute"
  },

  "&.text" : {
    paddingTop: 5,
    paddingLeft: 97,
    fontSize: 20,
    paddingBottom: 0
    
  },
  "&.title" : {
    paddingTop: "1px",
    paddingLeft: 97,
    fontSize: 50,
    paddingBottom: 0,
    letterSpacing: 5,
    color: '#23a1b9'
  },
  "&.text1" : {
    paddingTop: 1,
    paddingLeft: 97,
    fontSize: 25,
    paddingBottom: 0
    
  },
  "&.text2" : {
    paddingTop: 4,
    paddingLeft: 97,
    fontSize: 18,
    paddingBottom: 0
    
  },
};
