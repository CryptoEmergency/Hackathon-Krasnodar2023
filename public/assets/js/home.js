// frontends/home/loader.ts
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

// frontends/home/display.tsx
var display2 = function() {
  return /* @__PURE__ */ Cemjsx("main", { class: "home" }, /* @__PURE__ */ Cemjsx("div", { class: "wrapper" }, "home page"));
};

// frontends/home/index.ts
var micro = {
  name: "home",
  loader,
  display: display2
};
export {
  micro
};
