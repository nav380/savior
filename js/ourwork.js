document.addEventListener("DOMContentLoaded", function () {
    const workItems = [
        {
            name: "Nimbus Commerce",
            description: "Developed a scalable e‑commerce platform with custom APIs and third‑party integrations.",
            image: "https://placehold.co/150x150/cccccc/000000?text=Nimbus+Commerce"
        },
        {
            name: "FinEdge Pay",
            description: "Implemented a secure fintech app with real‑time transactions and fraud detection.",
            image: "https://placehold.co/150x150/cccccc/000000?text=FinEdge+Pay"
        },
        {
            name: "InsightIQ Dashboard",
            description: "Built an AI‑powered analytics dashboard for real‑time KPI visualization.",
            image: "https://placehold.co/150x150/cccccc/000000?text=InsightIQ+Dashboard"
        }
    ];

    const newItems = [
        {
            name: "CRM Nexus",
            description: "Designed a SaaS-based CRM solution offering advanced reporting, sales automation, and user-friendly workflows for teams.",
            image: "https://placehold.co/150x150/cccccc/000000?text=CRM+Nexus"
        },
        {
            name: "MediLink Portal",
            description: "Delivered a healthcare portal enabling telemedicine, appointment scheduling, and secure patient records management.",
            image: "https://placehold.co/150x150/cccccc/000000?text=MediLink+Portal"
        },
        {
            name: "LogiTrack System",
            description: "Created a logistics tracking system with live vehicle monitoring, route optimization, and predictive delivery insights.",
            image: "https://placehold.co/150x150/cccccc/000000?text=LogiTrack+System"
        },
        {
            name: "Synergy ERP",
            description: "Engineered an enterprise ERP system streamlining finance, HR, inventory, and supply chain operations for global businesses.",
            image: "https://placehold.co/150x150/cccccc/000000?text=Synergy+ERP"
        },
        {
            name: "ConnectSphere",
            description: "Built a mobile-first social networking app supporting rich chat, media sharing, and real-time notifications.",
            image: "https://placehold.co/150x150/cccccc/000000?text=ConnectSphere"
        },
        {
            name: "BlockSecure",
            description: "Developed a blockchain-powered smart contract platform ensuring secure, transparent, and tamper-proof transactions.",
            image: "https://placehold.co/150x150/cccccc/000000?text=BlockSecure"
        }
    ];



    const workGrid = document.getElementById("work-grid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const closeBtn = document.getElementById("closeBtn");

    function createCard(item) {
        const div = document.createElement("div");
        div.className = "relative group [transform-style:preserve-3d] transition-transform duration-700 hover:rotate-y-180 w-full h-80";

        const front = document.createElement("div");
        front.className = "absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center space-y-4 [backface-visibility:hidden]";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.className = "h-24 w-24 object-cover rounded-full";

        const h3 = document.createElement("h3");
        h3.textContent = item.name;
        h3.className = "text-xl font-semibold text-center";

        front.append(img, h3);

        const back = document.createElement("div");
        back.className = "absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-lg p-6 flex items-center justify-center [backface-visibility:hidden] rotate-y-180";

        const backP = document.createElement("p");
        backP.textContent = item.description;
        backP.className = "text-lg text-center";

        back.append(backP);

        div.append(front, back);
        return div;
    }

    function renderCards(items) {
        workGrid.innerHTML = ""; // Clear the grid
        items.forEach(item => {
            const card = createCard(item);
            workGrid.append(card);
        });
    }

    // Initially load only the first set
    renderCards(workItems);

    loadMoreBtn.addEventListener("click", function () {
        renderCards([...workItems, ...newItems]); // Show all items
        loadMoreBtn.style.display = "none"; // Hide Load More
        closeBtn.style.display = "flex";    // Show Close button
    });

    closeBtn.addEventListener("click", function () {
        renderCards(workItems);             // Reset to initial state
        closeBtn.style.display = "none";    // Hide Close button
        loadMoreBtn.style.display = "flex"; // Show Load More button again
    });
});
