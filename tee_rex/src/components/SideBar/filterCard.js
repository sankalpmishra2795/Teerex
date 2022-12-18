import React from 'react'
import * as SC from "./styles";


const FilterCard = ({value, filterQueryHandler}) => {
  return (
      <SC.FilterCardWarper>
        <SC.FilterCardHeading>{value.heading}</SC.FilterCardHeading>
            {value.typeArr.map((t,i) => {
                return(
                    <SC.FilterCardType key={i}> 
                        <SC.FilterCardCheckBox type='checkbox' value={t} onChange={(e)=> filterQueryHandler(e,value.key)}/>
                        <SC.FilterCardCheckBoxLabel>{t}</SC.FilterCardCheckBoxLabel>
                    </SC.FilterCardType>
                )
            })}
            
      </SC.FilterCardWarper>
    
  )
}

export default FilterCard