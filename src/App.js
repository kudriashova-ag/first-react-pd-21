import { Route, Routes } from "react-router-dom";
import ListFilms from "./components/Films/ListFilms";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";

function App() {
  return <div>

    <Header />

    <Routes>
      <Route path="/" element={<ListFilms />} />
      <Route path="/contacts" element={<h1>Contacts</h1>} />
      <Route path="/users" element={<Users/>} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>


    
  </div>
}

export default App;