import { Email, GitHub, LinkedIn, Resume } from "./icons";
import { Config } from "./types";

export const config: Config = {
  name: {
    display: "Jack Moletteire",
  },
  title: {
    display: "Software Developer",
  },
  buttons: [
    {
      name: "github",
      display: "GitHub",
      ariaLabel: "GitHub profile (opens in new window)",
      icon: GitHub,
      href: "https://github.com/jmoletteire/",
    },
    {
      name: "linked-in",
      display: "LinkedIn",
      ariaLabel: "LinkedIn profile (opens in new window)",
      icon: LinkedIn,
      href: "https://linkedin.com/in/jack-moletteire/",
    },
    {
      name: "resume",
      display: "Resume",
      ariaLabel: "Resume in Google Drive (opens in new window)",
      icon: Resume,
      href: "https://drive.google.com/file/d/1jkeGqRDXT4As7QxHMBraia79RSuu5wNG/view?usp=drive_link",
    },
    {
      name: "email",
      display: "Email",
      ariaLabel: "Email contact (opens in new window)",
      icon: Email,
      href: "mailto:jackmole@outlook.com",
    },
  ],
};
