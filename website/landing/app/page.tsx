"use client";

import { useEffect } from "react";

export default function FullWarningPage() {
  useEffect(() => {
    // prevent scroll and interactions underneath
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center bg-black text-white p-6"
      aria-live="assertive"
      role="alert"
    >
      <div className="max-w-[1200px] w-full">
        <div className="w-full rounded-2xl p-6 md:p-12 bg-gradient-to-br from-black via-zinc-900/80 to-zinc-800/90 border border-red-700 shadow-2xl">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="select-none font-extrabold tracking-tight leading-none text-red-500 text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] xl:text-[120px]">
              WE DON'T HAVE ANY TOKENS
            </h1>

            <h2 className="select-none font-black text-white text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px]">
              ALL SCAM ON pumpful — THIS PROJECT IS ABANDONED
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-3xl">
              This is not a drill. There are no tokens. This project is dead/abandoned and
              interactions may be fraudulent. Do NOT send funds, do not share private keys or
              seed phrases. Consider this site compromised — treat as scam.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // simple copy-to-clipboard of a ready-to-share warning text
                  const text = `WE DON'T HAVE ANY TOKENS — ALL SCAM ON pumpful. PROJECT ABANDONED. DO NOT SEND FUNDS.`;
                  try {
                    navigator.clipboard.writeText(text);
                    alert("Warning copied to clipboard. Paste anywhere to warn others.");
                  } catch {
                    alert("Copy unavailable — please select and copy this message manually.");
                  }
                }}
                className="inline-block rounded-lg px-6 py-3 bg-red-600 hover:bg-red-700 font-bold shadow"
              >
                Copy warning text
              </a>

              <a
                href="https://pumpful"
                onClick={(e) => {
                  // confirm before opening the possibly malicious site
                  if (!confirm("You are about to open pumpful. Proceed?")) e.preventDefault();
                }}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg px-6 py-3 border border-zinc-700 text-zinc-100 hover:bg-zinc-900"
              >
                Open pumpful (careful)
              </a>
            </div>

            <footer className="mt-6 text-xs text-zinc-400">
              Shout: like shit — message intentionally blunt.
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
