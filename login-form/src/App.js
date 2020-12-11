import { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email: "manhdd@gmail.com",
    password: "123456"
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  // handle to login
  const Login = (details) => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({ name: details.name, email: details.email });
    } else {
      setError("Wrong user name or password!");
    }
  }
  // handle to logout
  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="App">
      {(user.name !== "") ? (
        <div>
          <h2>Welcome <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
          <LoginForm
            Login={Login}
            error={error}
          />
        )}
    </div>
  );
}

export default App;
