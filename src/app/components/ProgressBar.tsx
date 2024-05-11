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
    <div className="flex items-center justify-center mb-8 bg-gray-100 w-full rounded-lg">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center relative">
          <div className={`absolute left-7 text-sm font-bold ${
              currentStep === index ? "text-yellow-500" : "text-gray-500"
            }`}>
            {step.id}
          </div>
          <FontAwesomeIcon
            icon={farCircle}
            className={`w-8 h-8 m-4 ${
              currentStep === index ? "text-yellow-500" : "text-gray-500"
            }`}
          />

          {index < steps.length - 1 && <hr className="w-8 border-t-2 border-color-gray-500" />}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
