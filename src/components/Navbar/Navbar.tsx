import Image from "next/image";

interface NavItem {
    name: string;
    hasDropdown?: boolean;
}

const navigationItems: NavItem[] = [
    { name: "Features", hasDropdown: true },
    { name: "Integrations", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
];

export default function Navbar() {
    return (
        <header className="absolute inset-x-0 top-[10px] z-30 flex h-[56px] items-center justify-between px-[120px] max-[1400px]:px-10 max-[900px]:px-[22px] bg-transparent">
            {/* Logo */}
            <a className="inline-flex items-center shrink-0" href="#top" aria-label="Zioza home">
                <Image
                    src="/zioza-logo.png"
                    alt="Zioza"
                    width={153}
                    height={45}
                    className="h-auto w-[153px] max-[520px]:w-[110px]"
                    priority
                />
            </a>

            {/* Navigation Links (Frame 12 & Frame 7 in Figma) */}
            <nav className="hidden md:flex items-center justify-center gap-[6px] h-[44px]" aria-label="Primary navigation">
                {navigationItems.map((item) => (
                    <a
                        key={item.name}
                        className="group inline-flex items-center gap-[8px] px-[10px] py-[10px] h-[44px] text-[18px] font-semibold text-[#010101] leading-none transition hover:text-[#0067FC]"
                        href={`#${item.name.toLowerCase()}`}
                    >
                        <span>{item.name}</span>
                        {item.hasDropdown && (
                            <svg
                                className="w-[14px] h-[14px] shrink-0 stroke-[#010101] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:stroke-[#0067FC]"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Dropdown arrow"
                                role="img"
                            >
                                <path
                                    d="M3.5 5.25L7 8.75L10.5 5.25"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </a>
                ))}
            </nav>

            {/* Right Actions: Login & Get Started Free Button */}
            <div className="flex items-center gap-[24px] shrink-0 max-[900px]:gap-3">
                <a
                    className="whitespace-nowrap text-[18px] font-semibold text-[#010101] transition hover:text-[#0067FC] max-[900px]:hidden"
                    href="#login"
                >
                    Login
                </a>
                <a
                    className="inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[38px] bg-[#0067FC] px-[26px] text-[18px] font-semibold text-white transition hover:bg-[#0052cc] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,103,252,0.25)] max-[900px]:h-[44px] max-[900px]:px-4 max-[900px]:text-sm"
                    href="#get-started"
                >
                    <span>Get Started Free</span>
                    <Image src="/arrow-right.svg" alt="" width={18} height={18} aria-hidden="true" />
                </a>
            </div>
        </header>
    );
}