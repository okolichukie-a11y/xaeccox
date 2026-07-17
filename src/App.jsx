import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { G } from './styles';
import QuoteModal from './QuoteModal';
import PortalAccessModal from './PortalAccessModal';

/* ═══════════════════════════════════════════════════════════════════
   XAECCOX — GLOBAL SUPPLY CHAIN INTELLIGENCE PLATFORM
═══════════════════════════════════════════════════════════════════ */


const CITIES=[
  {id:'Lagos',   x:274, y:256, c:'#F5A623', l:'Lagos'},
  {id:'Nairobi', x:313, y:275, c:'#F5A623', l:'Nairobi'},
  {id:'London',  x:270, y:150, c:'#5282FF', l:'London'},
  {id:'Rotterdam',x:277,y:148, c:'#5282FF', l:'Rotterdam'},
  {id:'NewYork', x:184, y:175, c:'#A259FF', l:'New York'},
  {id:'LA',      x:132, y:191, c:'#A259FF', l:'L.A.'},
  {id:'SaoPaulo',x:216, y:326, c:'#A259FF', l:'São Paulo'},
  {id:'Dubai',   x:334, y:212, c:'#00E5C8', l:'Dubai'},
  {id:'Mumbai',  x:355, y:226, c:'#00E5C8', l:'Mumbai'},
  {id:'Singapore',x:391,y:268, c:'#00E5C8', l:'Singapore'},
  {id:'Shanghai',x:412, y:197, c:'#00E5C8', l:'Shanghai'},
  {id:'Tokyo',   x:433, y:187, c:'#00E5C8', l:'Tokyo'},
];

const ROUTES=[
  {d:'M274,256 Q272,183 270,150',dur:'5s',beg:'0s',   c:'#F5A623'},
  {d:'M274,256 Q200,165 184,175',dur:'6s',beg:'1.2s', c:'#F5A623'},
  {d:'M274,256 Q300,192 334,212',dur:'4.5s',beg:'.5s',c:'#5282FF'},
  {d:'M274,256 Q340,152 412,197',dur:'7.5s',beg:'2s', c:'#00E5C8'},
  {d:'M270,150 Q228,110 184,175',dur:'5.5s',beg:'1.5s',c:'#5282FF'},
  {d:'M270,150 Q300,115 334,212',dur:'5s',beg:'.8s',  c:'#5282FF'},
  {d:'M270,150 Q332,108 391,268',dur:'8s',beg:'3s',   c:'#A259FF'},
  {d:'M184,175 Q157,162 132,191',dur:'4s',beg:'0s',   c:'#A259FF'},
  {d:'M184,175 Q196,252 216,326',dur:'5s',beg:'1s',   c:'#A259FF'},
  {d:'M334,212 Q362,210 391,268',dur:'4.5s',beg:'.5s',c:'#00E5C8'},
  {d:'M391,268 Q401,222 412,197',dur:'4s',beg:'0s',   c:'#00E5C8'},
  {d:'M412,197 Q270,78 132,191', dur:'9s',beg:'2.5s', c:'#A259FF'},
  {d:'M412,197 Q422,182 433,187',dur:'3.5s',beg:'0s', c:'#00E5C8'},
  {d:'M313,275 Q323,238 334,212',dur:'4s',beg:'1s',   c:'#F5A623'},
  {d:'M132,191 Q160,262 216,326',dur:'5s',beg:'.5s',  c:'#A259FF'},
];

const TICKS=[
  {l:'USD/NGN Parallel',v:'₦1,548',d:1},
  {l:'USD/NGN Official',v:'₦1,492',d:1},
  {l:'Apapa Port Dwell',v:'8.3d',d:1},
  {l:'Tin Can Wait',v:'6.1d',d:-1},
  {l:'PH–Lagos Trucking',v:'72hr',d:1},
  {l:'NAFDAC Avg Clearance',v:'14d',d:-1},
  {l:'CBN OMO Rate',v:'24.8%',d:1},
  {l:'LA→Lagos 40HC',v:'$4,820',d:-1},
  {l:'Houston→Lagos 40HC',v:'$5,140',d:1},
  {l:'BDC Spread (avg)',v:'2.4%',d:-1},
  {l:'Brent Crude',v:'$87.4',d:-1},
  {l:'NGX All-Share',v:'104,892',d:1},
];

const LOGS=[
  {t:'09:41:03',msg:'PO-8821 Shanghai→Rotterdam · ETA recalculated · 2-day delay flagged',type:'ex'},
  {t:'09:41:47',msg:'Invoice mismatch detected · PO-8815 · Customs hold risk · Document queued',type:'fl'},
  {t:'09:42:11',msg:'Letter of credit validated · PO-8820 · Singapore→New York · Approved',type:'ok'},
  {t:'09:42:55',msg:'FX window open · EUR/USD spread optimal · Payment execution queued',type:'fl'},
  {t:'09:43:14',msg:'SWIFT MT103 dispatched · ACK received · Supplier notified · T+1',type:'ok'},
  {t:'09:43:52',msg:'Customs hold · PO-8800 · Hamburg port · HS code query · Escalated',type:'es'},
  {t:'09:44:20',msg:'Port congestion alert · LA Long Beach · Alt routing via Seattle identified',type:'fl'},
  {t:'09:44:51',msg:'PO-8791 cleared customs · London Heathrow · Final mile updated',type:'ok'},
];

const MARKETS=[
  {cls:'depth', icon:'🟢', reg:'Active · The Proof', title:'US ↔ Nigeria', ghost:'NOW',
   accent:'linear-gradient(90deg,#F5A623,#FF9500)', ghostC:'#F5A623',
   desc:'Where we go deep. Lagos, Philadelphia, Los Angeles, Houston. CBN compliance, NAFDAC clearance, BDC routing, container consolidation, customs clearing, last-mile to Lagos. Live engagements running.',
   hubs:['Lagos','Philadelphia','Los Angeles','Houston','Abuja']},
  {cls:'roadmap1', icon:'🟡', reg:'12-Month Roadmap', title:'UK ↔ Nigeria', ghost:'12M',
   accent:'linear-gradient(90deg,#5282FF,#7BA3FF)', ghostC:'#5282FF',
   desc:'London ↔ Lagos. Diaspora trade depth, FCA-aligned payment rails, EU customs interoperability for Anglo-Nigerian flows. Sequencing after US–NG operational maturity.',
   hubs:['London','Manchester','Lagos','Abuja']},
  {cls:'roadmap2', icon:'🟡', reg:'18-Month Roadmap', title:'EU ↔ Nigeria', ghost:'18M',
   accent:'linear-gradient(90deg,#A259FF,#C084FC)', ghostC:'#A259FF',
   desc:'Frankfurt, Rotterdam, Antwerp ↔ Lagos. EU Customs Code, EORI registration, SEPA payment rails, REACH compliance for goods crossing Schengen into West Africa.',
   hubs:['Frankfurt','Rotterdam','Antwerp','Lagos']},
  {cls:'roadmap3', icon:'🟡', reg:'24-Month Roadmap', title:'US ↔ Ghana', ghost:'24M',
   accent:'linear-gradient(90deg,#00E5C8,#00B8A3)', ghostC:'#00E5C8',
   desc:'Accra, Tema ↔ US. West Africa expansion via the second-largest English-speaking market on the continent. BoG payment compliance, AfCFTA-enabled cross-border lanes.',
   hubs:['Accra','Tema','New York','Houston']},
];

const SOLUTIONS=[
  {n:'01',t:'Sourcing & Procurement',d:'We find, vet, and buy on your behalf. US B2B suppliers, Nigerian producers, factory-direct sourcing. XaeccoX is the principal buyer on the invoice — you get one clean commercial relationship instead of managing five.',tags:['Supplier Vetting','Procurement','Factory-Direct','Multi-Supplier']},
  {n:'02',t:'Container Consolidation',d:'US-side consolidation warehouses in Philadelphia, Los Angeles, and Houston. Mix diaspora cargo, grocery supply, e-commerce imports, and individual shipments into shared FCL / LCL lanes to Lagos.',tags:['LCL','FCL','US Warehousing','Mixed Cargo']},
  {n:'03',t:'International Freight',d:'Ocean freight (25–35 days Houston → Tin Can) and air freight (3–5 days) between US ports and Lagos. Roll-on / roll-off for vehicles. Booked with carriers we work with weekly — Maersk, MSC, CMA CGM, Delta Cargo.',tags:['Ocean','Air','RoRo','Weekly Sailings']},
  {n:'04',t:'Customs Clearing',d:'Apapa, Tin Can, MMIA on the Nigerian side. US CBP on the American side. HS code review, duty pre-calculation, Form M, SONCAP, PAAR, NAFDAC pre-clearance. Broker oversight to reduce demurrage exposure.',tags:['Apapa','Tin Can','US CBP','NAFDAC','SONCAP','Form M']},
  {n:'05',t:'Last-Mile Delivery',d:'Container drop, deconsolidation, and door delivery. Lagos, Abuja, Port Harcourt, Ibadan on the Nigerian side. Philadelphia, LA, Houston, and interstate on the US side. Track-to-door signature confirmation.',tags:['Door Delivery','Deconsolidation','Nigeria Wide','US Domestic']},
  {n:'06',t:'Payments & Settlement',d:'Multi-currency payment collection — USD to XaeccoX LLC in Delaware, NGN to XaeccoX Solution Enterprise in Lagos. Multi-rail settlement powered by XaePay and licensed rail partners. Settle how the trade requires.',tags:['USD','NGN','Multi-Rail','XaePay-Powered']},
];

const ERP_SYSTEMS=[
  {name:'SAP S/4HANA',type:'ERP Core',color:'#5282FF',status:'ready'},
  {name:'SAP Ariba',type:'Procurement',color:'#A259FF',status:'ready'},
  {name:'SAP BTP',type:'Integration Platform',color:'#00E5C8',status:'ready'},
  {name:'MuleSoft',type:'API Middleware',color:'#F5A623',status:'ready'},
];

