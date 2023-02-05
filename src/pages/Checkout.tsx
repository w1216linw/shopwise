import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

  const navigate = useNavigate();

  const { items } = useSelector((state: RootState) => state.cart);

  const handleSubmit = () => {
    navigate('/checkout/success');
  };

  return (
    <main className="checkout">
      <header className="checkout-header">
        <h1>Checkout</h1>
      </header>
      <section className="checkout-container">
        <form className="checkout-form">
          <fieldset className="input-wrapper">
            <legend>Shipping address</legend>
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
          </fieldset>
          <fieldset className="input-wrapper">
            <legend>Contact</legend>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input id="Phone" type="text" />
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input id="Email" type="email" />
            </div>
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            <div>
              <label htmlFor="cardName">Name on card</label>
              <input id="cardName" type="text" />
            </div>
            <div>
              <label htmlFor="cardNumber">Card number</label>
              <input id="cardNumber" type="text" />
            </div>
            <div className="flex-group">
              <div>
                <label htmlFor="cardExp">Expired date</label>
                <input id="cardNumber" type="text" />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input id="cvv" type="text" />
              </div>
            </div>
          </fieldset>
        </form>
        <section className="order-summary flow">
          <h1>Order Summary</h1>
          <div>items</div>
          <div >
            <input type="text" />
            <button>Apply</button>
          </div>
          <div className="flex-group">
            <p>subtotal:</p>
            <p>#</p>
          </div>
          <div className="flex-group">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className="flex-group">
            <p>Total:</p>
            <p>#</p>
          </div>
        </section>
        <button className="checkout-btn" type="submit" onClick={() => handleSubmit()}>Place order</button>
      </section>
    </main>
  );
}
