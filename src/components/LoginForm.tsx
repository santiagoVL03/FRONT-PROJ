function LoginForm() {
  return (
    <div className="flex">
      <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <form className="space-y-4"> 
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md transition-colors mt-1"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