const ERP_DIAGS=[
  {icon:'⚡',title:'S/4HANA Performance Diagnostic',
   desc:'AI-assisted scan of your SAP S/4HANA environment — identifying RICEF bottlenecks, master data inconsistencies, workflow failures, and integration gaps before they cascade into supply chain failures.',
   tags:['RICEF Analysis','Master Data','Workflow Audit'],
   c:'linear-gradient(90deg,#5282FF,#7BA3FF)',tc:'#5282FF',tbc:'rgba(82,130,255,.22)',tbg:'rgba(82,130,255,.05)'},
  {icon:'🔗',title:'Ariba Procurement Intelligence',
   desc:'Deep audit of your Ariba supplier network — contract compliance scoring, payment terms analysis, supplier risk classification, and PO-to-invoice cycle time benchmarking against global standards.',
   tags:['Contract Compliance','Supplier Risk','Cycle Time'],
   c:'linear-gradient(90deg,#A259FF,#C084FC)',tc:'#A259FF',tbc:'rgba(162,89,255,.22)',tbg:'rgba(162,89,255,.05)'},
  {icon:'🌐',title:'BTP Integration Health Check',
   desc:'Comprehensive review of your SAP BTP integration flows — identifying latency bottlenecks, failed event triggers, API error patterns, and data synchronisation gaps across connected enterprise systems.',
   tags:['Integration Flows','API Health','Event Triggers'],
   c:'linear-gradient(90deg,#00E5C8,#00B8A3)',tc:'#00E5C8',tbc:'rgba(0,229,200,.22)',tbg:'rgba(0,229,200,.05)'},
  {icon:'🔀',title:'MuleSoft API Optimisation',
   desc:'Automated analysis of your MuleSoft Anypoint Platform — mapping API call chains, identifying latency hotspots, rate limit exposures, and inefficient data transformation patterns in active integrations.',
   tags:['API Mapping','Rate Limits','Data Transformation'],
   c:'linear-gradient(90deg,#F5A623,#FF9500)',tc:'#F5A623',tbc:'rgba(245,166,35,.22)',tbg:'rgba(245,166,35,.05)'},
  {icon:'📊',title:'ERP Data Quality Audit',
   desc:'AI-powered scan across your ERP data estate — detecting duplicate master records, vendor data inconsistencies, GL coding errors, and spend data anomalies that distort procurement analytics.',
   tags:['Master Data','Vendor Records','Spend Analytics'],
   c:'linear-gradient(90deg,#FF4D6D,#FF6B8A)',tc:'#FF4D6D',tbc:'rgba(255,77,109,.22)',tbg:'rgba(255,77,109,.05)'},
  {icon:'🛡️',title:'Compliance & Controls Assessment',
   desc:'Systematic review of ERP segregation of duties, approval workflow controls, audit trail integrity, and regulatory compliance posture across your full SAP and integrated system landscape.',
   tags:['Segregation of Duties','Controls','Audit Trail'],
   c:'linear-gradient(90deg,#00D68F,#00B87A)',tc:'#00D68F',tbc:'rgba(0,214,143,.22)',tbg:'rgba(0,214,143,.05)'},
];

function Globe(){
  return(
    <div className="globe-scene">
      <div className="globe-outer-ring"/>
      <div className="globe-mid-ring"/>
      <div className="globe-glow"/>
      <svg className="globe-svg" viewBox="0 0 540 540">
        <defs>
          <radialGradient id="gFill" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#1A2D55"/>
            <stop offset="55%" stopColor="#0A1528"/>
            <stop offset="100%" stopColor="#040810"/>
          </radialGradient>
          <radialGradient id="gRim" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent"/>
            <stop offset="100%" stopColor="rgba(82,130,255,0.2)"/>
          </radialGradient>
          <clipPath id="gc"><circle cx="270" cy="270" r="212"/></clipPath>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="atmosGrad" cx="50%" cy="50%" r="50%">
            <stop offset="88%" stopColor="transparent"/>
            <stop offset="100%" stopColor="rgba(82,130,255,0.1)"/>
          </radialGradient>
        </defs>
        <circle cx="270" cy="270" r="212" fill="url(#gFill)"/>
        <circle cx="270" cy="270" r="212" fill="url(#gRim)"/>
        <circle cx="270" cy="270" r="212" fill="none" stroke="rgba(82,130,255,0.12)" strokeWidth="1"/>
        <circle cx="270" cy="270" r="220" fill="url(#atmosGrad)"/>
        <circle cx="270" cy="270" r="224" fill="none" stroke="rgba(82,130,255,0.06)" strokeWidth="4"/>
        <g clipPath="url(#gc)" fill="none" stroke="rgba(82,130,255,0.08)" strokeWidth="0.5">
          <ellipse cx="270" cy="128" rx="106" ry="7"/>
          <ellipse cx="270" cy="200" rx="182" ry="8"/>
          <ellipse cx="270" cy="270" rx="212" ry="9"/>
          <ellipse cx="270" cy="340" rx="182" ry="8"/>
          <ellipse cx="270" cy="412" rx="106" ry="7"/>
          <ellipse cx="270" cy="270" rx="62"  ry="212"/>
          <ellipse cx="270" cy="270" rx="132" ry="212"/>
          <ellipse cx="270" cy="270" rx="212" ry="76" transform="rotate(90,270,270)"/>
        </g>
        {ROUTES.map((r,i)=>(
          <g key={i}>
            <path id={`rp${i}`} d={r.d} fill="none" stroke={r.c} strokeWidth=".9"
              strokeDasharray="800" strokeDashoffset="800" opacity=".38"
              className="r-path" style={{animationDelay:`${i*.1}s`}}/>
            <circle r="2.5" fill={r.c} opacity=".95" filter="url(#glow)">
              <animateMotion dur={r.dur} begin={r.beg} repeatCount="indefinite">
                <mpath href={`#rp${i}`}/>
              </animateMotion>
            </circle>
          </g>
        ))}
        {CITIES.map(c=>(
          <g key={c.id}>
            <circle cx={c.x} cy={c.y} r="14" fill={c.c} opacity=".06">
              <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".07;.02;.07" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx={c.x} cy={c.y} r="4" fill={c.c} filter="url(#glow)"/>
            <circle cx={c.x} cy={c.y} r="4" fill="none" stroke={c.c} strokeWidth="1" opacity=".45">
              <animate attributeName="r" values="4;10;4" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".45;0;.45" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <text x={c.x+7} y={c.y-6} fill={c.c} fontSize="6.5" fontFamily="IBM Plex Mono,monospace" opacity=".85" fontWeight="700">{c.l}</text>
          </g>
        ))}
        <text x="16" y="30" fill="rgba(82,130,255,0.25)" fontSize="7" fontFamily="IBM Plex Mono,monospace" fontWeight="700">CONCEPT · GLOBAL TRADE NETWORK</text>
        <text x="16" y="42" fill="rgba(82,130,255,0.15)" fontSize="6" fontFamily="IBM Plex Mono,monospace">12 HUBS · 15 CORRIDORS · ILLUSTRATIVE</text>
      </svg>
      <div className="float-card" style={{top:'12%',left:'-18%','--dur':'4.2s','--c':'#5282FF'}}>
        <div className="fc-label">Concept · Agents</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#5282FF'}}/>6 Designed</div>
      </div>
      <div className="float-card" style={{top:'35%',right:'-20%','--dur':'3.8s','--c':'#00E5C8'}}>
        <div className="fc-label">Sample View</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#00E5C8'}}/>147 Tracked</div>
      </div>
      <div className="float-card" style={{bottom:'25%',left:'-22%','--dur':'5s','--c':'#A259FF'}}>
        <div className="fc-label">Sample View</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#A259FF'}}/>2,841 Docs</div>
      </div>
      <div className="float-card" style={{bottom:'8%',right:'-15%','--dur':'4.5s','--c':'#F5A623'}}>
        <div className="fc-label">FX Concept</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#F5A623'}}/>Window Open</div>
      </div>
    </div>
  );
}

