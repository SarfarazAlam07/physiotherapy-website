import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Brain,
  UserCheck,
  Activity,
  Users,
  Baby,
  Dumbbell,
  Heart,
} from "lucide-react";
import { FaRunning } from "react-icons/fa";
import { SiSpine } from "react-icons/si";

// Data Import (Make sure ye file aur folder exist kare)
import { conditionsData } from "../data/orthopedicData";

const iconMap = {
  Brain: Brain,
  UserCheck: UserCheck,
  FaRunning: FaRunning,
  SiSpine: SiSpine,
  Users: Users,
  Baby: Baby,
  Activity: Activity,
  Dumbbell: Dumbbell,
  Heart: Heart,
};

const OrthopedicSection = () => {
  const [openSectionId, setOpenSectionId] = useState(null);

  const toggleSection = (id) => {
    setOpenSectionId(openSectionId === id ? null : id);
  };

  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Specialized Treatments
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {conditionsData.map((section) => {
          const IconComponent = iconMap[section.iconName] || Activity;

          return (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg text-white ${section.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <span className="font-semibold text-gray-800 text-lg">
                    {section.title}
                  </span>
                </div>
                {openSectionId === section.id ? (
                  <ChevronDown />
                ) : (
                  <ChevronRight />
                )}
              </button>

              {openSectionId === section.id && (
                <div className="px-5 pb-5">
                  {/* Conditions mapping logic here */}
                  <div className="flex flex-wrap gap-2">
                    {section.conditions?.map((cond, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrthopedicSection;
