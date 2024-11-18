import { GlobalStyle } from "./configs/global/GlobalStyled";
import AppRoutes from "./configs/routes/AppRoutes";



const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
};

export default App;
