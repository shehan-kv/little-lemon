import banner from "../assets/restauranfood.jpg";

function Hero() {
  return (
    <section className="hero">
      <article>
        <div>
          <h1>
            Little Lemon <br />
            <span>Chicago</span>
          </h1>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <button>Reserve a table</button>
        </div>

        <img src={banner} alt="main banner" />
      </article>
    </section>
  );
}

export default Hero;
