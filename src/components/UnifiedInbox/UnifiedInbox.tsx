import Image from "next/image";

const features = [
    "Multi-channel inbox",
    "Agent assignment",
    "Internal notes",
    "AI reply suggestions",
];

export default function UnifiedInbox() {
    return (
        <section className="bg-white px-[120px] max-[1400px]:px-10 max-[1000px]:px-[22px] max-[768px]:px-4 py-[60px] lg:py-[80px] w-full relative overflow-hidden" id="inbox">
            <div className="mx-auto flex flex-col xl:flex-row max-w-[1680px] items-center gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 w-full">

                {/* Left Column: Text & Features List */}
                <div className="w-full xl:flex-1 xl:max-w-[620px] text-center xl:text-left mx-auto xl:mx-0">
                    <span className="inline-flex h-[34px] items-center justify-center rounded-[28px] border border-[#0067FC]/30 px-4 text-[14px] font-semibold text-[#0067FC] bg-[#EFF6FF]">
                        Unified Shared Inbox
                    </span>

                    <h2 className="mt-[18px] text-[40px] max-[1000px]:text-[34px] max-[768px]:text-[28px] max-[550px]:text-[24px] font-extrabold leading-[1.1] tracking-[-0.6px] text-[#111827] xl:whitespace-nowrap">
                        Every Message. One Shared Inbox.
                    </h2>

                    <p className="mt-[18px] max-w-[570px] mx-auto xl:mx-0 text-[16px] max-[768px]:text-[14px] max-[550px]:text-[13px] leading-[28px] max-[768px]:leading-[24px] text-[#555555]">
                        See all your chats from WhatsApp, Instagram, Facebook, LinkedIn and more — in a single dashboard. No more switching between apps.
                    </p>

                    {/* Features Bullet List with tic-icon */}
                    <div className="mt-[18px] max-[768px]:mt-[14px] space-y-[18px] max-[768px]:space-y-[12px] flex flex-col items-start w-fit mx-auto xl:mx-0">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 max-[550px]:h-5 max-[550px]:w-5 shrink-0 items-center justify-center">
                                    <Image
                                        src="/tic-icon.png"
                                        alt="check icon"
                                        width={24}
                                        height={24}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-[16px] max-[768px]:text-[14px] max-[550px]:text-[13px] font-medium text-[#111827]">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column / Stacked Image for all screen sizes */}
                <div className="flex min-w-0 w-full items-center justify-center xl:justify-end xl:flex-1">
                    <Image
                        src="/unified-all.png"
                        alt="Unified Shared Inbox Dashboard"
                        width={786}
                        height={521}
                        className="w-full max-w-[600px] sm:max-w-[680px] lg:max-w-[750px] xl:max-w-[786px] h-auto object-contain mix-blend-multiply"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}