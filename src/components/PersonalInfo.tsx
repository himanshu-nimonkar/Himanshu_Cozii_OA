import React from 'react';

const PersonalInfo = ({ formData, handleChange }: any) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#d1e6f3]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-[#171717] mb-8">Stage 1: Personal Information</h2>

        {/* Full Name */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Full Name *</span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            pattern="[A-Za-z\s]+"
            title="Only alphabetic characters are allowed"
            placeholder="Enter your full name"
          />
        </label>

        {/* Date of Birth */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Date of Birth *</span>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            max={new Date().toISOString().split("T")[0]} // No future date
          />
        </label>

        {/* Nationality */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Nationality *</span>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            {/* Add other countries here */}
          </select>
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Email *</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Enter a valid email in the format example@domain.com"
            placeholder="example@domain.com"
          />
        </label>

        {/* Phone Number */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Phone Number *</span>
          <div className="flex">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border-2 border-[#ddd] p-3 w-1/4 rounded-l-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="+1">+1 (USA)</option>
              <option value="+91">+91 (India)</option>
              {/* Add other country codes here */}
            </select>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-2 border-[#ddd] p-3 w-3/4 rounded-r-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              pattern="^[0-9]{10}$"
              title="Phone number should be 10 digits (e.g. 1234567890)"
              placeholder="1234567890"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default PersonalInfo;
