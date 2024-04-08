import "@/App.css";
import "./app.less";
import smallImg from '@/assets/imgs/small.jpg'
import bigImg from '@/assets/imgs/big.png'

function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={'lessBox'}>
        <div className={'box'}>lessBox</div>
      </div>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />
      <div className={'smallImg'}>小图片背景</div>
      <div className={'bigImg'}>大图片背景</div>
      <div className={'text'}>Optimizing font loading</div>
    </div>
  );
}

export default App;
