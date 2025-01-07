"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BiodataFormData } from "../Biodata";

interface UploadimgProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Uploadimg({ formData, updateFormData }: UploadimgProps) {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (formData.image) {
      const previewUrl = URL.createObjectURL(formData.image);
      setImagePreview(previewUrl);

      return () => {
        if (previewUrl) {
          URL.revokeObjectURL(previewUrl);
        }
      };
    }
  }, [formData.image]);

  const handleImageChange = (file: File) => {
    if (!file.type.startsWith("image/")) {
      //setToast({ type: "error", message: "Please upload an image file" });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      //setToast({ type: "error", message: "Image must be less than 5MB" });
      return;
    }

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    updateFormData({ image: file });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImageChange(file);
  };

  const validateForm = () => {
    if (!formData.image) {
      // setToast({ type: 'error', message: 'Please upload an image' });
      return false;
    }
  };
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
