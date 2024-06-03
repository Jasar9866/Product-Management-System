import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function AddProduct() {
  const initialFormData = {
    name: "",
    category: "",
    brand: "",
    unit: "",
    unitValue: "",
    quantity: "",
    price: "",
    manufactureDate: "",
    expiryDate: "",
  };

  const categories = [
    "Soft Drink",
    "Fruit",
    "Biscuit",
    "Vegetable",
    "Juice",
    "Home Product",
    "Oil",
    "Stationery Supplies",
    "Electronic Item",
  ];

  const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];

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

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5055/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.productid) {
          setMessage("Product has been successfully added!");
          setMessageStyle({ color: "green" });
          setFormData(initialFormData);
        } else {
          setMessage(
            data.message || "Failed to add product. Please check the details."
          );
          setMessageStyle({ color: "red" });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Failed to add product. Please try again.");
        setMessageStyle({ color: "red" });
      });
  };

  return (
    <div className="container" style={{ marginLeft: "100px" }}>
      <div className="row">
        <div className="col-md-8 offset-md-3 border rounded p-4 mt-3 shadow">
          <h2 className="text-center m-4">Add New Product</h2>
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
                color="primary"
                style={{
                  color: "white",
                  marginLeft: "5px",
                  backgroundColor: "blue",
                }}
              >
                Add Product
              </Button>
              <div style={messageStyle} className="mt-3">
                {message}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
