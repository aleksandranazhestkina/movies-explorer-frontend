import "./App.css";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import mainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../context/CurrentUserContext";
import Main from "../Main/Main.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import Movies from "../Movies/Movies.jsx";

import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import Preloader from "../Preloader/Preloader.jsx";

export default function App() {
  return (
    <div className="app">
      <CurrentUserContext.Provider>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/signup">
            <Register />

            <Redirect to="/" />
          </Route>
          <Route exact path="/signin">
            <Login />

            <Redirect to="/" />
          </Route>
          <ProtectedRoute path="/movies" component={Movies} />
          <ProtectedRoute path="/saved-movies" component={SavedMovies} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Preloader />
      </CurrentUserContext.Provider>
    </div>
  );
}
