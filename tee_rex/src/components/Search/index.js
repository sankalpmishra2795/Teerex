import React, { useState } from 'react'
import * as SC from "./styles";
import SearchIcon from '../../assets/search.png'
import FilterIcon from '../../assets/filter-icon.png'
import useSearchHook from './useSearchHook';
import { getAllSearchProduct } from '../../redux/product/productAction';
import { useDispatch } from 'react-redux';
const SearchBox = ({filterIconShow, toggleHandler}) => {
    const [searchValue, setSearchValue] = useState('');
    const [productList, setProductList] = useState([])
    let searchProductList = []
    const dispatch = useDispatch();
    useSearchHook(setProductList);

    const searchHandler =(e)=> {
        setSearchValue(e.target.value)
        if(e.target.value ===''){
            dispatch(getAllSearchProduct(productList, false))
        }
    }
    const searchOnClick = ()=> {
        if(searchValue === '') {
            dispatch(getAllSearchProduct(productList, false))
        }else {
            if(productList?.length > 0){
                productList.forEach(s => {
                    if(s.color.toUpperCase().startsWith(searchValue.toUpperCase())){
                        searchProductList.push(s)
                    }else if(s.type.toUpperCase().startsWith(searchValue.toUpperCase())){
                        searchProductList.push(s)
                    }else if(s.name.toUpperCase().startsWith(searchValue.toUpperCase())){
                        searchProductList.push(s)
                    }else if(s.gender.toUpperCase().startsWith(searchValue.toUpperCase())){
                        searchProductList.push(s)
                    }
                })
                dispatch(getAllSearchProduct(searchProductList, true))
                setSearchValue('');
            }
        }
        
    }
  return (
    <SC.SearchBoxContainer>
        <SC.SearchBoxWarper>
            <SC.InputBox placeholder='Search for products. . . ' onChange={ (e)=> searchHandler(e)} />
            <SC.SearchButton onClick={(e)=> searchOnClick(e)}>
                <SC.SearchButtonImg alt='search-icon' src={SearchIcon}/>
            </SC.SearchButton>
        </SC.SearchBoxWarper>
        {filterIconShow?    
            <SC.FilterIconWrap onClick={(e)=> toggleHandler(e)}>
                <SC.FilterIcon alt='filter-img' src={FilterIcon} />
            </SC.FilterIconWrap>
        :
        null}
    </SC.SearchBoxContainer>
  )
}

export default SearchBox;