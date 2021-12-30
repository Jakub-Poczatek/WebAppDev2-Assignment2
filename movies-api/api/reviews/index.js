import express from "express";
import movieReview from "./movieReviewModel";
import showReview from "./showReviewModel";
import asyncHandler from "express-async-handler";

const router = express.Router();

//Get all reviews 
router.get("/", async (req, res) => {
    const reviews = await movieReview.find();
    res.status(200).json(reviews);
});

router.get("/shows", async (req, res) => {
    const showReviews = await showReview.find();
    res.status(200).json(showReviews);
});

//Add a review
router.post("/", asyncHandler( async (req, res, next) => {
    if(!req.body.authorName || !req.body.text || !req.body.rating || !req.body.movieId){
        res.status(401).json({success: false, msg: "Please fill in all the required fields"});
        return next();
    }
    await movieReview.create(req.body);
    res.status(201).json({code: 201, msg: "Succesfully added review"});
}));

//Add a review
router.post("/shows", asyncHandler( async (req, res, next) => {
    if(!req.body.authorName || !req.body.text || !req.body.rating || !req.body.showId){
        res.status(401).json({success: false, msg: "Please fill in all the required fields"});
        return next();
    }
    await showReview.create(req.body);
    res.status(201).json({code: 201, msg: "Succesfully added review"});
}));


export default router;