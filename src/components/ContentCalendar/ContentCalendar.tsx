import Image from "next/image";

const features = [
    "Drag & Drop Calendar",
    "AI Caption & Hashtag Generator",
    "Visual Previewer (Instagram, Facebook, LinkedIn)",
];

export default function ContentCalendar() {
    return (
        <section className="relative w-full overflow-hidden bg-white px-[120px] py-[80px] max-[1400px]:px-10 max-[1000px]:px-[22px] max-[768px]:px-4 max-[768px]:py-[52px]" id="social-media">
            <div className="mx-auto flex w-full max-w-[1680px] flex-col items-start justify-between gap-8 min-[900px]:flex-row min-[900px]:gap-[142px] max-[1200px]:gap-10">
                <div className="mt-0 min-w-0 w-full text-left min-[900px]:mt-[127px] min-[900px]:w-1/2">
                    <span className="inline-flex h-[34px] items-center rounded-[28px] border border-[#0D67FC] bg-[#D8E9FF] px-[8px] text-[14px] font-semibold leading-none text-[#0D67FC] font-roboto">Social Media Management</span>
                    <h2 className="mt-[18px] font-roboto text-[40px] font-extrabold leading-none tracking-[-0.5px] text-[#111827] max-[1200px]:text-[34px] max-[768px]:text-[30px] max-[500px]:text-[26px]">Create, Schedule &amp; Publish Everywhere.</h2>
                    <p className="mt-[18px] max-w-[662px] text-[18px] leading-[26px] text-[#555555] max-[1200px]:text-[16px] max-[1200px]:leading-[24px] max-[500px]:text-[15px] max-[500px]:leading-[22px]" style={{ fontFamily: "Segoe UI, sans-serif", fontWeight: 400 }}>
                        Plan your content, optimize with AI, and keep your brand consistent across all platforms — from one calendar.
                    </p>
                    <ul className="mt-[30px] flex list-none flex-col gap-[14px] p-0 max-[768px]:gap-3">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-center gap-[18px] text-[16px] leading-5 text-[#555555] max-[500px]:text-[14px]">
                                <Image src="/tic-icon.png" alt="" aria-hidden="true" width={20} height={20} className="h-5 w-5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden min-w-0 w-full items-center justify-end min-[900px]:mt-[127px] min-[900px]:flex min-[900px]:w-1/2">
                    {/* Full calendar and post preview for large desktop screens. */}
                    <div className="hidden w-full max-w-[836px] min-[1400px]:block">
                        <Image src="/content-calender.png" alt="Content calendar with social post preview" width={917} height={637} className="h-auto w-full object-contain" sizes="836px" />
                    </div>

                    {/* A focused calendar view stays legible on laptops and tablets. */}
                    <div className="block w-full max-w-[560px] min-[1000px]:w-[115%] min-[1400px]:hidden">
                        <Image src="/calender.png" alt="Content calendar" width={776} height={566} className="h-auto w-full object-contain" sizes="(max-width: 1200px) 48vw, 560px" />
                    </div>
                </div>
            </div>
        </section>
    );
}
