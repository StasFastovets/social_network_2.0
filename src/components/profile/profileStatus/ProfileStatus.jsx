import s from './profileStatus.module.scss';
import React, { useEffect, useState } from 'react';
import Preloader from '../../other/preloader/preloader';


const ProfileStatus = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])


   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false)
      props.updataStatusOfUserTC(status)
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   if (props.isLoading) {
      return <Preloader/>
    }

   return (
      <div className={s.status}>
         {!editMode ?
            <div className={s.status_top}>
               <span onClick={activateEditMode}>{props.status || 'No status'}</span>
            </div> :
            <div className={s.status_buttom}>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
         }
      </div>
   )
}


export default ProfileStatus;

