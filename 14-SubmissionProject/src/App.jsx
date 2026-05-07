import SubmissionForm from "./components/SubmissionForm";

const App = () => {

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl space-y-6">
        <SubmissionForm />
      </div>
    </div>
  );
}

export default App;
