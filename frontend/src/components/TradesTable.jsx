export default function TradesTable({ type = "sltp" }) {
  const trades = [];

  const emptyText =
    type === "copy" ? "No copy trades yet." : "No SLTP trades yet.";

  return (
    <div className="">
      <table className="w-full text-xs md:text-sm border rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2 align-bottom" rowSpan={2}>Symbol</th>
            <th className="border px-3 py-2 align-bottom" rowSpan={2}>InstrType</th>
            <th className="border px-3 py-2 align-bottom" rowSpan={2}>Position</th>
            <th className="border px-3 py-2" colSpan={2}>Entry</th>
            <th className="border px-3 py-2" colSpan={3}>Profit 1</th>
            <th className="border px-3 py-2" colSpan={3}>Profit 2</th>
            <th className="border px-3 py-2" colSpan={3}>Profit 3</th>
            <th className="border px-3 py-2" colSpan={2}>Stop Loss</th>
          </tr>
          <tr className="bg-gray-50">
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">AvgPrice</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Qty</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Status</th>
            <th className="border px-2 py-1">Price</th>
            <th className="border px-2 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {trades.length === 0 ? (
            <tr>
              <td className="text-center text-gray-500 py-8" colSpan={15}>
                {emptyText}
              </td>
            </tr>
          ) : (
            trades.map((t, i) => (
              <tr key={i}>
                <td className="border px-2 py-1">{t.symbol}</td>
                <td className="border px-2 py-1">{t.type}</td>
                <td className="border px-2 py-1">{t.position}</td>
                <td className="border px-2 py-1">{t.entryQty}</td>
                <td className="border px-2 py-1">{t.entryAvg}</td>
                <td className="border px-2 py-1">{t.p1Qty}</td>
                <td className="border px-2 py-1">{t.p1Price}</td>
                <td className="border px-2 py-1">{t.p1Status}</td>
                <td className="border px-2 py-1">{t.p2Qty}</td>
                <td className="border px-2 py-1">{t.p2Price}</td>
                <td className="border px-2 py-1">{t.p2Status}</td>
                <td className="border px-2 py-1">{t.p3Qty}</td>
                <td className="border px-2 py-1">{t.p3Price}</td>
                <td className="border px-2 py-1">{t.p3Status}</td>
                <td className="border px-2 py-1">{t.slPrice}</td>
                <td className="border px-2 py-1">{t.slStatus}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
