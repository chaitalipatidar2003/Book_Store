import { useEffect,useState } from "react"
import BookCard from "../components/BookCard";

const OtherBooks = () => {
    const [books, setBooks]=useState([]);

    useEffect(() => {
       fetch("http://localhost:5000/all-books")
           .then(res => res.json())
           .then(data => {
               console.log(data); // Check if data is received
               setBooks(data.slice(5,22));
           })
           .catch(error => console.error("Error fetching data:", error));
   }, []);
   
 return (
   <div>
     <BookCard books={books} headline="Other Books"/>
   </div>
 )
}

export default OtherBooks
