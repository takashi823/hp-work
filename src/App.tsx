// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes, useLocation  } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SamplePage } from "./pages/SamplePage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  const URL = process.env.PUBLIC_URL;
  const location = useLocation();

  return (
    <Box className="App" sx={sx}>
      <Routes location={location} key={location.pathname}>
        {/* トップページ*/}
        <Route path={URL + "/"} element={<HomePage />} />
        {/* サンプルページ */}
        <Route path={URL + "/sample"} element={<SamplePage />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  }
};
