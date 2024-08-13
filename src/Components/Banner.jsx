import React from 'react';

const Banner = ({ content, timer, link, onHide }) => {
  // Check if the link is absolute, if not prepend "http://"
  const ensureAbsoluteURL = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `http://${url}`;
    }
    return url;
  };

  return (
    <div className="banner">
      <p>{content}</p>
      <a
        href={ensureAbsoluteURL(link)}
        target="_blank"
        rel="noopener noreferrer"
        className="banner-link"
      >
        Learn More
      </a>
      <button onClick={onHide}>Hide Banner</button>
    </div>
  );
};

export default Banner;
