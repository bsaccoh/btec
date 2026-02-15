import React, { useState, useEffect } from 'react';
import { FaServer, FaDatabase, FaCogs, FaExchangeAlt, FaChartLine } from 'react-icons/fa';
import './SimplePipeline.css';

const SimplePipeline = () => {
  const [activeStage, setActiveStage] = useState(0);

  // Auto-cycle through stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { 
      title: 'Network Elements', 
      icon: <FaServer className="stage-svg" />, 
      color: '#4F46E5',
      items: ['RNC', 'MSC', 'GGSN', 'SGSN', 'MME', 'PGW', 'SGW']
    },
    { 
      title: 'Mediation', 
      icon: <FaExchangeAlt className="stage-svg" />, 
      color: '#10B981',
      items: ['TLV', 'ASN.1', 'XML', 'JSON', 'CSV']
    },
    { 
      title: 'Processing', 
      icon: <FaCogs className="stage-svg" />, 
      color: '#F59E0B',
      items: ['Validation', 'Enrichment', 'Normalization', 'Aggregation']
    },
    { 
      title: 'Storage', 
      icon: <FaDatabase className="stage-svg" />, 
      color: '#EC4899',
      items: ['Raw Data', 'Processed Data', 'Aggregated Data']
    },
    { 
      title: 'Analytics', 
      icon: <FaChartLine className="stage-svg" />, 
      color: '#3B82F6',
      items: ['Reports', 'Dashboards', 'Alerts', 'Fraud Detection']
    }
  ];

  // Group stages into rows for the layout
  const rows = [
    { stages: [stages[0]], className: 'first-row' },
    { stages: stages.slice(1, 4), className: 'middle-row' },
    { stages: [stages[4]], className: 'last-row' }
  ];

  return (
    <div className="simple-pipeline">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className={`pipeline-row ${row.className}`}>
          {row.stages.map((stage, stageIndex) => {
            const index = stages.findIndex(s => s.id === stage.id);
            return (
              <React.Fragment key={stage.id}>
                <div 
                  className={`stage ${activeStage === index ? 'active' : ''}`}
                  style={{
                    '--accent-color': stage.color,
                    '--accent-light': `${stage.color}33`
                  }}
                >
                  <div className="stage-icon">
                    {React.cloneElement(stage.icon, { className: 'stage-svg' })}
                  </div>
                  <h3 className="stage-title">{stage.title}</h3>
                  <div className="stage-items">
                    {stage.items.map((item, i) => (
                      <span key={i} className="stage-item">{item}</span>
                    ))}
                  </div>
                </div>
                {row.className === 'middle-row' && stageIndex < row.stages.length - 1 && (
                  <div className="connector">
                    <div 
                      className="connector-progress" 
                      style={{
                        width: activeStage > index ? '100%' : '0%'
                      }} 
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      ))}
      
      {/* Vertical connectors */}
      <div className="vertical-connectors">
        <div className="vertical-connector" style={{
          height: '40px',
          width: '2px',
          background: activeStage > 0 ? stages[0].color : 'rgba(255, 255, 255, 0.1)',
          margin: '0 auto',
          position: 'relative',
          transition: 'background 0.3s ease',
          opacity: activeStage > 0 ? 1 : 0.5
        }} />
        <div className="vertical-connector" style={{
          height: '40px',
          width: '2px',
          background: activeStage > 3 ? stages[4].color : 'rgba(255, 255, 255, 0.1)',
          margin: '0 auto',
          position: 'relative',
          transition: 'background 0.3s ease',
          opacity: activeStage > 3 ? 1 : 0.5
        }} />
      </div>
    </div>
  );
};

export default SimplePipeline;
