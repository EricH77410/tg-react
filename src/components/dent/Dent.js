import React from 'react';
import { get_img_dent } from '../../db/db';
import './Dent.css';

const Dent = (props) => {
    let imgPath = get_img_dent(props.num,props.face)
    return (
        <img src={imgPath} alt={props.num} onClick={props.clicked} className={`${props.face}${props.num}`}/>
    )
}

export default Dent;