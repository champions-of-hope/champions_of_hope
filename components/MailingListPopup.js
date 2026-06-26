import { useState } from "react";

export default function MailingListPopup({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return "Please enter a valid email address.";
    }
    // Forgiving phone check: at least 7 digits once symbols are stripped.
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) return "Please enter a valid phone number.";
    return null;
  }

  async function handleSubmit() {
    if (status === "loading") return;

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setMessage(validationError);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter_users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setName("");
        setEmail("");
        setPhone("");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Join Our Mailing List</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {status === "success" ? (
          <div className="py-6 text-center">
            <p className="text-green-400 text-lg font-semibold mb-4">{message}</p>
            <button
              onClick={onClose}
              className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-200 mb-4">
              Stay updated with our latest news and offers!
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="Phone number"
                required
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {status === "error" && (
                <p className="text-red-400 text-sm">{message}</p>
              )}
              <button
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-900 transition disabled:opacity-60"
                onClick={handleSubmit}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
