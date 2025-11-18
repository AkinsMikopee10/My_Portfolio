import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
