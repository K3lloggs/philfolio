// Single source of truth for all site content. Copy lifted from the prototype.
// Media lives in /public/media (optimized webp + base64 blur placeholders).

export const profile = {
  first: 'CONNOR',
  last: 'CLOSE',
  leftLabel: 'Founder / Builder',
  rightLabel: 'Engineering · Product · AI',
  location: 'Philadelphia, PA',
  photo: '/media/profile.webp',
  // tiny base64 placeholder -> resolves into the full asset, no white flash
  photoBlur:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDIE8mMhSfpUiSvJMiNwOePwq5pUDQtI5gZBgAEgjmq8scovpJFtmPzHaB1I6ZrIvodeyhuCM5qOeFDDjaOOntRRWxmf//Z',
}

export type NavItem = { label: string; href: string; chevron?: boolean }
export const nav: NavItem[] = [
  { label: 'Skills', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work', chevron: true },
  { label: 'Contact', href: '#contact' },
]

export const contact = {
  email: 'cclosework@gmail.com',
  linkedin: 'https://www.linkedin.com/in/c0nn0r-cl0se',
  github: 'https://github.com/K3lloggs',
  location: 'Fishtown, Philadelphia PA',
  year: 2026,
}

export const statement = {
  kicker: 'The work',
  // <em> wraps the italic clay accent
  lead: 'I build software and AI systems that ',
  accent: 'cut cost, save hours, and make money',
  tail: ' — not just demos.',
}

export type Stat = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  display?: string // overrides count-up (e.g. "5/5")
  label: string
}
export const stats: Stat[] = [
  { prefix: '$', value: 4.6, suffix: 'M', decimals: 1, label: 'Dead stock brought online, B2B — first in the industry' },
  { prefix: '~$', value: 80, suffix: 'K', label: 'Saved per year via automation & agents' },
  { value: 32, suffix: 'K', label: 'Product SKUs cleared to 100% accuracy' },
  { value: 5, display: '5/5', label: 'App Store rating, zero security incidents' },
]

export const marquee = ['Product Design', 'UI/UX', 'Web Design', 'Engineering', 'AI Automation']

export type Service = { num: string; title: string; body: string; tags: string[] }
export const services: Service[] = [
  {
    num: '01',
    title: 'Product Design &\nGo-to-Market',
    body: 'From concept to launch. I scope the product, define the flows, and take it to market — like the commerce app I led solo to 80 active users in 10 days, and the B2B network that put $4.6M of inventory in front of 1,000+ new stores.',
    tags: ['MVP → Launch', 'Product Strategy', 'Roadmapping', 'B2B / B2C', 'Positioning'],
  },
  {
    num: '02',
    title: 'UI / UX',
    body: 'Interfaces people actually want to use. User journeys, wireframes, and prototypes grounded in how the product makes money — a 5/5-rated mobile app with zero security incidents, not screens that only look good in a deck.',
    tags: ['User Flows', 'Wireframing', 'Prototyping', 'Figma', 'Design Systems'],
  },
  {
    num: '03',
    title: 'Web Design &\nDevelopment',
    body: 'Fast, responsive, modern sites — designed and built. Clean front ends on real backends and cloud infrastructure, the kind that stay live and measured instead of breaking the week after handoff.',
    tags: ['React', 'TypeScript', 'Next.js', 'Responsive', 'SEO-Ready', 'Vercel / GCP'],
  },
  {
    num: '04',
    title: 'Mobile\nDevelopment',
    body: 'Native-feel apps, end to end. I designed and shipped a 5/5-rated iOS commerce app as sole engineer — Stripe checkout, real-time inventory on Firebase, and push notifications — to 80 active users in its first 10 days, with zero security incidents.',
    tags: ['React Native', 'Expo', 'iOS', 'Firebase', 'Stripe', 'Push Notifications'],
  },
  {
    num: '05',
    title: 'Software\nEngineering',
    body: 'Full-stack builds and the plumbing behind them. ETL pipelines that sync legacy systems and kill manual work — one cut catalog effort ~30 hrs/week and dropped SKU onboarding from days to a 30-minute cloud function.',
    tags: ['Python', 'Go', 'JavaScript', 'SQL / NoSQL', 'Docker', 'Kubernetes', 'GCP · AWS · Azure'],
  },
  {
    num: '06',
    title: 'AI Automation &\nAgents',
    body: 'The edge. I build autonomous agents and AI workflows that do the work nobody should be doing by hand — a Playwright browser agent that wiped out ~99% of manual store admin (~$45K/yr), plus crawlers, ingestion, and QC pipelines that run themselves.',
    tags: ['Playwright Agents', 'n8n Workflows', 'MCP', 'Claude Code', 'Web Crawlers', 'Automated QC'],
  },
]

