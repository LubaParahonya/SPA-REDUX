import React from 'react'
import { useSelector } from 'react-redux'
import { setFilterCategory } from '../../actions'
import { connect } from "react-redux";
import style from './FilterCategory.module.css'

const FilterCategory = ({activeFilter, setFilterCategory}) => {
    const list = useSelector(state => state.list.allIds)
    const listCat = []
    list.map( el => (listCat.push(el.catecories)))
    const SetListCat = [... new Set(listCat)]

  return (
    <div className={style.boxFilterCategory}>
    {SetListCat.map(el => {
        const currentFilter = activeFilter;
        return (
            <button key={el} onClick={() => {
              alert('Дополнительная фильтрация не доработана')
            }} className={style.item}>
                {el}
            </button>
        )
     })}
    </div>
  )
}

  
  //export default connect(null, { setFilterCategory })(FilterCategory);

  const mapStateToProps = state => {
    return { activeFilter: state.filterCategory };
  };

  export default connect(mapStateToProps,{ setFilterCategory })(FilterCategory);
