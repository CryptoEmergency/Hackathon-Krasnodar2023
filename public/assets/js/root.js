var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/cemjs-core/libs/jsx.js
var checkNodeTag = function(node, Data) {
  let tempNode = node.tag.bind(Data)(node.data, node.children);
  if (typeof tempNode?.tag == "function") {
    return checkNodeTag(tempNode, Data);
  }
  return tempNode;
};
var checkDifferent = function(data, data2) {
  if (data?.toString() == data2?.toString()) {
    return false;
  }
  return true;
};
var checkNofing = function(data) {
  if (!data && typeof data != "number" || data === true) {
    return true;
  }
  return false;
};
var setDataElement = function(data, $el, Data) {
  if (!data) {
    return;
  }
  Object.entries(data).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window) {
      $el.addEventListener(name.toLowerCase().substring(2), value);
      Data._ListsEventListener.push({ $el, name: name.toLowerCase().substring(2), fn: value });
    } else if (name == "ref") {
      return;
    } else {
      if (typeof value == "object") {
        if (name == "class") {
          value = value.join(" ");
        }
      }
      $el.setAttribute(name, value);
    }
  });
  return;
};
var updateDataElement = function($el, newData = {}, oldData = {}, Data) {
  if (!oldData) {
    oldData = {};
  }
  if (!newData) {
    newData = {};
  }
  Object.keys(Object.assign({}, newData, oldData)).forEach((name) => {
    if (name.startsWith("on") && name.toLowerCase() in window && name in oldData) {
      $el.removeEventListener(name.toLowerCase().substring(2), oldData[name]);
    }
    if (name.startsWith("on") && name.toLowerCase() in window && name in newData) {
      $el.addEventListener(name.toLowerCase().substring(2), newData[name]);
      Data._ListsEventListener.push({ $el, name: name.toLowerCase().substring(2), fn: newData[name] });
      return;
    }
    if (checkDifferent(newData[name], oldData[name])) {
      if (name in newData) {
        if (!newData[name]) {
          if (name == "value") {
            $el.value = "";
            return;
          }
          $el?.removeAttribute(name);
          return;
        }
        if (name == "ref") {
          if ($el !== Data.Ref[newData[name]]) {
            Data.Ref[newData[name]] = $el;
          }
          return;
        }
        if (name == "value") {
          $el.value = newData[name];
          return;
        }
        if (typeof newData[name] == "object") {
          if (name == "class") {
            newData[name] = newData[name].join(" ");
          }
        }
        $el.setAttribute(name, newData[name]);
      } else {
        if (name == "value") {
          $el.value = "";
          return;
        }
        $el?.removeAttribute(name);
      }
    }
  });
};
var createElement = function(node, Data) {
  if (checkNofing(node)) {
    return null;
  }
  if (typeof node != "object") {
    return document.createTextNode(node);
  }
  if (typeof node.tag == "function") {
    let tempNode = checkNodeTag(node, Data);
    node = tempNode;
  }
  let $el = document.createElement(node.tag);
  node.$el = $el;
  if (node.data?.ref && Data.Ref) {
    Data.Ref[node.data?.ref] = $el;
  }
  setDataElement(node.data, $el, Data);
  if (typeof node.children == "object") {
    node.children.map((item) => createElement(item, Data)).filter((item) => !checkNofing(item)).forEach($el.appendChild.bind($el));
  } else {
    return document.createTextNode(node.tag);
  }
  return $el;
};
var updateElement = async function($el, _VDomNew, _VDomActual, position = 0, Data) {
  if (checkNofing(_VDomActual)) {
    if (_VDomNew) {
      $el.appendChild(
        createElement(_VDomNew, Data)
      );
    }
    return;
  }
  if (checkNofing(_VDomNew)) {
    if (!$el.childNodes[position]) {
      $el.removeChild(
        $el.lastChild
      );
    } else {
      $el.removeChild(
        $el.childNodes[position]
      );
    }
    return;
  }
  if (!_VDomNew?.tag) {
    if (_VDomNew != _VDomActual) {
      $el.replaceChild(createElement(_VDomNew, Data), $el.childNodes[position]);
    }
    return;
  }
  if (_VDomNew.tag != _VDomActual?.tag) {
    $el.childNodes[position].replaceWith(createElement(_VDomNew, Data));
    return;
  }
  if (!$el) {
    console.error("UpdateElement \u043D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F $el");
    return;
  }
  let eventIndex = Data._ListsEventListener.findIndex((item) => $el.childNodes[position] === item?.$el);
  if (eventIndex >= 0) {
    let item = Data._ListsEventListener[eventIndex];
    item.$el.removeEventListener(item.name, item.fn);
    Data._ListsEventListener.splice(eventIndex, 1);
  }
  updateDataElement($el.childNodes[position], _VDomNew?.data, _VDomActual?.data, Data);
  _VDomNew.$el = _VDomActual.$el;
  for (let i = 0; i < _VDomNew.children.length || i < _VDomActual.children.length; i++) {
    updateElement(
      _VDomActual.$el,
      _VDomNew.children[i],
      _VDomActual.children[i],
      i,
      Data
    );
  }
};
var display = (_VDomNew, _VDomActual, $el, Data, index) => {
  if (!$el) {
    const newDom = createElement(_VDomNew, Data);
    const $app = document.getElementById("app");
    if ($app.childNodes.length > index) {
      $app.insertBefore(newDom, $app.childNodes[index]);
    } else {
      $app.appendChild(newDom);
    }
    return newDom;
  }
  updateElement($el, _VDomNew, _VDomActual, 0, Data);
  return $el;
};

