/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Wrench, 
  GraduationCap, 
  LayoutDashboard, 
  Search,
  CheckCircle2,
  XCircle,
  Info,
  ChevronRight,
  Terminal,
  Database,
  Lock,
  User,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Section = 'overview' | 'classification' | 'usecase' | 'timeline' | 'recovery' | 'report' | 'tools' | 'outcomes';

// --- Components ---

const SidebarItem = ({ 
  id, 
  label, 
  icon: Icon, 
  active, 
  onClick 
}: { 
  id: Section, 
  label: string, 
  icon: any, 
  active: boolean, 
  onClick: (id: Section) => void 
}) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 border-r-2 ${
      active 
        ? 'bg-zinc-900 text-white border-emerald-500' 
        : 'text-zinc-400 border-transparent hover:bg-zinc-800/50 hover:text-zinc-200'
    }`}
  >
    <Icon size={18} />
    {label}
  </button>
);

const Card = ({ title, children, icon: Icon }: { title: string, children: React.ReactNode, icon?: any }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-xl">
    <div className="px-6 py-4 border-bottom border-zinc-800 bg-zinc-900/50 flex items-center gap-2">
      {Icon && <Icon size={18} className="text-emerald-500" />}
      <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">{title}</h3>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

const SeverityBadge = ({ severity }: { severity: 'Low' | 'Medium' | 'High' }) => {
  const colors = {
    Low: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    Medium: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    High: 'bg-rose-500/10 text-rose-500 border-rose-500/20'
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${colors[severity]}`}>
      {severity}
    </span>
  );
};

// --- Sections ---

const Overview = () => (
  <div className="space-y-6">
    <Card title="Role Explanation" icon={User}>
      <p className="text-zinc-400 leading-relaxed mb-4">
        As an <span className="text-emerald-400 font-medium">Incident Response Intern</span>, I serve as the first line of defense in the Security Operations Center (SOC). My role is to support the senior IR team in the end-to-end lifecycle of a security incident, from initial detection to final reporting.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-zinc-200 font-medium mb-2 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            Key Responsibilities
          </h4>
          <ul className="text-sm text-zinc-400 space-y-2 list-disc pl-5">
            <li>Monitoring SIEM alerts and identifying anomalies.</li>
            <li>Initial triage and classification of potential threats.</li>
            <li>Documenting incident timelines and evidence collection.</li>
            <li>Assisting in the isolation of compromised systems.</li>
            <li>Drafting post-incident reports for audit compliance.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-zinc-200 font-medium mb-2 flex items-center gap-2">
            <Terminal size={16} className="text-emerald-500" />
            Required Skills
          </h4>
          <ul className="text-sm text-zinc-400 space-y-2 list-disc pl-5">
            <li>Understanding of TCP/IP and network protocols.</li>
            <li>Knowledge of common attack vectors (Phishing, SQLi, Malware).</li>
            <li>Proficiency in log analysis (Windows Event Logs, Syslog).</li>
            <li>Strong documentation and technical writing skills.</li>
            <li>Ability to work under pressure during active incidents.</li>
          </ul>
        </div>
      </div>
    </Card>

    <Card title="Organizational Value" icon={Shield}>
      <div className="flex gap-4 items-start">
        <div className="p-3 bg-emerald-500/10 rounded-lg">
          <Activity className="text-emerald-500" size={24} />
        </div>
        <div>
          <p className="text-zinc-400 text-sm leading-relaxed">
            This role adds value by reducing the <span className="text-zinc-200">Mean Time to Detect (MTTD)</span> and <span className="text-zinc-200">Mean Time to Respond (MTTR)</span>. By handling initial documentation and triage, the intern allows senior analysts to focus on complex forensic analysis, ensuring the organization remains resilient against evolving cyber threats.
          </p>
        </div>
      </div>
    </Card>
  </div>
);

