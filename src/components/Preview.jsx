import React from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from 'remark-gfm';
function Preview(props){

   
  


   return (
    <div id="preview"  className={`index   ${props.datos.clickedPreview ? 'clicked-editor-preview' : ''}`}>
         <div id="head-preview"> <h2><i className="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Preview</h2> <button><i className="fa fa-arrows-alt"></i></button></div>
      
        <div id="body-preview"><ReactMarkDown id="ReactMarkDown" remarkPlugins={[remarkGfm]} children={props.datos.editor}></ReactMarkDown></div> 

      </div>
   )
}

export default Preview;