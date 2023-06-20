import "./App.css";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
} from "react-router-dom";
import { useState, useEffect } from "react";
import * as mainApi from "../../utils/MainApi.js";
import CurrentUserContext from "../../context/CurrentUserContext";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import NotFound from "../NotFound/NotFound.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Preloader from "../Preloader/Preloader.js";

export default function App() {
  // Авторизация и регистрация пользователя(+аккаунт)
  const [isLoader, setIsLoader] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [profileMessage, setProfileMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  // Cохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const path = location.pathname;

  // Проверка токена
  useEffect(() => {
    checkToken(token);
  }, []);

  function checkToken(superToken) {
    if (superToken) {
      mainApi
        .getContent()
        .then((user) => {
          if (user) {
            setIsLoggedIn(true);
          }
          history.push(path);
        })
        .catch((err) => {
          history.push("/signin");
          console.log("token error");
          console.log(err);
        });
    }
  }

  // Передача данных пользователя
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi
        .getSavedMovies()
        .then((cards) => {
          setSavedMovies(cards);
          localStorage.setItem("savedMovies", JSON.stringify(cards));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  // Функции регистрации и авторизации пользователя
  function onRegistration(name, email, password) {
    setIsLoader(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        setCurrentUser(name, email);
        console.log(currentUser);
        onLogin(email, password);
      })
      .catch((err) => {
        setErrorRegister("Пользователь с таким email уже зарегистрирован.");
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }

  function onLogin(email, password) {
    setIsLoader(true);
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          checkToken(data.token);
          history.push("/movies");
        }
      })
      .catch((err) => {
        setErrorMessage("Неверный логин или пароль.");
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }

  // Редактирование профиля
  function onEditProfile(name, email) {
    setIsLoader(true);
    mainApi
      .updateProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        setProfileMessage("Данные профиля успешно обновлены!");
      })
      .catch((err) => {
        setErrorMessage("Пользователь с таким email уже зарегистрирован.");
        console.log(err);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }

  // Сохранение и удаление фильмов
  function likeMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((likedMovie) => {
        const newMoviesArray = [...savedMovies, likedMovie];
        setSavedMovies(newMoviesArray);
        localStorage.setItem("savedMovies", JSON.stringify(newMoviesArray));
      })
      .catch((err) => console.log(err));
  }

  function deleteSavedMovie(movie) {
    console.log(movie);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newMoviesArray = savedMovies.filter((dislikeMovie) => {
          return dislikeMovie._id !== movie._id;
        });
        setSavedMovies(newMoviesArray);
        console.log(savedMovies);
        localStorage.setItem("savedMovies", JSON.stringify(newMoviesArray));
      })
      .catch((err) => console.log(err));
  }

  // Выход из профиля
  function onSignOut() {
    setIsLoggedIn(false);
    onEmptyErrors();
    window.localStorage.clear();
    history.push("/");
  }

  // Очистка сообщений об ошибках
  function onEmptyErrors() {
    setErrorMessage("");
    setErrorRegister("");
    setProfileMessage("");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn} />
          </Route>
          <Route exact path="/signup">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register
                onEmptyErrors={onEmptyErrors}
                onRegistration={onRegistration}
                errorRegister={errorRegister}
              />
            )}
          </Route>
          <Route exact path="/signin">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login
                onEmptyErrors={onEmptyErrors}
                onLogin={onLogin}
                errorMessage={errorMessage}
              />
            )}
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            setIsLoader={setIsLoader}
            savedMovies={savedMovies}
            likeMovie={likeMovie}
            deleteSavedMovie={deleteSavedMovie}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            setIsLoader={setIsLoader}
            isLoggedIn={isLoggedIn}
            savedMovies={savedMovies}
            deleteSavedMovie={deleteSavedMovie}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onEditProfile={onEditProfile}
            profileMessage={profileMessage}
            onSignOut={onSignOut}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Preloader isOpen={isLoader} />
      </div>
    </CurrentUserContext.Provider>
  );
}
