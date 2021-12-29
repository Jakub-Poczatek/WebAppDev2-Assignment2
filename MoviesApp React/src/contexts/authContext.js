import React, { useState, createContext } from "react";
import { login, signup, addFavouriteMovie, getFavouriteMovies, removeFavouriteMovie } from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [favorites, setFavorites] = useState([]);

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
      setFavorites(await getFavouriteMovies(username));
    }
  };

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie])
    addFavouriteMovie(userName, movie.id);
  };

  const removeFromFavourites = (movie) => {    
    if(favorites.includes(movie)){
    const index = favorites.indexOf(movie);
    favorites.splice(index, 1);
    }
    setFavorites([...favorites]);    
    removeFavouriteMovie(userName, movie.id);
  }

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        addToFavorites,
        removeFromFavourites,
        favorites
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;