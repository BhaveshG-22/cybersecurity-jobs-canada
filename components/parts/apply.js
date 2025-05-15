// This example uses `@web3forms/react` plugin and tailwindcss for css styling

import Button from "@components/ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { WEB3FORMS_ACCESS_KEY } from "@lib/const";

export default function ApplyForm() {
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
    const formData = new FormData();
    // Append our file
    console.log(data.resume[0]);
    const maxAllowedSize = 1 * 1024 * 1024; // 1 MB
    if (data?.resume[0].size > maxAllowedSize) {
      alert("Maximum allowed file-size is less than 1 MB.");
      return;
    }

    formData.append("resume", data.resume[0]);
    // Add Access Key to send emails
    // Get it from web3forms.com
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    // Feed all of our data except resume
    for (const key in data) {
      if (key === "resume") {
        break;
      }
      formData.append(key, data[key]);
    }
    // Sending request to Web3Forms
    // Docs: docs.web3forms.com
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    // handling results
    if (res.success) {
      console.log("Success", res);
      setIsSuccess(res.success);
    } else {
      console.log("Error", res);
      setIsSuccess(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
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
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
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
          <div>
            <label htmlFor="email_address" className="text-base mb-2 block">
              Address
            </label>
            <input
              type="text"
              placeholder="Full Address"
              autoComplete="false"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50  rounded-md outline-none     focus:ring-4  ${
                errors.address
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
              }`}
              {...register("address", {
                required: "Full Address is required",
              })}
            />
            {errors.address && (
              <div className="mt-1 text-red-600">
                <small>{errors.address.message}</small>
              </div>
            )}
          </div>
          <div>
            <label className="text-base mb-2 block">Country</label>
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute text-gray-400 right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
              <select
                defaultValue=""
                className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50 after:bg-[url('/img/hero-pattern.svg')]  rounded-md outline-none appearance-none    focus:ring-4  ${
                  errors.address
                    ? "border-red-600 focus:border-red-600 ring-red-100 "
                    : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
                }`}
                {...register("country", {
                  required: "Country is required",
                })}>
                <option value="" disabled>
                  Choose Country
                </option>

                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
            </div>

            {errors.country && (
              <div className="mt-1 text-red-600">
                <small>{errors.country.message}</small>
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email_address" className="text-base mb-2 block">
              Cover Letter
            </label>
            <textarea
              placeholder="Cover Letter"
              className={`w-full px-4 py-3 border-2 placeholder:text-offgreen-dark/50      rounded-md outline-none  h-36 focus:ring-4  ${
                errors.cover
                  ? "border-red-600 focus:border-red-600 ring-red-100 "
                  : "border-offgreen-medium focus:border-offgreen-dark ring-gray-100   "
              }`}
              {...register("cover", {
                required: "Enter your Cover Letter",
              })}
            />
            {errors.cover && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.cover.message}</small>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mt-5">
          <div>
            <span className="text-sm sr-only font-bold">Attach Resume</span>
            <input
              type="file"
              className="w-full mt-1"
              placeholder="Upload Resume"
              {...register("resume", {
                required: "Please upload your resume (pdf/docs, < 1MB)",
              })}
              accept="application/pdf,.doc,.docx"
            />
            {errors.resume && (
              <div className="mt-1 text-red-600">
                <small>{errors.resume.message}</small>
              </div>
            )}
          </div>

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
              "Apply Job"
            )}
          </Button>
        </div>
      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          "Your application has been received. Thank you.
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          "Something went wrong. Please try later.
        </div>
      )}
    </>
  );
}
