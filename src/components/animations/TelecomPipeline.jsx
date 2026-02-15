import React, { useState, useEffect } from 'react';
import './TelecomPipeline.css';

const TelecomPipeline = () => {
  const [activeStage, setActiveStage] = useState(0);

  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { title: 'INGEST', icon: '📥', color: '#3B82F6' },
    { title: 'DECODE', icon: '🔓', color: '#8B5CF6' },
    { title: 'PROCESS', icon: '⚙️', color: '#EC4899' },
    { title: 'STORE', icon: '💾', color: '#F59E0B' },
    { title: 'INTEGRATE', icon: '🔗', color: '#10B981' }
  ];

  return (
    <div className="pipeline-container">
      <div className="pipeline">
        {stages.map((stage, index) => (
          <div 
            key={stage.title} 
            className={`stage ${activeStage === index ? 'active' : ''}`}
            style={{ '--accent-color': stage.color }}
          >
            <div className="stage-header">
              <span className="stage-icon">{stage.icon}</span>
              <h3 className="stage-title">{stage.title}</h3>
            </div>
            {index < stages.length - 1 && (
              <div className="connector">
                <div 
                  className="connector-line"
                  style={{
                    width: activeStage > index ? '100%' : '0%',
                    backgroundColor: stage.color
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelecomPipeline;
                  {activeStage > index && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Stage Description */}
        <div className="mt-12 text-center">
          <div
            className="inline-block px-6 py-3 rounded-full text-white font-medium transition-all duration-500"
            style={{ backgroundColor: stages[activeStage].color }}
          >
            {stages[activeStage].description}
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
              <h4 className="text-white font-semibold">Cost Reduction</h4>
            </div>
            <p className="text-slate-400 text-sm">Eliminate expensive mediation platform licenses</p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span className="text-xl">🔓</span>
              </div>
              <h4 className="text-white font-semibold">No Vendor Lock-in</h4>
            </div>
            <p className="text-slate-400 text-sm">Configurable schemas for any format or vendor</p>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <h4 className="text-white font-semibold">Full Control</h4>
            </div>
            <p className="text-slate-400 text-sm">Own your data pipeline end-to-end</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-slate-500 text-sm">
          Binary Data → Decoded → Transformed → Processed → Integrated
        </div>
      </div>
    </div>
  );
};

export default TelecomPipelineDiagram;
