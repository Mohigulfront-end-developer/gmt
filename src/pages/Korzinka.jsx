
import { useSelector } from "react-redux";

const Korzinka = () => {
  const { cards } = useSelector((state) => state.cartProducts);
  return (
    <div>
      <div className="container">
        {cards.map((card) => (
          <div key={card.id} className="grid grid-cols-4 gap-4">
            <div className="">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <p>{card.position}</p>
            </div>
            <div className="">
              <p>{card.price}</p>
              <div className="flex gap-2">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <div className="flex gap-2">
              <button>Remove</button>
              <button>Save for later</button>
              <button>Move to Wishlist</button>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Korzinka;
