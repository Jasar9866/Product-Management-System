package com.assignment.Backend.Service.impl;

import com.assignment.Backend.Entity.Review;
import com.assignment.Backend.Repo.ReviewRepository;
import com.assignment.Backend.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public void saveReview(Review review) {
        reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public void deleteReview(int id) {
        reviewRepository.deleteById(id);
    }
}