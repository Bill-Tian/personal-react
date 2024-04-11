import { useSelector } from "react-redux";

const about = () => {
  const selector = useSelector((state: any) => state.task);
  return (
    <div>
      <h3>{selector.taskName}</h3>
      <h2>webpack5-react-ts</h2>
      <div className={"text"}>Optimizing font loading</div>
    </div>
  );
};

export default about;
