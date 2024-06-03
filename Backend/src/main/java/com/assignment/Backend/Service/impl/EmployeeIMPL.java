
package com.assignment.Backend.Service.impl;

import com.assignment.Backend.Dto.EmployeeDTO;
import com.assignment.Backend.Dto.LoginDTO;
import com.assignment.Backend.Entity.Employee;
import com.assignment.Backend.Repo.EmployeeRepo;
import com.assignment.Backend.Service.EmployeeService;
import com.assignment.Backend.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee(
                null, // Auto-generated
                employeeDTO.getEmployeename(),
                employeeDTO.getEmail(),
                employeeDTO.getGender(),
                passwordEncoder.encode(employeeDTO.getPassword())
        );
        employee = employeeRepo.save(employee);
        return employee.getEmployeeid().toString(); // Return the employee ID as a String
    }

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
        Employee employee = employeeRepo.findByEmail(loginDTO.getEmail());
        if (employee != null && passwordEncoder.matches(loginDTO.getPassword(), employee.getPassword())) {
            return new LoginResponse("Login successful", true, employee.getEmployeeid(), employee.getEmployeename());
        } else {
            return new LoginResponse("Invalid email or password", false, null, null);
        }
    }





    @Override
    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepo.findAll().stream()
                .map(this::convertEntityToDTO)
                .collect(Collectors.toList());
    }

    private EmployeeDTO convertEntityToDTO(Employee employee) {
        return new EmployeeDTO(employee.getEmployeeid(), employee.getEmployeename(),
                employee.getEmail(), employee.getGender(), employee.getPassword());
    }
}
