import { useState } from "react";
import React from "react";
function NotMov() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="flex justify-end relative pr-10">
        <svg
          className="h-16 w-16 text-gray-600"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ zIndex: 20 }}
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path
            d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
            transform="rotate(15 12 12) translate(0 -1)"
          />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
        {isHovered && (
          <div
            id="carrito"
            className="absolute top-12 right-0 bg-white p-6 shadow-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ zIndex: 30 }} // Asegúrate de que el z-index sea mayor que el del formulario
          >
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">PROCEDENCIA</th>
                  <th className="text-left px-4 py-2">MATRICULA</th>
                  <th className="text-left px-4 py-2">CONTROLADOR</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">SLLP</td>
                  <td className="px-4 py-2">CP3119</td>
                  <td className="px-4 py-2">JOEL</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      type="button"
                    >
                      Recibir
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
export default NotMov;
