import { useState, useEffect, useRef } from 'react';

const SERVICE_CATEGORIES = [
  { id: 'container', icon: '📦', name: 'Container Shipping', desc: 'FCL / LCL between US and NG' },
  { id: 'sourcing', icon: '🛒', name: 'Sourcing & Procurement', desc: 'Find suppliers, negotiate, procure' },
  { id: 'customs', icon: '🛃', name: 'Customs Clearing', desc: 'Apapa, Tin Can, MMIA, US ports' },
  { id: 'consolidation', icon: '🏭', name: 'Consolidation', desc: 'Multi-supplier US-side consolidation' },
  { id: 'auto', icon: '🚗', name: 'Auto / Vehicle Import', desc: 'US ↔ NG vehicle shipping + clearing' },
  { id: 'commodity', icon: '🌾', name: 'Commodity Trade', desc: 'Cocoa, sesame, palm oil, and more' },
  { id: 'lastmile', icon: '🚚', name: 'Last-Mile Delivery', desc: 'Door delivery across Nigeria' },
  { id: 'other', icon: '🧭', name: 'Something Else', desc: 'Tell us what you need' },
];

const TIMELINES = [
  'ASAP — as soon as possible',
  'Within 30 days',
  'Within 60–90 days',
  'Longer term / flexible',
  'Just exploring',
];

function qRef() {
  return 'XCX-Q-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Date.now().toString().slice(-4);
}

