
package com.assignment.Backend.Service;

import com.assignment.Backend.Dto.EmployeeDTO;
import com.assignment.Backend.Dto.LoginDTO;
import com.assignment.Backend.response.LoginResponse;

import java.util.List;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);
    LoginResponse loginEmployee(LoginDTO loginDTO);
    List<EmployeeDTO> getAllEmployees();
}
