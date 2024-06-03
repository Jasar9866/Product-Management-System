import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the backend
    fetch("http://localhost:5055/api/products/all")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/editProduct/${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      await fetch(`http://localhost:5055/api/products/${productId}`, {
        method: "DELETE",
      });
      // Refresh the product list
      const updatedProducts = products.filter(
        (product) => product.productid !== productId
      );
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container" style={{ marginLeft: "16rem", maxWidth: "80%" }}>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Brand
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Quantity
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Manufacture Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Expiry Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.productid}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.manufactureDate}</TableCell>
                <TableCell>{product.expiryDate}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      color: "white",
                      marginLeft: "5px",
                      backgroundColor: "blue",
                    }}
                    onClick={() => handleEdit(product.productid)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{
                      color: "white",
                      marginLeft: "5px",
                      backgroundColor: "red",
                    }}
                    onClick={() => handleDelete(product.productid)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductList;
