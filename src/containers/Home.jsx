import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/Carousel.jsx";
import CarouselItem from "../components/CarouselItem.jsx";
import useInitialState from "../hooks/useInitialState.js";
import "../assets/styles/app.scss";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
    <Header />
      <Search  isHome/>

      {mylist.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={`${item.id}_mylist`} {...item} isList/>
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="For the Road">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
