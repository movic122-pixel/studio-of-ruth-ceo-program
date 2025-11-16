import React, { useState } from "react";

export default function CEOCurriculumPage() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="text-neutral-800 w-full"
      style={{ background: "transparent" }}
    >
      {/* Force the embed to behave like native content */}
      <style>{`
        html, body { 
          height: auto !important; 
          overflow: visible !important; 
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-[9999] backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-600" />
            <div>
              <p className="text-sm tracking-wide uppercase text-neutral-500">
                Studio of Ruth
              </p>
              <p className="font-semibold">Creative CEO Incubator Program</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full px-4 py-2 bg-amber-600 text-white text-sm font-medium shadow hover:bg-amber-700"
          >
            Request Full Curriculum
          </button>
        </div>
