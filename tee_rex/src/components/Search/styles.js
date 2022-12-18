import styled from 'styled-components'

export const SearchBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    background: #fff;
    @media (max-width: 500px) {
        justify-content: space-around;
      }
`
export const SearchBoxWarper = styled.div`
    display: flex;
`

export const InputBox = styled.input`
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .7);
    width: 25vw;
    background: rgba(0, 0, 0, .01);
    outline: none;
`
export const SearchButton = styled.button`
    margin-left: 15px;
    border: none;
    background: rgba(0, 0, 0, .07);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
`
export const SearchButtonImg = styled.img`

`
export const FilterIconWrap = styled.button`
    margin-left: 25px;
    border: none;
    background: rgba(0, 0, 0, .07);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    border-radius: 5px;
    z-index: 99;
    
`
export const FilterIcon = styled.img`
    width: 35px;
`

