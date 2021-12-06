import React from "react";
import Catalog from "../Catalog/Catalog";
import styles from "./main.module.css";
import ActionAreaCard from "../Card/card";
import PaginationRounded from "../Pagination/Pagination";

const Main = () => {
  const posts = [
    {
      imgSrc: "../../assets/slika-1.jpg",
      title: "Liard",
      text: "sjdansdjkasdjkasbfasbfasjbfaskfbasbfjkasbdkjasdbsjkdsaj",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdasdasdasdad",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
    {
      imgSrc: "asdasdasd",
      title: "safasfas",
      text: "sadasfasfsasdasdasdasdasdadasdasdasdasdasdasdasdasdasdasdadasdasdasd",
    },
  ];

  return (
    <div className={styles.main}>
      <div>
        <Catalog />
        <div>
          {posts.map((blog) => {
            return (
              <ActionAreaCard
                imgSrc={blog.imgSrc}
                title={blog.title}
                text={blog.text}
              />
            );
          })}
        </div>
        <PaginationRounded />
      </div>
    </div>
  );
};

export default Main;
