import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Brain,
  UserCheck,
  Activity,
  Users,
  Baby,
  Dumbbell,
} from "lucide-react";
import { FaRunning } from "react-icons/fa";
import { SiSpine } from "react-icons/si";

const conditionsData = [
  // ... your data remains unchanged
  {
    id: "neurological",
    title: "Neurological Conditions",
    icon: Brain,
    color: "bg-blue-500",
    conditions: [
      "Stroke / Paralysis",
      "Bell's Palsy",
      "Parkinson's Disease",
      "Transient Ischemic Attack TIA",
      "MS Muscular Sclerosis",
      "Facial Palsy / Facial Paralysis",
    ],
  },
  {
    id: "geriatric",
    title: "Geriatric Conditions among Elderly",
    icon: UserCheck,
    color: "bg-amber-500",
    conditions: [
      "Joint Pain",
      "Balance & Falls",
      "Osteoarthritis",
      "Leaky Bladder",
      "Knee Replacement",
    ],
  },
  {
    id: "Sports",
    title: "Sports",
    icon: FaRunning,
    color: "bg-gray-600",
    conditions: [
      "Cricket Injuries",
      "Cycling Injuries",
      "Football Injuries",
      "Badminton Injuries",
      "Running Injuries",
      "Fracture",
      "Diabetic Neuropathy",
      "Ligament Injuries",
      "Muscle Strain",
      "Muscle Tear",
      "Tennis Elbow",
    ],
  },
  {
    id: "orthopedic",
    title: "Orthopedic Conditions",
    icon: SiSpine,
    color: "bg-green-500",
    conditions: [],
    subSections: [
      {
        id: "knee",
        title: "Knee Pain Conditions",
        conditions: [
          "ACL Tear",
          "IT band Syndrome",
          "MCL injury",
          "ACL , Meniscal Tear",
          "Knee Arthritis",
          "Quadriceps Tendonitis",
          "Osgood Schlatter Disease",
          "Fixed Flexion deformity",
          "Patello-Femoral Pain Syndrome (PFPS)",
        ],
      },
      {
        id: "neck",
        title: "Neck Pain conditions",
        conditions: [
          "Cervical pain",
          "Cervical Spondylosis",
          "Herniated Disc- Cervical Spine",
          "Upper Cross Syndrome",
          "Postural Neck Pain / Tech Neck",
          "Trapezitis",
        ],
      },
      {
        id: "shoulder",
        title: "Shoulder Pain conditions",
        conditions: [
          "Biceps Tendonitis",
          "Frozen Shoulder",
          "Brachial Plexus Injury",
          "Shoulder Impingement",
          "Shoulder Joint Dislocation",
          "Shoulder Bursitis",
          "Supraspinatus Tendinitis",
        ],
      },
      {
        id: "back",
        title: "Back Pain conditions",
        conditions: [
          "Lower Back Pain",
          "Postural Back Pain",
          "Spondylosis",
          "Spinal Stenosis",
          "SI Joint Dysfunction",
          "Ankylosing Spondylitis",
          "Sciatica",
          "Mechanical Low back pain",
          "Degenerative Disc Disease",
          "Scoliosis",
          "Spondylolisthesis",
          "Tailbone pain",
          "Slipped disc / PIVD",
        ],
      },
      {
        id: "ankle",
        title: "Ankle & Foot Pain Conditions",
        conditions: [
          "Heel Pain",
          "Achilles Tendonitis",
          "Plantar Fasciitis",
          "Ankle Sprain",
        ],
      },
      {
        id: "hip",
        title: "Hip and Leg Pain Conditions",
        conditions: [
          "Bursitis",
          "Piriformis Syndrome",
          "Trochanteric bursitis",
          "Calf muscle pain",
          "Muscle Strain",
          "Leg Cramps",
          "Shin Splints",
        ],
      },
      {
        id: "hand",
        title: "Hand & Wrist Pain Conditions",
        conditions: [
          "Carpal Tunnel Syndrome",
          "Dequervains Tenosynovitis",
          "Tennis Elbow",
          "Wrist Pain",
          "Finger Joint Pain",
        ],
      },
    ],
  },
  {
    id: "womens",
    title: "Women's Health Conditions",
    icon: Users,
    color: "bg-pink-500",
    conditions: [
      "Before and After premature pregnancy",
      "Pregnancy Back Pain",
      "Diastasis Recti",
      "Female Urinary Incontinence",
      "Pelvic Floor Problem",
      "Symphysis Pubis Dysfunction",
      "Pelvic Pain in Women",
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Conditions",
    icon: Baby,
    color: "bg-purple-500",
    conditions: [
      "ADHD",
      "Autism / ASD",
      "Cerebral Palsy",
      "Developmental Delays",
      "Sensory Processing Disorder",
      "Fine Motor Gross Motor Skills",
    ],
  },
  {
    id: "lung",
    title: "Lung Conditions for Chest Physiotherapy",
    icon: Activity,
    color: "bg-teal-500",
    conditions: [
      "COPD - Chronic Obstructive Pulmonary Disease",
      "ILD - Interstitial Lung Disease",
      "Shortness of Breath",
      "Dyspnea",
    ],
  },
  {
    id: "cardiac",
    title: "Heart Conditions for Cardiac Rehab",
    icon: Heart,
    color: "bg-red-500",
    conditions: [
      "Angina",
      "CABG - Bypass Surgery",
      "Valve Replacement Surgery",
    ],
  },
  {
    id: "Gym",
    title: "Gym ",
    icon: Dumbbell,
    color: "bg-gray-600",
    conditions: [
      "Vertigo",
      "Fracture",
      "Diabetic Neuropathy",
      "DOMS",
      "Dance Injuries",
      "Gym Injuries",
      "Running Injuries",
    ],
  },
];

const ConditionCard = ({
  section,
  isExpanded,
  onToggle,
  expandedSubSections,
  onToggleSubSection,
}) => {
  const Icon = section.icon;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div
        onClick={() => onToggle(section.id)}
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
      >
        <div className="flex items-center space-x-3">
          <div
            className={`p-2 rounded-lg ${section.color} text-white shadow-sm`}
          >
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {section.title}
          </h3>
        </div>
        <div className="text-gray-400 transition-transform duration-200">
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </div>
      {isExpanded && (
        <div className="p-5">
          {section.conditions && section.conditions.length > 0 && (
            <div className="space-y-2">
              {section.conditions.map((condition, index) => (
                <div
                  key={`${section.id}-condition-${index}`}
                  className="p-3 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200 hover:border-blue-200"
                >
                  <span className="text-gray-700 text-sm font-medium">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          )}
          {section.subSections && (
            <div className="space-y-3">
              {section.subSections.map((subSection) => {
                const subSectionKey = `${section.id}-${subSection.id}`;
                const subIsExpanded = expandedSubSections.has(subSectionKey);
                return (
                  <div
                    key={subSectionKey}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div
                      onClick={() => onToggleSubSection(subSectionKey)}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                      <h4 className="text-md font-medium text-gray-800">
                        {subSection.title}
                      </h4>
                      <div className="text-gray-400 transition-transform duration-200">
                        {subIsExpanded ? (
                          <ChevronDown size={18} />
                        ) : (
                          <ChevronRight size={18} />
                        )}
                      </div>
                    </div>
                    {subIsExpanded && (
                      <div className="p-4 bg-white">
                        <div className="space-y-2">
                          {subSection.conditions.map((condition, index) => (
                            <div
                              key={`${subSectionKey}-condition-${index}`}
                              className="p-3 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200 hover:border-blue-200"
                            >
                              <span className="text-gray-700 text-sm">
                                {condition}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const OrthopedicSection = () => {
  const [openSectionId, setOpenSectionId] = useState(null);
  const [expandedSubSections, setExpandedSubSections] = useState(new Set());

  const toggleSection = (sectionId) => {
    const newOpenSectionId = openSectionId === sectionId ? null : sectionId;
    setOpenSectionId(newOpenSectionId);
    if (openSectionId !== sectionId) {
      setExpandedSubSections(new Set());
    }
  };

  const toggleSubSection = (subSectionKey) => {
    setExpandedSubSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(subSectionKey)) {
        newSet.delete(subSectionKey);
      } else {
        newSet.add(subSectionKey);
      }
      return newSet;
    });
  };

  const column1Data = conditionsData.filter((_, index) => index % 2 === 0);
  const column2Data = conditionsData.filter((_, index) => index % 2 !== 0);

  return (
    // ✅ 'min-h-screen' has been removed from here
    <div className="w-full p-6 bg-gray-50">
      <div className="text-center mb-8 pt-8">
        <span className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold text-lg">
          All Conditions
        </span>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mb-10">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {column1Data.map((section) => (
            <ConditionCard
              key={section.id}
              section={section}
              isExpanded={openSectionId === section.id}
              onToggle={toggleSection}
              expandedSubSections={expandedSubSections}
              onToggleSubSection={toggleSubSection}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {column2Data.map((section) => (
            <ConditionCard
              key={section.id}
              section={section}
              isExpanded={openSectionId === section.id}
              onToggle={toggleSection}
              expandedSubSections={expandedSubSections}
              onToggleSubSection={toggleSubSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrthopedicSection;