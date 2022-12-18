import React, { useState } from 'react'
import MainView from '../MainView';
import SideBar from '../SideBar';
import * as SC from "./styles";
import useScreenViewHook from './useScreenViewHook';

 const ScreenView = () => {
     const [filterIconShow, setFilterIconShow] = useState(false);
     const [showFilterModal, setShowFilterModal] = useState(true);
     const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });
     useScreenViewHook(setFilterIconShow, setWindowSize, windowSize);
     const toggleHandler = () =>{
        setShowFilterModal(!showFilterModal)
     } 
  return (
    <SC.ScreenContainer>
        {!filterIconShow ?
            <SC.SideBarContainer>
                <SideBar />
            </SC.SideBarContainer>
        :
            <SideBar 
                filterIconShow={filterIconShow} 
                toggleHandler={toggleHandler}
                showFilterModal={showFilterModal}
            />
        }
        <SC.MainViewContainer>
            <MainView 
                filterIconShow={filterIconShow} 
                toggleHandler={toggleHandler} 
            />
        </SC.MainViewContainer>
    </SC.ScreenContainer>
  )
}

export default ScreenView;