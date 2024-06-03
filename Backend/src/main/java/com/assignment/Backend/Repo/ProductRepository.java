package com.assignment.Backend.Repo;


import com.assignment.Backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,Long> {

    Optional<Product> findByProductid(Long productid);
}


