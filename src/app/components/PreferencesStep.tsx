export default function PreferencesStep({ data, updateFields }: { data: any, updateFields: any }) {
  return (
    <div className="flex flex-col">
      <label>
        <input
          type="checkbox"
          checked={data.sendNotifications}
          onChange={(e) =>
            updateFields({ sendNotifications: e.target.checked })
          }
          className="mb-5"
        />
        {" "}Send notifications
      </label>

      <label>
        <input
          type="checkbox"
          checked={data.shareMarketingInfo}
          onChange={(e) =>
            updateFields({ shareMarketingInfo: e.target.checked })
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
