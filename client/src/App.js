import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/OnBoarding";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider, useCookies, withCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(["AuthToken"]);

  const authToken = cookies.AuthToken;
  console.log("cookies ", cookies);
  console.log("authtoken ", cookies.AuthToken, authToken);

  return (
    <BrowserRouter>
      {/* <CookiesProvider> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        {authToken && (
          <Route
            path="/dashboard"
            element={<Dashboard user={user} setUser={setUser} />}
          />
        )}
        {authToken && (
          <Route path="/onboarding" element={<OnBoarding user={user} />} />
        )}
        {authToken && (
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
        )}
      </Routes>

      {/* <Routes>
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
      </Routes> */}
      {/* </CookiesProvider> */}
    </BrowserRouter>
  );
};

export default App;
