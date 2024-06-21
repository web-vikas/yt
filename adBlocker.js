/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/ytpro@3.3.52/script.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var YTProVer = "3.3";
if (null == ytprof1 && null == ytprov1)
  var ytprof1 = "",
    ytprov1 = "";
var ytoldV = "",
  isF = !1,
  isAP = !1,
  isM = !1,
  sTime = [];
function ytproGetURL(o) {
  var sig = new URLSearchParams(o).get("s"),
    url = new URLSearchParams(o).get("url");
  return (
    (sig = eval(ytprov1 + ytprof1 + "('" + decodeURIComponent(sig) + "');")),
    (url = decodeURIComponent(url)),
    url + "&sig=" + sig
  );
}
(null != localStorage.getItem("autoSpn") &&
  null != localStorage.getItem("fitS")) ||
  (localStorage.setItem("autoSpn", "true"),
  localStorage.setItem("fitS", "true"),
  localStorage.setItem("fzoom", "false")),
  "true" == localStorage.getItem("fzoom") &&
    document.getElementsByName("viewport")[0].setAttribute("content", ""),
  (ytoldV =
    window.location.pathname.indexOf("shorts") > -1
      ? window.location.pathname
      : new URLSearchParams(window.location.search).get("v"));
var c = "#000",
  d = "#f2f2f2",
  dislikes = "...";
(document.cookie.indexOf("PREF") < 0 || document.cookie.indexOf("f6=") < 0) &&
  (document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, (e) =>
    location.hostname
      .split(/\.(?=[^\.]+\.)/)
      .reduceRight(
        (e, t, n, i) => (n ? (i[n] = "." + t + e) : ((i[n] = ""), i)),
        ""
      )
      .map((t) => (document.cookie = `${e}=;max-age=0;path=/;domain=${t}`))
  ),
  (document.cookie = "PREF=f6=400&f7=100;"),
  (window.location.href = window.location.href)),
  document.cookie.indexOf("f6=400") > -1
    ? ((c = "#fff"), (d = "rgba(255,255,255,0.1)"))
    : ((c = "#000"), (d = "rgba(0,0,0,0.1)"));
