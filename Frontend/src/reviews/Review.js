import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Rating from "react-rating-stars-component";

function Review() {
  const [name, setName] = useState("");
  const [starRating, setStarRating] = useState(0);
  const [message, setMessage] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const review = { name, starRating, message };
    console.log(review);
    fetch("http://localhost:5055/reviews/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    }).then(() => {
      console.log("New review Submitted");
      setReviewSubmitted(true);
      setName("");
      setStarRating(0);
      setMessage("");
    });
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f8f9fa",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="row p-3">
        <div
          className="col-sm-4 ms-auto me-auto pt-5 mt-3 shadow p-5 rounded"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <h4
            style={{
              fontWeight: "900",
              fontFamily: "sans-serif",
              textAlign: "center",
            }}
          >
            Review
          </h4>
          <p
            style={{
              fontWeight: "700",
              fontFamily: "Helvetica",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Please give your review rate based on the system performance
          </p>
          <form className="ms-auto me-auto p-5 review-form">
            <div className="mb-4">
              <TextField
                id="standard-basic1"
                type="text"
                className="col-sm-12 w-100"
                label="Full Name"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Rating
                count={5}
                size={30}
                value={starRating}
                onChange={(rating) => setStarRating(rating)}
                activeColor="#FFD700" 
                key={starRating} // Force re-render by changing the key when starRating changes
              />
            </div>
            <div className="mb-4">
              <TextField
                id="standard-basic4"
                minRows={10}
                className="col-sm-12 w-100"
                label="Message"
                variant="outlined"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              className="w-100 mt-3 p-3 mb-3"
              style={{
                color: "white",
                marginLeft: "5px",
                backgroundColor: "blue",
              }}
              onClick={handleClick}
            >
              Send &nbsp;
              <i className="fa-solid fa-paper-plane"></i>
            </Button>
            {reviewSubmitted && (
              <p
                style={{
                  textAlign: "center",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Thank you for your review!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Review;
