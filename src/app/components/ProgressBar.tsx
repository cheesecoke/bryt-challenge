import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as farCircle } from "@fortawesome/free-regular-svg-icons"; // Importing regular circle

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  { id: 1, label: "Account" },
  { id: 2, label: "Address" },
  { id: 3, label: "Preferences" },
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center relative">
          <span className="absolute left-3 text-sm font-bold">
            {index + 1}
          </span>
          <FontAwesomeIcon
            icon={farCircle} // Using the regular (outlined) icon
            className={`w-8 h-8 ${
              currentStep === index ? "text-yellow-500" : "text-gray-500"
            }`}
          />

          {index < steps.length - 1 && <hr className="w-8 border-t-2" />}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
