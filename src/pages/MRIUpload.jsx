const MRIUpload = () => {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h3 className="text-xl font-semibold mb-4">Upload MRI Scan</h3>
      <input type="file" className="mb-4" />
      <button className="bg-purple-700 text-white p-2 rounded hover:bg-purple-800">
        Upload
      </button>
    </div>
  );
};

export default MRIUpload;
