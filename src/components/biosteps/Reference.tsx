"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface ReferenceProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Reference({ formData, updateFormData }: ReferenceProps) {
  return <div>Reference</div>;
}

export default Reference;
