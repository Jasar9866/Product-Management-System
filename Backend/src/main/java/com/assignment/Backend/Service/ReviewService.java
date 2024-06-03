package com.assignment.Backend.Service;

import com.assignment.Backend.Entity.Review;

import java.util.List;

public interface ReviewService {

    void saveReview(Review review);
    List<Review> getAllReviews();
    void deleteReview(int id); // Corrected method signature
}