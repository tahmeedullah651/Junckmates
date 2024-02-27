import React, { useRef, useState } from "react";
import Admin from "../../assets/images/admin.png";
const SettingWrapper = ({ children, profile }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  return (
    <div className="w-[75vw]">
      <div className="w-full mx-auto">
        <div className="text-white flex justify-center items-center w-full py-4 mx-auto">
          <div className="w-28 h-28">
            <img
              src={imageFileUrl || profile || Admin}
              alt=""
              className="w-full h-full rounded-full object-cover"
              onClick={() => filePickerRef.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={filePickerRef}
              hidden
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SettingWrapper;
