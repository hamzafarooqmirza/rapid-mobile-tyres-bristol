"use client";

export default function CookieSettingsLink() {
  function openSettings() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-settings"));
    }
  }

  return (
    <button
      type="button"
      onClick={openSettings}
      className="hover:text-orange-500 text-left"
    >
      Cookie Settings
    </button>
  );
}
