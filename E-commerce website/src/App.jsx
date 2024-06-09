import "./App.css";
import BodyContainer from "./components/BodyContainer/BodyContainer";
import Header from "./components/HeaderContainer/Header";
import LoginPage from "./components/HeaderContainer/HeaderRightContainer/LoginPage";
import CartPage from "./components/HeaderContainer/HeaderRightContainer/CartPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BodyContainer />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/cartPage" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
