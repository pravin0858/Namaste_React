import { LOGO_URL } from "../utlis/constant";





const Header = () =>{
  return (
    <div className="header-container">
      <div className="logo-container">
        <img  className="logo" alt="app logo" src={LOGO_URL}/>
      </div>
      <div className="header-list">
        <ul className="list">
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
          <li>Cart</li>
          <li>Sign-Up</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;