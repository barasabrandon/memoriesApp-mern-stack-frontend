import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';
import CreateMemoryForm from './components/Form/CreateMemoryForm';
import LoginForm from './components/Form/LoginForm';
import Header from './components/Header';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import { fetchPostsData } from './actions/postActions';
import About from './components/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PostDetailsDeleted from './components/PostDetails/PostDetailsDeleted';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 3000 }); // Aos -for Animate on scroll
    dispatch(fetchPostsData());
  }, []);

  return (
    <main>
      <Header />

      <Routes>
        <Route path="/posts/:id" element={<PostDetailsDeleted />} />
        <Route path="/postsDeleted/:id" element={<PostDetails />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms-create-memories" element={<CreateMemoryForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/searchPosts" exact component={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
