document.addEventListener("DOMContentLoaded", function () {
    const countingContainer = document.getElementById("counting");

    const counters = [
        { title: "Happy Clients", target: 1200, suffix: "+" },
        { title: "Projects Delivered", target: 850, suffix: "+" },
        { title: "User Growth", target: 95, suffix: "%" },
        { title: "Awards Won", target: 25, suffix: "+" }
    ];

    counters.forEach(counter => {
        // Create counter card
        const div = document.createElement("div");
        div.className = "bg-white text-gray-800 rounded-xl flex flex-col justify-center items-center p-6 shadow-lg border border-gray-200 hover:shadow-2xl transform hover:scale-105 transition duration-300";

        const count = document.createElement("h3");
        count.textContent = "0";
        count.className = "text-5xl font-extrabold mb-2 text-purple-600 counter";

        const title = document.createElement("p");
        title.textContent = counter.title;
        title.className = "text-lg font-medium text-gray-500";

        div.append(count, title);
        countingContainer.append(div);

        // Animate counting
        animateCount(count, counter.target, 2000, counter.suffix); // 2 seconds duration
    });

    function animateCount(element, target, duration, suffix) {
        let start = 0;
        const increment = target / (duration / 16); // ~60fps
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(start) + suffix;
        }, 16);
    }
});
