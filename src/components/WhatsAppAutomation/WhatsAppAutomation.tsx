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
        <section className="bg-[#EFFDF9] px-[120px] pt-[80px] max-[1400px]:px-10 max-[1200px]:pb-[70px] max-[1000px]:px-[22px] max-[768px]:px-4 max-[768px]:py-[50px]">
            <div className="mx-auto grid max-w-[1680px] grid-cols-[532px_minmax(0,1fr)] items-start gap-[210px] max-[1400px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] max-[1400px]:gap-[70px] max-[1200px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[1200px]:gap-[60px] max-[768px]:grid-cols-1 max-[768px]:gap-10">

                {/* Left Column: WhatsApp Chat Image */}
                <div className="flex items-start justify-center max-[768px]:mx-auto max-[768px]:w-full">
                    <Image
                        src="/whatsap-chat-app.png"
                        alt="WhatsApp appointment booking conversation"
                        width={532}
                        height={539}
                        className="h-auto w-full max-w-[532px] object-contain max-[1400px]:max-w-[420px] max-[1200px]:max-w-[400px] max-[768px]:max-w-[420px] max-[480px]:max-w-[360px]"
                    />
                </div>

                {/* Right Column: Content & Use Case Grid */}
                <div className="mt-[51px] min-w-0 max-w-[930px] max-[1400px]:pr-0 max-[1200px]:mt-0 max-[768px]:mx-auto max-[768px]:w-full max-[768px]:text-center">
                    <span className="inline-flex h-[34px] w-[140px] items-center justify-center rounded-[28px] border border-[#059669] p-2 text-[14px] font-semibold leading-4 text-[#059669] bg-[#EFFDF9]">
                        WhatsApp Flows
                    </span>
                    <h2 className="mt-[18px] max-w-[457px] text-[40px] font-extrabold leading-[50px] tracking-[-0.5px] text-[#111827] max-[1400px]:text-[28px] max-[1400px]:leading-[34px] max-[768px]:mx-auto max-[768px]:text-[28px] max-[768px]:leading-[1.08] max-[480px]:text-[26px]">
                        <span className="whitespace-nowrap max-[768px]:whitespace-normal">Automate Your Customer</span>
                        <br />
                        <span className="whitespace-nowrap max-[768px]:whitespace-normal">Journeys with WhatsApp</span>
                    </h2>
                    <p className="mt-[18px] max-w-[415px] text-[18px] leading-[26px] text-[#555555] max-[1400px]:text-[14px] max-[1400px]:leading-5 max-[768px]:mx-auto max-[480px]:text-[16px] max-[480px]:leading-6">
                        More than just chat — enable real business flows inside WhatsApp.
                    </p>

                    {/* 4-Column Feature Cards Grid */}
                    <div className="mt-[30px] grid grid-cols-[repeat(4,219px)] gap-[14px] max-[1400px]:grid-cols-4 max-[1400px]:gap-3 max-[1200px]:grid-cols-2 max-[768px]:text-left max-[480px]:grid-cols-1">
                        {useCases.map((useCase) => (
                            <div
                                key={useCase.label}
                                className="flex h-[126px] w-[219px] flex-col justify-between rounded-[12px] border border-[#F3F4F6] bg-white p-[14px] shadow-[0_6px_16px_rgba(17,24,39,0.05)] max-[1400px]:w-full max-[480px]:h-[116px]"
                            >
                                <div className={`flex h-[30px] w-[30px] items-center justify-center rounded-[50%] ${useCase.iconBg}`}>
                                    <Image
                                        src={useCase.icon}
                                        alt={useCase.label}
                                        width={100}
                                        height={100}
                                        className="h-[100px] w-[100px] object-contain max-[480px]:h-20 max-[480px]:w-20"
                                    />
                                </div>
                                <p className="text-[18px] font-bold leading-6 text-[#111827] max-[1400px]:text-[14px] max-[1400px]:leading-5 max-[480px]:text-[14px] max-[480px]:leading-5">
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