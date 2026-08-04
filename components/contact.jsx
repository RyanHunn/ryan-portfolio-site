// contact.jsx — Contact + footer
function Contact() {
  const ref = useReveal();
  return (
    <footer id="contact" ref={ref} style={{ background:'var(--ground)' }}>
      <ArtGlass />
      <div className="wrap" style={{ paddingTop:96, paddingBottom:60 }}>
        <div className="reveal contact-grid" style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:60, alignItems:'start' }}>
          <div>
            <div className="kicker" style={{ color:'var(--red)', marginBottom:22 }}>inquire for current openings <span className="star">✳</span></div>
            <h2 style={{ fontFamily:'var(--deco)', fontSize:'clamp(52px,7vw,104px)', lineHeight:0.84, margin:0 }}>
              Now let&rsquo;s write<br/>your story.
            </h2>
            <p style={{ fontSize:20, fontStyle:'italic', color:'var(--ink-soft)', maxWidth:470, marginTop:26 }}>
              I can help you develop one high-value deliverable or an entire brand language. Contact me today to get started.
            </p>
            <a href="mailto:ryanhagendazs@gmail.com" className="btn btn-red" style={{ marginTop:30, fontSize:13, padding:'16px 30px' }}>ryanhagendazs@gmail.com</a>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:26, paddingTop:10 }}>
            <div style={{ borderTop:'1.5px solid var(--ink)', paddingTop:14 }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--rust)', marginBottom:8 }}>OFFICE</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:15, lineHeight:1.6, color:'var(--ink)' }}>Spittelberggasse 12/17<br/>1070 Wien, &Ouml;sterreich</div>
            </div>
            <div style={{ borderTop:'1.5px solid var(--ink)', paddingTop:14 }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--rust)', marginBottom:8 }}>Telephone</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:15, lineHeight:1.7, color:'var(--ink)' }}>
                <a href="tel:+12607507221" style={{ textDecoration:'none', color:'inherit' }}>US&nbsp;&nbsp;+1 260 750 7221</a><br/>
                <a href="tel:+436766727145" style={{ textDecoration:'none', color:'inherit' }}>EU&nbsp;&nbsp;+43 676 6727145</a>
              </div>
            </div>
            <div style={{ borderTop:'1.5px solid var(--ink)', paddingTop:14 }}>
              <div style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--rust)', marginBottom:8 }}>Elsewhere</div>
              <div style={{ fontFamily:'var(--sans)', fontSize:15, lineHeight:1.8, color:'var(--ink)', display:'flex', flexDirection:'column' }}>
                <a className="foot-soc" href="https://www.linkedin.com/in/ryan-hunneshagen-763490105/" target="_blank" rel="noopener" style={{ textDecoration:'none', color:'inherit' }}>LinkedIn &nbsp;&rarr;</a>
                <a className="foot-soc" href="https://www.instagram.com/ivy_hoosier/" target="_blank" rel="noopener" style={{ textDecoration:'none', color:'inherit' }}>Instagram &nbsp;&rarr;</a>
                <a className="foot-soc" href="https://clubroomconversations.substack.com/" target="_blank" rel="noopener" style={{ textDecoration:'none', color:'inherit' }}>Substack &nbsp;&rarr;</a>
              </div>
            </div>
          </div>
        </div>

        {/* colophon */}
        <div className="colophon" style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop:80, paddingTop:24, borderTop:'1px solid var(--line)', fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink-soft)' }}>
          <span style={{ fontFamily:'var(--deco)', fontSize:20, letterSpacing:'0.02em', color:'var(--ink)' }}>R. Hunneshagen</span>
          <span>MIT LEIDENSCHAFT <span className="star">✳</span> VIENNA MMXXV</span>
          <span>© 2025 — ALL RIGHTSRESERVED</span>
        </div>
      </div>
    </footer>
  );
}
window.Contact = Contact;
