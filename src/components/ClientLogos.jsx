import './ClientLogos.css';

const clients = [
    { name: 'Sierra Leone Local Content Agency', initial: 'SLLCA' },
    { name: 'Kenema ICT and Management College', initial: 'KICTAM' },
    { name: 'City of Rest Rehabilitation', initial: 'COR' },
    { name: 'SkillConnect', initial: 'SC' },
    { name: 'Madina Youth Descendant Association', initial: 'MYDA' },
];

const ClientLogos = () => {
    const doubled = [...clients, ...clients];

    return (
        <section className="clients-section">
            <div className="clients-header">
                <p className="clients-label">Trusted by leading organizations</p>
            </div>
            <div className="clients-track-wrapper">
                <div className="clients-track">
                    {doubled.map((client, i) => (
                        <div className="client-logo" key={i}>
                            <div className="client-initial">{client.initial}</div>
                            <span className="client-name">{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
