package com.example.reviewservice.controller;

import com.example.reviewservice.model.Review;
import com.example.reviewservice.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // Create a new review
    @PostMapping
    public Review createReview(@RequestBody Review review) {
        return reviewService.createReview(review);
    }

    // Get all reviews for a salon
    @GetMapping("/salon/{salonId}")
    public List<Review> getReviewsBySalonId(@PathVariable Long salonId) {
        return reviewService.getReviewsBySalonId(salonId);
    }

    // Update a review
    @PutMapping("/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId, @RequestBody Review updatedReview) {
        return ResponseEntity.ok(reviewService.updateReview(reviewId, updatedReview));
    }

    // Delete a review
    @DeleteMapping("/{reviewId}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
        return ResponseEntity.noContent().build();
    }

    // Get average rating of a salon
    @GetMapping("/salon/{salonId}/average-rating")
    public Double getAverageRating(@PathVariable Long salonId) {
        return reviewService.getAverageRating(salonId);
    }
}
