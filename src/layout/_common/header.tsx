import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-top">
      <div className="site-branding">
        <a href="https://sakura.2heng.xin">
          {/* <img
                        style={{ width: "200px" }}
                        src="https://sakura.2heng.xin/wp-content/uploads/2018/06/mashiro-logo.png"
                    /> */}
        </a>
      </div>

      <div className="nav nav1">
        <li>
          <Link to="/">首页</Link>
          <Link to="/work">归档</Link>
        </li>
      </div>
    </header>
  );
};

export default Header;
