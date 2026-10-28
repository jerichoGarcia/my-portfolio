import { Code2, MonitorCog, Network, Wrench, ArrowUpRight, Clock3 } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import type { projects } from "../data/portfolio";

const icons = { wrench: Wrench, network: Network, code: Code2, monitor: MonitorCog };

export function SkillCards() { return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skillGroups.map((group) => { const Icon = icons[group.icon]; return <article key={group.title} className="skill-card"><div className="icon-tile"><Icon size={20} aria-hidden="true" /></div><h3 className="mt-5 font-semibold text-[var(--ink)]">{group.title}</h3><ul className="mt-4 space-y-2.5">{group.skills.map((skill) => <li key={skill} className="break-words text-sm text-[var(--muted)]">{skill}</li>)}</ul></article>; })}</div>; }
type Project = (typeof projects)[number];
function ProjectVisual({ visual }: { visual: Project["visual"] }) { return <div className={`project-visual project-${visual}`} aria-hidden="true"><span /><span /><span /></div>; }
export function ProjectCards({ projects }: { projects: readonly Project[] }) { return <div className="grid gap-5 md:grid-cols-3">{projects.map((project) => <article key={project.title} className="project-card"><ProjectVisual visual={project.visual} /><div className="p-6"><h3 className="text-xl font-semibold tracking-[-0.025em] text-[var(--ink)]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div><div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--muted)]"><Clock3 size={16} aria-hidden="true" /> Details coming soon <ArrowUpRight size={15} aria-hidden="true" /></div></div></article>)}</div>; }
