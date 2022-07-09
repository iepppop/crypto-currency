import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchCoins = async() => { 
        setLoading(true);
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=KRW&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        setCoins(data);
        setLoading(true); 
    }

    useEffect(() => {
        fetchCoins();
    }, []);

  return (
    <Container>
      {coins.map((coin)=> {
        return (
          <CoinWrap key={coin?.symbol}>
            <>{coin?.symbol}</>
            <>{coin?.symbol}</>
            <>{coin?.symbol}</>
            <>{coin?.symbol}</>
          </CoinWrap>
        )
      })}</Container>
  )
}
export default CoinsTable;

const Container = styled.div`
    max-width:1000px;
    margin: 0 auto;
`

const CoinWrap = styled.div`

`
