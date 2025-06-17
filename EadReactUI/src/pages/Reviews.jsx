import { useState } from 'react';
import './Reviews.css';

function Reviews() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState({
    userId: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', { ...review, rating });
    // Add your axios POST request here
  };

  return (
    <div className="centered-page">
      <div className="review-card">
        <h2 className="review-title">Leave a Review</h2>
        
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">User ID</label>
            <input
              type="text"
              name="userId"
              className="form-input"
              placeholder="Enter your user ID"
              value={review.userId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= (hover || rating) ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Your Review</label>
            <textarea
              name="comment"
              className="form-textarea"
              placeholder="Share your experience..."
              rows="5"
              value={review.comment}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reviews;