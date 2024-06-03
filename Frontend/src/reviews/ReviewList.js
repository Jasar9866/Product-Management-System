import React, { useEffect, useState } from "react";
import {
  Paper,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [error] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5055/reviews/getAll")
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
      });
  }, []);

  const handleDelete = (reviewId) => {
    fetch(`http://localhost:5055/reviews/delete/${reviewId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          const updatedReviews = reviews.filter(
            (review) => review.id !== reviewId
          );
          setReviews(updatedReviews);
          console.log(`Review with ID ${reviewId} permanently deleted.`);
        } else {
          console.error(`Failed to delete review with ID ${reviewId}`);
        }
      })
      .catch((error) => {
        console.error("Error occurred while deleting review:", error);
      });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<StarRateIcon key={i} style={{ color: "gold" }} />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(
          <StarRateIcon
            key={i}
            style={{
              color: "gold",
              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            }}
          />
        );
      } else {
        stars.push(<StarRateIcon key={i} style={{ color: "grey" }} />);
      }
    }
    return stars;
  };

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, curr) => acc + curr.starRating, 0);
    return totalRating / reviews.length;
  };

  return (
    <div
      className="container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        backgroundSize: "cover",
        height: "100vh",
        marginLeft: "16rem",
        alignItems: "center",
        maxWidth: "80%",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Reviews
      </Typography>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography variant="h6">
          Average Rating: {renderStars(calculateAverageRating())}
        </Typography>
      </div>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead style={{ backgroundColor: "blue", color: "white" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>ID</TableCell>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }}>Rating</TableCell>
              <TableCell style={{ color: "white" }}>Description</TableCell>
              <TableCell style={{ color: "white" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review) => {
              if (!review.isDeleted) {
                return (
                  <TableRow key={review.id}>
                    <TableCell>{review.id}</TableCell>
                    <TableCell>{review.name}</TableCell>
                    <TableCell>{renderStars(review.starRating)}</TableCell>
                    <TableCell>{review.message}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(review.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              }
              return null;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {error && <Typography color="error">Error: {error}</Typography>}
    </div>
  );
}

export default ReviewList;
