import React, { useState, useEffect } from "react";
import { ExternalLink, Menu, X, HelpCircle, History, Sparkles, ArrowRight, User } from "lucide-react";

interface NavbarProps {
  onOpenPhilosophy: () => void;
  onOpenHistory: () => void;
  historyCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPhilosophy,
  onOpenHistory,
  historyCount,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when menu drawer is open on small screens
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#problem", label: "The Problem", number: "01" },
    { href: "#how-it-works", label: "How It Works", number: "02" },
    { href: "#metric", label: "DayScore Metric", number: "03" },
    { href: "#squads", label: "Streaks & Squads", number: "04" },
    { href: "#privacy", label: "Data Privacy", number: "05" },
    { href: "#demo", label: "Live Sandbox", number: "06", highlight: true },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Clean, minimalist Navigation Bar across ALL screen sizes */}
      <nav className="bg-[#F9F6F0]/95 backdrop-blur-md border-b border-[#E6DDCF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <div className="flex items-center">
            <a href="#" className="flex items-center group">
              <span className="font-serif-gelasio font-bold text-xl sm:text-2xl tracking-tight text-[#2C2721] hover:text-[#B69168] transition-colors">
                BaBU <span className="text-[#B69168] font-sans font-normal text-base sm:text-lg">• DayScore</span>
              </span>
            </a>
          </div>

          {/* Right: Only the 'Three Lines' Menu Toggle for Desktop, Tablet & Mobile */}
          <div className="flex items-center gap-3">
            {historyCount > 0 && (
              <button
                type="button"
                id="btn-quick-nav-history"
                onClick={onOpenHistory}
                className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-[#5C5446] hover:text-[#2C2721] bg-[#EDE5D8]/70 hover:bg-[#EDE5D8] border border-[#D3C5B6] transition-colors cursor-pointer"
                title="View local logs"
              >
                <History className="w-3.5 h-3.5 text-[#B69168]" />
                <span>Logs ({historyCount})</span>
              </button>
            )}

            <button
              type="button"
              id="btn-nav-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-[#2C2721] hover:text-white bg-[#EDE5D8] hover:bg-[#2C2721] transition-all cursor-pointer border border-[#D3C5B6] shadow-xs group"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">
                {menuOpen ? "Close" : "Menu"}
              </span>
              {menuOpen ? (
                <X className="w-5 h-5 text-[#2C2721] group-hover:text-white transition-colors" />
              ) : (
                <Menu className="w-5 h-5 text-[#2C2721] group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen / Slide-over Menu Drawer (Desktop & Mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 top-18 z-40 bg-[#2C2721]/50 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div
            className="w-full max-w-md bg-[#F9F6F0] h-[calc(100vh-4.5rem)] shadow-2xl border-l border-[#E6DDCF] flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Creator Card */}
              <div className="bg-[#EDE5D8] rounded-2xl p-4 border border-[#D3C5B6] flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2C2721] text-[#F9F6F0] flex items-center justify-center font-bold text-sm shrink-0">
                    <User className="w-5 h-5 text-[#D4A373]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#786F63] block">
                      Creator & Developer
                    </span>
                    <h4 className="font-serif-gelasio font-bold text-sm text-[#2C2721]">
                      Aarogya Parajuli
                    </h4>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#2C2721] text-[#F9F6F0] text-[10px] font-semibold tracking-wide">
                  Author
                </span>
              </div>

              {/* Navigation Links */}
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#786F63] uppercase tracking-wider block">
                  Navigation
                </span>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium text-sm group ${
                        link.highlight
                          ? "bg-[#2C2721] text-[#F9F6F0] hover:bg-[#B69168]"
                          : "text-[#484237] hover:bg-[#EDE5D8] hover:text-[#2C2721]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs ${
                            link.highlight ? "text-[#D4A373]" : "text-[#B69168]"
                          }`}
                        >
                          {link.number}
                        </span>
                        <span className="font-serif-gelasio text-base">{link.label}</span>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                          link.highlight ? "text-white" : "text-[#786F63]"
                        }`}
                      />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Secondary Actions: Philosophy & History */}
              <div className="pt-4 border-t border-[#E6DDCF] space-y-2">
                <span className="text-[11px] font-bold text-[#786F63] uppercase tracking-wider block">
                  Quick Actions
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onOpenPhilosophy();
                      setMenuOpen(false);
                    }}
                    className="px-3 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF] hover:border-[#B69168] hover:bg-[#EDE5D8] transition-all text-xs text-[#2C2721] font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#B69168]" />
                    <span>Philosophy</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onOpenHistory();
                      setMenuOpen(false);
                    }}
                    className="px-3 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6DDCF] hover:border-[#B69168] hover:bg-[#EDE5D8] transition-all text-xs text-[#2C2721] font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <History className="w-3.5 h-3.5 text-[#B69168]" />
                    <span>Logs ({historyCount})</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Official Link */}
            <div className="p-6 bg-[#EDE5D8] border-t border-[#D3C5B6] space-y-3">
              <a
                href="https://dayscore.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider bg-[#2C2721] text-[#F9F6F0] hover:bg-[#B69168] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Launch dayscore.ai.studio</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#D4A373]" />
              </a>

              <p className="text-[11px] text-[#786F63] text-center">
                Crafted with intention by{" "}
                <strong className="text-[#2C2721]">Aarogya Parajuli</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
