import React from "react";
import { Link } from "react-router-dom";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const jobs = [
  {
    id: 1,
    title: "Manager",
    company: "Shopify",
    location: "Bhubaneswar",
    salary: "8 LPA",
    experience: "5+ years",
    type: "Full-time",
    category: "Quality Assurance",
    description:
      "Oversee quality control processes and ensure safety standards are met.",
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Shopify",
    location: "Bhubaneswar",
    salary: "5000 / Month",
    experience: "0+ years",
    type: "Internship",
    category: "Marketing",
    description:
      "Assist the marketing team and social media management.",
  },
  {
    id: 3,
    title: "Sales Executive",
    company: "Shopify",
    location: "Bhubaneswar",
    salary: "6 LPA",
    experience: "2+ years",
    type: "Full-time",
    category: "Sales",
    description:
      "Drive sales, manage client relationships, and meet sales targets.",
  },
];

const JobOpenings = () => {
  return (
    <div className="p-6 w-full bg-blue-950">
      <h1 className="text-2xl font-bold text-white mb-6">
        Job Openings <span>({jobs.length})</span>
      </h1>

      <div className="space-y-5">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-black/40 border border-white/20 rounded-xl p-5 text-white "
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-green-600/20 text-green-400">
                  {job.type}
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-blue-600/20 text-blue-400">
                  {job.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-20  text-lg text-gray-400 mt-4">
              <p className="flex items-center gap-2 mt-1">
                <FaBuilding className="text-blue-700" /> {job.company}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" /> {job.location}
              </p>
              <p className="flex items-center gap-2">
                <FaMoneyBillWave className="text-yellow-500" /> {job.salary}
              </p>
              <p className="flex items-center gap-2">
                <MdWork className="text-purple-600" /> {job.experience}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-400 mt-6 text-md">{job.description}</p>

              <div className="mt-8">
                <Link
                  to={`/career/apply/${job.id}`}
                  className="inline-block px-5 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-xs lg:text-sm font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpenings;
