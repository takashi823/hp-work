import { Box, SxProps, Theme } from "@mui/material";
import aboutimg from "../../resources/work1/images/about.jpg";


export const About = () => {
  return (
    <Box className="About" sx={sx}>

      <Box className="title">
        <p className="uni">A</p>
        <p className="ab">B</p>
        <p className="ab">O</p>
        <p className="ab">U</p>
        <p className="ab">T</p>
      </Box>

      <p className="watasitati">私たちについて</p>
      <img className="minigazou"src={aboutimg}/>

      <Box className="bun">
        <p className="gyoume1">
          副業人材を主体とした<span style={{ color: '#23a1b9' }}>「業務委託サービス」</span>です
        </p>
        <p className="gyoume2">
          通常には人材派遣の市場に出てこないような大企業に努めているベテランのエンジニアや開発の中核を担う
        </p>
        <p className="gyoume3">
          フリーランスエンジニアが<span style={{ color: '#23a1b9' }}>現在訳100名</span>ほど所属しています。
        </p>
        <p className="gyoume4">
          副業を主体としているため長時間の拘束稼働はできませんが、
        </p>
        <p className="gyoume5">
        トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。
        </p>
        <p className="gyoume6">
        クライアント側のチームメンバーと共同して開発を行うこともできるため、
        </p>
        <p className="gyoume7">
        <span style={{ color: '#23a1b9' }}>クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。
        </p>
      </Box >





    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    height:"1200px",
    backgroundColor:"#eaf6f8",
    position:"relative",
  },

};
