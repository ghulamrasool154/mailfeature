import React from "react";

const PopUpAttach = (props) => {
  const { pdfimage, fileName, size, downloadicon } = props;
  return (
    <>
      <div className="d-flex">
        <div className="download_file">
          <a href="#" download>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img src={pdfimage} alt="pdf icon" />
                <div className="filename_size">
                  <h5>{fileName}</h5>
                  <p>{size}</p>
                </div>
              </div>
              <img src={downloadicon} alt="download " />
            </div>
          </a>
        </div>
        <div className="download_file2">
          <a href="#" download>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img src={pdfimage} alt="pdf icon" />
                <div className="filename_size">
                  <h5>{fileName}</h5>
                  <p className="mb-0">{size}</p>
                </div>
              </div>
              <img src={downloadicon} alt="download " />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default PopUpAttach;
