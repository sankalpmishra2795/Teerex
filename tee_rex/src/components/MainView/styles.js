import styled from 'styled-components'


export const MainViewContainer = styled.div`
`

export const ProductListContainer = styled.div`
    height: 80vh;
    flex-wrap: wrap;
    display: flex;
    overflow-y: scroll;
`

export const CardContainer = styled.div`
    height: 300px;
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(250,250,250);
    border-radius: 5px;
    margin: 20px 20px;
    transition: all .4s;
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    @media (max-width: 820px) {
        height: 270px;
        width: 240px;
      }
    @media (max-width: 500px) {
        height: 360px;
        width: 320px;
    }
    }
`
export const CardImageWarper = styled.div`
    height: 75%;
    width: 85%;
    background: rgba(0,0,0, .08);
`

export const CardBottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    align-items: center;
`

export const CardImg = styled.img`
    width: 100%;
`

export const PriceText = styled.p`
    font-size: 18px;
    font-weight: bold;
`
export const CardButton = styled.button`
    border: none;
    padding: 10px 20px;
    background: rgba(0,0,0, .75);
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: all .4s;
    &:hover {
        background: #f9511a;
    }
`
export const CardButton2 = styled.div`
    border: none;
    padding: 10px 20px;
    background: rgba(0,0,0, .75);
    color: #fff;
    border-radius: 5px;
`
export const CardButtonMinus = styled.span`
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    font-size: 1.3rem;
    &:hover {
        color: #f9511a;
    }
`
export const ProductCount = styled.span`
    padding: 0px 10px 0px 10px;
`
export const CardButtonPlus = styled.span`
    padding: 5px 10px 5px 5px;
    cursor: pointer;
    font-size: 1.3rem;
    &:hover {
        color: #f9511a;
    }
`



