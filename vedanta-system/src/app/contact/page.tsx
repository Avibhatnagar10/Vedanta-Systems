"use client";

import { useState } from "react";
import { Calendar, MapPin, Building, X, Loader2 } from "lucide-react";

// --- Data Types for State ---
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type JoinFormData = {
  name: string;
  email: string;
  role: string;
  notes: string;
};

// --- Company Profile Data (edit here or bind to CMS) ---
const companyInfo = {
  ownerName: "Ashish Bhatnagar",
  foundedYear: "2007",
  location: "Udaipur, Rajasthan",
  email: "vedantasystems@gmail.com",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Udaipur+Rajasthan",
  imageUrl: "/ashish.jpg",
};

// --- Reusable UI Components ---

// Reusable Input Component
const Input = (props: React.ComponentProps<"input"> & { label: string }) => (
  <div>
    <label className="text-xs uppercase tracking-wider text-white/60">
      {props.label}
    </label>
    <input
      {...props}
      className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 disabled:opacity-50"
    />
  </div>
);

// Reusable Textarea Component
const Textarea = (
  props: React.ComponentProps<"textarea"> & { label: string },
) => (
  <div>
    <label className="text-xs uppercase tracking-wider text-white/60">
      {props.label}
    </label>
    <textarea
      {...props}
      className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none resize-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 disabled:opacity-50"
    />
  </div>
);

// Reusable Form Card Component
const FormCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 lg:p-8 transition hover:shadow-[0_0_24px_rgba(59,130,246,0.20)]">
    <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
    {children}
  </div>
);

