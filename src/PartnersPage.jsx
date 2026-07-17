import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { G } from './styles';
import PartnerModal from './PartnerModal';

const PARTNER_TYPES = [
  {
    icon: '🚢',
    name: 'Freight Carriers',
    desc: 'Ocean lines, air cargo carriers, RoRo operators serving US ↔ Nigeria. We book weekly volume across multiple lanes and are actively growing route redundancy.',
    what: 'Weekly booked volume, joint marketing on your best lanes, predictable ops team on our side.',
    seek: 'US Gulf & East Coast to Apapa / Tin Can · Trans-Atlantic air freight · RoRo carriers into Lagos & Cotonou',
    accent: 'linear-gradient(90deg,#5282FF,#7BA3FF)',
  },
  {
    icon: '🏭',
    name: 'Warehouse Operators',
    desc: 'US-side consolidation warehouses in Philadelphia, LA, Houston. Lagos-side deconsolidation and short-term storage. We drop full and mixed containers weekly.',
    what: 'Recurring container drops, cross-docking volume, transparent per-CBM pricing.',
    seek: 'Philadelphia · LA · Houston · Miami on the US side · Apapa / Ikeja / Lagos Mainland on the NG side',
    accent: 'linear-gradient(90deg,#00E5C8,#00B8A3)',
  },
  {
    icon: '🛃',
    name: 'Customs Brokers',
    desc: 'US CBP-licensed brokers and Nigerian licensed customs agents (CRFFN-registered). We move regular volume with clean paperwork and want brokers who match that discipline.',
    what: 'Steady weekly filings, HS-code review partnership, direct broker-to-ops-lead comms.',
    seek: 'Apapa · Tin Can · MMIA (Lagos) · Onne (Port Harcourt) · US CBP brokers coast-to-coast',
    accent: 'linear-gradient(90deg,#A259FF,#C084FC)',
  },
  {
    icon: '🏬',
    name: 'Suppliers & Producers',
    desc: 'Nigerian producers of foodstuffs, agri-commodities, textiles, artisanal goods. US suppliers of medical, industrial, automotive, and consumer goods with corridor demand.',
    what: 'Preferred-vendor pipeline, guaranteed offtake on selected SKUs, corridor-side logistics handled.',
    seek: 'Palm oil · stockfish · dried hibiscus · sesame · cocoa · US medical equipment · vehicles · industrial hardware',
    accent: 'linear-gradient(90deg,#F5A623,#FF9500)',
  },
  {
    icon: '📣',
    name: 'Referral & Community Partners',
    desc: 'Diaspora networks, professional associations, chambers of commerce, community leaders, WhatsApp groups. If your community moves goods across the corridor, we should talk.',
    what: 'Referral commission on closed trades, co-branded events, community-specific service tiers.',
    seek: 'US diaspora community leaders · Nigerian professional bodies · US-NG trade associations · specialty chambers',
    accent: 'linear-gradient(90deg,#FF4D6D,#FF6B8A)',
  },
  {
    icon: '💳',
    name: 'Financial & Insurance',
    desc: 'Payment providers, FX partners, cargo insurance underwriters, trade credit providers. We route real corridor volume and want partners who understand corridor risk.',
    what: 'Predictable transaction flow, direct integration where sensible, real-world corridor risk data.',
    seek: 'US MSBs · Nigerian payment services · marine cargo insurers · trade credit underwriters · corridor-focused capital',
    accent: 'linear-gradient(90deg,#00D68F,#00B87A)',
  },
];

const HOW_STEPS = [
  { n: '01', t: 'Enquire', d: 'You submit a partner application — organisation, capability, region, what you\'re looking for. Takes about 3 minutes.' },
  { n: '02', t: 'Meet', d: 'We reply within 2 business days and schedule a call to walk through fit, capacity, expectations, and commercials.' },
  { n: '03', t: 'Contract', d: 'Written terms specific to the partnership shape — preferred vendor MSA, referral agreement, JV terms, or bespoke.' },
  { n: '04', t: 'Onboard', d: 'Ops integration — booking process, comms channels, escalation paths, invoicing. Live volume within 30 days on most partnerships.' },
];

const ENGAGEMENT_MODELS = [
  {
    name: 'Preferred Vendor',
    icon: '🔗',
    desc: 'You become a first-call vendor for a specific service (freight lane, warehouse, brokerage, supply). Non-exclusive, volume-committed. Best for carriers, warehouses, brokers, established suppliers.',
    fit: 'Freight · Warehouse · Customs · Suppliers',
  },
  {
    name: 'Revenue Share / Referral',
    icon: '💼',
    desc: 'You send corridor trade our way; we pay a defined commission on every closed order for the referred customer\'s lifetime. Best for referral, community, and diaspora network partners.',
    fit: 'Referral · Community · Diaspora',
  },
  {
    name: 'Joint Venture',
    icon: '🤝',
    desc: 'Deeper commercial or capital partnership — new lane build-out, exclusive supply arrangement, equity in a specific vertical. Reserved for partners we\'re running significant volume with.',
    fit: 'Established partners · Strategic capital · Vertical specialists',
  },
];

