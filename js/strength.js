document.addEventListener('DOMContentLoaded', () => {
    const strengths = [
        {
            icon: "fas fa-network-wired",
            color: "text-cyan-600",
            title: "Enterprise IT Solutions",
            points: [
                "End-to-end IT infrastructure setup",
                "Network design & implementation",
                "Scalable solutions for growing businesses"
            ]
        },
        {
            icon: "fas fa-laptop-code",
            color: "text-purple-600",
            title: "Web & App Development",
            points: [
                "Custom web applications tailored to your needs",
                "Cross-platform mobile apps with cutting-edge UX",
                "E-commerce & CMS solutions for any scale"
            ]
        },
        {
            icon: "fas fa-cloud",
            color: "text-indigo-600",
            title: "Cloud & DevOps Services",
            points: [
                "Cloud migration (AWS, Azure, GCP)",
                "CI/CD pipelines & automation",
                "24/7 cloud infrastructure management"
            ]
        },
        {
            icon: "fas fa-shield-alt",
            color: "text-red-600",
            title: "Cybersecurity & Compliance",
            points: [
                "Proactive threat detection & prevention",
                "Data encryption & secure access controls",
                "GDPR & ISO compliance solutions"
            ]
        },
        {
            icon: "fas fa-robot",
            color: "text-yellow-500",
            title: "AI & Automation Solutions",
            points: [
                "Chatbots & virtual assistants for businesses",
                "RPA (Robotic Process Automation) for workflows",
                "AI-driven analytics for smarter decisions"
            ]
        },
        {
            icon: "fas fa-bullhorn",
            color: "text-pink-600",
            title: "Digital Marketing",
            points: [
                "SEO & SEM campaigns for maximum reach",
                "Social media management & growth",
                "Content creation & targeted ad strategies"
            ]
        },
        {
            icon: "fas fa-chart-line",
            color: "text-orange-500",
            title: "Data Analytics & BI",
            points: [
                "Custom analytics dashboards",
                "Data visualization & reporting tools",
                "Predictive analytics for business growth"
            ]
        },
        {
            icon: "fas fa-headset",
            color: "text-green-600",
            title: "24/7 Managed IT Support",
            points: [
                "Dedicated technical support teams",
                "Remote monitoring & issue resolution",
                "Post-deployment training & assistance"
            ]
        }
    ];
    

    const strengthsGrid = document.getElementById('strengths-grid');

    strengths.forEach((strength, index) => {
        console.log(strength);
        const delay = (index + 1) * 100; // AOS stagger

        const pointsHTML = strength.points.map(point => `
            <li class="flex items-start text-gray-600">
                <i class="fas fa-check-circle text-cyan-500 mr-3 mt-1"></i>
                <span>${point}</span>
            </li>
        `).join('');

        const cardHTML = `
        <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100
                    transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out group"
             data-aos="fade-up" data-aos-delay="${delay}">
            <!-- Icon -->
            <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 
                        flex items-center justify-center mb-5 shadow-inner">
                <i class="${strength.icon} ${strength.color} text-2xl transition-transform duration-500 group-hover:scale-125"></i>
            </div>
            <!-- Title -->
            <h4 class="text-lg font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                ${strength.title}
            </h4>
            <!-- Points -->
            <ul class="space-y-2 text-sm leading-relaxed">
                ${pointsHTML}
            </ul>
        </div>`;

        strengthsGrid.innerHTML += cardHTML;
    });

});
