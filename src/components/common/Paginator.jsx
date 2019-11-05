import React, {useState} from 'react';
import style from './Paginator.module.css'


const Paginator = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }
  let portion = Math.ceil(pagesCount / props.portionSize);

  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber -1 ) * portion +1;

  let rightPortionNumber = portionNumber * portion;



  return (
    <div className={style.paginator}>
      {portionNumber > 1 &&
      <button onClick={()=> {setPortionNumber(portionNumber - 1)}}>Previous</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
        .map(p => {
        return <span className={props.currentPage === p?  style.selectedPage : style.page}  key={p} onClick={() => {
          props.onPageChanged(p)
        }}> {p}</span>
      })}
      {portion > portionNumber &&
      <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
  )
}
export default Paginator;