const Classification = () => (
  <div className="space-y-6">
    <Card title="Incident Identification & Classification" icon={Search}>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-500 uppercase text-[10px] tracking-widest">
              <th className="pb-3 px-4">Incident Scenario</th>
              <th className="pb-3 px-4">Type</th>
              <th className="pb-3 px-4">Severity</th>
              <th className="pb-3 px-4">Justification</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300">
            <tr className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
              <td className="py-4 px-4 font-medium">Malware Infection</td>
              <td className="py-4 px-4 text-zinc-500">Malicious Code</td>
              <td className="py-4 px-4"><SeverityBadge severity="High" /></td>
              <td className="py-4 px-4 text-xs text-zinc-400">Potential for lateral movement, data encryption (Ransomware), and total system lockout.</td>
            </tr>
            <tr className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
              <td className="py-4 px-4 font-medium">Unauthorized Login</td>
              <td className="py-4 px-4 text-zinc-500">Access Violation</td>
              <td className="py-4 px-4"><SeverityBadge severity="Medium" /></td>
              <td className="py-4 px-4 text-xs text-zinc-400">Account compromise could lead to data theft, but can often be contained by disabling the account.</td>
            </tr>
            <tr className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
              <td className="py-4 px-4 font-medium">Data Leakage</td>
              <td className="py-4 px-4 text-zinc-500">Information Disclosure</td>
              <td className="py-4 px-4"><SeverityBadge severity="High" /></td>
              <td className="py-4 px-4 text-xs text-zinc-400">Severe legal, financial, and reputational damage. Breach of regulatory compliance (GDPR/HIPAA).</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

const UseCase = () => (
  <div className="space-y-6">
    <Card title="Detailed Use Case: Malware Infection" icon={AlertTriangle}>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">Actors</span>
          <p className="text-sm text-zinc-200">Internal Employee, External Attacker, IR Team</p>
        </div>
        <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">Preconditions</span>
          <p className="text-sm text-zinc-200">Employee receives phishing email; Antivirus is outdated.</p>
        </div>
        <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">Postconditions</span>
          <p className="text-sm text-zinc-200">System cleaned; Root cause identified; Policies updated.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-zinc-200 font-medium flex items-center gap-2">
          <Activity size={16} className="text-emerald-500" />
          Incident Response Workflow
        </h4>
        <div className="space-y-3">
          {[
            { step: "1. Detection", desc: "SIEM alerts on unusual outbound traffic to a known malicious C2 (Command & Control) IP." },
            { step: "2. Analysis", desc: "Intern verifies the alert, identifies the source workstation, and confirms suspicious process execution." },
            { step: "3. Containment", desc: "Workstation is isolated from the network via VLAN tagging to prevent lateral movement." },
            { step: "4. Eradication", desc: "Malicious files are deleted, registry keys cleaned, and the system is scanned with updated EDR." },
            { step: "5. Recovery", desc: "System is restored from a clean backup and monitored for 48 hours for re-infection." },
            { step: "6. Lessons Learned", desc: "IR team documents the attack vector (Phishing) and recommends user awareness training." }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-3 hover:bg-zinc-800/50 rounded transition-colors border-l-2 border-emerald-500/30">
              <span className="text-emerald-500 font-mono text-xs">{item.step}</span>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  </div>
);

const Timeline = () => (
  <div className="space-y-6">
    <Card title="Incident Timeline" icon={Clock}>
      <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
        {[
          { time: "09:15 AM", event: "Initial Infection", detail: "User 'jdoe' clicks on a link in a spear-phishing email.", type: "danger" },
          { time: "09:22 AM", event: "C2 Communication", detail: "Malware attempts to contact external IP 185.x.x.x.", type: "warning" },
          { time: "09:25 AM", event: "Detection", detail: "SIEM triggers 'Suspicious Outbound Connection' alert.", type: "info" },
          { time: "09:30 AM", event: "Triage", detail: "Intern identifies affected system: WS-FIN-04.", type: "info" },
          { time: "09:45 AM", event: "Containment", detail: "Network port disabled for WS-FIN-04.", type: "success" },
          { time: "11:00 AM", event: "Investigation", detail: "Forensic image taken; malware sample isolated.", type: "info" }
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-zinc-900 ${
              item.type === 'danger' ? 'bg-rose-500' : 
              item.type === 'warning' ? 'bg-amber-500' : 
              item.type === 'success' ? 'bg-emerald-500' : 'bg-blue-500'
            }`} />
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span className="text-xs font-mono text-zinc-500 w-20">{item.time}</span>
              <div>
                <h5 className="text-sm font-semibold text-zinc-200">{item.event}</h5>
                <p className="text-xs text-zinc-400">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const Recovery = () => (
  <div className="space-y-6">
    <Card title="Containment & Recovery Planning" icon={Shield}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-rose-500 uppercase tracking-widest">Immediate Containment</h4>
          <ul className="text-sm text-zinc-400 space-y-2">
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Disconnect infected device from Wi-Fi/Ethernet.</li>
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Disable the compromised user account in Active Directory.</li>
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Block the malicious C2 IP address at the perimeter firewall.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest">Short-Term Recovery</h4>
          <ul className="text-sm text-zinc-400 space-y-2">
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Re-image the workstation using a standard gold image.</li>
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Force password resets for all users in the affected department.</li>
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Update AV/EDR signatures across the entire fleet.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Long-Term Prevention</h4>
          <ul className="text-sm text-zinc-400 space-y-2">
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Implement Multi-Factor Authentication (MFA) company-wide.</li>
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Conduct monthly Phishing Simulation tests for employees.</li>
            <li className="flex items-start gap-2"><ChevronRight size={14} className="mt-1 flex-shrink-0" /> Enhance SIEM rules to detect similar C2 patterns earlier.</li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
);

const Report = () => (
  <div className="space-y-6">
    <Card title="Incident Summary Report" icon={FileText}>
      <div className="space-y-6 text-sm">
        <div className="border-b border-zinc-800 pb-4">
          <h4 className="text-zinc-200 font-medium mb-2">Incident Overview</h4>
          <p className="text-zinc-400">On March 12, 2026, a high-severity malware infection was detected on workstation WS-FIN-04. The incident was triggered by a phishing email and resulted in unauthorized communication with a malicious external server.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-zinc-200 font-medium mb-2">Impact Analysis</h4>
            <ul className="text-zinc-400 space-y-1 list-disc pl-5">
              <li><span className="text-zinc-200">Technical:</span> One workstation compromised; no lateral movement detected.</li>
              <li><span className="text-zinc-200">Business:</span> 4 hours of downtime for the Finance department; no data loss confirmed.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-200 font-medium mb-2">Lessons Learned</h4>
            <ul className="text-zinc-400 space-y-1 list-disc pl-5">
              <li>Detection was delayed by 10 minutes due to log latency.</li>
              <li>User bypassed email filters using a URL shortener.</li>
              <li>Containment workflow was executed successfully within 15 minutes of detection.</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-lg">
          <h4 className="text-emerald-400 font-medium mb-2">Final Recommendations</h4>
          <p className="text-zinc-400 italic">"It is recommended to deploy advanced email sandboxing to inspect URLs in real-time and to conduct mandatory security awareness training for the Finance team."</p>
        </div>
      </div>
    </Card>
  </div>
);

const Tools = () => (
  <div className="space-y-6">
    <Card title="Tools & Technologies" icon={Terminal}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: "Splunk / ELK", role: "Detection & Analysis", desc: "SIEM tools used to aggregate logs and trigger alerts on suspicious patterns." },
          { name: "Wireshark", role: "Traffic Analysis", desc: "Used for deep packet inspection to analyze malicious network communication." },
          { name: "CrowdStrike / SentinelOne", role: "Endpoint Response", desc: "EDR tools used to isolate hosts and kill malicious processes remotely." },
          { name: "TheHive", role: "Case Management", desc: "Platform for tracking incident progress, tasks, and evidence documentation." },
          { name: "VirusTotal", role: "Threat Intelligence", desc: "Online service to check file hashes and IPs against global threat databases." },
          { name: "FTK Imager", role: "Forensic Acquisition", desc: "Tool used to create bit-for-bit copies of hard drives for forensic analysis." }
        ].map((tool, i) => (
          <div key={i} className="p-4 bg-zinc-800/30 border border-zinc-800 rounded-lg hover:border-emerald-500/50 transition-colors group">
            <h5 className="text-zinc-100 font-bold group-hover:text-emerald-400 transition-colors">{tool.name}</h5>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">{tool.role}</span>
            <p className="text-xs text-zinc-400 leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

const Outcomes = () => (
  <div className="space-y-6">
    <Card title="Learning Outcomes" icon={GraduationCap}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-2">
            <Terminal size={16} className="text-emerald-500" />
            Technical Skills Gained
          </h4>
          <div className="space-y-2">
            {[
              "Proficiency in SIEM alert triage and log correlation.",
              "Hands-on experience with network isolation and EDR tools.",
              "Understanding of the NIST Incident Response Framework.",
              "Ability to perform basic static malware analysis."
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-2">
            <Shield size={16} className="text-emerald-500" />
            Professional Skills Gained
          </h4>
          <div className="space-y-2">
            {[
              "Critical thinking under high-pressure security events.",
              "Professional technical documentation and reporting.",
              "Collaboration within a cross-functional SOC team.",
              "Understanding of regulatory compliance and data privacy."
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview': return <Overview />;
      case 'classification': return <Classification />;
      case 'usecase': return <UseCase />;
      case 'timeline': return <Timeline />;
      case 'recovery': return <Recovery />;
      case 'report': return <Report />;
      case 'tools': return <Tools />;
      case 'outcomes': return <Outcomes />;
      default: return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
            <Shield className="text-black" size={20} />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-tight">INCIDENT RESPONSE MS</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Cybersecurity Operations Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SYSTEM STATUS: OPERATIONAL
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
            <User size={16} className="text-zinc-400" />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-[calc(100vh-64px)] border-r border-zinc-800 sticky top-16 hidden lg:block overflow-y-auto">
          <div className="py-6">
            <p className="px-6 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-4">Project Sections</p>
            <nav className="space-y-1">
              <SidebarItem id="overview" label="Role Overview" icon={User} active={activeSection === 'overview'} onClick={setActiveSection} />
              <SidebarItem id="classification" label="Classification" icon={Search} active={activeSection === 'classification'} onClick={setActiveSection} />
              <SidebarItem id="usecase" label="Malware Use Case" icon={AlertTriangle} active={activeSection === 'usecase'} onClick={setActiveSection} />
              <SidebarItem id="timeline" label="Incident Timeline" icon={Clock} active={activeSection === 'timeline'} onClick={setActiveSection} />
              <SidebarItem id="recovery" label="Recovery Plan" icon={Shield} active={activeSection === 'recovery'} onClick={setActiveSection} />
              <SidebarItem id="report" label="Summary Report" icon={FileText} active={activeSection === 'report'} onClick={setActiveSection} />
              <SidebarItem id="tools" label="Tools & Tech" icon={Terminal} active={activeSection === 'tools'} onClick={setActiveSection} />
              <SidebarItem id="outcomes" label="Learning Outcomes" icon={GraduationCap} active={activeSection === 'outcomes'} onClick={setActiveSection} />
            </nav>
          </div>

          <div className="mt-auto p-6 border-t border-zinc-800">
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Internship Project</p>
              <p className="text-xs text-zinc-500">OJT-1 / CIE-II Evaluation</p>
            </div>
          </div>
        </aside>

        {/* Mobile Nav (Simple horizontal scroll) */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-zinc-900 border-t border-zinc-800 flex items-center overflow-x-auto px-4 gap-4 z-50">
          <SidebarItem id="overview" label="Role" icon={User} active={activeSection === 'overview'} onClick={setActiveSection} />
          <SidebarItem id="classification" label="Class" icon={Search} active={activeSection === 'classification'} onClick={setActiveSection} />
          <SidebarItem id="usecase" label="Case" icon={AlertTriangle} active={activeSection === 'usecase'} onClick={setActiveSection} />
          <SidebarItem id="timeline" label="Time" icon={Clock} active={activeSection === 'timeline'} onClick={setActiveSection} />
          <SidebarItem id="recovery" label="Plan" icon={Shield} active={activeSection === 'recovery'} onClick={setActiveSection} />
          <SidebarItem id="report" label="Report" icon={FileText} active={activeSection === 'report'} onClick={setActiveSection} />
          <SidebarItem id="tools" label="Tools" icon={Terminal} active={activeSection === 'tools'} onClick={setActiveSection} />
          <SidebarItem id="outcomes" label="Learn" icon={GraduationCap} active={activeSection === 'outcomes'} onClick={setActiveSection} />
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto pb-24 lg:pb-10">
          <div className="mb-10">
            <div className="flex items-center gap-2 text-emerald-500 mb-2">
              <LayoutDashboard size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Project Dashboard</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              {activeSection === 'overview' && "Job Role & Overview"}
              {activeSection === 'classification' && "Incident Classification"}
              {activeSection === 'usecase' && "Malware Infection Use Case"}
              {activeSection === 'timeline' && "Incident Timeline Analysis"}
              {activeSection === 'recovery' && "Containment & Recovery"}
              {activeSection === 'report' && "Incident Summary Report"}
              {activeSection === 'tools' && "Tools & Technologies"}
              {activeSection === 'outcomes' && "Learning Outcomes"}
            </h2>
            <p className="text-zinc-500 text-sm">
              {activeSection === 'overview' && "Understanding the responsibilities and value of an Incident Response Intern."}
              {activeSection === 'classification' && "Categorizing security events based on impact and severity levels."}
              {activeSection === 'usecase' && "Detailed walkthrough of a real-world malware infection scenario."}
              {activeSection === 'timeline' && "Chronological breakdown of events from detection to containment."}
              {activeSection === 'recovery' && "Strategic planning for immediate, short-term, and long-term security."}
              {activeSection === 'report' && "Formal documentation of incident findings and recommendations."}
              {activeSection === 'tools' && "Industry-standard software used in modern security operations."}
              {activeSection === 'outcomes' && "Summary of technical and professional growth during the project."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
