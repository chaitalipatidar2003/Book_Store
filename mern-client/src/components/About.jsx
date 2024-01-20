import bookstoreImage from '/src/assets/images/Books2.png';

const About = () => {
  return (
    <div className="container mx-auto mt-8 pt-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <img
            src={bookstoreImage}
            alt="Bookstore Interior"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">About Our Bookstore</h1>
          <p className="text-gray-700 mb-4">
            Welcome to My Book Store, where reading becomes an adventure and every page
            holds a new discovery. Our bookstore is not just a place to buy books; it's a
            community for avid readers, aspiring writers, and everyone who finds solace in the
            world of literature.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to connect people with the joy of reading by providing a diverse
            collection of books that cater to various interests. Whether you're a fiction lover,
            history enthusiast, or a fan of the latest bestsellers, you'll find something
            special within our shelves.
          </p>
          <p className="text-gray-700 mb-4">
          My Book Store is not just a store, it's a haven for book lovers. We host
            book clubs, author events, and literary discussions to foster a sense of
            camaraderie among our readers. Join us in celebrating the written word and
            exploring the boundless worlds that books unlock.
          </p>
        </div>
      </div>
    </div>
  );
  }
  
  export default About
  