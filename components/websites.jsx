// websites.jsx — Websites written
function Websites() {
  const ref = useReveal();
  const items = [
    { id:'web-1', t:'Stratofied', m:'FINTECH · BLOCKCHAIN-BASED DIGITAL ASSETS', url:'stratofied.io', href:'https://stratofied.io/',
      src:'websites/stratofied.jpg', ratio:'1685 / 396',
      d:'Stratofied is a fintech firm modernizing the student lending industry. In a packed field of founders vying for attention from busy VC\'s, Stratofied\'s brand needed a unique, captivating language to communicate just how truly innovative their platform is.' },
    { id:'web-2', t:'Hortus Foundation', m:'NONPROFIT · CULTURAL HERITAGE RESTORATION', url:'hortusfoundation.org', href:'https://www.hortusfoundation.org/',
      src:'websites/hortus-foundation.jpg', ratio:'1893 / 813',
      d:'The 2,400-year story of the Basilica di San Clemente in Rome now happily includes a small footnote — a beautiful, compelling narrative about beauty embedded in a website to attract high-value donors to an unforgettable piece of cultural heritage, written by yours truly.' },
    { id:'web-3', t:'Solarsimple', m:'ENERGY · RESIDENTIAL & COMMERCIAL SOLAR INSTALLATION', url:'solarsimplellc.com', href:'https://solarsimplellc.com/',
      src:'websites/solarsimple.jpg', ratio:'1698 / 597',
      d:'A sales-focused website for a solar energy company in Front Royal, VA. I helped Solarsimple walk the tightrope between "used car salesman" and "telling, not selling".' },
    { id:'web-4', t:'Cardinal Stafford', m:'BIOGRAPHY · THE LIFE AND WORK OF A CATHOLIC CARDINAL', url:'cardinalstafford.com', href:'https://www.cardinalstafford.com/',
      src:'websites/cardinal-stafford.jpg', ratio:'1917 / 716',
      d:'A five-chapter narrative site chronicling Cardinal J. Francis Stafford\'s life and ministry, assembled from my interviews with His Eminence, hundreds of photographs, and his impressive body of works.' },
  ];

  const Browser = ({ id, url, label, src, ratio }) => (
    <div style={{ border:'1.5px solid var(--ink)', background:'var(--ground-2)' }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, padding:'9px 14px', borderBottom:'1.5px solid var(--ink)' }}>
        <span style={{ width:9, height:9, borderRadius:'50%', border:'1.5px solid var(--ink)' }} />
        <span style={{ width:9, height:9, borderRadius:'50%', border:'1.5px solid var(--ink)' }} />
        <span style={{ width:9, height:9, borderRadius:'50%', border:'1.5px solid var(--ink)' }} />
        <span style={{ marginLeft:14, fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.12em', color:'var(--ink-soft)' }}>{url}</span>
      </div>
      <Slot id={id} src={src} fit="contain" ratio={ratio} label={label} style={{ border:'none' }} />
    </div>
  );

  return (
    <section id="websites" ref={ref} style={{ background:'var(--ground-2)' }}>
      <div className="wrap" style={{ paddingBottom:90 }}>
        <SectionHead num="02" title="Websites" meta={<>CAPTIVATING COPY FOR THE ONLINE ATTENTION SPAN</>} />
        <div style={{ display:'flex', flexDirection:'column', gap:80 }}>
          {items.map((it, i) => (
            <div key={it.id} className="reveal web-row" style={{ display:'grid', gridTemplateColumns:'1.3fr 1fr', gap:54, alignItems:'center', direction: i%2 ? 'rtl' : 'ltr' }}>
              <div style={{ direction:'ltr' }}><Browser id={it.id} url={it.url} src={it.src} ratio={it.ratio} label={`SITE · ${it.m}`} /></div>
              <div style={{ direction:'ltr' }}>
                <div style={{ fontFamily:'var(--deco)', fontSize:38, color:'var(--red)', lineHeight:1 }}>{String(i+1).padStart(2,'0')}</div>
                <h3 style={{ fontFamily:'var(--deco)', fontSize:34, margin:'10px 0 4px' }}>{it.t}</h3>
                <div style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink-soft)', marginBottom:16 }}>{it.m}</div>
                <p style={{ color:'var(--ink-soft)' }}>{it.d}</p>
                <a href={it.href} target="_blank" rel="noopener" className="txtlink" style={{ marginTop:6, display:'inline-block' }}>Visit live site →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Websites = Websites;
