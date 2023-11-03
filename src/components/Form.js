import React, { useState } from 'react';

const PostalCodeInput = ({ onFetchLocation, errorMessage }) => {
  const [postalCode, setPostalCode] = useState('');

  const handleInputChange = (event) => {
    const inputPostalCode = event.target.value;
    // Check if the input consists of 6 digits
    if (/^\d{0,6}$/.test(inputPostalCode)) {
      setPostalCode(inputPostalCode);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFetchLocation(postalCode);
  };

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <form className="flex lg:flex-row flex-col items-center p-4 w-full sm:w-96" onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 rounded-full px-3 py-2 mb-2 w-full sm:w-80"
          type="text"
          placeholder="Enter 6-digit Postal Code"
          value={postalCode}
          onChange={handleInputChange}
          maxLength={6} // Set the maximum length of the input to 6 characters
          pattern="\d{6}" // Specify the pattern for the input to only accept 6 digits
          title="Please enter a 6-digit postal code" // Provide a title for the input field
          required // Make the input field required
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full sm:w-auto mb-2" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-2 text-center w-full sm:w-96">{errorMessage}</p>}
    </div>
  );
};

export default PostalCodeInput;
