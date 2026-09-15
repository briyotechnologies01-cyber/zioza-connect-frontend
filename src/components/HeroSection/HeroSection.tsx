import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="relative min-h-[800px] overflow-hidden bg-[#F6FBFEA1] max-[900px]:min-h-0" id="top">

            {/* Ellipse 1 — Inline SVG with exact Figma Linear Gradient */}
            <div
                className="pointer-events-none absolute z-0 opacity-[0.42]
                            left-[58.5%] top-[-6%] w-[52.5%] h-[90%]
                            max-[900px]:left-[10%] max-[900px]:w-[110%] max-[887px]:h-[40%] max-[900px]:top-[-5%]"
            >
                <svg viewBox="0 0 1009 857" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <ellipse cx="504.5" cy="428.5" rx="504.5" ry="428.5" fill="url(#paint0_linear_ellipse1)" />
                    <defs>
                        <linearGradient id="paint0_linear_ellipse1" x1="0" y1="0" x2="1009" y2="857" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#CAE0FD" />
                            <stop offset="0.5" stopColor="#F1F2F8" />
                            <stop offset="1" stopColor="#DDDAFD" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Ellipse 2 — Inline SVG with exact Figma Linear Gradient */}
            <div
                className="pointer-events-none absolute z-0 opacity-[0.42]
                            left-[51%] top-[29%] w-[29%] h-[40%]
                            max-[900px]:left-[20%] max-[900px]:w-[60%] max-[900px]:h-[10%] max-[900px]:top-[35%]"
            >
                <svg viewBox="0 0 559 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <ellipse cx="279.5" cy="220" rx="279.5" ry="220" fill="url(#paint0_linear_ellipse2)" />
                    <defs>
                        <linearGradient id="paint0_linear_ellipse2" x1="0" y1="0" x2="559" y2="440" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#CAE0FD" />
                            <stop offset="0.5" stopColor="#DDDAFD" />

                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 grid min-h-[800px] grid-cols-[minmax(0,0.92fr)_minmax(500px,1.08fr)] items-center gap-[40px] px-[max(40px,6.25vw)] pb-[30px] pt-[20px] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:px-[22px] max-[900px]:pb-[42px] max-[900px]:pt-[120px]">

                {/* Left: text content */}
                <div className="max-w-[650px] max-[900px]:mx-auto max-[900px]:text-center">
                    <p className="mb-[22px] inline-flex rounded-[20px] border border-[#4b50ff] px-3.5 py-[7px] text-xs font-semibold text-[#4b50ff]">
                        AI-Powered Omnichannel Platform
                    </p>
                    <h1 className="m-0 text-[clamp(36px,2.7vw,52px)] font-bold leading-[1.08] tracking-[-1.7px] max-[520px]:text-[37px]">
                        One Platform.
                        <br />
                        Every Conversation.
                        <br />
                        <span className="bg-gradient-to-r from-[#4551ff] to-[#a348f5] bg-clip-text text-transparent">
                            Smarter Customer Engagement.
                        </span>
                    </h1>
                    <p className="mb-[30px] mt-[24px] max-w-[580px] text-base leading-[1.55] text-[#666b77] max-[900px]:mx-auto max-[520px]:text-sm">
                        Manage all your messages, automate conversations, create engaging content, and
                        turn customer interactions into lasting relationships - all in one place.
                    </p>
                    <div className="flex items-center gap-5 max-[900px]:justify-center max-[520px]:flex-col max-[520px]:items-stretch">
                        <a
                            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[28px] bg-[#0D67FC] px-[26px] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(75,80,255,0.2)] max-[520px]:w-full"
                            href="#get-started"
                        >
                            Get Started Free <Image src="/arrow-right.svg" alt="" width={16} height={16} aria-hidden="true" />
                        </a>

                        <a
                            className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[28px] border border-[#4b50ff] px-[26px] text-sm font-bold text-[#4b50ff] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(75,80,255,0.2)] max-[520px]:w-full"
                            href="#demo"
                        >
                            Book A Demo
                        </a>
                    </div>
                </div>

                {/* Right: unified inbox mockup */}
                <div className="flex min-w-0 items-center justify-end lg:translate-x-[20px] ml-[70px] max-[900px]:justify-center max-[900px]:translate-x-0 ">
                    <Image
                        src="/Hero/hero-bg-image.png"
                        alt="Zioza unified inbox dashboard"
                        className="relative z-10 h-auto w-[min(780px,100%)] max-w-full object-contain mt-[-55px] max-[900px]:mt-0"
                        width={742}
                        height={514}
                        priority
                        sizes="(max-width: 900px) 92vw, 55vw"
                    />
                </div>
            </div>
        </main>
    );
}