import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ELECTION_DATA } from '../constants';

const ElectionStats: React.FC = () => {
  return (
    <section id="election" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            নির্বাচনী ফলাফল বিশ্লেষণ
          </h2>
          <p className="text-gray-600">
            বিগত নির্বাচনগুলোতে প্রাপ্ত ভোট এবং জনসমর্থনের চিত্র
          </p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-xl shadow-lg max-w-5xl mx-auto">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ELECTION_DATA}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" tick={{fontFamily: 'Hind Siliguri'}} />
                <YAxis />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontFamily: 'Hind Siliguri' }}
                  cursor={{fill: 'transparent'}}
                />
                <Legend wrapperStyle={{ fontFamily: 'Hind Siliguri', paddingTop: '20px' }} />
                <Bar name="লুৎফুর রহমান কাজল (ভোট)" dataKey="candidateVotes" fill="#16a34a" radius={[4, 4, 0, 0]} barSize={50} />
                <Bar name="প্রতিদ্বন্দ্বী (ভোট)" dataKey="opponentVotes" fill="#9ca3af" radius={[4, 4, 0, 0]} barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ELECTION_DATA.map((data, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded border-l-4 border-primary-600">
                    <h4 className="font-bold text-lg mb-2">{data.year} নির্বাচন</h4>
                    <p className="text-sm text-gray-600">ফলাফল: <span className="font-semibold text-primary-700">{data.result}</span></p>
                    <p className="text-sm text-gray-600">মোট ভোটার: {data.totalVoters.toLocaleString('bn-BD')}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectionStats;