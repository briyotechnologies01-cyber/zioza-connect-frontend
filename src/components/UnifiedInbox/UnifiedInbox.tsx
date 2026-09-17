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
            <div className="mx-auto flex flex-col lg:flex-row max-w-[1680px] items-center gap-8 lg:gap-[30px] xl:gap-[60px] 2xl:gap-[323px] w-full">

                {/* Left Column: Text & Features List */}
                <div className="w-full lg:flex-1 lg:max-w-[620px] 2xl:w-[620px] 2xl:shrink-0 lg:text-left text-center mx-auto lg:mx-0">
                    <span className="inline-flex h-[34px] items-center justify-center rounded-[28px] border border-[#0067FC]/30 px-4 text-[14px] font-semibold text-[#0067FC] bg-[#EFF6FF]">
                        Unified Shared Inbox
                    </span>

                    <h2 className="mt-[18px] text-[26px] sm:text-[32px] lg:text-[36px] xl:text-[40px] font-extrabold leading-[1] tracking-[-0.6px] text-[#111827] xl:whitespace-nowrap">
                        Every Message. One Shared Inbox.
                    </h2>

                    <p className="mt-[18px] max-w-[460px] mx-auto lg:mx-0 text-[15px] sm:text-[16px] xl:text-[18px] leading-[28px] text-[#555555]">
                        See all your chats from WhatsApp, Instagram, Facebook, LinkedIn and more — in a single dashboard. No more switching between apps.
                    </p>

                    {/* Features Bullet List with tic-icon */}
                    <div className="mt-[18px] space-y-[14px] sm:space-y-[18px] flex flex-col items-start w-fit mx-auto lg:mx-0">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                                    <Image
                                        src="/tic-icon.png"
                                        alt="check icon"
                                        width={24}
                                        height={24}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-[15px] sm:text-[16px] font-medium text-[#111827]">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Full Unified Dashboard Graphic — Desktop only */}
                <div className="min-w-0 w-full hidden lg:flex items-center justify-end flex-1">
                    <Image
                        src="/unified-all.png"
                        alt="Unified Shared Inbox Dashboard"
                        width={786}
                        height={521}
                        className="w-full max-w-[786px] h-auto object-contain mix-blend-multiply"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}