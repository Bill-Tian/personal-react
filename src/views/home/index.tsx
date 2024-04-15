import { useSelector, useDispatch } from "react-redux";
import { setTaskName } from "@/store/features/taskSlice";
import SvgIcon from "@/components/SvgIcon";
import "./index.less";

const Home = () => {
  const { taskName } = useSelector((state: any) => state.task);
  const dispath = useDispatch();

  const setName = () => {
    dispath(setTaskName("嘿哈嘿哈"));
  };

  const iconList = [
    {
      id: 5,
      title: "Github",
      icon: "github",
    },
    {
      id: 6,
      title: "Email",
      icon: "email",
    },
  ];

  return (
    <div>
      <div>
        <figure className="home-bg"></figure>

        <div className="welcome">
          <h2 data-text="HI, Mr.Tian!" className="glitch">
            HI, Mr.Tian!
          </h2>
          <section className="info">
            <span className="arrow"></span>
            <p className="descript">我有一壶酒，足以慰风尘，尽倾江海里，赠饮天下人。</p>
            <div className="top-social">
              {iconList.map((item) => {
                return (
                  <li>
                    <a href="#" title={item.title}>
                      <SvgIcon icon={item.icon} size={24} style={{ marginRight: "6px" }} />
                    </a>
                  </li>
                );
              })}
            </div>
          </section>
        </div>
      </div>
      <h1>{taskName}</h1>
      <button onClick={setName}>修改名称</button>
      <h2 className="flex m-4 bg-orange-400">webpack5-react-ts2</h2>
      <div className={"bg-blue-500 text-white m-4 p-1"}>Optimizing font loading</div>
    </div>
  );
};

export default Home;
