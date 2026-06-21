/**
 * CORE STORYTELLING SYSTEM ENGINE
 * Pure Native JS Architectural State Machine with Vector Hardware Math Particles
 */

class InteractiveStoryEngine {
    constructor() {
        this.currentSequenceIndex = 0;
        this.sequences = [
            'hero-sequence',
            'envelope-sequence',
            'timeline-sequence',
            'traits-sequence',
            'gallery-counter-sequence',
            'proposal-sequence',
            'celebration-screen'
        ];
        
        // Canvas Setup
        this.canvas = document.getElementById('global-effects-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.fleeCount = 0;
        
        // Anti-Catch Configuration Matrices
        this.noPhrases = [
            "Are you completely sure? 🥺",
            "Panda is weeping inside... 😭",
            "I will give you infinite chocolates! 🍫",
            "Error 404: Option Unavailable! 🚫",
            "Nice try! Click Yes! 😉"
        ];

        this.initEventListeners();
        this.initCanvasEngine();
        this.runProceduralLoader();
        this.initClockEngine();
    }

    /* ==========================================================================
       HARDWARE HARDWARE ACCELERATED MOUSE TRACKING MATRIX
       ========================================================================== */
    initEventListeners() {
        const glow = document.getElementById('magic-cursor-glow');
        const dot = document.getElementById('magic-cursor-dot');

        window.addEventListener('mousemove', (e) => {
            // High-speed matrix tracking via transform translation
            glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            
            // Randomly spawn stardust trail particles into the vector array
            if(Math.random() < 0.15) {
                this.spawnStardustParticle(e.clientX, e.clientY);
            }
        });

        // Track Audio Dock Trigger
        document.getElementById('floating-audio-dock').addEventListener('click', () => this.toggleAudioChannel());
    }

    /* ==========================================================================
       SECTION 1: PROCEDURAL RUNNING SYSTEM LOADER
       ========================================================================== */
    runProceduralLoader() {
        const progressNode = document.getElementById('loader-progress');
        let currentWidth = 0;
        
        const loaderInterval = setInterval(() => {
            currentWidth += Math.floor(Math.random() * 12) + 5;
            if(currentWidth >= 100) {
                currentWidth = 100;
                clearInterval(loaderInterval);
                
                // Close Loader Curtain Smoothly
                document.getElementById('cinematic-loader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('cinematic-loader').style.display = 'none';
                    this.executeTypingIntro();
                }, 1000);
            }
            progressNode.style.width = `${currentWidth}%`;
        }, 120);
    }

    /* ==========================================================================
       SECTION 2: DYNAMIC INTRO HERO TYPING PIPELINE
       ========================================================================== */
    executeTypingIntro() {
        const target = document.getElementById('typing-hero-target');
        const textToDraw = "A Special Message For You ❤️";
        let index = 0;

        function drawChar() {
            if(index < textToDraw.length) {
                target.innerHTML += textToDraw.charAt(index);
                index++;
                setTimeout(drawChar, 80);
            }
        }
        drawChar();
    }

    /* ==========================================================================
       NAVIGATION STATE CONFIGURATOR
       ========================================================================== */
    nextSequence() {
        const currentId = this.sequences[this.currentSequenceIndex];
        document.getElementById(currentId).classList.add('hidden-view');
        document.getElementById(currentId).classList.remove('active');

        this.currentSequenceIndex++;
        const nextId = this.sequences[this.currentSequenceIndex];
        
        document.getElementById(nextId).classList.remove('hidden-view');
        document.getElementById(nextId).classList.add('active');

        // Dynamic Subsequence Interceptor Hooks
        if(nextId === 'traits-sequence') this.animateChibiEntry();
        if(nextId === 'proposal-sequence') this.runCinematicProposalBuildup();
    }

