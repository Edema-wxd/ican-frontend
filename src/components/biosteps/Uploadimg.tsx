import React, { useState } from "react";
import Image from "next/image";

function Uploadimg() {
  const [selectedImage, setSelectedImage] = useState(null);

  //   const handleImageChange = (e) => {
  //     if (e.target.files && e.target.files[0]) {
  //       //   setSelectedImage(URL.createObjectURL(e.target.files[0]));
  //     }
  //  };
  return (
    <div>
      <h3>UPLOAD IMAGE</h3>
      <div>
        <Image
          width={100}
          height={100}
          src="/avatar.png"
          alt="Upload your Image"
        />
        <button className="bg-primary text-white font-medium text-sm">
          Upload photo
        </button>
      </div>
    </div>
  );
}

export default Uploadimg;
