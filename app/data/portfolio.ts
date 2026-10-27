export const portfolio = {
  name: "Jericho Garcia",
  initials: "JG",
  role: "IT Specialist",
  profileImage: "/jericho-garcia-profile.png",
  email: "personal.garciajericho@gmail.com",
  introLabel: "Hello, I'm Jericho",
  intro:
    "Passionate about technology, IT solutions, troubleshooting, and building practical digital experiences. Focused on solving problems, improving systems, and continuously learning new technologies.",
  about:
    "I am an IT Specialist interested in helping people and teams make technology work better. My focus spans technical support, hardware and software troubleshooting, computer systems maintenance, networking, system administration, and web development.",
  aboutPoints: ["Thoughtful technical support and clear problem solving", "Reliable systems, maintenance, and configuration", "Practical web experiences built with modern tools"],
  contacts: [
    { label: "Email", value: "personal.garciajericho@gmail.com", href: "mailto:personal.garciajericho@gmail.com", icon: "mail", external: false },
    { label: "Phone", value: "+639054190506", href: "tel:+639054190506", icon: "phone", external: false },
    { label: "Location", value: "South Caloocan, Metro Manila, Philippines", href: "https://maps.google.com/?q=South+Caloocan,+Metro+Manila,+Philippines", icon: "location", external: true },
    { label: "GitHub", value: "github.com/jerichoGarcia", href: "https://github.com/jerichoGarcia", icon: "github", external: true },
    { label: "LinkedIn", value: "linkedin.com/in/jericho-garcia-bb41b7340", href: "https://www.linkedin.com/in/jericho-garcia-bb41b7340/", icon: "linkedin", external: true },
    { label: "Facebook", value: "facebook.com/share/1C6KjZDrJo", href: "https://www.facebook.com/share/1C6KjZDrJo/", icon: "facebook", external: true },
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

export const experience = {
  company: "Enshored Inc.",
  position: "Content Moderator",
  period: "April 2024 – February 2025",
  description:
    "Worked as a Content Moderator at Enshored Inc., reviewing user-generated content to uphold quality and compliance standards. Developed strong attention to detail, accuracy, and problem-solving skills while managing high-volume workloads and collaborating with team members.",
  responsibilities: [
    { icon: "shield", title: "Content Review & Quality Assurance", description: "Reviewed and moderated user-generated content while maintaining established quality and compliance standards." },
    { icon: "target", title: "Productivity & Accuracy", description: "Maintained productivity and accuracy while handling high-volume workloads." },
    { icon: "users", title: "Case Resolution & Collaboration", description: "Resolved complex cases by following established procedures and collaborating with team members." },
  ],
} as const;

export const projects = [
  { title: "Client Management System", description: "A web-based application for organizing client information, managing records, and tracking client statuses.", tags: ["Web Application", "Client Records", "Workflow"], visual: "records" },
  { title: "IT Support & Troubleshooting", description: "A collection of technical support work, troubleshooting processes, and practical IT solutions.", tags: ["IT Support", "Diagnostics", "Documentation"], visual: "support" },
  { title: "Personal Portfolio", description: "A modern personal portfolio built using Next.js, TypeScript, and Tailwind CSS.", tags: ["Next.js", "TypeScript", "Tailwind CSS"], visual: "portfolio" },
] as const;
