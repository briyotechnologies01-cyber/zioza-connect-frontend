import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="relative min-h-[746px] overflow-hidden bg-[#F6FBFEA1] max-[900px]:min-h-0" id="top">

            {/* Ellipse 1 — Background Gradient 1 */}
            <div
                className="pointer-events-none absolute z-0 opacity-[0.42]
                            left-[57%] top-[-5%] w-[55%] h-[95%]
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

            {/* Ellipse 2 — Background Gradient 2 */}
            <div
                className="pointer-events-none absolute z-0 opacity-[0.42]
                            left-[48%] top-[25%] w-[32%] h-[42%]
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

            <div className="relative z-10 grid min-h-[850px] grid-cols-[minmax(0,684px)_1fr] items-start gap-[40px] pt-[246px] px-[120px] max-[1400px]:px-10 max-[1000px]:min-h-0 max-[1000px]:grid-cols-1 max-[1000px]:px-[22px] max-[1000px]:pb-[42px] max-[1000px]:pt-[120px]">

                {/* Left: text content */}
                <div className="w-full max-w-[684px] max-[1000px]:mx-auto max-[1000px]:text-center">
                    <div className="mb-[22px] inline-flex items-center gap-[15px] rounded-[28px] border border-[#0067FC] bg-[#FEFFFF] p-[8px] h-[34px]">
                        <Image
                            src="/ai-icon.svg"
                            alt="AI-Powered Omnichannel Platform"
                            width={232}
                            height={12}
                            priority
                        />
                    </div>

                    <h1 className="m-0 font-[800] text-[42px] max-[1400px]:text-[38px] max-[1150px]:text-[32px] leading-[108%] tracking-[-1px] text-[#111827]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <span className="block mb-[6px]">One Platform.</span>
                        <span className="block mb-[6px]">Every Conversation.</span>
                        <span
                            className="block bg-clip-text text-transparent whitespace-nowrap max-[1000px]:whitespace-normal"
                            style={{ backgroundImage: 'linear-gradient(to right, #0067FC, #8463F3)' }}
                        >
                            Smarter Customer Engagement.
                        </span>
                    </h1>

                    <p
                        className="mb-[30px] mt-[20px] max-w-[650px] text-[18px] leading-[28px] tracking-[0px] text-[#555555] max-[1000px]:mx-auto max-[520px]:text-[15px]"
                        style={{ fontFamily: 'Segoe UI, sans-serif', fontWeight: 400 }}
                    >
                        Manage all your messages, automate conversations, create engaging content, and turn customer interactions into lasting relationships — all in one place.
                    </p>

                    <div className="flex items-center gap-[18px] max-[1000px]:justify-center max-[520px]:flex-col max-[520px]:items-stretch">
                        <a
                            className="inline-flex h-[56px] w-[225px] items-center justify-center gap-[4px] rounded-[38px] bg-[#0067FC] border border-[#0067FC] p-[10px] text-[18px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,103,252,0.25)] max-[520px]:w-full"
                            href="#get-started"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <span>Get Started Free</span>
                            <Image src="/arrow-right.svg" alt="" width={18} height={18} aria-hidden="true" />
                        </a>

                        <a
                            className="inline-flex h-[56px] w-[211px] items-center justify-center gap-[4px] rounded-[38px] border border-[#0067FC] p-[10px] text-[18px] font-semibold text-[#0067FC] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,103,252,0.15)] max-[520px]:w-full"
                            href="#demo"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Book A Demo
                        </a>
                    </div>
                </div>

                {/* Right: unified inbox mockup */}
                <div className="flex min-w-0 items-start justify-end max-[1000px]:justify-center max-[1000px]:mt-10">
                    <Image
                        src="/Hero/hero-bg-image.png"
                        alt="Zioza unified inbox dashboard"
                        className="relative z-10 h-auto w-[min(762px,100%)] max-w-full object-contain mt-[-150px]"
                        width={762}
                        height={624}
                        priority
                        sizes="(max-width: 1000px) 95vw, 55vw"
                    />
                </div>
            </div>
        </main>
    );
}