import { useState, useEffect } from "react";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the announcement in this session
    const dismissed = sessionStorage.getItem("announcement-dismissed");
    if (dismissed) {
      setIsVisible(false);
      setIsDismissed(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcement-dismissed", "true");
    setTimeout(() => setIsDismissed(true), 300);
  };

  if (isDismissed) return null;

  return (
    <div
      className={`bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-300 ${
        isVisible ? "h-12" : "h-0 overflow-hidden"
      }`}
    >
      <div className="container-custom h-full flex items-center justify-center relative">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>🎓</span>
          <span>Now VTU Accredited — Enroll today and get certified</span>
        </div>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
