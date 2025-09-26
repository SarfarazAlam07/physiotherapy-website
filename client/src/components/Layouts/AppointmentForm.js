import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppointmentForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "", // Added address to initial state
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = "";

    // Added basic validation for address
    if (name === "address") {
      if (!newValue.trim()) error = "Address cannot be empty";
    }

    if (name === "name") {
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
      if (!newValue) error = "Name cannot be empty";
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!newValue) error = "Email cannot be empty";
      else if (!emailRegex.test(newValue)) error = "Invalid email address";
    }

    if (name === "phone") {
      newValue = value.replace(/[^0-9]/g, "");
      if (!newValue) error = "Phone cannot be empty";
      else if (newValue.length > 10) error = "Max 10 digits allowed";
    }

    if (name === "message") {
      if (!newValue.trim()) error = "Message cannot be empty";
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const hasError =
    Object.values(errors).some((err) => err !== "") ||
    Object.values(form).some((val) => val === "");

  if (hasError) {
    toast.error("❌ Please fix errors before submitting!");
    return;
  }

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/appointment`, form);

    if (res.data.success) {
      toast.success("✅ Appointment request sent!");
      setForm({ name: "", email: "", phone: "", message: "", address: "" });
      setErrors({ name: "", email: "", phone: "", message: "", address: "" });
      // yaha tum modal close ka code bhi call kar sakte ho
    } else {
      toast.error("❌ " + res.data.msg);
    }
  } catch (err) {
    toast.error("❌ Server error, please try again");
  }
  
};


  return (
    // ✅ max-h-[60vh] and pr-2 have been added here
    <form
      id="appointment-form"
      className="space-y-6 flex-1 overflow-y-auto max-h-[60vh] pr-2"
      onSubmit={handleSubmit}
    >
      {/* Name, Email, Phone, Address */}
      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel", maxLength: 10 },
        { name: "address", label: "Address", type: "text", maxLength: 100 },
      ].map((field) => (
        <div key={field.name} className="relative">
          <input
            type={field.type}
            name={field.name}
            id={field.name} 
            maxLength={field.maxLength}
            value={form[field.name] || ''} // Fallback to empty string
            onChange={handleChange}
            placeholder=" "
            className="peer w-full p-4 rounded-2xl bg-white/50 border border-gray-300 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent transition placeholder-transparent shadow-md"
            required
          />
          <label
            htmlFor={field.name}
            className="absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 transition-all"
          >
            {field.label}
          </label>
          {errors[field.name] && (
            <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
          )}
        </div>
      ))}

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          id="message"
          value={form.message}
          onChange={handleChange}
          placeholder=" "
          className="peer w-full p-4 rounded-2xl bg-white/50 border border-gray-300 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent transition placeholder-transparent resize-none h-28 shadow-md"
          required
        ></textarea>
        <label
          htmlFor="message" 
          className="absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-green-500 transition-all"
        >
          Problem
        </label>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="py-3 px-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;