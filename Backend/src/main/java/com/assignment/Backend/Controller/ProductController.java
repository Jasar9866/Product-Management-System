package com.assignment.Backend.Controller;

import com.assignment.Backend.Entity.Product;
import com.assignment.Backend.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/api/products")

public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.ok(createdProduct);
    }

    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{productid}")
    public ResponseEntity<Product> getProductById(@PathVariable Long productid) {
        return productService.getProductById(productid)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{productid}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productid, @RequestBody Product productDetails) {
        try {
            Product updatedProduct = productService.updatedProduct(productid, productDetails);
            return ResponseEntity.ok(updatedProduct);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{productid}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productid) {
        try {
            productService.deleteProduct(productid);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}



