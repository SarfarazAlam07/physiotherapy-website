import React, { useState } from "react";
import axiosClient from "../../api/axiosClient";
import { toast } from "react-toastify";

const AppointmentForm = ({ onSubmit, setIsModalOpen }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("❌ Please fill all required fields");
      return false;
    }
    if (form.phone.length !== 10) {
      toast.error("❌ Phone number must be 10 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await axiosClient.post("/api/appointment", form);

      if (res.data.success) {
        toast.success("✅ Appointment request sent!");
        setForm({ name: "", email: "", phone: "", message: "", address: "" });
        if(setIsModalOpen) setIsModalOpen(false);
        if(onSubmit) onSubmit(res.data);
      }
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Server error, please try again";
      toast.error(`❌ ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ Updated ClassName: 'scrollbar-hide' add kiya aur 'pr-2' hata diya
    <form 
      className="space-y-4 flex-1 overflow-y-auto max-h-[60vh] scrollbar-hide" 
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text" name="name" placeholder="Full Name *" value={form.name} onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <input
          type="email" name="email" placeholder="Email Address *" value={form.email} onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <input
          type="tel" name="phone" placeholder="Phone Number *" maxLength="10" value={form.phone} onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <input
          type="text" name="address" placeholder="Address (Optional)" value={form.address} onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        <textarea
          name="message" placeholder="Describe your problem *" rows="4" value={form.message} onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none resize-none transition"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-full text-white font-bold transition transform hover:scale-105 shadow-lg ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-green-500 to-blue-600"
        }`}
      >
        {loading ? "Sending..." : "Book Appointment"}
      </button>
    </form>
  );
};

export default AppointmentForm;