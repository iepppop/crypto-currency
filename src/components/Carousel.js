import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=KRW&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    setTrending(data);
    console.log(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 8,
    },
  };

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coins/${coin.id}`}>
        <CarouselItem>
        <ItemWrap>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            stlye={{ marginBotton: 10 }}
          />
          <span>
            {coin?.symbol} &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14,203,129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <h1 style={{ fontSize: 22, fontWeight: 500 }}>
          {numberWithCommas(
                coin?.current_price
              )}원
          </h1>
          </ItemWrap>
        </CarouselItem>
      </Link>
    );
  });

  return (
    <Contain>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </Contain>
  );
};

export default Carousel;

const Contain = styled.div`
  width:100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  z-index: 2;
`

const CarouselItem = styled.div`
  padding:10px 10px;
`

const ItemWrap = styled.div`
  border-radius:20px;
  background:rgba(255,255,255,0.1);
  border:1px solid rgba(255,255,255,0.2);
  padding:25px 40px;
  font-family:'poppins';
  font-size:13px;

  h1{
    font-family:'Pretendard';
  }

  img{
    width:40px;
    height:40px;
    border-radius:50%;
    display:block;
    margin:0 0 20px 0;
  }
`
