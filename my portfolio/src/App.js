// Add About component to your App.js
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> {/* Add this line */}
      <Gallery />
      <Contact />
    </>
  );
}