import { useState } from "react";

export default function MailingListPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  let [newsletter_name, set_newsletter_name] = useState("John");
  let [newsletter_email, set_newletter_email] = useState("John@email.com");

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">
            Join Our Mailing List
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-2xl"
          >
            ×
          </button>
        </div>
        <p className="text-gray-200 mb-4">
          Stay updated with our latest news and offers!
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            value={newsletter_name}
            onChange={(event) => set_newsletter_name(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            value={newsletter_email}
            onChange={(event) => set_newletter_email(event.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-900 transition"
            onClick={(evet) => alert("Submitted!")} // Placeholder for form submission
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
