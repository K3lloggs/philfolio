import { contact } from '../lib/content'

export default function Footer() {
  return (
    <footer>
      <span>&copy; {contact.year} Connor Close</span>
      <span>{contact.location}</span>
      <div className="social">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={`mailto:${contact.email}`}>Email</a>
      </div>
    </footer>
  )
}
