import styled from 'styled-components'

export const SideBarContainer = styled.div`
    display: ${props => props.showFilterModal? 'none': 'flex'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        position: absolute;
        top: 65px;
        right: 20px;
      }
    
`

export const FilterCardContainer = styled.div`
    width: 70%;
    box-shadow: 10px 10px 10px 10px rgba(0,0,0, .1);
    @media (max-width: 500px) {
        width: 120%;
        background: #fff;
      }
`
export const SideBarEmptyContainer = styled.div`
    height: 10vh;
`
export const FilterCardWarper = styled.div`
    margin-left: 20px;
    margin-bottom: 30px;

`
export const FilterCardHeading = styled.p`
    font-size: 18px;
    font-weight: bold;
`
export const FilterCardType = styled.div`
    display: flex;
`
export const FilterCardCheckBox = styled.input`
    zoom: 1.5;
    cursor: pointer;
`
export const FilterCardCheckBoxLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
    align-self: center;
`