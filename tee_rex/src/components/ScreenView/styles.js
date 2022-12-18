import styled from 'styled-components'

export const ScreenContainer = styled.div`
    display: flex;
    width: 100%;
`

export const SideBarContainer = styled.div`
    width: 25%;
    height: 93Vh;
    background: aliceblue;
}
`
export const MainViewContainer = styled.div`
    width: 75%;
    height: 93Vh;
    background: rgba(0, 0, 0, .05);
    @media (max-width: 500px) {
        width: 100%;
      }
}
`