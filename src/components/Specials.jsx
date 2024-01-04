import Special from "./Special";

const specials = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img: "../assets/greek salad.jpg",
  },
  {
    id: 2,
    name: "Bruchetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img: "../assets/bruchetta.svg",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: "../assets/lemon dessert.jpg",
  },
];

function Specials() {
  return (
    <section className="specials">
      {specials.map((special) => (
        <Special {...special} key={special.id} />
      ))}
    </section>
  );
}

export default Specials;
