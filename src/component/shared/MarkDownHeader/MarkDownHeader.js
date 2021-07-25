import React from 'react';
import classes from './MarkDownHeader.module.css';
const MarkDownHeader = (props) =>{
    return(<div className={classes.markdown__header}>
        <div className={classes.icon}>
            {props.space === 'Editor' && <i className="fas fa-edit"></i>}
            {props.space === 'Preview' && <i className="fas fa-eye"></i>}
        </div>
        <div className={classes.text}>{props.title}</div>
    </div>)
}
export default MarkDownHeader