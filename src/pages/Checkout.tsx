import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { getTotal } from "../utilities/utilFn";

export default function Checkout() {
  const navigate = useNavigate();

  const { items } = useSelector((state: RootState) => state.cart);

  const subtotal = getTotal(items);
  const tax = (subtotal * 0.1).toFixed(2);
  const total = (subtotal + +tax).toFixed(2);

  const handleSubmit = () => {
    navigate("/checkout/success");
  };

  return (
    <main className="checkout">
      <header className="checkout-header">
        <h1>Checkout</h1>
      </header>
      <section className="checkout-container">
        <form
          className="checkout-form flow"
          id="checkout-form"
          onSubmit={() => handleSubmit()}
        >
          <div className="input-wrapper">
            <h3>Shipping address</h3>
            <div className="flex-group">
              <div>
                <label htmlFor="fName">First Name</label>
                <input id="fName" type="text" />
              </div>
              <div>
                <label htmlFor="lName">Last Name</label>
                <input id="lName" type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input id="address" type="text" />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" type="text" />
            </div>
            <div className="flex-group">
              <div>
                <label htmlFor="state">State</label>
                <input id="state" type="text" />
              </div>
              <div>
                <label htmlFor="zip Code">ZIP Code</label>
                <input id="zip Code" type="text" />
              </div>
            </div>
          </div>
          <div className="input-wrapper">
            <h3>Contact</h3>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input id="Phone" type="text" />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input id="Email" type="email" />
            </div>
          </div>
          <div className="input-wrapper">
            <h3>Payment</h3>
            <div>
              <label htmlFor="cardName">Name on card</label>
              <input id="cardName" type="text" />
            </div>
            <div>
              <label htmlFor="cardNumber">Card number</label>
              <input id="cardNumber" type="text" pattern="^[0-9]{16}$" />
            </div>
            <div className="flex-group">
              <div>
                <label htmlFor="cardExp">Expired date</label>
                <input id="cardNumber" type="month" />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input id="cvv" type="text" pattern="^[0-9]{3,4}$" required />
              </div>
            </div>
          </div>
        </form>
        <section className="order-summary flow">
          <h1>Order Summary</h1>
          <div className="order-items">
            {items.map((item) => (
              <div className="order-item flex-group space-between">
                <img
                  className="order-item-img"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>Qty: {item.quantities}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <input type="text" style={{ flexBasis: "100%" }} />
            <button className="coupon-btn btn" data-color="blue">
              Apply
            </button>
          </div>
          <div className="flex-group">
            <p>Subtotal:</p>
            <p>{subtotal}</p>
          </div>
          <div className="flex-group">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex-group">
            <p>Tax:</p>
            <p>{tax}</p>
          </div>
          <div className="flex-group">
            <p>Total:</p>
            <p>{total}</p>
          </div>
        </section>
        <button
          className="checkout-btn btn"
          data-color="orange"
          form="checkout-form"
          type="submit"
        >
          place order
        </button>
      </section>
    </main>
  );
}
