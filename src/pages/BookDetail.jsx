import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../utility/addToDB";
import { toast } from "react-toastify";

const BookDetail = () => {
  const data = useLoaderData();
  const { bookId } = useParams();

  const book = data.find((book) => book.bookId === parseInt(bookId));

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPage,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    /**
     * 1.understand what to store or save: => bookId
     * 2.where to store: database
     * 3.array, list, collection
     * 4.check: if the book is already in the readList
     * 5.if not then add the book to the list
     * 6.if yes do not add the book
     */

    addToStoredReadList(id);
    toast("This book is added to your read list");
  };

  const handleAddToWishlist = (id) => {
    addToStoredWishList();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1>{bookName}</h1>
          <p>By : {author}</p>

          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p>Review: {review}</p>
          <div className="flex items-center gap-2">
            <p>Tag</p>
            <div className="flex justify-between items-center">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="btn btn-xs bg-green-100 text-green-600"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline btn-accent"
            >
              Mark As Read
            </button>
            <button
              onClick={() => handleAddToWishlist(bookId)}
              className="btn btn-accent"
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
