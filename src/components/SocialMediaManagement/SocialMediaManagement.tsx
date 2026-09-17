import Image from "next/image";

interface Channel {
    name: string;
    icon: string;
}

const channels: Channel[] = [
    { name: "WhatsApp", icon: "/whatsap-logo.png" },
    { name: "Facebook", icon: "/facebook-logo.png" },
    { name: "Instagram", icon: "/instagram-logo.png" },
    { name: "LinkedIn", icon: "/linkdine-logo.png" },
    { name: "Messenger", icon: "/messanger-logo-1.png" },
    { name: "Telegram", icon: "/telegram-logo.png" },
    { name: "Gmail", icon: "/email-logo.png" },
    { name: "Outlook", icon: "/outlook-logo.png" },
    { name: "Snapchat", icon: "/snapchat-logo.png" },
];

export default function SocialMediaManagement() {
    return (
        <section className="relative w-full bg-[#FFFFFF] px-4 sm:px-8 md:px-10 lg:px-16 xl:px-[120px] py-[60px] lg:py-[80px]">
            <div className="mx-auto max-w-[1680px] w-full">

                {/* Section Header */}
                <div className="text-center mb-[18px]">
                    <h2
                        className="mb-[12px] text-[40px] font-bold tracking-[-0.5px] text-[#010101] max-[1000px]:text-[34px] max-[768px]:text-[28px] max-[550px]:text-[24px]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Connect All Your Customer Channels in One Place
                    </h2>
                    <p
                        className="mx-auto max-w-[650px] text-[16px] font-normal text-[#6B7280] max-[768px]:text-[14px] max-[550px]:text-[13px]"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        Integrate with your favorite platforms and bring every conversation under one roof.
                    </p>
                </div>

                {/* Channel Cards Grid Layout */}
                <div className="grid w-full grid-cols-9 gap-5 max-[1600px]:gap-[14px] max-[1280px]:grid-cols-5 max-[1280px]:gap-3 max-[900px]:grid-cols-3 max-[768px]:gap-3 max-[550px]:grid-cols-2 max-[550px]:gap-2">
                    {channels.map((channel) => (
                        <div
                            key={channel.name}
                            className="group flex h-[126px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-[#F3F4F6] bg-white p-3 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0067FC]/30 hover:shadow-[0_12px_28px_rgba(0,103,252,0.12)] max-[1000px]:h-[116px] max-[768px]:h-[112px] max-[550px]:h-[104px] max-[550px]:p-2"
                        >
                            <div className="relative mb-[6px] flex h-[44px] w-[72px] shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 max-[768px]:h-[40px] max-[768px]:w-[64px] max-[550px]:mb-1 max-[550px]:h-[34px] max-[550px]:w-[56px]">
                                <Image
                                    src={channel.icon}
                                    alt={channel.name}
                                    width={72}
                                    height={44}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>
                            <span
                                className="text-center text-[16px] font-semibold tracking-[-0.2px] text-[#111827] max-[1000px]:text-[15px] max-[550px]:text-[13px]"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                {channel.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}