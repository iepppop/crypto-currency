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
      items: 4,
    },
    1020: {
      items: 4,
    },
  };

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link to={`/coins/${coin.id}`}>
        <CarouselItem>
        <ItemWrap>
          <FirstWrap>
            <ImgWrap>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            stlye={{ marginBotton: 10 }}
          />
          </ImgWrap>
          <h1>
             {coin?.symbol} 
             </h1>
          </FirstWrap>
          <span>
         &nbsp;
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
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </Contain>
  );
};

export default Carousel;

const Contain = styled.div`
  max-width:1000px;
  margin: 0 auto;
  height: auto;
  position: relative;
  z-index: 2;
  border-radius:20px;
  background:rgba(255,255,255,0.1);
  border:1px solid rgba(255,255,255,0.2);
`

const CarouselItem = styled.div`
  padding:10px 10px;
  
`

const ItemWrap = styled.div`

  font-family:'poppins';
  font-size:13px;

  h1{
    font-family:'Pretendard';
  }
`
const FirstWrap = styled.div`
  display: flex;
  align-items:center;

  h1{
    margin:0 0 0 10px;
    text-transform:uppercase;
  }
`

const ImgWrap = styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  margin:0 0 20px 0;
  overflow:hidden;
  img{
    height:100%;
  }

`
