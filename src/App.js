import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import PostItem from "./components/PostItem/PostItem";

import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const postsCol = collection(db, "posts");
    const snapshot = await getDocs(postsCol);
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        post: doc.data(),
      }))
    );
  };
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Posts */}
      <div className="Post__list">
        {posts.map(({ id, post }) => (
          <PostItem key={id} data={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
