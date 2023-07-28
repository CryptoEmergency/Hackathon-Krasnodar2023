// frontends/header/loader.ts
var loader = function() {
  this.Static.text = "Framework CemJS!";
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

// assets/images/logo/logo.jpg
var logo_default = "/assets/logo-XDCXIUNY.jpg";

// frontends/header/display.tsx
var display2 = function() {
  return /* @__PURE__ */ Cemjsx("header", { class: "header header_container" }, /* @__PURE__ */ Cemjsx("div", { class: "header_inner" }, /* @__PURE__ */ Cemjsx("div", { class: "header_logo" }, /* @__PURE__ */ Cemjsx("a", { href: "/", onclick: this.Fn.link }, /* @__PURE__ */ Cemjsx(
    "img",
    {
      class: "header_logo-img",
      src: logo_default
    }
  ))), /* @__PURE__ */ Cemjsx("nav", null, /* @__PURE__ */ Cemjsx("ul", { class: "header_menu" }, /* @__PURE__ */ Cemjsx(
    "li",
    {
      class: ["header_menu_item", this.Static.page == "cemjs" ? "header_menu_item-active" : null]
    },
    /* @__PURE__ */ Cemjsx("a", { href: "/about/", onclick: this.Fn.link }, "Cem JS")
  ), /* @__PURE__ */ Cemjsx(
    "li",
    {
      class: ["header_menu_item", this.Static.page == "examples" ? "header_menu_item-active" : null]
    },
    /* @__PURE__ */ Cemjsx("a", { href: "https://ya.ru", onclick: this.Fn.link }, "Examples")
  ), /* @__PURE__ */ Cemjsx(
    "li",
    {
      class: ["header_menu_item", this.Static.page == "contacts" ? "header_menu_item-active" : null],
      onclick: () => {
        this.Static.page = "contacts";
        this.init();
      }
    },
    "Contacts"
  )))));
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
