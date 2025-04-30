import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length > 10) {
      alert('Please provide a comment explaining your low score.');
      return;
    }
    console.log("form submitted");
    setComment('');
    setScore(10);
    alert('Thank you for your feedback!');
  };

  return (
    <div style={{ display: 'flex',marginTop: '40px' }}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{
          width: '350px',
          border: '1px solid #aaa',
          padding: '20px',
          borderRadius: '4px'
        }}>
          <h2 style={{ marginTop: 0 }}>Feedback form</h2>

          <div className="Field" style={{ marginBottom: '16px' }}>
            <label>
              Score: {score} <span style={{ color: 'gold' }}>★</span>
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={e => setScore(e.target.value)}
              style={{ width: '100%', marginTop: '8px' }}
            />
          </div>

          <div className="Field" style={{ marginBottom: '16px' }}>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
              style={{
                width: '100%',
                height: '100px',
                marginTop: '8px',
                resize: 'none'
              }}
            />
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #888',
            backgroundColor: '#f5f5f5',
            cursor: 'pointer'
          }}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;