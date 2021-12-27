import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";

const useStyles = makeStyles({
    root: {
      padding: "20px",
    },
  });

  function MovieListPageTemplate({ movies, title, action }) {
    const classes = useStyles();
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const [originLanguageFilter, setOriginLanguageFilter] = useState("Null");
    const [sort, setSort] = useState("PopDesc");
    const genreId = Number(genreFilter);
    const originLanguageId = String(originLanguageFilter);
    const sortId = String(sort);

    let sortingType = "";

  let conditionalOperator = "<";
  var operationFunctions = {
    ">" : function(a, b) {return a > b},
    "<" : function(a, b) {return a < b}
  };

  if(sortId === "PopDesc") {
    sortingType = "popularity";
    conditionalOperator = "<";
  } else if(sortId === "PopAsc") {
    sortingType = "popularity";
    conditionalOperator = ">";
  } else if(sortId === "AbcDesc") {
    sortingType = "title";
    conditionalOperator = "<";
  } else if(sortId === "AbcAsc") {
    sortingType = "title";
    conditionalOperator = ">";
  } else if(sortId === "AvgRateDesc") {
     sortingType = "vote_average";
     conditionalOperator = "<";
  } else if(sortId === "AvgRateAsc"){
    sortingType = "vote_average";
    conditionalOperator = ">";
  } 

  // Sort Shows Here
  for(let i = 0; i < movies.length; i++) {
    let min = i;
    for(let j = i + 1; j < movies.length; j++) {
      if(operationFunctions[conditionalOperator](movies[min][sortingType], movies[j][sortingType])) {
        min = j;
      }
    }
    if(min !== i) {
      let tmp = movies[i];
      movies[i] = movies[min];
      movies[min] = tmp;
    }
  }

    let displayedMovies = movies
      .filter((m) => {
        return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
      })
      .filter((m) => {
        return genreId > 0 ? m.genre_ids.includes(genreId) : true;
      })
      .filter((m) => {
        if(originLanguageId !== "Null") return m.original_language.includes(originLanguageId)
        else return m
      });
  
    const handleChange = (type, value) => {
      if (type === "name") setNameFilter(value);
      else if(type === "genre") setGenreFilter(value);
      else if(type === "language") setOriginLanguageFilter(value);
      else setSort(value);
    };
  
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
              originLanguageFilter={originLanguageFilter}
              sort = {sort}
            />
          </Grid>
          <MovieList action={action} movies={displayedMovies}></MovieList>
        </Grid>
      </Grid>
    );
  }

  export default MovieListPageTemplate;