function ERPFlowDiagram(){
  return(
    <div className="erp-flow-wrap fu">
      <div className="erp-flow-title">AI-Powered ERP Diagnostic & Resolution Flow</div>
      <svg className="erp-flow-svg" viewBox="0 0 900 200" style={{height:200}}>
        <defs>
          <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5282FF"/><stop offset="100%" stopColor="#A259FF"/>
          </linearGradient>
          <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A259FF"/><stop offset="100%" stopColor="#00E5C8"/>
          </linearGradient>
          <linearGradient id="fg3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5C8"/><stop offset="100%" stopColor="#F5A623"/>
          </linearGradient>
          <linearGradient id="fg4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5A623"/><stop offset="100%" stopColor="#00D68F"/>
          </linearGradient>
          <filter id="nf" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {[[110,100,210,100,'fg1'],[300,100,390,100,'fg2'],[490,100,580,100,'fg3'],[670,100,760,100,'fg4']].map(([x1,y1,x2,y2,grad],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#${grad})`} strokeWidth="2" strokeDasharray="4,3" opacity=".6">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.5s" repeatCount="indefinite"/>
          </line>
        ))}
        {[
          {x:60,y:100,label:'ERP\nSystem',sub:'SAP / MuleSoft',c:'#5282FF',icon:'⬡'},
          {x:250,y:100,label:'AI\nDiagnostic',sub:'Pattern Detection',c:'#A259FF',icon:'◉'},
          {x:440,y:100,label:'Gap\nAnalysis',sub:'Risk Scoring',c:'#00E5C8',icon:'◈'},
          {x:625,y:100,label:'Agent\nDeploy',sub:'Auto-Resolution',c:'#F5A623',icon:'◆'},
          {x:810,y:100,label:'Optimised\nSystem',sub:'Continuous Learn',c:'#00D68F',icon:'✦'},
        ].map((n,i)=>(
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="44" fill="none" stroke={n.c} strokeWidth=".5" opacity=".2">
              <animate attributeName="r" values="42;46;42" dur={`${3+i*.5}s`} repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".2;.06;.2" dur={`${3+i*.5}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={n.x} cy={n.y} r="38" fill="rgba(10,22,40,0.9)" stroke={n.c} strokeWidth="1.2" filter="url(#nf)"/>
            <circle cx={n.x} cy={n.y} r="38" fill="none" stroke={n.c} strokeWidth=".5" opacity=".4"/>
            <text x={n.x} y={n.y-8} textAnchor="middle" fill={n.c} fontSize="16" fontFamily="monospace">{n.icon}</text>
            <text x={n.x} y={n.y+8} textAnchor="middle" fill="rgba(240,244,255,0.9)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="700">{n.label.split('\n')[0]}</text>
            <text x={n.x} y={n.y+20} textAnchor="middle" fill="rgba(240,244,255,0.9)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="700">{n.label.split('\n')[1]}</text>
            <text x={n.x} y={n.y+52} textAnchor="middle" fill={n.c} fontSize="7.5" fontFamily="IBM Plex Mono,monospace" opacity=".8">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Counter({target,suffix='',duration=1800}){
  const [val,setVal]=useState(0);
  const ref=useRef(); const started=useRef(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!started.current){
        started.current=true;
        const steps=60, inc=target/steps; let cur=0;
        const id=setInterval(()=>{
          cur=Math.min(cur+inc,target);setVal(Math.floor(cur));
          if(cur>=target)clearInterval(id);
        },duration/steps);
      }
    },{threshold:.5});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[target,duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function AgentLog(){
  const [log,setLog]=useState(LOGS.slice(0,5));
  const [i,setI]=useState(5);
  useEffect(()=>{
    const id=setInterval(()=>{
      setI(n=>{const nx=n>=LOGS.length?0:n;setLog(p=>[LOGS[nx],...p.slice(0,5)]);return nx+1;});
    },2800);
    return()=>clearInterval(id);
  },[]);
  return(
    <div className="log-wrap">
      {log.map((e,i)=>(
        <div key={i} className={`le ${e.type}`} style={{opacity:1-i*.12}}>
          <span className="ts">{e.t} UTC</span>{e.msg}
        </div>
      ))}
    </div>
  );
}

function PriceCard({tier,isAnnual,onBook}){
  const monthPrice = isAnnual ? Math.floor(tier.monthly*.8) : tier.monthly;
  const fmtPrice = monthPrice.toLocaleString();
  const handleCta = () => { if(onBook) onBook(tier.diagId || 'full'); };
  return(
    <div className={`price-card edge-lit${tier.featured?' featured':''}`} style={{'--pc':tier.color}}>
      {tier.featured&&<span className="pc-badge pop">Most Popular</span>}
      {!tier.featured&&<span className="pc-badge std">{tier.badge}</span>}
      <div className="pc-name">{tier.name}</div>
      <div className="pc-desc">{tier.desc}</div>
      <div className={`pc-price${tier.featured?' grad':''}`} style={!tier.featured?{color:'var(--w)'}:{}}>
        <span className="pc-cur">$</span>
        {tier.custom?'Custom':fmtPrice}
        {!tier.custom&&<span className="pc-per">/mo</span>}
      </div>
      <div className="pc-sub">
        {tier.custom?'Contact for enterprise pricing':isAnnual?'billed annually':'billed monthly'}
      </div>
      <div className="pc-divider"/>
      <div className="pc-features">
        {tier.features.map((f,i)=>(
          <div className="pcf" key={i}>
            <span className={`pcf-ic${f.included?'':' x'}`}>{f.included?'✓':'–'}</span>
            <span style={f.included?{}:{color:'var(--w4)'}}>{f.label}</span>
          </div>
        ))}
      </div>
      <button className={`pc-cta ${tier.featured?'main':'outline'}`} onClick={handleCta}>{tier.cta}</button>
    </div>
  );
}

const DIAG_TYPES=[
  {id:'standard',icon:'🧭',scope:'Standard',name:'Standard Corridor Diagnostic',price:'$12,500',time:'3 weeks',desc:'Structured assessment of your corridor: trade flow analysis, compliance gap review (CBN, NAFDAC, US Customs), payment routing audit, logistics cost benchmarking, prioritised 90-day action plan.',tags:['Trade Flow','Compliance','Payment Audit','Logistics Cost'],dca:'linear-gradient(90deg,#5282FF,#7BA3FF)',col:'#5282FF'},
  {id:'deep',icon:'🔬',scope:'Deep · Hands-On',name:'Deep Corridor Diagnostic',price:'$25,000',time:'6 weeks',desc:'Everything in Standard, plus weekly working sessions with founder, hands-on partner introductions across the corridor, implementation-readiness deliverable, and 90-day async follow-up access.',tags:['Weekly Sessions','Partner Intros','Implementation','Action Plan'],dca:'linear-gradient(90deg,#A259FF,#C084FC)',col:'#A259FF'},
];
const BK_CORRIDORS=['Africa (Nigeria / Kenya / Ghana)','Americas (US / Canada / Brazil)','Europe (UK / EU-27 / Scandinavia)','Asia-Pacific (Singapore / China / India / UAE)','Africa → Europe','Africa → Americas','Asia → Africa','Asia → Americas','Global (Multiple regions)'];
const BK_TZ=['WAT – West Africa Time (Lagos)','CET – Central European Time (London/Paris)','EST – Eastern Standard Time (New York)','PST – Pacific Standard Time (Los Angeles)','GST – Gulf Standard Time (Dubai)','IST – India Standard Time (Mumbai)','SGT – Singapore Time','JST – Japan Standard Time (Tokyo)'];
const BK_TIMES=['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00'];
const BK_UNAVAIL=[1,4,7];
const BK_ROLES=['CEO / MD','COO / Operations Director','CFO / Finance Director','Procurement Manager','Supply Chain Manager','IT / ERP Manager','Logistics Manager','Other'];
const BK_ERP=['SAP S/4HANA','SAP Ariba','SAP BTP','MuleSoft','Oracle','Microsoft Dynamics','NetSuite','None / Other'];
const BK_VOL=['Under $1M','$1M – $5M','$5M – $20M','$20M – $100M','Over $100M'];
const BK_FT_INFO={1:{l:'No commitment required',s:'Kickoff call is complimentary'},2:{l:'Your data is encrypted',s:'GDPR-compliant · Never shared'},3:{l:'Confirmed within 2 business hours',s:'Calendar invite sent immediately'},4:{l:'No payment required today',s:'Fees confirmed after formal scoping'}};

function bkGetDates(){
  const d=[];const n=new Date();n.setDate(n.getDate()+2);
  while(d.length<6){if(n.getDay()!==0&&n.getDay()!==6)d.push(new Date(n));n.setDate(n.getDate()+1);}
  return d;
}
function bkRef(){return'XCX-'+Math.random().toString(36).substring(2,6).toUpperCase()+'-'+Date.now().toString().slice(-4);}

function BookingModal({onClose,preselect=''}){
  const TOTAL=4;
  const [step,setStep]=useState(1);
  const [data,setData]=useState({diagnostic:preselect,firstName:'',lastName:'',email:'',phone:'',company:'',role:'',tradeVolume:'',erp:'',corridors:[],context:'',timezone:'',date:'',time:'',meetingFormat:''});
  const [errors,setErrors]=useState({});
  const [terms,setTerms]=useState(false);
  const [submitting,setSubmitting]=useState(false);
  const [submitError,setSubmitError]=useState('');
  const [done,setDone]=useState(false);
  const [ref]=useState(bkRef());
  const bodyRef=useRef();
  const dates=bkGetDates();

  const dtype=DIAG_TYPES.find(d=>d.id===data.diagnostic);
  const fmtDate=data.date?new Date(data.date).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'}):null;

  useEffect(()=>{document.body.style.overflow='hidden';return()=>{document.body.style.overflow='';};},[]);
  useEffect(()=>{if(bodyRef.current)bodyRef.current.scrollTop=0;},[step]);

  const set=(k,v)=>setData(p=>({...p,[k]:v}));
  const toggleCorr=(c)=>set('corridors',(data.corridors||[]).includes(c)?data.corridors.filter(x=>x!==c):[...(data.corridors||[]),c]);

  const validate=()=>{
    const e={};
    if(step===1&&!data.diagnostic)e.diagnostic=true;
    if(step===2){
      if(!data.firstName?.trim())e.firstName=true;
      if(!data.lastName?.trim())e.lastName=true;
      if(!data.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))e.email='Enter a valid email';
      if(!data.phone?.trim())e.phone=true;
      if(!data.company?.trim())e.company=true;
      if(!data.role)e.role=true;
    }
    if(step===3){
      if(!data.timezone)e.timezone=true;
      if(!data.date)e.date=true;
      if(!data.time)e.time=true;
    }
    if(step===4&&!terms)e.terms=true;
    setErrors(e);return Object.keys(e).length===0;
  };

  const handleNext=async()=>{
    if(!validate())return;
    if(step<TOTAL){setStep(s=>s+1);return;}
    setSubmitting(true);
    setSubmitError('');
    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'xpqbpjky';
      if (!formId) throw new Error('NOT_CONFIGURED');
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify({
          _subject: `XaeccoX Diagnostic Booking — ${dtype?.name || 'Unknown'} — ${data.firstName} ${data.lastName}`,
          reference: ref,
          diagnostic_type: dtype?.name,
          diagnostic_scope: dtype?.scope,
          diagnostic_price: dtype?.price,
          diagnostic_timeline: dtype?.time,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          role: data.role,
          trade_volume: data.tradeVolume,
          erp_system: data.erp,
          corridors: (data.corridors||[]).join(', '),
          challenge_context: data.context,
          timezone: data.timezone,
          kickoff_date: fmtDate,
          kickoff_time: data.time,
          meeting_format: data.meetingFormat,
        }),
      });
      if (!res.ok) throw new Error('SUBMIT_FAILED');
      setDone(true);
    } catch (err) {
      setSubmitError(
        err.message === 'NOT_CONFIGURED'
          ? 'Bookings will open shortly. Please email okoli.chukie@gmail.com to reserve a slot.'
          : 'Something went wrong on submit. Please try again, or email okoli.chukie@gmail.com directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack=()=>{setErrors({});setSubmitError('');setStep(s=>s-1);};

  return(
    <div className="bk-overlay" onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div className="bk-modal">
        <div className="bkh">
          <div className="bkh-l">
            <div className="bkh-ey">Diagnostic Booking</div>
            <div className="bkh-title">Book your <span>Supply Chain Diagnostic</span></div>
            <div className="bkh-sub">Select your assessment, share context, schedule a kickoff — our team takes it from there.</div>
          </div>
          <button className="bkh-close" onClick={onClose}>✕</button>
        </div>

        <div className="bk-progress">
          {Array.from({length:TOTAL}).map((_,i)=>(
            <div key={i} className={`bkp-seg${i+1<step?' done':i+1===step?' active':''}`}/>
          ))}
          <div className="bkp-label">Step <span>{step}</span> of {TOTAL}</div>
          {dtype&&<div className="bkp-dtype" style={{color:dtype.col}}>{dtype.name}</div>}
        </div>

        {!done?(
          <>
            <div className="bk-body" ref={bodyRef}>
              {step===1&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 1 of 4</div>
                  <div className="bks-h">Choose your diagnostic</div>
                  <div className="bks-d">Select the assessment type that best matches your supply chain complexity and timeline.</div>
                  <div className="diag-type-grid">
                    {DIAG_TYPES.map(d=>(
                      <div key={d.id} className={`dtype-card${data.diagnostic===d.id?' selected':''}`} onClick={()=>set('diagnostic',d.id)}>
                        <div className="dtype-check">✓</div>
                        <div className="dtype-ic">{d.icon}</div>
                        <div className="dtype-scope" style={{color:d.col}}>{d.scope}</div>
                        <div className="dtype-name">{d.name}</div>
                        <div className="dtype-price">{d.price}</div>
                        <div className="dtype-time">⏱ {d.time}</div>
                        <div className="dtype-desc">{d.desc}</div>
                        <div className="dtype-tags">{d.tags.map(t=><span className="dtag" key={t}>{t}</span>)}</div>
                      </div>
                    ))}
                  </div>
                  {errors.diagnostic&&<div className="bk-field-err">⚠ Please select a diagnostic type to continue</div>}
                </div>
              )}

              {step===2&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 2 of 4</div>
                  <div className="bks-h">Tell us about your business</div>
                  <div className="bks-d">Helps us assign the right specialist team and tailor the diagnostic scope.</div>
                  <div className="bk-form-row">
                    <div className="bk-field">
                      <label className="bk-label">First Name <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.firstName?' err':''}`} placeholder="e.g. Chukwura" value={data.firstName} onChange={e=>set('firstName',e.target.value)}/>
                      {errors.firstName&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Last Name <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.lastName?' err':''}`} placeholder="e.g. Obi" value={data.lastName} onChange={e=>set('lastName',e.target.value)}/>
                      {errors.lastName&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                  </div>
                  <div className="bk-form-row">
                    <div className="bk-field">
                      <label className="bk-label">Work Email <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.email?' err':''}`} type="email" placeholder="name@company.com" value={data.email} onChange={e=>set('email',e.target.value)}/>
                      {errors.email&&<div className="bk-field-error">⚠ {errors.email}</div>}
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Phone / WhatsApp <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.phone?' err':''}`} placeholder="+234 800 000 0000" value={data.phone} onChange={e=>set('phone',e.target.value)}/>
                      {errors.phone&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                  </div>
                  <div className="bk-form-row">
                    <div className="bk-field">
                      <label className="bk-label">Company Name <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.company?' err':''}`} placeholder="Your company" value={data.company} onChange={e=>set('company',e.target.value)}/>
                      {errors.company&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Your Role <span className="bk-req">*</span></label>
                      <select className={`bk-input bk-select${errors.role?' err':''}`} value={data.role} onChange={e=>set('role',e.target.value)}>
                        <option value="">Select your role</option>
                        {BK_ROLES.map(r=><option key={r} value={r}>{r}</option>)}
                      </select>
                      {errors.role&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                  </div>
                  <div className="bk-form-row" style={{marginBottom:14}}>
                    <div className="bk-field">
                      <label className="bk-label">Annual Trade Volume</label>
                      <select className="bk-input bk-select" value={data.tradeVolume} onChange={e=>set('tradeVolume',e.target.value)}>
                        <option value="">Select range</option>
                        {BK_VOL.map(v=><option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Primary ERP System</label>
                      <select className="bk-input bk-select" value={data.erp} onChange={e=>set('erp',e.target.value)}>
                        <option value="">Select ERP</option>
                        {BK_ERP.map(e=><option key={e} value={e}>{e}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="bk-field" style={{marginBottom:14}}>
                    <label className="bk-label">Active Trade Corridors</label>
                    <div className="corridor-chips">
                      {BK_CORRIDORS.map(c=>{
                        const sel=(data.corridors||[]).includes(c);
                        return(
                          <div key={c} className={`corr-chip${sel?' sel':''}`} onClick={()=>toggleCorr(c)}>
                            <div className="cc-dot">{sel?'✓':''}</div>{c}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bk-form-row full">
                    <div className="bk-field">
                      <label className="bk-label">Key Challenge or Context</label>
                      <textarea className="bk-input bk-textarea" placeholder="Describe your biggest supply chain or ERP challenge — customs delays, bank rejections, SAP data issues, payment mismatches..." value={data.context} onChange={e=>set('context',e.target.value)}/>
                    </div>
                  </div>
                </div>
              )}

              {step===3&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 3 of 4</div>
                  <div className="bks-h">Schedule your kickoff call</div>
                  <div className="bks-d">Pick a date and time for your 30-minute diagnostic kickoff call. Times shown in your selected timezone.</div>
                  <div className="bk-field" style={{marginBottom:18}}>
                    <label className="bk-label">Your Timezone <span className="bk-req">*</span></label>
                    <select className={`bk-input bk-select${errors.timezone?' err':''}`} value={data.timezone} onChange={e=>set('timezone',e.target.value)}>
                      <option value="">Select timezone</option>
                      {BK_TZ.map(t=><option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.timezone&&<div className="bk-field-error">⚠ Please select your timezone</div>}
                  </div>
                  <div className="bk-field" style={{marginBottom:18}}>
                    <label className="bk-label">Preferred Date <span className="bk-req">*</span></label>
                    <div className="date-grid">
                      {dates.map((d,i)=>{
                        const s=d.toDateString();const sel=data.date===s;
                        return(
                          <div key={i} className={`date-slot${sel?' sel':''}`} onClick={()=>set('date',s)}>
                            <div className="ds-wd">{d.toLocaleDateString('en-GB',{weekday:'short'})}</div>
                            <div className="ds-dt">{d.toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.date&&<div className="bk-field-error" style={{marginTop:8}}>⚠ Please select a date</div>}
                  </div>
                  <div className="bk-field" style={{marginBottom:18}}>
                    <label className="bk-label">Preferred Time <span className="bk-req">*</span></label>
                    <div className="time-grid">
                      {BK_TIMES.map((t,i)=>{
                        const na=BK_UNAVAIL.includes(i);const sel=data.time===t;
                        return(
                          <div key={t} className={`time-slot${sel?' sel':''}${na?' unavail':''}`} onClick={()=>!na&&set('time',t)}>
                            {t}{na?' ✕':''}
                          </div>
                        );
                      })}
                    </div>
                    {errors.time&&<div className="bk-field-error" style={{marginTop:8}}>⚠ Please select a time</div>}
                  </div>
                  <div className="bk-field">
                    <label className="bk-label">Meeting Format</label>
                    <div className="radio-group">
                      {[{v:'zoom',l:'Zoom Video Call',s:'Link sent 1 hour before the call'},{v:'teams',l:'Microsoft Teams',s:'Calendar invite with Teams link'},{v:'phone',l:'Phone / WhatsApp Call',s:'We call you at your provided number'}].map(o=>(
                        <div key={o.v} className={`radio-opt${data.meetingFormat===o.v?' sel':''}`} onClick={()=>set('meetingFormat',o.v)}>
                          <div className="radio-ring"><div className="radio-inner"/></div>
                          <div><div className="radio-lbl">{o.l}</div><div className="radio-sub">{o.s}</div></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step===4&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 4 of 4</div>
                  <div className="bks-h">Review & confirm</div>
                  <div className="bks-d">Please review your details. Our team confirms within 2 business hours.</div>
                  <div className="review-grid">
                    <div className="rv-card">
                      <div className="rv-hd">Diagnostic Selected</div>
                      <div className="rv-rows">
                        <div className="rv-row"><span className="rv-lbl">Type</span><span className="rv-val ac">{dtype?.name}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Scope</span><span className="rv-val">{dtype?.scope}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Timeline</span><span className="rv-val">{dtype?.time}</span></div>
                        {data.erp&&<div className="rv-row"><span className="rv-lbl">ERP</span><span className="rv-val">{data.erp}</span></div>}
                        {data.corridors?.length>0&&<div className="rv-row"><span className="rv-lbl">Corridors</span><span className="rv-val" style={{fontSize:11}}>{data.corridors.join(', ')}</span></div>}
                      </div>
                    </div>
                    <div className="rv-card">
                      <div className="rv-hd">Contact Details</div>
                      <div className="rv-rows">
                        <div className="rv-row"><span className="rv-lbl">Name</span><span className="rv-val">{data.firstName} {data.lastName}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Email</span><span className="rv-val" style={{fontSize:11}}>{data.email}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Phone</span><span className="rv-val">{data.phone}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Company</span><span className="rv-val">{data.company}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Role</span><span className="rv-val">{data.role}</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="rv-card" style={{marginTop:12}}>
                    <div className="rv-hd">Scheduled Kickoff</div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:16}}>
                      <div className="rv-row"><span className="rv-lbl">Date</span><span className="rv-val ac">{fmtDate||'—'}</span></div>
                      <div className="rv-row"><span className="rv-lbl">Time</span><span className="rv-val">{data.time||'—'}</span></div>
                      <div className="rv-row"><span className="rv-lbl">Timezone</span><span className="rv-val" style={{fontSize:11}}>{data.timezone||'—'}</span></div>
                      <div className="rv-row"><span className="rv-lbl">Format</span><span className="rv-val">{data.meetingFormat||'—'}</span></div>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="pb-row"><span className="pb-l">Diagnostic type</span><span className="pb-v">{dtype?.name}</span></div>
                    <div className="pb-row"><span className="pb-l">Kickoff consultation</span><span className="pb-v" style={{color:'var(--jade)'}}>Complimentary</span></div>
                    <div className="pb-row"><span className="pb-l">Engagement fee</span><span className="pb-total">{dtype?.price}</span></div>
                  </div>
                  <div className="terms-row" onClick={()=>setTerms(!terms)}>
                    <div className={`terms-box${terms?' chk':''}`}>{terms?'✓':''}</div>
                    <div className="terms-txt">
                      I agree to the XaeccoX Terms of Service and Privacy Policy. Engagement fees are confirmed upon project scoping and formal proposal acceptance. The kickoff call is complimentary with no obligation.
                    </div>
                  </div>
                  {errors.terms&&<div className="bk-field-error" style={{marginTop:8}}>⚠ Please accept the terms to continue</div>}
                </div>
              )}
            </div>

            {submitError && <div className="bk-submit-err">⚠ {submitError}</div>}

            <div className="bk-footer">
              <div className="bk-footer-info">
                <strong>{BK_FT_INFO[step].l}</strong>
                {BK_FT_INFO[step].s}
              </div>
              <div className="bk-footer-btns">
                {step>1&&<button className="btn-bk-back" onClick={handleBack} disabled={submitting}>← Back</button>}
                <button className="btn-bk-next" onClick={handleNext} disabled={submitting}>
                  {submitting
                    ?<span style={{display:'flex',alignItems:'center',gap:10}}><span className="bk-spinner"/>Submitting…</span>
                    :step===TOTAL?'Confirm Booking →':'Continue →'
                  }
                </button>
              </div>
            </div>
          </>
        ):(
          <div className="bk-success">
            <div className="bks-icon">✓</div>
            <div className="bks-tag">Booking Received</div>
            <div className="bks-h">You're booked in.</div>
            <div className="bks-sub">Your diagnostic kickoff has been received. A member of the XaeccoX team will confirm within 2 business hours and send your calendar invite.</div>
            <div className="bks-ref">Reference: <span>{ref}</span></div>
            <div className="bks-cards">
              <div className="bksc"><div className="bksc-ic">📋</div><div className="bksc-lbl">Diagnostic</div><div className="bksc-val">{dtype?.name}</div></div>
              <div className="bksc"><div className="bksc-ic">📅</div><div className="bksc-lbl">Kickoff Call</div><div className="bksc-val">{fmtDate} · {data.time}</div></div>
              <div className="bksc"><div className="bksc-ic">📧</div><div className="bksc-lbl">Confirmation to</div><div className="bksc-val" style={{fontSize:11}}>{data.email}</div></div>
            </div>
            <div className="bks-next">
              <strong>What happens next</strong>
              Confirmation email arrives within 2 business hours at <strong>{data.email}</strong>. You'll receive a calendar invite with {data.meetingFormat==='teams'?'Teams':data.meetingFormat==='phone'?'call details':'Zoom'} for your {data.time} kickoff. Our analyst team begins pre-processing your corridor and ERP data ahead of the call. Full diagnostic delivery: {dtype?.time} from project kick-off.
            </div>
            <div className="bks-actions">
              <button className="btn-bks p" onClick={onClose}>Return to XaeccoX</button>
              <button className="btn-bks g" onClick={()=>window.print()}>Download Confirmation</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const DASH_VIEWS = {
  'Dashboard': {
    title: 'Corridor Operations Centre',
    kpis: [{v:'147',l:'Active Shipments'},{v:'$4.2M',l:'In-Transit Value'},{v:'6',l:'Agents Running'}],
    list: [
      {id:'PO-9104',r:'Shanghai → Rotterdam',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9098',r:'Singapore → Los Angeles',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9091',r:'Dubai → Frankfurt',s:'ss-ho',sl:'On Hold'},
      {id:'PO-9088',r:'Mumbai → London',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9082',r:'São Paulo → Antwerp',s:'ss-tr',sl:'In Transit'},
    ],
  },
  'Shipments': {
    title: 'Active Shipments',
    kpis: [{v:'147',l:'In Transit'},{v:'82',l:'Cleared (7d)'},{v:'4',l:'On Hold'}],
    list: [
      {id:'PO-9104',r:'Shanghai → Rotterdam · Maersk',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9098',r:'Singapore → Los Angeles · COSCO',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9091',r:'Dubai → Frankfurt · DHL',s:'ss-ho',sl:'On Hold'},
      {id:'PO-9088',r:'Mumbai → London · MSC',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9082',r:'São Paulo → Antwerp · Hapag-Lloyd',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9076',r:'Lagos → Hamburg · CMA CGM',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9069',r:'Tokyo → Seattle · ONE',s:'ss-ok',sl:'Cleared'},
    ],
  },
  'Agents': {
    title: 'Active Agents',
    kpis: [{v:'6',l:'Running'},{v:'341',l:'Actions Today'},{v:'2',l:'Escalations'}],
    list: [
      {id:'AG-01',r:'Customs Watcher · 40+ jurisdictions',s:'ss-ok',sl:'Active'},
      {id:'AG-02',r:'Payment Router · SWIFT compliance',s:'ss-ok',sl:'Active'},
      {id:'AG-03',r:'FX Sentinel · live spread monitor',s:'ss-ok',sl:'Active'},
      {id:'AG-04',r:'Document Generator · multi-jurisdiction',s:'ss-ok',sl:'Active'},
      {id:'AG-05',r:'Port Congestion Monitor · global',s:'ss-tr',sl:'Scanning'},
      {id:'AG-06',r:'Supplier Risk Scorer · daily refresh',s:'ss-ok',sl:'Active'},
    ],
  },
  'Documents': {
    title: 'Document Engine',
    kpis: [{v:'24',l:'Generated Today'},{v:'3',l:'Pending Review'},{v:'1,247',l:'Filed (30d)'}],
    list: [
      {id:'DOC-3401',r:'Commercial Invoice · PO-9104 · EU',s:'ss-ok',sl:'Filed'},
      {id:'DOC-3400',r:'SWIFT MT103 · PO-9098 · US',s:'ss-ok',sl:'Approved'},
      {id:'DOC-3399',r:'Cert of Origin · PO-9091 · DE',s:'ss-ho',sl:'Review'},
      {id:'DOC-3398',r:'Customs Declaration · PO-9088 · UK',s:'ss-ok',sl:'Filed'},
      {id:'DOC-3397',r:'Letter of Credit · PO-9082 · BE',s:'ss-ok',sl:'Approved'},
      {id:'DOC-3396',r:'Bill of Lading · PO-9076 · NG',s:'ss-tr',sl:'Drafting'},
    ],
  },
  'Payments': {
    title: 'Payment Operations',
    kpis: [{v:'$2.1M',l:'Pending Settle'},{v:'OPEN',l:'FX Window'},{v:'$18.4M',l:'This Month'}],
    list: [
      {id:'PMT-921',r:'$840K · USD → EUR · Rotterdam supplier',s:'ss-tr',sl:'Queued'},
      {id:'PMT-920',r:'$215K · USD → SGD · Singapore freight',s:'ss-ok',sl:'Settled'},
      {id:'PMT-919',r:'$92K · USD → AED · Dubai broker',s:'ss-ok',sl:'Settled'},
      {id:'PMT-918',r:'$1.4M · USD → CNY · Shanghai supplier',s:'ss-tr',sl:'In Flight'},
      {id:'PMT-917',r:'$310K · USD → GBP · UK customs duty',s:'ss-ok',sl:'Settled'},
    ],
  },
  'ERP Diagnostics': {
    title: 'ERP Health',
    kpis: [{v:'4/4',l:'Systems Connected'},{v:'2',l:'Open Issues'},{v:'2h',l:'Last Scan'}],
    list: [
      {id:'SAP',r:'SAP S/4HANA · Production tenant',s:'ss-ok',sl:'Healthy'},
      {id:'ARIBA',r:'SAP Ariba · Procurement network',s:'ss-ho',sl:'2 Warnings'},
      {id:'BTP',r:'SAP BTP · Integration layer',s:'ss-ok',sl:'Healthy'},
      {id:'MULE',r:'MuleSoft · Anypoint API gateway',s:'ss-tr',sl:'1 Critical'},
    ],
  },
  'Settings': {
    title: 'Account Settings',
    kpis: [],
    list: [
      {id:'ORG',r:'Organisation · Acme Trade Co.',s:'ss-ok',sl:'Active'},
      {id:'REG',r:'Active Regions · Africa + Asia-Pacific',s:'ss-ok',sl:'Set'},
      {id:'TZ',r:'Default Timezone · WAT (Lagos)',s:'ss-ok',sl:'Set'},
      {id:'API',r:'Traxora API Keys · 3 active',s:'ss-ok',sl:'Active'},
      {id:'ALR',r:'Alert Channels · Email + WhatsApp',s:'ss-ok',sl:'On'},
      {id:'BIL',r:'Billing · XaeccoPS Advisor tier',s:'ss-ok',sl:'Active'},
    ],
  },
};

export default function XaeccoXWebsite(){
  const [scrolled,setScrolled]=useState(false);
  const [annual,setAnnual]=useState(false);
  const [pricingTab,setPricingTab]=useState('platform');
  const [booking,setBooking]=useState(false);
  const [bookPreselect,setBookPreselect]=useState('');
  const [dashView,setDashView]=useState('Dashboard');
  const [quote,setQuote]=useState(false);
  const [portal,setPortal]=useState(false);
  const [portalMode,setPortalMode]=useState('signin');
  const [openFaq,setOpenFaq]=useState(null);
  const refs=useRef([]);

  const openBook=(id='')=>{setBookPreselect(id);setBooking(true);};
  const closeBook=()=>setBooking(false);
  const openQuote=()=>setQuote(true);
  const closeQuote=()=>setQuote(false);
  const openPortal=(mode='signin')=>{setPortalMode(mode);setPortal(true);};
  const closePortal=()=>setPortal(false);

  useEffect(()=>{
    const onS=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',onS,{passive:true});
    return()=>window.removeEventListener('scroll',onS);
  },[]);

  useEffect(()=>{
    const obs=new IntersectionObserver(
      entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('v');}),
      {threshold:.1}
    );
    refs.current.forEach(r=>r&&obs.observe(r));
    return()=>obs.disconnect();
  },[]);

  const r=el=>{if(el&&!refs.current.includes(el))refs.current.push(el);};
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  const PLATFORM_TIERS=[
    {name:'XaeccoPS Scout',badge:'Entry',monthly:799,color:'var(--teal)',featured:false,diagId:'snapshot',
     desc:'For supply chain professionals getting started with AI-assisted trade management.',
     cta:'Join the Beta',
     features:[
       {label:'XaeccoPS dashboard — up to 100 shipments',included:true},
       {label:'Traxo shipment tracking included',included:true},
       {label:'Compliance document library + templates',included:true},
       {label:'Multi-jurisdiction filing templates',included:true},
       {label:'Email and WhatsApp alerts',included:true},
       {label:'1 AI monitoring agent',included:true},
       {label:'SAP/ERP integration',included:false},
       {label:'Multi-corridor intelligence',included:false},
     ]},
    {name:'XaeccoPS Advisor',badge:'Growth',monthly:2500,color:'var(--blu)',featured:true,diagId:'full',
     desc:'For growing businesses managing multi-corridor trade with compliance complexity.',
     cta:'Join the Beta',
     features:[
       {label:'Full XaeccoPS + Traxo platform',included:true},
       {label:'Unlimited active shipment tracking',included:true},
       {label:'AI-generated multi-jurisdiction compliance docs',included:true},
       {label:'5 AI agents deployed',included:true},
       {label:'SAP Ariba + MuleSoft integration',included:true},
       {label:'Live FX intelligence + payment window alerts',included:true},
       {label:'Quarterly ERP diagnostic scan',included:true},
       {label:'Dedicated agent manager',included:false},
     ]},
    {name:'XaeccoPS Autopilot',badge:'Enterprise',monthly:8500,color:'var(--vio)',featured:false,diagId:'enterprise',
     desc:'For enterprise operations requiring full agentic automation across all corridors.',
     cta:'Book a Demo',custom:false,
     features:[
       {label:'Full XaeccoPS + Traxora API (10K calls/mo)',included:true},
       {label:'Unlimited AI agents deployed',included:true},
       {label:'Full SAP S/4HANA + Ariba + BTP integration',included:true},
       {label:'Multi-jurisdiction compliance engine',included:true},
       {label:'ERP diagnostics on demand — unlimited',included:true},
       {label:'Dedicated named agent manager',included:true},
       {label:'Custom agent training on your trade data',included:true},
       {label:'2-hour SLA + quarterly strategy review',included:true},
     ]},
  ];

  return(
    <>
      <style>{G}</style>
      <div className="mesh-bg"/>

      {booking&&<BookingModal onClose={closeBook} preselect={bookPreselect}/>}
      {quote&&<QuoteModal onClose={closeQuote}/>}
      {portal&&<PortalAccessModal onClose={closePortal} mode={portalMode}/>}

      <nav className={scrolled?'sc':''}>
        <a className="logo" onClick={()=>go('hero')} style={{cursor:'pointer'}}>
          Xaecco<span className="logo-x">X</span>
          <span className="logo-badge">Corridor-first</span>
        </a>
        <ul className="nav-links">
          <li><a onClick={()=>go('services')} style={{cursor:'pointer'}}>Services</a></li>
          <li><a onClick={()=>go('corridor')} style={{cursor:'pointer'}}>Corridor</a></li>
          <li><a onClick={()=>go('built-for')} style={{cursor:'pointer'}}>Built for</a></li>
          <li><a onClick={()=>go('founder')} style={{cursor:'pointer'}}>About</a></li>
          <li><Link to="/tech" style={{color:'var(--w3)',textDecoration:'none',fontSize:13,fontWeight:500}}>Tech ↗</Link></li>
        </ul>
        <div className="nav-right">
          <button className="btn-nav-ghost" onClick={()=>openPortal('signin')}>Sign in</button>
          <button className="btn-nav-cta" onClick={openQuote}>Request quote</button>
        </div>
      </nav>

      <section id="hero" style={{padding:'140px 72px 80px',minHeight:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',gap:60,position:'relative',zIndex:2,overflow:'hidden'}}>
        <div className="hero-glow"/>
        <div className="hero-ring"/>
        <div className="hero-ring2"/>
        <div className="hero-left">
          <div className="hero-status">
            <span className="hs-dot"/><span className="hs-txt">Live · Trade quotes open today · Entities in Delaware + Lagos</span>
          </div>
          <h1 className="hero-h">
            Cross-border<br/>
            trade commerce for the<br/>
            <span className="arc">US ↔ Nigeria corridor.</span>
            <span className="serif">Operated end-to-end. Sourcing, logistics, customs, delivery — one accountable operator across Lagos, Philadelphia, Los Angeles, and Houston.</span>
          </h1>
          <p className="hero-desc">
            XaeccoX handles the trade itself — sourcing goods, moving containers, clearing customs, delivering to doors. Two corporate entities, one on each side of the corridor: <strong style={{color:'var(--w)'}}>XaeccoX LLC</strong> in Delaware, <strong style={{color:'var(--w)'}}>XaeccoX Solution Enterprise</strong> in Lagos. Software, AI, and integration powered by <Link to="/tech" style={{color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)'}}>XaeTech</Link>.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={openQuote}>Request a trade quote</button>
            <button className="btn-secondary" onClick={()=>go('services')}>Explore services →</button>
          </div>
          <div className="hero-stats">
            {[['US ↔ NG','Corridor focus'],['2','Corporate entities'],['End-to-end','Sourcing → delivery'],['XaeTech','Software + AI arm']].map(([n,l])=>(
              <div className="hstat" key={l}>
                <div className="hstat-n">{n}</div>
                <div className="hstat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right"><Globe/></div>
      </section>

      <div className="ticker-wrap" style={{position:'relative',zIndex:2}}>
        <div className="tick-label"><span className="tick-pulse"/>CORRIDOR SIGNALS · SAMPLE</div>
        <div className="tick-scroll">
          <div className="tick-track">
            {[...TICKS,...TICKS].map((t,i)=>(
              <span className="ti" key={i}>
                {t.l} <span className="tv">{t.v}</span>
                {t.d>0&&<span className="up">↑</span>}
                {t.d<0&&<span className="dn">↓</span>}
                <span className="ti-dot">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="alt">
        <div className="fu" ref={r}>
          <div className="stag">Why an Operator, Not a Broker</div>
          <h2 className="sh" style={{maxWidth:720}}>
            WhatsApp brokers vanish.<br/>
            Generic freight companies don't know the corridor.<br/>
            <span style={{fontFamily:'var(--fb)',fontWeight:300,fontStyle:'italic',color:'var(--w2)',fontSize:'.9em'}}>XaeccoX owns the trade end-to-end.</span>
          </h2>
        </div>
        <div className="rf-wrap fu" ref={r}>
          {[
            {h:'Fragmented Brokers',hi:false,rows:['One WhatsApp contact per leg of the trade','Quotes given verbally, no paper trail','No accountability when goods go missing','Different broker for goods vs freight vs customs','Vanishes when the trade gets complicated'],badge:'How Most Trade Runs Today'},
            {h:'Generic Freight Companies',hi:false,rows:['Corridor is one of hundreds they serve','No Nigerian customs, NAFDAC, or CBN nuance','Last-mile past Apapa is not their problem','Container consolidation not offered','Priced for enterprise, wrong fit for individuals or SMEs'],badge:'Big Names, Wrong Fit'},
            {h:'XaeccoX',hi:true,rows:['One accountable operator across sourcing → delivery','Entities in Delaware and Lagos — invoicing both sides','CBN, NAFDAC, US CBP, Nigerian Customs baked in','Multi-supplier US-side consolidation as standard','Founder-led, corridor-native, fixed pricing'],badge:'Built For This Corridor'},
          ].map(col=>(
            <div key={col.h} className={`rf-col${col.hi?' hi':''}`}>
              <div className="rf-hd">{col.h}</div>
              {col.rows.map((row,i)=>(
                <div className="rf-row" key={i}>
                  <span className="rf-ic">{col.hi?'✓':'–'}</span>{row}
                </div>
              ))}
              <span className="rf-badge">{col.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="why-now">
        <div className="fu" ref={r}>
          <div className="stag">Why Now</div>
          <h2 className="sh">The corridor is at<br/><span className="acc">an inflection point.</span></h2>
        </div>
        <div className="fu" ref={r} style={{marginTop:52,display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:20,maxWidth:1080}}>
          {[
            {n:'01',t:'CBN FX reforms restructured the naira market',d:'The 2024 unification and float of the naira reshaped how importers, exporters, and diaspora businesses access foreign exchange. Old broker relationships broke; new licensed rails opened. Corridor operators who understand both regimes have the advantage.'},
            {n:'02',t:'Nigerian diaspora is $20B+ and growing',d:'Roughly 905K Nigerians live in the US, sending $20 billion+ home annually — and increasingly buying, sourcing, and building businesses across the corridor. Diaspora commerce is the largest under-served customer segment in African trade.'},
            {n:'03',t:'AfCFTA is rolling out live tariff-free lanes',d:'The African Continental Free Trade Area is moving from framework to enforcement in 2025-2027. Cross-corridor trade with proper documentation gets progressively cheaper and faster. Businesses that build corridor muscle now will lead the intra-African expansion later.'},
            {n:'04',t:'Nigerian customs is digitising fast',d:'Form M is now digital. PAAR issuance has been streamlined. NAFDAC clearance workflows are moving online. The last three years have made corridor operations more programmable — but only if you know where the friction still lives.'},
          ].map(w=>(
            <div key={w.n} className="glass-card" style={{padding:'32px 28px',borderRadius:'var(--r12)'}}>
              <div style={{fontFamily:'var(--fm)',fontSize:11,letterSpacing:'.16em',color:'var(--blu)',marginBottom:14}}>{w.n}</div>
              <div style={{fontFamily:'var(--fd)',fontWeight:700,fontSize:18,letterSpacing:'-.01em',marginBottom:10,color:'var(--w)'}}>{w.t}</div>
              <div style={{fontSize:13,color:'var(--w3)',lineHeight:1.7}}>{w.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="corridor">
        <div className="fu" ref={r}>
          <div className="stag">The Corridor</div>
          <h2 className="sh">Start where<br/><span className="acc">the depth is.</span></h2>
        </div>
        <div className="agent-split fu" ref={r} style={{marginTop:48,marginBottom:24}}>
          <div>
            <p className="agent-prose" style={{margin:0}}>
              The US–Nigeria corridor moves billions of dollars annually in goods, services, and remittances — and almost none of it is supported by infrastructure built for the corridor's actual realities. <strong>CBN circulars, NAFDAC documentation, container consolidation across diaspora suppliers, BDC routing, last-mile delivery to Lagos</strong> — these are not abstractions. They are operational facts.
            </p>
          </div>
          <div>
            <p className="agent-prose" style={{margin:0}}>
              XaeccoX is built <em>corridor-first.</em> Africa-broad is the roadmap; US ↔ Nigeria is the proof of depth. We design every product, every integration, every workflow against the specific frictions of moving capital and cargo between Lagos, Philadelphia, Los Angeles, and Houston — not against a generic "global trade" abstraction.
            </p>
          </div>
        </div>
        <div className="market-grid">
          {MARKETS.map((m,i)=>(
            <div key={m.cls} className="market-card fu" ref={r}
              data-ghost={m.ghost}
              style={{transitionDelay:`${i*.09}s`,'--accent':m.accent,'--ghost-c':m.ghostC}}>
              <div className="mc-icon">{m.icon}</div>
              <div className="mc-reg" style={{background:m.accent,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>{m.reg}</div>
              <div className="mc-title">{m.title}</div>
              <div className="mc-desc">{m.desc}</div>
              <div className="mc-hubs">{m.hubs.map(h=><span className="hub-chip" key={h}>{h}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="built-for">
        <div className="fu" ref={r}>
          <div className="stag">Built For</div>
          <h2 className="sh">Who XaeccoX <span className="acc">trades for.</span></h2>
          <p className="sdesc">Six customer profiles across the US ↔ NG corridor. Each has a different trade shape; XaeccoX handles all of them from one operator.</p>
        </div>
        <div className="sol-grid" style={{gridTemplateColumns:'repeat(3,1fr)',marginTop:60}}>
          {[
            {ic:'📦',t:'Diaspora Shippers',d:'You send containers, barrels, or packages from the US to family or your own business in Nigeria. You need consolidation, honest customs quotes, and delivery that arrives.',fit:'Container + Last-Mile'},
            {ic:'🍲',t:'African Grocery & Restaurant Chains',d:'You source African foodstuffs into US storefronts. You need reliable Nigerian suppliers, container economics that work, and US-side warehousing.',fit:'Sourcing + Consolidation'},
            {ic:'🚗',t:'Auto Importers',d:'You buy US vehicles for personal use, resale, or fleet in Nigeria. You need clean US procurement, roll-on-roll-off shipping, and hassle-free Nigerian clearance.',fit:'Auto Import + Clearing'},
            {ic:'🏭',t:'Nigerian Importers (US-B2B)',d:'You buy from US B2B suppliers — electronics, medical, industrial goods — and clear into Apapa or Tin Can. You need supplier vetting, freight, and Form M / SONCAP support.',fit:'Sourcing + Customs'},
            {ic:'🌾',t:'Commodity Traders',d:'You export sesame, cocoa, palm oil, hibiscus from Nigeria to US or global markets. You need export documentation, quality assurance, and predictable outbound logistics.',fit:'Commodity + Export'},
            {ic:'🛠️',t:'US SMEs Sourcing from Nigeria',d:'You need African goods sourced, verified, and delivered into your US business. Textiles, agricultural products, artisanal goods — you want one operator to run it.',fit:'Sourcing + Import'},
          ].map((b,i)=>(
            <div key={b.t} className="sol-card fu" ref={r} style={{transitionDelay:`${i*.06}s`}}>
              <div style={{fontSize:26,marginBottom:14}}>{b.ic}</div>
              <div className="sol-t" style={{marginBottom:10}}>{b.t}</div>
              <div className="sol-d">{b.d}</div>
              <div className="sol-tags" style={{marginTop:18}}>
                <span className="sol-tag">Service fit: {b.fit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt">
        <div className="fu" ref={r}>
          <div className="stag">Trade Order Flow</div>
          <h2 className="sh">From quote to <span className="acc">delivered goods</span> in four moves.</h2>
        </div>
        <div className="meth-wrap fu" ref={r}>
          {[
            {tag:'Step 01',t:'Quote',d:'Tell us what you\'re trading — route, cargo, timeline. We come back within one business day with a scoped quote: freight, customs, clearing, delivery, payment terms. Fixed prices; no hidden fees.'},
            {tag:'Step 02',t:'Confirm',d:'You accept the quote. We open a trade order under XaeccoX LLC (US side) or XaeccoX Solution Enterprise (NG side) — proper PO, commercial invoice, terms in writing. Deposit or full payment against invoice.'},
            {tag:'Step 03',t:'Fulfil',d:'We source, consolidate, ship, and clear. Live status updates. If NAFDAC, SONCAP, Form M, or US CBP paperwork is needed, we handle it. Your order is one dashboard away.'},
            {tag:'Step 04',t:'Deliver',d:'Goods land at the door — Lagos, Abuja, Philadelphia, Houston, wherever the destination is. Proof of delivery, final invoice, receipts. Reorder is one click when you\'re ready.'},
          ].map((s,i)=>(
            <div className="meth-step" key={i}>
              <div className="meth-n">0{i+1}</div>
              <div className="meth-tag">{s.tag}</div>
              <div className="meth-title">{s.t}</div>
              <div className="meth-desc">{s.d}</div>
              {i<3&&<div className="meth-connector">→</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="services">
        <div className="fu" ref={r}>
          <div className="stag">Services</div>
          <h2 className="sh">Six trade services<br/><span className="acc">we operate for customers.</span></h2>
          <p className="sdesc">Not features, not "solutions" — actual services XaeccoX delivers as principal operator, invoiced to your business, executed by our team and partners across the corridor.</p>
        </div>
        <div className="sol-grid">
          {SOLUTIONS.map((s,i)=>(
            <div key={s.n} className="sol-card fu" ref={r} style={{transitionDelay:`${i*.07}s`}}>
              <div className="sol-n">{s.n}</div>
              <div className="sol-t">{s.t}</div>
              <div className="sol-d">{s.d}</div>
              <div className="sol-tags">{s.tags.map(t=><span className="sol-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="platform">
        <div className="plat-intro fu" ref={r}>
          <div>
            <div className="stag">Customer Dashboard · Preview</div>
            <h2 className="sh">Track every trade<br/><span className="acc">end-to-end.</span></h2>
            <p className="sdesc">Every XaeccoX customer gets their own operations dashboard — orders, shipments, documents, payments, all in one place. Launching alongside first paying customers; design preview below.</p>
          </div>
          <div className="plat-feats">
            {[
              {ic:'📋',t:'Order Status',d:'From quote to delivery, every stage tracked. See what stage each order is in, who is handling it, and when the next update lands.'},
              {ic:'📦',t:'Shipment Tracking',d:'Container position, port status, customs progress, last-mile handoff. All the pieces that usually live in five WhatsApp threads, in one place.'},
              {ic:'📄',t:'Trade Documents',d:'Commercial invoices, bills of lading, Form M, SONCAP, PAAR, NAFDAC certificates — filed under each order, downloadable when you need them.'},
              {ic:'💳',t:'Payments & Receipts',d:'Every payment leg — deposit, balance, refunds — with receipts against the order. Multi-currency ledger across USD and NGN.'},
            ].map(f=>(
              <div className="pfeat" key={f.t}>
                <div className="pfeat-ic">{f.ic}</div>
                <div><div className="pfeat-t">{f.t}</div><div className="pfeat-d">{f.d}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="dash-wrap fu" ref={r}>
          <span className="preview-tag">⚙ Illustrative · Design Preview</span>
          <div className="dash">
            <div className="dash-bar">
              <div className="db r"/><div className="db y"/><div className="db g"/>
              <div className="dash-url">app.xaeccox.io / my-orders</div>
            </div>
            <div className="dash-body">
              <div className="d-side">
                <div className="d-side-logo">Xaecco<span>X</span></div>
                {[{ic:'📊',l:'Dashboard'},{ic:'🚢',l:'Shipments'},{ic:'🤖',l:'Agents'},{ic:'📋',l:'Documents'},{ic:'💱',l:'Payments'},{ic:'⬡',l:'ERP Diagnostics'},{ic:'⚙️',l:'Settings'}].map(it=>(
                  <div key={it.l} className={`d-nav-item${dashView===it.l?' on':''}`} onClick={()=>setDashView(it.l)}><span>{it.ic}</span>{it.l}</div>
                ))}
              </div>
              <div className="d-main">
                {(()=>{
                  const v=DASH_VIEWS[dashView];
                  return(
                    <>
                      <div className="dm-top">
                        <div className="dm-title">{v.title}</div>
                        <div className="live-chip"><span className="lc-dot"/>Preview · Sample Data</div>
                      </div>
                      {v.kpis.length>0&&(
                        <div className="dm-kpis">
                          {v.kpis.map(m=>(
                            <div className="dk" key={m.l}><div className="dk-v">{m.v}</div><div className="dk-l">{m.l}</div></div>
                          ))}
                        </div>
                      )}
                      <div className="ship-list">
                        {v.list.map(s=>(
                          <div className="ship" key={s.id}>
                            <div className="ship-id">{s.id}</div>
                            <div className="ship-r">{s.r}</div>
                            <div className={`ship-s ${s.s}`}>{s.sl}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
              <div className="d-right">
                <div className="dr-hd"><span className="dr-dot"/>Agent Activity (Sample)</div>
                <AgentLog/>
              </div>
            </div>
          </div>
        </div>
        <div className="fu" ref={r} style={{marginTop:32,display:'flex',flexDirection:'column',alignItems:'center',gap:14,textAlign:'center'}}>
          <p style={{fontSize:14,color:'var(--w3)',maxWidth:520,margin:0,lineHeight:1.65}}>
            Portal launches alongside our first paying orders. Existing customers get invited automatically; new customers can request access now.
          </p>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center'}}>
            <button className="btn-nav-cta" onClick={()=>openPortal('signup')} style={{padding:'11px 24px',fontSize:13}}>Request portal access</button>
            <button className="btn-nav-ghost" onClick={()=>openPortal('signin')} style={{padding:'11px 24px',fontSize:13}}>Existing customer? Sign in</button>
          </div>
        </div>
      </section>

      <section>
        <div className="fu" ref={r}>
          <div className="stag">Market Context · Industry Sources</div>
          <h2 className="sh">The size of <span className="acc">what we're working on.</span></h2>
          <p className="sdesc">These are <strong style={{color:'var(--w)'}}>industry-wide market figures</strong> from SWIFT and McKinsey — the addressable problem cross-border commerce platforms exist to chip at. They are not XaeccoX results; our own corridor numbers will appear here as engagements close.</p>
        </div>
        <div className="met-row fu" ref={r}>
          {[
            {target:72,suffix:'%',static:null,label:'Of payment exceptions on the SWIFT network are caused by formatting errors, account issues, and invalid data',note:'SWIFT · cross-border payments research'},
            {target:null,suffix:'',static:'$6.5B',label:'Annual industry savings unlocked by digitising paper bills of lading',note:'McKinsey · "The multi-billion-dollar paper jam"'},
            {target:20,suffix:'%',static:null,label:'Cost reduction achievable through AI-enabled customs clearance',note:'McKinsey · trade digitisation analysis'},
            {target:null,suffix:'',static:'$1.6B',label:'Spent each year by financial institutions investigating delayed cross-border payments',note:'SWIFT · global payments investigations'},
          ].map(m=>(
            <div className="mb" key={m.label}>
              <div className="mb-val">
                {m.static ? m.static : <Counter target={m.target} suffix={m.suffix}/>}
              </div>
              <div className="mb-label">{m.label}</div>
              <div className="mb-note">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt" id="tech-pointer">
        <div className="fu" ref={r}>
          <div className="stag">Software Backbone</div>
          <h2 className="sh">Powered by <span className="acc">XaeTech.</span></h2>
          <p className="sdesc">XaeccoX runs on infrastructure our sister company builds: XaePay for cross-border payments, XaePro for AI agent tooling, XaeOps for trade operations. Same team, same corridor DNA, sold separately to other operators and enterprises.</p>
        </div>

        <div className="fu" ref={r} style={{marginTop:52,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          <div className="market-card" style={{padding:'32px 32px','--accent':'linear-gradient(90deg,#5282FF,#A259FF)','--ghost-c':'#5282FF'}} data-ghost="PAY">
            <div style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:14}}>
              <span style={{fontFamily:'var(--fm)',fontSize:8,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--jade)',background:'rgba(0,214,143,.08)',border:'1px solid rgba(0,214,143,.25)',padding:'3px 9px',borderRadius:'var(--rpill)'}}>Live</span>
            </div>
            <div className="mc-title" style={{fontSize:22,marginBottom:6,background:'linear-gradient(90deg,var(--blu),var(--vio))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>XaePay</div>
            <div className="mc-desc" style={{marginBottom:16,fontSize:13}}>Cross-border payments — the operating layer above licensed rails. What powers XaeccoX's multi-currency settlement.</div>
            <a href="https://xaepay.com" target="_blank" rel="noopener noreferrer" style={{fontFamily:'var(--fm)',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)',paddingBottom:2}}>xaepay.com →</a>
          </div>

          <div className="market-card" style={{padding:'32px 32px','--accent':'linear-gradient(90deg,#00E5C8,#5282FF)','--ghost-c':'#00E5C8'}} data-ghost="PRO">
            <div style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:14}}>
              <span style={{fontFamily:'var(--fm)',fontSize:8,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',background:'rgba(245,166,35,.08)',border:'1px solid rgba(245,166,35,.25)',padding:'3px 9px',borderRadius:'var(--rpill)'}}>In Dev</span>
            </div>
            <div className="mc-title" style={{fontSize:22,marginBottom:6,background:'linear-gradient(90deg,#00E5C8,#5282FF)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>XaePro</div>
            <div className="mc-desc" style={{marginBottom:16,fontSize:13}}>AI agent tools for workflow and supply-chain automation. Autonomous agents monitoring, deciding, and executing across your ops.</div>
            <Link to="/tech" style={{fontFamily:'var(--fm)',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)',paddingBottom:2}}>Learn more →</Link>
          </div>

          <div className="market-card" style={{padding:'32px 32px','--accent':'linear-gradient(90deg,#F5A623,#A259FF)','--ghost-c':'#F5A623'}} data-ghost="OPS">
            <div style={{display:'inline-flex',alignItems:'center',gap:8,marginBottom:14}}>
              <span style={{fontFamily:'var(--fm)',fontSize:8,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',background:'rgba(245,166,35,.08)',border:'1px solid rgba(245,166,35,.25)',padding:'3px 9px',borderRadius:'var(--rpill)'}}>Roadmap</span>
            </div>
            <div className="mc-title" style={{fontSize:22,marginBottom:6,background:'linear-gradient(90deg,#F5A623,#A259FF)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>XaeOps</div>
            <div className="mc-desc" style={{marginBottom:16,fontSize:13}}>Trade-ops platform for third-party operators — freight forwarders, sourcing agents, diaspora commerce operators.</div>
            <Link to="/tech" style={{fontFamily:'var(--fm)',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)',paddingBottom:2}}>Learn more →</Link>
          </div>
        </div>

        <p style={{textAlign:'center',color:'var(--w3)',fontSize:13,marginTop:36,fontFamily:'var(--fd)',maxWidth:680,marginLeft:'auto',marginRight:'auto'}}>
          Need software, integration, AI agents, or consulting for your own operation? <Link to="/tech" style={{color:'var(--blu)',textDecoration:'underline'}}>Visit XaeTech →</Link>
        </p>
      </section>

      <section id="trust">
        <div className="fu" ref={r}>
          <div className="stag">Trust & Compliance</div>
          <h2 className="sh">How we handle<br/><span className="acc">your trade, your data, your money.</span></h2>
          <p className="sdesc">A trade operator earns trust by being explicit about what it does, what it doesn't do, and who's actually holding what. Here's ours.</p>
        </div>

        <div className="fu" ref={r} style={{marginTop:52,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          <div className="glass-card" style={{padding:'28px 26px',borderRadius:'var(--r12)'}}>
            <div style={{fontFamily:'var(--fm)',fontSize:9,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--jade)',marginBottom:14}}>What We Handle</div>
            <div style={{fontFamily:'var(--fd)',fontWeight:700,fontSize:16,marginBottom:14,color:'var(--w)'}}>Trade documentation, corridor-side</div>
            <div style={{fontSize:13,color:'var(--w3)',lineHeight:1.7,marginBottom:16}}>Every order routes through the correct entity as principal — <strong style={{color:'var(--w2)'}}>XaeccoX LLC</strong> in the US, <strong style={{color:'var(--w2)'}}>XaeccoX Solution Enterprise</strong> in Nigeria — with proper commercial paperwork.</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {['CBN','NAFDAC','SONCAP','Form M','PAAR','US CBP','Nigerian Customs','Incoterms 2020'].map(x=><span key={x} className="sol-tag">{x}</span>)}
            </div>
          </div>

          <div className="glass-card" style={{padding:'28px 26px',borderRadius:'var(--r12)'}}>
            <div style={{fontFamily:'var(--fm)',fontSize:9,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--blu)',marginBottom:14}}>Payments</div>
            <div style={{fontFamily:'var(--fd)',fontWeight:700,fontSize:16,marginBottom:14,color:'var(--w)'}}>NGN or USD, for services rendered</div>
            <div style={{fontSize:13,color:'var(--w3)',lineHeight:1.7,marginBottom:16}}>Standard commercial invoicing per trade order. Pay <strong style={{color:'var(--w2)'}}>USD</strong> to XaeccoX LLC or <strong style={{color:'var(--w2)'}}>NGN</strong> to XaeccoX Solution Enterprise, whichever fits your side of the corridor.</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {['USD to XaeccoX LLC','NGN to XaeccoX Solution Enterprise','Per-trade invoicing'].map(x=><span key={x} className="sol-tag">{x}</span>)}
            </div>
          </div>

          <div className="glass-card" style={{padding:'28px 26px',borderRadius:'var(--r12)'}}>
            <div style={{fontFamily:'var(--fm)',fontSize:9,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--vio)',marginBottom:14}}>Your Data</div>
            <div style={{fontFamily:'var(--fd)',fontWeight:700,fontSize:16,marginBottom:14,color:'var(--w)'}}>Minimal collection, no sharing</div>
            <div style={{fontSize:13,color:'var(--w3)',lineHeight:1.7,marginBottom:16}}>We collect only what a trade requires — contact, shipping details, KYC where needed. Never sold, never shared with advertisers. Full policy at <Link to="/privacy" style={{color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)'}}>/privacy</Link> and <Link to="/terms" style={{color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)'}}>/terms</Link>.</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
              {['GDPR-Aware','NDPR-Aware','No Trackers','No Ad Pixels','Formspree-Encrypted'].map(x=><span key={x} className="sol-tag">{x}</span>)}
            </div>
          </div>
        </div>

      </section>

      <section id="founder">
        <div className="fu" ref={r}>
          <div className="stag">Founder</div>
        </div>
        <div className="agent-split fu" ref={r} style={{marginTop:24,alignItems:'center'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:280,height:280,borderRadius:'var(--r16)',background:'linear-gradient(135deg,rgba(82,130,255,.18),rgba(162,89,255,.18))',border:'1px solid var(--b2)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--fd)',fontWeight:900,fontSize:96,letterSpacing:'-.04em',background:'linear-gradient(135deg,rgba(82,130,255,.12),rgba(162,89,255,.12))',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 30%,rgba(82,130,255,.25),transparent 60%)'}}/>
              <span style={{background:'linear-gradient(135deg,var(--blu),var(--vio))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',position:'relative',zIndex:1}}>CO</span>
            </div>
          </div>
          <div>
            <h2 className="sh" style={{fontSize:'clamp(26px,3vw,38px)',marginBottom:8}}>Chukwura Okoli</h2>
            <div style={{fontFamily:'var(--fm)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--blu)',marginBottom:20}}>Founder, XaeccoX</div>
            <p className="agent-prose" style={{margin:'0 0 18px',fontSize:15}}>
              Operator and architect across the US ↔ Nigeria trade corridor. Nearly a decade in global supply chain, AI solutions architecture, and ERP-grade process design — currently shipping containers and building infrastructure between Lagos, Philadelphia, Los Angeles, and Houston.
            </p>
            <p className="agent-prose" style={{margin:'0 0 22px',fontSize:15,color:'var(--w2)'}}>
              XaeccoX is the platform he wishes existed when he started.
            </p>
            <a href="mailto:info@xaeccox.io?subject=Hello%20from%20xaeccox.io" style={{fontFamily:'var(--fd)',fontWeight:600,fontSize:14,color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)',paddingBottom:2}}>Talk to the founder →</a>
          </div>
        </div>
      </section>

      <section className="alt" id="next">
        <div className="fu" ref={r} style={{textAlign:'center',maxWidth:760,margin:'0 auto'}}>
          <div className="stag" style={{justifyContent:'center'}}>What's Next</div>
          <h2 className="sh">Beyond <span className="acc">the corridor.</span></h2>
          <p className="sdesc" style={{margin:'18px auto 0',textAlign:'center'}}>
            The US ↔ Nigeria corridor is the proof. The roadmap extends to UK ↔ Nigeria, EU ↔ Nigeria, and US ↔ Ghana within 24 months. Africa to the world — with the operational depth to back it.
          </p>
        </div>
      </section>

      <section id="faq">
        <div className="fu" ref={r}>
          <div className="stag">FAQ</div>
          <h2 className="sh">Straight answers to<br/><span className="acc">what people actually ask.</span></h2>
        </div>
        <div className="fu" ref={r} style={{marginTop:52,maxWidth:820,margin:'52px auto 0',display:'flex',flexDirection:'column',gap:10}}>
          {[
            {q:'How does an order work, start to finish?',a:'You send a trade quote request. Within one business day we come back with a scoped quote — freight, customs, clearing, delivery, payment terms. If you accept, we open a proper commercial order under the correct XaeccoX entity, invoice you, and start execution. You track status through the customer portal (once live) or by email. On arrival, final invoice + receipts close the order.'},
            {q:'How long does a container from the US to Nigeria take?',a:'Ocean freight from Houston to Tin Can Island runs 25–35 days door-to-door on typical lanes. Air freight from major US airports to Lagos runs 3–5 business days. Both timelines assume clean paperwork; customs holds can add 3–10 days if HS coding, NAFDAC, or SONCAP paperwork is incomplete. We surface those risks in the quote so you can plan around them.'},
            {q:'What order sizes do you handle?',a:'Anything from a single barrel of foodstuffs to a 40ft full container of vehicles or commercial goods. We consolidate multiple small shippers into shared containers (LCL) when volumes are individually small — that\'s what makes it economical for diaspora shipments and small businesses. There\'s no minimum-order threshold on the quote request; if it doesn\'t make economic sense, we\'ll tell you and suggest an alternative.'},
            {q:'Do you handle NAFDAC, SONCAP, Form M, PAAR paperwork?',a:'Yes, on any shipment that requires them. Our team pre-checks NAFDAC registration and product clearance requirements against your goods, coordinates SONCAP where the SON regime applies, opens Form M against the correct authorised dealer bank, and ensures PAAR is issued cleanly before goods arrive. This is baked into standard fulfillment on regulated shipments — not an add-on.'},
            {q:'Can I track my order in real time?',a:'The customer portal launches alongside our first paying orders — it shows order status, shipment position, uploaded documents, and payment ledger. Until then, every customer gets a WhatsApp or email thread that\'s updated at each stage (booking confirmed, container loaded, in transit, cleared customs, out for delivery). No opaque black boxes.'},
            {q:'What happens if my goods get held at customs?',a:'We work through it and communicate immediately. Most holds are documentation — wrong HS code, missing pre-clearance, mismatched invoice. We fix the paperwork and re-present. Genuine issues (prohibited goods, valuation disputes) get escalated with options — pay, dispute, or re-export — and we quote you the cost of each path. You\'re never in the dark on a held container.'},
            {q:'How do payments work on my order?',a:'Standard commercial invoicing. You pay in USD to XaeccoX LLC (US-side) or in NGN to XaeccoX Solution Enterprise (Nigeria-side), whichever fits your side of the corridor. Typically 50% on order confirmation and 50% on delivery, but bigger or repeat orders can move to net-15 or net-30 credit terms once we\'ve worked together.'},
            {q:'Do you offer credit or trade finance?',a:'For established customers, yes — after two or three successful trades we can extend structured credit terms (net-15, net-30, or partial deferred payment on specific milestones). For new customers, orders start with the standard 50/50 payment schedule. We don\'t currently offer stand-alone trade credit or receivables financing as a product.'},
          ].map((f,i)=>(
            <div key={i} className="glass-card" style={{padding:'0',borderRadius:'var(--r12)',cursor:'pointer'}} onClick={()=>setOpenFaq(openFaq===i?null:i)}>
              <div style={{padding:'22px 26px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:16}}>
                <div style={{fontFamily:'var(--fd)',fontWeight:600,fontSize:15,color:'var(--w)',lineHeight:1.4}}>{f.q}</div>
                <div style={{fontFamily:'var(--fm)',fontSize:18,color:'var(--blu)',transition:'transform .2s',transform:openFaq===i?'rotate(45deg)':'rotate(0)'}}>＋</div>
              </div>
              {openFaq===i&&(
                <div style={{padding:'0 26px 22px',fontSize:14,color:'var(--w3)',lineHeight:1.7}}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
        <p style={{textAlign:'center',color:'var(--w3)',fontSize:13,marginTop:36,fontFamily:'var(--fd)'}}>
          Something else on your mind? <a href="mailto:info@xaeccox.io?subject=Question%20from%20xaeccox.io" style={{color:'var(--blu)',textDecoration:'underline'}}>Email us directly.</a>
        </p>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-glow"/><div className="cta-grid-lines"/>
        <div className="stag fu" ref={r} style={{justifyContent:'center'}}>Start a trade</div>
        <h2 className="cta-h fu" ref={r}>
          Move goods across <span className="acc">the corridor.</span>
        </h2>
        <p className="cta-sub">Tell us what you're trading. We come back with a scoped quote within one business day — freight, customs, clearing, delivery, payment terms.</p>
        <div className="cta-actions">
          <button className="btn-cta-p" onClick={openQuote}>Request a trade quote</button>
          <a href="mailto:info@xaeccox.io?subject=Hello%20from%20xaeccox.io" className="btn-cta-g" style={{textDecoration:'none',display:'inline-block'}}>Talk to the team →</a>
        </div>
        <div className="cta-trust">
          {['US ↔ Nigeria · Active','Entities in Delaware + Lagos','Founder-led','Software by XaeTech','Africa-broad · Roadmap'].map(b=>(
            <span className="trust-badge" key={b}>{b}</span>
          ))}
        </div>
      </section>

      <footer>
        <div className="ft-grid">
          <div>
            <div className="ft-logo">Xaecco<span>X</span></div>
            <div className="ft-tagline">Cross-border trade commerce for the US ↔ Nigeria corridor. Sourcing, logistics, customs, delivery — operated end-to-end.</div>
            <div className="ft-socials">
              <a href="https://www.linkedin.com/company/xaeccox" target="_blank" rel="noopener noreferrer" className="ft-soc" style={{textDecoration:'none',color:'inherit'}} title="LinkedIn">in</a>
              <a href="mailto:info@xaeccox.io" className="ft-soc" style={{textDecoration:'none',color:'inherit'}} title="Email">@</a>
            </div>
          </div>
          {[
            {h:'Services',links:[['Sourcing & Procurement','services'],['Container Consolidation','services'],['International Freight','services'],['Customs Clearing','services'],['Last-Mile Delivery','services'],['Payments & Settlement','services']]},
            {h:'Engage',links:[['Request quote','contact'],['Corridor','corridor'],['Built for','built-for'],['Contact','contact']]},
            {h:'Company',links:[['About the founder','founder'],['What\'s next','next']]},
          ].map(col=>(
            <div key={col.h}>
              <div className="ft-col-hd">{col.h}</div>
              <ul className="ft-links">{col.links.map(([l,id])=>(
                <li key={l}><a href={`#${id}`} onClick={e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}}>{l}</a></li>
              ))}</ul>
            </div>
          ))}
        </div>

        <div style={{borderTop:'1px solid var(--b1)',padding:'24px 0 18px',marginTop:8,fontSize:12,color:'var(--w3)',lineHeight:1.75,fontFamily:'var(--fd)'}}>
          <strong style={{color:'var(--w2)',fontWeight:600}}>XAECCOX LLC</strong> · Delaware limited liability company · US-side principal entity
          <br/>
          <strong style={{color:'var(--w2)',fontWeight:600}}>XaeccoX Solution Enterprise</strong> · Nigeria · NG-side principal entity
          <br/>
          Registered US office: 651 N Broad St, Middletown, Delaware 19709, United States
          <span style={{margin:'0 8px',color:'var(--w4)'}}>·</span>
          Operated by Chukwura Okoli
          <br/>
          Operating regions: Lagos · Philadelphia · Los Angeles · Houston
          <span style={{margin:'0 8px',color:'var(--w4)'}}>·</span>
          Email <a href="mailto:info@xaeccox.io" style={{color:'var(--blu)',textDecoration:'none'}}>info@xaeccox.io</a>
          <span style={{margin:'0 8px',color:'var(--w4)'}}>·</span>
          Phone / WhatsApp <a href="tel:+12673618234" style={{color:'var(--blu)',textDecoration:'none'}}>+1 (267) 361-8234</a>
          <br/>
          Software / AI / Integration: <Link to="/tech" style={{color:'var(--blu)',textDecoration:'none'}}>XaeTech →</Link>
        </div>

        <div className="ft-bottom">
          <span>© 2026 XAECCOX LLC · Built corridor-first</span>
          <div className="ft-badges">
            <Link to="/privacy" style={{color:'inherit',textDecoration:'none'}}><span className="ft-b">Privacy</span></Link>
            <Link to="/terms" style={{color:'inherit',textDecoration:'none'}}><span className="ft-b">Terms</span></Link>
            <span className="ft-b">US ↔ NG · Active</span>
            <span className="ft-b">Africa-broad · Roadmap</span>
          </div>
        </div>
      </footer>
    </>
  );
}
