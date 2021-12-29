export const login = (username, password) => {
    return fetch(`/api/users`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({username: username, password: password})
    }).then(res => res.json());
};

export const signup = (username, password) => {
    console.log("Username: " + username + "\nPassword: " + password)
    return fetch(`/api/users?action=register`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({username: username, password: password})
    }).then(res => res.json());
};

//////////////
//Favourites//
//////////////

export const addFavouriteMovie = (userName, id) => {
    return fetch(`/api/users/${userName}/favourites`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({username: userName, id: id})
    }).then(res => res.json());
};

export const getFavouriteMovies = (username) => {
    return fetch(
        `/api/users/${username}/favourites`
    ).then((response) => {
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
}

export const removeFavouriteMovie = (userName, id) => {
    return fetch(`/api/users/${userName}/favourites`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
        body: JSON.stringify({username: userName, id: id})
    }).then(res => res.json());
};

////////////
//Wishlist//
////////////

export const addWishlistMovie = (userName, id) => {
    return fetch(`/api/users/${userName}/wishlist`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({username: userName, id: id})
    }).then(res => res.json());
};

export const getWishlistMovies = (username) => {
    return fetch(
        `/api/users/${username}/wishlist`
    ).then((response) => {
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
}

export const removeWishlistMovie = (userName, id) => {
    return fetch(`/api/users/${userName}/wishlist`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
        body: JSON.stringify({username: userName, id: id})
    }).then(res => res.json());
};

//////////////////
//ShowFavourites//
//////////////////

export const addShowFavouriteMovie = (userName, id) => {
    return fetch(`/api/users/${userName}/showFavourites`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({username: userName, id: id})
    }).then(res => res.json());
};

export const getShowFavouriteMovies = (username) => {
    return fetch(
        `/api/users/${username}/showFavourites`
    ).then((response) => {
        if(!response.ok){
            throw new Error(response.json().message);
        }
        return response.json();
    })
    .catch((error) => {
        throw error;
    });
}

export const removeShowFavouriteMovie = (userName, id) => {
    return fetch(`/api/users/${userName}/showFavourites`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
        body: JSON.stringify({username: userName, id: id})
    }).then(res => res.json());
};