// node_modules/cemjs-core/libs/fn.js
var fn_exports = {};
__export(fn_exports, {
  initOne: () => initOne,
  link: () => link
});
var link = function(e) {
  console.log("=link=", e, e.currentTarget, e.target);
  let $el = e.currentTarget || e.target;
  if ($el.href) {
    if (!$el.href.includes(window.location.host)) {
      $el.target = "_blank";
      return;
    }
    history.pushState({}, "", $el.href);
    window.dispatchEvent(new Event("popstate"));
    e.preventDefault();
  }
};
var initOne = function({ name, data, ifOpen }) {
  if (!Frontends.lists[name]) {
    console.error("=d792ce=", "No name =>", name);
    return;
  }
  if (Frontends.lists[name].$el) {
    if (ifOpen) {
      ifOpen(Frontends.lists[name]);
      return;
    }
  }
  Frontends.lists[name].init();
  return;
};

// node_modules/cemjs-core/libs/class.js
var pageFront = { lists: [] };
var Services = {};
var Variable = {};
var Cross = {};
var sendOn = function(name, ...data) {
  if (this._ListsOn[name]) {
    this._ListsOn[name].bind(this)(...data);
  }
};
var checkDifferent2 = function(data, data2) {
  if (data?.toString() == data2?.toString()) {
    return false;
  }
  return true;
};
var VDomStartFn = function(_VDomNew, Data) {
  if (typeof _VDomNew != "object") {
    return _VDomNew;
  }
  let tmp = { tag: _VDomNew.tag, data: _VDomNew.data, children: _VDomNew.children };
  if (typeof tmp.tag == "function") {
    let tmpp = VDomStartFn(tmp.tag.bind(Data)(), Data);
    return tmpp;
  }
  if (tmp.children) {
    tmp.children.forEach((item, index) => {
      tmp.children[index] = VDomStartFn(tmp.children[index], Data);
    });
  }
  return tmp;
};
var Frontends = class _Frontends {
  static lists = {};
  constructor(micro) {
    this.name = micro.name;
    this.loader = micro.loader;
    this.display = micro.display;
    this.Static = { name: this.name };
    this._fn = micro.fn;
    this.Fn = fn_exports;
    this.Services = Services;
    this.Variable = Variable;
    this.Ref = {};
    this._ListsEventListener = [];
    this._ListsEventSource = [];
    this._ListsOn = {};
    _Frontends.lists[this.name] = this;
  }
  cross(data) {
    for (let item of Cross[this.name]) {
      if (_Frontends.lists[item.name]?.$el)
        item.fn.bind(_Frontends.lists[item.name])(data);
    }
  }
  fn(key, ...data) {
    if (typeof this._fn[key] == "function") {
      this._fn[key].bind(this)(...data);
    }
  }
  on(name, callback) {
    if (typeof callback == "function") {
      this._ListsOn[name] = callback;
    } else if (name == "cross") {
      for (let item of callback) {
        item.name = this.name;
        if (!Cross[item.front]) {
          Cross[item.front] = [item];
        } else {
          Cross[item.front].push(item);
        }
      }
    }
  }
  services(name, ...data) {
    let [serv, key] = name.split(".");
    if (this.Services[serv] && typeof this.Services[serv][key] == "function") {
      return this.Services[serv][key].bind(this)(...data);
    }
    return null;
  }
  eventSource(url) {
    if (this.Variable._Api) {
      url = this.Variable._Api + url;
    }
    let event = new EventSource(url);
    this._ListsEventSource.push(event);
    return event;
  }
  eventSourceChange(url) {
    this._ListsEventSource[0].close();
    this._ListsEventSource = [];
    if (this.Variable._Api) {
      url = this.Variable._Api + url;
    }
    let event = new EventSource(url);
    this._ListsEventSource.push(event);
    return event;
  }
  clearData() {
    this?.$el?.remove();
    delete this.$el;
    delete this._VDomNew;
    delete this._VDomActual;
    this.Static = { name: this.name };
    this.Ref = {};
    this._ListsEventListener = this._ListsEventListener.filter((item) => {
      item.$el.removeEventListener(item.name, item.fn);
      return false;
    });
    this._ListsEventSource = this._ListsEventSource.filter((item) => {
      item.close();
      return false;
    });
  }
  initAuto(keys, fn) {
    const init = this.init.bind(this);
    if (Array.isArray(keys)) {
      for (let item of keys) {
        if (this.Static[item]) {
          this.Static[`_${item}`] = this.Static[item];
        }
        this.Static.__defineGetter__(item, function() {
          return this[`_${item}`];
        });
        this.Static.__defineSetter__(item, function(value) {
          if (fn && fn(value, item)) {
            this[`_${item}`] = value;
            init();
          } else if (!fn && checkDifferent2(this[`_${item}`], value)) {
            this[`_${item}`] = value;
            init();
          }
        });
      }
    } else {
      if (this.Static[keys]) {
        this.Static[`_${keys}`] = this.Static[keys];
      }
      this.Static.__defineGetter__(keys, function() {
        return this[`_${keys}`];
      });
      this.Static.__defineSetter__(keys, function(value) {
        if (fn && fn(value, keys)) {
          this[`_${keys}`] = value;
          init();
        } else if (!fn && checkDifferent2(this[`_${keys}`], value)) {
          this[`_${keys}`] = value;
          init();
        }
      });
    }
  }
  async init(index) {
    sendOn.bind(this)("start", "Start init!", this.name);
    if (!pageFront.lists.includes(this.name)) {
      pageFront.lists.push(this.name);
    }
    if (!this._VDomActual) {
      await this.loader();
    }
    this._VDomNew = VDomStartFn(await this.display(), this);
    this.$el = display(this._VDomNew, this._VDomActual, this.$el, this, index);
    this._VDomActual = this._VDomNew;
    this._ListsEventListener = this._ListsEventListener.filter((item) => {
      if (!document.body.contains(item.$el)) {
        item.$el.removeEventListener(item.name, item.fn);
        return false;
      }
      return true;
    });
    sendOn.bind(this)("finish", "Finish init!", this.name, 1);
  }
};

