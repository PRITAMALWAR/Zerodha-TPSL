export default function InputCard({ title, data, onChange }) {
  const key = title.toLowerCase().replace(" ", "");

  const handleChange = (field, value) => {
    onChange(key, field, value);
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{title}</h3>
        <input
          type="checkbox"
          checked={data.enabled}
          onChange={(e) =>
            handleChange("enabled", e.target.checked)
          }
          className="h-5 w-10 appearance-none rounded-full bg-gray-300 checked:bg-green-500 relative cursor-pointer"
          style={{
            backgroundImage:
              data.enabled
                ? "radial-gradient(circle at 70% 50%, white 10px, transparent 11px)"
                : "radial-gradient(circle at 30% 50%, white 10px, transparent 11px)",
          }}
        />
      </div>

      {[
        ["profit1", "Profit 1 %"],
        ["profit2", "Profit 2 %"],
        ["profit3", "Profit 3 %"],
        ["stopLoss", "Stop Loss %"],
      ].map(([field, label]) => (
        <div
          key={field}
          className="flex justify-between items-center"
        >
          <span className="text-sm">{label}</span>
          <div className="flex items-center">
            <input
              type="number"
              value={data[field]}
              onChange={(e) =>
                handleChange(field, e.target.value)
              }
              disabled={!data.enabled}
              className={`w-24 border rounded-l px-2 py-1 text-sm text-right ${
                data.enabled ? "bg-white" : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            />
            <span className="border border-l-0 rounded-r px-2 py-1 text-sm bg-gray-50">%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
