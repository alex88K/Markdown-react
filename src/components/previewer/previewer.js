import React from "react";
import Markdown from "markdown";

function Previewer(props) {
  return (
    <div className="preview-wrap">
      <h3>Previewer</h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: Markdown.markdown.toHTML(props.textPreview)
        }}
      />
    </div>
  );
}

export default Previewer;
