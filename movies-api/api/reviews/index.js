import express from "express";
import Review from "./reviewModel";
import asyncHandler from "express-async-handler";

const router = express.Router();

//Get all reviews 
router.get("/", async (req, res) => {
    const reviews = await Review.find();
    res.status(200).json(reviews);
});

//Add a review
router.post("/", asyncHandler( async (req, res, next) => {
    if(!req.body.authorName || !req.body.text || !req.body.rating){
        res.status(401).json({success: false, msg: "Please fill in all the required fields"});
        return next();
    }
    await Review.create(req.body);
    res.status(201).json({code: 201, msg: "Succesfully added review"});
}));

export default router;

