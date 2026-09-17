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
        <header className="absolute inset-x-0 top-[10px] z-30 flex min-h-[56px] items-center justify-between gap-6 bg-transparent px-[120px] max-[1400px]:px-10 max-[1000px]:px-[22px] max-[520px]:px-4">
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
            <nav className="hidden h-[44px] items-center justify-center gap-[6px] min-[1001px]:flex max-[1200px]:gap-1" aria-label="Primary navigation">
                {navigationItems.map((item) => (
                    <a
                        key={item.name}
                        className="group inline-flex h-[44px] items-center gap-[8px] px-[10px] py-[10px] text-[18px] font-semibold leading-none text-[#010101] transition hover:text-[#0067FC] max-[1200px]:px-2 max-[1200px]:text-[16px]"
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
            <div className="flex shrink-0 items-center gap-[24px] max-[1000px]:gap-3">
                <a
                    className="whitespace-nowrap text-[18px] font-semibold text-[#010101] transition hover:text-[#0067FC] max-[1200px]:text-[16px] max-[1000px]:hidden"
                    href="#login"
                >
                    Login
                </a>
                <a
                    className="inline-flex h-[56px] items-center justify-center gap-[8px] rounded-[38px] bg-[#0067FC] px-[26px] text-[18px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0052cc] hover:shadow-[0_10px_24px_rgba(0,103,252,0.25)] max-[1000px]:h-[44px] max-[1000px]:px-4 max-[1000px]:text-sm max-[520px]:h-10 max-[520px]:w-10 max-[520px]:px-0"
                    href="#get-started"
                >
                    <span className="max-[520px]:sr-only">Get Started Free</span>
                    <Image src="/arrow-right.svg" alt="" width={18} height={18} aria-hidden="true" />
                </a>
            </div>

            <details className="relative hidden max-[1000px]:block">
                <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#D7E4F5] bg-white text-[#010101] shadow-sm [&::-webkit-details-marker]:hidden">
                    <span className="sr-only">Open navigation menu</span>
                    <span className="flex flex-col gap-1.5" aria-hidden="true">
                        <span className="h-0.5 w-5 bg-current" />
                        <span className="h-0.5 w-5 bg-current" />
                        <span className="h-0.5 w-5 bg-current" />
                    </span>
                </summary>
                <nav className="absolute right-0 top-14 w-56 rounded-2xl border border-[#E5EDF7] bg-white p-3 shadow-[0_12px_30px_rgba(17,24,39,0.12)]" aria-label="Mobile navigation">
                    {navigationItems.map((item) => (
                        <a
                            key={item.name}
                            className="block rounded-xl px-4 py-3 text-base font-semibold text-[#010101] hover:bg-[#EFF6FF] hover:text-[#0067FC]"
                            href={`#${item.name.toLowerCase()}`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a className="block rounded-xl px-4 py-3 text-base font-semibold text-[#010101] hover:bg-[#EFF6FF] hover:text-[#0067FC]" href="#login">
                        Login
                    </a>
                </nav>
            </details>
        </header>
    );
}
