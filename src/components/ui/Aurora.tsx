"use client";

export default function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]" aria-hidden="true">
      <div className="aurora-orb aurora-orb--cyan" />
      <div className="aurora-orb aurora-orb--violet" />
    </div>
  );
}
