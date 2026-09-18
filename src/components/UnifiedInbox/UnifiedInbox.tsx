import Image from "next/image";

const features = [
    "Multi-channel inbox",
    "Agent assignment",
    "Internal notes",
    "AI reply suggestions",
];

export default function UnifiedInbox() {
    return (
        <section className="bg-white px-[120px] max-[1400px]:px-10 max-[1000px]:px-[22px] max-[768px]:px-4 py-[60px] lg:py-[80px] max-[768px]:py-[40px] w-full relative overflow-hidden" id="inbox">
            <div className="mx-auto flex flex-col min-[900px]:flex-row max-w-[1680px] items-center justify-between gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 w-full">

                {/* Left Column: Consistent Left Alignment on all devices */}
                <div className="w-full min-[900px]:w-1/2 text-left mx-auto min-[900px]:mx-0 flex flex-col items-start">
                    <span className="inline-flex h-[34px] items-center justify-center rounded-[28px] border border-[#0067FC]/30 px-4 text-[14px] max-[550px]:text-[13px] font-semibold text-[#0067FC] bg-[#EFF6FF]">
                        Unified Shared Inbox
                    </span>

                    <h2 className="mt-[18px] max-[768px]:mt-3 text-[40px] max-[1400px]:text-[34px] max-[1150px]:text-[28px] max-[768px]:text-[24px] max-[550px]:text-[22px] font-extrabold leading-[1.15] tracking-[-0.6px] text-[#111827] 2xl:whitespace-nowrap font-roboto text-left">
                        Every Message. One Shared Inbox.
                    </h2>

                    <p className="mt-[18px] max-[768px]:mt-3 max-w-[570px] text-[16px] max-[768px]:text-[14px] max-[550px]:text-[13px] leading-[28px] max-[768px]:leading-[22px] text-[#555555]">
                        See all your chats from WhatsApp, Instagram, Facebook, LinkedIn and more — in a single dashboard. No more switching between apps.
                    </p>

                    {/* Features Bullet List with tic-icon */}
                    <div className="mt-[18px] max-[768px]:mt-4 space-y-[18px] max-[768px]:space-y-[12px] flex flex-col items-start w-fit">
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

                {/* Right Column / Dashboard Image: Adaptive per screen size, hidden on mobile < 900px */}
                <div className="hidden min-[900px]:flex min-w-0 w-full min-[900px]:w-1/2 items-center justify-center min-[900px]:justify-end mt-6 min-[900px]:mt-0">
                    {/* Large Desktop (1400px+): Full Figma composite image */}
                    <div className="hidden min-[1400px]:block w-full max-w-[786px]">
                        <Image
                            src="/unified-all.png"
                            alt="Unified Shared Inbox Dashboard"
                            width={786}
                            height={521}
                            className="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                            priority
                        />
                    </div>

                    {/* Medium/Laptop Screens (900px - 1400px): Clean standalone messaging card */}
                    <div className="block min-[1400px]:hidden w-full max-w-[560px]">
                        <Image
                            src="/unified inbox.png"
                            alt="Unified Shared Inbox Messaging"
                            width={602}
                            height={457}
                            className="w-full h-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-[1.02]"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}