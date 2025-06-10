import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    navigate('/feed');
  };

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

      <div className="flex flex-col">
        <label htmlFor="username" className="mb-2 text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="password" className="mb-1 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 mt-6"
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;
