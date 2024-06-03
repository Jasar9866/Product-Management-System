import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    unit: "",
    unitValue: "",
    quantity: "",
    price: "",
    manufactureDate: "",
    expiryDate: "",
  });

  const categories = [
    "Soft Drink",
    "Fruit",
    "Vegetable",
    "Juice",
    "Home Product",
    "Oil",
    "Stationery Supplies",
    "Electronic Item",
  ];

  const brands = ["Brand A", "Brand B", "Brand C"];

  const units = [
    "Grams (g)",
    "Kilograms (kg)",
    "Pounds (lb)",
    "Ounces (oz)",
    "Milliliters (ml)",
    "Liters (l)",
    "Fluid ounces (fl oz)",
    "Each",
    "Dozen",
    "Pack",
    "Set",
    "Bunch",
    "Bundle",
    "Bag",
    "Box",
    "Carton",
    "Case",
  ];

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5055/api/products/${id}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5055/api/products/${id}`, formData);
      setMessage("Product details updated successfully!");
      setTimeout(() => {
        setMessage(""); // Clear message after a few seconds
        navigate("/productlist"); // Redirect to product list 
      }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
      setMessage("Failed to update product. Please try again.");
    }
  };

  return (
    <div
      className="container"
      style={{ marginLeft: "100px", marginTop: "100px" }}
    >
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center m-4">Edit Product</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  label="Product Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  select
                  label="Category"
                  name="category"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="mb-3"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Brand"
                  name="brand"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.brand}
                  onChange={handleChange}
                  className="mb-3"
                >
                  {brands.map((brand) => (
                    <MenuItem key={brand} value={brand}>
                      {brand}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Unit"
                  name="unit"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.unit}
                  onChange={handleChange}
                  className="mb-3"
                >
                  {units.map((unit) => (
                    <MenuItem key={unit} value={unit}>
                      {unit}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Expiry Date"
                  name="expiryDate"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.expiryDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  className="mb-3"
                />
              </div>
              <div className="col-md-6">
                <TextField
                  label="Unit Value"
                  name="unitValue"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.unitValue}
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  label="Quantity"
                  name="quantity"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  label="Price"
                  name="price"
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.price}
                  onChange={handleChange}
                  className="mb-3"
                />
                <TextField
                  label="Manufacture Date"
                  name="manufactureDate"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.manufactureDate}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  className="mb-3"
                />
              </div>
            </div>
            <div className="text-center m-4">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "blue", color: "#FFFFFF" }}
              >
                Update Product
              </Button>
              {message && (
                <p style={{ color: "green", marginTop: "10px" }}>{message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
