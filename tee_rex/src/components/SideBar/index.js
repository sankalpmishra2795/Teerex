import React, { useState } from 'react'
import { typeArray } from '../../utils';
import FilterCard from './filterCard';
import * as SC from "./styles";
import { useNavigate } from "react-router-dom";

const filterInitialState = {
  color: [],
  gender: [],
  price: [],
  type: []
}

const SideBar = ({showFilterModal}) => {
const [filterQuery, setFilterQuery] = useState(filterInitialState)
const navigate = useNavigate();

  
const filterQueryHandler =(e, type)=> {
  let query = ''
  if(e.target.checked) {
    const newQuery = {...filterQuery, [type]: [...filterQuery[type], e.target.value]}
    Object.keys(newQuery).map((singleQueryType, ind) => {
      if(ind === 0) {
        query = `?${singleQueryType}=${JSON.stringify(newQuery[singleQueryType])}`
      } else {
        query += `&${singleQueryType}=${JSON.stringify(newQuery[singleQueryType])}`
      }
      return ind;
    })
    setFilterQuery(newQuery)
  } else {
    const newQuery = {...filterQuery, [type]: filterQuery[type].filter(item => item !== e.target.value)}
    setFilterQuery(newQuery)
    Object.keys(newQuery).map((singleQueryType, ind) => {
      if(ind === 0) {
        query = `?${singleQueryType}=${JSON.stringify(newQuery[singleQueryType])}`
      } else {
        query += `&${singleQueryType}=${JSON.stringify(newQuery[singleQueryType])}`
      }
      return ind;
    })
  }
  
  navigate(query)
}
  return (
      <SC.SideBarContainer showFilterModal={showFilterModal}>
      <SC.SideBarEmptyContainer></SC.SideBarEmptyContainer>
      <SC.FilterCardContainer>
          {typeArray.map((f,i) => {
            return(
              <FilterCard 
                key={i} 
                value={f} 
                filterQueryHandler={filterQueryHandler}
              />
            )
          })}
      </SC.FilterCardContainer>
    </SC.SideBarContainer>
  )
}

export default SideBar