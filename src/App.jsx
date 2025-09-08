

// Dynamically set basename for Router based on environment
const getBaseName = () => {
  // If VITE_BASE env is set (from Vite config), use it; otherwise, default to ''
  // import.meta.env.BASE_URL is set by Vite automatically
  return import.meta.env.BASE_URL || '';
};

function App() {
  return (
    <Router basename={getBaseName()}>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
