import React, { useEffect } from "react";
import { useState } from "react";

const FormAddAboutimage = ({ handleAddAboutClose, submitAddAbout, addAboutVisibility }) => {
  const [url, setUrl] = useState("");
  const [nextImg, setNextImg] = useState("https://dummyimage.com/300");
  const [previewed, setPreviewed] = useState(false);
  const [updateImage, setUpdateImage] = useState("");

  function preview() {
    setUpdateImage(url);
    setPreviewed(true);
  }

  function close() {
    handleAddAboutClose();
    setUpdateImage("");
    setUrl("");
    setPreviewed(false);
  }

  function submit() {
    submitAddAbout(url);
    setUpdateImage("");
    setUrl("");
  }

  if (!addAboutVisibility) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="flex justify-center border-4 p-8 rounded-lg bg-slate-100 border-slate-400">
        <div>
          <div className="flex justify-center">
            <div className="h-80 w-80">
              <p>Preview</p>
              <img
                src={updateImage ? updateImage : nextImg}
                alt=""
                className="h-80 w-80 mt-3"
              />
            </div>
          </div>
          <div className="text-center mt-10">URL</div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-[40rem] px-2 py-2 border-2 my-1"
          />
          <div className="flex justify-center">
            <button
              onClick={() => close()}
              className="border-2 py-2 px-3 rounded-full mt-4 mx-1 bg-red-500"
            >
              Close
            </button>
            <button
              className="border-2 py-2 px-3 rounded-full mt-4 mx-1"
              onClick={previewed ? () => submit() : () => preview()}
            >
              {previewed ? "Submit" : "Preview"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddAboutimage;
