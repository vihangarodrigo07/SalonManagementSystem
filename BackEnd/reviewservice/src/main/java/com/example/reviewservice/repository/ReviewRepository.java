package com.example.reviewservice.repository;

import com.example.reviewservice.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findBySalonId(Long salonId);

    // Calculate the average rating for a salon
    @Query("SELECT AVG(r.rating) FROM Review r WHERE r.salon.id = :salonId")
    Double findAverageRatingBySalonId(@Param("salonId") Long salonId);
}
