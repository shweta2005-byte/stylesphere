
import './App.css';

function App() {
  const products = [
    { name: 'Classic Blazer', price: '₹1,999', category: 'WOMEN', image: 'photo-1548624149-fb3c8c8e4b9c' },
    { name: 'Everyday Essentials', price: '₹999', category: 'CASUAL', image: 'photo-1529139574466-a303027c1d8b' },
    { name: 'Urban Streetwear', price: '₹1,499', category: 'TRENDING', image: 'photo-1515886657613-9f3515b0c78f' },
  ];

  return (
    <div className="app">
      <div className="announcement">
        NEW SEASON, NEW STYLE — DISCOVER YOUR LOOK
      </div>

      <header className="navbar">
        <a className="logo" href="#">StyleSphere<span>.</span></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
        </nav>
        <a className="shop-button" href="#collection">Shop Now ↗</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">YOUR STYLE, YOUR STORY</p>
            <h1>Wear your<br />own <em>kind</em> of style.</h1>
            <p className="hero-description">
              Discover timeless essentials and fresh trends
              made for the way you express yourself.
            </p>
            <a className="primary-button" href="#collection">
              Explore Collection ↗
            </a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
              alt="Fashion models exploring modern street style"
            />
            <span className="image-note">STYLE THAT SPEAKS.</span>
          </div>
          <div className="hero-number">01 / NEW SEASON</div>
        </section>

        <section className="collection" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CURATED FOR YOU</p>
              <h2>Find your <em>fit.</em></h2>
            </div>
            <p>Pieces to make every day feel like a runway.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <img
                    src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80`}
                    alt={product.name}
                  />
                  <span className="category-tag">{product.category}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">MORE THAN FASHION</p>
          <h2>Be bold. Be you. <em>Always.</em></h2>
          <p>StyleSphere is where everyday outfits meet your unique personality.</p>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">StyleSphere<span>.</span></a>
        <p>Find your style. Make it yours.</p>
        <span>© 2026 StyleSphere</span>
      </footer>
    </div>
  );
}

export default App;
