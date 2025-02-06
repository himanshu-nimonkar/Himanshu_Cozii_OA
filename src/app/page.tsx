"use client";

import React, { useState, useEffect } from 'react';
import PersonalInfo from '@/components/PersonalInfo';
import TravelPreferences from '@/components/TravelPreferences';
import HealthSafety from '@/components/HealthSafety';

const MarsVisitForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: false,
    emergencyContact: '',
    medicalConditions: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track if form has been submitted
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  // Validate form on step change
  useEffect(() => {
    const isValid = validateForm();
    setIsFormValid(isValid);
  }, [step, formData]); // Trigger validation when step or formData changes

  const validateForm = () => {
    // Stage 1: Personal Information
    if (step === 1) {
      if (
        !formData.fullName ||
        !formData.dateOfBirth ||
        !formData.nationality ||
        !formData.email ||
        !formData.phone
      ) {
        return false;
      }
      // Email Validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(formData.email)) {
        return false;
      }
      // Phone Validation (10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        return false;
      }
    }

    // Stage 2: Travel Preferences
    if (step === 2) {
      if (!formData.departureDate || !formData.returnDate || !formData.accommodation) {
        return false;
      }
      // Check that departure and return dates are in the future
      const today = new Date();
      if (new Date(formData.departureDate) <= today || new Date(formData.returnDate) <= today) {
        return false;
      }
    }

    // Stage 3: Health and Safety
    if (step === 3) {
      if (!formData.healthDeclaration || !formData.emergencyContact) {
        return false;
      }
    }

    return true; // If all fields are valid, the form is valid
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormSubmitted) {
      // Display popup and reset form
      setShowPopup(true);
      setIsFormSubmitted(true);
      
      // Reset form data to initial state
      setFormData({
        fullName: '',
        dateOfBirth: '',
        nationality: '',
        email: '',
        phone: '',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: false,
        emergencyContact: '',
        medicalConditions: '',
      });

      // Redirect to the first step (Personal Info)
      setStep(1);

      // Hide the popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="p-8">
      {/* Centering the title and making it white */}
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Mars Visit Application</h1>

      <form onSubmit={handleSubmit}>
        {step === 1 && <PersonalInfo formData={formData} handleChange={handleChange} />}
        {step === 2 && <TravelPreferences formData={formData} handleChange={handleChange} />}
        {step === 3 && <HealthSafety formData={formData} handleChange={handleChange} />}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button type="button" className="px-4 py-2 bg-gray-500 text-white" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              className={`px-4 py-2 ${isFormValid ? 'bg-blue-500' : 'bg-gray-300 cursor-not-allowed'} text-white`}
              onClick={handleNext}
              disabled={!isFormValid}
            >
              Next
            </button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-500 text-white">
              Submit
            </button>
          )}
        </div>
      </form>

      {/* Popup notification */}
      {showPopup && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-10 p-4 bg-green-500 text-white rounded-lg shadow-lg">
          <p>Form Submitted Successfully!</p>
        </div>
      )}
    </div>
  );
};

export default MarsVisitForm;