export const about = {
  kicker: 'About',
  bigLead: 'One person, the ',
  bigAccent: 'whole',
  bigTail: ' pipeline — design, code, ship, automate.',
  body: [
    "I'm a full-stack engineer and product builder based in Philadelphia. At Shreve, Crump & Low I was the sole engineer and project lead — reporting straight to executives on scope, timeline, and ROI.",
    "I move fast and build things that earn their keep. AI and automation are where I push hardest: if a task is repetitive, I'd rather build the agent that ends it. When the job's done, the result is live and measured.",
  ],
}

export type Project = {
  title: string
  sub: string
  src: string
  blur: string
  /** 'cover' fills the 4:3 card; 'contain' frames a tall asset (e.g. a phone) on its own. */
  fit: 'cover' | 'contain'
  /** optional in-view / hover video (poster = src). Drop a clip in to light it up. */
  video?: { mp4?: string; webm?: string }
  href?: string
}
export const projects: Project[] = [
  {
    title: 'Mobile Commerce App',
    sub: 'Product Lead · Sole Engineer',
    src: '/media/work-mobile.webp', // poster: shown before play, on pause, and under reduced motion
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAAkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpGuZYr6OBiro3BwmDn86nx71H5KSXq3Z+9GpThuPxqTI9aAOZW6uLe4kEUzDcec8+vrWp9om/v/oKKKtkI//Z',
    fit: 'contain',
    video: { mp4: '/media/clip0.mp4' },
  },
  {
    title: 'B2B Wholesale Network',
    sub: '$4.6M Inventory · GTM',
    src: '/media/work-wholesale.webp',
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqZriRGIWB3A7g9akUFhnGMjoc1LtHpUbsVbA4FACOuDzRTlO4ZPNFAH//2Q==',
    fit: 'cover',
    href: contact.linkedin,
  },
  {
    title: 'Browser Automation Agent',
    sub: 'Playwright · AI',
    src: '/media/work-agent.webp',
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDC+b1wMU0nIzuOKeFLLnOMimY4xx+VACA/7RooCe9FAH//2Q==',
    fit: 'cover',
    // Drop a compressed clip here (poster falls back to src) to enable in-view/hover play:
    // video: { mp4: '/media/work-agent.mp4', webm: '/media/work-agent.webm' },
  },
  {
    title: 'ETL & Data Pipeline',
    sub: 'Python · GCP',
    src: '/media/work-etl.webp',
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAMABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDmwckdKUdOaYp5pyHtQAhx2opzSc4CqMcdOtFAH//2Q==',
    fit: 'cover',
  },
  {
    title: 'PAC Sitting',
    sub: 'Pet Care Platform · Design & Build',
    src: '/media/work-pac.webp',
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrXcRjIUk+g60xZ/n2sj9eGxx/OpCARyKaoGegpANMEIJIiTLHJO3qfWipDRQB/9k=',
    fit: 'cover',
  },
  {
    title: 'Close Property Services',
    sub: 'Local Services Site · Design & Build',
    src: '/media/work-closeprop.webp',
    blur: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDOeLSIwjSiYAjkZyT9KzjDHPcP9nO2HPy7jyKibp+FEH8VSAsvmwP5fmNgdMNxRTJ/v/hRRZAf/9k=',
    fit: 'cover',
  },
]
