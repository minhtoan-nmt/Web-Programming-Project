"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gửi liên hệ thành công!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-lg border w-full max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        name="name"
        placeholder="Tên của bạn *"
        required
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded w-full text-sm"
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        required
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full text-sm"
      />
      <input
        type="text"
        name="phone"
        placeholder="Số điện thoại *"
        required
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 rounded w-full text-sm"
      />
    </div>
    <textarea
      name="message"
      placeholder="Nội dung"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      className="border p-2 rounded w-full mt-4 text-sm"
    />
    <button
      type="submit"
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg mt-4 w-full transition"
    >
      Gửi
    </button>
  </form>
  );
}
