import defaultConfig from '@w5s/commitlint-config';

// src/index.ts

// ../../node_modules/@commitlint/types/lib/rules.js
var RuleConfigSeverity;
(function(RuleConfigSeverity2) {
  RuleConfigSeverity2[RuleConfigSeverity2["Disabled"] = 0] = "Disabled";
  RuleConfigSeverity2[RuleConfigSeverity2["Warning"] = 1] = "Warning";
  RuleConfigSeverity2[RuleConfigSeverity2["Error"] = 2] = "Error";
})(RuleConfigSeverity || (RuleConfigSeverity = {}));
var RuleConfigQuality;
(function(RuleConfigQuality2) {
  RuleConfigQuality2[RuleConfigQuality2["User"] = 0] = "User";
  RuleConfigQuality2[RuleConfigQuality2["Qualified"] = 1] = "Qualified";
})(RuleConfigQuality || (RuleConfigQuality = {}));

// src/index.ts
var config = {
  ...defaultConfig,
  rules: {
    ...defaultConfig.rules,
    "header-max-length": [RuleConfigSeverity.Error, "always", 100],
    "body-max-line-length": [RuleConfigSeverity.Disabled, "always", Number.POSITIVE_INFINITY],
    "footer-max-line-length": [RuleConfigSeverity.Disabled, "always", Number.POSITIVE_INFINITY]
  }
};
var index_default = config;

export { index_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map