import React from "react";

function Editor(props) {
  return (
    <div className="editor-wrap">
      <h3>Editor</h3>
      <textarea
        onChange={props.handleChange}
        id="editor"
        placeholder="Type here..."
        value={props.text}
      />
    </div>
  );
}

export default Editor;
