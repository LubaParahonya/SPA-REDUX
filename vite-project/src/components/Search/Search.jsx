import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { searchItem, searchFilterItem } from '../../actions';
import { getListByFilter } from '../../reducer/selector';

const Search = ({select, list, submitSearchItem, submitSearchFilterItem}) => {
  const dispatch = useDispatch()
    //const ser = useSelector(state => state.search)
    //const list = useSelector(state => state.list)
    // console.log(select)
    // console.log(list)
    const handelSearch = (e, select, list) =>{
      e.preventDefault()
      submitSearchItem(e.target.value)
      submitSearchFilterItem(select, list)
    }
  return (
    <form >
      <input type='text' onChange={(e) => handelSearch(e)}></input>
    </form>
  )
}

const mapStateToProps = state => {
  return {list: state.list.allIds,
          select : state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitSearchItem: (value) => {
      dispatch(searchItem(value))
    },
    submitSearchFilterItem: (value, list) => {
      dispatch(searchFilterItem(value, list))
    }
}
}

//export default ListItem
export default connect(mapStateToProps, mapDispatchToProps)(Search);

