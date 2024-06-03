//package com.assignment.Backend.Entity;
//
//import com.fasterxml.jackson.annotation.JsonFormat;
//import jakarta.persistence.*;
//import java.util.Date;
//
//@Entity
//@Table(name="product")
//public class Product {
//    @Id
//    @GeneratedValue
//    @JsonFormat(pattern = "yyyy/MM/dd")
//
//    private  Long id;
//    @Lob
//    private byte[] image;
//    private String name;
//    private  String category;
//    private  Integer Quantity;
//    private  String price;
//    @Temporal(TemporalType.DATE)
//    private Date manufactureDate;
//    @Temporal(TemporalType.DATE)
//    private Date expiryDate;
//    public byte[] getImage() {
//        return image;
//    }
//
//    public void setImage(byte[] image) {
//        this.image = image;
//    }
//
//    public Date getManufactureDate() {
//        return manufactureDate;
//    }
//
//    public void setManufactureDate(Date manufactureDate) {
//        this.manufactureDate = manufactureDate;
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getCategory() {
//        return category;
//    }
//
//    public void setCategory(String category) {
//        this.category = category;
//    }
//
//    public Integer getQuantity() {
//        return Quantity;
//    }
//
//    public void setQuantity(Integer quantity) {
//        Quantity = quantity;
//    }
//
//    public String getPrice() {
//        return price;
//    }
//
//    public void setPrice(String price) {
//        this.price = price;
//    }
//
//
//    public Date getExpiryDate() {
//        return expiryDate;
//    }
//
//    public void setExpiryDate(Date expiryDate) {
//        this.expiryDate = expiryDate;
//    }
//
//
//}




package com.assignment.Backend.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productid;

    private String name;
    private String category;
    private String brand;
    private String unit;
    private double unitValue;
    private int quantity;
    private double price;
    private String manufactureDate;
    private String expiryDate;

    // Constructors, getters, and setters


    public Product() {
    }

    public Long getProductid() {
        return productid;
    }

    public void setProductid(Long productid) {
        this.productid = productid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public double getUnitValue() {
        return unitValue;
    }

    public void setUnitValue(double unitValue) {
        this.unitValue = unitValue;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getManufactureDate() {
        return manufactureDate;
    }

    public void setManufactureDate(String manufactureDate) {
        this.manufactureDate = manufactureDate;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }
}
