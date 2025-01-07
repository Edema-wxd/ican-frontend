"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface ContactProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Contact({ formData, updateFormData }: ContactProps) {
  return <div>Contact</div>;
}

export default Contact;
