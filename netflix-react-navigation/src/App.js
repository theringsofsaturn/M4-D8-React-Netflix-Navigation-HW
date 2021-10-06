import "./App.css";
import CustomNavbar from "./Component/Navbar";
import Header from "./Component/Header";
import RowOfMovies from "./Component/RowOfMovies";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Header />
      <RowOfMovies title="Star Wars" />
      <RowOfMovies title="Harry Potter" />
      <RowOfMovies title="The lord of the rings" />
    </Router>
  );
}

export default App;
