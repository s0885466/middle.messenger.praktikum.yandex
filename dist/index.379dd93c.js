// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j1F46":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _globalScss = require("./styles/global.scss");
var _router = require("./router/Router");
var _routerDefault = parcelHelpers.interopDefault(_router);
var _routes = require("./router/routes");
var _elements = require("./constants/elements");
//заглушка для демонстрации страничек и переходов
_elements.elements.root.innerText = '';
const router = new _routerDefault.default();
const path = router.getLocation();
router.goTo(path);
_routes.renderPage(path);

},{"./styles/global.scss":"fZTCz","./router/Router":"efHQn","./router/routes":"afliM","./constants/elements":"1TIFp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fZTCz":[function() {},{}],"efHQn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routes = require("./routes");
class Router {
    constructor(){
        this.routes = _routes.routes;
    }
    goTo(path1) {
        const push = (path)=>window.history.pushState({
            }, '', path)
        ;
        if (!this.routes[path1]) {
            push(_routes.paths.page404);
            return;
        }
        push(path1);
    }
    getLocation() {
        return window.location.pathname;
    }
}
exports.default = Router;

},{"./routes":"afliM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"afliM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paths", ()=>paths
);
parcelHelpers.export(exports, "routes", ()=>routes
);
parcelHelpers.export(exports, "renderPage", ()=>renderPage
);
var _login = require("src/pages/login/login");
var _signIn = require("src/pages/signIn/signIn");
var _chat = require("src/pages/chat/chat");
var _errorPage = require("src/pages/errorPage/errorPage");
const paths = {
    login: '/',
    signIn: '/signin',
    chat: '/chat',
    page404: '/page404',
    page500: '/page500'
};
const routes = {
    [paths.login]: {
        page: _login.renderLoginPage
    },
    [paths.signIn]: {
        page: _signIn.renderSignInPage
    },
    [paths.chat]: {
        page: _chat.renderChatPage
    },
    [paths.page404]: {
        page: _errorPage.render404Page
    },
    [paths.page500]: {
        page: _errorPage.render500Page
    }
};
const renderPage = (path)=>routes[path] ? routes[path].page() : routes[paths.page404].page()
;

},{"src/pages/login/login":"296r5","src/pages/signIn/signIn":"2vdC7","src/pages/chat/chat":"1DiqK","src/pages/errorPage/errorPage":"7TX7d","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"296r5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderLoginPage", ()=>renderLoginPage
);
var _login = require("src/modules/login");
var _elements = require("src/constants/elements");
var _insertHtml = require("src/utils/insertHtml");
var _loginModuleScss = require("./login.module.scss");
var _loginModuleScssDefault = parcelHelpers.interopDefault(_loginModuleScss);
const renderLoginPage = ()=>{
    const html = `
        <div class="${_loginModuleScssDefault.default.container}">
            <form class="${_loginModuleScssDefault.default.form}">
                <div class="${_loginModuleScssDefault.default.titleWrapper}">
                    ${_login.Title}
                </div>
                <div class="${_loginModuleScssDefault.default.inputGroup}">
                    <div class="${_loginModuleScssDefault.default.inputWrapper}">${_login.Login}</div>
                    <div class="${_loginModuleScssDefault.default.inputWrapper}">${_login.Password}</div>
                </div>
                <div class="${_loginModuleScssDefault.default.buttonGroup}">
                    ${_login.AuthButton}
                    ${_login.GoToRegistrationLink}
                </div>
            </form>
       </div>
    `;
    _insertHtml.insertHtmlBeforeEnd(_elements.elements.root, html);
};

},{"src/modules/login":"dbWpv","src/constants/elements":"1TIFp","src/utils/insertHtml":"k5uoI","./login.module.scss":"3Jqzd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dbWpv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AuthButton", ()=>_components.AuthButton
);
parcelHelpers.export(exports, "Login", ()=>_components.Login
);
parcelHelpers.export(exports, "Password", ()=>_components.Password
);
parcelHelpers.export(exports, "GoToRegistrationLink", ()=>_components.GoToRegistrationLink
);
parcelHelpers.export(exports, "Title", ()=>_components.Title
);
var _components = require("./components/components");

},{"./components/components":"4FaHa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4FaHa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Title", ()=>Title
);
parcelHelpers.export(exports, "Login", ()=>Login
);
parcelHelpers.export(exports, "Password", ()=>Password
);
parcelHelpers.export(exports, "AuthButton", ()=>AuthButton
);
parcelHelpers.export(exports, "GoToRegistrationLink", ()=>GoToRegistrationLink
);
var _components = require("src/components");
const Title = _components.createTitle({
    text: 'Вход'
});
const Login = _components.createInput({
    label: 'Логин',
    value: '',
    placeholder: 'Введите логин'
});
const Password = _components.createInput({
    label: 'Пароль',
    value: '',
    placeholder: 'Введите пароль',
    type: 'password'
});
const AuthButton = _components.createButton({
    text: 'Авторизоваться',
    type: 'submit',
    block: true
});
const GoToRegistrationLink = _components.createLink({
    href: '/signin',
    text: 'Нет аккаунта?',
    variant: 'secondary',
    block: true
});

},{"src/components":"iKUBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iKUBW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createButton", ()=>_button.createButton
);
parcelHelpers.export(exports, "createInput", ()=>_input.createInput
);
parcelHelpers.export(exports, "createTitle", ()=>_title.createTitle
);
parcelHelpers.export(exports, "createLink", ()=>_link.createLink
);
parcelHelpers.export(exports, "createModal", ()=>_modal.createModal
);
var _button = require("./button/Button");
var _input = require("./input/Input");
var _title = require("./title/Title");
var _link = require("./link/Link");
var _modal = require("./modal/Modal");

},{"./button/Button":"9DTJ0","./input/Input":"15oUl","./title/Title":"lbwJk","./link/Link":"hLUsj","./modal/Modal":"hywE3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9DTJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createButton", ()=>createButton
);
var _getClassNames = require("src/utils/getClassNames");
var _getAttribute = require("src/utils/getAttribute");
var _buttonModuleScss = require("./Button.module.scss");
function createButton({ text , block , variant ='primary' , disabled =false , type , classNames ,  }) {
    const className = _getClassNames.getClassNames(_buttonModuleScss.button, block && _buttonModuleScss.block, _buttonModuleScss[variant], classNames);
    return `
        <button 
            class="${className}" 
            ${_getAttribute.getType(type)}
            ${_getAttribute.getDisabled(disabled)}
        >
            ${text}
        </button>
    `;
}

},{"src/utils/getClassNames":"ffhEk","src/utils/getAttribute":"agQxX","./Button.module.scss":"7cpNo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ffhEk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getClassNames", ()=>getClassNames
);
const getClassNames = (...classNames)=>classNames.filter(Boolean).join(' ')
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"agQxX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDisabled", ()=>getDisabled
);
parcelHelpers.export(exports, "getType", ()=>getType
);
parcelHelpers.export(exports, "getValue", ()=>getValue
);
parcelHelpers.export(exports, "getPlaceholder", ()=>getPlaceholder
);
const getAttribute = (attribute)=>(value)=>value ? `${attribute}="${value}"` : ''
;
const getDisabled = getAttribute('disabled');
const getType = getAttribute('type');
const getValue = getAttribute('value');
const getPlaceholder = getAttribute('placeholder');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7cpNo":[function(require,module,exports) {
module.exports["button"] = "_button_114913";
module.exports["block"] = "_block_114913";
module.exports["primary"] = "_primary_114913";
module.exports["secondary"] = "_secondary_114913";

},{}],"15oUl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInput", ()=>createInput
);
var _getClassNames = require("src/utils/getClassNames");
var _getAttribute = require("src/utils/getAttribute");
var _inputModuleScss = require("./Input.module.scss");
function createInput({ label ='' , value ='' , placeholder ='' , disabled =false , type ='text' , isTouched =false , isError =false , errorMessage ='' ,  }) {
    const attributes = _getClassNames.getClassNames(_getAttribute.getDisabled(disabled), _getAttribute.getType(type), _getAttribute.getValue(value), _getAttribute.getPlaceholder(placeholder));
    const classInputWrapper = _getClassNames.getClassNames(_inputModuleScss.inputWrapper, isError && isTouched && _inputModuleScss.error);
    const isShowErrorMessage = isError && Boolean(errorMessage) && isTouched;
    const ErrorMessage = isShowErrorMessage ? `<div class=${_inputModuleScss.errorMessage}>${errorMessage}</div>` : '';
    return `
        <div class=${_inputModuleScss.container}>
            <label class="${classInputWrapper}">
                <span class="${_inputModuleScss.label}">${label}</span>
                <input ${attributes} class="${_inputModuleScss.input}">
           </label>
           ${ErrorMessage}
       </div>
    `;
}

},{"src/utils/getClassNames":"ffhEk","src/utils/getAttribute":"agQxX","./Input.module.scss":"g2TTY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g2TTY":[function(require,module,exports) {
module.exports["container"] = "_container_4b868e";
module.exports["inputWrapper"] = "_inputWrapper_4b868e";
module.exports["error"] = "_error_4b868e";
module.exports["input"] = "_input_4b868e";
module.exports["label"] = "_label_4b868e";
module.exports["errorMessage"] = "_errorMessage_4b868e";

},{}],"lbwJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createTitle", ()=>createTitle
);
var _titleModuleScss = require("./Title.module.scss");
function createTitle({ text  }) {
    return `
        <h1 class="${_titleModuleScss.title}">
            ${text}
        </h1>
    `;
}

},{"./Title.module.scss":"6U0qe","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6U0qe":[function(require,module,exports) {
module.exports["title"] = "_title_2d7ad8";

},{}],"hLUsj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLink", ()=>createLink
);
var _getClassNames = require("src/utils/getClassNames");
var _linkModuleScss = require("./Link.module.scss");
function createLink({ text , href , block , variant ='primary' , disabled =false , classNames ,  }) {
    const className = _getClassNames.getClassNames(_linkModuleScss.link, block && _linkModuleScss.block, _linkModuleScss[variant], disabled && _linkModuleScss.disabled, classNames);
    return `
        <a class="${className}" href="${href}">
            ${text}
        </a>
    `;
}

},{"src/utils/getClassNames":"ffhEk","./Link.module.scss":"lkWJ6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lkWJ6":[function(require,module,exports) {
module.exports["link"] = "_link_5483d7";
module.exports["disabled"] = "_disabled_5483d7";
module.exports["block"] = "_block_5483d7";
module.exports["primary"] = "_primary_5483d7";
module.exports["secondary"] = "_secondary_5483d7";

},{}],"hywE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createModal", ()=>createModal
);
var _modalModuleScss = require("./Modal.module.scss");
var _modalModuleScssDefault = parcelHelpers.interopDefault(_modalModuleScss);
function createModal({ content  }) {
    return `
        <div class="${_modalModuleScssDefault.default.modalWrapper}">
             <div class="${_modalModuleScssDefault.default.body}">
                ${content}
            </div>
        </div>`;
}

},{"./Modal.module.scss":"ed4Rp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ed4Rp":[function(require,module,exports) {
module.exports["modalWrapper"] = "_modalWrapper_a6fd79";
module.exports["open"] = "_open_a6fd79";
module.exports["body"] = "_body_a6fd79";

},{}],"1TIFp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elements", ()=>elements
);
const elements = {
    root: document.getElementById('root'),
    modal: document.getElementById('modal')
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k5uoI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertHtmlBeforeEnd", ()=>insertHtmlBeforeEnd
);
const insertHtmlBeforeEnd = (element, html)=>{
    element.insertAdjacentHTML('beforeend', html);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Jqzd":[function(require,module,exports) {
module.exports["container"] = "_container_d110dc";
module.exports["form"] = "_form_d110dc";
module.exports["titleWrapper"] = "_titleWrapper_d110dc";
module.exports["inputGroup"] = "_inputGroup_d110dc";
module.exports["inputWrapper"] = "_inputWrapper_d110dc";
module.exports["buttonGroup"] = "_buttonGroup_d110dc";

},{}],"2vdC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSignInPage", ()=>renderSignInPage
);
var _elements = require("src/constants/elements");
var _insertHtml = require("src/utils/insertHtml");
var _signIn = require("src/modules/signIn");
var _signInModuleScss = require("./signIn.module.scss");
var _signInModuleScssDefault = parcelHelpers.interopDefault(_signInModuleScss);
const renderSignInPage = ()=>{
    const html = `
        <div class="${_signInModuleScssDefault.default.container}">
            <form class="${_signInModuleScssDefault.default.form}">
                <div class="${_signInModuleScssDefault.default.titleWrapper}">
                    ${_signIn.Title}
                </div>
                <div class="${_signInModuleScssDefault.default.inputGroup}">
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.Email}</div>
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.Login}</div>
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.FirstName}</div>
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.LastName}</div>
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.Phone}</div>
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.Password}</div>
                    <div class="${_signInModuleScssDefault.default.inputWrapper}">${_signIn.ConfirmPassword}</div>
                </div>
                <div class="${_signInModuleScssDefault.default.buttonGroup}">
                    ${_signIn.RegisterButton}
                    ${_signIn.GoToAuthenticationLink}
                </div>
            </form>
        </div>
    `;
    _insertHtml.insertHtmlBeforeEnd(_elements.elements.root, html);
};

},{"src/constants/elements":"1TIFp","src/utils/insertHtml":"k5uoI","src/modules/signIn":"kUMvP","./signIn.module.scss":"cMyEd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kUMvP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConfirmPassword", ()=>_components.ConfirmPassword
);
parcelHelpers.export(exports, "Email", ()=>_components.Email
);
parcelHelpers.export(exports, "FirstName", ()=>_components.FirstName
);
parcelHelpers.export(exports, "GoToAuthenticationLink", ()=>_components.GoToAuthenticationLink
);
parcelHelpers.export(exports, "LastName", ()=>_components.LastName
);
parcelHelpers.export(exports, "Login", ()=>_components.Login
);
parcelHelpers.export(exports, "Password", ()=>_components.Password
);
parcelHelpers.export(exports, "Phone", ()=>_components.Phone
);
parcelHelpers.export(exports, "RegisterButton", ()=>_components.RegisterButton
);
parcelHelpers.export(exports, "Title", ()=>_components.Title
);
var _components = require("./components/components");

},{"./components/components":"8jCg6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8jCg6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Title", ()=>Title
);
parcelHelpers.export(exports, "Email", ()=>Email
);
parcelHelpers.export(exports, "Login", ()=>Login
);
parcelHelpers.export(exports, "FirstName", ()=>FirstName
);
parcelHelpers.export(exports, "LastName", ()=>LastName
);
parcelHelpers.export(exports, "Phone", ()=>Phone
);
parcelHelpers.export(exports, "Password", ()=>Password
);
parcelHelpers.export(exports, "ConfirmPassword", ()=>ConfirmPassword
);
parcelHelpers.export(exports, "RegisterButton", ()=>RegisterButton
);
parcelHelpers.export(exports, "GoToAuthenticationLink", ()=>GoToAuthenticationLink
);
var _components = require("src/components");
const Title = _components.createTitle({
    text: 'Регистрация'
});
const Email = _components.createInput({
    label: 'Почта',
    value: '',
    placeholder: 'Введите почту',
    type: 'mail'
});
const Login = _components.createInput({
    label: 'Логин',
    value: '',
    placeholder: 'Введите логин'
});
const FirstName = _components.createInput({
    label: 'Имя',
    value: '',
    placeholder: 'Введите имя'
});
const LastName = _components.createInput({
    label: 'Фамилия',
    value: '',
    placeholder: 'Введите фамилию'
});
const Phone = _components.createInput({
    label: 'Телефон',
    value: '',
    placeholder: 'Введите телефон',
    type: 'phone'
});
const Password = _components.createInput({
    label: 'Пароль',
    value: '',
    placeholder: 'Введите пароль',
    type: 'password'
});
const ConfirmPassword = _components.createInput({
    label: 'Пароль (еще раз)',
    value: '',
    placeholder: 'Пароль (еще раз)',
    type: 'password'
});
const RegisterButton = _components.createButton({
    text: 'Зарегистрироваться',
    type: 'submit',
    block: true
});
const GoToAuthenticationLink = _components.createLink({
    href: '/',
    text: 'Войти',
    variant: 'secondary',
    block: true
});

},{"src/components":"iKUBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cMyEd":[function(require,module,exports) {
module.exports["container"] = "_container_e888ab";
module.exports["form"] = "_form_e888ab";
module.exports["titleWrapper"] = "_titleWrapper_e888ab";
module.exports["inputGroup"] = "_inputGroup_e888ab";
module.exports["inputWrapper"] = "_inputWrapper_e888ab";
module.exports["buttonGroup"] = "_buttonGroup_e888ab";

},{}],"1DiqK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderChatPage", ()=>renderChatPage
);
var _elements = require("src/constants/elements");
var _insertHtml = require("src/utils/insertHtml");
var _icons = require("src/static/icons");
var _chat = require("src/modules/chat");
var _chatModuleScss = require("./chat.module.scss");
var _chatModuleScssDefault = parcelHelpers.interopDefault(_chatModuleScss);
const renderChatPage = ()=>{
    const html = `
        <div class="${_chatModuleScssDefault.default.container}">
            <aside class="${_chatModuleScssDefault.default.sidebar}">
                <div class="${_chatModuleScssDefault.default.sidebarHeader}">
                    <a href="/profile" class="${_chatModuleScssDefault.default.profileLink}">
                        Профиль<img src="${_icons.More}"/>
                    </a>
                    <div class="${_chatModuleScssDefault.default.searchWrapper}">
                       ${_chat.Search}
                    </div>
                </div>
                <div class="${_chatModuleScssDefault.default.usersListWrapper}">
                    ${_chat.UsersList}
                </div>
            </aside>
            <section class="${_chatModuleScssDefault.default.main}">
                <div class="${_chatModuleScssDefault.default.profileWrapper}">
                    ${_chat.Profile}
                </div>   
                <div class="${_chatModuleScssDefault.default.messageListWrapper}">
                    ${_chat.MessagesList}
                </div>
                <div class="${_chatModuleScssDefault.default.messageFormWrapper}">
                    ${_chat.MessageForm}
                </div>
            </section>
        </div>`;
    _insertHtml.insertHtmlBeforeEnd(_elements.elements.root, html);
};

},{"src/constants/elements":"1TIFp","src/utils/insertHtml":"k5uoI","src/static/icons":"1S2Cf","src/modules/chat":"3i2ED","./chat.module.scss":"3YXFG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1S2Cf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "More", ()=>_moreSvgDefault.default
);
parcelHelpers.export(exports, "Search", ()=>_searchSvgDefault.default
);
parcelHelpers.export(exports, "DefaultAvatar", ()=>_defaultAvatarSvgDefault.default
);
parcelHelpers.export(exports, "ThreePoint", ()=>_threePointSvgDefault.default
);
parcelHelpers.export(exports, "Clip", ()=>_clipSvgDefault.default
);
parcelHelpers.export(exports, "ArrowRight", ()=>_arrowRightSvgDefault.default
);
var _moreSvg = require("./more.svg");
var _moreSvgDefault = parcelHelpers.interopDefault(_moreSvg);
var _searchSvg = require("./search.svg");
var _searchSvgDefault = parcelHelpers.interopDefault(_searchSvg);
var _defaultAvatarSvg = require("./default-avatar.svg");
var _defaultAvatarSvgDefault = parcelHelpers.interopDefault(_defaultAvatarSvg);
var _threePointSvg = require("./threePoint.svg");
var _threePointSvgDefault = parcelHelpers.interopDefault(_threePointSvg);
var _clipSvg = require("./clip.svg");
var _clipSvgDefault = parcelHelpers.interopDefault(_clipSvg);
var _arrowRightSvg = require("./arrowRight.svg");
var _arrowRightSvgDefault = parcelHelpers.interopDefault(_arrowRightSvg);

},{"./more.svg":"4eQ7U","./search.svg":"hD2uO","./default-avatar.svg":"4C4XX","./threePoint.svg":"82iRo","./clip.svg":"ctCAG","./arrowRight.svg":"3Re9T","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4eQ7U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "more.a521bb68.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hD2uO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "search.0bd1c8e4.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4C4XX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "default-avatar.98fdf701.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"82iRo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "threePoint.6609e6ef.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"ctCAG":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "clip.4d1f3086.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3Re9T":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hjDlF') + "arrowRight.695635a0.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3i2ED":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Search", ()=>Search
);
parcelHelpers.export(exports, "UsersList", ()=>UsersList
);
parcelHelpers.export(exports, "Profile", ()=>Profile
);
parcelHelpers.export(exports, "MessagesList", ()=>MessagesList
);
parcelHelpers.export(exports, "MessageForm", ()=>MessageForm
);
var _search = require("./components/search/Search");
var _usersList = require("./components/usersList/UsersList");
var _profile = require("./components/profile/Profile");
var _messagesList = require("./components/messagesList/MessagesList");
var _messageForm = require("./components/messageForm/MessageForm");
const Search = _search.createSearch();
const UsersList = _usersList.createUsersList();
const Profile = _profile.createProfile();
const MessagesList = _messagesList.createMessagesList();
const MessageForm = _messageForm.createMessageForm();

},{"./components/search/Search":"dnOSn","./components/usersList/UsersList":"kbkim","./components/profile/Profile":"gC8La","./components/messagesList/MessagesList":"kuwY2","./components/messageForm/MessageForm":"7Ybrx","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dnOSn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSearch", ()=>createSearch
);
var _icons = require("src/static/icons");
var _searchModuleScss = require("./Search.module.scss");
var _searchModuleScssDefault = parcelHelpers.interopDefault(_searchModuleScss);
function createSearch() {
    return `
         <input type="text" class="${_searchModuleScssDefault.default.search}" placeholder="Поиск"/>
         <img src="${_icons.Search}" class="${_searchModuleScssDefault.default.searchIcon}">
    `;
}

},{"src/static/icons":"1S2Cf","./Search.module.scss":"9b5ns","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9b5ns":[function(require,module,exports) {
module.exports["search"] = "_search_64bad5";
module.exports["searchIcon"] = "_searchIcon_64bad5";

},{}],"kbkim":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUsersList", ()=>createUsersList
);
var _userItem = require("./userItem/UserItem");
const createUsersList = ()=>[
        ...Array(20).keys()
    ].map((el)=>_userItem.createUserItem()
    ).join('')
