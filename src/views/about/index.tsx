import { useSelector } from "react-redux";
import BgPhoto from "../components/bgphoto";

const Work = () => {
  const selector = useSelector((state: any) => state.task);
  return (
    <div>
      <BgPhoto path={"https://cdn.pixabay.com/photo/2024/04/01/17/55/straubing-8669480_1280.jpg"} />
      <h3>{selector.taskName}</h3>
      <h2>webpack5-react-ts</h2>
      <div className={"text"}>Optimizing font loading</div>
    </div>
  );
};

export default Work;
