import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <h1>Welcome to My Online Store</h1>
        <p>Discover amazing products at incredible prices.</p>
      </main>
      <Footer />
    </div>
  );
}
export default App;