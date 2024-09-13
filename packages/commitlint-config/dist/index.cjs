'use strict';

var defaultConfig = require('@w5s/commitlint-config');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var defaultConfig__default = /*#__PURE__*/_interopDefault(defaultConfig);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  __defProp(target, "default", { value: mod, enumerable: true }) ,
  mod
));

// ../../node_modules/@commitlint/types/lib/ensure.js
var require_ensure = __commonJS({
  "../../node_modules/@commitlint/types/lib/ensure.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/format.js
var require_format = __commonJS({
  "../../node_modules/@commitlint/types/lib/format.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/is-ignored.js
var require_is_ignored = __commonJS({
  "../../node_modules/@commitlint/types/lib/is-ignored.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/lint.js
var require_lint = __commonJS({
  "../../node_modules/@commitlint/types/lib/lint.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/load.js
var require_load = __commonJS({
  "../../node_modules/@commitlint/types/lib/load.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/parse.js
var require_parse = __commonJS({
  "../../node_modules/@commitlint/types/lib/parse.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/prompt.js
var require_prompt = __commonJS({
  "../../node_modules/@commitlint/types/lib/prompt.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/@commitlint/types/lib/rules.js
var require_rules = __commonJS({
  "../../node_modules/@commitlint/types/lib/rules.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RuleConfigQuality = exports.RuleConfigSeverity = void 0;
    var RuleConfigSeverity2;
    (function(RuleConfigSeverity3) {
      RuleConfigSeverity3[RuleConfigSeverity3["Disabled"] = 0] = "Disabled";
      RuleConfigSeverity3[RuleConfigSeverity3["Warning"] = 1] = "Warning";
      RuleConfigSeverity3[RuleConfigSeverity3["Error"] = 2] = "Error";
    })(RuleConfigSeverity2 || (exports.RuleConfigSeverity = RuleConfigSeverity2 = {}));
    var RuleConfigQuality;
    (function(RuleConfigQuality2) {
      RuleConfigQuality2[RuleConfigQuality2["User"] = 0] = "User";
      RuleConfigQuality2[RuleConfigQuality2["Qualified"] = 1] = "Qualified";
    })(RuleConfigQuality || (exports.RuleConfigQuality = RuleConfigQuality = {}));
  }
});

// ../../node_modules/@commitlint/types/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/@commitlint/types/lib/index.js"(exports) {
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ensure(), exports);
    __exportStar(require_format(), exports);
    __exportStar(require_is_ignored(), exports);
    __exportStar(require_lint(), exports);
    __exportStar(require_load(), exports);
    __exportStar(require_parse(), exports);
    __exportStar(require_prompt(), exports);
    __exportStar(require_rules(), exports);
  }
});

// src/index.ts
var import_types = __toESM(require_lib());
var config = {
  ...defaultConfig__default.default,
  rules: {
    ...defaultConfig__default.default.rules,
    "header-max-length": [import_types.RuleConfigSeverity.Error, "always", 100],
    "body-max-line-length": [import_types.RuleConfigSeverity.Disabled, "always", Number.POSITIVE_INFINITY],
    "footer-max-line-length": [import_types.RuleConfigSeverity.Disabled, "always", Number.POSITIVE_INFINITY]
  }
};
var src_default = config;

module.exports = src_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map