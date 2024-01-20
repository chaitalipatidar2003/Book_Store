import { useEffect,useState } from "react"
import BookCard from "../components/BookCard";

const BestSellerBooks = () => {
     const [books, setBooks]=useState([]);

     useEffect(() => {
        fetch("http://localhost:5000/all-books")
            .then(res => res.json())
            .then(data => {
                console.log(data); // Check if data is received
                setBooks(data.slice(0,8));
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    
  return (
    <div className="py-16 bg-secondary px-4 lg:px-24 text-dark-gray">
      <BookCard books={books} headline="Best Seller Books"/>
      <hr className="my-8 border-t-2 border-gray-300" />
    </div>
  )
}

export default BestSellerBooks
