export default function AddressStep({ data, updateFields }) {
    return (
      <div className="flex flex-col">
        <label>Address *</label>
        <input
          type="text"
          value={data.address}
          onChange={(e) => updateFields({ address: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />

        <label>Apartment, Suite, etc.</label>
        <input
          type="text"
          value={data.apartment}
          onChange={(e) => updateFields({ apartment: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />

        <label>Country *</label>
        <input
          type="text"
          value={data.country}
          onChange={(e) => updateFields({ country: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />

        <label>City *</label>
        <input
          type="text"
          value={data.city}
          onChange={(e) => updateFields({ city: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />

        <label>Zipcode *</label>
        <input
          type="text"
          value={data.zipcode}
          onChange={(e) => updateFields({ zipcode: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />

        <label>Company</label>
        <input
          type="text"
          value={data.company}
          onChange={(e) => updateFields({ company: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />

        <label>Phone Number *</label>
        <input
          type="text"
          value={data.phoneNumber}
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
          className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
        />
      </div>
    );
  }
  