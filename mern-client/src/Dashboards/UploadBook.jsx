import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

const UploadBook = () => {
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
  

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
  
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const BookPDFURL = form.BookPDFURL.value;
  
    const bookobj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      BookPDFURL
    };
  
    console.log(bookobj);

    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookobj)
    }).then(res=>res.json()).then(data =>{ alert("Book uploaded succesfully!!")})
  }
  
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle"  type="text" placeholder="Book Name" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="AuthorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author Name" required />
          </div>
        </div>
        <div className='flex gap-8 '>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Book image URL" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="InputState" value=" BookCategory" />
            </div>
            <select id='inputState' name='categoryName' className='w-full  rounded ' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
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
        <Textarea id="bookDescription" type="text" placeholder="Write your book description..." required rows={5} className='w-full' />
         </div>

         <div>
        <div className="mb-2 block">
          <Label htmlFor="BookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="BookPDFURL" name="BookPDFURL" placeholder="Book PDF URL" required />
      </div>

      <Button type="submit" className="mt-5 bg-gray-700">Upload Book</Button>
      </form>
    </div>
  )
}

export default UploadBook
