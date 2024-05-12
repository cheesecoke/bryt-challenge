import { useState } from "react";
import { ZodError } from "zod";
import AccountStep from "./AccountStep";
import AddressStep from "./AddressStep";
import PreferencesStep from "./PreferencesStep";
import ProgressBar from "./ProgressBar";
import {
  accountSchema,
  addressSchema,
  preferencesSchema,
} from "../api/register/formSchema";
import { useMultiStepForm } from "../hooks/useMultiStepForm";

const ENTER_FROM_LEFT = "-translate-x-full opacity-0";
const LEAVE_TO_RIGHT = "translate-x-full opacity-0";
const ENTER_FROM_RIGHT = "translate-x-full opacity-0";
const LEAVE_TO_LEFT = "-translate-x-full opacity-0";


export default function StepForm() {
  const [formData, setFormData] = useState({
    account: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    address: {
      address1: "",
      address2: "",
      country: "",
      city: "",
      zipCode: "",
      company: "",
      phoneNumber: "",
    },
    preferences: {
      wantsNotifications: "No",
      shareInformation: "No",
      notificationPreference: "Email",
    },
  });
  const [transitioning, setTransitioning] = useState(false);
  const [transitionClass, setTransitionClass] = useState(ENTER_FROM_LEFT);
  const headers = ["Account", "Address", "Preferences"];

  const handleTransitionUpdate = (updateFunc, direction) => {
    if (!transitioning || !isLastStep) {
      setTransitioning(true);
      setTransitionClass(direction === 'next' ? LEAVE_TO_LEFT : LEAVE_TO_RIGHT);
      setTimeout(() => {
        updateFunc();
        setTransitionClass(direction === 'next' ? ENTER_FROM_RIGHT : ENTER_FROM_LEFT);
        setTimeout(() => {
          setTransitioning(false);
        }, 300);
      }, 300);
    }
  };

  const updateFields = (section, fields) => {
    console.log("fields", fields);
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...fields,
      },
    }));
  };

  const steps = [
    <AccountStep
      key={1}
      data={formData.account}
      updateFields={(fields) => updateFields("account", fields)}
    />,
    <AddressStep
      key={2}
      data={formData.address}
      updateFields={(fields) => updateFields("address", fields)}
    />,
    <PreferencesStep
      key={3}
      data={formData.preferences}
      updateFields={(fields) => updateFields("preferences", fields)}
    />,
  ];

  const {
    currentStepIndex,
    step,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(steps, handleTransitionUpdate);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (currentStepIndex === 0) {
        accountSchema.parse(formData.account);
      } else if (currentStepIndex === 1) {
        console.log("formData.address", formData.address);
        addressSchema.parse(formData.address);
      } else {
        preferencesSchema.parse(formData.preferences);
      }

      setErrorMessage("");

      if (isLastStep) {
        const flattenFormData = (formData) => {
          return {
            ...formData.account,
            ...formData.address,
            ...formData.preferences,
          };
        };

        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(flattenFormData(formData)),
        });

        const result = await response.json();
        alert(result.data.message);
      } else {
        next();
      }
    } catch (error) {
      console.error("Caught error in handleSubmit", error);
      if (error instanceof ZodError) {
        setErrorMessage(error.errors[0].message);
      }
    }
  };

  return (
    <div className={`transform transition duration-300 ease-in-out ${transitioning ? transitionClass : 'translate-x-0 opacity-100'}`}>
      <h1 className="text-4xl font-bold mb-8">{headers[currentStepIndex]}</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-8 bg-white rounded-md shadow-md"
      >
        <ProgressBar currentStep={currentStepIndex} />
        {step}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div
          className={`flex mt-8 ${
            !isFirstStep ? "justify-between" : "justify-end"
          }`}
        >
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              disabled={isFirstStep || transitioning}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded transition duration-300 ease-in-out"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
          >
            {isLastStep ? "Register!" : "Next Step"}
          </button>
        </div>
      </form>
    </div>
  );
}
