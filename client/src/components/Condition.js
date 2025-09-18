import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Heart, Brain, UserCheck, Stethoscope, Activity, Users, Baby, Dumbbell } from 'lucide-react';

// Data can be defined outside the component since it doesn't change.
const conditionsData = [
    {
        id: 'neurological',
        title: 'Neurological Conditions',
        icon: Brain,
        color: 'bg-blue-500',
        conditions: [
            "Stroke / Paralysis",
            "Bell's Palsy",
            "Parkinson's Disease",
            "Transient Ischemic Attack TIA",
            "MS Muscular Sclerosis",
            "Facial Palsy / Facial Paralysis"
        ]
    },
    {
        id: 'geriatric',
        title: 'Geriatric Conditions among Elderly',
        icon: UserCheck,
        color: 'bg-amber-500',
        conditions: [
            "Joint Pain",
            "Balance & Falls",
            "Osteoarthritis",
            "Leaky Bladder",
            "Knee Replacement"
        ]
    },
    {
        id: 'orthopedic',
        title: 'Orthopedic Conditions',
        icon: Stethoscope,
        color: 'bg-green-500',
        conditions: [],
        subSections: [
            {
                id: 'knee',
                title: 'Knee Pain Conditions',
                conditions: ['ACL Tear', 'IT band Syndrome', 'MCL injury', 'ACL , Meniscal Tear', 'Knee Arthritis', 'Quadriceps Tendonitis', 'Osgood Schlatter Disease', 'Fixed Flexion deformity', 'Patello-Femoral Pain Syndrome (PFPS)']
            },
            {
                id: 'neck',
                title: 'Neck Pain conditions',
                conditions: ['Cervical pain', 'Cervical Spondylosis', 'Herniated Disc- Cervical Spine', 'Upper Cross Syndrome', 'Postural Neck Pain / Tech Neck', 'Trapezitis']
            },
            {
                id: 'shoulder',
                title: 'Shoulder Pain conditions',
                conditions: ['Biceps Tendonitis', 'Frozen Shoulder', 'Brachial Plexus Injury', 'Shoulder Impingement', 'Shoulder Joint Dislocation', 'Shoulder Bursitis', 'Supraspinatus Tendinitis']
            },
            {
                id: 'back',
                title: 'Back Pain conditions',
                conditions: ['Lower Back Pain', 'Postural Back Pain', 'Spondylosis', 'Spinal Stenosis', 'SI Joint Dysfunction', 'Ankylosing Spondylitis', 'Sciatica', 'Mechanical Low back pain', 'Degenerative Disc Disease', 'Scoliosis', 'Spondylolisthesis', 'Tailbone pain', 'Slipped disc / PIVD']
            },
            {
                id: 'ankle',
                title: 'Ankle & Foot Pain Conditions',
                conditions: ['Heel Pain', 'Achilles Tendonitis', 'Plantar Fasciitis', 'Ankle Sprain']
            },
            {
                id: 'hip',
                title: 'Hip and Leg Pain Conditions',
                conditions: ['Bursitis', 'Piriformis Syndrome', 'Trochanteric bursitis', 'Calf muscle pain', 'Muscle Strain', 'Leg Cramps', 'Shin Splints']
            },
            {
                id: 'hand',
                title: 'Hand & Wrist Pain Conditions',
                conditions: ['Carpal Tunnel Syndrome', 'Dequervains Tenosynovitis', 'Tennis Elbow', 'Wrist Pain', 'Finger Joint Pain']
            }
        ]
    },
    {
        id: 'womens',
        title: "Women's Health Conditions",
        icon: Users,
        color: 'bg-pink-500',
        conditions: ['Pregnancy Back Pain', 'Diastasis Recti', 'Female Urinary Incontinence', 'Pelvic Floor Problem', 'Symphysis Pubis Dysfunction', 'Pelvic Pain in Women']
    },
    {
        id: 'pediatric',
        title: 'Pediatric Conditions',
        icon: Baby,
        color: 'bg-purple-500',
        conditions: ['ADHD', 'Autism / ASD', 'Cerebral Palsy', 'Developmental Delays', 'Sensory Processing Disorder', 'Fine Motor Gross Motor Skills']
    },
    {
        id: 'lung',
        title: 'Lung Conditions for Chest Physiotherapy',
        icon: Activity,
        color: 'bg-teal-500',
        conditions: ['COPD - Chronic Obstructive Pulmonary Disease', 'ILD - Interstitial Lung Disease', 'Shortness of Breath', 'Dyspnea']
    },
    {
        id: 'cardiac',
        title: 'Heart Conditions for Cardiac Rehab',
        icon: Heart,
        color: 'bg-red-500',
        conditions: ['Angina', 'CABG - Bypass Surgery', 'Valve Replacement Surgery']
    },
    {
        id: 'other',
        title: 'Other Conditions',
        icon: Dumbbell,
        color: 'bg-gray-600',
        conditions: ['Vertigo', 'Fracture', 'Diabetic Neuropathy', 'DOMS', 'Dance Injuries', 'Gym Injuries', 'Running Injuries']
    }
];

