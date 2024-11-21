async function animate() {
    // Animate images and text simultaneously
    for (let i = 0; i < 3; i++) {
        await Promise.all([
            gsap.to(`.image:nth-child(${i + 2})`, {
                width: "100%",
                ease: "Expo.easeInOut",
                duration: 3,
            }),
            gsap.to(`#text h1:nth-child(${i + 1})`, {
                top: "0",
                ease: "Expo.easeInOut",
                duration: 3,
            }),
        ]);

        // Animate text disappearing while next image starts
        await gsap.to(`#text h1:nth-child(${i + 1})`, {
            top: "-100px",
            ease: "Expo.easeInOut",
            duration: 1,
            delay: 0, // Overlap text moving up with next image appearing
        });
    }
}

(async function load() {
    while (true) {
        await animate();

        // Reset images and text
        
        gsap.set(".image", { width: "0%",
         });
        gsap.set("#text h1", {
            top: "100px"
        });
    }
})();
