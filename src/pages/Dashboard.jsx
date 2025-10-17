import CognitiveTest from "./CognitiveTest";
import MRIUpload from "./MRIUpload";

const Dashboard = () => {
  // Dummy cognitive test result
  const cognitiveResult = "Possible Risk";

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Welcome, User</h2>
      <CognitiveTest />
      {cognitiveResult === "Possible Risk" && <MRIUpload />}
    </div>
  );
};

export default Dashboard;
