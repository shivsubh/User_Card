import { useState } from "react";
import Card from "./components/Card";
import { Container, Footer } from "./components/component.style";
import { Home } from "./components/Home";
import { Loader } from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setTimeout(() => {
      setUsers(json.data);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Navbar fetchUsers={fetchUsers} />
      <Container>
        {users.length ? (
          users.map((user) => (
            <Card
              key={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              image={user.avatar}
              email={user.email}
            />
          ))
        ) : loading ? (
          <Loader />
        ) : (
          <Home />
        )}
      </Container>
      <Footer>Made By Shubham</Footer>
    </>
  );
}

export default App;
