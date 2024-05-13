import { useState } from "react";

export default function AccountStep({
  data,
  updateFields,
  errors,
}: {
  data: any;
  updateFields: any;
  errors: any;
}) {
  const [touched, setTouched] = useState({});

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };
  
  console.log("data", data);
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
            onBlur={(e) => handleBlur(e.target.name)}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
            onBlur={(e) => handleBlur(e.target.name)}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-4">
        <label>Username *</label>
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
          onBlur={(e) => handleBlur(e.target.name)}
          className="p-2 mt-2 mb-1 border border-gray-300 hover:border-gray-500 rounded-lg"
        />
        <div className="h-4 tex-sm">
          {touched.username && errors.username && <p className="text-red-500">{errors.username}</p>}
        </div>
      </div>

      <div className="flex flex-col w-full mb-4">
        <label>Email Address *</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
          onBlur={(e) => handleBlur(e.target.name)}
          className="p-2 mt-2 mb-1 border border-gray-300 hover:border-gray-500 rounded-lg"
        />
        <div className="h-4 tex-sm">
          {touched.email && errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
            onBlur={(e) => handleBlur(e.target.name)}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
          <div className="h-4 tex-sm">
            {touched.password && errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
        </div>

        <div>
          <label>Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={(e) => updateFields({ [e.target.name]: e.target.value })}
            onBlur={(e) => handleBlur(e.target.name)}
            className="p-2 mt-2 border border-gray-300 hover:border-gray-500 rounded-lg w-full"
          />
          <div className="h-4 tex-sm">
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