const WE_LOOK_FOR = [
  'Corridor experience — you\'ve moved goods, money, or customers between the US and Nigeria before',
  'Transparent pricing — flat, predictable, defensible. No hidden fees, no surprise surcharges',
  'Service SLAs you can actually hit — we tell customers what to expect and we hold you to it',
  'Clean compliance posture — licenses, registrations, insurance, whatever your category requires',
  'Direct communication — one accountable person we can reach when things move fast',
  'Willingness to grow with us — we\'re early, and the partners who help now get the strongest hand later',
];

export default function PartnersPage() {
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onS = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); }),
      { threshold: 0.1 }
    );
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const r = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{G}</style>
      <div className="mesh-bg" />

      {modal && <PartnerModal onClose={() => setModal(false)} />}

      <nav className={scrolled ? 'sc' : ''}>
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          Xaecco<span className="logo-x">X</span>
          <span className="logo-badge">Partners</span>
        </Link>
        <ul className="nav-links">
          <li><a onClick={() => go('types')} style={{ cursor: 'pointer' }}>Partner Types</a></li>
          <li><a onClick={() => go('how')} style={{ cursor: 'pointer' }}>How It Works</a></li>
          <li><a onClick={() => go('models')} style={{ cursor: 'pointer' }}>Engagement</a></li>
          <li><a onClick={() => go('criteria')} style={{ cursor: 'pointer' }}>Criteria</a></li>
          <li><Link to="/" style={{ color: 'var(--w3)', textDecoration: 'none' }}>← XaeccoX</Link></li>
        </ul>
        <div className="nav-right">
          <a href="mailto:info@xaeccox.io?subject=Partnership%20question" className="btn-nav-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>Ask a question</a>
          <button className="btn-nav-cta" onClick={() => setModal(true)}>Apply to partner</button>
        </div>
      </nav>

      <section id="hero-p" style={{ padding: '160px 72px 90px', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ right: '5%', top: '20%' }} />
        <div style={{ maxWidth: 920 }}>
          <div className="hero-status">
            <span className="hs-dot" /><span className="hs-txt">Applications open · Reply in 2 business days</span>
          </div>
          <h1 className="hero-h">
            Work with XaeccoX.<br />
            <span className="arc">Grow the corridor.</span>
            <span className="serif">Freight carriers, warehouses, customs brokers, suppliers, referral partners, and financial partners — build the US ↔ Nigeria corridor with us.</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: 640 }}>
            XaeccoX is the customer-facing trade operator for the US ↔ Nigeria corridor. Our partner network is what makes end-to-end delivery real — from US warehouse to Lagos doorstep. We run weekly volume and are actively opening new partnership slots.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => setModal(true)}>Apply to partner</button>
            <button className="btn-secondary" onClick={() => go('types')}>See partner types →</button>
          </div>
        </div>
      </section>

      <section id="types">
        <div className="fu" ref={r}>
          <div className="stag">Partner Types</div>
          <h2 className="sh">Six categories of partner<br /><span className="acc">across the corridor.</span></h2>
          <p className="sdesc">If your organisation fits one of these — or something adjacent — we should talk.</p>
        </div>
        <div className="fu" ref={r} style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {PARTNER_TYPES.map((p, i) => (
            <div key={p.name} className="market-card" style={{ padding: '32px 30px', transitionDelay: `${i * 0.05}s`, '--accent': p.accent }} data-ghost={p.name.split(' ')[0].toUpperCase()}>
              <div style={{ fontSize: 26, marginBottom: 14 }}>{p.icon}</div>
              <div className="mc-title" style={{ fontSize: 20, marginBottom: 10 }}>{p.name}</div>
              <div className="mc-desc" style={{ marginBottom: 20 }}>{p.desc}</div>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blu)', marginBottom: 6 }}>What you get</div>
              <div style={{ fontSize: 12.5, color: 'var(--w2)', marginBottom: 14, lineHeight: 1.6 }}>{p.what}</div>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--vio)', marginBottom: 6 }}>What we're looking for</div>
              <div style={{ fontSize: 12.5, color: 'var(--w3)', lineHeight: 1.6 }}>{p.seek}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt" id="how">
        <div className="fu" ref={r}>
          <div className="stag">How It Works</div>
          <h2 className="sh">From enquiry to first booking<br /><span className="acc">in four moves.</span></h2>
        </div>
        <div className="meth-wrap fu" ref={r}>
          {HOW_STEPS.map((s, i) => (
            <div className="meth-step" key={i}>
              <div className="meth-n">{s.n}</div>
              <div className="meth-tag">Step {s.n}</div>
              <div className="meth-title">{s.t}</div>
              <div className="meth-desc">{s.d}</div>
              {i < 3 && <div className="meth-connector">→</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="models">
        <div className="fu" ref={r}>
          <div className="stag">Engagement Models</div>
          <h2 className="sh">Three ways<br /><span className="acc">we work together.</span></h2>
          <p className="sdesc">We tailor the commercial shape to what actually fits — we don't force a template.</p>
        </div>
        <div className="fu" ref={r} style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {ENGAGEMENT_MODELS.map((m, i) => (
            <div key={m.name} className="sol-card fu" ref={r} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div style={{ fontSize: 26, marginBottom: 14 }}>{m.icon}</div>
              <div className="sol-t" style={{ marginBottom: 12 }}>{m.name}</div>
              <div className="sol-d">{m.desc}</div>
              <div className="sol-tags" style={{ marginTop: 18 }}>
                <span className="sol-tag">Fits: {m.fit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt" id="criteria">
        <div className="fu" ref={r}>
          <div className="stag">What We Look For</div>
          <h2 className="sh">Six things<br /><span className="acc">every partnership needs.</span></h2>
        </div>
        <div className="fu" ref={r} style={{ marginTop: 52, maxWidth: 820, margin: '52px auto 0' }}>
          {WE_LOOK_FOR.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, padding: '18px 0', borderBottom: i < WE_LOOK_FOR.length - 1 ? '1px solid var(--b1)' : 'none' }}>
              <div style={{ fontFamily: 'var(--fm)', fontSize: 12, letterSpacing: '.08em', color: 'var(--blu)', minWidth: 32 }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: 15, color: 'var(--w2)', lineHeight: 1.65 }}>{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" id="apply">
        <div className="cta-glow" /><div className="cta-grid-lines" />
        <div className="stag fu" ref={r} style={{ justifyContent: 'center' }}>Ready to partner</div>
        <h2 className="cta-h fu" ref={r}>
          Apply in three minutes.<br /><span className="acc">Every application read by the founder.</span>
        </h2>
        <p className="cta-sub">Tell us about your organisation and what you're looking for. We reply within 2 business days.</p>
        <div className="cta-actions">
          <button className="btn-cta-p" onClick={() => setModal(true)}>Apply to partner</button>
          <a href="mailto:info@xaeccox.io?subject=Partnership%20question" className="btn-cta-g" style={{ textDecoration: 'none', display: 'inline-block' }}>Ask a question first →</a>
        </div>
      </section>

      <footer>
        <div className="ft-grid">
          <div>
            <div className="ft-logo">Xaecco<span>X</span> Partners</div>
            <div className="ft-tagline">The partner network behind XaeccoX's US ↔ Nigeria trade operations. Grow the corridor with us.</div>
            <div className="ft-socials" style={{ marginTop: 20 }}>
              <a href="mailto:info@xaeccox.io" className="ft-soc" style={{ textDecoration: 'none', color: 'inherit' }} title="Email">@</a>
            </div>
          </div>
          <div>
            <div className="ft-col-hd">Partner Types</div>
            <ul className="ft-links">
              {PARTNER_TYPES.slice(0, 6).map(p => (
                <li key={p.name}><a onClick={() => go('types')} style={{ cursor: 'pointer' }}>{p.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-col-hd">Engage</div>
            <ul className="ft-links">
              <li><a onClick={() => go('how')} style={{ cursor: 'pointer' }}>How it works</a></li>
              <li><a onClick={() => go('models')} style={{ cursor: 'pointer' }}>Engagement models</a></li>
              <li><a onClick={() => go('criteria')} style={{ cursor: 'pointer' }}>What we look for</a></li>
              <li><a onClick={() => setModal(true)} style={{ cursor: 'pointer' }}>Apply →</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-col-hd">XAECCOX</div>
            <ul className="ft-links">
              <li><Link to="/">XaeccoX customers</Link></li>
              <li><Link to="/tech">XaeTech ↗</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--b1)', padding: '24px 0 18px', marginTop: 8, fontSize: 12, color: 'var(--w3)', lineHeight: 1.75, fontFamily: 'var(--fd)' }}>
          <strong style={{ color: 'var(--w2)', fontWeight: 600 }}>XAECCOX LLC</strong> · Delaware limited liability company · US-side principal entity
          <br />
          <strong style={{ color: 'var(--w2)', fontWeight: 600 }}>XaeccoX Solution Enterprise</strong> · Nigeria · NG-side principal entity
          <br />
          Registered US office: 651 N Broad St, Middletown, Delaware 19709, United States
          <span style={{ margin: '0 8px', color: 'var(--w4)' }}>·</span>
          Operated by Chukwura Okoli
          <br />
          Email <a href="mailto:info@xaeccox.io" style={{ color: 'var(--blu)', textDecoration: 'none' }}>info@xaeccox.io</a>
          <span style={{ margin: '0 8px', color: 'var(--w4)' }}>·</span>
          Phone / WhatsApp <a href="tel:+12673618234" style={{ color: 'var(--blu)', textDecoration: 'none' }}>+1 (267) 361-8234</a>
        </div>

        <div className="ft-bottom">
          <span>© 2026 XAECCOX LLC · Built corridor-first</span>
          <div className="ft-badges">
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}><span className="ft-b">Privacy</span></Link>
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}><span className="ft-b">Terms</span></Link>
            <span className="ft-b">Partners network · Corridor</span>
          </div>
        </div>
      </footer>
    </>
  );
}
