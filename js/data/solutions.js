// Static path references
const imgWorkHour = 'assets/images/hero_construction_excavator_1765659325337.png';
const imgSolar = 'assets/images/hero_solar_rail_1765659281848.png';
const imgFleet = 'assets/images/hero_fleet_highway_1765659342632.png';
const imgIndustrial = 'assets/images/hero_hazardous_tanker_1765659298135.png';
const imgCement = 'assets/images/hero_mining_truck_1765659261889.png';

export const solutionsData = {
    'work-hour-meter': {
        title: "Work Hour Meter",
        tagline: "Precision Monitoring for Construction Equipment",
        theme: "construction",
        heroImage: imgWorkHour,
        description: "Track exact usage hours of your heavy machinery with our advanced vibration-sensing technology. Perfect for rental tracking and maintenance scheduling.",
        features: [
            "Vibration-based Sensing (AST3Rc)",
            "Tamper-proof installation",
            "Real-time utilization reports",
            "Maintenance alerts based on hours"
        ],
        specs: [
            { label: "Sensor Type", value: "3-Axis Accelerometer" },
            { label: "IP Rating", value: "IP67 Waterproof" },
            { label: "Connectivity", value: "4G / LTE / LoRaWAN" }
        ]
    },
    'solar': {
        title: "Solar Powered Asset Tracker",
        tagline: "Track Anything, Anywhere — With the Power of the Sun",
        theme: "solar",
        heroImage: imgSolar,
        description: "Sensel Telematics' Solar-Powered Tracking Solution offers an innovative and maintenance-free way to track remote and non-powered assets like containers, wagons, trailers, and construction equipment. Powered entirely by solar energy, our devices deliver uninterrupted location data, geofencing, and movement alerts, even in the most rugged environments.",
        highlights: [
            "100% Solar-Powered",
            "IP67-Rated",
            "90+ Days Battery Backup",
            "No Wiring Required"
        ],
        featureBlocks: [
            {
                icon: "☀️",
                title: "Solar Powered, Always-On",
                points: [
                    "High-efficiency solar panels provide continuous power, even in low-light environments",
                    "In-built rechargeable battery ensures 24/7 uptime"
                ]
            },
            {
                icon: "📍",
                title: "Real-Time GPS Tracking",
                points: [
                    "Monitor live location and movement status of assets from anywhere",
                    "Integrated with Sensel's SmartFleet platform for intelligent visibility"
                ]
            },
            {
                icon: "🚚",
                title: "Ideal for Non-Powered Assets",
                points: [
                    "Designed for rail wagons, shipping containers, trailers, tankers, and more",
                    "Zero dependency on vehicle power systems"
                ]
            },
            {
                icon: "🛡️",
                title: "Rugged & Weatherproof",
                points: [
                    "Built to withstand tough weather conditions (IP67-rated enclosure)",
                    "UV-resistant housing ensures longevity in extreme outdoor environments"
                ]
            },
            {
                icon: "📊",
                title: "Smart Data Reporting",
                points: [
                    "Customizable reporting intervals to save power",
                    "Instant motion, tamper, and geofence alerts"
                ]
            },
            {
                icon: "🔋",
                title: "Extended Battery Life",
                points: [
                    "Up to 90+ days of backup without sunlight",
                    "Intelligent power management for efficient energy use"
                ]
            }
        ],
        subSolutions: [
            {
                title: "Solar Powered Container Tracking",
                subtitle: "Total Visibility for Shipping & Yard Containers",
                description: "Managing containers across ports, yards, and remote locations comes with challenges like poor visibility, delayed updates, and security risks. Traditional tracking methods often fail due to lack of power and harsh environmental conditions. Sensel Telematics' Solar-Powered Container Tracking Solution provides a reliable, maintenance-free way to monitor your containers — no wiring, no charging, just real-time updates powered by the sun."
            },
            {
                title: "Railway Freight Wagon Tracking",
                subtitle: "Uninterrupted Rail Asset Visibility Across Long Distances",
                description: "Track railway freight wagons across vast distances with reliable, solar-powered GPS devices. Our solution ensures continuous visibility of rail assets, enabling better fleet management, improved security, and optimized logistics operations."
            }
        ],
        specs: [
            { label: "Power Source", value: "High-efficiency Monocrystalline Solar" },
            { label: "Battery", value: "5200mAh Li-Poly Rechargeable" },
            { label: "Backup Duration", value: "90+ Days (No Sunlight)" },
            { label: "Enclosure", value: "IP67 Waterproof, UV-Resistant" },
            { label: "Connectivity", value: "4G LTE / 2G Fallback" },
            { label: "Mounting", value: "Magnetic / Bolt-On" }
        ],
        downloadLink: "#"
    },
    'fleet': {
        title: "Rechargeable Asset Tracker",
        tagline: "Optimize Logistics & Reduce Fuel Costs",
        theme: "fleet",
        heroImage: imgFleet,
        description: "End-to-end fleet visibility. Monitor fuel, temperature, and driver behavior in real-time to maximize operational efficiency.",
        features: [
            "Fuel Pilferage Monitoring",
            "Cold Chain Temperature Tracking",
            "Driver Behavior Analytics",
            "Route Optimization"
        ],
        specs: [
            { label: "Accuracy", value: "99.5% Fuel Sensing" },
            { label: "Alerts", value: "Instant SMS/Email" },
            { label: "Reports", value: "Automated Daily/Weekly" }
        ]
    },
    'industrial': {
        title: "Telematics For Hazardous Cargo",
        tagline: "Safety First for Critical Operations",
        theme: "industrial",
        heroImage: imgIndustrial,
        description: "Specialized telematics for carrying hazardous materials (HAZMAT) and monitoring safe loading practices in industrial plants.",
        features: [
            "Journey Risk Management (JRM)",
            "E-Safe-to-load Interlocks",
            "Driver Digital Assistant",
            "Compliance Reporting"
        ],
        specs: [
            { label: "Compliance", value: "PESO / AIS-140" },
            { label: "Safety", value: "Intrinsically Safe Components" },
            { label: "Monitoring", value: "24/7 Control Tower" }
        ]
    },
    'cement': {
        title: "Telematics For Cement And Mining Industry",
        tagline: "Rugged Telematics for Tough Environments",
        theme: "construction",
        heroImage: imgCement,
        description: "Optimize turnaround time in plants and mines. Manage queueing, loading time, and trip counts effectively.",
        features: [
            "Plant Turnaround Time Analytics",
            "Q-Management System",
            "Trip Count Verification",
            "Mining Safety Zones"
        ],
        specs: [
            { label: "Durability", value: "Shock & Vibration Resistant" },
            { label: "Integration", value: "SAP / ERP Connectors" },
            { label: "Maps", value: "Custom Mining Maps" }
        ]
    }
};
