(function () {
  const lectures = [
    {
      number: 1,
      title: "CSS Review",
      date: "Februray 7, 2026 - [2026/02/07]",
      link: "https://najah.zoom.us/rec/share/GfE-yw1L3OrrpK7-4_NmH1Y3TwqD2L9-RE25ZGmRzAyy_fQp3EruBz7EmFxIPZs.f6yiy4x49yTmpgh8?startTime=1770466561000",
    },
    {
      number: 2,
      title: "Intro To BootStrap",
      date: "February 14, 2026 - [2026/02/14]",
      link: "https://najah.zoom.us/rec/share/jnXrUs1vDCTF4bRG0u16ZXqkDj1YrtQehoxVa2Ew5Ub48dmpmYC-75fMTHrUCfCi.45mSQeHfV4mw-sJD",
    },
    {
      number: 3,
      title: "React Project Bootstrap",
      date: "February 21, 2026 - [2026/02/21]",
      link: "https://najah.zoom.us/rec/share/7LRQXY2UVmUPSsKy1CGQSZcBMBHV3ytzP3WPhrN10jWZZxvfjTk7bTBpKIPqD6b_.JC_ZhQcYJ_AnfVmu",
    },
    {
      number: 4,
      title: "Import Vs. Require",
      date: "March 1, 2026 - [2026/03/01]",
      link: "https://najah.zoom.us/rec/play/i_cV4PdIHhkvTe6BQpdP_ZTJgqVLvc-HzaQJjQdWLXVQ7LXCrk9OmTTt67cMD9HKwfHPK_b2mYHsZJ2e.Ub-_vFTDfuTBlhVH?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fnajah.zoom.us%2Frec%2Fshare%2F3Xel1XxLfGbRfmLXL_6y4lkHfo3B3DHZxlm2fSU-pmNyiH1silzrjMYjBRPKV92r.Tso4KuNnG_EYph1h",
    },
    {
      number: 5,
      title: "Web Server & Versions",
      date: "March Mar 10, 2026 - [2026/03/10]",
      link: "https://najah.zoom.us/rec/play/iCs7ng-5gt39DkIOay0NP0CDi6cvbmsjDWjcNZNTDUNqySTPoe5309SylRzRpEXAoh8qYm4OBeWqc7gn.nLEEW1qcAUpH50mW?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fnajah.zoom.us%2Frec%2Fshare%2FbvRwZDo4JCzZ7Ok0nGcUopq6B-Aul1kcbj0qNU67GqXh1jOthjoVdJBnN5ApHsMB.6anX_3vDtdh3RY-t",
    },
    {
      number: 6,
      title: "Versions Constraints",
      date: "March Mar 15, 2026 - [2026/03/15]",
      link: "https://najah.zoom.us/rec/play/n5huF3EDZ_UvvobanlkfDYPWSL5_QmZFFQbMGphmLTivdb3e5YfPskfhmrA0cqj-bfzLbigUoZOPEsR1.uFOMpkHSI17EnxJD?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fnajah.zoom.us%2Frec%2Fshare%2Fool2OfLz6-yvaxJw0ith0VzrgIskfS3c1B72rJbWNVVgR9ocSqph6OvW8vo-lZjc.Kwaf0k5q1_NpdHlJ",
    },
    {
      number: 7,
      title: "Moduels & Express",
      date: "March Mar 17, 2026 - [2026/03/17]",
      link: "https://youtu.be/1uypE_42kuc",
    },
      {
      number: 8,
      title: "DataBase",
      date: "March Mar 24, 2026 - [2026/03/24]",
      link: "https://najah.zoom.us/rec/play/VPjZkLgkWOjY0M7wtVU4elCsoFqGJhS04iH31OWEB6rC4r6M7EKfh5tpy0z0f_8h85RkrDyuDC92ZyrD.1STR5SnVj8FabUUX?eagerLoadZvaPages=sidemenu.billing.plan_management&accessLevel=meeting&canPlayFromShare=true&from=share_recording_detail&continueMode=true&oldStyle=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fnajah.zoom.us%2Frec%2Fshare%2FC1nDGd1iNVHSgnIDA3cloEFIJ0fuFAa_8T1uiDsc3BgAdPXFwTxSykR4UoXD2C6s.4_KFEa3PkPFjx8Uw",
    },
  ];

  function renderLectureCards() {
    const grid = document.getElementById("cards-grid");
    if (!grid) return;

    grid.innerHTML = "";

    lectures.forEach((lect) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="lecture-header">
          <div class="lecture-circle">${lect.number}</div>
          <p class="title">${lect.title}</p>
        </div>
        <p class="date">${lect.date}</p>
        <button class="btn" data-link="${lect.link}">🎬 Watch recording</button>
      `;

      const button = card.querySelector(".btn");
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const link = button.getAttribute("data-link");
        if (link) window.open(link, "_blank", "noopener,noreferrer");
        else alert("Recording link not available.");
      });

      grid.appendChild(card);
    });

    document.getElementById("lecture-count").textContent = lectures.length;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderLectureCards);
  } else {
    renderLectureCards();
  }

  // ---------- BACKGROUND "CODE RAIN" ----------
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");

  let width,
    height,
    columns = [];
  const fontSize = 18;
  const chars =
    "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\|=+-_*&^%$#@!~";

  function initCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const colCount = Math.ceil(width / fontSize);
    columns = Array.from({ length: colCount }, () =>
      Math.floor(Math.random() * -height),
    );
  }

  function drawRain() {
    ctx.fillStyle = "rgba(8, 12, 18, 0.07)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#8dd0ff";
    ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
    ctx.textAlign = "center";

    for (let i = 0; i < columns.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize + fontSize / 2;
      const y = columns[i];
      ctx.fillText(char, x, y);
      columns[i] =
        y > height + fontSize
          ? -fontSize * Math.random() * 10
          : y + fontSize * 0.5;
    }
    requestAnimationFrame(drawRain);
  }

  window.addEventListener("resize", initCanvas);
  initCanvas();
  drawRain();
})();
