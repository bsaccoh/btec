import React, { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import ServiceModal from './ServiceModal'
import './Services.css'

const servicesData = [
    {
        title: "Software Development",
        icon: "💻",
        desc: "Custom software solutions tailored to your unique business requirements.",
        detailedDesc: "Our software development services deliver cutting-edge, scalable applications designed to solve your specific business challenges. We follow industry best practices and agile methodologies to ensure timely delivery and exceptional quality.",
        features: [
            "Custom web and desktop application development",
            "API design and integration services",
            "Legacy system modernization and migration",
            "Microservices architecture implementation",
            "DevOps and CI/CD pipeline setup"
        ],
        benefits: [
            "Increased operational efficiency and productivity",
            "Reduced manual processes through automation",
            "Scalable solutions that grow with your business",
            "Improved user experience and customer satisfaction"
        ],
        technologies: ["React", "Node.js", "Python", "Java", ".NET", "Docker", "Kubernetes"]
    },
    {
        title: "Mobile Development",
        icon: "📱",
        desc: "Native and cross-platform mobile apps for iOS and Android devices.",
        detailedDesc: "Transform your business with powerful mobile applications that engage users and drive results. Our expert team creates intuitive, high-performance mobile apps using the latest technologies and design principles.",
        features: [
            "Native iOS and Android app development",
            "Cross-platform development with React Native and Flutter",
            "Progressive Web Apps (PWA)",
            "Mobile app UI/UX design",
            "App Store and Play Store deployment support"
        ],
        benefits: [
            "Reach customers on their preferred devices",
            "Enhanced brand visibility and engagement",
            "Offline functionality for uninterrupted service",
            "Push notifications for direct user communication"
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"]
    },
    {
        title: "Enterprise Applications",
        icon: "🏢",
        desc: "Scalable enterprise-grade applications to streamline your operations.",
        detailedDesc: "Build robust enterprise solutions that integrate seamlessly with your existing systems. We specialize in creating comprehensive platforms that manage complex business processes, from ERP, Accounting, HR and to CRM systems.",
        features: [
            "Enterprise Resource Planning (ERP) systems",
            "Customer Relationship Management (CRM) solutions",
            "Business Process Management (BPM) tools",
            "Document management systems",
            "Workflow automation platforms"
        ],
        benefits: [
            "Centralized data management and accessibility",
            "Improved collaboration across departments",
            "Real-time reporting and analytics",
            "Enhanced security and compliance"
        ],
        technologies: ["SAP", "Salesforce", "Oracle", "Microsoft Dynamics", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Networking",
        icon: "🔗",
        desc: "Robust networking infrastructure and secure connectivity solutions.",
        detailedDesc: "Design, implement, and maintain secure, high-performance network infrastructure. Our networking experts ensure your organization stays connected with reliable, scalable solutions.",
        features: [
            "Network design and architecture",
            "LAN/WAN setup and configuration",
            "VPN and secure remote access",
            "Network monitoring and maintenance",
            "Firewall and security implementation"
        ],
        benefits: [
            "Improved network performance and reliability",
            "Enhanced security against cyber threats",
            "Reduced downtime and faster issue resolution",
            "Scalable infrastructure for business growth"
        ],
        technologies: ["Cisco", "Juniper", "Fortinet", "pfSense", "VMware NSX", "SD-WAN"]
    },
    {
        title: "Database Management",
        icon: "🗄️",
        desc: "Secure and efficient database design, implementation, and optimization.",
        detailedDesc: "Optimize your data infrastructure with expert database management services. We ensure your data is secure, accessible, and performing at peak efficiency.",
        features: [
            "Database design and architecture",
            "Performance tuning and optimization",
            "Data migration and integration",
            "Backup and disaster recovery planning",
            "Database security and compliance"
        ],
        benefits: [
            "Faster query performance and response times",
            "Improved data integrity and reliability",
            "Reduced storage costs through optimization",
            "Enhanced data security and compliance"
        ],
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Redis", "Cassandra"]
    },
    {
        title: "Cloud Solutions",
        icon: "☁️",
        desc: "Cloud migration, hosting, and architecture design (AWS, Azure, GCP).",
        detailedDesc: "Leverage the power of cloud computing to scale your business. Our cloud experts help you migrate, deploy, and optimize applications across leading cloud platforms.",
        features: [
            "Cloud migration strategy and execution",
            "Multi-cloud and hybrid cloud solutions",
            "Cloud infrastructure setup and management",
            "Serverless architecture implementation",
            "Cloud cost optimization"
        ],
        benefits: [
            "Reduced IT infrastructure costs",
            "Improved scalability and flexibility",
            "Enhanced disaster recovery capabilities",
            "Access to latest cloud technologies"
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Lambda", "CloudFormation"]
    },
    {
        title: "Big Data & Analytics",
        icon: "📊",
        desc: "End-to-end big data services from data ingestion, processing, and transformation for revenue analysis and actionable insights.",
        detailedDesc: "Transform raw data into valuable business insights. Our big data solutions help you collect, process, and analyze massive datasets to make data-driven decisions.",
        features: [
            "Big data architecture and pipeline design",
            "Data lake and data warehouse implementation",
            "Real-time data processing and streaming",
            "Machine learning model development",
            "Predictive analytics and forecasting"
        ],
        benefits: [
            "Better business decisions through data insights",
            "Identify trends and patterns in customer behavior",
            "Optimize operations and reduce costs",
            "Competitive advantage through predictive analytics"
        ],
        technologies: ["Hadoop", "Spark", "Kafka", "Elasticsearch", "Python", "R", "TensorFlow"]
    },
    {
        title: "Mediation Services",
        icon: "🔄",
        desc: "Telecom mediation services including data ingestion, binary decoding, transformation, and integration into billing, big data, revenue, and fraud systems.",
        detailedDesc: "Specialized telecom mediation solutions that bridge the gap between network elements and business systems. We provide comprehensive data transformation and integration services for telecom operators.",
        features: [
            "CDR/EDR collection and processing",
            "Binary file decoding and parsing",
            "Data enrichment and validation",
            "Rating and charging integration",
            "Fraud detection and revenue assurance"
        ],
        benefits: [
            "Accurate billing and revenue tracking",
            "Reduced revenue leakage",
            "Improved fraud detection capabilities",
            "Seamless integration with existing systems"
        ],
        technologies: ["ASN.1", "TAP", "NRTRDE", "Oracle", "Kafka", "Custom ETL Tools"]
    },
    {
        title: "Power BI",
        icon: "📈",
        desc: "Interactive data visualization and business intelligence reporting.",
        detailedDesc: "Turn your data into compelling visual stories with Power BI. Create interactive dashboards and reports that empower your team to make informed decisions quickly.",
        features: [
            "Custom dashboard and report development",
            "Data modeling and transformation",
            "Real-time data visualization",
            "Power BI embedded solutions",
            "Training and support"
        ],
        benefits: [
            "Quick access to key business metrics",
            "Interactive and user-friendly visualizations",
            "Improved decision-making speed",
            "Self-service analytics capabilities"
        ],
        technologies: ["Power BI", "DAX", "Power Query", "Azure", "SQL Server", "Excel"]
    },
]

const Services = () => {
    const [selectedService, setSelectedService] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useScrollReveal();

    const handleServiceClick = (service) => {
        console.log('Clicked service:', service.title)
        setSelectedService(service)
        setIsModalOpen(true)
        console.log('Modal should open now')
    }

    const handleCloseModal = () => {
        console.log('Closing modal')
        setIsModalOpen(false)
    }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our <span className="text-gradient">Services</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card reveal" key={index} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <button
                                className="learn-more-btn"
                                onClick={() => handleServiceClick(service)}
                            >
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <ServiceModal
                service={selectedService}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}

export default Services
