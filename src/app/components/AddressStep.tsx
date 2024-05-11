export default function AddressStep({
  data,
  updateFields,
}: {
  data: any;
  updateFields: any;
}) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2">
          <label>Address *</label>
          <input
            type="text"
            value={data.address1}
            onChange={(e) => updateFields({ address1: e.target.value })}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label>Apt, Unit, etc.</label>
          <input
            type="text"
            value={data.address2}
            onChange={(e) => updateFields({ address2: e.target.value })}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-10">
        <div className="col-span-3">
          <label>City *</label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => updateFields({ city: e.target.value })}
            className="p-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label>ZipCode *</label>
          <input
            type="text"
            value={data.zipCode}
            onChange={(e) => updateFields({ zipCode: e.target.value })}
            className="p-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>

        <div className="col-span-1">
          <label>Country *</label>
          <select
            value={data.country}
            onChange={(e) => updateFields({ country: e.target.value })}
            className="p-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          >
            <option value="" disabled selected={!data.country}>
              Dropdown: Select Country
            </option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="BS">BS</option>
            <option value="HK">HK</option>
          </select>
        </div>
      </div>

      <label>Company</label>
      <input
        type="text"
        value={data.company}
        onChange={(e) => updateFields({ company: e.target.value })}
        className="p-2 mt-2 mb-4 border border-gray-300 hover:border-gray-500 rounded-lg"
      />

      <label>Phone Number *</label>
      <input
        type="text"
        value={data.phoneNumber}
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
        className="p-2 mt-2 mb-4 border border-gray-300 hover:border-gray-500 rounded-lg"
      />
    </div>
  );
}
