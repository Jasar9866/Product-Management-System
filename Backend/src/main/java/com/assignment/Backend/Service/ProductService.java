package com.assignment.Backend.Service;

import com.assignment.Backend.Entity.Product;
import com.assignment.Backend.Repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service

public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product) {
        // Check if the NIC or Email already exists to avoid duplicates
        if (productRepository.findByProductid(product.getProductid()).isPresent()) {
            throw new RuntimeException("Product ID already exists.");
        }
        return productRepository.save(product);
    }
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // deleting a product

    public void deleteProduct(Long productid) {
        if (!productRepository.existsById(productid)) {
            throw new RuntimeException("Member not found with id: " + productid);
        }
        productRepository.deleteById(productid);
    }


    // Update an existing member by ID
    @Transactional
    public Product updatedProduct(Long productid, Product productDetails) {
        Product existingProduct = productRepository.findById(productid)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productid));


        existingProduct.setName(productDetails.getName());
        existingProduct.setCategory(productDetails.getCategory());
        existingProduct.setBrand(productDetails.getBrand());
        existingProduct.setUnit(productDetails.getUnit());
        existingProduct.setUnitValue(productDetails.getUnitValue());
        existingProduct.setQuantity(productDetails.getQuantity());
        existingProduct.setPrice(productDetails.getPrice());
        existingProduct.setManufactureDate(productDetails.getManufactureDate());
        existingProduct.setExpiryDate(productDetails.getExpiryDate());


        return productRepository.save(existingProduct);
    }


    // Get a single member by ID
    public Optional<Product> getProductById(Long productid) {
        return productRepository.findById(productid);
    }


}
