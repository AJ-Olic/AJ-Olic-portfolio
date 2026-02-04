import { RevealOnScroll } from "../components/RevealOnScroll";

const ContactPage = () => {
    return (
        <section className="py-20">
            <div className="max-w-3xl mx-auto px-4">
                <RevealOnScroll delay={0}>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#1a3a52] to-[#0d5a2d] bg-clip-text text-transparent">Contact</h2>
                </RevealOnScroll>

                <RevealOnScroll delay={50}>
                    <p className="text-[#1a3a52]/80 mb-8 leading-relaxed">
                        Feel free to reach out to me through any of the channels below. I'm always open to discussing opportunities, projects, or just having a conversation.
                    </p>
                </RevealOnScroll>

                <RevealOnScroll delay={100}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-[#1a3a52] min-w-20">Email:</span>
                            <a 
                                href="mailto:olic.a@northeastern.edu"
                                className="text-[#0d5a2d] hover:text-[#1a3a52] transition-colors underline"
                            >
                                olic.a@northeastern.edu
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-[#1a3a52] min-w-20">Phone:</span>
                            <a 
                                href="tel:+17033628956"
                                className="text-[#0d5a2d] hover:text-[#1a3a52] transition-colors underline"
                            >
                                (703) 362-8956
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-[#1a3a52] min-w-20">LinkedIn:</span>
                            <a 
                                href="https://www.linkedin.com/in/aleksandar-olic/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0d5a2d] hover:text-[#1a3a52] transition-colors underline"
                            >
                                Aleksandar Olic
                            </a>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default ContactPage;
