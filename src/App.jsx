import { useEffect, useState } from "react";
import { Pagination, Card, Spin, Space } from "antd";
import "antd/dist/antd.css";

import "./App.css";
const App = () => {
  const [current, setCurrent] = useState("");
  const [data, setData] = useState([]);
  const api = `https://api.unsplash.com/search/collections?page=${current}&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`;
  useEffect(() => {
    setData([]);
    fetch(api)
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, [api]);
  return (
    <>
      <Pagination current={current} onChange={setCurrent} total={50} />
      {data.length > 0 ? (
        data.map((i) => (
          <Card
            key={i.id}
            hoverable
            style={{ width: 240, margin: 20 }}
            cover={<img alt="api-images" src={i.preview_photos[0].urls.raw} />}
          ></Card>
        ))
      ) : (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
    </>
  );
};

export default App;
