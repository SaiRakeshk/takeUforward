import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

const Dashboard = ({ onToggleBanner, onUpdateContent, onUpdateTimer, onUpdateLink }) => {
  const [content, setContent] = useState('');
  const [timer, setTimer] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content) onUpdateContent(content);
    if (timer) onUpdateTimer(parseInt(timer, 10));
    if (link) onUpdateLink(link);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={onToggleBanner}>Toggle Banner</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Banner Content:</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label>Banner Timer (seconds):</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(e.target.value)}
          />
        </div>
        <div>
          <label>Banner Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

Dashboard.propTypes = {
  onToggleBanner: PropTypes.func.isRequired,
  onUpdateContent: PropTypes.func.isRequired,
  onUpdateTimer: PropTypes.func.isRequired,
  onUpdateLink: PropTypes.func.isRequired,
};

export default Dashboard;
