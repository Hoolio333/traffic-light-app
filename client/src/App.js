import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && (
          <Route
            path="/dashboard"
            element={<Dashboard user={user} setUser={setUser} />}
          />
        )}
        {authToken && <Route path="/onboarding" element={<OnBoarding />} />}
        {authToken && (
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
