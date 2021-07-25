import React from 'react';
import classes from './MarkDownEditor.module.css';
import MarkDownHeader from '../shared/MarkDownHeader/MarkDownHeader'
const MarkDownEditor = (props) =>{
 const changeHandler = (event) =>{
   props.onContent(event.target.value);
 }
    return(<div className={classes.markdown__editor}>
        <MarkDownHeader title ="Editor" space = "Editor"/>
         <textarea className={classes.editable_area} onChange = {changeHandler} defaultValue={props.content}>
        </textarea>
    </div>)
}
export default MarkDownEditor;