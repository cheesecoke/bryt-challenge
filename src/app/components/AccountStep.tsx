export default function AccountStep({
  data,
  updateFields,
}: {
  data: any;
  updateFields: any;
}) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>
      </div>

      <label>Username *</label>
      <input
        type="text"
        value={data.username}
        onChange={(e) => updateFields({ username: e.target.value })}
        className="p-2 mt-2 mb-4 border border-gray-300 hover:border-gray-500 rounded-lg"
      />

      <label>Email Address *</label>
      <input
        type="email"
        value={data.email}
        onChange={(e) => updateFields({ email: e.target.value })}
        className="p-2 mt-2 mb-4 border border-gray-300 hover:border-gray-500 rounded-lg"
      />

      <div className="grid grid-cols-2 gap-4 mb-4 mt-8">
        <div>
          <label>Password *</label>
          <input
            type="password"
            value={data.password}
            onChange={(e) => updateFields({ password: e.target.value })}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>

        <div>
          <label>Confirm Password *</label>
          <input
            type="password"
            value={data.confirmPassword}
            onChange={(e) => updateFields({ confirmPassword: e.target.value })}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
