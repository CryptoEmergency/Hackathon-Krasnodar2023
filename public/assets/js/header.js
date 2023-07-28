// frontends/header/loader.ts
var loader = function() {
};

// node_modules/cemjs-core/libs/jsx.js
var Cemjsx = (tag, data, ...children) => {
  children = children.filter((item) => !checkNofing(item));
  let joinchildren = [];
  let tmp = "";
  children.forEach((item) => {
    if (typeof item == "object") {
      if (tmp != "") {
        joinchildren.push(tmp);
        tmp = "";
      }
      if (Array.isArray(item)) {
        joinchildren.push(...item);
      } else {
        joinchildren.push(item);
      }
    } else {
      tmp += item.toString();
    }
  });
  if (tmp != "") {
    joinchildren.push(tmp);
  }
  return { tag, data, children: joinchildren };
};
var checkNofing = function(data) {
  if (!data && typeof data != "number" || data === true) {
    return true;
  }
  return false;
};

// assets/svg/logo.svg
var logo_default = 'data:image/svg+xml,<svg width="46" height="51" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">%0D%0A<path d="M0.976562 41.0178C0.976562 40.8057 1.13566 40.6572 1.33717 40.6572C1.53869 40.6572 1.69778 40.8057 1.69778 41.0178V44.9846C1.69778 46.2361 2.69477 47.2331 3.92509 47.2437C5.17662 47.2331 6.18421 46.2361 6.18421 44.9846V41.0178C6.18421 40.8057 6.36451 40.6572 6.54482 40.6572C6.75694 40.6572 6.91604 40.8057 6.91604 41.0178V44.9846C6.91604 46.6179 5.59026 47.9543 3.92509 47.9543C2.29173 47.9543 0.987169 46.6179 0.987169 44.9846V41.0178H0.976562Z" fill="%23263238"/>%0D%0A<path d="M10.2363 44.4322V44.2837V44.1352V41.0276C10.2363 40.8367 10.3954 40.667 10.5969 40.667C10.8091 40.667 10.9682 40.8261 10.9682 41.0276V42.0776C11.5939 41.2291 12.6015 40.667 13.7258 40.667C15.6879 40.667 17.247 42.2897 17.247 44.2731C17.247 46.2459 15.6879 47.9004 13.7258 47.9004C12.6015 47.9004 11.5833 47.3383 10.9682 46.4792V50.6368C10.9682 50.8277 10.8091 50.9974 10.5969 50.9974C10.406 50.9974 10.2363 50.8384 10.2363 50.6368V44.4322ZM10.9575 44.2837C10.9575 45.8853 12.2197 47.1792 13.7152 47.2004C15.2637 47.1898 16.5046 45.8959 16.5046 44.2837C16.5046 42.6716 15.2531 41.3988 13.7152 41.3988C12.2409 41.3988 11.0106 42.6185 10.9575 44.167V44.2837Z" fill="%23263238"/>%0D%0A<path d="M20.0352 44.4322V44.2837V44.1352V41.0276C20.0352 40.8367 20.1942 40.667 20.3958 40.667C20.6079 40.667 20.767 40.8261 20.767 41.0276V42.0776C21.3928 41.2291 22.4003 40.667 23.5352 40.667C25.4974 40.667 27.0565 42.2897 27.0565 44.2731C27.0565 46.2459 25.4974 47.9004 23.5352 47.9004C22.411 47.9004 21.3928 47.3383 20.767 46.4792V50.6368C20.767 50.8277 20.6079 50.9974 20.3958 50.9974C20.2049 50.9974 20.0352 50.8384 20.0352 50.6368V44.4322ZM20.7564 44.2837C20.7564 45.8853 22.0185 47.1792 23.5246 47.2004C25.0731 47.1898 26.314 45.8959 26.314 44.2837C26.314 42.6716 25.0625 41.3988 23.5246 41.3988C22.0503 41.3988 20.82 42.6185 20.7564 44.167V44.2837Z" fill="%23263238"/>%0D%0A<path d="M29.9961 37.9085C29.9961 37.7176 30.1552 37.5479 30.3567 37.5479H30.3991H32.6689C34.0901 37.5479 35.2568 38.7039 35.2568 40.1464C35.2568 40.9631 34.8537 41.6949 34.2598 42.1616C35.4371 42.5646 36.2962 43.6676 36.2962 44.9722C36.2962 46.6162 34.9598 47.9419 33.3264 47.9419H30.3991H30.3567H30.3461C30.1552 47.9419 30.0067 47.7829 30.0067 47.5813V37.9085H29.9961ZM32.6689 42.0025C33.6977 42.0025 34.5249 41.1752 34.5249 40.157C34.5249 39.1176 33.6977 38.2797 32.6689 38.2797H30.7279V41.9919H32.6689V42.0025ZM33.3264 47.2313C34.5568 47.2313 35.5537 46.2343 35.575 44.9828C35.5643 43.7525 34.5674 42.7343 33.3264 42.7343H30.7279V47.2207H33.3264V47.2313Z" fill="%23263238"/>%0D%0A<path d="M38.1309 44.3369C38.1309 42.3111 39.7006 40.6777 41.6627 40.6777C43.5294 40.6777 45.0249 42.1626 45.1734 44.0611V44.0717V44.1141C45.1734 44.305 45.0143 44.4429 44.8128 44.4429H38.8415C38.9157 46.0339 40.1673 47.2324 41.6627 47.2324C42.6279 47.2324 43.5188 46.7233 44.0067 45.9066C44.1128 45.7263 44.3355 45.6945 44.484 45.7899C44.6431 45.9066 44.7067 46.1187 44.6006 46.299C43.9749 47.296 42.893 47.943 41.6627 47.943C39.7112 47.9536 38.1309 46.3202 38.1309 44.3369ZM38.8945 43.7535H44.4097C44.1764 42.3853 43.0097 41.3883 41.6733 41.3883C40.3051 41.3883 39.1597 42.3747 38.8945 43.7535Z" fill="%23263238"/>%0D%0A<path d="M10.168 4.73535V28.4041C10.538 36.6683 22.3792 37.0657 23.0508 28.4041V4.73535H10.168ZM19.9808 28.829C18.5144 31.3781 15.4033 31.3918 15.047 28.829C14.6907 26.2661 14.8962 11.8072 14.8962 11.8072H12.7582L16.6094 6.17439L20.6661 11.725L18.4047 11.7798C18.4596 18.879 17.7332 29.1031 19.9808 28.829Z" fill="url(%23paint0_linear_2021_10259)"/>%0D%0A<path d="M22.0723 35.655C22.7575 36.0799 29.2126 33.2977 31.3095 28.0213C31.5151 27.5142 31.6795 26.9797 31.7892 26.4178C33.5846 14.2202 33.3653 0.953639 40.2178 2.35156C38.8336 1.62519 37.422 1.33738 35.9967 1.72113C32.8856 2.39268 31.2136 4.61291 30.4872 7.81991C28.0066 18.1536 28.9111 33.2155 22.0723 35.655Z" fill="url(%23paint1_linear_2021_10259)"/>%0D%0A<path d="M33.6627 0.871094C14.5166 1.04926 27.4132 37.0389 14.9141 34.5308C15.6816 35.2298 17.2576 35.3395 19.2175 35.1887C21.9996 34.8461 23.8361 32.9685 24.6173 29.3777C27.4954 16.7005 24.6721 3.66694 33.6627 0.871094Z" fill="url(%23paint2_linear_2021_10259)"/>%0D%0A<defs>%0D%0A<linearGradient id="paint0_linear_2021_10259" x1="3.31826" y1="2.064" x2="18.4917" y2="35.5322" gradientUnits="userSpaceOnUse">%0D%0A<stop stop-color="%2300FF5B"/>%0D%0A<stop offset="1" stop-color="%231454F2"/>%0D%0A</linearGradient>%0D%0A<linearGradient id="paint1_linear_2021_10259" x1="21.1092" y1="19.137" x2="41.1361" y2="17.9694" gradientUnits="userSpaceOnUse">%0D%0A<stop stop-color="%2300FF5B"/>%0D%0A<stop offset="0.7619" stop-color="%231454F2"/>%0D%0A</linearGradient>%0D%0A<linearGradient id="paint2_linear_2021_10259" x1="13.6587" y1="19.0553" x2="35.0004" y2="17.3252" gradientUnits="userSpaceOnUse">%0D%0A<stop stop-color="%2300FF5B"/>%0D%0A<stop offset="1" stop-color="%23407BFF"/>%0D%0A</linearGradient>%0D%0A</defs>%0D%0A</svg>%0D%0A';

