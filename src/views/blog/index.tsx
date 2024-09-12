import { useSelector } from "react-redux";
import "./index.less";
import { getArticleAllrApi } from "@/api/article";
import { useEffect, useState } from "react";

const Work = () => {
  const selector = useSelector((state: any) => state.task);

  const featureList = [
    {
      label: "1",
      // url: require("../../assets/images/card/land1.jpg"),
      h3: "feature",
      des: "Html5",
    },
    {
      label: "2",
      // url: require("../../assets/images/card/land2.jpg"),
      h3: "feature",
      des: "Css3",
    },
    {
      label: "3",
      // url: require("../../assets/images/card/land3.jpg"),
      h3: "feature",
      des: "JavaScript",
    },
  ];

  const [tableData, setTableData] = useState([]);

  // 获取blog表格数据
  const getListOfData = () => {
    getArticleAllrApi().then((res) => {
      if (res.code === 0) {
        setTableData(res.data);
      }
    });
  };
  getListOfData();

  const toDetail = (item: any) => {
    console.log(item);
  };

  return (
    <div className="blog-box">
      <div className="notice">
        <span className="iconfont icon-notification"></span>
        <div className="tian">Tian 的网站上线啦</div>
      </div>

      <div className="feature">
        <h1>
          <span className="iconfont icon-notification"></span>
          <span>聚焦</span>
        </h1>

        <div className="feature-box">
          {featureList.map((item: any, index: number) => {
            return (
              <div className="img-titie" key={index}>
                <a href="">
                  <div className="img-box">
                    <img src={item.url} />
                  </div>
                  <div className="descript">
                    <h3>{item.h3}</h3>
                    <p>{item.des}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="discovery">
        <h1>
          <span className="iconfont icon-notification"></span>
          <span>Discovery</span>
        </h1>

        {tableData.map((item: any, index: number) => {
          return (
            <article
              className="article"
              key={index}
              style={{ flexDirection: index % 2 == 1 ? "row-reverse" : "row" }}
              onClick={() => toDetail(item)}
            >
              <div className="picture-box">
                <a onClick={() => toDetail(item)} className={index % 2 == 0 ? "radl" : "radr"}>
                  <img
                    src={"https://cdn.jsdelivr.net/gh/Bill-Tian/Picture-library@master/img/" + item.imgName}
                    alt=""
                  />
                </a>
              </div>
              <div className="word-box">
                <div>
                  <div className="time">
                    <span className="iconfont icon-notification iconR10"></span>
                    <span className="mar5">发布于</span>
                    <span>{item.createdAt}</span>
                  </div>
                  <a href="" className="titles">
                    <h3>{item.title}</h3>
                  </a>
                  <div className="hots">
                    <span className="span-box">
                      <span className="iconfont icon-view iconR10"></span>
                      <span className="mar5">{item.viewCount} </span>
                      <span>查看</span>
                    </span>
                    <span className="span-box">
                      <span className="iconfont icon-like iconR10"></span>
                      <span className="mar5">{item.favoritesCount}</span>
                      <span>点赞</span>
                    </span>
                  </div>
                  <div className="contents">
                    <p>{item.description}</p>
                    <div></div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        {/* <div className="loading">
        <button v-if="!loading && !isShow" @click="loadMore">加载更多</button>
        <button v-if="isShow">没有啦，已经到底了！</button>
      </div> */}
      </div>
    </div>
  );
};

export default Work;
