export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Empowering Minds in Houston's Heart</h1>
        <p>The Woods Private School is a vibrant community of learners in Houston, TX, dedicated to fostering academic excellence and character development. Our experienced faculty and staff provide a nurturing environment that encourages students to grow and thrive.</p>
        <a href="/download" className="cta-btn" style={{ padding: '14px 32px', fontSize: '18px' }}>
          Get the Parent App
        </a>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>📱 Parent App</h3>
          <p>Stay connected with real-time updates on homework, attendance, and school events.</p>
        </div>
        <div className="feature-card">
          <h3>📝 Homework Tracker</h3>
          <p>Never miss an assignment. Parents see homework posted by teachers instantly.</p>
        </div>
        <div className="feature-card">
          <h3>💳 Fee Payment</h3>
          <p>Pay school fees online securely. No more checks or cash.</p>
        </div>
        <div className="feature-card">
          <h3>📊 Attendance</h3>
          <p>Real-time attendance tracking with instant notifications to parents.</p>
        </div>
      </section>
      <section className="section"><blockquote>"The Woods Private School has been a game-changer for our family, providing a supportive and inclusive community that has helped our child thrive academically and personally"<cite>— Sarah Johnson</cite></blockquote></section>
    </>
  );
}
