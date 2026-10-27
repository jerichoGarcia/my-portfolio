export const portfolio = {
  name: "Jericho Garcia",
  initials: "JG",
  role: "IT Specialist",
  profileImage: "/jericho-garcia-profile.png",
  email: "your.email@example.com",
  introLabel: "Hello, I'm Jericho",
  intro:
    "Passionate about technology, IT solutions, troubleshooting, and building practical digital experiences. Focused on solving problems, improving systems, and continuously learning new technologies.",
  about:
    "I am an IT Specialist interested in helping people and teams make technology work better. My focus spans technical support, hardware and software troubleshooting, computer systems maintenance, networking, system administration, and web development.",
  aboutPoints: ["Thoughtful technical support and clear problem solving", "Reliable systems, maintenance, and configuration", "Practical web experiences built with modern tools"],
  socials: [
    { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com", icon: "mail" },
    { label: "GitHub", value: "github.com/your-username", href: undefined, icon: "github" },
    { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: undefined, icon: "linkedin" },
  ],
} as const;

export const navigation = [
  { label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Skills", href: "#skills" }, { label: "Projects", href: "#projects" }, { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  { icon: "wrench", title: "IT Support", skills: ["Hardware Troubleshooting", "Software Installation", "Windows Troubleshooting", "System Maintenance"] },
  { icon: "network", title: "Networking & Systems", skills: ["Basic Networking", "Network Troubleshooting", "System Configuration"] },
  { icon: "code", title: "Web Development", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { icon: "monitor", title: "Tools & Technologies", skills: ["Visual Studio Code", "Git & GitHub", "Windows", "Microsoft Office"] },
] as const;

export const projects = [
  { title: "Client Management System", description: "A web-based application for organizing client information, managing records, and tracking client statuses.", tags: ["Web Application", "Client Records", "Workflow"], visual: "records" },
  { title: "IT Support & Troubleshooting", description: "A collection of technical support work, troubleshooting processes, and practical IT solutions.", tags: ["IT Support", "Diagnostics", "Documentation"], visual: "support" },
  { title: "Personal Portfolio", description: "A modern personal portfolio built using Next.js, TypeScript, and Tailwind CSS.", tags: ["Next.js", "TypeScript", "Tailwind CSS"], visual: "portfolio" },
] as const;
