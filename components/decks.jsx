// decks.jsx — Pitch deck designs (per-deck slide carousels)
function deckNavBtnStyle(side) {
  return {
    position:'absolute', top:'50%', [side]:10, transform:'translateY(-50%)',
    width:38, height:38, borderRadius:'50%', border:'1.5px solid var(--ink)',
    background:'var(--ground-2)', color:'var(--ink)', fontSize:20, lineHeight:1,
    cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', padding:0,
  };
}

// Full slide always visible — fit="contain" so nothing is ever cropped,
// regardless of the source slide's exact aspect ratio. `slides` is an array
// of image paths (or null for an as-yet-unfilled slot the user can drop onto).
function DeckCarousel({ deckKey, slides, ratio }) {
  const [i, setI] = useState(0);
  const count = slides.length;
  const go = (dir) => setI((v) => (v + dir + count) % count);
  return (
    <div style={{ position:'relative' }}>
      <image-slot
        id={`deck-${deckKey}-${i + 1}`}
        src={slides[i] || undefined}
        fit="contain"
        placeholder={i === 0 ? 'TITLE SLIDE · 16:9' : `SLIDE ${i + 1} OF ${count}`}
        style={{ display:'block', width:'100%', height:'auto', aspectRatio: ratio, border:'1.5px solid var(--ink)' }}
      />
      <button onClick={() => go(-1)} aria-label="Previous slide" style={deckNavBtnStyle('left')}>‹</button>
      <button onClick={() => go(1)} aria-label="Next slide" style={deckNavBtnStyle('right')}>›</button>
      <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:12 }}>
        {slides.map((_, n) => (
          <button
            key={n}
            onClick={() => setI(n)}
            aria-label={`Go to slide ${n + 1}`}
            style={{ width:8, height:8, borderRadius:'50%', border:'1.5px solid var(--ink)', background: n === i ? 'var(--red)' : 'transparent', padding:0, cursor:'pointer' }}
          />
        ))}
      </div>
    </div>
  );
}

function Decks() {
  const ref = useReveal();
  const stratofiedSlides = [
    'decks/stratofied-1-title.jpg',
    'decks/stratofied-2.jpg',
    'decks/stratofied-3.jpg',
    'decks/stratofied-4.jpg',
    'decks/stratofied-5.jpg',
  ];
  const secondary = [
    { key:'sja', t:'St. Joseph\'s Academy', m:'Case for Support · Education · 2025', d:'A case for support aimed at funding for a new boys\' boarding school in Mississippi.',
      slides:['decks/sja-1-title.jpg','decks/sja-2.jpg','decks/sja-3.jpg','decks/sja-4.jpg','decks/sja-5.jpg'] },
    { key:'cic', t:'Private Investor', m:'Brand Deck · Investment · 2024', d:'A manifesto deck used to align 40 staff on one story.',
      slides:['decks/cic-1-title.jpg','decks/cic-2.jpg','decks/cic-3.jpg','decks/cic-4.jpg','decks/cic-5.jpg'] },
  ];
  return (
    <section id="decks" ref={ref} style={{ height:1550 }}>
      <div className="wrap">
        <SectionHead num="01" title="Decks"
          meta={<>Story-Driven Slides for<br/>Seed, Series-A, Non-Profit</>} />

        {/* featured — full-width, stacked, so the slide reads at real size */}
        <div className="reveal" style={{ marginBottom:88 }}>
          <div style={{ maxWidth:920, margin:'0 auto 32px' }}>
            <DeckCarousel deckKey="stratofied" slides={stratofiedSlides} ratio="16 / 9" />
          </div>
          <div style={{ maxWidth:720, margin:'0 auto', textAlign:'center' }}>
            <div className="kicker" style={{ color:'var(--red)' }}>Featured <span className="star">✳</span></div>
            <h3 style={{ fontFamily:'var(--deco)', fontSize:42, lineHeight:0.95, margin:'14px 0 6px' }}>Stratofied.</h3>
            <div style={{ fontFamily:'var(--sans)', fontSize:12, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink-soft)', marginBottom:18 }}></div>
            <p style={{ color:'var(--ink-soft)' }}>
              A premium Series-A deck for a Seed-funded Fintech firm innovating
              in digital assets and debt markets.
            </p>
            <a href="#contact" className="txtlink" style={{ marginTop:8, display:'inline-block' }}>Request the case study →</a>
          </div>
        </div>

        {/* secondary decks */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:48 }}>
          {secondary.map((d, i) => (
            <article key={d.key} className="reveal card-deck" style={{ transitionDelay:`${i * 80}ms` }}>
              <DeckCarousel deckKey={d.key} slides={d.slides} ratio="16 / 9" />
              <h3 style={{ fontFamily:'var(--deco)', fontSize:26, margin:'18px 0 4px' }}>{d.t}</h3>
              <p style={{ fontSize:16, color:'var(--ink-soft)', margin:0 }}>{d.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Decks = Decks;
