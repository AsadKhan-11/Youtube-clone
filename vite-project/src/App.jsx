import Navbar from "./Components/Navbar";
import Genres from "./Components/Genres";
import Sidebar from "./Components/Sidebar";
import "./App.css";
function App() {
  return (
    <>
      <nav className="double-nav">
        <Navbar />
        <div className="bar">
          <Sidebar />
          <Genres />
        </div>
      </nav>
    </>
  );
}

export default App;
