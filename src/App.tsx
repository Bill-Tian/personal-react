// import "@/App.css";
// import "./app.less";
// import smallImg from '@/assets/imgs/small.jpg'
// import bigImg from '@/assets/imgs/big.png'

import { useRoutes } from "react-router-dom"
import routes from "@/router/index"
import HomeHeader from "@/layout/_common/header"

function App() {
  const element = useRoutes(routes)
  return (
    <>
      <HomeHeader />
      {element}
    </>
  );
}

export default App;
