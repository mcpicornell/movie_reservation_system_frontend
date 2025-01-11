import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginUserPage from "./pages/LoginUserPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
  
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginUserPage key="loginPage" />} />

        <Route element={<Layout />}>
          {/* Ruta pública de login */}
          <Route path="/" element={<PrivateRoute><Home key="home" /></PrivateRoute>} />
          {/*<Route path="/hotels" element={<PrivateRoute><ShowTimePage key="companiesPage" /></PrivateRoute>} />*/}
          {/*<Route path="/hotels/:id" element={<PrivateRoute><MoviesDetailsPage key="companiesDetailsPage" /></PrivateRoute>} />*/}
          {/*<Route path="/reviews" element={<PrivateRoute><LastReviews key="lastReviews" /></PrivateRoute>} />*/}
          {/*<Route path="/about-us" element={<PrivateRoute><AboutUsPage key="aboutUsPage" /></PrivateRoute>} />*/}
          {/*<Route path="/create-user" element={<CreateUserPage key="createUserPage" />} />*/}

          {/*<Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />*/}
          {/*<Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />*/}

          {/*<Route path="/config/:id" element={<PrivateRoute><ConfigPage /></PrivateRoute>} />*/}

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
