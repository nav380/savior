document.addEventListener("DOMContentLoaded", function () {

    const workItems = [
        { name: "Project A", description: "A brief description of Project A.", image: "https://via.placeholder.com/150" },
        { name: "Project B", description: "A brief description of Project B.", image: "https://via.placeholder.com/150" },
        { name: "Project C", description: "A brief description of Project C.", image: "https://via.placeholder.com/150" },
    ];

    const workGrid = document.getElementById("work-grid");
    workItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.className = "h-32 w-32 object-cover rounded-full";

        const h3 = document.createElement("h3");
        h3.textContent = item.name;
        h3.className = "text-xl font-semibold text-center";

        const p = document.createElement("p");
        p.textContent = item.description;
        p.className = "text-gray-600 text-center";

        div.append(img, h3, p);
        workGrid.append(div);
    });

    const loadMoreBtn = document.getElementById("loadMoreBtn");
    loadMoreBtn.addEventListener("click", function () {
        const newItems = [
            { name: "Project D", description: "A brief description of Project D.", image: "https://via.placeholder.com/150" },
            { name: "Project E", description: "A brief description of Project E.", image: "https://via.placeholder.com/150" },
            { name: "Project F", description: "A brief description of Project F.", image: "https://via.placeholder.com/150" },
            { name: "Project G", description: "A brief description of Project G.", image: "https://via.placeholder.com/150" },
            { name: "Project H", description: "A brief description of Project H.", image: "https://via.placeholder.com/150" },
            { name: "Project I", description: "A brief description of Project I.", image: "https://via.placeholder.com/150" }
        ];

        newItems.forEach(item => {
            const div = document.createElement("div");
            div.className = "bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4";

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            img.className = "h-32 w-32 object-cover rounded-full";

            const h3 = document.createElement("h3");
            h3.textContent = item.name;
            h3.className = "text-xl font-semibold text-center";

            const p = document.createElement("p");
            p.textContent = item.description;
            p.className = "text-gray-600 text-center";

            div.append(img, h3, p);
            workGrid.append(div);
        });
        loadMoreBtn.style.display = "none"; // Hide the button after loading more items
    });


});
