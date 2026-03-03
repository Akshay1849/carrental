// ...existing code...
import "../styles/Home.css";
import { useNavigate, Link } from "react-router-dom";

const sampleCars = [
  { id: 1, brand: "Tesla", name: "Model S", price: 120 },
  { id: 2, brand: "Honda", name: "Civic", price: 45 },
  { id: 3, brand: "Toyota", name: "Corolla", price: 40 },
];

const Home = () => {
  const navigate = useNavigate();
  const handleExplore = () => navigate("/cars");

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Rent Your Dream Car Today</h1>
          <p>Affordable prices. Premium cars. Easy booking.</p>
          <button className="hero-btn" onClick={handleExplore}>
            Explore Cars
          </button>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Cars</h2>
        <div className="car-grid">
          {sampleCars.map((car) => (
            <Link to="/cars" key={car.id} className="car-card">
              <div className="car-info">
                <h3>
                  {car.brand} {car.name}
                </h3>
                <p>₹{car.price * 75} / day</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-grid">
          <div>
            <h4>Affordable Pricing</h4>
            <p>No hidden charges.</p>
          </div>
          <div>
            <h4>Easy Booking</h4>
            <p>Book in just 2 minutes.</p>
          </div>
          <div>
            <h4>24/7 Support</h4>
            <p>We are always here for you.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
// ...existing code...