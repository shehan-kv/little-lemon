import img1 from "../assets/Mario and Adrian A.jpg";
import img2 from "../assets/Mario and Adrian b.jpg";

function About() {
  return (
    <section className="about">
      <article>
        <div>
          <h2>
            Little Lemon <br />
            <span>Chicago</span>
          </h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>

        <div className="about-img-container">
          <img src={img1} alt="about banner 1" className="about-img-1" />
          <img src={img2} alt="about banner 2" className="about-img-2" />
        </div>
      </article>
    </section>
  );
}

export default About;
