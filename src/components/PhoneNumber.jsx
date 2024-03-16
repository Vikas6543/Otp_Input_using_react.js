import { useState } from 'react';
import OtpInput from './OtpInput';

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validations
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert('Invalid Phone Number');
      return;
    }

    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  };

  return (
    <div className='otp-wrapper'>
      {!showOtpInput && <p className='heading'>Enter Your Mobile Number</p>}

      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type='text'
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder='Enter Phone Number'
            className='phone-number-input'
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div>
          <p className='enter-otp'>Enter OTP sent to {phoneNumber}</p>
          <OtpInput />
        </div>
      )}
    </div>
  );
};

export default PhoneNumber;
