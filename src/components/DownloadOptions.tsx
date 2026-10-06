import {type DownloadOS, type Project} from "../data/projects.ts";
import {useLanguage} from "../i18n/LanguageContext.tsx";
import type {ReactNode} from "react";
import LinuxIcon from "./icons/LinuxIcon.tsx";
import AndroidIcon from "./icons/AndroidIcon.tsx";
import WindowsIcon from "./icons/WindowsIcon.tsx";

interface Platform {
  label: string;
  icon: ReactNode;
}

const PLATFORMS: Record<DownloadOS, Platform> = {
  windows: {label: "Windows", icon: <WindowsIcon/>},
  linux: {label: "Linux", icon: <LinuxIcon/>},
  android: {label: "Android", icon: <AndroidIcon/>},
};

export default function DownloadOptions({downloadUrls}: { downloadUrls: Project["downloadUrls"] }) {
  const {t} = useLanguage();

  if (!downloadUrls?.length) return null;

  return (
    <div className="mt-4 border-t border-line pt-4 dark:border-line-dark">
      <p className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-bone-soft">
        {t.projects.downloadFor}
      </p>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {downloadUrls.map((download) => (
          <a
            key={download.platform}
            href={download.url}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-teal hover:text-teal dark:border-line-dark dark:text-bone-soft dark:hover:border-teal-dark dark:hover:text-teal-dark"
          >
            {PLATFORMS[download.platform].icon}
            {PLATFORMS[download.platform].label}
          </a>
        ))}
      </div>
    </div>
  );
}