;

},{"./userItem/UserItem":"b76Pg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"b76Pg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createUserItem", ()=>createUserItem
);
var _icons = require("src/static/icons");
var _userItemModuleScss = require("./UserItem.module.scss");
var _userItemModuleScssDefault = parcelHelpers.interopDefault(_userItemModuleScss);
function createUserItem() {
    return `
        <article class="${_userItemModuleScssDefault.default.container}">
            <img class="${_userItemModuleScssDefault.default.avatar}" src="${_icons.DefaultAvatar}">
            <div class="${_userItemModuleScssDefault.default.content}">
                <h3 class="${_userItemModuleScssDefault.default.name}">Илья</h3>
                <div class="${_userItemModuleScssDefault.default.message}">
                    Так увлёкся работой по курсу, что совсем забыл его анонсир...
                    Так увлёкся работой по курсу, что совсем забыл его анонсир...  
                </div>
            </div>                  
            <div class="${_userItemModuleScssDefault.default.time}">10:49</div>
            <div class="${_userItemModuleScssDefault.default.messageCounter}">3</div>
        </article>
    `;
}

},{"src/static/icons":"1S2Cf","./UserItem.module.scss":"7QnoN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7QnoN":[function(require,module,exports) {
module.exports["container"] = "_container_61193c";
module.exports["content"] = "_content_61193c";
module.exports["avatar"] = "_avatar_61193c";
module.exports["name"] = "_name_61193c";
module.exports["message"] = "_message_61193c";
module.exports["time"] = "_time_61193c";
module.exports["messageCounter"] = "_messageCounter_61193c";

},{}],"gC8La":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createProfile", ()=>createProfile
);
var _icons = require("src/static/icons");
var _profileModuleScss = require("./Profile.module.scss");
var _profileModuleScssDefault = parcelHelpers.interopDefault(_profileModuleScss);
function createProfile() {
    return `
        <header class="${_profileModuleScssDefault.default.container}">
            <img class="${_profileModuleScssDefault.default.avatar}" src="${_icons.DefaultAvatar}">
            <h3 class="${_profileModuleScssDefault.default.username}">Илья</h3>
            <button class="${_profileModuleScssDefault.default.dropdown}">
                <img src="${_icons.ThreePoint}">
            </button>
        </header>
    `;
}

},{"src/static/icons":"1S2Cf","./Profile.module.scss":"7Uolu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Uolu":[function(require,module,exports) {
module.exports["container"] = "_container_2be156";
module.exports["avatar"] = "_avatar_2be156";
module.exports["username"] = "_username_2be156";
module.exports["dropdown"] = "_dropdown_2be156";

},{}],"kuwY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMessagesList", ()=>createMessagesList
);
var _messagesListModuleScss = require("./MessagesList.module.scss");
var _messagesListModuleScssDefault = parcelHelpers.interopDefault(_messagesListModuleScss);
var _messageItem = require("./messageItem/MessageItem");
const createMessagesList = ()=>`
    <div class="${_messagesListModuleScssDefault.default.container}">
        ${[
        ...Array(20).keys()
    ].map((el)=>_messageItem.createMessageItem(el % 2 === 0)
    ).join('')}
    </div>
`
;

},{"./MessagesList.module.scss":"hRbTr","./messageItem/MessageItem":"b9FNS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hRbTr":[function(require,module,exports) {
module.exports["container"] = "_container_8839a3";

},{}],"b9FNS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMessageItem", ()=>createMessageItem
);
var _getClassNames = require("src/utils/getClassNames");
var _messageItemModuleScss = require("./MessageItem.module.scss");
var _messageItemModuleScssDefault = parcelHelpers.interopDefault(_messageItemModuleScss);
function createMessageItem(isMine) {
    const className = _getClassNames.getClassNames(_messageItemModuleScssDefault.default.container, isMine && _messageItemModuleScssDefault.default.myMessage);
    return `
        <div class="${className}">
             Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
             Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
            <span class="${_messageItemModuleScssDefault.default.messageTime}">12:00</span>
        </div>
    `;
}

},{"src/utils/getClassNames":"ffhEk","./MessageItem.module.scss":"iqSeg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iqSeg":[function(require,module,exports) {
module.exports["container"] = "_container_777043";
module.exports["messageTime"] = "_messageTime_777043";
module.exports["myMessage"] = "_myMessage_777043";

},{}],"7Ybrx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMessageForm", ()=>createMessageForm
);
var _icons = require("src/static/icons");
var _messageFormModuleScss = require("./MessageForm.module.scss");
var _messageFormModuleScssDefault = parcelHelpers.interopDefault(_messageFormModuleScss);
function createMessageForm() {
    return `
        <div class="${_messageFormModuleScssDefault.default.container}">
            <button class="${_messageFormModuleScssDefault.default.iconButton}">
                <img src="${_icons.Clip}">
            </button>
            <input type="text" class="${_messageFormModuleScssDefault.default.messageInput}" placeholder="Сообщение">
            <button class="${_messageFormModuleScssDefault.default.iconButton}">
                <img src="${_icons.ArrowRight}">
            </button>
        </div>
    `;
}

},{"src/static/icons":"1S2Cf","./MessageForm.module.scss":"LSBSZ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"LSBSZ":[function(require,module,exports) {
module.exports["container"] = "_container_9f0b72";
module.exports["iconButton"] = "_iconButton_9f0b72";
module.exports["messageInput"] = "_messageInput_9f0b72";

},{}],"3YXFG":[function(require,module,exports) {
module.exports["container"] = "_container_dc993f";
module.exports["sidebar"] = "_sidebar_dc993f";
module.exports["sidebarHeader"] = "_sidebarHeader_dc993f";
module.exports["profileLink"] = "_profileLink_dc993f";
module.exports["searchWrapper"] = "_searchWrapper_dc993f";
module.exports["usersListWrapper"] = "_usersListWrapper_dc993f";
module.exports["main"] = "_main_dc993f";
module.exports["profileWrapper"] = "_profileWrapper_dc993f";
module.exports["messageListWrapper"] = "_messageListWrapper_dc993f";
module.exports["messageFormWrapper"] = "_messageFormWrapper_dc993f";

},{}],"7TX7d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render404Page", ()=>render404Page
);
parcelHelpers.export(exports, "render500Page", ()=>render500Page
);
var _elements = require("src/constants/elements");
var _insertHtml = require("src/utils/insertHtml");
var _components = require("src/components");
var _errorPageModuleScss = require("./errorPage.module.scss");
var _errorPageModuleScssDefault = parcelHelpers.interopDefault(_errorPageModuleScss);
const TITLE_404 = '404';
const DESCRIPTION_404 = 'Не туда попали';
const renderPage = ({ title =TITLE_404 , description =DESCRIPTION_404  })=>()=>{
        const html = `
        <div class="${_errorPageModuleScssDefault.default.container}">
            <div class="${_errorPageModuleScssDefault.default.content}">
                ${_components.createTitle({
            text: title
        })}
                <div class="${_errorPageModuleScssDefault.default.descriptionWrapper}"> 
                    <p>${description}</p>
                </div>
                <div class="${_errorPageModuleScssDefault.default.linkWrapper}">
                    <a href="/chat">Назад к чатам</a>
                </div>
            </div>
        </div>`;
        _insertHtml.insertHtmlBeforeEnd(_elements.elements.root, html);
    }
;
const render404Page = renderPage({
});
const render500Page = renderPage({
    title: '500',
    description: 'Мы уже фиксим'
});

},{"src/constants/elements":"1TIFp","src/utils/insertHtml":"k5uoI","src/components":"iKUBW","./errorPage.module.scss":"geZFo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"geZFo":[function(require,module,exports) {
module.exports["container"] = "_container_6ca621";
module.exports["content"] = "_content_6ca621";
module.exports["descriptionWrapper"] = "_descriptionWrapper_6ca621";
module.exports["linkWrapper"] = "_linkWrapper_6ca621";

},{}]},["j1F46","hD4hw"], "hD4hw", "parcelRequire05aa")

//# sourceMappingURL=index.379dd93c.js.map
