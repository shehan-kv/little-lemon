function Special(props) {
  return (
    <article className="special">
      {/* <img src={`../assets/${props.img}`} alt={props.name} /> */}
      <img src={new URL(props.img, import.meta.url)} alt={props.name} />
      <div>
        <div className="special-title">
          <h3>{props.name}</h3>
          <p>{props.price}</p>
        </div>
        <p>{props.desc}</p>
        <button>Order a delivery</button>
      </div>
    </article>
  );
}

export default Special;
