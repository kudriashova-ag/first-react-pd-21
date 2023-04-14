import ListFilms from "./components/Films/ListFilms";
import Profile from "./components/Profile";
import persons from "./data/persons";

function App() {
  return <div>
    {/* {persons.map(p => <Profile person={ p.person } size={p.size} />) } */}
    {/* {persons.map(p => <Profile {...p} key={p.id} />) } */}
    <ListFilms />
  </div>
}

export default App;