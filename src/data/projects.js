export const projects = [
    {
        id: "supersonic-rivet-deformation",
        name: "Supersonic Rivet Deformation",
        description: `In my Aeronautical Propulsion class over the summer in Seattle, we were tasked with making a project of our choice that involved using ANSYS. The goal was to explore how rivet protrusions impact the aerodynamics and fuel efficiency for supersonic commercial travel. Additionally, we wanted to exemplify how smooth surfaces are imperative to efficient designs for the new era of commercial jets. This was done at a chord of 1 m near the wingtip of the Concorde.`,
        tech: ["ANSYS Fluent", "AutoCAD", "SolidWorks", "CFD"],
        links: [],
        hasDemo: false,
        image: "/projects-images/ppt-image12.png",
        slides: [
            {
                title: "Background & Objective",
                content: [
                    {
                        text: "In my Aeronautical Propulsion class over the summer in Seattle, we were tasked with making a project our choice that involved using ANSYS.",
                        image: "/projects-images/ppt-image7.png",
                        label: "Concorde design with chord highlighted"
                    },
                    {
                        text: "The goal was to explore how rivet protrusions impact the aerodynamics and fuel efficiency for supersonic commercial travel. Additionally, we wanted to exemplify how smooth surfaces are imperative to efficient designs for the new era of commercial jets. This was done at a chord of 1 m near the wingtip of the Concorde.",
                        image: "/projects-images/ppt-image6.png",
                        label: "Velocity vectors along airfoil"
                    }
                ]
            },
            {
                title: "My Contribution",
                content: [
                    {
                        text: "I was responsible for conducting prior research and modelling the airfoil with rivet protrusions. Historical studies were used to influence our predictions, and they yielded input into how different sized rivets would impact the pressure, drag, and lift coefficients at subsonic speed.",
                        image: "/projects-images/ppt-image9.png",
                        label: "Mesh generated for airfoil with rivets"
                    },
                    {
                        text: "To simulate rivet deformation, I created an array of arcs along the Concorde airfoil in AutoCAD, ensuring it was all one polyline. I then imported the .dwg file into SolidWorks to create a part in order to define geometry. I then uploaded the 3D part into ANSYS and used the face to define a 2D boundary box around the airfoil.",
                        image: "/projects-images/ppt-image8.png",
                        label: "AutoCAD model of airfoil with rivets"
                    }
                ]
            },
            {
                title: "Results",
                content: [
                    {
                        text: "The most substantial results were modelling clean airfoil at supersonic conditions. Initially, the upper and lower surfaces were mistakenly kept as 'walls.' This was not the initial goal, but it validated prior knowledge regarding stagnation point predictions, oblique shockwave behavior, and inlet shockwave reflections.",
                        image: "/projects-images/ppt-image11.png",
                        label: "Static temperature contour with proper boundary conditions"
                    },
                    {
                        text: "Correct boundary conditions yielded the expected stagnation point and shockwaves, mimicking known wave patterns.",
                        image: "/projects-images/ppt-image10.png",
                        label: "Mach number contour with improper boundary conditions"
                    },
                    {
                        text: "",
                        image: "/projects-images/ppt-image12.png",
                        label: "Velocity magnitude contour"
                    }
                ]
            }
        ]
    },
    {
        id: "lasercut-challenger",
        name: "Lasercut Challenger Model",
        description: `For my freshman engineering capstone 1 class, we were tasked with designing a visual and interactive project to teach an engineering tragedy using AutoCAD, C++, and an Arduino. My group decided on the Challenger crash, where the user would go through a series of activities to learn about what caused this disaster.`,
        tech: ["AutoCAD", "Arduino", "C++", "Laser Cutting"],
        links: [],
        hasDemo: false,
        image: "/projects-images/ppt-image15.png",
        slides: [
            {
                title: "Background & Goal",
                content: [
                    {
                        text: "For my freshman engineering capstone 1 class, we were tasked with designing a visual and interactive project to teach an engineering tragedy using AutoCAD, C++, and an Arduino.",
                        image: "/projects-images/ppt-image13.jpeg",
                        label: "Completed Challenger game"
                    },
                    {
                        text: "My group decided on the Challenger crash, where the user would go through a series of activities to learn about what caused this disaster.",
                        image: null,
                        label: null
                    }
                ]
            },
            {
                title: "My Contribution",
                content: [
                    {
                        text: "To design the model, I first defined the key components that would be imperative to capture the essence of the space shuttle. These included the delta wings, the fuselage, the vertical tail, the engines, and the nose.",
                        image: "/projects-images/ppt-image14.png",
                        label: "All components for laser cutting, shown in AutoCAD"
                    },
                    {
                        text: "When iterating designs, I found that having one base component for all other pieces to connect to worked the best, so I moved forward with this using mortise and tenon joints. The margin of error for the laser cutter was inconsistent between uses, which forced me to create a sizing template to ensure the joints would properly connect.",
                        image: "/projects-images/Screenshot 2026-02-02 121310.png",
                        label: "Shrunken model for testing"
                    },
                    {
                        text: "To ensure the model would work as intended, I modelled a shrunken version that included all key components, confirming each portion worked as intended.",
                        image: null,
                        label: null
                    }
                ]
            },
            {
                title: "Results",
                content: [
                    {
                        text: "The resulting model accurately depicted the Challenger space shuttle. This successfully intertwined with the rest of the project, where the model was a tool for users to complete a system check of the shuttle.",
                        image: "/projects-images/ppt-image15.png",
                        label: "Completed Challenger model"
                    },
                    {
                        text: "This project furthered my skills in 2D design, and I gained hands-on experience with laser cutting.",
                        image: null,
                        label: null
                    }
                ]
            }
        ]
    },
    {
        id: "autonomous-temperature-sensor",
        name: "Autonomous Temperature Sensor",
        description: `During my semester in London, we were tasked with designing a robot to improve our lives. Given the lack of centralized heating and AC, we wanted to create a solution to this problem. The goal was to design a robot that could automatically adjust the radiator nozzle based on a preset temperature using a temperature sensor and Arduino control.`,
        tech: ["Arduino", "C++", "3D Printing", "AutoCAD"],
        links: [],
        hasDemo: false,
        image: "/projects-images/ppt-image16.png",
        slides: [
            {
                title: "Background & Goal",
                content: [
                    {
                        text: "During my semester in London, we were tasked with designing a robot to improve our lives. Given the lack of centralized heating and AC, we wanted to create a solution to solve this problem.",
                        image: "/projects-images/ppt-image16.png",
                        label: "Temperature sensor demonstration"
                    },
                    {
                        text: "The goal of this project was to design a robot that could automatically adjust the radiator nozzle based on a preset temperature. This was done by building a robot that would sit on top of the nozzle and use a temperature sensor to track the deviation from the current temperature to the ideal temperature.",
                        image: null,
                        label: null
                    }
                ]
            },
            {
                title: "My Contribution",
                content: [
                    {
                        text: "I served as project leader and spearheaded the design process. I designed a 3D-printed enclosure to house the electronic components (temperature sensor, LCD, DC motor, motor driver, battery pack). Selected a DC motor over a servo for significantly higher torque required to turn radiator valves.",
                        image: "/projects-images/ppt-image17.png",
                        label: "Arduino wiring and electronics"
                    },
                    {
                        text: "Developed a proportional control algorithm where larger temperature deviations trigger larger valve adjustments, allowing the system to gradually converge on the target temperature. Integrated a portable charger for outlet-independent operation with easy recharging access.",
                        image: null,
                        label: null
                    },
                    {
                        text: "Resolved challenges including unidirectional motor movement (incomplete power connections) and conducted tests by clamping the valve and ensuring proper height alignment for optimal performance.",
                        image: null,
                        label: null
                    }
                ]
            },
            {
                title: "Results",
                content: [
                    {
                        text: "We successfully developed a working prototype that could autonomously adjust the radiator temperature. This demonstrated an improved ease of use compared to manual adjustments, benefiting individuals with mobility limitations.",
                        image: "/projects-images/ppt-image18.png",
                        label: "Completed temperature sensor (open box)"
                    },
                    {
                        text: "We also identified areas for future improvement, including better wire management, component integration, and a universal attachment for compatibility with various radiator types.",
                        image: null,
                        label: null
                    }
                ]
            }
        ]
    },
    {
        id: "south-end-investigation",
        name: "South End Investigation",
        description: `Led a comprehensive urban sociology research project investigating gentrification, homelessness, and housing policy in Boston's South End neighborhood. Conducted extensive interviews with residents and stakeholders to understand the complexities of the "Methadone Mile" crisis. Synthesized academic research with field interviews and spatial analysis to propose evidence-based policy solutions for affordable housing and community development.`,
        tech: ["ArcGIS", "Photography", "Interviewing", "Qualitative Research", "Urban Analysis", "Data Visualization"],
        links: [],
        hasDemo: false,
        image: "/projects-images/south-end-map-main.jpg",
        slides: [
            {
                title: "Background & Research Context",
                content: [
                    {
                        text: "The South End's homelessness crisis centers on Massachusetts Avenue and Melnea Cass Boulevard, known as the 'Methadone Mile.' This area became a focal point of urban struggle following the 2014 closure of Long Island, which displaced 500+ people seeking homeless services. By 2021, Boston's leadership issued executive orders to clear the encampments, but without rehabilitation support, merely displacing residents already struggling from prior displacement.",
                        image: "/projects-images/south-end-map-main.jpg",
                        label: "Interactive map of South End investigation sites"
                    },
                    {
                        text: "Historical redlining patterns directly contributed to current inequalities. Maps showing Boston's redlined districts reveal that areas marked in red and yellow—denoting discriminatory lending practices—correspond exactly with neighborhoods experiencing homelessness, poverty, and racial disparities today. Understanding this spatial history is essential for any genuine policy intervention.",
                        mapKey: true,
                        label: "Map key showing investigation sites and categories"
                    }
                ]
            },
            {
                title: "Project Leadership & Methodology",
                content: [
                    {
                        text: "As project leader, I directed the research design and coordinated the interview process with residents, homeless individuals, and local leaders. I conducted critical interviews including one with Carrie, a resident living in affordable housing units, whose experiences illuminated the real impact of housing policy on individual lives. These interviews formed the qualitative backbone of our analysis.",
                        image: null,
                        label: null
                    },
                    {
                        text: "I utilized ArcGIS to map demographic data including poverty rates, racial composition, educational attainment, and housing vacancy across the South End. These spatial visualizations revealed stark inequalities and directly guided our policy recommendations. Photography documented the physical conditions of the neighborhood and encampment areas, providing visual evidence for our written analysis.",
                        image: null,
                        label: null
                    },
                    {
                        text: "The research synthesized academic frameworks—including Defilippis' 'Place Matters,' Broken Windows Theory, and housing mobility research—with on-the-ground interviews to build a multidimensional understanding of gentrification and displacement.",
                        image: null,
                        label: null
                    }
                ]
            },
            {
                title: "Key Findings & Solutions",
                content: [
                    {
                        text: "Our analysis identified that gentrification, urban renewal, and persistent private-sector investment are displacing low-income residents and eroding the community's cultural identity. We proposed three evidence-based policy solutions: (1) requiring affordable housing percentages in all new developments, (2) mandating that new investments allocate budgets to combat the housing crisis through rehabilitation and mental health programs, and (3) implementing rent-to-own units to enable wealth building for formerly homeless individuals.",
                        image: null,
                        label: null
                    },
                    {
                        text: "Through interviews and data analysis, we demonstrated that successful affordable housing programs—like the units where Carrie lives—have transformative impact. A single affordable unit prevented her displacement and maintained her community ties. Scaling such programs is feasible and necessary.",
                        image: null,
                        label: null
                    }
                ]
            },
            {
                title: "Impact & Recommendations",
                content: [
                    {
                        text: "This project contributed to local policy conversations in Boston. City Council President Ed Flynn's proposed 'decentralization' of services aligns with our multidimensional approach recommendation. The paper documents the failure of enforcement-only strategies (arrests, tent removal) without housing and rehabilitation, providing evidence for more humane alternatives.",
                        image: null,
                        label: null
                    },
                    {
                        text: "The research highlights the essential role of community input in urban policy. Our interviews revealed that residents and homeless individuals themselves understand their needs better than distant policymakers. Future work should expand interview scope and include resident co-design of solutions.",
                        image: null,
                        label: null
                    }
                ]
            }
        ]
    },
];
