import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 p-6 border border-gray-200">
        <figure className="bg-gray-300 py-8 rounded-2xl">
          <img className="h-[220px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-100 text-green-600"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <p>{totalPages}</p>
          <div className="border-b-2 border-dashed"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="flex items-center">
              <div className="">{rating}</div>
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
