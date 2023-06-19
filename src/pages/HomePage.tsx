// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Header } from "../modules/home/Header";
import { About } from "../modules/home/About";
import { Mainvisual } from "../modules/home/Mainvisual";
import { Company } from "../modules/home/Company";
import { Footer } from "../modules/home/Footer";
import { Service } from "../modules/home/Service";

// サンプルページのメインの実装
export const HomePage = () => {
  return (
    <Box className="HomePage" sx={sx}>
        <Header />
        <Mainvisual />
        <About />
        <Service />
        <Company />
        <Footer />
    </Box>
  );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
  "&.HomePage": {
    width: "100%",    
  }
};
