// essays.jsx — Short-form essays
const { useState: useStateEssays } = React;
function Essays() {
  const ref = useReveal();
  const [open, setOpen] = useStateEssays(null);
  const list = [
    { t:'Horsepower', dek:'A Panegyric to Ralph Lauren', date:'Jan 2025', read:'5 min',
      body:[
        'No matter what you\'re doing, it is important to do it with your own style. Nobody sees the world the way you do. That\'s the best thing you can give to others. Ralph Lifshitz understood this about himself from a young age. This average kid from the Bronx discovered his gift and decided to embrace it.',
        'You probably know him better as Ralph Lauren. You\'ve probably worn something from his brand. That\'s because he unapologetically asserted his visions of the way the world ought to be- like his world- just by dressing stylishly.',
      ],
      url:'https://clubroomconversations.substack.com/p/horsepower' },
    { t:'A Convert to Cubism', dek:'One Ex-Critic’s Reluctant Defense of Modern Art Against Reactionary Trad Purism', date:'Dec 2024', read:'5 min',
      body:[
        'Like most thoroughgoing Old-Thing-Gooder’s, I avoided Modern Art galleries like a ballerina avoids carbohydrates, or a cat avoids bathwater. I knew resolutely that I preferred more refined art from an earlier time, when men had firm values and higher inspirations.',
        'Why waste time on the navel-gazing nightmare that is the work of a few bohemians of questionable sanity, buoyed by equally dubious critics? Why go to a gallery that leaves you with more questions than answers? Why look at paintings that confuse and unsettle, when the classical works offer a restful beauty?',
      ],
      url:'https://clubroomconversations.substack.com/p/a-convert-to-cubism' },
    { t:'The Masculine Urge for Naval Warfare', dek:'How communal struggle forms men and an epic at sea that makes the case', date:'Jun 2024', read:'4 min',
      body:[
        'You peer out over the vast south Atlantic, feeling the spray of sea foam pelt your face as you try in vain to discern Cape Horn. You’re bobbing in 50-foot swells at the tip of South American in a 3-masted wooden ship. Thankfully as the storm subsides, you soon feel the warmth of a well-sanded deck under your feet, the breeze cutting through your lightweight cotton trousers. In another moment, the acrid smell of gunpowder smoke touches your nostrils. The clang of cutlasses announces your best mate’s struggle to the death with some nameless French sailor. You are in the fight. You’re part of the crew.',
      ],
      url:'https://clubroomconversations.substack.com/p/the-masculine-urge-for-naval-warfare' },
  ];

  return (
    <section id="essays" ref={ref}>
      <div className="wrap" style={{ paddingBottom:96 }}>
        <SectionHead num="03" title="Essays" meta={<>the Things I get out of bed<br/>to write about</>} />

        {/* featured essay */}
        <article className="reveal essay-feature" style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap:54, marginBottom:64, paddingBottom:54, borderBottom:'1px solid var(--line)' }}>
          <div>
            <div className="kicker" style={{ color:'var(--red)' }}>Latest <span className="star">✳︎</span></div>
            <h3 style={{ fontFamily:'var(--deco)', fontSize:'clamp(34px,3.6vw,52px)', lineHeight:0.95, margin:'14px 0 12px' }}>My Campari Safari</h3>
            <div style={{ fontStyle:'italic', color:'var(--ink-soft)', margin:'0 0 12px' }}>A tale of tipples, tariffs, and terrible bartending.</div>
            <div style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--ink-soft)' }}>May 2025 · 5 min read</div>
          </div>
          <div style={{ fontSize:19, lineHeight:1.7 }}>
            <p style={{ textIndent:0 }}>
              <span style={{ float:'left', fontFamily:'var(--deco)', fontSize:78, lineHeight:0.72, paddingRight:12, paddingTop:6, color:'var(--rust)' }}>W</span>
              henever offered an espresso martini, I generally smile and politely give it a miss. It’s not that I’m too sérieux to have one, although perhaps my abstinence from the caffeinated concoction indicates a personality blind spot. I just cling to a simple principle when it comes to my liquor: that alcohol is poison and therefore, that it ought to taste like poison.
            </p>
            <a href="https://clubroomconversations.substack.com/p/my-campari-safari" target="_blank" rel="noopener" className="txtlink" style={{ marginTop:6, display:'inline-block' }}>Read the full essay →</a>
          </div>
        </article>

        {/* list */}
        <div className="reveal">
          {list.map((e, i) => (
            <div key={i} onClick={() => setOpen(open === i ? null : i)} style={{ borderTop:'1px solid var(--line)', padding:'26px 0', cursor:'pointer', display:'block' }}>
              <div className="essay-row-grid" style={{ display:'grid', gridTemplateColumns:'auto 1fr auto', gap:28, alignItems:'baseline' }}>
                <span style={{ fontFamily:'var(--deco)', fontSize:22, color:'var(--red)' }}>{String(i+1).padStart(2,'0')}</span>
                <div>
                  <h4 style={{ fontFamily:'var(--deco)', fontSize:28, margin:0 }}>{e.t}</h4>
                  <div style={{ fontStyle:'italic', color:'var(--ink-soft)', marginTop:4 }}>{e.dek}</div>
                </div>
                <span className="essay-meta" style={{ fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--ink-soft)', whiteSpace:'nowrap' }}>{e.date} · {e.read}</span>
              </div>
              <div style={{ maxHeight: open===i ? 360 : 0, overflow:'hidden', transition:'max-height .5s ease, opacity .4s', opacity: open===i?1:0 }}>
                {(Array.isArray(e.body) ? e.body : [e.body]).map((p, pi) => (
                  <p key={pi} style={{ fontSize:18, lineHeight:1.7, margin: pi===0 ? '18px 0 0' : '14px 0 0', maxWidth:720, color:'var(--ink)' }}>{p}</p>
                ))}
                <a href={e.url} target="_blank" rel="noopener" className="txtlink" onClick={(ev)=>ev.stopPropagation()} style={{ marginTop:10, display:'inline-block' }}>Read on Substack →</a>
              </div>
            </div>
          ))}
          <div style={{ borderTop:'1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}
window.Essays = Essays;
