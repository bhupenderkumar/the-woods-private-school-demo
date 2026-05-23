import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Woods Private School',
  description: 'The Woods Private School is a vibrant community of learners in Houston, TX, dedicated to fostering academic excellence and character development. Our experienced faculty and staff provide a nurturing environment that encourages students to grow and thrive.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="demo-banner">
          This is a demo website built for The Woods Private School by EduConnect.
          Want this for your school? Call +91-9717267473
        </div>
        <nav className="navbar">
          <a href="/" className="logo">The Woods Private School</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/programs">Programs</a>
            <a href="/contact">Contact</a>
            <a href="/download" className="cta-btn">Get Parent App</a>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2026 The Woods Private School. Demo by EduConnect.</p>
        </footer>
      </body>
    </html>
  );
}