// Dedicated Portfolio Upload Component
const PortfolioUpload = ({
  file,
  onFileChange,
  onClearFile,
  showModal,
}: {
  file: File | null;
  onFileChange: (file: File) => void;
  onClearFile: () => void;
  showModal: (message: string) => void;
}) => {
  const handleFileValidation = (selectedFile: File | null) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(selectedFile.type)) {
      showModal("Error: Only PDF/DOC/DOCX files are allowed!");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      // 5MB
      showModal("Error: File size must be less than 5MB!");
      return;
    }

    onFileChange(selectedFile);
  };

  const handleLocalUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileValidation(e.target.files[0]);
      e.target.value = ""; // Reset file input
    }
  };

  

  return (
    <div className="p-4 border border-white/20 rounded-xl bg-black/40 flex flex-col gap-3">
      <label className="text-xs uppercase tracking-wider text-white/60">
        Portfolio / Resume (PDF, DOC, DOCX up to 5MB)
      </label>
      <div className="flex flex-col md:flex-row gap-3">
        <label
          htmlFor="localFileInput"
          className="cursor-pointer text-center px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-medium transition"
        >
          Upload from Device
        </label>
        <input
          type="file"
          id="localFileInput"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={handleLocalUpload}
        />
        
      </div>
      {file && (
        <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg text-sm mt-2">
          <p className="text-white/80 truncate pr-2">
            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>
          <button
            type="button"
            onClick={onClearFile}
            className="p-1 rounded-full text-white/60 hover:bg-red-500/50 hover:text-white transition"
            aria-label="Remove file"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

// --- Main Page Component ---
export default function ContactPage() {
  // --- Form States ---
  const [contact, setContact] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [join, setJoin] = useState<JoinFormData>({
    name: "",
    email: "",
    role: "",
    notes: "",
  });
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Modal State ---
  const [modal, setModal] = useState({ show: false, message: "" });

  function showModal(message: string) {
    setModal({ show: true, message });
    setTimeout(() => {
      setModal({ show: false, message: "" });
    }, 4000); // Increased duration for readability
  }

  // --- Form Submission Handlers ---
  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("CONTACT_SUBMIT", { ...contact });
    showModal(`Thanks, ${contact.name}! We'll reach you at ${contact.email}.`);

    setContact({ name: "", email: "", message: "" }); // Clear form
    setIsSubmitting(false);
  }

  async function handleJoinSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call with file upload
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("JOIN_SUBMIT", { ...join, file: portfolioFile?.name });
    showModal(`Application received, ${join.name}! We'll review it and get back to you.`);

    setJoin({ name: "", email: "", role: "", notes: "" }); // Clear form
    setPortfolioFile(null);
    setIsSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-[#07090c] text-white relative overflow-x-hidden font-sans">
      {/* Background flair */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.20),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Custom Modal for Notifications */}
      {modal.show && (
        <div className="fixed top-5 right-5 z-50 bg-blue-500 text-white rounded-lg shadow-lg p-4 animate-fade-in-down">
          {modal.message}
        </div>
      )}

      <header className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center px-6 pt-16 pb-6">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Vedanta Systems
          </span>
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl">
          Have a project in mind or want to join our team? We’d love to hear
          from you.
        </p>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {/* --- Company Profile Card --- */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-shadow">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={companyInfo.imageUrl}
                alt={companyInfo.ownerName}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-lg shrink-0"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold tracking-wide">
                  {companyInfo.ownerName}
                </h2>
                <p className="text-white/70 text-lg">Company Owner</p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-inner grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  Icon: Calendar,
                  label: "Founded",
                  value: companyInfo.foundedYear,
                },
                {
                  Icon: Building,
                  label: "Location",
                  value: companyInfo.location,
                },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{label}</p>
                    <p className="font-semibold text-white text-base">
                      {value || "—"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${companyInfo.email}`}
                className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 text-center transition flex items-center justify-center gap-2"
              >
                Email Us
              </a>
              <a
                href={companyInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-3 text-center transition flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Find on Map
              </a>
            </div>
          </div>

          {/* --- Contact Us Form --- */}
          <FormCard title="Get in Touch">
            <form
              onSubmit={handleContactSubmit}
              className="mt-6 grid grid-cols-1 gap-5"
            >
              <Input
                required
                label="Your Name"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                disabled={isSubmitting}
              />
              <Input
                required
                type="email"
                label="Email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                disabled={isSubmitting}
              />
              <Textarea
                required
                rows={5}
                label="Message"
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-between gap-3 pt-2">
                <p className="text-xs text-white/40">
                  We usually reply within 24–48 hours.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full px-5 py-3 font-semibold tracking-wide bg-blue-500/90 hover:bg-blue-500 text-[#0b1016] shadow-[0_0_20px_rgba(59,130,246,0.35)] transition flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </FormCard>

          {/* --- Join Us Form --- */}
          <FormCard title="Join Our Team">
            <form
              onSubmit={handleJoinSubmit}
              className="mt-6 grid grid-cols-1 gap-5"
            >
              <Input
                required
                label="Full Name"
                value={join.name}
                onChange={(e) => setJoin({ ...join, name: e.target.value })}
                disabled={isSubmitting}
              />
              <Input
                required
                type="email"
                label="Email"
                value={join.email}
                onChange={(e) => setJoin({ ...join, email: e.target.value })}
                disabled={isSubmitting}
              
              />
              <Input
                label="Applying for Role"
                // placeholder="e.g., Frontend Developer"
                value={join.role}
                onChange={(e) => setJoin({ ...join, role: e.target.value })}
                disabled={isSubmitting}
                
              />
              <PortfolioUpload
                file={portfolioFile}
                onFileChange={setPortfolioFile}
                onClearFile={() => setPortfolioFile(null)}
                showModal={showModal}
                
              />
              <Textarea
                rows={4}
                label="Additional Notes"
                placeholder="Tell us why you'd be a great fit..."
                value={join.notes}
                onChange={(e) => setJoin({ ...join, notes: e.target.value })}
                disabled={isSubmitting}
              />
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                onClick={() => {
                  if(!portfolioFile){
                    alert("Please upload your portfolio or resume before submitting.");
                    return; 
                  }
                  console.log("File sumbitted:", portfolioFile?.name);
                }
                }
                  type="submit"
                  disabled={isSubmitting || !portfolioFile}
                  className="rounded-full px-5 py-3 font-semibold tracking-wide bg-blue-500/90 hover:bg-blue-500 text-[#0b1016] shadow-[0_0_20px_rgba(59,130,246,0.35)] transition flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </FormCard>
        </div>
      </main>

      <footer className="relative z-10 py-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Vedanta Systems. All rights reserved.
      </footer>
    </div>
  );
}