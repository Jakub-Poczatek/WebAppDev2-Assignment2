# Assignment 2 - Web API.

Name: Jakub Poczatek

## Features.
 
### Authentication/Users

+ Login page
  + User must exist in the MongoDB to be logged in.
+ Signup page
  + Username field has to be a unique value 
  + Password field has to conform to the regular expression: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/
  + Repeat password must match password field
+ Users are now permanently saved to MongoDB when registering.
+ All paths except for login and signup are now protected parts requiring a user to be logged in. 
+ User name now appears on the site header
+ User has the option to sign out

### Movies/Shows

+ Discover Movies Page
  + Movies list is now retrieved from tmdb with Node acting as a middleman.
  + Movie Genre list is now retrieved from tmdb with Node acting as a middleman.
  + Languages list is now retrieved from tmdb with Node acting as a middleman.
  + Movie Images are now retrieved from tmdb with Node acting as a middleman.

+ Upcoming Movies Page
  + Movies list is now retrieved from tmdb with Node acting as a middleman.
  + Movie Genre list is now retrieved from tmdb with Node acting as a middleman.
  + Languages list is now retrieved from tmdb with Node acting as a middleman.
  + Movie Images are now retrieved from tmdb with Node acting as a middleman.

+ Popular Tv Shows
  + Shows list is now retrieved from tmdb with Noda acting as a middleman.
  + Shows Genre list is now retrieved from tmdb with Node acting as a middleman.
  + Countries list is now retrieved from tmdb with Node acting as a middleman.
  + Show Images are now retrieved from tmdb with Node acting as a middleman.

### Favourites/Wishlist/Favorite Tv Shows

The 3 types of favourites all implement the same features and will be grouped into a single term of "favourites" to avoid unnecessary text.

+ Favourites are now saved to an array inside the user schema in MongoDB. This makes the favourites user specific. 
+ Favourited movies/shows will show up with a hearth/playlistCheck icon when the user loads the webpage, if those movies already exist inside the users favourites arrays. 
+ Favourites can be deleted and will be removed from both the webpage and the MongoDB. 
+ User can write reviews about their favourites (with the exception to wishlist movies due to a lack of logic).

### Movie/Show Reviews

+ Reviews now have their own schema and are saved to the MongoDB.
+ When a user writes a review, that review gets saved to MongoDB and its mongo ObjectId gets added into the users array of reviews. 
+ The review can then be seen along the other reviews. However, due to the nature of js, the user reviews will only appear after the 2nd time of checking a movies reviews. 
+ The reviews author field is automatically populated with the signed in users username and cannot be changed. 

### Logging

+ All htmls calls are logged and saved in the log file using Morgan. 


## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json).

Describe getting/installing the software, perhaps:

```bat
git clone http:\myrepo.git
```

followed by installation

```bat
git install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  