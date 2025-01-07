"use client";
import React from "react";
import { BiodataFormData } from "../Biodata";

interface PaymentProps {
  formData: BiodataFormData;
  updateFormData: (data: Partial<BiodataFormData>) => void;
}

function Payment({ formData, updateFormData }: PaymentProps) {
  return <div>Payment</div>;
}

export default Payment;
