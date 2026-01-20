"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Folder } from "lucide-react";
import WireframeIllustration from "./WireframeIllustration";

interface Certificate {
  title: string;
  date?: string;
  verificationLink?: string;
  category: string;
}

interface CertificateCategory {
  name: string;
  description?: string;
  link: string;
  certificates: Certificate[];
}

const certificateCategories: CertificateCategory[] = [
  {
    name: "IIT Guwahati",
    description: "Daksh Gurukul Cyber Security",
    link: "https://drive.google.com/drive/folders/1e-6fAj7Pr_V7F1qnWjibOacSLxRvTH_L?usp=sharing",
    certificates: [
      {
        title: "Cyber Security Course – Daksh Gurukul",
        date: "June 2024 – March 2025",
        verificationLink: "https://drive.google.com/file/d/1hl3MA6USpsGRPzIDr0OVhjf5f4A2KAD7/view?usp=sharing",
        category: "Advanced Cybersecurity · Government-backed",
      },
    ],
  },
  {
    name: "IIT Patna",
    description: "Blockchain Research Internship",
    link: "https://drive.google.com/drive/folders/1e-6fAj7Pr_V7F1qnWjibOacSLxRvTH_L?usp=sharing",
    certificates: [
      {
        title: "Internship Completion Letter",
        date: "May 13, 2024 – June 29, 2024",
        verificationLink: "https://drive.google.com/file/d/1UkyVFQToiEhyx_c4cx6Tk4jVmTre9gvk/view?usp=sharing",
        category: "Blockchain · Smart Contracts · Research",
      },
    ],
  },
  {
    name: "Google-Coursera",
    description: "Google Cybersecurity Professional",
    link: "https://drive.google.com/drive/folders/1eVXRlI-TibL3nw18R7X_EqZU2mkH77l5?usp=sharing",
    certificates: [
      {
        title: "Foundations of Cybersecurity",
        date: "January 23, 2024",
        verificationLink: "https://coursera.org/verify/MQ7DQUFWP8ZL",
        category: "Cybersecurity",
      },
      {
        title: "Play It Safe: Manage Security Risks",
        date: "January 29, 2024",
        verificationLink: "https://coursera.org/verify/9EVZRS3RW638",
        category: "Risk Management",
      },
      {
        title: "Connect and Protect: Networks and Network Security",
        date: "February 24, 2024",
        verificationLink: "https://coursera.org/verify/QYCGEVHBCZ78",
        category: "Networking",
      },
      {
        title: "Tools of the Trade: Linux and SQL",
        date: "April 10, 2024",
        verificationLink: "https://coursera.org/verify/L7DLP3PZMTXK",
        category: "Linux · SQL",
      },
    ],
  },
  {
    name: "Simpli Learn",
    description: "Post Graduate Program",
    link: "https://drive.google.com/drive/folders/1OkKmb9bLvkoFeAWOiETYA3w9Nc4YSY0X?usp=sharing",
    certificates: [
      {
        title: "MIT Post Graduate Program",
        date: "March 1, 2024",
        verificationLink: "https://success.simplilearn.com/41a88305-9d75-488f-a01a-ccba6d0927c4",
        category: "Professional Certification (MIT & EC-Council)",
      },
      {
        title: "Python for Beginners",
        date: "July 23, 2024",
        verificationLink: "https://simpli-web.app.link/e/dWWPS0c44Zb",
        category: "Python Programming · Foundations",
      },
      {
        title: "Steer Your Cyber Security Career Ahead in 2024 with Caltech Cyber Security Bootcamp",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1pt8Ia5fxOh5H3g_xgYOMRCbF2T-Q5kmq/view?usp=sharing",
        category: "Career Development",
      },
      {
        title: "Your Career Journey",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1ZXjgWQ9akt4fN3Uyy-hKXVvvHh0QOce1/view?usp=sharing",
        category: "Career Development",
      },
      {
        title: "Demonstrate Your Technical",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1lx-pLOZIl6bJhvR0HzJFMvBU96vhZ81s/view?usp=sharing",
        category: "Technical Skills",
      },
      {
        title: "Capstone Project",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1Pyu6hO_KRKjGA-N6S0EiFKEjKhXTkpJp/view?usp=sharing",
        category: "Project Work",
      },
      {
        title: "Hacker Mindset",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1elLzDMj4qhnRTEJN_I00qBSFekVjE-uR/view?usp=sharing",
        category: "Ethical Hacking",
      },
      {
        title: "Design Systems",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1dUCdOn3uG0RfWr88XuGQQr2eeqHvkG9O/view?usp=sharing",
        category: "System Design",
      },
      {
        title: "Induction",
        date: "February 14, 2024",
        verificationLink: "https://drive.google.com/file/d/1bWuBCuF4tQbYBsYv-j4tU8Aw2TFPrKj9/view?usp=sharing",
        category: "Program Introduction",
      },
    ],
  },
  {
    name: "Forage",
    description: "Virtual Work Experience Programs",
    link: "https://drive.google.com/file/d/1Ro8hM3_iR1zsoFu5DUAeasjxu3CqGdyD/view?usp=sharing",
    certificates: [
      {
        title: "Virtual Work Experience Program",
        date: "2024",
        verificationLink: "https://drive.google.com/file/d/1bWuBCuF4tQbYBsYv-j4tU8Aw2TFPrKj9/view?usp=sharing",
        category: "Work Experience",
      },
    ],
  },
  {
    name: "Teachnook",
    description: "Cybersecurity Training",
    link: "https://drive.google.com/file/d/1S6SCQ2i3XLTDfGlH2Xn4F0BjRec3ihca/view?usp=sharing",
    certificates: [
      {
        title: "Cybersecurity Training Certificate",
        date: "2024",
        verificationLink: "https://drive.google.com/file/d/1Ro8hM3_iR1zsoFu5DUAeasjxu3CqGdyD/view?usp=sharing",
        category: "Cybersecurity Training",
      },
    ],
  },
  {
    name: "Dristi",
    description: "NGO - Social Work & Leadership",
    link: "https://drive.google.com/drive/folders/1e-6fAj7Pr_V7F1qnWjibOacSLxRvTH_L?usp=sharing",
    certificates: [
      {
        title: "Social Work & Leadership Certificate",
        date: "2022 – 2024",
        verificationLink: "https://drive.google.com/file/d/1S6SCQ2i3XLTDfGlH2Xn4F0BjRec3ihca/view?usp=sharing",
        category: "Social Work · Leadership",
      },
    ],
  },
  {
    name: "Webinars",
    description: "Professional Development Webinars",
    link: "https://drive.google.com/drive/folders/1e-6fAj7Pr_V7F1qnWjibOacSLxRvTH_L?usp=sharing",
    certificates: [],
  },
];

