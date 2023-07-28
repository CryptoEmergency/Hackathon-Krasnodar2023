// frontends/home/loader.ts
var loader = function() {
  this.Static.text = "Framework CemJS!!!";
  this.initAuto("text");
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

// assets/svg/space.svg
var space_default = 'data:image/svg+xml,<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Planetary_System" data-name="Planetary System"><circle cx="5" cy="48" r="2" fill="%23000000" style="fill: rgb(255, 255, 255);"></circle><circle cx="41" cy="13" r="2" fill="%23000000" style="fill: rgb(255, 255, 255);"></circle><path d="m40.466 29.1a13.014 13.014 0 0 0 -11.366 11.365 16.018 16.018 0 0 0 11.366-11.365z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m54.956 41.243c-1.856 2.207-4.056 4.591-6.589 7.124s-4.919 4.736-7.124 6.59c.253.014.507.043.757.043a13.015 13.015 0 0 0 13-13c0-.25-.029-.5-.044-.757z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m58.973 25.027c-.815-.816-3.207-3.2-11.655 2.962a14.742 14.742 0 0 1 2.142 1.016c5.594-3.912 7.3-3.355 8.1-2.562.816.816 1.4 2.6-2.936 8.631a89.371 89.371 0 0 1 -9.084 10.463 89.551 89.551 0 0 1 -10.463 9.085c-3.8 2.729-5.908 3.509-7.157 3.509a1.948 1.948 0 0 1 -1.474-.574c-.791-.791-1.351-2.5 2.562-8.1a14.785 14.785 0 0 1 -1.016-2.141c-6.161 8.445-3.777 10.839-2.962 11.654.863.862 3.488 3.487 13.186-4.119a101.566 101.566 0 0 0 8.74-7.9 101.534 101.534 0 0 0 7.9-8.742c7.604-9.693 4.979-12.319 4.117-13.182z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m47.977 30.46a18 18 0 0 1 -17.517 17.517c.177.339.366.671.572.993a13.071 13.071 0 0 0 3.447 3.6 89.686 89.686 0 0 0 9.644-8.451 89.7 89.7 0 0 0 8.451-9.644 13.076 13.076 0 0 0 -3.6-3.445c-.323-.203-.657-.393-.997-.57z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m29.336 44.95c.083.351.181.7.291 1.036.125 0 .246.014.373.014a16.019 16.019 0 0 0 16-16c0-.127-.011-.248-.013-.373-.343-.111-.692-.21-1.048-.294a13.569 13.569 0 0 0 -2.409-.3 18 18 0 0 1 -13.5 13.5 13.535 13.535 0 0 0 .306 2.417z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m7.393 5.471c-2.178-1.508-3.393-1.887-3.828-1.906.019.434.4 1.651 1.906 3.828a8.046 8.046 0 0 1 1.922-1.922z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m12 18c.2 0 .4-.011.6-.03-1.134-.951-2.3-2.01-3.428-3.143s-2.19-2.294-3.142-3.427c-.019.2-.03.4-.03.6a6.006 6.006 0 0 0 6 6z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m18.529 16.607a8.046 8.046 0 0 1 -1.922 1.922c2.178 1.508 3.394 1.887 3.828 1.906-.019-.435-.399-1.651-1.906-3.828z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m18 12a6 6 0 0 0 -11.253-2.894 48.972 48.972 0 0 0 3.84 4.307 49.091 49.091 0 0 0 4.306 3.84 6 6 0 0 0 3.107-5.253z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m56 8h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m60 52h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m53 60h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m59 40h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m8 29h-2v2h-2v2h2v2h2v-2h2v-2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m15 37h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m26 9h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m30 21h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m37 3h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m19 30h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path><path d="m11 57h2v2h-2z" fill="%23000000" style="fill: rgb(255, 255, 255);"></path></g></svg>';

// frontends/home/display.tsx
var display2 = function() {
  return /* @__PURE__ */ Cemjsx("div", { class: "home home_container" }, /* @__PURE__ */ Cemjsx("h2", { class: "home_title" }, this.Static.text), /* @__PURE__ */ Cemjsx("img", { class: "home_logoCem", src: space_default }));
};

// frontends/home/index.ts
var micro = {
  name: "MicroTest",
  loader,
  display: display2
};
export {
  micro
};
