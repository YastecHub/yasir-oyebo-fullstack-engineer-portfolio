import React from 'react';
import { BarChart3, PieChart, MessageSquare, CreditCard, Users, Calendar, Activity, ShoppingCart, Search, Bell, Settings, ShieldCheck, TrendingUp, Lock, Zap, CheckCircle } from 'lucide-react';

interface ProjectMockupProps {
  type: string;
}

const ProjectMockup: React.FC<ProjectMockupProps> = ({ type }) => {
  const getMockup = () => {
    switch (type) {
      case 'waas':
        return <FintechDashboard />;
      case 'birthday-buddy':
        return <SocialScheduler />;
      case 'paystack':
        return <PaystackGateway />;
      case 'telex':
        return <ChatInterface />;
      case 'amjn':
        return <AnalyticsDashboard />;
      case 'mansory':
        return <EcommerceAdmin />;
      default:
        return <GenericDashboard />;
    }
  };

  return (
    <div className="w-full h-full bg-slate-900 overflow-hidden select-none">
       {/* Browser Chrome / Window Header */}
      <div className="h-6 bg-slate-950 flex items-center px-3 gap-1.5 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
      </div>
      {/* Viewport Content */}
      <div className="p-4 h-full">
        {getMockup()}
      </div>
    </div>
  );
};

const FintechDashboard = () => (
  <div className="flex flex-col gap-3 h-full">
    {/* Header */}
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-violet-600 flex items-center justify-center"><ShieldCheck size={14} className="text-white" /></div>
        <span className="text-xs font-bold text-slate-300">WAAS Wallet</span>
      </div>
      <div className="w-6 h-6 rounded-full bg-slate-800"></div>
    </div>
    {/* Balance Card */}
    <div className="bg-gradient-to-r from-violet-900/50 to-blue-900/50 p-4 rounded-lg border border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-20"><CreditCard size={48} className="text-white" /></div>
      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Total Balance</div>
      <div className="text-2xl font-bold text-white mb-2">$42,593.00</div>
      <div className="flex gap-2">
        <div className="h-6 px-3 bg-emerald-500/20 text-emerald-400 text-[10px] rounded flex items-center">+12.5%</div>
        <div className="h-6 px-3 bg-white/10 text-white text-[10px] rounded flex items-center">Send</div>
      </div>
    </div>
    {/* Transactions */}
    <div className="space-y-2">
      {[1, 2].map(i => (
        <div key={i} className="flex justify-between items-center p-2 rounded bg-slate-800/50 border border-white/5">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400">↓</div>
             <div className="h-2 w-16 bg-slate-700 rounded"></div>
          </div>
          <div className="h-2 w-8 bg-slate-700 rounded"></div>
        </div>
      ))}
    </div>
  </div>
);

const PaystackGateway = () => (
  <div className="flex flex-col gap-3 h-full">
     {/* Secure Header */}
     <div className="flex justify-between items-center bg-emerald-900/20 p-2 rounded border border-emerald-500/20">
        <div className="flex items-center gap-2">
           <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><Lock size={10} className="text-white" /></div>
           <span className="text-[10px] text-emerald-400 font-bold">Secured by Paystack</span>
        </div>
        <div className="text-[10px] text-slate-400">ID: #TRX_8829</div>
     </div>
     
     {/* Transaction Status */}
     <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-slate-800/30 rounded border border-white/5">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
           <CheckCircle size={24} className="text-emerald-500" />
        </div>
        <div className="text-sm font-bold text-white">Payment Successful</div>
        <div className="text-xs text-slate-500">NGN 50,000.00</div>
     </div>

     {/* API Log */}
     <div className="bg-slate-950 p-2 rounded border border-slate-800 font-mono text-[8px] text-slate-400 space-y-1">
        <div className="flex gap-2"><span className="text-violet-400">POST</span> /transaction/initialize</div>
        <div className="flex gap-2"><span className="text-emerald-400">200 OK</span> &#123; status: true &#125;</div>
        <div className="flex gap-2"><span className="text-violet-400">GET</span> /transaction/verify</div>
        <div className="flex gap-2"><span className="text-emerald-400">200 OK</span> &#123; gateway_res: "Approved" &#125;</div>
     </div>
  </div>
);

const SocialScheduler = () => (
  <div className="flex h-full gap-3">
    {/* Sidebar */}
    <div className="w-12 bg-slate-800/30 rounded-lg flex flex-col items-center py-3 gap-3 border border-white/5">
       <div className="w-6 h-6 rounded bg-pink-500/20 text-pink-400 flex items-center justify-center"><Calendar size={14} /></div>
       <div className="w-6 h-6 rounded-full bg-slate-700"></div>
       <div className="w-6 h-6 rounded-full bg-slate-700"></div>
    </div>
    {/* Main */}
    <div className="flex-1 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="h-3 w-24 bg-slate-700 rounded"></div>
        <div className="h-3 w-3 bg-slate-700 rounded-full"></div>
      </div>
      <div className="bg-slate-800/50 p-3 rounded-lg border border-white/5">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
          <div>
            <div className="h-2 w-20 bg-slate-600 rounded mb-1"></div>
            <div className="h-1.5 w-12 bg-slate-700 rounded"></div>
          </div>
        </div>
        <div className="h-16 bg-slate-900/50 rounded border border-dashed border-slate-700 flex items-center justify-center">
            <span className="text-[10px] text-slate-500">Automated Wish Sent! 🎂</span>
        </div>
      </div>
    </div>
  </div>
);

