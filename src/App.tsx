import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import LayoutComponent from "./components/common/layout";
import { MyContextProvider } from "./context/provider";
import { useContextProvider } from "./hooks/useMyContexthooks";

const App = () => {
  return (
    <BrowserRouter>
    <MyContextProvider>
      <LayoutComponent>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </LayoutComponent>
    </MyContextProvider>
  </BrowserRouter>
  );
};


interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoggedIn } = useContextProvider();
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default App;
