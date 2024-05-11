export default function PreferencesStep({ data, updateFields }: { data: any, updateFields: any }) {
  const handleCheckboxChange = (field: string, checked: boolean) => {
    updateFields({ [field]: checked ? "Yes" : "No" });
  };

  return (
    <div className="flex flex-col">
      <label>
        <input
          type="checkbox"
          checked={data.wantsNotifications === "Yes"}
          onChange={(e) =>
            handleCheckboxChange("wantsNotifications", e.target.checked)
          }
          className="mb-5"
        />
        {" "}Send notifications
      </label>

      <label>
        <input
          type="checkbox"
          checked={data.shareInformation === "Yes"}
          onChange={(e) =>
            handleCheckboxChange("shareInformation", e.target.checked)
          }
          className="mb-5"
        />
        {" "}Share information with related marketers
      </label>

      <label className="text-sm mt-10">Notification Preferences</label>
      <select
        value={data.notificationPreference}
        onChange={(e) =>
          updateFields({ notificationPreference: e.target.value })
        }
        className="p-2 mt-2 mb-4 border border-gray-300 rounded-lg"
      >
        <option value="" disabled selected={!data.notificationPreference}>
         Dropdown: Email or Text 
        </option>

        <option value="Email">Email</option>
        <option value="Text">Text</option>
      </select>
    </div>
  );
}
