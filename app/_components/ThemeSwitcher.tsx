"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed right-5 bottom-5 z-[9999]">
      <button
        onClick={toggleTheme}
        type="button"
        className="group border-primary-200 bg-primary-50 hover:border-accent-300 focus:ring-accent-500 dark:border-primary-700 dark:bg-primary-800 dark:hover:border-accent-600 dark:focus:ring-accent-400 dark:focus:ring-offset-primary-900 relative flex h-12 w-12 items-center justify-center rounded-full border p-2.5 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none md:h-14 md:w-14 md:p-3 lg:h-16 lg:w-16 lg:p-3.5"
        aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
      >
        {currentTheme === "dark" ? (
          <SunIcon className="h-6 w-6 text-amber-400 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        ) : (
          <MoonIcon className="h-6 w-6 text-slate-600 md:h-7 md:w-7 lg:h-8 lg:w-8 dark:text-slate-400" />
        )}

        <div className="from-accent-400 to-accent-600 dark:from-accent-500 dark:to-accent-700 absolute -inset-1 rounded-full bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
