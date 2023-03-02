import s from './Profile.module.scss'
// import Preloader from './../../common/preloader/preloader';
// import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ava from './../../img/ava.jpg'
import ProfileStatus from './profileStatus/ProfileStatus'

const Profile = ({ profile, ...props }) => {
   // if (profile == null || profile == undefined) {
   //    return <Preloader />
   // }
   return (
      <div className={s.content}>
         <div className={s.status}>
            <ProfileStatus {...props} />
         </div>
         <div className={s.info}>
            <img className={s.info_img} src={profile.photos.large ? profile.photos.large : ava} alt="#"></img>
            <div className={s.info_text}>
               <div className={s.info_fullName}>{profile.fullName}</div>
               <div className={s.info_aboutMe}>{profile.aboutMe}</div>
               <div className={s.info_job}>Ищу ли я работу:
                  {profile.lookingForAJob == true ? <span>Да</span> : <span>Нет</span>}
               </div>
               <div className={s.info_jobDescription}>{profile.lookingForAJobDescription}</div>
            </div>
         </div>
      </div>
   )
}

export default Profile;