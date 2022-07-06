import styled from 'styled-components';

const Header = () => {
    return (
        <Contain>
            <Container>
                <h1>Coins</h1>
                <span>searc</span>
            </Container>
        </Contain>
    )
}
export default Header;

const Contain = styled.div`
    width:100%;
    height:7vh;
`

const Container = styled.div`
    max-width: 1000px;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding:5px 0 0 0;
    color:#fff;
    position:relative;


    h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        font-size:14px;
    }
`