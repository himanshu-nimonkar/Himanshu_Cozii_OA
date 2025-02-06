import React from 'react';

const TravelPreferences = ({ formData, handleChange }: any) => {
  // This function will be used to update the available return dates after departure date is selected
  const handleDepartureDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDepartureDate = e.target.value;
    handleChange({ target: { name: 'departureDate', value: selectedDepartureDate } });
  };

  // This function will be used to update the available departure dates before the return date is selected
  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedReturnDate = e.target.value;
    handleChange({ target: { name: 'returnDate', value: selectedReturnDate } });
  };

  // Get today's date and format it as YYYY-MM-DD for validation
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#f0f4f8] to-[#d1e6f3]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center text-[#171717] mb-8">Stage 2: Travel Preferences</h2>

        {/* Departure Date */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Departure Date *</span>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleDepartureDateChange}
            min={today} // Departure date can't be in the past
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        {/* Return Date */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Return Date *</span>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleReturnDateChange}
            min={formData.departureDate} // Return date must be after departure date
            max="9999-12-31"
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        {/* Accommodation Preference */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Accommodation Preference *</span>
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Choose Accommodation">Choose Accommodation</option>
            <option value="Space Hotel">Space Hotel</option>
            <option value="Martian Base">Martian Base</option>
          </select>
        </label>

        {/* Special Requests */}
        <label className="block mb-4">
          <span className="text-lg font-medium text-[#333333]">Special Requests or Preferences</span>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="border-2 border-[#ddd] p-3 w-full rounded-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>
      </div>
    </div>
  );
};

export default TravelPreferences;
