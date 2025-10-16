const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded mb-4" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded mb-4" />
        <input type="password" placeholder="Password" className="w-full border p-2 rounded mb-4" />
        <button className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-800">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
