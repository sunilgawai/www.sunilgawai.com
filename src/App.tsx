import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Pointer from "./components/Pointer";

const App = () => {
  return (
    <main className="w-full h-screen md:px-[10%] border">
      <Navbar />
      <Header />
      <Pointer />
    </main>
  )
}

export default App;