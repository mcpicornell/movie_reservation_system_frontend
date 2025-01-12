import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";
import {PrivateRoute} from "./components/PrivateRoute";
import CreateUserPage from "./pages/CreateUserPage";
import ShowTimePage from "./pages/ShowTimePage";
import MoviesPage from "./pages/MoviesPage";
import MoviesDetailsPage from "./pages/MoviesDetailsPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage key="loginPage"/>}/>
                <Route path="/create-user" element={<CreateUserPage key="createUserPage"/>}/>


                <Route element={<Layout/>}>
                    {/* Ruta pública de login */}
                    <Route path="/" element={<PrivateRoute><ShowTimePage key="home"/></PrivateRoute>}/>
                    <Route path="/movies" element={<PrivateRoute><MoviesPage key="moviesPage" /></PrivateRoute>} />
                    <Route path="/movies/:id" element={<PrivateRoute><MoviesDetailsPage key="companiesDetailsPage" /></PrivateRoute>} />
                    {/*<Route path="/reviews" element={<PrivateRoute><LastReviews key="lastReviews" /></PrivateRoute>} />*/}
                    {/*<Route path="/about-us" element={<PrivateRoute><AboutUsPage key="aboutUsPage" /></PrivateRoute>} />*/}

                    {/*<Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />*/}
                    {/*<Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />*/}

                    {/*<Route path="/config/:id" element={<PrivateRoute><ConfigPage /></PrivateRoute>} />*/}

                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
