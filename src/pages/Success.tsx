import { Link } from "react-router-dom";

export default function Success() {

  const confirmationNumber = () => {
    const code = "UVWXYZA1B2C3D4E5F6G7H8J9K0LMNPQRST"
    let confirmation = '';
    for(let i = 0; i < 12; ++i)
      confirmation += code[Math.floor(Math.random()*code.length)];
    
    return confirmation;
  }

  return (
    <div className="text-align-center">
      <h1>Order placed</h1> 
      <h2>Confirmation Number: {confirmationNumber()}</h2>
      <Link to='/'>Home</Link>
    </div>
  )
}