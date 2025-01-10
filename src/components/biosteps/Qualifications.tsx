"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface QualificationsProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Qualifications({ formData, updateFormData }: QualificationsProps) {
  return <div>Qualifications</div>;
}

export default Qualifications;
