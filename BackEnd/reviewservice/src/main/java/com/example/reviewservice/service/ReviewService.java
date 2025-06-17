package com.example.reviewservice.service;

import com.example.reviewservice.model.Review;
import com.example.reviewservice.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    // CRUD operations for reviews

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getReviewsBySalonId(Long salonId) {
        return reviewRepository.findBySalonId(salonId);
    }

    public Review updateReview(Long reviewId, Review updatedReview) {
        return reviewRepository.findById(reviewId).map(review -> {
            review.setRating(updatedReview.getRating());
            review.setReviewText(updatedReview.getReviewText());
            return reviewRepository.save(review);
        }).orElseThrow(() -> new RuntimeException("Review not found"));
    }

    public void deleteReview(Long reviewId) {
        reviewRepository.deleteById(reviewId);
    }

    public Double getAverageRating(Long salonId) {
        return reviewRepository.findAverageRatingBySalonId(salonId);
    }
}
