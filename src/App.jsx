import React, { useState } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [bannerContent, setBannerContent] = useState('Welcome to our site!');
  const [bannerTimer, setBannerTimer] = useState(10);
  const [bannerLink, setBannerLink] = useState('https://example.com'); // Ensure this URL is correct

  return (
    <div className="app">
      {bannerVisible && (
        <Banner
          content={bannerContent}
          timer={bannerTimer}
          link={bannerLink} // Ensure this is correctly set
          onHide={() => setBannerVisible(false)}
        />
      )}
      <div className="content">
        <h1>Main Content of the Website</h1>
        <p>This is where your main content goes.</p>
      </div>
      <Dashboard
        onToggleBanner={() => setBannerVisible(!bannerVisible)}
        onUpdateContent={(newContent) => setBannerContent(newContent)}
        onUpdateTimer={(newTimer) => setBannerTimer(newTimer)}
        onUpdateLink={(newLink) => setBannerLink(newLink)}
      />
    </div>
  );
};

export default App;
