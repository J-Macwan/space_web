import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header"; // Updated path
import Sidebar from "../Sidebar"; // Updated path
import Feed from "../Feed"; // Updated path
import UserProfile from "../UserProfile"; // Updated path
import PhotoPage from "../PhotoPage"; // Updated path
import WatchPage from "../WatchPage"; // Updated path
import VideoPost from "../VideoPost"; // Updated path
import VideoFeed from "../VideoFeed"; // Updated path
import ReelsFeed from "../ReelsFeed"; // Updated path
import Reel from "../Reel"; // Updated path

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/profile/:userId"
            element={
              <UserProfile user={{ name: "John Doe", profilePic: "profile.jpg" }} />
            }
          />
          <Route path="/photos" element={<PhotoPage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/reels" element={<Reel />} />
          <Route path="/reelsfeed" element={<ReelsFeed />} />
          {/* Additional routes (for video posts, etc.) can be added here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
