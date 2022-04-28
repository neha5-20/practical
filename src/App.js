import './App.css';

 
function App() {
  return (
    <div className="web">
      <div className="banner">
        <h1>Fall <span>for</span><br/> Fashion</h1>
      </div>
      <div className="main">
        <h1>Our Products</h1>
        <div className="card_wrapper">
          <div className="card">
              <div className="card_img"></div>
              <div className="card_content">Women's Clothing</div>
          </div>
          <div className="card">
              <div className="card_img"></div>
              <div className="card_content">Men's Clothing</div>
          </div>
          <div className="card">
              <div className="card_img"></div>
              <div className="card_content">Cosmetics</div>
          </div>
          <div className="card">
              <div className="card_img"></div>
              <div className="card_content">Home Decor</div>
          </div>
        </div>
      </div>
      <div className="footer">
         <h1><i class="fab fa-instagram"></i></h1>
         <h1><i class="fab fa-facebook-square"></i></h1>
         <h1><i class="fab fa-twitter"></i></h1>
         <h1><i class="fab fa-linkedin"></i></h1>
      </div>
    </div>
  );
}

export default App;
