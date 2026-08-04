// testimonials.jsx — Client testimonials (horizontal-scroll carousel)
function Testimonials() {
  const ref = useReveal();
  const scrollerRef = useRef(null);
  const quotes = [
    { q:'Throughout the past year, Ryan has been instrumental in developing the Stratofied brand language and specifically in preparing our pitch for Series A rounds. His finance background better enabled him to refine what we want to say and to feel confident saying it at the White House and a16z.', n:'Nick Stoltzfus', r:'Co-Founder & CEO, Stratofied Inc.' },
    { q:'Ryan leapt into the email campaign; good on outlining, comms were impeccable, never pushed back on deadlines, and his optimism helped a lot.', n:'Peter Atkinson', r:'VP of Marketing, Relevant Radio' },
    { q:'Ryan was very enjoyable to work with. As with most quality services, he made things smooth and effortless. The branding blew my mind and was a great example of their team having better ideas of where to take the brand than myself.', n:'Aaron Burns', r:'Founder & CEO, Bonaventure Bookkeeping' },
  ];
  const arrowStyle = {
    width:42, height:42, borderRadius:'50%', border:'1.5px solid var(--ground-2)',
    background:'transparent', color:'var(--ground-2)', fontSize:20, cursor:'pointer',
    display:'flex', alignItems:'center', justifyContent:'center',
  };
  const scrollByPage = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };
  return (
    <section id="testimonials" ref={ref} style={{ background:'var(--rust)', color:'var(--ground-2)' }}>
      <div className="wrap" style={{ paddingTop:96, paddingBottom:96 }}>
        {/* custom header (cream on rust) */}
        <div className="reveal testi-head" style={{ display:'flex', alignItems:'flex-end', gap:28, borderBottom:'2px solid var(--ground-2)', paddingBottom:22, marginBottom:64 }}>
          <span style={{ fontFamily:'var(--deco)', fontSize:64, lineHeight:0.8, color:'var(--ground-2)' }}></span>
          <h2 style={{ fontFamily:'var(--deco)', fontSize:'clamp(44px,5vw,76px)', lineHeight:0.9, flex:1, color:'var(--ground-2)' }}>In Their Words <span style={{ color:'#f0d9b0' }}>✳︎</span></h2>
          <div style={{ fontFamily:'var(--sans)', fontSize:13, letterSpacing:'0.16em', textTransform:'uppercase', color:'#f0d9b0cc', textAlign:'right', maxWidth:260, paddingBottom:6, lineHeight:1.5 }}>COMMUNICATIVE, COLLABORATIVE, AND CREATIVE</div>
        </div>

        <div className="reveal">
          <div ref={scrollerRef} className="hscroll" style={{
            display:'flex', gap:40, overflowX:'auto', scrollSnapType:'x mandatory',
            paddingBottom:8, scrollbarWidth:'none',
          }}>
            {quotes.map((t, i) => (
              <figure key={i} style={{ scrollSnapAlign:'start', flex:'0 0 clamp(280px, 34vw, 440px)', margin:0, display:'flex', flexDirection:'column', gap:22 }}>
                <span style={{ fontFamily:'var(--deco)', fontSize:60, lineHeight:0.5, color:'#f0d9b0' }}>“</span>
                <blockquote style={{ fontFamily:'var(--serif)', fontSize:19, lineHeight:1.45, fontStyle:'italic', margin:0, flex:1 }}>{t.q}</blockquote>
                <figcaption style={{ borderTop:'1.5px solid var(--ground-2)', paddingTop:14 }}>
                  <div style={{ fontFamily:'var(--deco)', fontSize:22 }}>{t.n}</div>
                  <div style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'#f0d9b0cc', marginTop:3 }}>{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'flex-end', gap:10, marginTop:22 }}>
            <button onClick={() => scrollByPage(-1)} aria-label="Scroll testimonials left" style={arrowStyle}>‹</button>
            <button onClick={() => scrollByPage(1)} aria-label="Scroll testimonials right" style={arrowStyle}>›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
