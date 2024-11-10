import React from 'react'
import { setFilter } from '../../actions'
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from '../../filterList';
import cx from "classnames";
import style from './FilterButton.module.css'


const FilterButton = ({setFilter, activeFilter}) => {
  return (
    <div className={style.boxButton}>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <button
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              style.buttonFilterLike,
              currentFilter === activeFilter && style.buttonFilterLikeActiv
            )}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </button>
        );
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps,{ setFilter })(FilterButton);