    /* ==========================================================================
       SECTION 3: ENVELOPE STRUCTURAL INTERACTION INTERFACE
       ========================================================================== */
    openEnvelope() {
        const flap = document.querySelector('.top-flap');
        // Fold back the seal structural fold flap via CSS transform matrix scaling
        flap.style.transform = 'rotateX(180deg) translateY(1px)';
        flap.style.zIndex = '1';
        
        setTimeout(() => {
            document.getElementById('unfolded-letter').classList.add('open-letter');
        }, 600);
    }

    /* ==========================================================================
       SECTION 9: CHIBI AUTOMATION CONTROLLER
       ========================================================================== */
    animateChibiEntry() {
        const chibi = document.getElementById('original-chibi');
        const bubble = document.getElementById('chibi-speech-bubble');
        
        // Sequence reset layout positioning coordinates
        chibi.style.left = '-100px';
        chibi.style.opacity = '1';
        chibi.style.transition = 'left 4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease';
        
        setTimeout(() => {
            chibi.style.left = 'calc(50% - 30px)'; // Perfect center coordinate calculation
            setTimeout(() => {
                bubble.style.opacity = '1';
                bubble.style.transform = 'scale(1)';
                bubble.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }, 1200);
        }, 100);
    }

    /* ==========================================================================
       SECTION 7: CHRONO SYSTEM DIGITAL COUNTDOWN ENGINE
       ========================================================================== */
    initClockEngine() {
        // Set a realistic epoch timestamp 2 years prior to today
        const epochDate = new Date('June 15, 2024 08:00:00').getTime();

        setInterval(() => {
            const delta = Date.now() - epochDate;
            
            const days = Math.floor(delta / (1000 * 60 * 60 * 24));
            const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((delta % (1000 * 60)) / 1000);

            document.getElementById('days-val').innerText = String(days).padStart(2, '0');
            document.getElementById('hours-val').innerText = String(hours).padStart(2, '0');
            document.getElementById('mins-val').innerText = String(mins).padStart(2, '0');
            document.getElementById('secs-val').innerText = String(secs).padStart(2, '0');
        }, 1000);
    }

    /* ==========================================================================
       SECTION 12: CINEMATIC MOVIE PROMPT PROMPTER
       ========================================================================== */
    runCinematicProposalBuildup() {
        const curtain = document.getElementById('buildup-darkness-curtain');
        const prompter = document.getElementById('buildup-text-prompter');
        const heart = document.getElementById('heartbeat-graphic-node');
        
        curtain.style.opacity = '1';
        curtain.style.pointerEvents = 'auto';

        const phases = [
            "I've wanted to tell you something...",
            "Something absolutely important...",
            "Something from the deepest depths of my heart..."
        ];
        
        let phaseIndex = 0;

        const cycleText = () => {
            if(phaseIndex < phases.length) {
                prompter.style.opacity = '0';
                setTimeout(() => {
                    prompter.innerText = phases[phaseIndex];
                    prompter.style.opacity = '1';
                    prompter.style.transition = 'opacity 0.6s ease';
                    phaseIndex++;
                    setTimeout(cycleText, 2500);
                }, 600);
            } else {
                // Heart beat sequence finale trigger
                prompter.style.opacity = '0';
                heart.style.opacity = '1';
                heart.style.animation = 'happyJump 0.4s infinite alternate';
                
                setTimeout(() => {
                    curtain.style.opacity = '0';
                    curtain.style.pointerEvents = 'none';
                    document.getElementById('massive-proposal-stage').classList.remove('hidden-view');
                    document.getElementById('massive-proposal-stage').classList.add('active');
                }, 2000);
            }
        };

        setTimeout(cycleText, 1000);
    }

