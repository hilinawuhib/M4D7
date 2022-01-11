import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import horrorbooks from "./horror.json";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Welcome />
      <BookList books={horrorbooks} />
    </div>
  );
}

export default App;
