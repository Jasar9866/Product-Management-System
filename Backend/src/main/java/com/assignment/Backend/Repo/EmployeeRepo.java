package com.assignment.Backend.Repo;
import com.assignment.Backend.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    Employee findByEmail(String email);
}

