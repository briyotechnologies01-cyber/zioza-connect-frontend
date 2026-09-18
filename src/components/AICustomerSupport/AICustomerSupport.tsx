import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-roboto",
});

const aiFeatures = [
    {
        title: "Contextual AI Replies",
        description: "Reads chat history & suggests perfect replies.",
    },
    {
        title: "Knowledge Base / Custom RAG",
        description: "Trained on your PDFs, policies, FAQs & website.",
    },
    {
        title: "AI Chatbot Builder",
        description: "Build automated flows for FAQs, products & more.",
    },
    {
        title: "AI Content & Design Assistant",
        description: "Generate captions, hashtags & basic graphics.",
    },
];

export default function AICustomerSupport() {
    return (
        <section
            className={`relative w-full overflow-hidden bg-white px-[120px] py-[80px] max-[1400px]:px-10 max-[1000px]:px-[22px] max-[768px]:px-4 max-[768px]:py-[52px] ${roboto.className}`}
            style={{
                background: "linear-gradient(90deg, #E8F1FC 0%, #D6E1F3 100%)",
                fontFamily: "var(--font-roboto), Roboto, sans-serif",
            }}
            id="ai-support"
        >
            {/* Inner Container: 1680px max-width, responsive gap from tight on laptops to 231px on 1920px screens */}
            <div className="mx-auto grid w-full max-w-[1680px] grid-cols-1 items-start gap-8 min-[900px]:grid-cols-2 lg:gap-10 xl:gap-12 min-[1800px]:h-[502px] min-[1800px]:gap-[231px]">

                {/* Left Column: AI Character Visual (Large & filling space on 900px-1600px screens) */}
                <div className="hidden w-full overflow-hidden min-[900px]:flex min-[1800px]:h-full">
                    <Image
                        src="/ai powerd.png"
                        alt="AI-Powered Customer Support Assistant"
                        width={758}
                        height={550}
                        className="h-auto w-full origin-bottom scale-[1.08] object-contain drop-shadow-md min-[1800px]:h-full"
                        priority
                    />
                </div>

                {/* Right Column: Consistent Left Alignment */}
                <div className="flex w-full flex-col items-start text-left">
                    {/* Badge: Frame 25 */}
                    <div className="w-[235px] max-[550px]:w-auto max-[550px]:px-4 h-[34px] rounded-[28px] border border-[#0067FC] px-[15px] py-[8px] bg-[#EFF6FF] flex items-center justify-center">
                        <span className="text-[14px] max-[550px]:text-[13px] font-semibold text-[#0067FC] leading-none whitespace-nowrap font-roboto">
                            AI-Powered Customer Support
                        </span>
                    </div>

                    {/* Section Heading */}
                    <h2 className="mt-[18px] max-[768px]:mt-3 w-full text-[38px] max-[1400px]:text-[34px] max-[1000px]:text-[30px] max-[768px]:text-[26px] max-[550px]:text-[22px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#111827] 2xl:whitespace-nowrap font-roboto text-left">
                        Let AI Understand. Assist. Respond.
                    </h2>

                    {/* Subtitle Description */}
                    <p className="mt-[18px] max-[768px]:mt-3 max-w-[620px] text-[18px] max-[1400px]:text-[16px] max-[768px]:text-[14px] max-[550px]:text-[13px] font-normal leading-[26px] max-[768px]:leading-[22px] text-[#555555] text-left">
                        From smart replies to custom AI chatbots, give your customers faster, more accurate, and personalized support.
                    </p>

                    {/* 2x2 Feature Cards Grid */}
                    <div className="mt-[18px] max-[768px]:mt-5 grid w-full max-w-[728px] grid-cols-1 gap-4 text-left min-[1150px]:grid-cols-2 min-[1800px]:gap-x-[28px] min-[1800px]:gap-y-[18px]">
                        {aiFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="group flex w-full min-h-[128px] max-[768px]:min-h-0 flex-col justify-center rounded-[8px] border border-[#2C58F4]/50 bg-[#FFFFFF] p-[20px] max-[1400px]:p-4 max-[550px]:p-3.5 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0067FC] hover:shadow-[0px_8px_24px_0px_rgba(44,88,244,0.12)] gap-[10px] max-[768px]:gap-1.5"
                            >
                                <h3 className="text-[20px] max-[1400px]:text-[18px] max-[768px]:text-[16px] max-[550px]:text-[15px] font-semibold text-[#000000] leading-snug tracking-[0px]">
                                    {feature.title}
                                </h3>
                                <p className="text-[18px] max-[1400px]:text-[15px] max-[768px]:text-[13px] max-[550px]:text-[12px] font-normal leading-[26px] max-[1400px]:leading-[22px] max-[768px]:leading-[18px] text-[#555555]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