export default function QuoteModal({ onClose }) {
  const [service, setService] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [goods, setGoods] = useState('');
  const [timeline, setTimeline] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [done, setDone] = useState(false);
  const [ref] = useState(qRef());
  const bodyRef = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const validate = () => {
    const e = {};
    if (!service) e.service = true;
    if (!origin.trim()) e.origin = true;
    if (!destination.trim()) e.destination = true;
    if (!goods.trim()) e.goods = true;
    if (!firstName.trim()) e.firstName = true;
    if (!lastName.trim()) e.lastName = true;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = true;
    if (!phone.trim()) e.phone = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    const svc = SERVICE_CATEGORIES.find(s => s.id === service);
    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'xpqbpjky';
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `XaeccoX Trade Quote — ${svc?.name || service} — ${firstName} ${lastName}`,
          reference: ref,
          request_type: 'Trade Quote',
          service_category: svc?.name || service,
          origin,
          destination,
          goods_description: goods,
          timeline,
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          company,
          notes,
        }),
      });
      if (!res.ok) throw new Error('SUBMIT_FAILED');
      setDone(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email info@xaeccox.io directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedService = SERVICE_CATEGORIES.find(s => s.id === service);

  return (
    <div className="bk-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bk-modal">
        <div className="bkh">
          <div className="bkh-l">
            <div className="bkh-ey">Trade Quote Request</div>
            <div className="bkh-title">Tell us what you're <span>trading</span></div>
            <div className="bkh-sub">Corridor operator across US ↔ Nigeria. We'll come back with a scoped quote within one business day.</div>
          </div>
          <button className="bkh-close" onClick={onClose}>✕</button>
        </div>

        {!done ? (
          <>
            <div className="bk-body" ref={bodyRef}>
              <div className="bks-label">Step 1 — Service</div>
              <div className="bks-h" style={{ marginBottom: 14 }}>What kind of trade?</div>
              <div className="diag-type-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
                {SERVICE_CATEGORIES.map(s => (
                  <div key={s.id} className={`dtype-card${service === s.id ? ' selected' : ''}`} onClick={() => setService(s.id)} style={{ padding: '14px 14px' }}>
                    <div className="dtype-check">✓</div>
                    <div className="dtype-ic" style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                    <div className="dtype-name" style={{ fontSize: 13 }}>{s.name}</div>
                    <div className="dtype-desc" style={{ fontSize: 11 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
              {errors.service && <div className="bk-field-err">⚠ Please select a service</div>}

              <div className="bks-label" style={{ marginTop: 28 }}>Step 2 — Route + Goods</div>
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">Origin <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.origin ? ' err' : ''}`} placeholder="e.g. Philadelphia, USA" value={origin} onChange={e => setOrigin(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Destination <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.destination ? ' err' : ''}`} placeholder="e.g. Lagos, Nigeria" value={destination} onChange={e => setDestination(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full" style={{ marginBottom: 13 }}>
                <div className="bk-field">
                  <label className="bk-label">What are you shipping / sourcing? <span className="bk-req">*</span></label>
                  <textarea className={`bk-input bk-textarea${errors.goods ? ' err' : ''}`} placeholder="e.g. 40ft container of assorted foodstuffs · 2 SUVs (Toyota Highlander 2019, 2021) · 500kg dried hibiscus · medical equipment (specifics)" value={goods} onChange={e => setGoods(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full">
                <div className="bk-field">
                  <label className="bk-label">When do you need this?</label>
                  <select className="bk-input bk-select" value={timeline} onChange={e => setTimeline(e.target.value)}>
                    <option value="">Select timeline</option>
                    {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="bks-label" style={{ marginTop: 28 }}>Step 3 — Your contact</div>
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">First Name <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.firstName ? ' err' : ''}`} value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Last Name <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.lastName ? ' err' : ''}`} value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">Email <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.email ? ' err' : ''}`} type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Phone / WhatsApp <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.phone ? ' err' : ''}`} placeholder="+234 or +1..." value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full">
                <div className="bk-field">
                  <label className="bk-label">Company (optional)</label>
                  <input className="bk-input" value={company} onChange={e => setCompany(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full">
                <div className="bk-field">
                  <label className="bk-label">Additional notes</label>
                  <textarea className="bk-input bk-textarea" placeholder="Budget, prior corridor experience, specific supplier or destination detail, anything else useful" value={notes} onChange={e => setNotes(e.target.value)} />
                </div>
              </div>
            </div>

            {submitError && <div className="bk-submit-err">⚠ {submitError}</div>}

            <div className="bk-footer">
              <div className="bk-footer-info">
                <strong>We reply within 1 business day</strong>
                No commitment · No custody of funds until a trade is agreed
              </div>
              <div className="bk-footer-btns">
                <button className="btn-bk-next" onClick={handleSubmit} disabled={submitting}>
                  {submitting
                    ? <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="bk-spinner" />Sending…</span>
                    : 'Send quote request →'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bk-success">
            <div className="bks-icon">✓</div>
            <div className="bks-tag">Quote request received</div>
            <div className="bks-h">Thanks — we've got it.</div>
            <div className="bks-sub">Your trade quote request has been received. A member of the XaeccoX team will review and come back to you at <strong>{email}</strong> within 1 business day.</div>
            <div className="bks-ref">Reference: <span>{ref}</span></div>
            <div className="bks-cards">
              <div className="bksc"><div className="bksc-ic">📦</div><div className="bksc-lbl">Service</div><div className="bksc-val">{selectedService?.name}</div></div>
              <div className="bksc"><div className="bksc-ic">📍</div><div className="bksc-lbl">Route</div><div className="bksc-val" style={{ fontSize: 11 }}>{origin} → {destination}</div></div>
              <div className="bksc"><div className="bksc-ic">📧</div><div className="bksc-lbl">Reply to</div><div className="bksc-val" style={{ fontSize: 11 }}>{email}</div></div>
            </div>
            <div className="bks-next">
              <strong>What happens next</strong>
              We review your request against corridor capacity, current freight and clearance costs, and your timeline. You'll get either a scoped quote or a follow-up questionnaire from <strong>info@xaeccox.io</strong>. Reply on that thread if anything changes.
            </div>
            <div className="bks-actions">
              <button className="btn-bks p" onClick={onClose}>Back to XaeccoX</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
