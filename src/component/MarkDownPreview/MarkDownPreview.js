import React from 'react';
import classes from './MarkDownPreview.module.css'
import MarkDownHeader from '../shared/MarkDownHeader/MarkDownHeader';
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/github-dark.css';
const MarkDownPreview = (props) =>{
    marked.setOptions({

        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code) {
                return hljs.highlightAuto(code).value;
        }

      });
    const createMarkup = () =>{
        return {__html:marked(props.content)};
    }
    return(<div className={classes.markdown__preview}>
         <MarkDownHeader title ="Preview" space = "Preview"/>
        <div className={classes.markdown__preview_area} dangerouslySetInnerHTML={createMarkup()} >
        </div>
    </div>)
}
export default MarkDownPreview;