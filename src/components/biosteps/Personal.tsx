"use client"

import React from "react";
import { BiodataFormData } from "../Biodata";

interface PersonalProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Personal({ formData, updateFormData }: PersonalProps) {
  return <div>Personal</div>;
}

export default Personal;
