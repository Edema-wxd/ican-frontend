"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface ExperienceProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Experience({ formData, updateFormData }: ExperienceProps) {
  return <div>Experience</div>;
}

export default Experience;
