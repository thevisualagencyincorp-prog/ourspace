// 🎯 Contact section drives conversions with urgency 🎯

"use client";

import { useState } from "react";

interface ContactSectionProps {
  title?: string;
}

export default function ContactSection({
  title = "🔥 Ready to Level Up?",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll be in touch soon. 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="profile-table rounded-lg overflow-hidden mb-6">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left p-4">{title}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-6">
              <div className="space-y-6">
                {/* Scarcity & Urgency Message */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 p-4 rounded">
                  <p className="text-gray-800 font-bold mb-2">
                    ⚡ Limited Availability Alert
                  </p>
                  <p className="text-sm text-gray-700">
                    We only work with <span className="font-bold text-orange-600">3 new clients per month</span> to ensure
                    exceptional results. Current spots filling fast for{" "}
                    <span className="font-bold">{new Date().toLocaleString("default", { month: "long" })}</span>.
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-myspace-orange focus:outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-myspace-orange focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-700 mb-2"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-myspace-orange focus:outline-none transition-colors resize-none"
                      placeholder="What's your vision? Let's make it reality..."
                    />
                  </div>

                  <button type="submit" className="myspace-button w-full text-center">
                    🚀 Claim Your Spot Now
                  </button>

                  <p className="text-xs text-center text-gray-600 italic">
                    💎 Join the elite brands already crushing it with The Agency
                  </p>
                </form>

                {/* Social Proof Footer */}
                <div className="text-center pt-4 border-t-2 border-dashed border-gray-300">
                  <p className="text-sm text-gray-600 mb-2">
                    🌟 Trusted by ambitious brands across Kern County
                  </p>
                  <div className="flex justify-center gap-4 text-2xl">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 💰 Every submission is a wealth opportunity 💰
