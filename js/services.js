document.addEventListener('DOMContentLoaded', () => {

    // === Primary Services ===
    
    const services = [
      {
        icon: "📈",
        title: "Business Development",
        description: "Grow your business in a competitive digital landscape with data-driven insights.",
        features: [
          "Market research & analysis",
          "Growth-driven strategies",
          "Lead generation",
          "Business process automation"
        ],
        color: "from-blue-500 to-blue-700",
        duration: "4-6 weeks",
        rating: 5,
        clients: 150,
        popular: true
      },
      {
        icon: "💻",
        title: "Web Solutions",
        description: "Modern, scalable, lightning-fast websites for engagement and results.",
        features: [
          "Responsive design & dev",
          "E-commerce integration",
          "Custom applications",
          "SEO optimization"
        ],
        color: "from-purple-500 to-purple-700",
        duration: "6-8 weeks",
        rating: 5,
        clients: 200
      },
      {
        icon: "📱",
        title: "Mobile App Development",
        description: "Cross-platform mobile apps to connect with your customers anywhere.",
        features: [
          "React Native apps",
          "iOS & Android native dev",
          "UI/UX for mobile",
          "App store deployment"
        ],
        color: "from-green-500 to-green-700",
        duration: "8-12 weeks",
        rating: 5,
        clients: 85
      },
      {
        icon: "☁️",
        title: "Cloud Services",
        description: "Cloud integration, migration, and management for scalable operations.",
        features: [
          "Cloud architecture",
          "AWS, Azure, GCP",
          "DevOps implementation",
          "Infrastructure setup"
        ],
        color: "from-teal-500 to-teal-700",
        duration: "3-5 weeks",
        rating: 5,
        clients: 120
      },
      {
        icon: "🛡️",
        title: "Cybersecurity Solutions",
        description: "Protect your digital assets with comprehensive security protocols.",
        features: [
          "Security audit",
          "24/7 monitoring",
          "Data backup",
          "Compliance support"
        ],
        color: "from-red-500 to-red-700",
        duration: "2-4 weeks",
        rating: 5,
        clients: 95
      },
      {
        icon: "📢",
        title: "Digital Marketing",
        description: "SEO, SEM & social media marketing strategies that convert.",
        features: [
          "SEO & content marketing",
          "PPC management",
          "Social media ads",
          "Analytics tracking"
        ],
        color: "from-pink-500 to-pink-700",
        duration: "Ongoing",
        rating: 4,
        clients: 180,
        popular: true
      }
    ];

    const grid = document.getElementById('services-grid');

    services.forEach((service, index) => {
      const card = document.createElement('div');
      card.className = `service-card p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition hover:-translate-y-3 hover:scale-105 relative`;
      card.style.animationDelay = `${index * 100}ms`;

      card.innerHTML = `
        ${service.popular ? `
          <div class="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ Popular
          </div>` : ''}
        <div class="flex items-center justify-between mb-4">
          <div class="text-3xl">${service.icon}</div>
          <div class="text-right text-yellow-500 flex items-center gap-1 text-sm">
            ${'⭐'.repeat(service.rating)} (${service.rating}.0)
          </div>
        </div>
        <h3 class="text-lg font-bold mb-2">${service.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4">${service.description}</p>
        <ul class="mb-4">
          ${service.features.map(feature => `<li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">✔️ ${feature}</li>`).join('')}
        </ul>
        <div class="flex justify-end items-center mb-4">
          <span class="text-sm flex items-center gap-1">⏱️ ${service.duration}</span>
        </div>
        <button class="w-full py-2 bg-gradient-to-r ${service.color} text-white rounded-xl font-semibold shadow hover:shadow-xl transition">
          Get Started →
        </button>
      `;

      grid.appendChild(card);
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card').forEach(card => observer.observe(card));
});
