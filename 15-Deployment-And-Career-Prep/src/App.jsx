import Gallery from "./components/Gallery";

const App = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-6">
        Pexels Gallery
      </h1>

      <Gallery />
    </main>
  );
};

export default App;