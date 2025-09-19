import React, { useState } from "react";

const AppointmentForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    let error = "";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError =
      Object.values(errors).some((err) => err !== "") ||
      Object.values(form).some((val) => val === "");
    if (hasError) {
      alert("Please fix errors before submitting!");
      return;
    }
    onSubmit(form);
    setForm({ name: "", email: "", phone: "", message: "", address: ""});
    setErrors({ name: "", email: "", phone: "", message: "", address: "" });
  };

  return (
    <form
    id="appointment-form"
      className="space-y-6 flex-1 overflow-y-auto"
      onSubmit={handleSubmit}
    >
      {/* Name, Email, Phone */}
      {[
        { name: "name", label: "Full Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel", maxLength: 10 },
        { name: "address", label: "address", type: "text", maxLength: 50 },
      ].map((field) => (
        <div key={field.name} className="relative">
          <input
            type={field.type}
            name={field.name}
            id={field.name} 
            maxLength={field.maxLength}
            value={form[field.name]}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full p-4 rounded-2xl bg-white/50 border border-gray-300 backdrop-blur-sm focus:ring-2 focus:ring-green-400 focus:border-transparent transition placeholder-transparent shadow-md"
            required
          />
          <label
            htmlFor={field.name} 
            className={`absolute left-4 top-4 text-gray-400 transition-opacity duration-300 ${form[field.name] ? 'opacity-0' : 'opacity-100 text-base'}`}
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
          className={`absolute left-4 top-4 text-gray-400 transition-opacity duration-300 ${form.message ? 'opacity-0' : 'opacity-100 text-base'}`}
        >
          Problem
        </label>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="py-2 px-6 rounded-2xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold shadow-md hover:from-blue-500 hover:to-green-400 transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;