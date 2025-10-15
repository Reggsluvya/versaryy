
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        const imgA = document.querySelector(".img-a");
        const imgB = document.querySelector(".img-b");
        const imgC = document.querySelector(".img-c");
        const imgD = document.querySelector(".img-d");
        const imgF = document.querySelector(".img-f");
        const dayone = document.querySelector(".day-one");

        if (imgA) imgA.style.transform = `translateY(${scrollY * 0.2}px)`;
        if (imgB) imgB.style.transform = `translateY(${scrollY * 0.35}px)`;
        if (imgC) imgC.style.transform = `translateY(${scrollY * 0.25}px)`;
        if (imgF) imgF.style.transform = `translateY(${scrollY * 0.3}px)`;
        if (imgD) imgD.style.transform = `translateY(${scrollY * 0.45}px)`;
        if (dayone) dayone.style.transform = `translateY(${scrollY * 0.5}px)`;
      });
      // Autoplay on Hover
      document.querySelectorAll(".hover-video").forEach((video) => {
        video.addEventListener("mouseenter", function () {
          this.play();
        });

        video.addEventListener("mouseleave", function () {
          this.pause();
        });

        // Fullscreen on Click
        video.addEventListener("click", function () {
          if (this.requestFullscreen) {
            this.requestFullscreen();
          } else if (this.webkitRequestFullscreen) {
            /* Safari */
            this.webkitRequestFullscreen();
          } else if (this.msRequestFullscreen) {
            /* IE11 */
            this.msRequestFullscreen();
          }

          // Auto play when fullscreen
          this.play();
        });

        // Pause when exit fullscreen (optional)
        document.addEventListener("fullscreenchange", function () {
          if (!document.fullscreenElement) {
            document.querySelectorAll(".hover-video").forEach((v) => {
              if (!v.matches(":hover")) {
                v.pause();
              }
            });
          }
        });
      });

      // Scroll Animation
      const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      document.querySelectorAll(".fade-in-scroll").forEach((el) => {
        observer.observe(el);
      });

      // =======================
      // MUSIC PLAYER
      // =======================

      // Data lagu - tambahkan lagu Anda di sini
      const songs = [
        {
          title: "Last Night On Earth",
          artist: "Green Day",
          src: "music/Last Night on Earth.mp3",
          lyrics: [
            [0, "🎵"],
            [16, "I text a postcard sent to you"],
            [20, "Did it go through?"],
            [25, "Sendin' all my love to you"],
            [32, "You are the moonlight of my life"],
            [36, "Every night"],
            [41, "Givin' all my love to you"],
            [48, "My beatin' heart belongs to you"],
            [55, "I walked for miles 'til I found you"],
            [64, "I'm here to honour you"],
            [67, "If I lose everything in the fire"],
            [73, "I'm sendin' all my love to you"],
            [77, "🎵"],
            [92, "With every breath that I am worth"],
            [97, "Here on Earth"],
            [100, "I'm sendin' all my love to you"],
            [108, "So if you dare to second-guess"],
            [112, "You can rest"],
            [116, "Assured that all my love's for you"],
            [124, "My beatin' heart belongs to you"],
            [132, "I walked for miles 'til I found you"],
            [140, "I'm here to honour you"],
            [144, "If I lose everything in the fire"],
            [149, "I'm sendin' all my love to you"],
            [153, "🎵"],
            [184, "My beatin' heart belongs to you"],
            [192, "I walked for miles 'til I found you"],
            [200, "I'm here to honour you"],
            [204, "If I lose everything in the fire"],
            [210, "Did I ever make it through?"],
            [214, "🎵"],
          ],
          cover: "img/greenday.jpeg",
        },
        {
          title: "Everything u are",
          artist: "Hindia",
          src: "music/Hindia - everything u are.mp3",
          lyrics: [
            [0, "🎵"],
            [12, "Wajahmu kuingat selalu"],
            [20, "Lupakan hal-hal yang menggangguku"],
            [26, "Karena hari ini mata kita beradu"],
            [32, "Kita saling bantu melepas perasaan"],
            [38.05, "Tinggi ke angkasa, menantang dunia"],
            [44.05, "Merayakan muda, tuk satu jam saja"],
            [49.09, "Kita hampir mati dan kau selamatkan aku"],
            [55, "Dan ku menyelamatkanmu <br> dan sekarang aku tahu"],
            [61.05, "Cerita kita tak jauh berbeda"],
            [69, "Got beat down by the world, <br> sometimes I wanna fold"],
            [74.05, "Namun suratmu kan kuceritakan <br> ke anak-anakku nanti"],
            [79.05, "Bahwa aku pernah dicintai"],
            [84.05, "with everything you are"],
            [87, "🎵"],
            [91, "Fully as I am with, everything you are"],
            [98.05, "Wajahmu yang beragam rupa pastikan"],
            [109, "Ku tak sendirian"],
            [112, "Jalani derita kau bawakan kisahmu"],
            [118, "Aku mendengarkan oh kita bergantian"],
            [124, "Bertukar nestapa menawar trauma"],
            [130, "Datang seadanya terasku terbuka "],
            [135.05, "Kita hampir mati dan kau sеlamatkan aku"],
            [140.05, "Dan ku menyelamatkanmu dan sekarang aku tahu"],
            [147, "Cеrita kita tak jauh berbeda"],
            [155, "Got beat down by the world <br> sometimes I wanna fold"],
            [160, "Namun suratmu kan kuceritakan <br> ke anak-anakku nanti"],
            [165.09, "Bahwa aku pernah dicintai"],
            [170.09, "Seada-adanya sekurang-kurangnya"],
            [176, "Walau sulit utarakan hatiku dengan indah"],
            [183, "Walau jarang ku bernyanyi <br> dengan cara yang indah"],
            [189, "Tapi tak sekali pun <br> kisahku pernah kau bantah"],
            [196.09, "Cerita kita tak jauh berbeda "],
            [204, "Got beat down by the world <br> sometimes I wanna fold"],
            [209, "Namun suratmu kan ku ceritakan <br> ke anak-anakku nanti"],
            [215, "Bahwa aku pernah dicintai <br> with everything u are"],
            [225, "Fully as I am"],
            [229, "with everything u are"],
          ],
          cover: "img/hindia.jpg",
        },
        {
          title: "Ramai Sepi Bersama",
          artist: "Hindia",
          src: "music/Hindia - Ramai Sepi Bersama (Official Lyric Video).mp3",
          lyrics: [
            [0, "🎵"],
            [20, "Seberapa jauh dari sini"],
            [24.05, "Tembok-tembok ini tak berarti"],
            [29, "Asal kulihat senyummu hari ini"],
            [34, "Mendengar keluhmu malam nanti"],
            [38, "Saat semua tak jelas arahnya"],
            [43.05, "Kita hanya punya bersama"],
            [47, "Lewati curam terjalnya dunia"],
            [52, "Ramai sepi ini milik bersama"],
            [56.05, "Ramai sepi ini milik bersama"],
            [61, "Kita sama-sama takkan ke mana"],
            [66, "Selama kau ada aku tak apa"],
            [70, "Apa pun yang terjadi tidak apa"],
            [74.05, "Melihat tawa tangis dan isak"],
            [79.05, "Mendengar kabar berbagai macamnya"],
            [84, "Kali ini kita belajar banyak"],
            [88.05, "Yang runtuh kita ulangi nantinya"],
            [93, "Saat semua tak jelas arahnya"],
            [98, "Kita hanya punya bersama"],
            [102, "Lewati curam terjalnya dunia"],
            [107, "Ramai sepi ini milik bersama"],
            [111.05, "Saat terasa berat-beratnya"],
            [116, "Kutahu kau pun berjuang juga"],
            [120.05, "Hadapi semuanya langsung di muka"],
            [125, "Apa pun yang terjadi tidak apa"],
            [129, "Setiap hari ku bersyukur"],
            [134, "Melihatmu"],
            [139, "Berselimut harapan"],
            [143, "Berbekal cerita"],
            [148, "Saat semua tak jelas arahnya"],
            [153, "Kita hanya punya bersama"],
            [157, "Lewati curam terjalnya dunia"],
            [162, "Ramai sepi ini milik bersama"],
            [166, "Ramai sepi ini milik bersama"],
            [170, "Kita sama-sama takkan ke mana"],
            [175.05, "Selama kau ada aku tak apa"],
            [180, "Apa pun yang terjadi tidak apa"],
          ],
          cover: "img/ldr.jpeg",
        },
        {
          title: "Semua Aku Dirayakan",
          artist: "Nadin Amizah",
          src: "music/Nadin Amizah - Semua Aku Dirayakan (Official Music Video).mp3",
          lyrics: [
            [0, "🎵"],
            [22, "Terima kasih katanya"],
            [28, "Semua aku dirayakan"],
            [34, "Jangan menangis ku dibuai"],
            [39.05, "Sampai tenang"],
            [45, "Diciumnya api marahku"],
            [51, "Ternyata kacau bisa luluh"],
            [57, "Jangan menangis biar tenang"],
            [63, "Ku dibuai"],
            [70, "Jika malam datang"],
            [76, "Dan takut menyerang"],
            [82, "Kau genggam apa yang kuragukan"],
            [94, "Tiada yang bilang"],
            [100, "Badainya kan reda"],
            [106, "Berhadapan dengan cahaya yang kerap membutakan"],
            [117, "Tiada yang bilang"],
            [124, "Jawaban kan datang"],
            [129, "Jauh dari seram yang selama ini telah kubayangkan"],
            [139, "Semua aku dirayakan"],
            [145, "🎵"],
            [179, "Hatiku seberat dunia"],
            [185, "Semua bentuknya kau rayakan"],
            [191, "Menangis pun kau penuh tenang"],
            [196, "Ku dibuai"],
            [199.05, "🎵"],
            [209, "Jika malam datang"],
            [215, "Dan takut menyerang"],
            [221, "Kau genggam apa yang kuragukan uh oh hu"],
            [245, "Tiada yang bilang"],
            [251, "Badainya kan reda"],
            [257, "Berhadapan dengan cahaya yang kerap membutakan hu"],
            [269, "Tiada yang bilang"],
            [275, "Jawaban kan datang"],
            [280, "Jauh dari seram yang selama ini telah kubayangkan"],
            [290, "Semua aku dirayakan hu oh"],
            [300, "🎵"],
          ],
          cover: "img/nadin.jpeg",
        },
        {
          title: "Happiness",
          artist: "Rex Orange County",
          src: "music/Rex Orange County - Happiness (Official Audio).mp3",
          lyrics: [
            [0, "I'll be the one that stays 'til the end"],
            [7, "And I'll be the one that needs you again"],
            [13, "And I'll be the one that proposes in a garden of roses"],
            [21, "And truly loves you long after our curtain closes"],
            [28, "But will you still love me when nobody wants me around?"],
            [41, "When I turn 81 and forget things, will you still be proud?"],
            [54, "'Cause I am the one who's waited this long"],
            [61, "And I am the one that might get it wrong"],
            [67.05, "And I'll be the one that will love you the way I'm supposed to"],
            [76, "Girl, oh"],
            [83, "But will you still love me"],
            [86, "when nobody wants me around, around?"],
            [95, "When I turn 81 and forget things,"],
            [101, "will you still be proud?"],
            [109, "Proud of me and my short list of accomplishments, say"],
            [117, "And me and my lack of new news"],
            [124, "Me and my selfishness, oh, me and myself"],
            [129.05, "Wish you nothing but a happy new version of you"],
            [137, "Because I, I, mm-mm"],
            [145, "Mm, mm, mm, mm-mm, yeah"],
            [151, "I want you to tell me you find it hard to be yourself"],
            [158, "So I can say it's gonna be alright, yeah"],
            [164, "nd I want you to love me the way you love your family"],
            [171, "The way you love to show me what it's like"],
            [177, "To be happy"],
            [187, "🎵"],
          ],
          cover: "img/masalex.jpg",
        },
        {
          title: "Kita usahakan rumah itu",
          artist: "Sal Priadi",
          src: "music/Sal Priadi - Kita usahakan rumah itu (Official Audio).mp3",
          lyrics: [
            [0, "🎵"],
            [2, "Kita usahakan rumah itu"],
            [7, "Dari depan akan tampak sederhana"],
            [12, "Tapi kebunnya luas"],
            [14.05, "Tanamannya mewah, megah"],
            [22, "Kita usahakan rumah itu"],
            [27, "Dari depan akan tampak sederhana"],
            [32, "Tapi dibuat kuat"],
            [34.05, "Dirancang muat, lega"],
            [42.05, "Urusan perabotan dan wangi-wangian"],
            [48, "Kuserahkan pada s'leramu yang lebih maju"],
            [53, "Tapi tata ruang, aku ikut pertimbangkan"],
            [58, "Kar'na kalau nanti kita punya kesibukan"],
            [63.05, "Malam tetap kumpul di meja panjang"],
            [70, "Ruang makan kita"],
            [75, "Berbincang tentang hari yang panjang"],
            [83, "🎵"],
            [93, "Kita usahakan rumah itu"],
            [98, "Dari depan akan tampak sederhana"],
            [102, "Tapi penerangannya"],
            [105, "Diracik begitu romantis"],
            [113, "Urusan perabotan dan wangi-wangian"],
            [118, "Kuserahkan pada s'leramu yang lebih maju"],
            [123, "Tapi tata ruang, aku ikut pertimbangkan"],
            [129, "Kar'na kalau nanti kita punya kesibukan"],
            [134, "Malam tetap kumpul di meja panjang"],
            [141, "Ruang makan kita"],
            [143.05, "Berbincang tentang hari yang panjang"],
            [154, "Boleh kamu keliling dunia"],
            [158, "Dan temukan banyak tempat-tempat 'tuk singgah"],
            [167, "Sementara"],
            [174, "Kamu boleh namai itu rumah"],
            [174, "Selama ada m'reka yang kamu cinta"],
            [188, "Di dalamnya"],
            [194, "🎵"],
            [204, "Kita usahakan rumah itu"],
          ],
          cover: "img/sal.jpg",
        },
      ];

      let currentSongIndex = 0;
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progress = document.getElementById('progress');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const songTitle = document.getElementById('songTitle');
    const artistName = document.getElementById('artistName');
    const albumCover = document.getElementById('albumCover');
    const lyricsTitle = document.getElementById('lyricsTitle');
    const lyricsContent = document.getElementById('lyricsContent');

    function loadSong(index) {
      const song = songs[index];
      audioPlayer.src = song.src;
      songTitle.textContent = song.title;
      artistName.textContent = song.artist;
      albumCover.src = song.cover || '';
      lyricsTitle.textContent = `♪ ${song.title} ♪`;
      if (Array.isArray(song.lyrics)) {
        lyricsContent.innerHTML = song.lyrics
          .map((line, idx) => `<div class="lyrics-line" data-time="${line[0]}" data-index="${idx}">${line[1]}</div>`)
          .join('');
      } else {
        lyricsContent.innerHTML = 'Lirik belum tersedia';
      }
    }

    function formatTime(seconds) {
      if (isNaN(seconds)) return '0:00';
      const mins = Math.floor(seconds/60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateLyrics() {
      const currentTime = audioPlayer.currentTime;
      const song = songs[currentSongIndex];
      const lyricsLines = document.querySelectorAll('.lyrics-line');
      let activeIndex = -1;
      for (let i=0;i<song.lyrics.length;i++){
        if (currentTime >= song.lyrics[i][0]) activeIndex = i;
        else break;
      }
      lyricsLines.forEach((line, idx) => {
        line.classList.remove('active','passed','visible');
        if (idx === activeIndex - 1 || idx === activeIndex || idx === activeIndex + 1) line.classList.add('visible');
        if (idx === activeIndex) line.classList.add('active');
        else if (idx < activeIndex) line.classList.add('passed');
      });
    }

    playBtn.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play().catch(()=>{ /* autoplay blocked on some devices */ });
        playBtn.textContent = '⏸';
        // fade out backsound
        fadeOutBacksound();
      } else {
        audioPlayer.pause();
        playBtn.textContent = '▶';
      }
    });

    prevBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong(currentSongIndex);
      audioPlayer.play().catch(()=>{});
      playBtn.textContent = '⏸';
      fadeOutBacksound();
    });

    nextBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      audioPlayer.play().catch(()=>{});
      playBtn.textContent = '⏸';
      fadeOutBacksound();
    });

    audioPlayer.addEventListener('timeupdate', () => {
      if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progress.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        updateLyrics();
      }
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
      durationEl.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('ended', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      audioPlayer.play().catch(()=>{});
    });

    progressBar.addEventListener('click', (e) => {
      if (!audioPlayer.duration) return;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    });

    // Load first song initially
    loadSong(currentSongIndex);

    /* =========================
       Backsound autoplay + fade out
       - try to autoplay on load; browsers might block autoplay with sound.
       - set low initial volume
       ========================= */
    const backsound = document.getElementById('backsound');
    backsound.volume = 0.18; // lembut
    backsound.loop = true;
    backsound.preload = 'auto';

    // try to autoplay backsound after user gesture fallback
    function tryPlayBacksound() {
      backsound.play().catch(() => {
        // autoplay may be blocked; do nothing — it will play after user interaction if needed
      });
    }
    // attempt early play
    tryPlayBacksound();

    // also try to play when user interacts anywhere (some browsers require gesture)
    function onFirstUserGesture() {
      tryPlayBacksound();
      window.removeEventListener('pointerdown', onFirstUserGesture);
      window.removeEventListener('keydown', onFirstUserGesture);
    }
    window.addEventListener('pointerdown', onFirstUserGesture);
    window.addEventListener('keydown', onFirstUserGesture);

    // Fade out function: smoothly reduce volume then pause
    function fadeOutBacksound(duration = 700) {
      if (!backsound || backsound.paused) return;
      const startVol = backsound.volume;
      const start = performance.now();
      function step(now) {
        const t = Math.min(1, (now - start) / duration);
        backsound.volume = startVol * (1 - t);
        if (t < 1) requestAnimationFrame(step);
        else {
          try { backsound.pause(); backsound.currentTime = 0; } catch(e){}
        }
      }
      requestAnimationFrame(step);
    }

    /* Accessibility: pause backsound when page visibility hidden */
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (!backsound.paused) backsound.pause();
      } else {
        // try resume (only if user hasn't started main audio)
        if (audioPlayer.paused) tryPlayBacksound();
      }
    });

    /* Ensure fade-in for video containers (apply 'visible' class when observed earlier) */
    document.querySelectorAll('.video-container').forEach(v => {
      // set small delay using --delay if present
      const delay = parseFloat(getComputedStyle(v).getPropertyValue('--delay')) || 0;
      v.style.transitionDelay = `${delay}s`;
    });

    // End of script

      document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              } else {
                entry.target.classList.remove("visible");
              }
            });
          },
          { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(
          ".page-vidio .video-container, .page-music .music-player, .page-music .lyrics-box"
        );

        elements.forEach((el) => {
          el.classList.add("scroll-fade");
          observer.observe(el);
        });
      });

      function createHeart() {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.textContent = ["💖", "❤️", "💕", "💗", "💝"][
          Math.floor(Math.random() * 5)
        ];
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        document.getElementById("floatingHearts").appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
      }

      function createHeartBurst() {
        const burstCount = Math.floor(Math.random() * 11) + 5;
        for (let i = 0; i < burstCount; i++) {
          setTimeout(() => createHeart(), i * 20);
        }
      }

      window.createHeartBurst = createHeartBurst;
      setInterval(createHeartBurst, 2000);
      const envelopeWrapper = document.getElementById("envelopeWrapper");
      const messageOverlay = document.getElementById("messageOverlay");
      const closeBtn = document.getElementById("closeBtn");

      // Buka surat dan tampilkan message
      envelopeWrapper.addEventListener("click", () => {
        envelopeWrapper.classList.add("opened");

        setTimeout(() => {
          messageOverlay.classList.add("active");
        }, 800);
      });

      // Tutup message box
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        messageOverlay.classList.remove("active");

        setTimeout(() => {
          envelopeWrapper.classList.remove("opened");
        }, 400);
      });

      // Tutup saat klik overlay
      messageOverlay.addEventListener("click", (e) => {
        if (e.target === messageOverlay) {
          messageOverlay.classList.remove("active");
          setTimeout(() => {
            envelopeWrapper.classList.remove("opened");
          }, 400);
        }
      });
    