import { Link } from "react-router-dom";
import SvgIcon from "@/components/SvgIcon";

const Header = () => {
  const navList = [
    { label: "首页", icon: "home", path: "/" },
    { label: "博客", icon: "blog", path: "/blog" },
    { label: "归档", icon: "archive", path: "/archive" },
    { label: "音乐", icon: "music", path: "/music" },
    { label: "关于", icon: "about", path: "/about" },
  ];

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

      <div className="flex">
        {navList.map((item, index) => {
          return (
            <li key={index} className={"list-none ml-6 h-16 "}>
              <Link to={item.path} className={"h-full flex items-center"}>
                <SvgIcon icon={item.icon} size={18} />
                {item.label}
              </Link>
            </li>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
