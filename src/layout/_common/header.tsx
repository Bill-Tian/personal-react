import { Link } from "react-router-dom";
import SvgIcon from "@/components/SvgIcon";
import "./index.less";

const Header = () => {
  const navList = [
    { label: "首页", icon: "home", path: "/" },
    { label: "博客", icon: "blog", path: "/blog" },
    { label: "归档", icon: "archive", path: "/archive" },
    { label: "音乐", icon: "music", path: "/music" },
    { label: "关于", icon: "about", path: "/about" },
  ];

  return (
    <header className="flex justify-between items-center px-8 bg-sky-300">
      <div className="site-branding">
        <a href="https://sakura.2heng.xin">
          <span
            className={
              "inline-block w-60 h-12 bg-[url(https://www.yanceyleo.com/images/logo-light.png)] bg-center bg-cover bg-no-repeat"
            }
          />
        </a>
      </div>

      <div className="flex">
        {navList.map((item, index) => {
          return (
            <li key={index} className={"list-none ml-6 h-16 "}>
              <Link to={item.path} className={"abc relative h-full flex items-center text-[#666666]"}>
                <SvgIcon icon={item.icon} size={18} style={{ marginRight: "6px" }} />
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
