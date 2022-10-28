(() => {
  "use strict";
  function e(e, r, n, c, t) {
    const o = document.querySelector(".location"),
      i = document.querySelector(".weatherImg"),
      a = document.querySelector(".currentTemp"),
      s = document.querySelector(".feelTemp");
    "Err" != c
      ? ((o.innerHTML = `${e}`),
        (i.src = `https://openweathermap.org/img/wn/${t}@2x.png`),
        (a.innerHTML = `${r}`),
        (s.innerHTML = `${n}`))
      : ((o.innerHTML = "Mars"),
        (i.src = "https://cdn-icons-png.flaticon.com/512/124/124582.png"),
        (a.innerHTML = "-65"),
        (s.innerHTML = "-70")),
      (function (e) {
        const r = document.querySelector("body");
        switch (e) {
          case "Thunderstorm":
            (r.style.backgroundImage = "url('imgs/storm.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          case "Drizzle":
          case "Rain":
            (r.style.backgroundImage = "url('imgs/rain.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          case "Snow":
            (r.style.backgroundImage = "url('imgs/snow.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          case "Clear":
            (r.style.backgroundImage = "url('imgs/clear.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          case "Clouds":
            (r.style.backgroundImage = "url('imgs/cloudy.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          case "Sand":
            (r.style.backgroundImage = "url('imgs/sand.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          case "Err":
            (r.style.backgroundImage = "url('imgs/mars.jpg')"),
              (r.style.backgroundSize = "cover");
            break;
          default:
            (r.style.backgroundImage = "url('imgs/mist.jpg')"),
              (r.style.backgroundSize = "cover");
        }
      })(c);
  }
  async function r(r) {
    const n = document.querySelector(".unit");
    try {
      const c = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${r}&APPID=9947ddc949075bc27c00522567cb5785`
        ),
        t = await c.json(),
        o = t.weather[0].main,
        i = t.weather[0].icon;
      if ("°C" === n.innerHTML) {
        e(
          r,
          (t.main.temp - 273.15).toPrecision(3),
          (t.main.feels_like - 273.15).toPrecision(3),
          o,
          i
        );
      } else {
        e(
          r,
          (1.8 * t.main.temp - 459.67).toPrecision(3),
          (1.8 * t.main.feels_like - 459.67).toPrecision(3),
          o,
          i
        );
      }
    } catch {
      const c = "Err",
        t = "10d";
      "°C" === n.innerHTML
        ? e(
            r,
            (208.15 - 273.15).toPrecision(3),
            (203.15 - 273.15).toPrecision(3),
            c,
            t
          )
        : e(r, (-85).toPrecision(3), (-94).toPrecision(3), c, t);
    }
  }
  document.querySelector(".switchUnit").addEventListener("click", () => {
    const e = document.querySelector(".currentTemp"),
      r = document.querySelector(".feelTemp"),
      n = document.querySelector(".unit");
    "°C" === n.innerHTML
      ? ((e.innerHTML = (1.8 * Number(e.innerHTML) + 32).toPrecision(3)),
        (r.innerHTML = (1.8 * Number(r.innerHTML) + 32).toPrecision(3)),
        (n.innerHTML = "°F"))
      : ((e.innerHTML = ((Number(e.innerHTML) - 32) / 1.8).toPrecision(3)),
        (r.innerHTML = ((Number(r.innerHTML) - 32) / 1.8).toPrecision(3)),
        (n.innerHTML = "°C"));
  }),
    (function () {
      const e = document.querySelector(".searchCity"),
        n = document.querySelector("#inputCity");
      e.addEventListener("click", function () {
        r(n.value);
      });
    })(),
    r("Prague");
})();
