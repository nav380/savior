document.addEventListener('DOMContentLoaded', () => {

    // === Primary Services ===
    const Services = [
        {
            icon: "fas fa-chart-line",
            title: "Business Development",
            description: "Strategic planning and execution to grow your business in a competitive digital landscape.",
            features: [
                "Market research & analysis",
                "Growth-driven strategies",
                "Lead generation solutions"
            ],
            color: "from-blue-500 to-blue-700" // Optional: Gradient color for card
        },
        {
            icon: "fas fa-laptop-code",
            title: "Web Solutions",
            description: "Modern and scalable websites that drive engagement and deliver results.",
            features: [
                "Responsive web design",
                "E-commerce development",
                "Custom web applications"
            ],
            color: "from-purple-500 to-purple-700"
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Mobile App Development",
            description: "Innovative mobile apps for iOS & Android to connect with your customers on the go.",
            features: [
                "Cross-platform apps",
                "UI/UX optimized design",
                "App store deployment"
            ],
            color: "from-green-500 to-green-700"
        },
        {
            icon: "fas fa-cloud",
            title: "Cloud Services",
            description: "Seamless cloud integration and management for modern businesses.",
            features: [
                "Cloud migration",
                "AWS & Azure solutions",
                "Scalable infrastructure"
            ],
            color: "from-teal-500 to-teal-700"
        },
        {
            icon: "fas fa-lock",
            title: "Cybersecurity Solutions",
            description: "Protect your business with advanced security protocols and monitoring.",
            features: [
                "Threat assessment",
                "24/7 monitoring",
                "Data protection & recovery"
            ],
            color: "from-red-500 to-red-700"
        },
        {
            icon: "fas fa-bullhorn",
            title: "Digital Marketing",
            description: "Expand your reach with SEO, SEM, and social media marketing strategies.",
            features: [
                "SEO & content marketing",
                "Pay-per-click campaigns",
                "Social media management"
            ],
            color: "from-pink-500 to-pink-700"
        }
    ];

    const servicesGrid = document.getElementById('services-grid');

    Services.forEach((service, index) => {
        const delay = (index + 1) * 150; // stagger animations

        const featuresHTML = service.features.map(feature => `
        <li class="flex items-center text-gray-600 text-sm">
            <i class="fas fa-check-circle text-cyan-500 mr-2"></i> ${feature}
        </li>
    `).join('');

        const cardHTML = `
    <div class="relative backdrop-blur-lg bg-white/80 rounded-3xl shadow-xl border border-white/10 hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-out group" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="p-6 flex flex-col justify-between h-full">
            <!-- Icon with glow -->
            <div class="relative w-14 h-14 mb-4">
                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 opacity-30 blur-2xl"></div>
                <div class="relative w-14 h-14 bg-gradient-to-tr from-cyan-50 to-blue-100 rounded-full flex items-center justify-center shadow-inner">
                    <i class="${service.icon} text-cyan-600 text-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"></i>
                </div>
            </div>
            <!-- Title -->
            <h3 class="text-lg font-bold text-gray-800 mb-1 group-hover:text-cyan-600 transition-colors duration-300">${service.title}</h3>
            <!-- Description -->
            <p class="text-gray-700 text-sm mb-4">${service.description}</p>
            <!-- Features -->
            <ul class="space-y-1 mb-5">
                ${featuresHTML}
            </ul>
            <!-- CTA -->
            <a href="#contact" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition duration-300 shadow-md">
                Learn More <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>`;

        servicesGrid.innerHTML += cardHTML;
    });






});
