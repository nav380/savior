document.addEventListener("DOMContentLoaded", function () {

    const clientLogos = [
        { src: "./images/ourclient/amazon.jpeg", alt: "Amazon" },
        { src: "./images/ourclient/flipkart.jpeg", alt: "Flipkart" },
        { src: "./images/ourclient/tata.jpeg", alt: "Tata" },
        { src: "./images/ourclient/Infosys.jpeg", alt: "Infosys" },
        { src: "./images/ourclient/wipro.jpeg", alt: "Wipro" },
        { src: "./images/ourclient/boat.jpeg", alt: "Paytm" },
        { src: "./images/ourclient/Ajio.jpeg", alt: "Zomato" },
        { src: "./images/ourclient/meesho.jpeg", alt: "Reliance Industries" },
        { src: "./images/ourclient/microsoft.jpeg", alt: "Microsoft" },
        { src: "./images/ourclient/google.jpeg", alt: "Google" },
        { src: "./images/ourclient/airindia.jpeg", alt: "Air India" },
        { src: "./images/ourclient/AirAsia.jpeg", alt: "IndiGo" },
        { src: "./images/ourclient/acer.jpeg", alt: "BigBasket" },
        { src: "./images/ourclient/microsoft.jpeg", alt: "Myntra" },
        { src: "./images/ourclient/phonepe.jpeg", alt: "Ola" },
        { src: "./images/ourclient/myntra.jpeg", alt: "Zoomcar" }
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
