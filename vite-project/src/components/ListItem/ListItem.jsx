import React from 'react'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'
import style from './ListItem.module.css'
import Input from '../Input/Input'
import FilterButton from '../FilterButton/FilterButton'
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from '../../reducer/selector'
import { useNavigate } from 'react-router-dom'
import FilterCategory from '../FilterCategory/FilterCategory'
import { IoAddCircleOutline } from "react-icons/io5";
import Search from '../Search/Search'

const ListItem = ({list}) => {
    const navigate = useNavigate()
    const search = useSelector(state => state.search)
    // const searchItems = (list, search) => {
    //   list.filter(el => el.id.catecories.indexof(search) > -1)
    // }
    // const visibleList = searchItems(list, search)
  return (
    <div className={style.mainBox}>
    <div className={style.mainPart}>
      <div className={style.blockButton}>
      <IoAddCircleOutline className={style.addButton} onClick={()=> navigate('/create')}/>
      {/* <Search /> */}
      <FilterButton />
      </div>
    <div className={style.boxList}>
      {list && list.length? list.map(el => (
        <Item
        key={el.id.id}
        title ={el.id.title}
        id ={el.id.id}
        isLike={el.id.isLike}
        catecories={el.id.catecories}
        price={el.id.price}/>
      )): null}
    </div>
    </div>
    <FilterCategory />
    </div>
  )
}

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const list = getTodosByVisibilityFilter(state, visibilityFilter);
  return { list };
}

//export default ListItem
export default connect(mapStateToProps)(ListItem);
