document.addEventListener('DOMContentLoaded', () => {

    /* SETTINGS */
    const GrassSpawnChance = 6; //šanca 1/6
    //FLOWER
    const PlantGrowChance = 400;  //šanca 1/400 
    //každých 30 až 60 sekúnd
    const FlowerSpawnTimefrom = 30; //30
    const FlowerSpawnTimeto = 30; //30
    //každých 10 až 40 sekúnd
    const GrowFlowerSpeedfrom = 10; //10
    const GrowFlowerSpeedto = 30; //30
    
    const canvas = document.getElementById('gamecanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth - 20;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    /*
    Nech blocky GB1,2 budú mať random miesto a počet
    */
    const blocks = document.querySelectorAll(".Img");

    blocks.forEach(Img => {
        const randomNumber_01 = Math.floor(Math.random() * GrassSpawnChance) + 1;

        if (randomNumber_01 === 1) {
            Img.src = "img/Blocks/GrassBlock20.png";
        } else if (randomNumber_01 === 2) {
            Img.src = "img/Blocks/GrassBlock30.png";
        } else if ([3, 4, 5, 6, 7, 8, 9, 10].includes(randomNumber_01)) {
            Img.src = "img/Blocks/GrassBlockLite.png";
        }

        /*
        Flower (growing, spawn chance)
        */
        if (Img.src.includes("GrassBlockLite")) {
            let isFirstRun = true;
            
            if (Img.src.includes("GrassBlockLite")) {
                randomNumberLoop(Img);
            }
        }
        if (Img.src.includes("img/Blocks/GrassBlock20.png") || Img.src.includes("img/Blocks/GrassBlock30.png")) {
            Img.addEventListener("click", function () {
                destroingGrass(Img);
            });
        }                    
    });

    function randomNumberLoop(Img) {
        const randomNumber = Math.floor(Math.random() * PlantGrowChance) + 1;
    
        if (randomNumber === 1) {
            growPlant(Img);
            return;
        }
        else if ([2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(randomNumber)) {
            GrassGrowing(Img);
            return;
        }
    
        const nextDelay = Math.floor(Math.random() * (FlowerSpawnTimefrom + 1) + FlowerSpawnTimeto) * 1000;
    
        setTimeout(() => {
            randomNumberLoop(Img);
        }, nextDelay);
    }            

    function growPlant(Img) {
        const randomNumber = Math.floor(Math.random() * (GrowFlowerSpeedfrom + 1) + GrowFlowerSpeedto) * 1000;
        const randomFlower = Math.floor(Math.random() * 4) + 1;

        if (Img.src.includes("GrassBlockLite") && randomFlower === 1) {
            setTimeout(() => {
                Img.src = "img/Flower_01/Flower_01.png";
                setTimeout(() => {
                    Img.src = "img/Flower_01/Flower_02.png"; 
                    setTimeout(() => {
                        Img.src = "img/Flower_01/Flower_03.png";  
                        setTimeout(() => {
                            Img.src = "img/Flower_01/Flower_04.png";  
                            setTimeout(() => {
                                Img.src = "img/Flower_01/Flower_05.png"; 
                            }, randomNumber);
                        }, randomNumber);
                    }, randomNumber);
                }, randomNumber);
            }, randomNumber);
        }
        if ((Img.src.includes("GrassBlockLite") && (randomFlower === 2) || randomFlower === 3)) {
            setTimeout(() => {
                Img.src = "img/Flower_02/Flower_01.png"; 
                setTimeout(() => {
                    Img.src = "img/Flower_02/Flower_02.png"; 
                    setTimeout(() => {
                        Img.src = "img/Flower_02/Flower_03.png";  
                        setTimeout(() => {
                            Img.src = "img/Flower_02/Flower_04.png";  
                            setTimeout(() => {
                                Img.src = "img/Flower_02/Flower_05.png"; 
                            }, randomNumber);
                        }, randomNumber);
                    }, randomNumber);
                }, randomNumber);
            }, randomNumber);
        }
        if (Img.src.includes("GrassBlockLite") && randomFlower === 3) {
            setTimeout(() => {
                Img.src = "img/Flower_03/Flower_01.png"; 
                setTimeout(() => {
                    Img.src = "img/Flower_03/Flower_02.png"; 
                    setTimeout(() => {
                        Img.src = "img/Flower_03/Flower_03.png";  
                        setTimeout(() => {
                            Img.src = "img/Flower_03/Flower_04.png";  
                            setTimeout(() => {
                                Img.src = "img/Flower_03/Flower_05.png"; 
                            }, randomNumber);
                        }, randomNumber);
                    }, randomNumber);
                }, randomNumber);
            }, randomNumber);
        }
    }   
    function GrassGrowing(Img) {
        const randomNumber = Math.floor(Math.random() * (5 + 1) + 20) * 1000;
        const randomFlower = Math.floor(Math.random() * 2) + 1;

        if (Img.src.includes("GrassBlockLite") && randomFlower === 1) {
            setTimeout(() => {
                Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_01.png";
                setTimeout(() => {
                    Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_02.png"; 
                    setTimeout(() => {
                        Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_03.png";  
                        setTimeout(() => {
                            Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_04.png";  
                            setTimeout(() => {
                                Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_05.png"; 
                                setTimeout(() => {
                                    Img.src = "img/Blocks/GrassBlock30.png";
                                    if (Img.src.includes("img/Blocks/GrassBlock20.png") || Img.src.includes("img/Blocks/GrassBlock30.png")) {
                                        Img.addEventListener("click", function () {
                                            destroingGrass(Img);
                                        });
                                    }   
                                }, randomNumber);
                            }, randomNumber);
                        }, randomNumber);
                    }, randomNumber);
                }, randomNumber);
            }, randomNumber);
        }
        // if (Img.src.includes("GrassBlockLite") && randomFlower === 2) {
        //     setTimeout(() => {
        //         Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_01.png";
        //         setTimeout(() => {
        //             Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_02.png"; 
        //             setTimeout(() => {
        //                 Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_03.png";  
        //                 setTimeout(() => {
        //                     Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_04.png";  
        //                     setTimeout(() => {
        //                         Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_05.png"; 
        //                         setTimeout(() => {
        //                             Img.src = "img/GrassGrowing/GrassGrowing1/GrassGrowing_06.png"; 
        //                         }, randomNumber);
        //                     }, randomNumber);
        //                 }, randomNumber);
        //             }, randomNumber);
        //         }, randomNumber);
        //     }, randomNumber);
        // }
    }

    const pauseScreen = document.getElementById("PauseScreen");
    const game = document.getElementById("game");

    document.addEventListener("keydown", (event) => {
        
        if (event.key === "Escape") {
            
            const isPaused = pauseScreen.style.display === "block";

            if (isPaused) {
                pauseScreen.style.display = "none";
                game.classList.remove("blurred");
            } else {
                pauseScreen.style.display = "block";
                game.classList.add("blurred");
            }
        }
    });

    document.getElementById("Back").addEventListener("click", () => {
        const isPaused = pauseScreen.style.display === "block";

        if (isPaused) {
            pauseScreen.style.display = "none";
            game.classList.remove("blurred");
        } else {
            pauseScreen.style.display = "block";
            game.classList.add("blurred");
        }
    });   
    const inventory = document.getElementById("inventory");

    document.addEventListener("keydown", (event) => {
        
        if (event.key === "b" || event.key === "B") {
            
            const isPaused1 = inventory.style.display === "block";

            if (isPaused1) {
                inventory.style.display = "none";
            } else {
                inventory.style.display = "block";
            }
        }
    });

    function destroingGrass(Img) {
        if (Img.isDestroyed) return;

        Img.isDestroyed = true;

        const Delay = 60;

        if (img2.getAttribute("src") === VolumeOnSrc) {
            randomDestroyGrass_audio();
        }
    
        setTimeout(function () {
            Img.src = "img/Blocks/DestroyingGrass/DestroingGrass_01.png";    
            setTimeout(function () {
                Img.src = "img/Blocks/DestroyingGrass/DestroingGrass_02.png";
                setTimeout(function () {
                    Img.src = "img/Blocks/DestroyingGrass/DestroingGrass_03.png";    
                    setTimeout(function () {
                        Img.src = "img/Blocks/DestroyingGrass/DestroingGrass_04.png";    
                        setTimeout(function () {
                            Img.src = "img/Blocks/DestroyingGrass/DestroingGrass_05.png";
                            setTimeout(function () {
                                Img.src = "img/Blocks/GrassBlockLite.png"
                                randomNumberLoop(Img);
                            }, Delay);
                        }, Delay);    
                    }, Delay);
                }, Delay);
            }, Delay);
        }, Delay);
    }

    /* Audio */
    const music = document.getElementById("background_audio");
    const DestroyGrassSound = document.getElementById("DestroyGrass_audio");
    const img1 = document.getElementById("imgVolMusic");
    const img2 = document.getElementById("imgVolSound");

    const VolumeOnSrc = "img/Other/VolumeOn.jpg";
    const VolumeOffSrc = "img/Other/VolumeOff.jpg";
    //Music
    window.addEventListener("load", () => {
    music.play();
    });

    img1.addEventListener("click", () => {
    const currentSrc = img1.getAttribute("src");

    if (currentSrc === VolumeOnSrc) {
        img1.setAttribute("src", VolumeOffSrc);
        music.pause();
    } else {
        img1.setAttribute("src", VolumeOnSrc);
        music.play();
    }
    });

    //Sound Effects
    img2.addEventListener("click", () => {
    const currentSrc = img2.getAttribute("src");

    if (currentSrc === VolumeOnSrc) {
        img2.setAttribute("src", VolumeOffSrc);
    } else {
        img2.setAttribute("src", VolumeOnSrc);
    }
    });

    function randomDestroyGrass_audio() {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        const audioElement = document.getElementById("DestroyGrass_audio");
        if (randomNumber === 1) {
            audioElement.src = "audio/DestroyGrass/destroyGrassAudio_01.mp3"
        }
        else if (randomNumber === 2) {
            audioElement.src = "audio/DestroyGrass/destroyGrassAudio_02.mp3"
        }
        else if (randomNumber === 3) {
            audioElement.src = "audio/DestroyGrass/destroyGrassAudio_03.mp3"
        }
        else if (randomNumber === 4) {
            audioElement.src = "audio/DestroyGrass/destroyGrassAudio_04.mp3"
        }
        audioElement.currentTime = 0; //prehrá od začiatku
        audioElement.play(); 
    };
});

