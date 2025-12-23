import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const jobs = [
  { id: 1, title: "Manager", company: "Shopify", location: "Bhubaneswar" },
  { id: 2, title: "Marketing Intern", company: "Shopify", location: "Bhubaneswar" },
  { id: 3, title: "Sales Executive", company: "Shopify", location: "Bhubaneswar" },
];

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const oldApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    const newApplication = {
      id: Date.now(),
      ...form,
      jobTitle: job.title,
      company: job.company,
      location: job.location,
      status: "Applied",
      appliedAt: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "applications",
      JSON.stringify([...oldApplications, newApplication])
    );

    alert("Application submitted successfully!");
    navigate("/admin/jobOpenings");
  };

  if (!job)
    return <p className="p-6 text-gray-300">Job not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white shadow-xl">
        
        <h1 className="text-2xl font-bold mb-1">
          Apply for <span className="text-orange-400">{job.title}</span>
        </h1>

        <div className="text-sm text-gray-300 mb-5">
          <p><b>Company:</b> {job.company}</p>
          <p><b>Location:</b> {job.location}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            required
          />

          <textarea
            name="message"
            placeholder="Why should we hire you?"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
            required
          />

          <button className="w-full bg-orange-600 hover:bg-orange-700 transition-all text-white font-semibold py-3 rounded-lg shadow-lg shadow-orange-600/30">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
