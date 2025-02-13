"use client";

import React, { useState, useEffect, Fragment, ReactNode } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import Contact from "./biosteps/Contact";
import Experience from "./biosteps/Experience";
import Payment from "./biosteps/Payment";
import Personal from "./biosteps/Personal";
import Qualifications from "./biosteps/Qualifications";
import Reference from "./biosteps/Reference";
import Uploadimg from "./biosteps/Uploadimg";

import Toast from "./genui/Toast";

const steps = [
  { number: 0, title: "Upload Image" },
  { number: 1, title: "BioData" },
  { number: 2, title: "Contact Details" },
  { number: 3, title: "Qualification" },
  { number: 4, title: "Experience" },
  { number: 5, title: "Reference" },
  { number: 6, title: "Payment" },
];

export type BiodataFormData = {
  id?: string;
  image: File | null;
  personalData: {
    surname: string;
    firstName: string;
    middleName: string;
    gender: string;
    dob: string;
    maritalStatus: string;
    state: string;
    nationality: string;
    lga: string;
  };
  contactDetails: {
    contactAddress: string;
    contactCountry: string;
    contactState: string;
    contactCity: string;
    email: string;
    mobileNumber: string;
    residentialAddress?: string;
    residentialCountry?: string;
    residentialState?: string;
    residentialLga?: string;
    residentialTelephone?: string;
    officeAddress?: string;
    officeCountry?: string;
    officeState?: string;
    officeCity?: string;
    officeLga?: string;
    officeTelephone?: string;
  };
  education?: {
    insitution?: string;
    discipline?: string;
    qualification?: string;
    graduation?: string;
    professionalQualification?: {
      firstQualName?: string;
      firstQualDate?: string;
      secQualName?: string;
      secQualDate?: string;
    }[];
  };
  experience?: {
    currentJob?: string;
    companyName?: string;
    department?: string;
    currentPosition?: string;
    startDate?: string;
  };
  reference: {
    refereeName: string;
    refereeIcanNo: string;
    refereePhone: string;
    refereeEmail: string;
  };
  payment?: {
    receipt?: File | null;
    waiver?: string ;
  };
};

function Biodata() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const [formData, setFormData] = useState<BiodataFormData>({
    image: null,
    personalData: {
      surname: "",
      firstName: "",
      middleName: "",
      gender: "",
      dob: "",
      maritalStatus: "",
      state: "",
      nationality: "",
      lga: "",
    },
    contactDetails: {
      contactAddress: "",
      contactCountry: "",
      contactState: "",
      contactCity: "",
      email: "",
      mobileNumber: "",
    },
    reference: {
      refereeName: "",
      refereeIcanNo: "",
      refereePhone: "",
      refereeEmail: "",
    },
  });

  const getFormProgress = (): Partial<BiodataFormData> | null => {
    try {
      const saved = localStorage.getItem("biodataFormProgress");
      if (saved) {
        const { data, lastUpdated } = JSON.parse(saved);
        if (
          new Date().getTime() - new Date(lastUpdated).getTime() >
          1 * 60 * 60 * 1000
        ) {
          localStorage.removeItem("biodataFormProgress");
          return null;
        }
        return data;
      }
    } catch (error) {
      console.error("Error getting form progress:", error);
    }
    return null;
  };

  const saveFormProgress = (data: Partial<BiodataFormData>) => {
    try {
      localStorage.setItem(
        "biodataFormProgress",
        JSON.stringify({
          data,
          lastUpdated: new Date().toISOString(),
        })
      );
    } catch (error) {
      console.error("Error saving form progress:", error);
    }
  };

  const updateFormData = (data: Partial<BiodataFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const isStepOptional = (step: number) => {
    return step === 10;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  // Load saved progress on mount
  useEffect(() => {
    const savedData = getFormProgress();
    if (savedData) {
      const savedImageMeta = localStorage.getItem("biodataFormImageMeta");
      if (savedImageMeta) {
        try {
          <Toast
            type="info"
            message="Please re-upload your image for security reasons"
          />;
        } catch (error) {
          console.error("Error parsing saved image metadata:", error);
        }
      }

      setFormData((prevData) => ({
        ...prevData,
        ...savedData,
      }));
    }
  }, []);

  // Save progress on updates
  useEffect(() => {
    const dataToSave = {
      ...formData,
      image: null,
    };
    saveFormProgress(dataToSave);
  }, [formData]);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className="flex flex-col w-auto  lg:w-[850px] items-center rounded-2xl  bg-white  p-8 m-2 gap-6  ">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((step, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: ReactNode } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={step.number} {...stepProps}>
                <StepLabel {...labelProps}></StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              {activeStep === steps.length && (
                // end page
                <Fragment>
                  <Typography
                    className="max-w-96 text-center text-black text-sm font-normal font-sans mx-auto "
                    sx={{ mt: 2, mb: 1 }}
                  >
                    Thank you for registering with us! Your account is being
                    reviewed. We will send an email to you once review is
                    complete. Please keep an eye on your email.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      pt: 2,
                    }}
                  >
                    {/* <Box sx={{ flex: "1 1 auto" }} /> */}
                    <Link href="/">
                      <Button
                        className="py-3 px-4 bg-primary text-sm text-white font-semibold rounded font-sans "
                        onClick={handleReset}
                      >
                        Back to website
                      </Button>
                    </Link>
                  </Box>
                </Fragment>
              )}{" "}
              <form className="mt-6" action="">
                <Uploadimg
                  isShown={activeStep === 0}
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Personal
                  isShown={activeStep === 1}
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Contact
                  isShown={activeStep === 2}
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Qualifications
                  isShown={activeStep === 3}
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Experience
                  isShown={activeStep === 4}
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Reference
                  isShown={activeStep === 5}
                  formData={formData}
                  updateFormData={updateFormData}
                />
                <Payment
                  isShown={activeStep === 6}
                  formData={formData}
                  updateFormData={updateFormData}
                />
              </form>
            </motion.div>
          </AnimatePresence>
        </div>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              mr: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            hidden={activeStep === 0}
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button
            className="bg-primary p-2 rounded-full text-base text-white w-fit"
            onClick={handleNext}
            disabled={activeStep === 7}
            hidden={activeStep === 7}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Continue"}
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Biodata;
