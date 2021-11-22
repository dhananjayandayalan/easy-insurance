import classes from "./navbar.module.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className={`${classes.navbar} ${classes.row_aligned_flex}`}>
      <div className={`${classes.logo_ctn} ${classes.row_aligned_flex}`}>
        <img className={classes.logo} src={logo} alt=""></img>
        <h2 className={classes.logo_txt}>Easy Insurance</h2>
      </div>

      <div className={`${classes.link_ctn} ${classes.row_aligned_flex}}`}>
        <ul className={classes.row_aligned_flex}>
          <li>Quote</li>
          <li>Support</li>
          <li>About Us</li>
          <li>Utility</li>
        </ul>
      </div>

      <div className={classes.utility_ctn}>
        <ul className={classes.row_aligned_flex}>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
