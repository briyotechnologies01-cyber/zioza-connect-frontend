import Image from "next/image";

const navigationItems = ["Features", "Integrations", "Pricing", "Resources"];

export default function Navbar() {
    return (
        <header className="absolute inset-x-0 top-0 z-30 flex h-[92px] items-center justify-between px-[120px] max-[1200px]:px-10 max-[900px]:h-[56px] max-[900px]:px-[22px] bg-transparent">
            {/* Logo */}
            <a className="inline-flex items-center" href="#top" aria-label="Zioza home">
                <Image src="/zioza-logo.png" alt="Zioza" width={153} height={45} className="h-auto w-[153px] max-[520px]:w-[110px]" priority />
            </a>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-[42px]" aria-label="Primary navigation">
                {navigationItems.map((item) => (
                    <a className="inline-flex items-center whitespace-nowrap text-sm font-semibold text-[#1a1c23] transition hover:text-[#4b50ff]" href={`#${item.toLowerCase()}`} key={item}>
                        {item}
                        {(item === "Features" || item === "Resources") && (
                            <svg
                                className="ml-1.5 h-3 w-3 shrink-0 text-current"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Dropdown arrow"
                                role="img"
                            >
                                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </a>
                ))}
            </nav>

            {/* Right Actions: Login & CTA */}
            <div className="flex items-center gap-[24px] max-[900px]:gap-4">
                <a className="whitespace-nowrap text-sm font-semibold text-[#1a1c23] transition hover:text-[#4b50ff] max-[900px]:hidden" href="#login">
                    Login
                </a>
                <a
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-[28px] bg-[#0D67FC] px-[26px] text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(75,80,255,0.2)] max-[900px]:min-h-[38px] max-[900px]:px-4 max-[900px]:text-xs"
                    href="#get-started"
                >
                    Get Started Free
                    <Image src="/arrow-right.svg" alt="" width={16} height={16} aria-hidden="true" />
                </a>
            </div>
        </header>
    );
}