import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, Cell, PieChart, Pie
} from 'recharts';
import {
  DollarSign,
  Target,
  MousePointer2,
  TrendingUp,
  LayoutDashboard,
  Settings,
  Calendar,
  ChevronDown
} from 'lucide-react';
import StatsCard from './components/StatsCard';
import CampaignTable from './components/CampaignTable';
import { summaryData, dailyData, platformData, campaigns } from './mockData';
import { currencyFormatter, dateFormatter, numberFormatter } from './utils/formatters';

const COLORS = ['#3b82f6', '#f97316', '#000000'];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <LayoutDashboard className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">AdTracker</h1>
        </div>

        <nav className="space-y-2 flex-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
            <Target className="w-5 h-5" />
            Campanhas
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Configurações
          </a>
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
              JS
            </div>
            <div>
              <p className="text-sm font-semibold">Jules Smith</p>
              <p className="text-xs text-slate-500">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Visão Geral</h2>
            <p className="text-slate-500 mt-1">Acompanhe o desempenho do seu tráfego pago em tempo real.</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
              <Calendar className="w-4 h-4 text-slate-500" />
              Últimos 7 dias
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-colors">
              Exportar Relatório
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Investimento Total"
            value={`R$ ${currencyFormatter.format(summaryData.totalSpend)}`}
            icon={DollarSign}
            trend="up"
            trendValue="12.5%"
            color="bg-blue-500"
          />
          <StatsCard
            title="Conversões"
            value={summaryData.totalConversions}
            icon={Target}
            trend="up"
            trendValue="8.2%"
            color="bg-emerald-500"
          />
          <StatsCard
            title="CTR Médio"
            value={`${summaryData.avgCTR}%`}
            icon={MousePointer2}
            trend="down"
            trendValue="0.4%"
            color="bg-orange-500"
          />
          <StatsCard
            title="ROAS Médio"
            value={`${summaryData.avgROAS}x`}
            icon={TrendingUp}
            trend="up"
            trendValue="2.1%"
            color="bg-indigo-500"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Main Trend Chart */}
          <div className="xl:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Desempenho no Período</h3>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                  <span className="text-slate-500">Gasto</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-500">Conversões</span>
                </div>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyData}>
                  <defs>
                    <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{fill: '#64748b', fontSize: 12}}
                    tickFormatter={(str) => dateFormatter.format(new Date(str))}
                  />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip
                    formatter={(value, name) => [name === 'spend' ? `R$ ${numberFormatter.format(value)}` : value, name === 'spend' ? 'Investimento' : 'Conversões']}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                  />
                  <Area
                    type="monotone"
                    dataKey="spend"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorSpend)"
                  />
                  <Area
                    type="monotone"
                    dataKey="conversions"
                    stroke="#10b981"
                    strokeWidth={3}
                    fill="transparent"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Platform Distribution */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Investimento por Plataforma</h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `R$ ${numberFormatter.format(value)}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {platformData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                    {item.name}
                  </div>
                  <span className="text-sm font-bold">R$ {numberFormatter.format(item.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Campaign Table Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold">Desempenho das Campanhas</h3>
            <button className="text-indigo-600 text-sm font-semibold hover:underline">Ver todas</button>
          </div>
          <CampaignTable campaigns={campaigns} />
        </div>
      </main>
    </div>
  );
}

export default App;
