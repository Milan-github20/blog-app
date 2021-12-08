import React, { useEffect, useState } from "react";
// import Catalog from "../Catalog/Catalog";
// import styles from "./main.module.css";
import ActionAreaCard from "../Card/card";
// import PaginationRounded from "../Pagination/Pagination";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styles from "./main.module.css";

const Main = () => {
  const [allPost, setAllPost] = useState([]);
  const [tesla, setTesla] = useState([]);
  const [techCrunch, setTechCrunch] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-06&sortBy=publishedAt&apiKey=3cc4e516dfd24baea1eaf8fe123a2963"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTesla(data.articles);
      });
  });

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-07&to=2021-12-07&sortBy=popularity&apiKey=3cc4e516dfd24baea1eaf8fe123a2963"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllPost(data.articles);
      });
  });

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3cc4e516dfd24baea1eaf8fe123a2963"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTechCrunch(data.articles);
      });
  });

  return (
    <main id="main" className={styles.main}>
      <Container>
        <Tabs defaultActiveKey="home" className="mb-3">
          <Tab eventKey="home" title="All">
            <div className={styles.grid}>
              {allPost?.map((el) => {
                return (
                  <ActionAreaCard
                    key={el.id}
                    img={el.urlToImage}
                    txt={el.txt}
                    title={el.title}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="profile" title="TechCrunch">
            <div className={styles.grid}>
              {techCrunch?.map((el) => {
                return (
                  <ActionAreaCard
                    key={el.id}
                    img={el.urlToImage}
                    txt={el.txt}
                    title={el.title}
                  />
                );
              })}
            </div>
          </Tab>
          <Tab eventKey="contact" title="Tesla">
            <div className={styles.grid}>
              {tesla?.map((el) => {
                return (
                  <ActionAreaCard
                    key={el.id}
                    img={el.urlToImage}
                    txt={el.txt}
                    title={el.title}
                  />
                );
              })}
            </div>
          </Tab>
        </Tabs>
      </Container>
    </main>
  );
};

export default Main;
