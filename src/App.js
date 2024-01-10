import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import { HomePage } from './pages/HomePage';
import { VideoGallery } from './pages/VideoGallery';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}> </Route>
        <Route path="videogallery" element={<VideoGallery/>}> </Route>
      </Routes>
    </div>
  );
};

export default App;
