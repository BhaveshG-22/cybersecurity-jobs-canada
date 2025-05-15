// This example uses `@web3forms/react` plugin and tailwindcss for css styling

import Button from "@components/ui/button";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { WEB3FORMS_ACCESS_KEY } from "@lib/const";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Sending request to Web3Forms
    // Docs: docs.web3forms.com
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    // handling results
    if (res.success) {
      console.log("Success", res);
      reset();
      setIsSuccess(res.success);
    } else {
      console.log("Error", res);
      setIsSuccess(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <input
          type="hidden"
          value={WEB3FORMS_ACCESS_KEY}
          {...register("access_key")}
        />
        <input
          type="hidden"
          value="New Submission from Jobhire Contact Form"
          {...register("subject")}
        />
        <div className="grid  md:grid-cols-2 gap-6">
          <div>
            <label className="text-base mb-2 block">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50  rounded-md outline-none     focus:ring-4  ${
                errors.first_name
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
              }`}
              {...register("first_name", {
                required: "First name is required",
                maxLength: 80,
              })}
            />
            {errors.first_name && (
              <div className="mt-1 text-red-600">
                <small>{errors.first_name.message}</small>
              </div>
            )}
          </div>
          <div>
            <label className="text-base mb-2 block">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50  rounded-md outline-none     focus:ring-4  ${
                errors.last_name
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
              }`}
              {...register("last_name", {
                required: "Last name is required",
                maxLength: 80,
              })}
            />
            {errors.last_name && (
              <div className="mt-1 text-red-600">
                <small>{errors.last_name.message}</small>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="email_address" className="text-base mb-2 block">
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              placeholder="you@company.com"
              name="email"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50 rounded-md outline-none     focus:ring-4  ${
                errors.email
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100"
              }`}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="text-base mb-2 block">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Phone Number"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50  rounded-md outline-none     focus:ring-4  ${
                errors.phone
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
              }`}
              {...register("phone", {
                required: "Enter your phone number",
                pattern: {
                  value:
                    /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|66543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/i,
                  message: "Enter a valid phone number with + code",
                },
              })}
            />
            {errors.phone && (
              <div className="mt-1 text-red-600">
                <small>{errors.phone.message}</small>
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email_address" className="text-base mb-2 block">
              What would you like us to know about you?{" "}
            </label>
            <textarea
              placeholder="Your Message"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50      rounded-md outline-none  h-36 focus:ring-4  ${
                errors.message
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
              }`}
              {...register("message", {
                required: "Please enter your message",
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.message.message}</small>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-5">
          <Button type="submit">
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white  animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </Button>
        </div>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm  text-green-500">
          Your message has been received. Thank you.
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm  text-red-500">
          Something went wrong. Please try later.
        </div>
      )}
    </>
  );
}
