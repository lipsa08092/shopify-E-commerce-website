import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaEye, FaDownload } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(savedApp);
  }, []);

  const updateStatus = (id, status) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status } : app
    );
    setApplications(updated);
    localStorage.setItem("applications", JSON.stringify(updated));
  };

  if (applications.length === 0) {
    return <p className="p-6 text-gray-400">No applications received yet.</p>;
  }

  return (
    <div className="p-6 min-h-full space-y-6 bg-blue-950">
      <h1 className="text-2xl font-bold text-white">
        Job Applications ({applications.length})
      </h1>
      {applications.map((app) => (
        <div
          key={app.id}
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 text-white font-sans"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p className="text-lg text-gray-400">{app.jobTitle}</p>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400">
              {app.status}
            </span>
          </div>

          <div className="flex justify-between items-center gap-10 text-sm text-gray-300 mt-3">
            <div className="flex justify-between items-center gap-10 text-lg text-gray-400">
              <span className="flex  items-center gap-2">
                <FaEnvelope  className="text-green-600"/> {app.email}
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-sky-600" /> {app.phone}
              </span>
              <span className="flex items-center gap-2">
                <FaClockRotateLeft className="text-purple-500" />
                {app.appliedAt}
              </span>
            </div>
            <select
              value={app.status}
              onChange={(e) => updateStatus(app.id, e.target.value)}
              className="bg-gray-800 border border-gray-600 rounded-full px-3 py-1 text-sm text-gray-300"
            >
              <option>Applied</option>
              <option>Shortlisted</option>
              <option>Rejected</option>
              <option>Hired</option>
            </select>
          </div>

          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-300 mt-3 text-md">{app.message}</p>

            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-5 text-sm">
                <button className="flex items-center gap-1 text-blue-400 hover:underline">
                  <FaEye /> View
                </button>

                <button className="flex items-center gap-1 text-green-400 hover:underline">
                  <FaDownload /> Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applications;
