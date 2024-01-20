import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';


const EditBooks = () => {

  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL}=useLoaderData()
  const bookcategories=[
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory]=useState(bookcategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }
  

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
  
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.BookPDFURL.value;
  
    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL, // Changed the variable name here
    };
  
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Fixed the content type
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book is updated successfully!!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("Error updating book. Please try again.");
      });
  };
  
  
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle"  type="text" placeholder="Book Name" required defaultValue={bookTitle} />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="AuthorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author Name" defaultValue={authorName} required   />
          </div>
        </div>
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Book image URL" defaultValue={imageURL} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="InputState" value=" BookCategory" />
            </div>
            <select id='inputState' name='categoryName' defaultValue={category} className='w-full  rounded ' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookcategories.map((option)=> <option key={option} value={option}> {option} </option> )
            }
            </select>
          </div>
        </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" type="text" placeholder="Write your book description..." defaultValue={bookDescription} required rows={5} className='w-full' />
         </div>

         <div>
        <div className="mb-2 block">
          <Label htmlFor="BookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="BookPDFURL" name="BookPDFURL" placeholder="Book PDF URL" defaultValue={bookPDFURL} required />
      </div>

      <Button type="submit" className="mt-5">Update Book</Button>
      </form>
    </div>
  )
}

export default EditBooks
