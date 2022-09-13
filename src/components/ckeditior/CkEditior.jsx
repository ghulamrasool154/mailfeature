import React from "react";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from "ckeditor4-react";

const CkEditior = () => {
  return (
    <>
      <div id="editor" className="editing">
        {/* <CKEditor
                    editor={ ClassicEditor }
                    data="Type Something"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
        <CKEditor
          initData="<p>Type Something</p>"
          onInstanceReady={() => {
            console.log("working");
          }}
        />
      </div>
    </>
  );
};

export default CkEditior;
