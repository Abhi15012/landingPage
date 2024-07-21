'use client'



const PhoneValidation = () => {
  const [phonenum, setPhonenum] = useState('');
  const [validnum, setValidnum] = useState(true);

  const handleChange = (value) => {
    setPhonenum(value);
    setValidnum(validatePhn(value));
  };

  const validatePhn = (value) => {
    const numval = /^\d{10}$/;
    return numval.test(value);
  };

  return (
    <div>
    
      {!validnum && <p>Please enter a valid phone number</p>}
    </div>
  );
};

export default PhoneValidation;
