import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <main className="w-full h-screen md:px-[10%]">
        <Navbar />
        <Header />
      </main>
    </>
  )
}

export default App;