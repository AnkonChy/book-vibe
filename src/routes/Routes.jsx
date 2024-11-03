import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import BookDetail from "../pages/BookDetail";
import ListedBooks from "../pages/ListedBooks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"), //do not load all the books for one book
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        //worst way to load some data
        loader: () => fetch("/booksData.json"), //do not load all data for some
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export { routes };
