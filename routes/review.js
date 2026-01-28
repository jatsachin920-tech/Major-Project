const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const  Review=require("../models/review.js");
const  Listing=require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middileware.js")
const reviewController=require("../controllers/review.js")
// post reviews
//post rout
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.creatReview));

//review delete route
router.delete("/:reviewId",isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports=router;