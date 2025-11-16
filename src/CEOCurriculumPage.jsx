import React, { useState } from "react";

export default function CEOCurriculumPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-amber-600" />
            <div>
              <p className="text-sm tracking-wide uppercase text-neutral-500">Studio of Ruth</p>
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
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            The Creative CEO Incubator<br />Empowering Young Founders
          </h1>
          <p className="mt-5 text-lg text-neutral-700">
            Our signature <span className="font-semibold">Creative CEO Program</span> blends entrepreneurship, creative arts,
            and financial literacy. This page highlights our mission and framework while keeping proprietary curriculum
            content reserved for enrolled schools and students.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#pillars" className="rounded-full px-4 py-2 bg-neutral-900 text-white text-sm">Explore Pillars</a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-full px-4 py-2 border border-neutral-300 text-sm hover:bg-white"
            >
              Request Curriculum
            </button>
          </div>
        </div>

        <div className="md:pl-8">
          <div className="aspect-[4/3] rounded-2xl bg-white shadow-sm border border-neutral-200 p-6 grid grid-cols-2 gap-6">
            {["Entrepreneurship","Design Thinking","Financial Literacy","Creative Identity"].map((t) => (
              <div key={t} className="rounded-xl border border-neutral-200 p-4">
                <p className="text-sm font-semibold">{t}</p>
                <div className="mt-2 h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-amber-500/60" />
                </div>
                <p className="mt-3 text-xs text-neutral-500">Core strand, spiraled by age and skill level.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Five Core Pillars</h2>
        <p className="mt-3 text-sm text-neutral-600 md:w-3/4">
          These represent the foundation of our incubator model. Each pillar lists sample experiences, not full lessons.
          The complete roadmap and rubrics are shared upon partnership approval.
        </p>
        <div className="mt-8 grid md:grid-cols-5 gap-4">
          {[
            { title: "Creative Identity", bullets: ["Personal branding & storytelling","Vision boards & self-discovery","Art as communication"] },
            { title: "Entrepreneurial Mindset", bullets: ["Problem-solving through creativity","Goal setting & execution","Growth mindset training"] },
            { title: "Financial Literacy", bullets: ["Budgeting basics","Profit vs. cost","Youth micro-ventures"] },
            { title: "Design & Production", bullets: ["Product creation","Ethical sourcing","Packaging & presentation"] },
            { title: "Leadership & Impact", bullets: ["Team collaboration","Community engagement","Pitching ideas"] },
          ].map((p) => (
            <article key={p.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{p.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-neutral-500">Detailed modules shared with enrolled partners ✦</div>
            </article>
          ))}
        </div>
      </section>

      {/* STAGES */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Stages of Growth</h2>
          <p className="mt-2 text-sm text-neutral-600 md:w-3/4">
            The program adapts to the learner’s age and stage—whether they’re exploring identity, launching a brand, or scaling their first idea.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { stage: "Seed Stage", focus: ["Discover strengths","Basic business vocabulary","Simple art-based projects"] },
              { stage: "Build Stage", focus: ["Product design & prototyping","Logo and brand identity","Intro to cost & pricing"] },
              { stage: "Launch Stage", focus: ["Business planning","Marketing & storytelling","Pitch deck development"] },
            ].map((s) => (
              <div key={s.stage} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-semibold">{s.stage}</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {s.focus.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEX STRUCTURES */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Flexible Program Structures</h2>
          <p className="mt-2 text-sm text-neutral-600 md:w-3/4">
            The Creative CEO Program adapts to the format your school or family needs. Below are examples of how the curriculum can be structured without revealing internal lesson plans.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-neutral-700">
            <li className="flex gap-3"><span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">1</span><span><strong>16-Week Semester Program:</strong> 2–3 hours per week, ideal for hybrid and private schools.</span></li>
            <li className="flex gap-3"><span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">2</span><span><strong>12-Week Studio Series:</strong> Friday evenings at Studio of Ruth for emerging teen entrepreneurs.</span></li>
            <li className="flex gap-3"><span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">3</span><span><strong>Two-Week Summer Intensive:</strong> 6–8 hour immersive days blending business, design, and production.</span></li>
            <li className="flex gap-3"><span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-xs">4</span><span><strong>One-Semester or Year-long Elective:</strong> Weekly 60-minute classes focusing on entrepreneurship foundations.</span></li>
          </ul>
          <p className="mt-4 text-xs text-neutral-500">
            Each structure follows the same core philosophy—creative identity, entrepreneurship, financial literacy, leadership, and hands-on production—adapted for timing and depth.
          </p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="bg-white border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Graduate Outcomes</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {[
              { title: "Entrepreneurial Confidence", text: "Learners can articulate their ideas, plan a venture, and speak publicly about their work." },
              { title: "Financial Awareness", text: "Understands budgeting, pricing, and ethical profit; practices mindful spending." },
              { title: "Creative Leadership", text: "Applies empathy, communication, and purpose to build community impact." },
            ].map((c) => (
              <article key={c.title} className="rounded-2xl border border-neutral-200 p-6">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GUARDRAILS */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-2xl border border-neutral-200 bg-amber-50 p-6">
          <h3 className="font-semibold">Intellectual Property & Privacy</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-600" /><span>Only program overviews and outcomes are public.</span></li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-600" /><span>Full lesson plans, slide decks, and budgets shared under NDA or post-enrollment.</span></li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-600" /><span>All student identities remain protected per consent policy.</span></li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Studio of Ruth · All rights reserved.</p>
          <div className="text-neutral-500">Atlanta, GA · info@studioofruth.com</div>
        </div>
      </footer>

      {/* MODAL — Email or Call only */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 grid place-items-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-neutral-200 p-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold">Request the Full Curriculum</h3>
                <p className="mt-1 text-sm text-neutral-600">
                  We share the full curriculum with schools and parents directly. Contact us and we’ll send next steps (NDA if needed).
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-neutral-400 hover:text-neutral-600"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Buttons */}
            <div className="mt-6 grid gap-3">
              <a
                href="mailto:info@studioofruth.com?subject=Curriculum%20Request%20%E2%80%94%20Creative%20CEO%20Program&body=Hi%20Studio%20of%20Ruth%2C%0A%0AWe%E2%80%99re%20interested%20in%20the%20Creative%20CEO%20Program.%20Please%20share%20next%20steps.%0A%0AName%3A%0ASchool%2FOrganization%3A%0ARole%3A%0APhone%3A%0AIdeal%20start%20date%3A%0A%0AThank%20you!"
                className="rounded-full px-4 py-2 text-center text-white text-sm font-medium"
                style={{ background: "#B86B32" }}
              >
                Email info@studioofruth.com
              </a>

              <a
                href="tel:+13176702196"
                className="rounded-full px-4 py-2 text-sm border text-center"
                style={{ borderColor: "#d4d4d4" }}
              >
                Call (317) 670–2196
              </a>

              <button
                onClick={() => setOpen(false)}
                className="rounded-full px-4 py-2 text-sm border"
                style={{ borderColor: "#d4d4d4" }}
              >
                Not now
              </button>
            </div>

            {/* Support note */}
            <p className="mt-3 text-xs text-neutral-500">
              Typical reply within 1–2 business days. Atlanta, GA.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
