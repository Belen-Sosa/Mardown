import { React, useState } from "react";
import Preview from "./Preview";

function Editor() {
  const datosDefault =
    "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n```\n // this is multi-line code:\nfunction anotherExample(firstLine, lastLine){ \n if (firstLine =='```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n ``` \n\n You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n \nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes! \n \nAnd if you want to get really crazy, even tables: \n\n | Wild Header | Crazy Header | Another Header?|\n| ------------ | ------------- | ------------- |\n|Your content can | be here, and it | can be here....|\n|And here. | Okay. | I think we get it.|\n\n- And of course there are lists. \n  - Some are bulleted. \n    - With different indentation levels.\n        - That look like this. \n \n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:  \n \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
  const [editor, setEditor] = useState(datosDefault);
  const [clickedEditor, setClickedEditor] = useState(false);
  const [clickedPreview, setClickedPreview] = useState(false);

  const changeStyleEditor = () => {
    clickedEditor ? setClickedEditor(false) : setClickedEditor(true);
  };

  const changeStylePreview = () => {
    clickedPreview ? setClickedPreview(false) : setClickedPreview(true);
  };

  return (
    <>
      <div
        id="editor"
        className={`index ${clickedPreview ? "contenedor-oculto" : ""} `}
      >
        <div id="head-editor">
      
          <h2>
            
            <i
              className="fa fa-free-code-camp"
              title="no-stack-dub-sack"
            ></i>
            Editor
          </h2>
          <button id="button-editor" onClick={changeStyleEditor}>
            <i className="fa fa-arrows-alt"></i>
          </button>
        </div>
        <div
          id="body-editor"
          className={`index ${clickedEditor ? "clicked-editor " : ""}`}
        >
       
          <textarea
            id="textarea-editor"
            onChange={(e) => setEditor(e.target.value)}
            value={editor}
          >
       
          </textarea>
        </div>
      </div>
      <div
        id="editor-preview"
        onClick={changeStylePreview}
        className={clickedEditor ? "contenedor-oculto" : ""}
      >
        <Preview datos={{ editor, clickedPreview, changeStylePreview }} />{" "}
      </div>
    </>
  );
}

export default Editor;
