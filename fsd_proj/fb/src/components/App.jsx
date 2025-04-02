import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header"; // Updated path
import Sidebar from "./components/Sidebar"; // Updated path
import Feed from "./components/Feed"; // Updated path
import UserProfile from "./components/UserProfile"; // Updated path
import PhotoPage from "./components/PhotoPage"; // Updated path
import WatchPage from "./components/WatchPage"; // Updated path
import VideoPost from "./components/VideoPost"; // Updated path
import VideoFeed from "./components/VideoFeed"; // Updated path
import ReelsFeed from "./components/ReelsFeed"; // Updated path
import Reel from "./components/Reel"; // Updated path

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