document.addEventListener("DOMContentLoaded", function () {

    const clientLogos = [
        { src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", alt: "Amazon" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Flipkart_logo.png", alt: "Flipkart" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Tata_logo.svg", alt: "Tata" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/7/71/Infosys_logo.svg", alt: "Infosys" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Wipro_Limited_logo.svg", alt: "Wipro" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Paytm_logo.svg", alt: "Paytm" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/5/54/Zomato_logo.svg", alt: "Zomato" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Reliance_Industries_Logo.svg", alt: "Reliance Industries" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png", alt: "Google" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Air_India_logo.svg", alt: "Air India" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Indigo_Logo.svg", alt: "IndiGo" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/5/59/BigBasket_logo.svg", alt: "BigBasket" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Myntra_Logo.svg", alt: "Myntra" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Ola_Cabs_Logo.svg", alt: "Ola" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Zoomcar_Logo.svg", alt: "Zoomcar" }
    ];


    const grid = document.getElementById("clients-grid");
    clientLogos.forEach(c => {
        const div = document.createElement("div");
        div.className = "flex flex-col items-center space-y-2";
        const img = document.createElement("img");
        img.src = c.src;
        img.alt = c.alt;
        img.className = "h-12 object-contain hover:scale-105 transition";
        const p = document.createElement("p");
        p.textContent = c.alt;
        p.className = "text-sm text-gray-600";
        div.append(img, p);
        grid.append(div);
    });
});
