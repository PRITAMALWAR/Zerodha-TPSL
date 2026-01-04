import InputCard from "./InputCard";
import TradesTable from "./TradesTable";
import initialConfig from "../data/config.json";
import { useState } from "react";

export default function Dashboard() {
  const [config, setConfig] = useState(initialConfig);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState("sltp");

  const updateConfig = (section, field, value) => {
    setConfig((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]:
          field === "enabled" ? value : Number(value),
      },
    }));
    setSaved(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold mb-1">Inputs</h2>
        <p className="text-xs text-gray-500 mb-4">Inputs for spot, futures and options</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <InputCard title="Spot" data={config.spot} onChange={updateConfig} />
          <InputCard title="Futures" data={config.futures} onChange={updateConfig} />
          <InputCard title="Options" data={config.options} onChange={updateConfig} />
          <InputCard title="MT Copy" data={config.mtcopy} onChange={updateConfig} />
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => setSaved(true)}
            className="bg-black text-white px-5 py-2 rounded"
          >
            Save
          </button>
          {saved && <span className="text-green-600 text-sm">Saved!</span>}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-6 pt-4">
          <div className="flex text-sm rounded border bg-gray-100">
            <button
              className={`${activeTab === "sltp" ? "bg-white shadow font-medium" : "text-gray-600"} flex-1 py-2 rounded-l`}
              onClick={() => setActiveTab("sltp")}
            >
              SLTP Trades
            </button>
            <button
              className={`${activeTab === "copy" ? "bg-white shadow font-medium" : "text-gray-600"} flex-1 py-2 rounded-r`}
              onClick={() => setActiveTab("copy")}
            >
              MT Copy Trades
            </button>
          </div>
        </div>
        <div className="p-6">
          <TradesTable type={activeTab} />
        </div>
      </div>
    </div>
  );
}