const ChatInterface = () => (
  <div className="flex h-full border border-white/5 rounded-lg overflow-hidden bg-slate-950">
     {/* Channel List */}
     <div className="w-16 bg-slate-900 border-r border-white/5 p-2 space-y-2">
        <div className="h-2 w-8 bg-slate-700 rounded mb-3"></div>
        {[1,2,3].map(i => <div key={i} className="h-6 w-full bg-slate-800 rounded"></div>)}
     </div>
     {/* Chat Area */}
     <div className="flex-1 flex flex-col p-2">
        <div className="flex-1 space-y-2">
           <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-700"></div>
              <div className="bg-slate-800 p-2 rounded-lg rounded-tl-none text-[8px] text-slate-400 w-24">
                 Hey, is the API up?
              </div>
           </div>
           <div className="flex gap-2 flex-row-reverse">
              <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center"><Zap size={10} className="text-white" /></div>
              <div className="bg-violet-900/40 border border-violet-500/20 p-2 rounded-lg rounded-tr-none text-[8px] text-violet-200 w-32">
                 AI Agent: Yes, uptime is 99.9%. Node endpoints are healthy.
              </div>
           </div>
        </div>
        <div className="mt-2 h-6 border border-slate-700 rounded-full flex items-center px-2">
           <div className="h-1.5 w-16 bg-slate-700 rounded"></div>
        </div>
     </div>
  </div>
);

const AnalyticsDashboard = () => (
  <div className="flex flex-col gap-2 h-full">
     <div className="flex justify-between items-center">
        <div className="h-3 w-24 bg-slate-700 rounded"></div>
        <div className="h-5 px-2 bg-emerald-900/30 text-emerald-400 text-[8px] rounded flex items-center border border-emerald-500/20">Live Data</div>
     </div>
     <div className="flex gap-2 h-20">
        <div className="flex-1 bg-slate-800/50 rounded border border-white/5 p-2 flex flex-col justify-end items-center gap-1">
           <div className="flex items-end gap-1 h-full">
              {[40, 60, 30, 80, 50].map((h, i) => (
                 <div key={i} style={{height: `${h}%`}} className="w-2 bg-violet-500 rounded-t"></div>
              ))}
           </div>
        </div>
        <div className="w-1/3 space-y-1">
           <div className="h-6 bg-slate-800 rounded border border-white/5"></div>
           <div className="h-6 bg-slate-800 rounded border border-white/5"></div>
           <div className="h-6 bg-slate-800 rounded border border-white/5"></div>
        </div>
     </div>
     <div className="flex-1 bg-slate-800/30 rounded border border-white/5 p-2 space-y-1">
        {[1,2].map(i => (
           <div key={i} className="flex justify-between items-center text-[8px] text-slate-500 border-b border-white/5 pb-1">
              <span>REPORT_ID_{i}92</span>
              <span className="text-emerald-500">Completed</span>
           </div>
        ))}
     </div>
  </div>
);

const EcommerceAdmin = () => (
  <div className="h-full flex flex-col gap-2">
     <div className="flex gap-2">
        <div className="flex-1 p-2 bg-slate-800 rounded border border-white/5">
           <div className="text-[8px] text-slate-400">Orders</div>
           <div className="text-sm font-bold text-white">1,240</div>
        </div>
        <div className="flex-1 p-2 bg-slate-800 rounded border border-white/5">
           <div className="text-[8px] text-slate-400">Revenue</div>
           <div className="text-sm font-bold text-emerald-400">$84k</div>
        </div>
     </div>
     <div className="flex-1 bg-slate-900 rounded border border-white/5 p-2">
        <div className="flex justify-between mb-2">
           <div className="h-2 w-12 bg-slate-700 rounded"></div>
           <div className="h-2 w-4 bg-slate-700 rounded"></div>
        </div>
        <div className="space-y-2">
           {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-slate-800 rounded"></div>
                 <div className="flex-1 h-2 bg-slate-800 rounded"></div>
                 <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[8px]">✓</div>
              </div>
           ))}
        </div>
     </div>
  </div>
);

const GenericDashboard = () => (
  <div className="h-full flex flex-col gap-3 items-center justify-center opacity-30">
     <Activity size={32} />
     <div className="h-2 w-24 bg-slate-700 rounded"></div>
  </div>
);

export default ProjectMockup;