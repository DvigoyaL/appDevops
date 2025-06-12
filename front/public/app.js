const API_BASE = 'https://proyectodevopsbackend-evcnbwdbcrdyc0d8.canadacentral-01.azurewebsites.net';

function App() {
  const [view, setView] = React.useState('login');
  const [token, setToken] = React.useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token || '');
        setView('index');
      } else {
        alert('Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        alert('Registration successful');
        setView('login');
      } else {
        alert('Registration failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server');
    }
  };

  if (view === 'login') {
    return (
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <button onClick={() => setView('register')}>Register</button></p>
      </div>
    );
  }

  if (view === 'register') {
    return (
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <button onClick={() => setView('login')}>Login</button></p>
      </div>
    );
  }

  if (view === 'index') {
    return (
      <div>
        <h1>Welcome to TuristAPP</h1>
        <p>You are logged in.</p>
      </div>
    );
  }

  return null;
}

ReactDOM.render(<App />, document.getElementById('root'));
