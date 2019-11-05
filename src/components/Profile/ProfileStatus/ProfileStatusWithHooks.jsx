import React, {useState, useEffect} from 'react';
import style from './ProfileStatus.module.css';
import statusImg from '../../../assets/img/icons/statusImg.svg';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };
  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value)
  };
   useEffect(() => {
     setStatus(props.status)
   }, [props.status])

  return (
    <div className={style.statusContainer}>
      <img src={statusImg} alt="status" className={style.statusImg}/>
      {!editMode &&
      <div>

        <span onDoubleClick={activateEditMode} className={style.status}>{props.status || 'status'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input autoFocus={true} onChange={onStatusChange} value={status}
               onBlur={deactivateEditMode} className={style.status}/>
      </div>
      }
    </div>

  )

}

export default ProfileStatusWithHooks;