import { CheckCircle } from "lucide-react";

export const CompletedProject = ({ title, description }:any) => (
    <div className="flex items-start p-4 border border-gray-200 rounded-lg shadow-sm bg-white transition-all duration-300 hover:shadow-md">
      <div className="flex-shrink-0 mr-4">
        <CheckCircle className="h-8 w-8 text-green-500" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );