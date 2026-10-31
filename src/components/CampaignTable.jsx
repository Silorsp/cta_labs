import { decimalFormatter } from '../utils/formatters';

const CampaignTable = ({ campaigns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="py-4 px-4 font-semibold text-slate-700">Nome da Campanha</th>
            <th className="py-4 px-4 font-semibold text-slate-700">Plataforma</th>
            <th className="py-4 px-4 font-semibold text-slate-700">Status</th>
            <th className="py-4 px-4 font-semibold text-slate-700 text-right">Investimento</th>
            <th className="py-4 px-4 font-semibold text-slate-700 text-right">Conv.</th>
            <th className="py-4 px-4 font-semibold text-slate-700 text-right">ROAS</th>
            <th className="py-4 px-4 font-semibold text-slate-700 text-right">CTR</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-slate-50 transition-colors">
              <td className="py-4 px-4 font-medium text-slate-900">{campaign.name}</td>
              <td className="py-4 px-4">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  campaign.platform === 'Meta Ads' ? 'bg-blue-100 text-blue-700' :
                  campaign.platform === 'Google Ads' ? 'bg-orange-100 text-orange-700' :
                  'bg-black text-white'
                }`}>
                  {campaign.platform}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className={`flex items-center text-sm ${campaign.status === 'Ativa' ? 'text-emerald-600' : 'text-slate-400'}`}>
                  <span className={`w-2 h-2 rounded-full mr-2 ${campaign.status === 'Ativa' ? 'bg-emerald-500' : 'bg-slate-300'}`}></span>
                  {campaign.status}
                </span>
              </td>
              <td className="py-4 px-4 text-right font-medium">
                {/* Performance: use pre-instantiated decimalFormatter instead of calling toLocaleString with options in loop */}
                R$ {decimalFormatter.format(campaign.spend)}
              </td>
              <td className="py-4 px-4 text-right">{campaign.conversions}</td>
              <td className="py-4 px-4 text-right font-semibold text-indigo-600">{campaign.roas}x</td>
              <td className="py-4 px-4 text-right">{campaign.ctr}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
