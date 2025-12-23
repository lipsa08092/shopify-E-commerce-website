import React from "react";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Amit pradhan",
      date: "20/8/2025",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "Excellent service and great quality products.",
      rating: 4,
    },
    {
      id: 2,
      name: "Gyana Ranjan samal",
      date: "20/12/2025",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "The ordering process was smooth and the delivery was faster.",
      rating: 5,
    },
    {
      id: 3,
      name: "Deepak Kumar dey",
      date: "8/12/2025",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      review:
        "Customer support  helpful .",
      rating: 4,
    },
    {
      id: 4,
      name: "Jagan Khuntia",
      date: "1/12/2025",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "The quality was Excellent and great quality products . Will definitely recommend to friends.",
      rating: 5,
    },
    {
      id: 5,
      name: "Rajesh Kumar sahoo",
      date: "8/12/2025",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      review: "Good value for money and good service every time.",
      rating: 4,
    },
    {
      id: 6,
      name: "Anshuman mohanty",
      date: "11/6/2025",
      img: "https://randomuser.me/api/portraits/men/81.jpg",
      review: "Good value for money and nice service every time.",
      rating: 5,
    },
  ];

  return (
      <div className="p-6 bg-blue-950 min-h-full text-white">
        <h1 className="text-3xl font-serif font-bold mb-8">
          Testimonials Management
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative p-6 bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl hover:scale-105 transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-300">{item.date}</p>
                </div>
              </div>
              <p className="italic text-sm text-gray-200 mb-4">
                “{item.review}”
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < item.rating ? "text-yellow-400" : "text-gray-600"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Testimonials;
