// logos.jsx — Client logo wall
function Logos() {
  const ref = useReveal();
  const cells = [
    { id:'logo-1',  name:'Stratofied',                src:'logos/stratofied.png', href:'https://stratofied.io/' },
    { id:'logo-2',  name:'Hortus Foundation',          src:'logos/hortus-foundation.png', bg:'var(--sage)', href:'https://www.hortusfoundation.org/' },
    { id:'logo-3',  name:'Relevant Radio',             src:'logos/relevant-radio.png', bg:'#ffffff', href:'https://conclave.relevantradio.com/' },
    { id:'logo-4',  name:'Chamber',                    src:'logos/chamber.png', href:'https://www.chambersystem.com/' },
    { id:'logo-5',  name:'Bonaventure Bookkeeping',     src:'logos/bonaventure.png', bg:'var(--ochre)', href:'https://www.bonabook.xyz/' },
    { id:'logo-6',  name:'Truthly',                    src:'logos/truthly.png', href:'https://truthly.ai/' },
    { id:'logo-7',  name:'Verso Jobs',                 src:'logos/verso-jobs.png', href:'https://www.versojobs.com/' },
    { id:'logo-8',  name:'Nic Nac',                     src:'logos/nic-nac.jpg', bg:'var(--red)', fit:'cover', pad:0, href:'https://www.nicnac.com/' },
    { id:'logo-9',  name:'The 71 Fund',                src:'logos/71-fund.png', href:'https://the71fund.org/' },
    { id:'logo-10', name:'St. Joseph\'s Academy',       src:'logos/st-josephs-academy.png', href:'https://www.stjosephnatchez.com/' },
    { id:'logo-11', name:'Solarsimple',                src:'logos/solarsimple.png', href:'https://solarsimplellc.com/' },
    { id:'logo-12', name:'New American Industrial Alliance', src:'logos/naia.png', bg:'var(--ink)', href:'https://newindustrials.org/' },
  ];
  return (
    <section id="clients" ref={ref}>
      <div className="wrap" style={{ paddingBottom:96 }}>
        <SectionHead num="04" title="My Clients" meta={<>Compelling stories, no matter the industry</>} />
        <div className="reveal" style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20 }}>
          {cells.map((c) => (
            <a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener"
              aria-label={c.name}
              style={{ display:'block', aspectRatio:'3 / 2', background: c.bg || 'var(--ground-2)', padding: c.pad ?? 28, cursor:'pointer' }}
            >
              <image-slot
                id={c.id}
                src={c.src}
                fit={c.fit || 'contain'}
                placeholder={c.name}
                style={{ display:'block', width:'100%', height:'100%', border:'none', boxShadow:'none', background:'transparent' }}
              />
            </a>
          ))}
        </div>
        <p className="reveal" style={{ fontFamily:'var(--sans)', fontSize:12, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink-soft)', textAlign:'center', marginTop:30 }}>
          FINANCE <span className="star">✳</span> TECHNOLOGY <span className="star">✳</span> Media <span className="star">✳</span> Education <span className="star">✳</span> NON-PROFITS <span className="star">✳</span> Policy
        </p>
      </div>
    </section>
  );
}
window.Logos = Logos;
