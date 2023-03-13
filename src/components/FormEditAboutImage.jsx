import React, { useEffect } from "react";
import { useState } from "react";

const FormEditAboutImage = ({
  handleAboutEditClose,
  submitAboutEdit,
  editAboutVisibility,
  value2,
}) => {
  const [url, setUrl] = useState(value2.url);
  const [nextImg, setNextImg] = useState("https://dummyimage.com/300");
  const [previewed, setPreviewed] = useState(false);
  const [updateImage, setUpdateImage] = useState("");

  useEffect(() => {
    setUrl(value2.url);
  }, [value2.id]);

  function preview() {
    setUpdateImage(url);
    setPreviewed(true);
  }

  function close() {
    handleAboutEditClose();
    setUpdateImage("");
    setUrl(value2.url);
    setPreviewed(false);
  }

  function submit() {
    submitAboutEdit({
      url,
      id: value2.id,
    });
  }

  if (!editAboutVisibility) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="flex justify-center border-4 p-8 rounded-lg bg-slate-100 border-slate-400">
        <div>
          <div className="flex gap-2">
            <div className="h-80 w-80">
              <p>Prev</p>
              <img src={value2.url} alt="" className="h-80 w-80" />
            </div>
            <div className="h-80 w-80">
              <p>Next</p>
              <img
                src={updateImage ? updateImage : nextImg}
                alt=""
                className="h-80 w-80"
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

export default FormEditAboutImage;
