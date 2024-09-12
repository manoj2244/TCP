

export const ServiceItem = ({ icon, title, description }:any) => (
    <div className="flex justify-around">
    <div className="flex w-full max-w-lg items-start p-4 border border-gray-200 rounded-xl shadow-sm bg-white transition-all duration-300 hover:shadow-md">
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    </div>
  );