// frontends/header/display.tsx
var display2 = function() {
  return /* @__PURE__ */ Cemjsx("header", { class: "header" }, /* @__PURE__ */ Cemjsx("div", { class: "wrapper" }, /* @__PURE__ */ Cemjsx("div", { class: "header_inner" }, /* @__PURE__ */ Cemjsx("a", { href: "/", onclick: this.Fn.link, class: "header_logo" }, /* @__PURE__ */ Cemjsx("img", { src: logo_default })), /* @__PURE__ */ Cemjsx("div", { class: "header_menu" }, /* @__PURE__ */ Cemjsx(
    "div",
    {
      class: "menu_icon",
      ref: "burger"
    },
    /* @__PURE__ */ Cemjsx("span", null)
  ), /* @__PURE__ */ Cemjsx("nav", null, /* @__PURE__ */ Cemjsx("ul", { class: "header_menu" }, /* @__PURE__ */ Cemjsx("li", null, "\u0412\u0443\u0437\u044B"), /* @__PURE__ */ Cemjsx("li", null, "\u0411\u0430\u043D\u043A\u0438"), /* @__PURE__ */ Cemjsx("li", null, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"), /* @__PURE__ */ Cemjsx("li", null, "\u0422\u0435\u0441\u0442\u044B"), /* @__PURE__ */ Cemjsx("li", null, "\u0410\u0431\u0438\u0435\u0442\u0443\u0440\u0435\u043D\u0442\u0430\u043C"), /* @__PURE__ */ Cemjsx("li", null, "\u0421\u0442\u0430\u0442\u044C\u0438")))))), /* @__PURE__ */ Cemjsx("div", null));
};

// frontends/header/index.ts
var micro = {
  name: "MicroTest",
  loader,
  display: display2
};
export {
  micro
};
