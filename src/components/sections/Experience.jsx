import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
    const experiences = [
        {
            company: "OpsCanvas",
            companyUrl: "https://www.linkedin.com/company/opscanvas/",
            title: "Software Engineering Co-op",
            dates: "Jul. 2025 - Dec. 2025",
            description: `At OpsCanvas, I led the expansion of our ZombieScan cloud monitoring platform into Azure, doubling the 
            company's addressable market. I wrote 3,000 lines of infrastructure-as-code using Bicep, extended our Go API to handle 
            Azure installations, and built new Dockerized report generators for Azure Container Jobs. I implemented cross-cloud 
            DataSync between Azure Blob storage and AWS S3, and E2E tested the full system across EKS, Azure, and Postgres.`
        },
        {
            company: "Pelagic AI",
            companyUrl: "https://www.linkedin.com/company/pelagicai/",
            title: "AI Software Engineering Intern",
            dates: "Jun. 2025 - Jul. 2025",
            description: `At Pelagic AI, I co-led development of a satellite airport simulator for a DOD contract. I managed the 
            project by scoping work and creating tickets, while also owning the entire agentic AI system. I built an 8-node cyclic 
            LangGraph architecture that assessed airport layouts, autonomously repositioned aircraft, and ran adversarial simulations. 
            The system could model any of 3,000+ real-world airports, each with up to 8,000+ nodes.`
        },
        {
            company: "OPEXUS",
            companyUrl: null,
            title: "Software Engineering Intern",
            dates: "Jun. 2024 - Sep. 2024",
            description: `At OPEXUS, I supported data migrations for their FOIA request management platform. When competing vendors 
            shut down, I wrote SQL scripts to transfer their client data and requests into our system, and used Windows VMs to 
            verify migrations against MSSQL Server. This was my first professional engineering experience.`
        },
    ];

    return (
        <section 
            id="experience" 
            className="py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> 
                        Experience
                    </h2>
                </RevealOnScroll>

                <div className="space-y-0">
                    {experiences.map((exp, index) => (
                        <RevealOnScroll key={index} delay={50 + index * 50}>
                            <div className={`py-6 ${index !== 0 ? 'border-t border-gray-800' : ''}`}>
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {exp.companyUrl ? (
                                        <a 
                                            href={exp.companyUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:text-purple-400 transition-colors"
                                        >
                                            {exp.company}
                                        </a>
                                    ) : (
                                        exp.company
                                    )}
                                </h3>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-sm text-purple-400">{exp.title}</span>
                                    <span className="text-sm text-gray-400">{exp.dates}</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

