import Image from "next/image";

const useCases = [
    {
        icon: "/w-automation-1.png",
        label: "Book Appointments & Reservations",
        iconBg: "bg-[#E0F2FE]", // Soft blue
    },
    {
        icon: "/w-automation-2.png",
        label: "Choose Products & Services",
        iconBg: "bg-[#EDE9FE]", // Soft purple
    },
    {
        icon: "/w-automation-3.png",
        label: "Sign up for Events & Promos",
        iconBg: "bg-[#FCE7F3]", // Soft pink
    },
    {
        icon: "/w-automation-4.png",
        label: "Give Feedback & Surveys",
        iconBg: "bg-[#FEF3C7]", // Soft yellow
    },
];

export default function WhatsAppAutomation() {
    return (
        <section className="bg-[#EFFDF9] px-4 sm:px-8 md:px-10 lg:px-16 xl:px-[120px] pt-[60px] lg:pt-[80px] w-full">
            <div className="mx-auto grid max-w-[1680px] grid-cols-1 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,532px)_minmax(0,1fr)] items-center gap-8 lg:gap-12 xl:gap-20 2xl:gap-[160px] w-full">

                {/* Left Column: WhatsApp Chat Image */}
                <div className="flex items-center justify-center w-full">
                    <Image
                        src="/whatsap-chat-app.png"
                        alt="WhatsApp appointment booking conversation"
                        width={532}
                        height={539}
                        className="h-auto w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[532px] object-contain"
                    />
                </div>

                {/* Right Column: Content & Use Case Grid */}
                <div className="min-w-0 w-full max-w-[930px] lg:text-left text-center mx-auto">
                    <span className="inline-flex h-[34px] items-center justify-center rounded-[28px] border border-[#059669] px-4 text-[14px] font-semibold text-[#059669] bg-[#EFFDF9]">
                        WhatsApp Flows
                    </span>
                    <h2 className="mt-4 text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[40px] font-extrabold leading-[1.15] tracking-[-0.5px] text-[#111827]">
                        Automate Your Customer<br className="hidden sm:inline" /> Journeys with WhatsApp
                    </h2>
                    <p className="mt-3 max-w-[500px] text-[15px] sm:text-[16px] xl:text-[18px] leading-relaxed text-[#555555] lg:mx-0 mx-auto">
                        More than just chat — enable real business flows inside WhatsApp.
                    </p>

                    {/* Feature Cards Grid */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3.5 sm:gap-4 w-full">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.label}
                                className="flex min-h-[120px] flex-col justify-between rounded-[12px] border border-[#F3F4F6] bg-white p-4 shadow-[0_6px_16px_rgba(17,24,39,0.05)] transition-shadow hover:shadow-md"
                            >
                                <div className={`flex h-[34px] w-[34px] items-center justify-center rounded-full ${useCase.iconBg} mb-2 shrink-0`}>
                                    <Image
                                        src={useCase.icon}
                                        alt={useCase.label}
                                        width={24}
                                        height={24}
                                        className="h-5 w-5 object-contain"
                                    />
                                </div>
                                <p className="text-[14px] sm:text-[15px] xl:text-[16px] font-bold leading-snug text-[#111827] text-left">
                                    {useCase.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}