import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md transition-colors ${
      isActive
        ? "bg-gray-100 text-black font-medium"
        : "text-gray-600 hover:text-black hover:bg-gray-50"
    }`;

  return (
    <aside className="w-56 bg-white border-r p-4">
      <h1 className="font-bold text-lg mb-6">Monitor</h1>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass} end>
          Main
        </NavLink>

        <NavLink to="/history" className={linkClass}>
          History
        </NavLink>

        <NavLink to="/logs" className={linkClass}>
          Logs
        </NavLink>
      </nav>
    </aside>
  );
}