var downBtn = `<svg xmlns="http://www.w3.org/2000/svg" height="18" fill="${c}" viewBox="0 0 24 24" width="18" focusable="false"><path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path></svg>`,
  utils = {
    between: (e, t, n) => {
      let i;
      if (t instanceof RegExp) {
        const n = e.match(t);
        if (!n) return "";
        i = n.index + n[0].length;
      } else {
        if (((i = e.indexOf(t)), -1 === i)) return "";
        i += t.length;
      }
      return (
        (i = (e = e.slice(i)).indexOf(n)), -1 === i ? "" : (e = e.slice(0, i))
      );
    },
    cutAfterJSON: (e) => {
      let t, n;
      if (
        ("[" === e[0]
          ? ((t = "["), (n = "]"))
          : "{" === e[0] && ((t = "{"), (n = "}")),
        !t)
      )
        throw new Error(
          `Can't cut unsupported JSON (need to begin with [ or { ) but got: ${e[0]}`
        );
      let i,
        a = !1,
        o = !1,
        r = 0;
      for (i = 0; i < e.length; i++)
        if ('"' !== e[i] || o) {
          if (
            ((o = "\\" === e[i] && !o),
            !a && (e[i] === t ? r++ : e[i] === n && r--, 0 === r))
          )
            return e.substr(0, i + 1);
        } else a = !a;
      throw Error(
        "Can't cut unsupported JSON (no matching closing bracket found)"
      );
    },
  },
  extractFunctions = (e) => {
    (() => {
      const t = utils.between(e, 'a.set("alr","yes");c&&(c=', "(decodeURIC");
      if (t && t.length) {
        const n = `${t}=function(a)`,
          i = e.indexOf(n);
        if (i >= 0) {
          const a = e.slice(i + n.length);
          let o = `var ${n}${utils.cutAfterJSON(a)}`;
          (o = `${((t) => {
            const n = utils.between(t, 'a=a.split("");', ".");
            if (!n) return "";
            const i = `var ${n}={`,
              a = e.indexOf(i);
            if (a < 0) return "";
            const o = e.slice(a + i.length - 1);
            return `var ${n}=${utils.cutAfterJSON(o)}`;
          })(o)};${o};`),
            (ytprof1 = t),
            (ytprov1 = o);
        }
      }
    })();
  };
function insertAfter(e, t) {
  try {
    e.parentNode.insertBefore(t, e.nextSibling);
  } catch {}
}
setInterval(() => {
  if (null == document.getElementById("setDiv")) {
    var e = document.createElement("div");
    e.setAttribute(
      "style",
      "\nheight:30px;width:30px;\nz-index:9999999999;\nfont-size:22px;\ntext-align:center;line-height:35px;\n"
    ),
      e.setAttribute("id", "setDiv");
    var t = document.createElement("div");
    (t.innerHTML =
      '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 22 22" width="22"  id="hSett"><path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"></path></svg>\n'),
      e.appendChild(t),
      insertAfter(document.getElementsByTagName("ytm-home-logo")[0], e),
      null != document.getElementById("hSett") &&
        document
          .getElementById("hSett")
          .addEventListener("click", function (e) {
            window.location.hash = "settings";
          });
  }
}, 50);
for (
  var scripts = document.getElementsByTagName("script"), i = 0;
  i < scripts.length;
  i++
)
  scripts[i].src.indexOf("/base.js") > 0 &&
    fetch(scripts[i].src)
      .then((e) => e.text())
      .then((e) => extractFunctions(e));
function getDislikesInLocale(e) {
  var t = e;
  if (e < 1e3) t = e;
  else {
    const n = Math.floor(Math.log10(e) - 2),
      i = n + (n % 3 ? 1 : 0);
    t = Math.floor(e / 10 ** i) * 10 ** i;
  }
  let n;
  if (document.documentElement.lang) n = document.documentElement.lang;
  else if (navigator.language) n = navigator.language;
  else
    try {
      n = new URL(
        Array.from(document.querySelectorAll("head > link[rel='search']"))
          ?.find((e) => e?.getAttribute("href")?.includes("?locale="))
          ?.getAttribute("href")
      )?.searchParams?.get("locale");
    } catch {
      n = "en";
    }
  return Intl.NumberFormat(n, {
    notation: "compact",
    compactDisplay: "short",
  }).format(t);
}
function skipSponsor() {
  var e = document.createElement("div");
  e.setAttribute(
    "style",
    "height:3px;pointer-events:none;width:100%;background:transparent;position:fixed;z-index:99999999;"
  ),
    e.setAttribute("id", "sDiv");
  var t = document.getElementsByClassName("video-stream")[0].duration;
  for (var n in sTime) {
    var i = document.createElement("div"),
      a = sTime[n];
    i.setAttribute(
      "style",
      `height:3px;width:${
        (100 / t) * (a[1] - a[0])
      }%;background:#0f8;position:fixed;z-index:99999999;left:${
        (100 / t) * a[0]
      }%;`
    ),
      e.appendChild(i);
  }
  if (null == document.getElementById("sDiv"))
    if (
      null != document.getElementsByClassName("YtChapteredProgressBarHost")[0]
    )
      document
        .getElementsByClassName("YtChapteredProgressBarHost")[0]
        .appendChild(e);
    else
      try {
        document
          .getElementsByClassName("YtProgressBarProgressBarLine")[0]
          .appendChild(e);
      } catch {}
}
async function fDislikes() {
  var e = "",
    t = new URL(window.location.href);
  t.pathname.indexOf("shorts") > -1
    ? (e = t.pathname.substr(8, t.pathname.length))
    : t.pathname.indexOf("watch") > -1 && (e = t.searchParams.get("v")),
    fetch("https://returnyoutubedislikeapi.com/votes?videoId=" + e)
      .then((e) => e.json())
      .then((e) => {
        "dislikes" in e &&
          (dislikes = getDislikesInLocale(parseInt(e.dislikes)));
      })
      .catch((e) => {});
}
if (
  (fDislikes(),
  window.location.pathname.indexOf("watch") > -1 &&
    (fetch(
      "https://sponsor.ajay.app/api/skipSegments?videoID=" +
        new URLSearchParams(window.location.search).get("v")
    )
      .then((e) => e.json())
      .then((e) => {
        for (var t in e) {
          var n = e[t].segment;
          sTime.push(n);
        }
      })
      .catch((e) => {}),
    (document.getElementsByClassName("video-stream")[0].ontimeupdate = () => {
      var e = document.getElementsByClassName("video-stream")[0].currentTime;
      for (var t in sTime) {
        var n = sTime[t];
        Math.floor(e) == Math.floor(n[0]) &&
          "true" == localStorage.getItem("autoSpn") &&
          ((document.getElementsByClassName("video-stream")[0].currentTime =
            n[1]),
          addSkipper(n[0]));
      }
    }),
    setInterval(skipSponsor, 50)),
  window.location.pathname.indexOf("watch") > -1 ||
    window.location.pathname.indexOf("shorts") > -1)
)
  var unV = setInterval(() => {
    var e = document
      .getElementsByClassName("video-stream")[0]
      .getBoundingClientRect();
    e.height > e.width ? Android.fullScreen(!0) : Android.fullScreen(!1),
      (document.getElementsByClassName("video-stream")[0].muted = !1),
      document.getElementsByClassName("video-stream")[0].muted ||
        clearInterval(unV);
  }, 5);
function addSkipper(e) {
  var t = document.createElement("div");
  t.setAttribute(
    "style",
    `\nheight:50px;${
      screen.width > screen.height ? "width:50%;" : "width:80%;"
    }overflow:auto;background:rgba(130,130,130,.3);\nbackdrop-filter:blur(6px);\nposition:absolute;bottom:40px;\nline-height:50px;\nleft:calc(15% / 2 );padding-left:10px;padding-right:10px;\nz-index:99999999999999;text-align:center;border-radius:25px;\ncolor:white;text-align:center;\n`
  ),
    (t.innerHTML = `<span style="height:30px;line-height:30px;margin-top:10px;display:block;font-family:monospace;font-size:16px;float:left;">Skipped Sponsor</span>\n<span style="height:30px;line-height:44px;float:right;padding-right:30px;margin-top:10px;display:block;padding-left:30px;border-left:1px solid white;">\n<svg onclick="this.parentElement.parentElement.remove();document.getElementsByClassName('video-stream')[0].currentTime=${
      e + 1
    };" xmlns="http://www.w3.org/2000/svg" width="23" height="23" style="margin-top:0px;" fill="currentColor" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>\n<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>\n</svg>\n<svg onclick="this.parentElement.parentElement.remove();" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:30px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>`),
    document.getElementById("player-control-container").appendChild(t),
    setTimeout(() => {
      t.remove();
    }, 5e3);
}
function sty(e, t) {
  var n = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "550",
    height: "65%",
    width: "80px",
    borderRadius: "20px",
    background: d,
    fontSize: "12px",
    marginRight: "5px",
    textAlign: "center",
  };
  for (x in n) e.style[x] = n[x];
}
async function ytproSettings() {
  var e = document.createElement("div"),
    t = document.createElement("div");
  e.setAttribute("id", "settingsprodiv"),
    t.setAttribute("id", "ssprodivI"),
    e.setAttribute(
      "style",
      "\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.4);\nz-index:9999;\n"
    ),
    e.addEventListener("click", function (e) {
      e.target == t || t.contains(e.target) || history.back();
    }),
    t.setAttribute(
      "style",
      "\nheight:65%;width:85%;overflow:auto;background:#0f0f0f;\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;color:white;text-align:center;\n"
    ),
    (t.innerHTML =
      "<style>\n#settingsprodiv a{text-decoration:underline;color:white;} #settingsprodiv li{list-style:none; display:flex;align-items:center;justify-content:center;color:#fff;border-radius:25px;padding:10px;background:#000;margin:5px;}\n#ssprodivI div{\nheight:10px;\nwidth:calc(100% - 20px);\npadding:10px;\nfont-size:1.35rem;\nfont-family:monospace;\ntext-align:left;\ndisplay:block;\n}\n#ssprodivI div span{\ndisplay:block;\nheight:15px;\nwidth:30px;\nborder-radius:20px;\nfloat:right;\nposition:relative;\nbackground:rgba(255,0,0,.5);\n}\n#ssprodivI div span b{\ndisplay:block;\nheight:20px;\nwidth:20px;\nposition:absolute;\nright:-6px;\ntop:-2px;\nborder-radius:50px;\nbackground:rgba(255,0,220,5);\n}\n#ssprodivI div input::placeholder{color:white;}\n#ssprodivI div input,#ssprodivI div button{\nheight:30px;\nbackground:rgba(255,255,255,.1);\nwidth:100%;\nborder:0;\nborder-radius:20px;\npadding:10px;\nfont-size:1.25rem;\n}\n#ssprodivI div button{\nbackground:linear-gradient(120deg,#038,#0a3);\nfont-size:1.25rem;\nwidth:48%;\nborder-radius:50px;\npadding:0;\ncolor:white;\n}\n\n</style>"),
    (t.innerHTML += `<b style='font-size:18px' >YT PRO Settings</b>\n<span style="font-size:10px">v${YTProVer}</span>\n<br><br>\n<div><input type="url" placeholder="Enter Youtube URL" onkeyup="searchUrl(this,event)"></div>\n<br>\n<div style="text-align:center" ><button onclick="showHearts();">Hearted Videos</button><button style="margin-left:10px" onclick="${
      parseInt(Android.getInfo()) < parseInt(YTProVer)
        ? "alert('New version available.\\n\\nPlease Update Your YT PRO');"
        : "alert('YT PRO is upto date');"
    }fetch('https://cdn.jsdelivr.net/npm/ytpro', {cache: 'reload'});">Check for Updates</button></div>\n<br>\n<div>Autoskip Sponsors <span onclick="sttCnf(this,'autoSpn');" style="${sttCnf(
      0,
      0,
      "autoSpn"
    )}" ><b style="${sttCnf(
      0,
      1,
      "autoSpn"
    )}"></b></span></div>\n<br>\n<div>Auto FitScreen <span onclick="sttCnf(this,'fitS');" style="${sttCnf(
      0,
      0,
      "fitS"
    )}" ><b style="${sttCnf(
      0,
      1,
      "fitS"
    )}" ></b></span></div> \n<br>\n<div>Force Zoom <span onclick="sttCnf(this,'fzoom');" style="${sttCnf(
      0,
      0,
      "fzoom"
    )}" ><b style="${sttCnf(
      0,
      1,
      "fzoom"
    )}" ></b></span></div> \n<br>\n<div>Hide Shorts <span onclick="sttCnf(this,'shorts');" style="${sttCnf(
      0,
      0,
      "shorts"
    )}" ><b style="${sttCnf(
      0,
      1,
      "shorts"
    )}" ></b></span></div> \n<br>\n<div style="display:flex;justify-content:center;font-family:cursive;text-align:center;font-size:2.25rem;font-weight:bolder;color:#0f8;">Made with \n&#x2665; by Prateek Chaubey</div>\n<br><br>\n<div style="font-size:1.25rem;"><b style="font-weight:bold">Disclaimer</b>: This is an unofficial OSS Youtube Mod , all the logos and brand names are property of Google LLC.<br>\nYou can get the source code at <a href="#" onclick="Android.oplink('https://github.com/prateek-chaubey/YTPRO')" > https://github.com/prateek-chaubey/YTPRO</a>\n<br><br><center>\n<a href="#" onclick="Android.oplink('https://github.com/prateek-chaubey/YTPRO/issues')" >Report Bugs</a>\n</center></div>`),
    document.body.appendChild(e),
    e.appendChild(t);
}
function searchUrl(e, t) {
  (13 !== t.keyCode && "Enter" !== t) || (window.location.href = e.value);
}
function sttCnf(e, t, n) {
  if ("string" == typeof n)
    return "true" != localStorage.getItem(n)
      ? 1 == t
        ? "background:rgba(255,255,255,.7);left:-6px;"
        : "background:rgba(255,255,255,.1)"
      : 1 == t
      ? "background:rgba(255,50,50,1);left:auto;right:-6px;"
      : "background:rgba(255,50,50,.5)";
  "true" == localStorage.getItem(t)
    ? (localStorage.setItem(t, "false"),
      (e.style.background = "rgba(255,255,255,.1)"),
      (e.children[0].style.left = "-6px"),
      (e.children[0].style.background = "rgba(255,255,255,.7)"))
    : (localStorage.setItem(t, "true"),
      (e.style.background = "rgba(255,50,50,.5)"),
      (e.children[0].style.left = "auto"),
      (e.children[0].style.right = "-6px"),
      (e.children[0].style.background = "rgba(255,50,50,7)")),
    "false" == localStorage.getItem("fzoom")
      ? document
          .getElementsByName("viewport")[0]
          .setAttribute(
            "content",
            "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,"
          )
      : document.getElementsByName("viewport")[0].setAttribute("content", "");
}
function formatFileSize(e) {
  var t = parseInt(e);
  for (var n = 0; t > 1024; n++) t /= 1024;
  return ` | ${t.toFixed(1)} ${["B", "KB", "MB", "GB", "TB", "PB"][n]}`;
}
async function ytproDownVid() {
  var e = document.createElement("div"),
    t = document.createElement("div");
  t.setAttribute("id", "downytprodiv"),
    e.setAttribute("id", "outerdownytprodiv"),
    e.setAttribute(
      "style",
      "\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.4);\nz-index:99999999999999;\n"
    ),
    e.addEventListener("click", function (e) {
      e.target != t && history.back();
    }),
    t.setAttribute(
      "style",
      "\nheight:50%;width:85%;overflow:auto;background:#0f0f0f;\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;color:white;text-align:center;\n"
    ),
    document.body.appendChild(e),
    e.appendChild(t);
  var n = "";
  (n =
    window.location.pathname.indexOf("shorts") > -1
      ? window.location.pathname.substr(8, window.location.pathname.length)
      : new URLSearchParams(window.location.search).get("v")),
    (t.innerHTML = "Loading...");
  var i = await fetch("https://youtube-downloader.deno.dev/video?id=" + n);
  i = await i.json();
  var a = i.video.thumbnail?.thumbnails,
    o = i.stream.formats,
    r = i.stream.adaptiveFormats,
    l = i.captions?.playerCaptionsTracklistRenderer?.captionTracks,
    s = i.video.title
      .replaceAll("|", "")
      .replaceAll("\\", "")
      .replaceAll("?", "")
      .replaceAll("*", "")
      .replaceAll("<", "")
      .replaceAll("/", "")
      .replaceAll(":", "")
      .replaceAll('"', "")
      .replaceAll(">", "");
  for (var d in ((t.innerHTML =
    "<style>#downytprodiv a{text-decoration:none;color:white;} #downytprodiv li{list-style:none; display:flex;align-items:center;justify-content:center;color:#fff;border-radius:25px;padding:8px;background:rgb(10,0,0);margin:5px;box-shadow:0px 0px 2px rgb(236,84,232);margin-top:8px}</style>"),
  (t.innerHTML += "Select Avilaible Formats<ul id='listurl'>"),
  o))
    t.innerHTML += `<li data-ytprotit="${s}"  style="background:#001;box-shadow:0px 0px 2px rgb(70,84,232);"  onclick="YTDownVid(this,'.mp4')"  data-ytprourl="${
      o[d].url
    }">\n${downBtn}<span style="margin-left:10px;"  >${
      o[d].qualityLabel
    } ${formatFileSize(
      (o[d].bitrate * (o[d].approxDurationMs / 1e3)) / 8
    )} </span></li>`;
  for (d in r)
    r[d].mimeType.indexOf("audio") > -1 &&
      (t.innerHTML += `<li data-ytprotit="${s}"  onclick="YTDownVid(this,'.mp3')"  data-ytprourl="${
        r[d].url
      }">\n${downBtn}<span style="margin-left:10px;"  >Audio | ${r[
        d
      ].audioQuality.replace("AUDIO_QUALITY_", "")}${formatFileSize(
        r[d].contentLength
      )} \n</span></li>`);
  for (d in ((t.innerHTML +=
    "<br>Thumbnails<br><br><style>.thu{height:80px;border-radius:10px;}.thu img{max-height:97%;max-width:70%;border-radius:10px;border:1px solid silver;}</style>"),
  a))
    t.innerHTML += `<li data-ytprotit="${
      s + Date.now()
    }"  onclick="YTDownVid(this,'.png')" style="box-shadow:0px 0px 2px rgb(70,234,232);" class="thu" data-ytprourl="${
      a[d].url
    }">\n<img src="${
      a[d].url
    }"><br>\n<span style="margin-left:30px;display:flex;align-items:center;justify-content:center;"  >${downBtn}<span style="margin-left:10px;"  >${
      a[d].height
    } &#x2715; ${a[d].width}\n</span></span></li>`;
  if (l && l.length)
    for (var d in ((t.innerHTML +=
      "<br>Captions<br><br><style>cp{display:flex;align-items:center;width:100%;height:30px}c{height:45px;width:50px;padding-top:5px;background:rgba(255,255,255,.1);border-radius:10px;margin-left:10px;display:block}</style>"),
    l))
      t.innerHTML += `<cp><span style="width:100px;text-align:left">${l[d].name.simpleText}</span> <div style="position:absolute;right:10px;display:flex"><c onclick="downCap('${l[d].baseUrl}&fmt=xml','${s}.xml')" >${downBtn} <br>.xml</c><c onclick="downCap('${l[d].baseUrl}&fmt=vtt','${s}.vtt')">${downBtn} <br>.vtt</c><c onclick="downCap('${l[d].baseUrl}&fmt=srv1','${s}.srv1')">${downBtn} <br>.srv1</c><c onclick="downCap('${l[d].baseUrl}&fmt=ttml','${s}.ttml')">${downBtn} <br>.ttml</c></div></cp><br><br>`;
}
function downCap(e, t) {
  Android.downvid(t, e, "plain/text");
}
function YTDownVid(e, t) {
  var n = "";
  ".png" == t
    ? (n = "image/png")
    : ".mp4" == t
    ? (n = "video/mp4")
    : ".mp3" == t && (n = "audio/mp3"),
    Android.downvid(
      e.getAttribute("data-ytprotit") + t,
      e.getAttribute("data-ytprourl"),
      n
    );
}
function pkc() {
  if (window.location.href.indexOf("youtube.com/watch") > -1) {
    try {
      var e = document.getElementsByTagName("dislike-button-view-model")[0]
        .children[0].children[0];
      (e.children[0].style.width = "80px"),
        (e.children[0].children[0].style.position = "absolute"),
        (e.children[0].children[0].style.left = "15px"),
        null == e.children[0].children[2]
          ? (e.children[0].innerHTML += `<span style="margin-left:20px">${dislikes}<span>`)
          : (e.children[0].children[2].innerHTML = dislikes);
    } catch {}
    if (null == document.getElementById("ytproMainDivE")) {
      var t = document.createElement("div");
      t.setAttribute("id", "ytproMainDivE"),
        t.setAttribute(
          "style",
          "\nheight:50px;width:100%;display:block;overflow:auto;\n"
        ),
        insertAfter(
          document.getElementsByClassName("slim-video-action-bar-actions")[0],
          t
        );
      var n = document.createElement("div");
      n.setAttribute(
        "style",
        "\nheight:50px;width:130%;display:flex;overflow:auto;\nalign-items:center;justify-content:center;padding-left:20px;padding-right:20px;\n"
      ),
        t.appendChild(n);
      var i = document.createElement("div");
      sty(i),
        isHeart()
          ? (i.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#f00" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg><span style="margin-left:8px">Heart<span>')
          : (i.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg><span style="margin-left:8px">Heart<span>`),
        n.appendChild(i),
        i.addEventListener("click", () => {
          ytProHeart(i);
        });
      var a = document.createElement("div");
      sty(a),
        (a.style.width = "110px"),
        (a.innerHTML = `${downBtn
          .replace('width="18"', 'width="24"')
          .replace(
            'height="18"',
            'height="24"'
          )}<span style="margin-left:2px">Download<span>`),
        n.appendChild(a),
        a.addEventListener("click", function () {
          window.location.hash = "download";
        });
      var o = document.createElement("div");
      sty(o),
        (o.style.width = "110px"),
        (o.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}"  viewBox="0 0 16 16">\n<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>\n<path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z"/>\n</svg>\n<span style="margin-left:8px">PIP Mode<span>`),
        n.appendChild(o),
        o.addEventListener("click", function () {
          (isAP = !1), PIPlayer2();
        });
      var r = document.createElement("div");
      sty(r),
        (r.style.width = "110px"),
        (r.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"/>\n<path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"/>\n</svg>\n<span style="margin-left:8px">Minimize<span>'),
        n.appendChild(r),
        r.addEventListener("click", function () {
          var e = document.createElement("div");
          e.setAttribute(
            "style",
            "\nheight:118px;width:182px;background:rgba(130,130,130,.3);\nbackdrop-filter:blur(6px);\nposition:absolute;bottom:40px;\nline-height:50px;position:fixed;\nbottom:50px;\nleft:calc(5% / 2);padding-right:20px;\nz-index:99999999999999;text-align:center;border-radius:5px;\ncolor:white;text-align:center;\n"
          ),
            (e.innerHTML =
              '<span style="height:30px;position:absolute;right:-10px;top:-15px;display:block;z-index:999999999999999999;">\n<svg onclick="this.parentElement.parentElement.remove();" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:30px;" fill="#f24" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>');
          var t = document.createElement("video");
          t.setAttribute(
            "style",
            "position:fixed;top:5px;left:5px;height:108px;width:192px;z-index:999;"
          ),
            t.setAttribute("controls", "");
          var n =
            ytplayer.config.args.raw_player_response.streamingData.formats;
          "signatureCipher" in n[0]
            ? (t.src = ytproGetURL(n[0].signatureCipher))
            : (t.src = n[0].url),
            (t.currentTime =
              document.getElementsByClassName("video-stream")[0].currentTime),
            e.appendChild(t),
            t.play(),
            document.body.appendChild(e),
            history.pushState({}, "", "https://m.youtube.com/"),
            history.pushState({}, "", "https://m.youtube.com/"),
            history.back();
        });
      var l = document.createElement("div");
      sty(l),
        (l.style.width = "90px"),
        (l.innerHTML = `\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${c}" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>\n</svg>\n<span style="margin-left:8px">BG Play<span>`),
        n.appendChild(l),
        l.addEventListener("click", function () {
          ytproAudPlayer();
        }),
        "" == ytprof1.length && "" == ytprov1.length
          ? ((l.style.opacity = ".5"), (l.style.pointerEvents = "none"))
          : "" != ytprof1.length &&
            "" != ytprov1.length &&
            ((l.style.opacity = "1"), (l.style.pointerEvents = "auto"));
    }
    if (ytoldV != new URLSearchParams(window.location.search).get("v")) {
      try {
        document.getElementById("ytproMainAudDivE").remove();
      } catch {
        console.log("No Element Found");
      }
      (isAPlaying = !1),
        (ytoldV = new URLSearchParams(window.location.search).get("v")),
        (window.location.href = window.location.href);
    }
  } else if (window.location.href.indexOf("youtube.com/shorts") > -1) {
    if (null == document.getElementById("ytproMainSDivE")) {
      var s = document.createElement("div");
      s.setAttribute("id", "ytproMainSDivE"),
        s.setAttribute(
          "style",
          "width:50px;height:100px;position:absolute;display:block;right:10px;bottom:500px;"
        ),
        (ysDown = document.createElement("div")),
        ysDown.setAttribute(
          "style",
          "\nheight:50px;width:50px;text-align:center;line-height:65px;display:block;overflow:auto;\nbackground:rgba(0,0,0,.4);border-radius:50%;margin-bottom:25px;\n"
        ),
        (ysDown.innerHTML =
          downBtn
            .replace('width="18"', 'width="26"')
            .replace('height="18"', 'height="26"') +
          '<span style="position:absolute;bottom:5px;color:white;font-size:14px;left:-10px">Download<span>'),
        ysDown.addEventListener("click", function () {
          window.location.hash = "download";
        }),
        (ysHeart = document.createElement("div")),
        ysHeart.setAttribute(
          "style",
          "\nheight:50px;width:50px;text-align:center;line-height:65px;display:block;overflow:auto;\nbackground:rgba(0,0,0,.4);border-radius:50%;margin-top:8px;margin-bottom:0px;\n"
        ),
        isHeart()
          ? (ysHeart.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#f00" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg><span style="position:absolute;bottom:-70px;color:white;font-size:14px;left:7px">Heart<span>')
          : (ysHeart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="${c}" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg><span style="position:absolute;bottom:-70px;color:white;font-size:14px;left:7px">Heart<span>`),
        ysHeart.addEventListener("click", function () {
          ytProHeart(ysHeart);
        }),
        insertAfter(document.getElementsByClassName("carousel-wrapper")[0], s),
        s.appendChild(ysDown),
        s.appendChild(ysHeart);
    }
    try {
      document.querySelectorAll(
        '[aria-label="Dislike this video"]'
      )[0].nextElementSibling.children[0].innerHTML = dislikes;
    } catch {}
    document.getElementsByClassName("video-stream")[0].paused
      ? null != document.getElementById("ytproMainSDivE") &&
        (document.getElementById("ytproMainSDivE").style.bottom = "510px")
      : null != document.getElementById("ytproMainSDivE") &&
        (document.getElementById("ytproMainSDivE").style.bottom = "470px"),
      ytoldV != window.location.pathname &&
        (fDislikes(), (ytoldV = window.location.pathname));
  }
}
async function showHearts() {
  var e = document.createElement("div"),
    t = document.createElement("div");
  if (
    (t.setAttribute("id", "heartytprodiv"),
    e.setAttribute("id", "outerheartsdiv"),
    e.setAttribute(
      "style",
      "\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.4);\nz-index:99999999999999;\n"
    ),
    t.setAttribute(
      "style",
      "\nheight:50%;width:85%;overflow:auto;background:#0f0f0f;\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;color:white;text-align:center;\n"
    ),
    (t.innerHTML =
      "<style>#heartytprodiv a{text-decoration:none;color:white;} #heartytprodiv li{list-style:none; display:flex;align-items:center;color:#fff;border-radius:5px;padding:0px;background:#000;margin:5px;}</style>"),
    (t.innerHTML += "Hearted Videos<ul id='listurl'>"),
    (t.innerHTML +=
      "<style>.thum{height:70px;border-radius:5px;}.thum img{float:left;height:70px;width:125px;border-radius:5px;flex-shrink: 0;}</style>"),
    document.body.appendChild(e),
    e.appendChild(t),
    e.addEventListener("click", function (e) {
      event.composedPath().includes(t) || history.back();
    }),
    null == localStorage.getItem("hearts"))
  )
    t.innerHTML += "No Videos Found";
  else
    for (
      var n = JSON.parse(localStorage.getItem("hearts")),
        i = Object.keys(n).length - 1;
      i > -1;
      i--
    ) {
      var a = Object.keys(n)[i];
      (t.innerHTML += `<li class="thum" >\n<img onclick="window.location.href=('https://youtu.be/${a}');" src="${n[a].thumb}" ><br>\n<div style="width:calc(100% - 170px);margin-left:5px;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical; -webkit-line-clamp:3;overflow:hidden;text-overflow:ellipsis;" onclick="window.location.href=('https://youtu.be/${a}');" >${n[a].title}</div>\n<div style="width:calc(100% - (100% - 35px))">\n<svg onclick="remHeart(this,'${a}');" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:0px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>\n</div>\n</li>`),
        await new Promise((e) => setTimeout(e, 1));
    }
}
function remHeart(e, t) {
  if (localStorage.getItem("hearts")?.indexOf(t) > -1) {
    e.parentElement.parentElement.remove();
    var n = JSON.parse(localStorage.getItem("hearts") || "{}");
    delete n[t], localStorage.setItem("hearts", JSON.stringify(n));
  }
}
function ytProHeart(e) {
  var t =
    new URLSearchParams(window.location.search).get("v") ||
    window.location.pathname.replace("/shorts/", "");
  if (window.location.pathname.indexOf("shorts") > -1) {
    var n = document.getElementsByClassName("video-stream")[0],
      i = document.createElement("canvas");
    (i.style.width = "1600px"),
      (i.style.height = "900px"),
      (i.style.background = "black"),
      i.getContext("2d").drawImage(n, 105, 0, 90, 160);
    var a = {
      thumb: i.toDataURL("image/jpeg"),
      title: document
        .getElementsByClassName("ReelPlayerHeaderRendererReelTitle")[0]
        .textContent.replaceAll("|", "")
        .replaceAll("\\", "")
        .replaceAll("?", "")
        .replaceAll("*", "")
        .replaceAll("<", "")
        .replaceAll("/", "")
        .replaceAll(":", "")
        .replaceAll('"', "")
        .replaceAll(">", ""),
    };
  } else
    a = {
      thumb: [
        ...ytplayer.config.args.raw_player_response?.videoDetails?.thumbnail
          ?.thumbnails,
      ].pop().url,
      title: ytplayer.config.args.raw_player_response?.videoDetails?.title
        .replaceAll("|", "")
        .replaceAll("\\", "")
        .replaceAll("?", "")
        .replaceAll("*", "")
        .replaceAll("<", "")
        .replaceAll("/", "")
        .replaceAll(":", "")
        .replaceAll('"', "")
        .replaceAll(">", ""),
    };
  var o,
    r = "16",
    l = '<span style="margin-left:8px">Heart<span>';
  ((l =
    window.location.href.indexOf("youtube.com/shorts") > -1
      ? '<span style="position:absolute;bottom:-70px;color:white;font-size:14px;left:7px">Heart<span>'
      : '<span style="margin-left:8px">Heart<span>'),
  (r = window.location.href.indexOf("youtube.com/shorts") > -1 ? "23" : "16"),
  localStorage.getItem("hearts")?.indexOf(t) > -1)
    ? (delete (o = JSON.parse(localStorage.getItem("hearts") || "{}"))[t],
      localStorage.setItem("hearts", JSON.stringify(o)),
      (e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" fill="${c}" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg>${l}`))
    : (((o = JSON.parse(localStorage.getItem("hearts") || "{}"))[t] = a),
      localStorage.setItem("hearts", JSON.stringify(o)),
      (e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${r}" fill="#f00" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg>${l}`));
}
function isHeart() {
  return (
    localStorage
      .getItem("hearts")
      ?.indexOf(new URLSearchParams(window.location.search).get("v")) > -1 ||
    localStorage
      .getItem("hearts")
      ?.indexOf(window.location.pathname.replace("/shorts/", "")) > -1
  );
}
function removePIP() {
  isF || document.getElementsByClassName("fullscreen-icon")[0].click(),
    (isAP = !1);
}
function PIPlayer() {
  0 == isAP && PIPlayer1();
}
function PIPlayer1() {
  try {
    document.getElementById("ytproMainAudDivE").remove();
  } catch {
    console.log("No Element Found");
  }
  if (
    ((isF =
      window.innerWidth == screen.width && window.innerHeight == screen.height),
    !document.getElementsByClassName("video-stream")[0].paused)
  ) {
    isF || document.getElementsByClassName("fullscreen-icon")[0].click(),
      Android.pipvid("pip");
    var e = 0,
      t = setInterval(() => {
        10 == (e += 1) && clearInterval(t),
          document.getElementsByClassName("video-stream")[0].play();
      }, 10);
  }
}
function PIPlayer2() {
  try {
    document.getElementById("ytproMainAudDivE").remove();
  } catch {
    console.log("No Element Found");
  }
  (isF =
    window.innerWidth == screen.width && window.innerHeight == screen.height),
    (isHPIP = !1),
    Android.pipvid("pip"),
    isF || document.getElementsByClassName("fullscreen-icon")[0].click(),
    document.getElementsByClassName("video-stream")[0].play();
}
function ytproAudPlayer() {
  var e = "",
    t = "";
  if ("ytplayer" in window) {
    for (x in ytplayer.config.args.raw_player_response.streamingData
      .adaptiveFormats)
      "140" ==
        ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[
          x
        ].itag &&
        ("signatureCipher" in
        ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[
          x
        ]
          ? ((e = ytplayer.config.args.title),
            (t = ytproGetURL(
              ytplayer.config.args.raw_player_response.streamingData
                .adaptiveFormats[x].signatureCipher
            )))
          : ((e = ytplayer.config.args.title),
            (t =
              ytplayer.config.args.raw_player_response.streamingData
                .adaptiveFormats[x].url)));
    try {
      document.getElementById("ytproMainAudDivE").remove();
    } catch {
      console.log("No Element Found");
    }
    var n = document.createElement("div"),
      i = document.createElement("audio"),
      a = document.createElement("div");
    (n.style.position = "fixed"),
      (n.style.bottom = "0"),
      (n.style.left = "0"),
      (n.style.zIndex = "99999999999"),
      (n.style.height = "70px"),
      (n.style.width = "100%"),
      (n.style.background = "white"),
      n.setAttribute("id", "ytproMainAudDivE"),
      (a.style.position = "absolute"),
      (a.style.left = "0px"),
      (a.style.height = "40px"),
      (a.style.width = "40px"),
      (a.style.background = "white"),
      (n.style.borderTop = "3px solid red"),
      (a.style.borderTop = "3px solid red"),
      (a.style.borderRight = "3px solid red"),
      (a.style.position = "absolute"),
      (a.style.top = "-43.25px"),
      (a.style.color = "red"),
      (a.style.textAlign = "center"),
      (a.innerHTML = "&#x2715;"),
      (a.style.fontSize = "20px"),
      (i.style.position = "absolute"),
      (i.style.top = "-20px"),
      (i.style.left = "0"),
      (i.style.height = "80px"),
      (i.style.width = "100%"),
      (n.innerHTML +=
        "<style>audio::-webkit-media-controls-panel{background:white;}</style>"),
      i.setAttribute("id", "ytproaudss"),
      (i.controls = !0),
      (i.src = t),
      document.body.appendChild(n),
      n.appendChild(i),
      n.appendChild(a),
      document.getElementsByClassName("video-stream")[0].pause(),
      a.addEventListener("click", function () {
        (isAP = !1), this.parentElement.remove();
      }),
      (i.onloadeddata = function () {
        i.play(),
          (isAP = !0),
          Android.showToast("Now Playing \n" + e),
          console.log(Android.gohome("ok"));
      }),
      i.addEventListener("timeupdate", function () {
        i.currentTime == i.duration &&
          (window.location.href =
            "https://m.youtube.com" +
            document
              .getElementsByTagName("lazy-list")[1]
              .children[1].children[0].children[0].getAttribute("href") +
            "&auds=ab");
      });
  } else alert("AN ERROR OCCURED , PLEASE UPDATE YT PRO");
}
setInterval(pkc, 0),
  (window.onhashchange = () => {
    if ("#download" == window.location.hash) ytproDownVid();
    else if ("#settings" == window.location.hash) ytproSettings();
    else if ("#hearts" == window.location.hash) showHearts();
    else {
      try {
        document.getElementById("outerdownytprodiv").remove();
      } catch {}
      try {
        document.getElementById("outerheartsdiv").remove();
      } catch {}
      try {
        document.getElementById("settingsprodiv").remove();
      } catch {}
    }
  }),
  setInterval(function () {
    var e = document.getElementsByTagName("ad-slot-renderer");
    for (var t in e)
      try {
        e[t].remove();
      } catch {}
    try {
      (document
        .getElementsByClassName("ad-interrupting")[0]
        .getElementsByTagName("video")[0].currentTime = document
        .getElementsByClassName("ad-interrupting")[0]
        .getElementsByTagName("video")[0].duration),
        document.getElementsByClassName("ytp-ad-skip-button-text")[0].click();
    } catch {}
    try {
      document
        .getElementsByTagName("ytm-promoted-sparkles-web-renderer")[0]
        .remove();
    } catch {}
    try {
      document.getElementsByTagName("ytm-companion-ad-renderer")[0].remove();
    } catch {}
    try {
      document.querySelectorAll('[aria-label="Open App"]')[0].remove();
    } catch {}
    try {
      document.getElementsByTagName(
        "ytm-paid-content-overlay-renderer"
      )[0].style.display = "none";
    } catch {}
    if ("true" == localStorage.getItem("shorts"))
      for (t in document.getElementsByTagName("ytm-reel-shelf-renderer"))
        try {
          document.getElementsByTagName("ytm-reel-shelf-renderer")[t].remove();
        } catch {}
    if (
      document.getElementById("player-container-id") ===
      document.fullscreenElement
    ) {
      var n = document.getElementsByClassName("video-stream")[0],
        i = document.createElement("div");
      n.getBoundingClientRect().width / n.offsetWidth > 1
        ? (i.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"/>\n</svg>')
        : (i.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>\n</svg>'),
        i.setAttribute("id", "mE"),
        i.setAttribute("style", "position:absolute;right:60px;padding:15px;"),
        null == document.getElementById("mE") &&
          document
            .getElementsByClassName("player-controls-bottom")[0]
            .appendChild(i),
        i.addEventListener("click", () => {
          var e =
            n.videoHeight > n.videoWidth
              ? screen.height / n.videoHeight
              : screen.width / n.videoWidth;
          n.getBoundingClientRect().width / n.offsetWidth > 1
            ? (n.style.transform = "scale(1)")
            : (n.style.transform = `scale(${e})`);
        });
    }
  }, 1),
  document
    .getElementById("player-container-id")
    .addEventListener("fullscreenchange", (e) => {
      if (null != document.fullscreenElement) {
        var t = document.getElementsByClassName("video-stream")[0],
          n =
            t.videoHeight > t.videoWidth
              ? screen.height / t.videoHeight
              : screen.width / t.videoWidth;
        n < 1 && (n = 1),
          "true" == localStorage.getItem("fitS") &&
            setTimeout(() => {
              t.style.transform = `scale(${n})`;
            }, 0);
      }
    }),
  (window.onload = function () {
    "ab" == new URLSearchParams(window.location.search).get("auds") &&
      ytproAudPlayer();
  });
//# sourceMappingURL=/sm/58d83183780cd541e3d62d0462f6078d8cc1f300b81e1400c05789f99db06273.map
