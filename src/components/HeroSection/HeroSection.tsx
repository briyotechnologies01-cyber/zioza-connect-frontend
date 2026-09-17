import Image from "next/image";

export default function HeroSection() {
    return (
        <main className="relative min-h-[580px] lg:min-h-[640px] overflow-hidden bg-[#F6FBFEA1] w-full" id="top">

            {/* Ellipse 1 — Background Gradient 1 */}
            <div
                className="pointer-events-none absolute z-0 opacity-[0.42]
                            left-[57%] top-[-15%] w-[60%] h-[115%]
                            max-[900px]:left-[10%] max-[900px]:w-[119.5%] max-[887px]:h-[40%] max-[900px]:top-[-5%]"
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
                            left-[48%] top-[35%] w-[32%] h-[42%]
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

            <div className="relative z-10 mx-auto max-w-[1680px] w-full grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,540px)_minmax(0,1fr)] 2xl:grid-cols-[minmax(0,620px)_minmax(0,1fr)] items-center gap-8 lg:gap-10 xl:gap-12 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[120px] pb-10 pt-[100px] lg:pt-[120px]">

                {/* Left: text content */}
                <div className="w-full max-w-[580px] 2xl:max-w-[684px] lg:text-left text-center mx-auto lg:mx-0">
                    <div className="mb-4 lg:mb-5 inline-flex items-center gap-3 rounded-[28px] border border-[#0067FC] bg-[#FEFFFF] px-3.5 py-1.5 h-[34px]">
                        <Image
                            src="/ai-icon.svg"
                            alt="AI-Powered Omnichannel Platform"
                            width={210}
                            height={12}
                            className="h-auto max-w-full"
                            priority
                        />
                    </div>

                    <h1 className="m-0 font-[800] text-[26px] sm:text-[32px] lg:text-[34px] xl:text-[40px] 2xl:text-[44px] leading-[1.12] tracking-[-0.8px] text-[#111827]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        <span className="block mb-1 sm:mb-1.5">One Platform.</span>
                        <span className="block mb-1 sm:mb-1.5">Every Conversation.</span>
                        <span
                            className="block bg-clip-text text-transparent"
                            style={{ backgroundImage: 'linear-gradient(to right, #0067FC, #8463F3)' }}
                        >
                            Smarter Customer Engagement.
                        </span>
                    </h1>

                    <p
                        className="my-4 lg:my-6 max-w-[560px] text-[14px] sm:text-[15px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] leading-relaxed tracking-[0px] text-[#555555] lg:mx-0 mx-auto"
                        style={{ fontFamily: 'Segoe UI, sans-serif', fontWeight: 400 }}
                    >
                        Manage all your messages, automate conversations, create engaging content, and turn customer interactions into lasting relationships — all in one place.
                    </p>

                    <div className="flex items-center gap-3 lg:gap-4 lg:justify-start justify-center max-[520px]:flex-col max-[520px]:items-stretch">
                        <a
                            className="inline-flex h-[46px] lg:h-[50px] xl:h-[56px] px-6 items-center justify-center gap-1.5 rounded-[38px] bg-[#0067FC] border border-[#0067FC] text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,103,252,0.25)] max-[520px]:w-full"
                            href="#get-started"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            <span>Get Started Free</span>
                            <Image src="/arrow-right.svg" alt="" width={18} height={18} aria-hidden="true" />
                        </a>

                        <a
                            className="inline-flex h-[46px] lg:h-[50px] xl:h-[56px] px-6 items-center justify-center gap-1.5 rounded-[38px] border border-[#0067FC] text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-[#0067FC] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,103,252,0.15)] max-[520px]:w-full"
                            href="#demo"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Book A Demo
                        </a>
                    </div>
                </div>

                {/* Right: unified inbox mockup */}
                <div className="flex min-w-0 items-center justify-center ml-0 lg:ml-6 xl:ml-12 2xl:ml-[120px] lg:justify-end mt-6 lg:mt-0 w-full">
                    <Image
                        src="/Hero/hero-bg-image.png"
                        alt="Zioza unified inbox dashboard"
                        className="relative z-10 h-auto w-full max-w-[620px] lg:max-w-[680px] xl:max-w-[762px] object-contain"
                        width={762}
                        height={624}
                        priority
                        sizes="(max-width: 1000px) 95vw, (max-width: 1400px) 50vw, 762px"
                    />
                </div>
            </div>
        </main>
    );
}