import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filler from "./components/FillerSignup/FillerSignup";
import SignIn from "./components/SignIn/SignIn";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import InvestorDashboardPage from "./pages/InvestorDashboardPage/InvestorDashboardPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import StartupsIdeasPage from "./pages/StartupsIdeasPage/StartupsIdeasPage";
import StartupInfo from "./components/StartupInfo/StartupsInfo";
import { StartupStatus } from "./components/StartupDescription/StartupDescription";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="projects/*" element={<ProjectsPage />} />
        {/* <Route path="projects/:projectId/*" element={<StartupInfo status={StartupStatus.PROMOTED} />} /> */}
        <Route path="ideas/*" element={<StartupsIdeasPage />} />
        <Route path="dashboard/*" element={<InvestorDashboardPage />} />
        <Route path="about/*" element={<AboutPage />} />
        <Route index element={<LandingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
