import React from 'react';

interface FormData {
  healthDeclaration: boolean;
  emergencyContact: string;
  medicalConditions: string;
}

interface HealthSafetyProps {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const HealthSafety: React.FC<HealthSafetyProps> = ({ formData, handleChange }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#d1e6f3]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-[#171717] mb-8">Stage 3: Health and Safety</h2>

        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Health Declaration *</span>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="healthDeclaration"
              checked={formData.healthDeclaration}
              onChange={(e) => handleChange({
                ...e,
                target: {
                  ...e.target,
                  name: 'healthDeclaration',
                  value: e.target.checked.toString()
                }
              })}
              className="border-2 border-[#ddd] p-3 rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <span className="ml-2 text-[#333333]">I declare that I have no medical conditions that would affect my participation in this trip.</span>
          </div>
        </label>

        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Emergency Contact Information *</span>
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Emergency Contact Name and Phone Number"
          />
        </label>

        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Medical Conditions (if any)</span>
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Any specific medical conditions you want us to be aware of"
          />
        </label>
      </div>
    </div>
  );
};

export default HealthSafety;
