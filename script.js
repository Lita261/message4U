const envelope = document.querySelector('.envelope-wrapper');
    const song = document.getElementById('loveSong');

    let isOpen = false;

    envelope.addEventListener('click', () => {
        isOpen = !isOpen;
        envelope.classList.toggle('flap');

        if (isOpen) {
            song.currentTime = 0;   // restart song
            song.play().catch(() => {
                console.log('Audio blocked until user interaction');
            });
        } else {
            song.pause();
        }
    });