// ✨ FIX: ConditionCard is now its own separate component.
// It receives all the data and functions it needs through props.
const ConditionCard = ({ section, isExpanded, onToggle, expandedSubSections, onToggleSubSection }) => {
    const Icon = section.icon;

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Section Header */}
            <div
                onClick={() => onToggle(section.id)}
                className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
                <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${section.color} text-white shadow-sm`}>
                        <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                </div>
                <div className="text-gray-400 transition-transform duration-200">
                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </div>
            </div>

            {/* Section Content */}
            {isExpanded && (
                <div className="p-5">
                    {/* Direct Conditions */}
                    {section.conditions && section.conditions.length > 0 && (
                        <div className="space-y-2">
                            {section.conditions.map((condition, index) => (
                                <div
                                    key={`${section.id}-condition-${index}`}
                                    className="p-3 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200 hover:border-blue-200"
                                >
                                    <span className="text-gray-700 text-sm font-medium">{condition}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Sub Sections */}
                    {section.subSections && (
                        <div className="space-y-3">
                            {section.subSections.map((subSection) => {
                                const subSectionKey = `${section.id}-${subSection.id}`;
                                const subIsExpanded = expandedSubSections.has(subSectionKey);

                                return (
                                    <div key={subSectionKey} className="border border-gray-200 rounded-lg overflow-hidden">
                                        {/* Sub Section Header */}
                                        <div
                                            onClick={() => onToggleSubSection(subSectionKey)}
                                            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                                        >
                                            <h4 className="text-md font-medium text-gray-800">{subSection.title}</h4>
                                            <div className="text-gray-400 transition-transform duration-200">
                                                {subIsExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                                            </div>
                                        </div>

                                        {/* Sub Section Content */}
                                        {subIsExpanded && (
                                            <div className="p-4 bg-white">
                                                <div className="space-y-2">
                                                    {subSection.conditions.map((condition, index) => (
                                                        <div
                                                            key={`${subSectionKey}-condition-${index}`}
                                                            className="p-3 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors cursor-pointer border border-gray-200 hover:border-blue-200"
                                                        >
                                                            <span className="text-gray-700 text-sm">{condition}</span>
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


const ConditionsSection = () => {
    const [expandedSections, setExpandedSections] = useState(new Set());
    const [expandedSubSections, setExpandedSubSections] = useState(new Set());

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => {
            const newSet = new Set(prev);
            if (newSet.has(sectionId)) {
                newSet.delete(sectionId);
            } else {
                newSet.add(sectionId);
            }
            return newSet;
        });
    };

    const toggleSubSection = (subSectionKey) => {
        setExpandedSubSections(prev => {
            const newSet = new Set(prev);
            if (newSet.has(subSectionKey)) {
                newSet.delete(subSectionKey);
            } else {
                newSet.add(subSectionKey);
            }
            return newSet;
        });
    };

    return (
        <div className="w-full p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">Conditions We Treat</h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                    View the wide array of conditions we treat, with quality and personalised physiotherapy treatment.
                    Every day, we are helping our patients recover and live their life again.
                </p>
            </div>

            {/* All Conditions Badge */}
            <div className="text-center mb-8">
                <span className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-semibold text-lg">
                    All Conditions
                </span>
            </div>

            {/* Main Conditions Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:items-start">
                {conditionsData.map((section) => (
                    // ✨ FIX: We now pass the state and toggle functions as props to the standalone ConditionCard component.
                    <ConditionCard
                        key={section.id}
                        section={section}
                        isExpanded={expandedSections.has(section.id)}
                        onToggle={toggleSection}
                        expandedSubSections={expandedSubSections}
                        onToggleSubSection={toggleSubSection}
                    />
                ))}
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Need Help with Your Condition?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Our experienced physiotherapists are here to help you recover and get back to living your best life.
                    Book a consultation today for personalized treatment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
                        Book Consultation
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors border border-gray-300">
                        Call Us Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConditionsSection;