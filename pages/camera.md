---
layout: default_page
language: pt-br
permalink: /camera
title: Câmera Ao Vivo - Poços de Caldas
description: Acompanhe uma vista ao vivo de Poços de Caldas através da câmera.
image: https://fabiohcnobre.dev.br/assets/img/logo2.png
---

<section id="camera">
  <div class="user-details">
    <h1>Câmera Ao Vivo - Poços de Caldas</h1>
    <p>Uma vista ao vivo da cidade de Poços de Caldas, direto de uma câmera própria.</p>
  </div>

  <div class="user-details" style="margin-top: 20px;">
    <div id="camera-player-wrapper" style="max-width: 900px; margin: 0 auto; position: relative; background: #000; border-radius: 8px; overflow: hidden; aspect-ratio: 16 / 9;">
      <video id="camera-stream" style="width: 100%; height: 100%; display: none;" controls autoplay muted playsinline></video>
      <div id="camera-placeholder" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; color: #ccc; text-align: center; padding: 20px;">
        <i class="fa-solid fa-video-slash" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
        <p style="margin: 0;">Câmera indisponível no momento.</p>
        <p style="margin: 0; font-size: 0.9rem; opacity: 0.7;">Volte em breve para ver Poços de Caldas ao vivo.</p>
      </div>
    </div>
  </div>

  <div class="user-details" style="margin-top: 40px;">
    <a href="/" class="project-link">← Voltar para a página inicial</a>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/hls.js@1.5.15/dist/hls.min.js"></script>
<script>
  // Defina a URL do stream (HLS .m3u8) aqui quando a câmera estiver disponível.
  // Ex: const CAMERA_STREAM_URL = "https://meu-servidor/camera-pocos-de-caldas/index.m3u8";
  const CAMERA_STREAM_URL = "";

  (function () {
    if (!CAMERA_STREAM_URL) return;

    const video = document.getElementById("camera-stream");
    const placeholder = document.getElementById("camera-placeholder");

    function showStream() {
      placeholder.style.display = "none";
      video.style.display = "block";
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = CAMERA_STREAM_URL;
      video.addEventListener("loadedmetadata", showStream);
    } else if (window.Hls && Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(CAMERA_STREAM_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, showStream);
    }
  })();
</script>
