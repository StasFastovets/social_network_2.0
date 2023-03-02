import loadBar from './../../../img/loading.svg'
import React from 'react';
import s from './preloader.scss'



const Preloader = () => {
   return  <img className={s.preload} src={loadBar} />
}
export default Preloader;