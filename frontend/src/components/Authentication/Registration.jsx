import React, { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import SignaturePad from 'signature_pad'

const Registration = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const [phoneValue, setPhoneInputValue] = useState('')
    const [inputClass, setInputClass] = useState('')
    const [emailValue, setEmailValue] = useState("");
    const [emailClass, setEmailClass] = useState("");
    const [ isChecked, setIsChecked] = useState(false)
    const canvasRef  = useRef(null);
    const signaturePadRef = useRef(null);

    // SignatureCanvas Functionality
    useEffect(() => {
        const canvas = canvasRef.current;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;

        const signaturePad = new SignaturePad(canvas, {
            backgroundColor: 'rgb(250, 250, 250)'
        });

        signaturePadRef.current = signaturePad;

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        }
    }, []);

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        const context = canvas.getContext('2d');
        context.scale(ratio, ratio);
        context.font = 'italic 20px Arial';
        context.fillText('Sign Here', 20, canvas.height / 2)
    };

    const clearSignature = (e) => {
        e.preventDefault();
        const signaturePad = signaturePadRef.current;
        if (signaturePad) {
            signaturePad.clear()
        }
    }

    // Check if input is empty and turn the required star to red else green
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      // Check if the input value's length is less than 8 characters and update the star to appropriate color
      if (value.trim().length < 8) {
        setInputClass("text-red-600");
      } else {
        setInputClass("text-green-600");
      }
    }
    // Check if input is empty and turn the required star to red else green
    const handlePhoneInputChange = (e) => {
      const value = e.target.value;
      setPhoneInputValue(value);
      // Check if the input value's length is less than 8 characters and update the star to appropriate color
      if (value.trim() === 10) {
        setInputClass("text-red-600");
      } else {
        setInputClass("text-green-600");
      }
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmailValue(value);
        // An array of email domains
        const recognizedDomains = [
            'yahoo.com',
            'gmail.com',
            'outlook.com',
        ];
        // Check if the input value includes the recognized domains
        const hasRecognizedDomain = recognizedDomains.some((domain) => value.includes(domain));
        setEmailClass(hasRecognizedDomain ? "text-green-600" : "text-red-600");
    }

    // For disabling the submit button if the user has not checked the form
    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

  return (
    <React.Fragment>
      <section className="w-full isolate relative font-Poppins bg-slate-100">
        <div className="mx-auto max-w-[1560px] px-6 py-6">
          {/* Go back redirect */}
          <div className="group flex items-center ">
            <span className="group-hover:flex transition-transform duration-500 ease-in-out">
              <BiArrowBack />
            </span>
            <h2
              onClick={() => navigate(-1)}
              className="cursor-pointer text-xs font-semibold p-1 px-2  rounded-md transition-all duration-500 ease-in-out"
            >
              {" "}
              Go back
            </h2>
          </div>

          <div className="mx-auto max-w-6xl shadow-lg mt-4 rounded-lg border-t bg-gray-50 p-16">
            <div>
              <h1 className="font-bold text-4xl tracking-tight text-gray-800">
                Customer Credit Application
              </h1>
              <p className="font-semibold text-sm ml-1 text-gray-600 leading-7">
                To register for customer credit account.
              </p>
            </div>

            <form action="" className="mt-24">
              {/* Names */}
              <>
                <h3 className="font-semibold tracking-wider">Name</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      name="firstname"
                      id="first_name"
                      className="border p-2.5 rounded-lg"
                      required
                    />
                    <label htmlFor="firstname" className="text-sm ml-1 ">
                      First Name
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="lastname"
                      id="last_name"
                      className="border p-2.5 rounded-lg"
                      required
                    />
                    <label htmlFor="lastname" className="text-sm ml-1 ">
                      Last Name
                    </label>
                  </div>
                </div>
              </>

              {/* Address */}
              <div className="mt-8">
                <h3 className="font-semibold tracking-wider">Address</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-2">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      className="border p-2.5 rounded-lg"
                    />
                    <label htmlFor="firstname" className="text-sm ml-1 ">
                      Current Location
                    </label>
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="postal"
                      id="postal-address"
                      className="border p-2.5 rounded-lg"
                    />
                    <label htmlFor="lastname" className="text-sm ml-1 ">
                      P.O Box
                    </label>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex mt-8 items-center flex-col sm:flex-row ">
                <label
                  htmlFor=""
                  className="w-full sm:text-xl font-semibold text-gray-600"
                >
                  Email Address <span className={`${emailClass}`}>*</span>
                </label>
                <div className="w-full">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    name="email"
                    id="email_address"
                    className="w-full border p-2.5 rounded-lg"
                  />
                  <small>
                    <sub className="text-lg">*</sub> Should contain either of
                    'yahoo.com', 'gmail.com', 'outlook.com'.
                  </small>
                </div>
              </div>

              {/* ID Number */}
              <div className="flex mt-8 items-center flex-col sm:flex-row">
                <label
                  htmlFor=""
                  className="w-full sm:text-xl font-semibold text-gray-600"
                >
                  ID Number <span className={`${inputClass}`}>*</span>
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  name="id_no"
                  id="id_no"
                  className="w-full border p-2.5 rounded-lg"
                />
              </div>

              {/* Phone Number */}
              <div className="flex mt-8 items-center flex-col sm:flex-row ">
                <label
                  htmlFor=""
                  className="w-full sm:text-xl font-semibold text-gray-600"
                >
                  Phone Number <span className={`${inputClass}`}>*</span>
                </label>
                <input
                  type="tel"
                  value={phoneValue}
                  onChange={handlePhoneInputChange}
                  name="phoneNumber"
                  id="phone_number"
                  className="w-full border p-2.5 rounded-lg"
                />
              </div>

              {/* Signature */}
              <div className="flex mt-8 items-center flex-col sm:flex-row ">
                <label
                  htmlFor=""
                  className="w-full sm:text-xl font-semibold text-gray-600"
                >
                  Signature <span className={`${inputClass}`}>*</span>
                </label>
                <div className="w-full flex flex-col">
                  <canvas
                    ref={canvasRef}
                    className="border w-full rounded-lg cursor-crosshair bg-white"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={clearSignature}
                      className="rounded px-3 py-1 border bg-yellow-950 bg-opacity-60"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>

              {/* Credit Terms and Conditions */}
              <div className='flex gap-4 mt-8'>
                <input type="checkbox" name="terms" id="terms" checked={isChecked}
                onChange={handleCheckboxChange}
                />
                <p>
                  I agree to the terms and conditions on the{" "}
                  <a href="credit-policy" className='text-blue-600'>Credit Agreement Policy</a>{" "}
                  provided by Family Selection SuperMarket.
                </p>
              </div>

              {/* Add Customer Button */}
              <div className="flex justify-end mt-14">
                <button disabled={!isChecked} className={`py-2 border px-4 rounded absolute flex shadow bg-yellow-950 bg-opacity-70 hover:bg-opacity-80 text-gray-50 ${isChecked ? '' : 'cursor-not-allowed'}`}>
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Registration
