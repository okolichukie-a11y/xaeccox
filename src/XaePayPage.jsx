import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { G } from './styles';
import {
  Waypoints, ShieldCheck, ScrollText, Bot,
  Layers, Briefcase, Building2, Users, ExternalLink,
} from 'lucide-react';

const CAPABILITIES = [
  {
    Icon: Waypoints,
    title: 'Multi-rail routing',
    desc: 'Rail-agnostic router across licensed cross-border rails. Every transaction picks the best-fit rail for corridor, currency, speed, cost, and compliance posture in real time.',
  },
  {
    Icon: ShieldCheck,
    title: 'Compliance automation',
    desc: 'Regulatory documentation, sanctions screening, KYC pass-through, and CBN / SCUML / NFIU-shaped reporting generated per transaction. Built for licensed operators; consumed by their compliance teams.',
  },
  {
    Icon: ScrollText,
    title: 'Audit-grade logging',
    desc: 'Every leg, every routing decision, every rail hop — recorded in a defensible ledger. What your compliance team, your auditor, or your regulator wants to see, without cobbling logs from four different rails.',
  },
  {
    Icon: Bot,
    title: 'AI compliance agents',
    desc: 'Autonomous agents scanning invoices for RFI risk, screening recipients against sanctions lists, and tracking partial-payment reconciliation — before an operator has to intervene manually.',
  },
];

const TIERS = [
  {
    Icon: Layers,
    tier: 'Tier 1',
    name: 'Licensed Rails',
    desc: 'Cedar Money, Triple-A, and other licensed cross-border rails. Provide the regulatory umbrella and actual money movement.',
    posture: 'XaePay is rail-agnostic — no rail is ever >70% of volume.',
    color: 'var(--w3)',
    featured: false,
  },
  {
    Icon: Briefcase,
    tier: 'Tier 2',
    name: 'Licensed Operators',
    desc: 'BDCs, IMTOs, MSBs, licensed fintechs. Buy: operator cockpit, AI agents, compliance automation, cross-corridor coverage.',
    posture: 'Primary XaePay SaaS customer. Subscription + volume fees.',
    color: 'var(--blu)',
    featured: true,
  },
  {
    Icon: Building2,
    tier: 'Tier 3',
    name: 'Businesses',
    desc: 'Trading businesses, importers, service companies, consumer-facing apps, marketplaces. Includes XaeccoX itself.',
    posture: 'Second XaePay customer segment. Collection + routing + operator marketplace.',
    color: 'var(--vio)',
    featured: true,
  },
  {
    Icon: Users,
    tier: 'Tier 4',
    name: 'End Customers',
    desc: 'Individuals + smaller businesses. Interact only with the operator or business serving them.',
    posture: 'XaePay never touches end customers directly.',
    color: 'var(--w3)',
    featured: false,
  },
];

