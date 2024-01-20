import { useEffect, useState } from "react";
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center pb-8">All Books are here</h2>
      <div className="grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card className="max-w-sm w-300px h-400px" key={book._id}>
            <img src={book.imageURL} className="h-96" alt={book.bookTitle} />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription.slice(0, 50)}...
              <button className="bg-gray-400 px-2 text-white font-bold">
                <Link to={`/book/${book._id}`}>Read more</Link>
              </button>
            </p>
            <Link to={book.bookPDFURL} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-700 font-semibold text-white py-2 rounded w-full">
                Buy Now
              </button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