    /* ==========================================================================
       SECTION 14: ANTI-CATCH FLEEING INTERACTIVE CONTROLLER MATRIX
       ========================================================================== */
    fleeNoButton() {
        const noBtn = document.getElementById('no-fleeing-target');
        const toast = document.getElementById('no-convince-toast');
        this.fleeCount++;

        // Compute completely non-linear variable random translations vectors
        const deltaX = (Math.random() * 240 - 120); 
        const deltaY = (Math.random() * 160 - 80);
        
        // Scaled transformation reduction tracking matrix
        const globalScaleFactor = Math.max(1 - (this.fleeCount * 0.08), 0.45);
        const randomRotationsDeg = Math.floor(Math.random() * 40 - 20);

        noBtn.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${globalScaleFactor}) rotate(${randomRotationsDeg}deg)`;
        noBtn.style.transition = 'transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)';

        // Print convincing payload updates
        const nextToastIndex = (this.fleeCount - 1) % this.noPhrases.length;
        toast.innerText = this.noPhrases[nextToastIndex];
    }

    clickNoAttempt() {
        // Fallback safety catch mechanism
        this.fleeNoButton();
    }

    /* ==========================================================================
       SECTION 15 & 16: EXPLOSION SYSTEMS CELEBRATION OVERLAY
       ========================================================================== */
    celebrateYes() {
        this.nextSequence(); // Route interface onto completion panel
        
        // Spawn 150 high density multi vector fireworks configurations instantly
        for(let i = 0; i < 150; i++) {
            this.particles.push({
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                vx: (Math.random() - 0.5) * 14,
                vy: (Math.random() - 0.5) * 14,
                size: Math.random() * 12 + 4,
                char: ["🎈", "❤️", "💖", "💕", "✨"][Math.floor(Math.random() * 5)],
                alpha: 1,
                decay: 0.008 + Math.random() * 0.01
            });
        }
    }

    /* ==========================================================================
       HIGH-PERFORMANCE INFRASTRUCTURE NATIVE CANVAS ANIMATION PARTICLES
       ========================================================================== */
    initCanvasEngine() {
        const resize = () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // High frequency execution rendering iteration framework loop
        const loop = () => {
            this.renderEngineTick();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    spawnStardustParticle(clientX, clientY) {
        this.particles.push({
            x: clientX,
            y: clientY,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2 - 1,
            size: Math.random() * 8 + 3,
            char: ["❤️", "✨", "💖"][Math.floor(Math.random() * 3)],
            alpha: 1,
            decay: 0.015
        });
    }

    renderEngineTick() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Constant background ambient stream generation vector logic
        if(Math.random() < 0.04) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: this.canvas.height + 20,
                vx: (Math.random() - 0.5) * 1.5,
                vy: -Math.random() * 2 - 0.5,
                size: Math.random() * 10 + 4,
                char: ["🌹", "❤️", "✨"][Math.floor(Math.random() * 3)],
                alpha: 0.7,
                decay: 0.003
            });
        }

        // Loop over vector profiles
        for(let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            if(p.alpha <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.globalAlpha = p.alpha;
            this.ctx.font = `${p.size}px sans-serif`;
            this.ctx.fillText(p.char, p.x, p.y);
            this.ctx.restore();
        }
    }

    /* ==========================================================================
       UTILITY: NATIVE AUDIO CONTEXT STREAM CHANNELS HANDLER
       ========================================================================== */
    toggleAudioChannel() {
        const audio = document.getElementById('cinematic-audio-element');
        const dock = document.getElementById('floating-audio-dock');
        
        if (audio.paused) {
            audio.play().catch(err => console.log("Context block intercepted audio playback initiation."));
            dock.classList.add('audio-active');
        } else {
            audio.pause();
            dock.classList.remove('audio-active');
        }
    }

    discoverSecret() {
        alert("You found a secret message ❤️ — Every star in my night sky sparkles exclusively to match your name.");
    }

    triggerLightbox(srcUrl) {
        alert("Displaying memory artifact in full dynamic viewport resolution link focus:\n" + srcUrl);
    }
}

// Global instantiation instantiation tracking reference
let engine;
window.addEventListener('DOMContentLoaded', () => {
    engine = new InteractiveStoryEngine();
});