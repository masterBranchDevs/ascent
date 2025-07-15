const SERVICES = [
    {
        title: "Venture Capital",
        description: "We help startups and growing businesses secure the capital they need to scale their operations and achieve their goals.",
        icon: "fa-solid fa-chart-line",
    },
    {
        title: "Private Equity",
        description: "Our private equity services focus on acquiring and managing companies to improve operations and increase value over time.",
        icon: "fa-solid fa-handshake",
    },
    {
        title: "Wealth Management",
        description: "We provide personalized wealth management strategies to help high net-worth individuals preserve and grow their assets.",
        icon: "fa-solid fa-wallet",
    },
    {
        title: "Strategic Advisory",
        description: "Our team of experts provides guidance on mergers, acquisitions, restructuring, and other strategic business decisions.",
        icon: "fa-solid fa-lightbulb",
    },
    {
        title: "Asset Management",
        description: "We optimize investment portfolios across multiple asset classes to maximize returns while managing risk.",
        icon: "fa-solid fa-sack-dollar",
    },
    {
        title: "Real Estate Investment",
        description: "Our real estate services include property acquisition, development, and management for long-term value creation.",
        icon: "fa-solid fa-building",
    },
] as const;

const INVESTMENT_STEPS = [
    {
        "title": "Bottom-Up Screening",
        "description": "We begin by identifying potential opportunities using a bottom-up approach—carefully analyzing publicly available data and disclosures to filter promising companies.",
        "icon": "01"
    },
    {
        "title": "In-Depth Financial Analysis",
        "description": "We dive deep into a company’s financials to evaluate past performance, assess financial health, and understand the direction of future growth.",
        "icon": "02"
    },
    {
        "title": "Identifying the Investment Thesis",
        "description": "We identify what drives the opportunity—be it capacity expansion, debt reduction, management changes, industry tailwinds, policy support, or turnaround potential.",
        "icon": "03"
    },
    {
        "title": "Fundamental-Driven Research",
        "description": "Our approach is rooted in thorough fundamental research—not technical charts—ensuring every recommendation is backed by conviction and clarity.",
        "icon": "04"
    }
] as const;

export {
    SERVICES,
    INVESTMENT_STEPS
}