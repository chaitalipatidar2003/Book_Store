import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  // Use the useLoaderData hook to access data fetched on the server
  const { _id, bookTitle, imageURL, authorName ,bookDescription, bookPDFURL} = useLoaderData();
  console.log('Loader Data:', { _id, bookTitle, imageURL });

  return (
    <div className="flex flex-row">

        <div className='mt-28 px-4 lg:px-24'>
      {/* Display the book ID */}
      <img src={imageURL} alt={bookTitle} className="w-[300px] h-[400px]" />

      {/* Display the book title */}
      <div className='mt-4'>
        <h2 className='text-black'>{bookTitle}</h2>
      </div>
    </div>

    <div className="mt-28 px-4 lg:px-20">
      <h2 className=" py-4 lg:pt-14 text-bold text-5xl">{bookTitle}</h2>
      <i>{authorName}</i>
         <p>{bookDescription}</p>
         <div>
          <button href={{bookPDFURL}} className="bg-blue-700 text-white outline-black-200 p-2 m-2" > <a href={bookPDFURL} target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white outline-black-200 p-2 m-2">
            Go to PDF
          </a></button>
         </div>
    </div>
    </div>
  );
};

export default SingleBook;
