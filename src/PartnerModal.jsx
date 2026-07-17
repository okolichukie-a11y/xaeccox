import { useState, useEffect, useRef } from 'react';
import {
  Ship, Warehouse, ShieldCheck, Store, Megaphone, CreditCard,
} from 'lucide-react';

const PARTNER_TYPES = [
  { id: 'freight', Icon: Ship, name: 'Freight Carrier', desc: 'Ocean, air, or land carrier serving US ↔ NG' },
  { id: 'warehouse', Icon: Warehouse, name: 'Warehouse Operator', desc: 'Consolidation, storage, deconsolidation' },
  { id: 'customs', Icon: ShieldCheck, name: 'Customs Broker', desc: 'Licensed on either side of the corridor' },
  { id: 'supplier', Icon: Store, name: 'Supplier / Producer', desc: 'US or Nigerian goods for corridor demand' },
  { id: 'referral', Icon: Megaphone, name: 'Referral / Community', desc: 'Diaspora networks, chambers, WhatsApp groups' },
  { id: 'financial', Icon: CreditCard, name: 'Financial / Insurance', desc: 'Payment, FX, cargo insurance partners' },
];

function partnerRef() {
  return 'XCX-PT-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Date.now().toString().slice(-4);
}

export default function PartnerModal({ onClose }) {
  const [partnerType, setPartnerType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [region, setRegion] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [years, setYears] = useState('');
  const [capability, setCapability] = useState('');
  const [interest, setInterest] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [done, setDone] = useState(false);
  const [ref] = useState(partnerRef());
  const bodyRef = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const validate = () => {
    const e = {};
    if (!partnerType) e.partnerType = true;
    if (!orgName.trim()) e.orgName = true;
    if (!region.trim()) e.region = true;
    if (!firstName.trim()) e.firstName = true;
    if (!lastName.trim()) e.lastName = true;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = true;
    if (!phone.trim()) e.phone = true;
    if (!capability.trim()) e.capability = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    const pt = PARTNER_TYPES.find(p => p.id === partnerType);
    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'xpqbpjky';
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `XaeccoX Partner Application — ${pt?.name || partnerType} — ${orgName}`,
          reference: ref,
          request_type: 'Partner Application',
          partner_type: pt?.name || partnerType,
          organization: orgName,
          region_of_operation: region,
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          website,
          years_operating: years,
          capability,
          areas_of_interest: interest,
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

  const selected = PARTNER_TYPES.find(p => p.id === partnerType);

  return (
    <div className="bk-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bk-modal">
        <div className="bkh">
          <div className="bkh-l">
            <div className="bkh-ey">Partner Application</div>
            <div className="bkh-title">Work with <span>XaeccoX</span></div>
            <div className="bkh-sub">Tell us about your organisation and where you'd fit across the US ↔ Nigeria corridor. We reply within 2 business days.</div>
          </div>
          <button className="bkh-close" onClick={onClose}>✕</button>
        </div>

        {!done ? (
          <>
            <div className="bk-body" ref={bodyRef}>
              <div className="bks-label">Step 1 — Partner type</div>
              <div className="bks-h" style={{ marginBottom: 14 }}>Where do you fit?</div>
              <div className="diag-type-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
                {PARTNER_TYPES.map(p => (
                  <div key={p.id} className={`dtype-card${partnerType === p.id ? ' selected' : ''}`} onClick={() => setPartnerType(p.id)} style={{ padding: '14px 14px' }}>
                    <div className="dtype-check">✓</div>
                    <div className="dtype-ic" style={{ marginBottom: 8, color: 'var(--blu)' }}><p.Icon size={20} strokeWidth={1.6}/></div>
                    <div className="dtype-name" style={{ fontSize: 13 }}>{p.name}</div>
                    <div className="dtype-desc" style={{ fontSize: 11 }}>{p.desc}</div>
                  </div>
                ))}
              </div>
              {errors.partnerType && <div className="bk-field-err">⚠ Please select a partner type</div>}

              <div className="bks-label" style={{ marginTop: 28 }}>Step 2 — About your organisation</div>
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">Organisation Name <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.orgName ? ' err' : ''}`} value={orgName} onChange={e => setOrgName(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Region of Operation <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.region ? ' err' : ''}`} placeholder="e.g. Lagos, Nigeria · US Gulf Coast · East Coast US" value={region} onChange={e => setRegion(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">Website (optional)</label>
                  <input className="bk-input" placeholder="https://" value={website} onChange={e => setWebsite(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Years Operating (optional)</label>
                  <input className="bk-input" placeholder="e.g. 8 years" value={years} onChange={e => setYears(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full" style={{ marginBottom: 13 }}>
                <div className="bk-field">
                  <label className="bk-label">What do you do? <span className="bk-req">*</span></label>
                  <textarea className={`bk-input bk-textarea${errors.capability ? ' err' : ''}`} placeholder="Capability, capacity, lanes served, service classes, licences held" value={capability} onChange={e => setCapability(e.target.value)} />
                </div>
              </div>

              <div className="bks-label" style={{ marginTop: 20 }}>Step 3 — Contact</div>
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
                  <label className="bk-label">What kind of engagement are you looking for? (optional)</label>
                  <textarea className="bk-input bk-textarea" placeholder="Preferred vendor, revenue share, referral commission, joint venture, or something else" value={interest} onChange={e => setInterest(e.target.value)} />
                </div>
              </div>
            </div>

            {submitError && <div className="bk-submit-err">⚠ {submitError}</div>}

            <div className="bk-footer">
              <div className="bk-footer-info">
                <strong>We reply within 2 business days</strong>
                Every application read by the founder · No spam ever
              </div>
              <div className="bk-footer-btns">
                <button className="btn-bk-next" onClick={handleSubmit} disabled={submitting}>
                  {submitting
                    ? <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="bk-spinner" />Sending…</span>
                    : 'Send application →'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bk-success">
            <div className="bks-icon">✓</div>
            <div className="bks-tag">Application received</div>
            <div className="bks-h">Got it — thank you.</div>
            <div className="bks-sub">Your partner application is in. A member of the XaeccoX team will review and come back to <strong>{email}</strong> within 2 business days.</div>
            <div className="bks-ref">Reference: <span>{ref}</span></div>
            <div className="bks-cards">
              <div className="bksc"><div className="bksc-ic">🤝</div><div className="bksc-lbl">Partner Type</div><div className="bksc-val">{selected?.name}</div></div>
              <div className="bksc"><div className="bksc-ic">🏢</div><div className="bksc-lbl">Organisation</div><div className="bksc-val" style={{ fontSize: 11 }}>{orgName}</div></div>
              <div className="bksc"><div className="bksc-ic">📧</div><div className="bksc-lbl">Reply to</div><div className="bksc-val" style={{ fontSize: 11 }}>{email}</div></div>
            </div>
            <div className="bks-actions">
              <button className="btn-bks p" onClick={onClose}>Back to Partners</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
