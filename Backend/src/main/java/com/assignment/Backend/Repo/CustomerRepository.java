package com.assignment.Backend.Repo;

import com.assignment.Backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByNic(String nic);
    Optional<Customer> findByEmail(String email);
}
