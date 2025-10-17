const CognitiveTest = () => {
  return (
    <div className="mb-6 p-4 border rounded shadow bg-white">
      <h3 className="text-xl font-semibold mb-4">Cognitive Test</h3>
      <p>Question 1: What is today’s date?</p>
      <input type="text" className="border p-2 rounded w-full mb-4" />
      <p>Question 2: Name 3 objects in the room.</p>
      <input type="text" className="border p-2 rounded w-full mb-4" />
      <button className="bg-purple-700 text-white p-2 rounded hover:bg-purple-800">
        Submit Test
      </button>
    </div>
  );
};

export default CognitiveTest;
