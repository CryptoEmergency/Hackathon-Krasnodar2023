// frontends/article/loader.ts
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

// frontends/article/display.tsx
var display2 = function() {
  return /* @__PURE__ */ Cemjsx("div", { class: "article " }, /* @__PURE__ */ Cemjsx("div", { class: true }));
};

// frontends/article/index.ts
var micro = {
  name: "MicroTest",
  loader,
  display: display2
};
export {
  micro
};
