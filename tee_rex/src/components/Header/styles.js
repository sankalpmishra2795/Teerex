import styled from 'styled-components'

export const NavBarContainer = styled.div`
    height: 7vh;  
    background: rgb(249 80 26); 
    display: flex; 
    align-items: center; 
    justify-content: center;
`
export const NavBarWrap = styled.div`
    width: 75%; 
    display: flex; 
    align-items: center; 
    justify-content: space-between;
`
export const NavBarWarper = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    cursor: pointer;
`
export const NavHeading = styled.div`
    font-size: 20px; 
    font-weight: bold;
    cursor: pointer;
`
export const NavHeadingSpan = styled.span`
    font-size: 30px; 
    color: #fff;
`
export const IconWarper = styled.div`
    position: relative;
`

export const IconImg = styled.img`
    width: 30px;
    color: #333;
`

export const CountWrap = styled.div`
    position: absolute;
    top: -10px;
    border-radius: 50%;
    background: #3edf3e;
    padding: 5px 5px;
    right: -30px;
`
export const CountText = styled.span`
    fontSize: 14px;
`

