import { Login } from "./components/LoginPage";
import { GlobalStyle } from "./configs/global/GlobalStyled";
import AppRoutes from "./configs/routes/AppRoutes";



function App()  {
  return (
    <>
      
      <AppRoutes />
      <GlobalStyle/>
      <Login/>
    </>
  );
};

export default App;