// node_modules/cemjs-core/libs/listener.js
var changeUrl = async function(e) {
  for (let item of cemConfig.pages) {
    if (item.url == window.location.pathname) {
      pageFront.lists = pageFront.lists.filter((olPage, index) => {
        if (!item.front.includes(olPage)) {
          Frontends.lists[olPage]?.$el?.remove();
          Frontends.lists[olPage].clearData();
          return false;
        }
        return true;
      });
      item.front.map((page, index) => {
        if (Frontends.lists[page]) {
          Frontends.lists[page].init(index);
        }
      });
    }
  }
};
var listener = function() {
  window.addEventListener("popstate", changeUrl);
};

// node_modules/cemjs-core/libs/loader.js
var cemConfig;
var load = async function(micro, one) {
  const frontend = new Frontends(micro);
  if (micro.listener) {
    for (let key in micro.listener) {
      frontend.on(key, micro.listener[key]);
    }
  }
  if (one) {
    if (one === true) {
      new EventSource("/esbuild").addEventListener("change", () => location.reload());
    }
    frontend.init();
  }
  return;
};
var initMap = async function(config) {
  new EventSource("/esbuild").addEventListener("change", () => location.reload());
  listener();
  cemConfig = config;
  if (cemConfig?.api) {
    Variable._Api = cemConfig.api;
  }
  for (let key in config.services) {
    if (config.services[key]?.path?.js) {
      Services[key] = await import(config.services[key]?.path?.js);
      if (typeof Services[key].loader == "function") {
        await Services[key].loader(Variable);
      }
    }
  }
  for (let key in config.microFrontends) {
    if (config.microFrontends[key]?.path?.css) {
      let head = document.getElementsByTagName("head")[0];
      let link2 = document.createElement("link");
      link2.rel = "stylesheet";
      link2.type = "text/css";
      link2.href = config.microFrontends[key]?.path?.css;
      head.appendChild(link2);
    }
    if (config.microFrontends[key]?.path?.js) {
      let microFrontend = await import(config.microFrontends[key]?.path?.js);
      microFrontend.micro.name = config.microFrontends[key].name;
      load(microFrontend.micro, config.microFrontends[key].one);
    }
  }
  history.pushState({}, "", window.location.pathname);
  window.dispatchEvent(new Event("popstate"));
};

// cemconfig.json
var cemconfig_default = {
  ver: "1.0.0",
  port: 3e3,
  pages: [
    {
      url: "/",
      front: [
        "header",
        "home",
        "footer"
      ]
    },
    {
      url: "/about/",
      front: [
        "header",
        "footer"
      ]
    }
  ],
  hook: {
    proxyWeb: [
      {
        url: "/api/events",
        host: "127.0.0.1",
        port: "6445"
      }
    ]
  },
  microFrontends: {}
};

// microFrontends.json
var microFrontends_default = { footer: { front: true, name: "footer", path: { js: "/assets/js/footer.js", css: "/assets/css/footer.css" }, ver: "1.0.0", visable: true }, header: { front: true, name: "header", path: { js: "/assets/js/header.js", css: "/assets/css/header.css" }, ver: "1.0.0", visable: true }, home: { front: true, name: "home", path: { js: "/assets/js/home.js", css: "/assets/css/home.css" }, ver: "1.0.0", visable: true } };

// app.ts
cemconfig_default.microFrontends = microFrontends_default;
function app_default() {
  initMap(cemconfig_default);
}
export {
  app_default as default
};
