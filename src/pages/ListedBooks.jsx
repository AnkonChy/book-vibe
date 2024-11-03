import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/addToDB";
import Book from "../components/Book.jsx";
const ListedBooks = () => {
  const [readList, setReadList] = useState([]);

  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  //ideally we will directly get the read book list from the database

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    //worst way
    // console.log(storedReadList, storedReadListInt, allBooks);

    //
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
    console.log(readList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    //sorting data
    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList(sortedReadList);
    } else if (sortType === "Ratings") {
      const sortedRatingsList = [...readList].sort(
        (a, b) => b.rating - a.rating
      );
      setReadList(sortedRatingsList)
    }
    // const sortedReadList = [...readList].sort()
  };
  return (
    <div>
      <h3 className="text-3xl my-10">Listed books</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Ratings")}>
            <a>Ratings</a>
          </li>
          <li onClick={() => handleSort("No of pages")}>
            <a>No of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
