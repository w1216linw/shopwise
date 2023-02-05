import { Link } from "react-router-dom";

export default function Success() {
  const confirmationNumber = () => {
    const code = "UVWXYZA1B2C3D4E5F6G7H8J9K0LMNPQRST";
    let confirmation = "";
    for (let i = 0; i < 12; ++i)
      confirmation += code[Math.floor(Math.random() * code.length)];

    return confirmation;
  };

  return (
    <div className="text-align-center">
      <header className="confirmation-header">
        <h1>Order placed</h1>
        <p>Thank you for shopping with us.</p>
      </header>
      <div className="confirmation-detail">
        <h2>Confirmation Number: {confirmationNumber()}</h2>
        <div>
          <p>Name: john doe</p>
          <p>Address: 1234 S ABC ST City, AB, 123456</p>
          <p>Tracking: 123456789ABC </p>
        </div>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}