export default function XaePayPage() {
  const [scrolled, setScrolled] = useState(false);
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

      <nav className={scrolled ? 'sc' : ''}>
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          Xaecco<span className="logo-x">X</span>
          <span className="logo-badge">XaePay</span>
        </Link>
        <ul className="nav-links">
          <li><a onClick={() => go('capabilities')} style={{ cursor: 'pointer' }}>Capabilities</a></li>
          <li><a onClick={() => go('model')} style={{ cursor: 'pointer' }}>Four-tier Model</a></li>
          <li><a onClick={() => go('origin')} style={{ cursor: 'pointer' }}>Origin</a></li>
          <li><a onClick={() => go('inside')} style={{ cursor: 'pointer' }}>Inside XaeccoX</a></li>
          <li><Link to="/tech" style={{ color: 'var(--w3)', textDecoration: 'none' }}>← XaeTech</Link></li>
        </ul>
        <div className="nav-right">
          <a href="mailto:info@xaeccox.io?subject=XaePay%20enquiry" className="btn-nav-ghost" style={{ textDecoration: 'none', display: 'inline-block' }}>Talk to us</a>
          <a href="https://xaepay.com" target="_blank" rel="noopener noreferrer" className="btn-nav-cta" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Visit xaepay.com <ExternalLink size={12} strokeWidth={2}/></a>
        </div>
      </nav>

      <section id="hero-xp" style={{ padding: '160px 72px 100px', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ right: '5%', top: '20%' }} />
        <div style={{ maxWidth: 920 }}>
          <div className="hero-status">
            <span className="hs-dot" /><span className="hs-txt">Live · Selling to Licensed Operators + Businesses</span>
          </div>
          <h1 className="hero-h">
            XaePay — the operating layer<br />
            for <span className="arc">cross-border payments.</span>
            <span className="serif">B2B software above licensed rails. Built for BDCs, IMTOs, MSBs, and businesses moving funds across corridors — including XaeccoX itself.</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: 640 }}>
            XaePay is the payments product under XaeTech. Rail-agnostic routing, AI compliance agents, audit-grade logging, and cross-side intelligence no single rail or operator can see on their own. Live at <a href="https://xaepay.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blu)', textDecoration: 'none', borderBottom: '1px solid var(--ba)' }}>xaepay.com</a>.
          </p>
          <div className="hero-actions">
            <a href="https://xaepay.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Visit xaepay.com <ExternalLink size={16} strokeWidth={2}/></a>
            <button className="btn-secondary" onClick={() => go('model')}>See the four-tier model →</button>
          </div>
        </div>
      </section>

      <section id="capabilities">
        <div className="fu" ref={r}>
          <div className="stag">Capabilities</div>
          <h2 className="sh">Four things<br /><span className="acc">XaePay does end-to-end.</span></h2>
          <p className="sdesc">The operating layer above licensed rails, built specifically for cross-border corridor complexity.</p>
        </div>
        <div className="fu" ref={r} style={{ marginTop: 60, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
          {CAPABILITIES.map((c, i) => (
            <div key={c.title} className="sol-card fu" ref={r} style={{ transitionDelay: `${i * 0.07}s` }}>
              <div style={{ marginBottom: 16, color: 'var(--blu)' }}><c.Icon size={26} strokeWidth={1.5}/></div>
              <div className="sol-t" style={{ marginBottom: 10 }}>{c.title}</div>
              <div className="sol-d">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt" id="model">
        <div className="fu" ref={r}>
          <div className="stag">The Four-Tier Model</div>
          <h2 className="sh">Where XaePay sits<br /><span className="acc">in the payments stack.</span></h2>
          <p className="sdesc">XaePay is B2B software above licensed rails. It never becomes an MSB, never custodies customer funds, and never competes with any of its three customer sides.</p>
        </div>
        <div className="fu" ref={r} style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {TIERS.map((t, i) => (
            <div key={t.tier} className="glass-card" style={{ padding: '28px 32px', borderRadius: 'var(--r12)', borderLeftWidth: 3, borderLeftStyle: 'solid', borderLeftColor: t.color, opacity: t.featured ? 1 : 0.75 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 300px', gap: 24, alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: t.color }}>
                  <t.Icon size={26} strokeWidth={1.5}/>
                  <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.16em', color: t.color, marginTop: 6 }}>{t.tier}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: 18, marginBottom: 6, color: 'var(--w)' }}>{t.name}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--w3)', lineHeight: 1.65 }}>{t.desc}</div>
                </div>
                <div style={{ fontFamily: 'var(--fm)', fontSize: 11, color: t.color, lineHeight: 1.55, textAlign: 'right', letterSpacing: '.02em' }}>
                  {t.posture}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--fm)', fontSize: 10, color: 'var(--w4)', textAlign: 'center', marginTop: 24, letterSpacing: '.04em', lineHeight: 1.6 }}>
          XaePay is B2B software · Payment execution + FX by licensed rail partners · We do not custody customer funds
        </p>
      </section>

      <section id="origin">
        <div className="fu" ref={r} style={{ maxWidth: 780 }}>
          <div className="stag">Origin Story</div>
          <h2 className="sh">Why we <span className="acc">built XaePay.</span></h2>
          <p className="agent-prose" style={{ margin: '32px 0 18px', fontSize: 16, maxWidth: 720 }}>
            XaeccoX started as a customer of licensed cross-border rails — Cedar Money and Triple-A. Within weeks of onboarding, we noticed a pattern: the rails quietly relabelled us as an <em>agent</em>. Meaning: refer other businesses to us so we can onboard them directly and cut you out over time.
          </p>
          <p className="agent-prose" style={{ margin: '0 0 18px', fontSize: 16, maxWidth: 720 }}>
            The disintermediation risk was obvious from the inside. Every "agent" was one contract renewal away from being replaced. So we built XaePay in response — not as another middleman waiting to be disintermediated, but as the <strong>operating layer above the rails</strong> that makes the whole stack work for operators and businesses that don't want to become dependent on any single rail.
          </p>
          <p className="agent-prose" style={{ margin: '0 0 18px', fontSize: 16, maxWidth: 720 }}>
            This is the Shopify move applied to cross-border payments. Merchant → platform for merchants. The insight: rails will always try to disintermediate their agents. You defeat that by building the layer they don't want to build and can't easily replicate.
          </p>
          <p className="agent-prose" style={{ margin: '0', fontSize: 16, color: 'var(--w2)', maxWidth: 720 }}>
            XaePay routes across multiple licensed rails, keeps the cross-side intelligence no single rail can see, and stays clean of the money-transmission licensing that would put us in direct competition with the rails we route through. Everyone wins — except the disintermediators.
          </p>
        </div>
      </section>

      <section className="alt" id="inside">
        <div className="fu" ref={r}>
          <div className="stag">Inside XaeccoX</div>
          <h2 className="sh">The first serious<br /><span className="acc">XaePay customer.</span></h2>
          <p className="sdesc">XaeccoX runs its own corridor trade payments through XaePay. Real invoices, real corridor flow, real multi-currency settlement — the dogfood that shapes the product.</p>
        </div>
        <div className="fu" ref={r} style={{ marginTop: 52, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          <div className="glass-card" style={{ padding: '28px 26px', borderRadius: 'var(--r12)' }}>
            <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--jade)', marginBottom: 14 }}>Collection</div>
            <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: 16, marginBottom: 10, color: 'var(--w)' }}>USD to XaeccoX LLC</div>
            <div style={{ fontSize: 13, color: 'var(--w3)', lineHeight: 1.7 }}>Customer payments to our Delaware entity route through XaePay's US-side collection rails. Every payment tied to an order invoice.</div>
          </div>
          <div className="glass-card" style={{ padding: '28px 26px', borderRadius: 'var(--r12)' }}>
            <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blu)', marginBottom: 14 }}>Settlement</div>
            <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: 16, marginBottom: 10, color: 'var(--w)' }}>Cross-corridor via licensed rails</div>
            <div style={{ fontSize: 13, color: 'var(--w3)', lineHeight: 1.7 }}>Intercompany + supplier settlements between XaeccoX LLC and XaeccoX Solution Enterprise flow through Cedar / Triple-A rails, orchestrated by XaePay.</div>
          </div>
          <div className="glass-card" style={{ padding: '28px 26px', borderRadius: 'var(--r12)' }}>
            <div style={{ fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--vio)', marginBottom: 14 }}>Compliance</div>
            <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: 16, marginBottom: 10, color: 'var(--w)' }}>Audit-grade documentation</div>
            <div style={{ fontSize: 13, color: 'var(--w3)', lineHeight: 1.7 }}>Every corridor payment leg documented for CBN, SCUML, and audit purposes. AI compliance agents flag issues before they become RFIs.</div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="visit">
        <div className="cta-glow" /><div className="cta-grid-lines" />
        <div className="stag fu" ref={r} style={{ justifyContent: 'center' }}>Go deeper</div>
        <h2 className="cta-h fu" ref={r}>
          Product detail, pricing,<br /><span className="acc">sign-up — all live at xaepay.com.</span>
        </h2>
        <p className="cta-sub">This page is the ecosystem view. Full product surface, integration docs, tier pricing, and account signup live on the standalone product site.</p>
        <div className="cta-actions">
          <a href="https://xaepay.com" target="_blank" rel="noopener noreferrer" className="btn-cta-p" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10 }}>Visit xaepay.com <ExternalLink size={16} strokeWidth={2}/></a>
          <a href="mailto:info@xaeccox.io?subject=XaePay%20enterprise%20enquiry" className="btn-cta-g" style={{ textDecoration: 'none', display: 'inline-block' }}>Talk to us →</a>
        </div>
      </section>

      <footer>
        <div className="ft-grid">
          <div>
            <div className="ft-logo">Xaecco<span>X</span> Pay</div>
            <div className="ft-tagline">The operating layer for cross-border payments. Built above licensed rails, sold to licensed operators + businesses. A XaeTech product under XAECCOX LLC.</div>
          </div>
          <div>
            <div className="ft-col-hd">Learn</div>
            <ul className="ft-links">
              <li><a onClick={() => go('capabilities')} style={{ cursor: 'pointer' }}>Capabilities</a></li>
              <li><a onClick={() => go('model')} style={{ cursor: 'pointer' }}>Four-tier Model</a></li>
              <li><a onClick={() => go('origin')} style={{ cursor: 'pointer' }}>Origin story</a></li>
              <li><a onClick={() => go('inside')} style={{ cursor: 'pointer' }}>Inside XaeccoX</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-col-hd">Engage</div>
            <ul className="ft-links">
              <li><a href="https://xaepay.com" target="_blank" rel="noopener noreferrer">xaepay.com ↗</a></li>
              <li><a href="mailto:info@xaeccox.io?subject=XaePay%20enterprise%20enquiry">Enterprise enquiry</a></li>
              <li><a href="mailto:info@xaeccox.io?subject=XaePay%20partnership">Partner with XaePay</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-col-hd">Ecosystem</div>
            <ul className="ft-links">
              <li><Link to="/tech">XaeTech</Link></li>
              <li><Link to="/">XaeccoX customers</Link></li>
              <li><Link to="/partners">XaeccoX partners</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--b1)', padding: '24px 0 18px', marginTop: 8, fontSize: 12, color: 'var(--w3)', lineHeight: 1.75, fontFamily: 'var(--fd)' }}>
          <strong style={{ color: 'var(--w2)', fontWeight: 600 }}>XAECCOX LLC</strong> · Delaware limited liability company · doing business as XaeccoX and XaeTech
          <br />
          Registered office: 651 N Broad St, Middletown, Delaware 19709, United States
          <span style={{ margin: '0 8px', color: 'var(--w4)' }}>·</span>
          Operated by Chukwura Okoli
          <br />
          Email <a href="mailto:info@xaeccox.io" style={{ color: 'var(--blu)', textDecoration: 'none' }}>info@xaeccox.io</a>
          <span style={{ margin: '0 8px', color: 'var(--w4)' }}>·</span>
          Phone / WhatsApp <a href="tel:+12673618234" style={{ color: 'var(--blu)', textDecoration: 'none' }}>+1 (267) 361-8234</a>
        </div>

        <div className="ft-bottom">
          <span>© 2026 XAECCOX LLC · XaePay is B2B software · rails handle execution</span>
          <div className="ft-badges">
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}><span className="ft-b">Privacy</span></Link>
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}><span className="ft-b">Terms</span></Link>
          </div>
        </div>
      </footer>
    </>
  );
}