export default function Certificates() {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const initialTab = certificateCategories.find(cat => cat.certificates.length > 0)?.name || certificateCategories[0].name;
    setActiveTab(initialTab);
  }, []);

  const activeCategory = certificateCategories.find(cat => cat.name === activeTab);

  return (
    <section id="certificates" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Ambient blue light background */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <div className="pd-section-bg-pattern" />
      </div>
      <WireframeIllustration />
      <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Award className="text-blue-400" size={28} />
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Certificates
            </h2>
          </div>
          <p className="text-zinc-500 text-lg font-medium max-w-4xl">
            Professional certifications and training programs from leading institutions and platforms. 
            Verified credentials in cybersecurity, blockchain, and social leadership.
          </p>
        </div>

        <div className="relative mb-16 flex items-center">
          <div className="absolute left-0 right-0 h-[1px] border-b border-dashed border-zinc-800 z-0" />
          
          <div className="relative z-10 flex flex-wrap gap-4">
            {certificateCategories
              .filter(cat => cat.certificates.length > 0)
              .map((category) => {
                const isActive = isMounted && activeTab === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveTab(category.name)}
                    className={`px-6 py-2.5 rounded-full border transition-all duration-300 text-[13px] font-bold tracking-tight ${
                      isActive
                        ? "bg-white text-black border-white"
                        : "bg-black text-white border-white/20 hover:border-white/40"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
          </div>
        </div>

        {isMounted && activeCategory && (
          <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-10 md:p-12 min-h-[600px] flex flex-col lg:flex-row gap-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col lg:flex-row gap-12"
              >
                <div className="lg:w-2/5">
                  <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">
                    {activeCategory.name}
                  </h3>
                  {activeCategory.description && (
                    <p className="text-zinc-400 text-lg leading-relaxed mb-12">
                      {activeCategory.description}
                    </p>
                  )}

                  <div className="pt-12 border-t border-white/5">
                    <h4 className="text-white font-bold mb-8 text-lg">Certification Details</h4>
                    <ul className="space-y-6">
                      <li className="flex gap-4 text-zinc-400 text-[17px] leading-relaxed">
                        <span className="text-zinc-600 mt-1.5 flex-shrink-0">•</span>
                        {activeCategory.certificates.length} certificate{activeCategory.certificates.length > 1 ? 's' : ''} from {activeCategory.name}{activeCategory.name === "Dristi" ? " NGO" : ""}
                      </li>
                      <li className="flex gap-4 text-zinc-400 text-[17px] leading-relaxed">
                        <span className="text-zinc-600 mt-1.5 flex-shrink-0">•</span>
                        Verified credentials with professional validation
                      </li>
                      <li className="flex gap-4 text-zinc-400 text-[17px] leading-relaxed">
                        <span className="text-zinc-600 mt-1.5 flex-shrink-0">•</span>
                        {activeCategory.name === "Dristi" 
                          ? "Recognition for dedicated community service and leadership contributions"
                          : "Comprehensive training in cybersecurity and related fields"}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:w-3/5 bg-[#09090b] rounded-xl border border-white/5 p-8 flex flex-col shadow-2xl">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <div className="flex flex-col gap-1">
                      <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        {activeCategory.name} Certifications
                      </p>
                      <div className="flex gap-3">
                        <span className="text-zinc-400 text-xs py-1 px-3 bg-zinc-900 border border-white/5 rounded flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-zinc-700" /> {activeCategory.certificates.length} Total
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                    {activeCategory.certificates.length > 0 ? (
                      <>
                        <div className="flex items-center gap-3 text-zinc-400 text-xs mb-6">
                          <span className="w-4 h-4 rounded-full border border-zinc-700 flex items-center justify-center text-[10px]">✓</span>
                          Certificates verified
                          <span className="ml-auto text-zinc-600">{activeCategory.certificates.length} items</span>
                        </div>

                        {activeCategory.certificates.map((cert, idx) => (
                          <div 
                            key={idx} 
                            className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 shadow-lg shadow-black/20"
                            style={{
                              background: "rgba(255, 255, 255, 0.03)",
                              backdropFilter: "blur(16px)",
                              WebkitBackdropFilter: "blur(16px)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                              e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.15), 0 0 90px rgba(255, 255, 255, 0.1), 0 0 120px rgba(255, 255, 255, 0.05)";
                              e.currentTarget.style.transform = "translateY(-2px)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
                              e.currentTarget.style.transform = "translateY(0)";
                            }}
                          >
                            <div className="flex gap-3 mb-4">
                              <span className="text-blue-500 mt-1">📜</span>
                              <h5 className="text-white font-bold text-[15px]">{cert.title}</h5>
                            </div>
                            <div className="space-y-2 pl-7">
                                {cert.date && (
                                  <p className="text-zinc-500 text-sm leading-relaxed">
                                    <span className="text-zinc-400 font-medium">
                                      {activeCategory.name === "Dristi" ? "Duration: " : "Date: "}
                                    </span>
                                    {cert.date}
                                  </p>
                                )}
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                  <span className="text-zinc-400 font-medium">Category: </span>
                                  {cert.category}
                                </p>
                                {cert.verificationLink && (
                                  <div className="mt-4">
                                    <a
                                      href={cert.verificationLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300 text-xs font-medium"
                                    >
                                      <ExternalLink size={14} />
                                      Verify Certificate
                                    </a>
                                  </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-zinc-500 text-sm">No certificates available for this category.</p>
                      </div>
                    )}
                  </div>

                  {activeCategory.certificates.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <a
                        href={activeCategory.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs font-medium"
                      >
                        <Folder size={14} />
                        View All in Google Drive
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
