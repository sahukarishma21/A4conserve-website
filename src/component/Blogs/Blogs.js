import React from 'react';
import './Blogs.css';
import Blogcard from './Blogcard/Blogcard';
import Header from '../Homepage/Header/Header';
const Blogs = () => {
  return (
    <div>
      <Header/>
    <div className='image'>
        <div className='image-overlay'>
            <h1>The ExpertusONE Blog</h1>
            <div className='blogedit'>
            <Blogcard/>
            </div>   
        </div>
        
    </div>
    </div>
  );
};

export default Blogs;