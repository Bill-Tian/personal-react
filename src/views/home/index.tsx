import { useSelector, useDispatch } from "react-redux";
import { setTaskName } from "@/store/features/taskSlice";
import "./index.less";

const Home = () => {
  const { taskName } = useSelector((state: any) => state.task);
  const dispath = useDispatch();

  const setName = () => {
    dispath(setTaskName("嘿哈嘿哈"));
  };

  return (
    <div>
      <div className="home-bg"></div>
      <h1>{taskName}</h1>
      <button onClick={setName}>修改名称</button>
      <h2 className="flex m-4 bg-orange-400">webpack5-react-ts2</h2>
      <div className={"bg-blue-500 text-white m-4 p-1"}>Optimizing font loading</div>
    </div>
  );
};

export default Home;
