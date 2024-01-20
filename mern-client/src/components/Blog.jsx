import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom
import blogImg1 from '/src/assets/images/LauraScott_HealingHerHeart_2500.jpg'
import blogImg2 from '/src/assets/images/ladytawem_.jpg'
const Blog = () => {
  // Dummy blog post data (replace with actual data)
  const blogPosts = [
    {
      id: 1,
      title: 'Exciting New Book Releases!',
      image: blogImg1,
      date: 'January 10, 2024',
      author: 'Bookstore Admin',
      content: 'Get ready for a literary feast as we unveil our latest arrivals — a handpicked selection of Exciting New Book Releases! Dive into a world of fresh narratives, engaging characters, and captivating storylines that are sure to satisfy every reader`s craving for discovery. From acclaimed authors to promising debut novelists, our collection features a diverse range of genres to cater to every literary taste. Whether you`re seeking thrilling mysteries, heartwarming romances, or mind-bending science fiction, our bookstore is your gateway to the latest and greatest in the world of literature. Don`t miss the chance to be among the first to explore these incredible additions to our shelves and embark on a literary journey that promises excitement, intrigue, and endless reading pleasure.',
    },
    {
      id: 2,
      title: 'Top 10 Must-Read Books of the Year',
      image: blogImg2,
      date: 'January 15, 2024',
      author: 'Bookstore Admin',
      content: 'Discover a literary journey like no other with our carefully curated list of the "Top 10 Must-Read Books of the Year." From gripping novels that transport you to other worlds, to thought-provoking non-fiction that challenges your perspectives, this collection is a testament to the power of storytelling. Immerse yourself in captivating narratives, explore diverse genres, and embark on a reading adventure that promises to leave a lasting impression. Whether you`re a seasoned bookworm or just beginning your literary exploration, these exceptional titles are bound to captivate your imagination and elevate your reading experience.',
    },
  ];

  return (
    <div className="container mx-auto my-9">
      <h1 className="text-3xl font-bold mb-6 mt-6 p-8 text-center">Bookstore Blog</h1>
      <div className="grid grid-cols-1 mx-8 md:grid-cols-2 gap-10 ">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow-md">
            <img src={post.image} alt={post.title} className="w-50 h-80  mb-4" />
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {post.date} | By {post.author}
            </p>
            <p className="text-gray-700">{post.content}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
