var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/pretty-format/node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      styles2.color.ansi256 = wrapAnsi256();
      styles2.color.ansi16m = wrapAnsi16m();
      styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles2, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex2) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex2.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = colorString.split("").map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex2) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex2)),
          enumerable: false
        }
      });
      return styles2;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/pretty-format/build/collections.js
var require_collections = __commonJS({
  "node_modules/pretty-format/build/collections.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printIteratorEntries = printIteratorEntries;
    exports.printIteratorValues = printIteratorValues;
    exports.printListItems = printListItems;
    exports.printObjectProperties = printObjectProperties;
    var getKeysOfEnumerableProperties = (object2, compareKeys) => {
      const rawKeys = Object.keys(object2);
      const keys2 = compareKeys !== null ? rawKeys.sort(compareKeys) : rawKeys;
      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object2).forEach((symbol) => {
          if (Object.getOwnPropertyDescriptor(object2, symbol).enumerable) {
            keys2.push(symbol);
          }
        });
      }
      return keys2;
    };
    function printIteratorEntries(iterator, config2, indentation, depth, refs, printer, separator = ": ") {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config2.maxWidth) {
            result += "\u2026";
            break;
          }
          const name = printer(
            current.value[0],
            config2,
            indentationNext,
            depth,
            refs
          );
          const value = printer(
            current.value[1],
            config2,
            indentationNext,
            depth,
            refs
          );
          result += name + separator + value;
          current = iterator.next();
          if (!current.done) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printIteratorValues(iterator, config2, indentation, depth, refs, printer) {
      let result = "";
      let width = 0;
      let current = iterator.next();
      if (!current.done) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        while (!current.done) {
          result += indentationNext;
          if (width++ === config2.maxWidth) {
            result += "\u2026";
            break;
          }
          result += printer(current.value, config2, indentationNext, depth, refs);
          current = iterator.next();
          if (!current.done) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printListItems(list, config2, indentation, depth, refs, printer) {
      let result = "";
      if (list.length) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        for (let i2 = 0; i2 < list.length; i2++) {
          result += indentationNext;
          if (i2 === config2.maxWidth) {
            result += "\u2026";
            break;
          }
          if (i2 in list) {
            result += printer(list[i2], config2, indentationNext, depth, refs);
          }
          if (i2 < list.length - 1) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
    function printObjectProperties(val, config2, indentation, depth, refs, printer) {
      let result = "";
      const keys2 = getKeysOfEnumerableProperties(val, config2.compareKeys);
      if (keys2.length) {
        result += config2.spacingOuter;
        const indentationNext = indentation + config2.indent;
        for (let i2 = 0; i2 < keys2.length; i2++) {
          const key = keys2[i2];
          const name = printer(key, config2, indentationNext, depth, refs);
          const value = printer(val[key], config2, indentationNext, depth, refs);
          result += `${indentationNext + name}: ${value}`;
          if (i2 < keys2.length - 1) {
            result += `,${config2.spacingInner}`;
          } else if (!config2.min) {
            result += ",";
          }
        }
        result += config2.spacingOuter + indentation;
      }
      return result;
    }
  }
});

// node_modules/pretty-format/build/plugins/AsymmetricMatcher.js
var require_AsymmetricMatcher = __commonJS({
  "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var asymmetricMatcher = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621;
    var SPACE = " ";
    var serialize2 = (val, config2, indentation, depth, refs, printer) => {
      const stringedValue = val.toString();
      if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config2.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}[${(0, _collections.printListItems)(
          val.sample,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}]`;
      }
      if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config2.maxDepth) {
          return `[${stringedValue}]`;
        }
        return `${stringedValue + SPACE}{${(0, _collections.printObjectProperties)(
          val.sample,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}}`;
      }
      if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
        return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
      }
      if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
        return stringedValue + SPACE + printer(val.sample, config2, indentation, depth, refs);
      }
      if (typeof val.toAsymmetricMatcher !== "function") {
        throw new Error(
          `Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`
        );
      }
      return val.toAsymmetricMatcher();
    };
    exports.serialize = serialize2;
    var test3 = (val) => val && val.$$typeof === asymmetricMatcher;
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/DOMCollection.js
var require_DOMCollection = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var SPACE = " ";
    var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
    var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
    var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
    var test3 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
    exports.test = test3;
    var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
    var serialize2 = (collection, config2, indentation, depth, refs, printer) => {
      const name = collection.constructor.name;
      if (++depth > config2.maxDepth) {
        return `[${name}]`;
      }
      return (config2.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? `{${(0, _collections.printObjectProperties)(
        isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
          props[attribute.name] = attribute.value;
          return props;
        }, {}) : {
          ...collection
        },
        config2,
        indentation,
        depth,
        refs,
        printer
      )}}` : `[${(0, _collections.printListItems)(
        Array.from(collection),
        config2,
        indentation,
        depth,
        refs,
        printer
      )}]`);
    };
    exports.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/lib/escapeHTML.js
var require_escapeHTML = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = escapeHTML;
    function escapeHTML(str) {
      return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }
});

// node_modules/pretty-format/build/plugins/lib/markup.js
var require_markup = __commonJS({
  "node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0;
    var _escapeHTML = _interopRequireDefault(require_escapeHTML());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var printProps = (keys2, props, config2, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config2.indent;
      const colors2 = config2.colors;
      return keys2.map((key) => {
        const value = props[key];
        let printed = printer(value, config2, indentationNext, depth, refs);
        if (typeof value !== "string") {
          if (printed.indexOf("\n") !== -1) {
            printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
          }
          printed = `{${printed}}`;
        }
        return `${config2.spacingInner + indentation + colors2.prop.open + key + colors2.prop.close}=${colors2.value.open}${printed}${colors2.value.close}`;
      }).join("");
    };
    exports.printProps = printProps;
    var printChildren = (children, config2, indentation, depth, refs, printer) => children.map(
      (child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer(child, config2, indentation, depth, refs))
    ).join("");
    exports.printChildren = printChildren;
    var printText = (text, config2) => {
      const contentColor = config2.colors.content;
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
    };
    exports.printText = printText;
    var printComment = (comment, config2) => {
      const commentColor = config2.colors.comment;
      return `${commentColor.open}<!--${(0, _escapeHTML.default)(comment)}-->${commentColor.close}`;
    };
    exports.printComment = printComment;
    var printElement = (type2, printedProps, printedChildren, config2, indentation) => {
      const tagColor = config2.colors.tag;
      return `${tagColor.open}<${type2}${printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config2.spacingOuter}${indentation}${tagColor.open}</${type2}` : `${printedProps && !config2.min ? "" : " "}/`}>${tagColor.close}`;
    };
    exports.printElement = printElement;
    var printElementAsLeaf = (type2, config2) => {
      const tagColor = config2.colors.tag;
      return `${tagColor.open}<${type2}${tagColor.close} \u2026${tagColor.open} />${tagColor.close}`;
    };
    exports.printElementAsLeaf = printElementAsLeaf;
  }
});

// node_modules/pretty-format/build/plugins/DOMElement.js
var require_DOMElement = __commonJS({
  "node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var ELEMENT_NODE = 1;
    var TEXT_NODE = 3;
    var COMMENT_NODE = 8;
    var FRAGMENT_NODE = 11;
    var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
    var testHasAttribute = (val) => {
      try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
      } catch {
        return false;
      }
    };
    var testNode = (val) => {
      const constructorName = val.constructor.name;
      const { nodeType, tagName } = val;
      const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
      return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
    };
    var test3 = (val) => {
      var _a2;
      return ((_a2 = val == null ? void 0 : val.constructor) == null ? void 0 : _a2.name) && testNode(val);
    };
    exports.test = test3;
    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE;
    }
    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE;
    }
    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE;
    }
    var serialize2 = (node, config2, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, _markup.printText)(node.data, config2);
      }
      if (nodeIsComment(node)) {
        return (0, _markup.printComment)(node.data, config2);
      }
      const type2 = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config2.maxDepth) {
        return (0, _markup.printElementAsLeaf)(type2, config2);
      }
      return (0, _markup.printElement)(
        type2,
        (0, _markup.printProps)(
          nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(),
          nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
            props[attribute.name] = attribute.value;
            return props;
          }, {}),
          config2,
          indentation + config2.indent,
          depth,
          refs,
          printer
        ),
        (0, _markup.printChildren)(
          Array.prototype.slice.call(node.childNodes || node.children),
          config2,
          indentation + config2.indent,
          depth,
          refs,
          printer
        ),
        config2,
        indentation
      );
    };
    exports.serialize = serialize2;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/Immutable.js
var require_Immutable = __commonJS({
  "node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _collections = require_collections();
    var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
    var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
    var IS_KEYED_SENTINEL2 = "@@__IMMUTABLE_KEYED__@@";
    var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
    var IS_ORDERED_SENTINEL2 = "@@__IMMUTABLE_ORDERED__@@";
    var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
    var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
    var IS_SET_SENTINEL2 = "@@__IMMUTABLE_SET__@@";
    var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
    var getImmutableName = (name) => `Immutable.${name}`;
    var printAsLeaf = (name) => `[${name}]`;
    var SPACE = " ";
    var LAZY = "\u2026";
    var printImmutableEntries = (val, config2, indentation, depth, refs, printer, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : `${getImmutableName(type2) + SPACE}{${(0, _collections.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer
    )}}`;
    function getRecordEntries(val) {
      let i2 = 0;
      return {
        next() {
          if (i2 < val._keys.length) {
            const key = val._keys[i2++];
            return {
              done: false,
              value: [key, val.get(key)]
            };
          }
          return {
            done: true,
            value: void 0
          };
        }
      };
    }
    var printImmutableRecord = (val, config2, indentation, depth, refs, printer) => {
      const name = getImmutableName(val._name || "Record");
      return ++depth > config2.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${(0, _collections.printIteratorEntries)(
        getRecordEntries(val),
        config2,
        indentation,
        depth,
        refs,
        printer
      )}}`;
    };
    var printImmutableSeq = (val, config2, indentation, depth, refs, printer) => {
      const name = getImmutableName("Seq");
      if (++depth > config2.maxDepth) {
        return printAsLeaf(name);
      }
      if (val[IS_KEYED_SENTINEL2]) {
        return `${name + SPACE}{${// from Immutable collection of entries or from ECMAScript object
        val._iter || val._object ? (0, _collections.printIteratorEntries)(
          val.entries(),
          config2,
          indentation,
          depth,
          refs,
          printer
        ) : LAZY}}`;
      }
      return `${name + SPACE}[${val._iter || // from Immutable collection of values
      val._array || // from ECMAScript array
      val._collection || // from ECMAScript collection in immutable v4
      val._iterable ? (0, _collections.printIteratorValues)(
        val.values(),
        config2,
        indentation,
        depth,
        refs,
        printer
      ) : LAZY}]`;
    };
    var printImmutableValues = (val, config2, indentation, depth, refs, printer, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : `${getImmutableName(type2) + SPACE}[${(0, _collections.printIteratorValues)(
      val.values(),
      config2,
      indentation,
      depth,
      refs,
      printer
    )}]`;
    var serialize2 = (val, config2, indentation, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL2] ? "OrderedMap" : "Map"
        );
      }
      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          "List"
        );
      }
      if (val[IS_SET_SENTINEL2]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL2] ? "OrderedSet" : "Set"
        );
      }
      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer,
          "Stack"
        );
      }
      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config2, indentation, depth, refs, printer);
      }
      return printImmutableRecord(val, config2, indentation, depth, refs, printer);
    };
    exports.serialize = serialize2;
    var test3 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b2 = Symbol.for("react.element");
    var c = Symbol.for("react.portal");
    var d = Symbol.for("react.fragment");
    var e = Symbol.for("react.strict_mode");
    var f2 = Symbol.for("react.profiler");
    var g2 = Symbol.for("react.provider");
    var h = Symbol.for("react.context");
    var k = Symbol.for("react.server_context");
    var l2 = Symbol.for("react.forward_ref");
    var m2 = Symbol.for("react.suspense");
    var n2 = Symbol.for("react.suspense_list");
    var p = Symbol.for("react.memo");
    var q = Symbol.for("react.lazy");
    var t = Symbol.for("react.offscreen");
    var u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch (r) {
          case b2:
            switch (a = a.type, a) {
              case d:
              case f2:
              case e:
              case m2:
              case n2:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l2:
                  case q:
                  case p:
                  case g2:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    exports.ContextConsumer = h;
    exports.ContextProvider = g2;
    exports.Element = b2;
    exports.ForwardRef = l2;
    exports.Fragment = d;
    exports.Lazy = q;
    exports.Memo = p;
    exports.Portal = c;
    exports.Profiler = f2;
    exports.StrictMode = e;
    exports.Suspense = m2;
    exports.SuspenseList = n2;
    exports.isAsyncMode = function() {
      return false;
    };
    exports.isConcurrentMode = function() {
      return false;
    };
    exports.isContextConsumer = function(a) {
      return v(a) === h;
    };
    exports.isContextProvider = function(a) {
      return v(a) === g2;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === b2;
    };
    exports.isForwardRef = function(a) {
      return v(a) === l2;
    };
    exports.isFragment = function(a) {
      return v(a) === d;
    };
    exports.isLazy = function(a) {
      return v(a) === q;
    };
    exports.isMemo = function(a) {
      return v(a) === p;
    };
    exports.isPortal = function(a) {
      return v(a) === c;
    };
    exports.isProfiler = function(a) {
      return v(a) === f2;
    };
    exports.isStrictMode = function(a) {
      return v(a) === e;
    };
    exports.isSuspense = function(a) {
      return v(a) === m2;
    };
    exports.isSuspenseList = function(a) {
      return v(a) === n2;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f2 || a === e || a === m2 || a === n2 || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g2 || a.$$typeof === h || a.$$typeof === l2 || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
    };
    exports.typeOf = v;
  }
});

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type2) {
          if (typeof type2 === "string" || typeof type2 === "function") {
            return true;
          }
          if (type2 === REACT_FRAGMENT_TYPE || type2 === REACT_PROFILER_TYPE || enableDebugTracing || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type2 === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type2 === "object" && type2 !== null) {
            if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type2.$$typeof === REACT_MODULE_REFERENCE || type2.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function typeOf3(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type2 = object2.type;
                switch (type2) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type2;
                  default:
                    var $$typeofType = type2 && type2.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object2) {
          return typeOf3(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf3(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf3(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf3(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf3(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf3(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf3(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf3(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf3(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf3(object2) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object2) {
          return typeOf3(object2) === REACT_SUSPENSE_LIST_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.SuspenseList = SuspenseList;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isSuspenseList = isSuspenseList;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf3;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/pretty-format/build/plugins/ReactElement.js
var require_ReactElement = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var ReactIs = _interopRequireWildcard(require_react_is());
    var _markup = require_markup();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache2 = _getRequireWildcardCache(nodeInterop);
      if (cache2 && cache2.has(obj)) {
        return cache2.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache2) {
        cache2.set(obj, newObj);
      }
      return newObj;
    }
    var getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach((item) => {
          getChildren(item, children);
        });
      } else if (arg != null && arg !== false) {
        children.push(arg);
      }
      return children;
    };
    var getType3 = (element) => {
      const type2 = element.type;
      if (typeof type2 === "string") {
        return type2;
      }
      if (typeof type2 === "function") {
        return type2.displayName || type2.name || "Unknown";
      }
      if (ReactIs.isFragment(element)) {
        return "React.Fragment";
      }
      if (ReactIs.isSuspense(element)) {
        return "React.Suspense";
      }
      if (typeof type2 === "object" && type2 !== null) {
        if (ReactIs.isContextProvider(element)) {
          return "Context.Provider";
        }
        if (ReactIs.isContextConsumer(element)) {
          return "Context.Consumer";
        }
        if (ReactIs.isForwardRef(element)) {
          if (type2.displayName) {
            return type2.displayName;
          }
          const functionName3 = type2.render.displayName || type2.render.name || "";
          return functionName3 !== "" ? `ForwardRef(${functionName3})` : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
          const functionName3 = type2.displayName || type2.type.displayName || type2.type.name || "";
          return functionName3 !== "" ? `Memo(${functionName3})` : "Memo";
        }
      }
      return "UNDEFINED";
    };
    var getPropKeys = (element) => {
      const { props } = element;
      return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
    };
    var serialize2 = (element, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(getType3(element), config2) : (0, _markup.printElement)(
      getType3(element),
      (0, _markup.printProps)(
        getPropKeys(element),
        element.props,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ),
      (0, _markup.printChildren)(
        getChildren(element.props.children),
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ),
      config2,
      indentation
    );
    exports.serialize = serialize2;
    var test3 = (val) => val != null && ReactIs.isElement(val);
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/plugins/ReactTestComponent.js
var require_ReactTestComponent = __commonJS({
  "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.test = exports.serialize = exports.default = void 0;
    var _markup = require_markup();
    var Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol;
    var testSymbol = typeof Symbol2 === "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487;
    var getPropKeys = (object2) => {
      const { props } = object2;
      return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
    };
    var serialize2 = (object2, config2, indentation, depth, refs, printer) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(object2.type, config2) : (0, _markup.printElement)(
      object2.type,
      object2.props ? (0, _markup.printProps)(
        getPropKeys(object2),
        object2.props,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ) : "",
      object2.children ? (0, _markup.printChildren)(
        object2.children,
        config2,
        indentation + config2.indent,
        depth,
        refs,
        printer
      ) : "",
      config2,
      indentation
    );
    exports.serialize = serialize2;
    var test3 = (val) => val && val.$$typeof === testSymbol;
    exports.test = test3;
    var plugin2 = {
      serialize: serialize2,
      test: test3
    };
    var _default = plugin2;
    exports.default = _default;
  }
});

// node_modules/pretty-format/build/index.js
var require_build = __commonJS({
  "node_modules/pretty-format/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.DEFAULT_OPTIONS = void 0;
    exports.format = format7;
    exports.plugins = void 0;
    var _ansiStyles = _interopRequireDefault(require_ansi_styles());
    var _collections = require_collections();
    var _AsymmetricMatcher = _interopRequireDefault(
      require_AsymmetricMatcher()
    );
    var _DOMCollection = _interopRequireDefault(require_DOMCollection());
    var _DOMElement = _interopRequireDefault(require_DOMElement());
    var _Immutable = _interopRequireDefault(require_Immutable());
    var _ReactElement = _interopRequireDefault(require_ReactElement());
    var _ReactTestComponent = _interopRequireDefault(
      require_ReactTestComponent()
    );
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var toString3 = Object.prototype.toString;
    var toISOString = Date.prototype.toISOString;
    var errorToString = Error.prototype.toString;
    var regExpToString = RegExp.prototype.toString;
    var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
    var isWindow = (val) => typeof window !== "undefined" && val === window;
    var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
    var NEWLINE_REGEXP = /\n/gi;
    var PrettyFormatPluginError = class extends Error {
      constructor(message, stack) {
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
      }
    };
    function isToStringedArrayType(toStringed) {
      return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
    }
    function printNumber(val) {
      return Object.is(val, -0) ? "-0" : String(val);
    }
    function printBigInt(val) {
      return String(`${val}n`);
    }
    function printFunction(val, printFunctionName2) {
      if (!printFunctionName2) {
        return "[Function]";
      }
      return `[Function ${val.name || "anonymous"}]`;
    }
    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
    }
    function printError(val) {
      return `[${errorToString.call(val)}]`;
    }
    function printBasicValue(val, printFunctionName2, escapeRegex2, escapeString) {
      if (val === true || val === false) {
        return `${val}`;
      }
      if (val === void 0) {
        return "undefined";
      }
      if (val === null) {
        return "null";
      }
      const typeOf3 = typeof val;
      if (typeOf3 === "number") {
        return printNumber(val);
      }
      if (typeOf3 === "bigint") {
        return printBigInt(val);
      }
      if (typeOf3 === "string") {
        if (escapeString) {
          return `"${val.replace(/"|\\/g, "\\$&")}"`;
        }
        return `"${val}"`;
      }
      if (typeOf3 === "function") {
        return printFunction(val, printFunctionName2);
      }
      if (typeOf3 === "symbol") {
        return printSymbol(val);
      }
      const toStringed = toString3.call(val);
      if (toStringed === "[object WeakMap]") {
        return "WeakMap {}";
      }
      if (toStringed === "[object WeakSet]") {
        return "WeakSet {}";
      }
      if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
        return printFunction(val, printFunctionName2);
      }
      if (toStringed === "[object Symbol]") {
        return printSymbol(val);
      }
      if (toStringed === "[object Date]") {
        return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
      }
      if (toStringed === "[object Error]") {
        return printError(val);
      }
      if (toStringed === "[object RegExp]") {
        if (escapeRegex2) {
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        return regExpToString.call(val);
      }
      if (val instanceof Error) {
        return printError(val);
      }
      return null;
    }
    function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return "[Circular]";
      }
      refs = refs.slice();
      refs.push(val);
      const hitMaxDepth = ++depth > config2.maxDepth;
      const min = config2.min;
      if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
        return printer(val.toJSON(), config2, indentation, depth, refs, true);
      }
      const toStringed = toString3.call(val);
      if (toStringed === "[object Arguments]") {
        return hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}]`;
      }
      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth ? `[${val.constructor.name}]` : `${min ? "" : !config2.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(
          val,
          config2,
          indentation,
          depth,
          refs,
          printer
        )}]`;
      }
      if (toStringed === "[object Map]") {
        return hitMaxDepth ? "[Map]" : `Map {${(0, _collections.printIteratorEntries)(
          val.entries(),
          config2,
          indentation,
          depth,
          refs,
          printer,
          " => "
        )}}`;
      }
      if (toStringed === "[object Set]") {
        return hitMaxDepth ? "[Set]" : `Set {${(0, _collections.printIteratorValues)(
          val.values(),
          config2,
          indentation,
          depth,
          refs,
          printer
        )}}`;
      }
      return hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min ? "" : !config2.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(
        val,
        config2,
        indentation,
        depth,
        refs,
        printer
      )}}`;
    }
    function isNewPlugin(plugin2) {
      return plugin2.serialize != null;
    }
    function printPlugin(plugin2, val, config2, indentation, depth, refs) {
      let printed;
      try {
        printed = isNewPlugin(plugin2) ? plugin2.serialize(val, config2, indentation, depth, refs, printer) : plugin2.print(
          val,
          (valChild) => printer(valChild, config2, indentation, depth, refs),
          (str) => {
            const indentationNext = indentation + config2.indent;
            return indentationNext + str.replace(NEWLINE_REGEXP, `
${indentationNext}`);
          },
          {
            edgeSpacing: config2.spacingOuter,
            min: config2.min,
            spacing: config2.spacingInner
          },
          config2.colors
        );
      } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
      }
      if (typeof printed !== "string") {
        throw new Error(
          `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
        );
      }
      return printed;
    }
    function findPlugin(plugins5, val) {
      for (let p = 0; p < plugins5.length; p++) {
        try {
          if (plugins5[p].test(val)) {
            return plugins5[p];
          }
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack);
        }
      }
      return null;
    }
    function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
      const plugin2 = findPlugin(config2.plugins, val);
      if (plugin2 !== null) {
        return printPlugin(plugin2, val, config2, indentation, depth, refs);
      }
      const basicResult = printBasicValue(
        val,
        config2.printFunctionName,
        config2.escapeRegex,
        config2.escapeString
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(
        val,
        config2,
        indentation,
        depth,
        refs,
        hasCalledToJSON
      );
    }
    var DEFAULT_THEME = {
      comment: "gray",
      content: "reset",
      prop: "yellow",
      tag: "cyan",
      value: "green"
    };
    var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
    var toOptionsSubtype = (options) => options;
    var DEFAULT_OPTIONS = toOptionsSubtype({
      callToJSON: true,
      compareKeys: void 0,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      maxWidth: Infinity,
      min: false,
      plugins: [],
      printBasicPrototype: true,
      printFunctionName: true,
      theme: DEFAULT_THEME
    });
    exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
    function validateOptions(options) {
      Object.keys(options).forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`);
        }
      });
      if (options.min && options.indent !== void 0 && options.indent !== 0) {
        throw new Error(
          'pretty-format: Options "min" and "indent" cannot be used together.'
        );
      }
      if (options.theme !== void 0) {
        if (options.theme === null) {
          throw new Error('pretty-format: Option "theme" must not be null.');
        }
        if (typeof options.theme !== "object") {
          throw new Error(
            `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
          );
        }
      }
    }
    var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors2, key) => {
      const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
      const color = value && _ansiStyles.default[value];
      if (color && typeof color.close === "string" && typeof color.open === "string") {
        colors2[key] = color;
      } else {
        throw new Error(
          `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
        );
      }
      return colors2;
    }, /* @__PURE__ */ Object.create(null));
    var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors2, key) => {
      colors2[key] = {
        close: "",
        open: ""
      };
      return colors2;
    }, /* @__PURE__ */ Object.create(null));
    var getPrintFunctionName = (options) => (options == null ? void 0 : options.printFunctionName) ?? DEFAULT_OPTIONS.printFunctionName;
    var getEscapeRegex = (options) => (options == null ? void 0 : options.escapeRegex) ?? DEFAULT_OPTIONS.escapeRegex;
    var getEscapeString = (options) => (options == null ? void 0 : options.escapeString) ?? DEFAULT_OPTIONS.escapeString;
    var getConfig = (options) => ({
      callToJSON: (options == null ? void 0 : options.callToJSON) ?? DEFAULT_OPTIONS.callToJSON,
      colors: (options == null ? void 0 : options.highlight) ? getColorsHighlight(options) : getColorsEmpty(),
      compareKeys: typeof (options == null ? void 0 : options.compareKeys) === "function" || (options == null ? void 0 : options.compareKeys) === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
      escapeRegex: getEscapeRegex(options),
      escapeString: getEscapeString(options),
      indent: (options == null ? void 0 : options.min) ? "" : createIndent((options == null ? void 0 : options.indent) ?? DEFAULT_OPTIONS.indent),
      maxDepth: (options == null ? void 0 : options.maxDepth) ?? DEFAULT_OPTIONS.maxDepth,
      maxWidth: (options == null ? void 0 : options.maxWidth) ?? DEFAULT_OPTIONS.maxWidth,
      min: (options == null ? void 0 : options.min) ?? DEFAULT_OPTIONS.min,
      plugins: (options == null ? void 0 : options.plugins) ?? DEFAULT_OPTIONS.plugins,
      printBasicPrototype: (options == null ? void 0 : options.printBasicPrototype) ?? true,
      printFunctionName: getPrintFunctionName(options),
      spacingInner: (options == null ? void 0 : options.min) ? " " : "\n",
      spacingOuter: (options == null ? void 0 : options.min) ? "" : "\n"
    });
    function createIndent(indent) {
      return new Array(indent + 1).join(" ");
    }
    function format7(val, options) {
      if (options) {
        validateOptions(options);
        if (options.plugins) {
          const plugin2 = findPlugin(options.plugins, val);
          if (plugin2 !== null) {
            return printPlugin(plugin2, val, getConfig(options), "", 0, []);
          }
        }
      }
      const basicResult = printBasicValue(
        val,
        getPrintFunctionName(options),
        getEscapeRegex(options),
        getEscapeString(options)
      );
      if (basicResult !== null) {
        return basicResult;
      }
      return printComplexValue(val, getConfig(options), "", 0, []);
    }
    var plugins4 = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default
    };
    exports.plugins = plugins4;
    var _default = format7;
    exports.default = _default;
  }
});

// node_modules/loupe/lib/helpers.js
function colorise(value, styleType) {
  const color = ansiColors[styles[styleType]] || ansiColors[styleType];
  if (!color) {
    return String(value);
  }
  return `\x1B[${color[0]}m${String(value)}\x1B[${color[1]}m`;
}
function normaliseOptions({
  showHidden = false,
  depth = 2,
  colors: colors2 = false,
  customInspect = true,
  showProxy = false,
  maxArrayLength = Infinity,
  breakLength = Infinity,
  seen = [],
  // eslint-disable-next-line no-shadow
  truncate: truncate2 = Infinity,
  stylize = String
} = {}) {
  const options = {
    showHidden: Boolean(showHidden),
    depth: Number(depth),
    colors: Boolean(colors2),
    customInspect: Boolean(customInspect),
    showProxy: Boolean(showProxy),
    maxArrayLength: Number(maxArrayLength),
    breakLength: Number(breakLength),
    truncate: Number(truncate2),
    seen,
    stylize
  };
  if (options.colors) {
    options.stylize = colorise;
  }
  return options;
}
function truncate(string3, length, tail = truncator) {
  string3 = String(string3);
  const tailLength = tail.length;
  const stringLength = string3.length;
  if (tailLength > length && stringLength > tailLength) {
    return tail;
  }
  if (stringLength > length && stringLength > tailLength) {
    return `${string3.slice(0, length - tailLength)}${tail}`;
  }
  return string3;
}
function inspectList(list, options, inspectItem, separator = ", ") {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0)
    return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i2 = 0; i2 < size; i2 += 1) {
    const last = i2 + 1 === list.length;
    const secondToLast = i2 + 2 === list.length;
    truncated = `${truncator}(${list.length - i2})`;
    const value = list[i2];
    options.truncate = originalLength - output.length - (last ? 0 : separator.length);
    const string3 = peek || inspectItem(value, options) + (last ? "" : separator);
    const nextLength = output.length + string3.length;
    const truncatedLength = nextLength + truncated.length;
    if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
      break;
    }
    if (!last && !secondToLast && truncatedLength > originalLength) {
      break;
    }
    peek = last ? "" : inspectItem(list[i2 + 1], options) + (secondToLast ? "" : separator);
    if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
      break;
    }
    output += string3;
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i2 - 1})`;
      break;
    }
    truncated = "";
  }
  return `${output}${truncated}`;
}
function quoteComplexKey(key) {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
    return key;
  }
  return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function inspectProperty([key, value], options) {
  options.truncate -= 2;
  if (typeof key === "string") {
    key = quoteComplexKey(key);
  } else if (typeof key !== "number") {
    key = `[${options.inspect(key, options)}]`;
  }
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key}: ${value}`;
}
var ansiColors, styles, truncator;
var init_helpers = __esm({
  "node_modules/loupe/lib/helpers.js"() {
    ansiColors = {
      bold: ["1", "22"],
      dim: ["2", "22"],
      italic: ["3", "23"],
      underline: ["4", "24"],
      // 5 & 6 are blinking
      inverse: ["7", "27"],
      hidden: ["8", "28"],
      strike: ["9", "29"],
      // 10-20 are fonts
      // 21-29 are resets for 1-9
      black: ["30", "39"],
      red: ["31", "39"],
      green: ["32", "39"],
      yellow: ["33", "39"],
      blue: ["34", "39"],
      magenta: ["35", "39"],
      cyan: ["36", "39"],
      white: ["37", "39"],
      brightblack: ["30;1", "39"],
      brightred: ["31;1", "39"],
      brightgreen: ["32;1", "39"],
      brightyellow: ["33;1", "39"],
      brightblue: ["34;1", "39"],
      brightmagenta: ["35;1", "39"],
      brightcyan: ["36;1", "39"],
      brightwhite: ["37;1", "39"],
      grey: ["90", "39"]
    };
    styles = {
      special: "cyan",
      number: "yellow",
      bigint: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      symbol: "green",
      date: "magenta",
      regexp: "red"
    };
    truncator = "\u2026";
  }
});

// node_modules/loupe/lib/array.js
function inspectArray(array2, options) {
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return "[]";
  options.truncate -= 4;
  const listContents = inspectList(array2, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array2[key]]),
      options,
      inspectProperty
    );
  }
  return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var init_array = __esm({
  "node_modules/loupe/lib/array.js"() {
    init_helpers();
  }
});

// node_modules/get-func-name/index.js
var require_get_func_name = __commonJS({
  "node_modules/get-func-name/index.js"(exports, module2) {
    "use strict";
    var toString3 = Function.prototype.toString;
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
    function getFuncName3(aFunc) {
      if (typeof aFunc !== "function") {
        return null;
      }
      var name = "";
      if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
        var match = toString3.call(aFunc).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = aFunc.name;
      }
      return name;
    }
    module2.exports = getFuncName3;
  }
});

// node_modules/loupe/lib/typedarray.js
function inspectTypedArray(array2, options) {
  const name = getArrayName(array2);
  options.truncate -= name.length + 4;
  const nonIndexProperties = Object.keys(array2).slice(array2.length);
  if (!array2.length && !nonIndexProperties.length)
    return `${name}[]`;
  let output = "";
  for (let i2 = 0; i2 < array2.length; i2++) {
    const string3 = `${options.stylize(truncate(array2[i2], options.truncate), "number")}${i2 === array2.length - 1 ? "" : ", "}`;
    options.truncate -= string3.length;
    if (array2[i2] !== array2.length && options.truncate <= 3) {
      output += `${truncator}(${array2.length - array2[i2] + 1})`;
      break;
    }
    output += string3;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array2[key]]),
      options,
      inspectProperty
    );
  }
  return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ""} ]`;
}
var import_get_func_name, getArrayName;
var init_typedarray = __esm({
  "node_modules/loupe/lib/typedarray.js"() {
    import_get_func_name = __toESM(require_get_func_name());
    init_helpers();
    getArrayName = (array2) => {
      if (typeof Buffer === "function" && array2 instanceof Buffer) {
        return "Buffer";
      }
      if (array2[Symbol.toStringTag]) {
        return array2[Symbol.toStringTag];
      }
      return (0, import_get_func_name.default)(array2.constructor);
    };
  }
});

// node_modules/loupe/lib/date.js
function inspectDate(dateObject, options) {
  const stringRepresentation = dateObject.toJSON();
  if (stringRepresentation === null) {
    return "Invalid Date";
  }
  const split = stringRepresentation.split("T");
  const date = split[0];
  return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, "date");
}
var init_date = __esm({
  "node_modules/loupe/lib/date.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/function.js
function inspectFunction(func, options) {
  const name = (0, import_get_func_name2.default)(func);
  if (!name) {
    return options.stylize("[Function]", "special");
  }
  return options.stylize(`[Function ${truncate(name, options.truncate - 11)}]`, "special");
}
var import_get_func_name2;
var init_function = __esm({
  "node_modules/loupe/lib/function.js"() {
    import_get_func_name2 = __toESM(require_get_func_name());
    init_helpers();
  }
});

// node_modules/loupe/lib/map.js
function inspectMapEntry([key, value], options) {
  options.truncate -= 4;
  key = options.inspect(key, options);
  options.truncate -= key.length;
  value = options.inspect(value, options);
  return `${key} => ${value}`;
}
function mapToEntries(map2) {
  const entries = [];
  map2.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}
function inspectMap(map2, options) {
  const size = map2.size - 1;
  if (size <= 0) {
    return "Map{}";
  }
  options.truncate -= 7;
  return `Map{ ${inspectList(mapToEntries(map2), options, inspectMapEntry)} }`;
}
var init_map = __esm({
  "node_modules/loupe/lib/map.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/number.js
function inspectNumber(number, options) {
  if (isNaN2(number)) {
    return options.stylize("NaN", "number");
  }
  if (number === Infinity) {
    return options.stylize("Infinity", "number");
  }
  if (number === -Infinity) {
    return options.stylize("-Infinity", "number");
  }
  if (number === 0) {
    return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
  }
  return options.stylize(truncate(number, options.truncate), "number");
}
var isNaN2;
var init_number = __esm({
  "node_modules/loupe/lib/number.js"() {
    init_helpers();
    isNaN2 = Number.isNaN || ((i2) => i2 !== i2);
  }
});

// node_modules/loupe/lib/bigint.js
function inspectBigInt(number, options) {
  let nums = truncate(number.toString(), options.truncate - 1);
  if (nums !== truncator)
    nums += "n";
  return options.stylize(nums, "bigint");
}
var init_bigint = __esm({
  "node_modules/loupe/lib/bigint.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/regexp.js
function inspectRegExp(value, options) {
  const flags = value.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value.source;
  return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, "regexp");
}
var init_regexp = __esm({
  "node_modules/loupe/lib/regexp.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/set.js
function arrayFromSet(set3) {
  const values = [];
  set3.forEach((value) => {
    values.push(value);
  });
  return values;
}
function inspectSet(set3, options) {
  if (set3.size === 0)
    return "Set{}";
  options.truncate -= 7;
  return `Set{ ${inspectList(arrayFromSet(set3), options)} }`;
}
var init_set = __esm({
  "node_modules/loupe/lib/set.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/string.js
function escape(char) {
  return escapeCharacters[char] || `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-unicodeLength)}`;
}
function inspectString(string3, options) {
  if (stringEscapeChars.test(string3)) {
    string3 = string3.replace(stringEscapeChars, escape);
  }
  return options.stylize(`'${truncate(string3, options.truncate - 2)}'`, "string");
}
var stringEscapeChars, escapeCharacters, hex, unicodeLength;
var init_string = __esm({
  "node_modules/loupe/lib/string.js"() {
    init_helpers();
    stringEscapeChars = new RegExp(
      "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
      "g"
    );
    escapeCharacters = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      "'": "\\'",
      "\\": "\\\\"
    };
    hex = 16;
    unicodeLength = 4;
  }
});

// node_modules/loupe/lib/symbol.js
function inspectSymbol(value) {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
}
var init_symbol = __esm({
  "node_modules/loupe/lib/symbol.js"() {
  }
});

// node_modules/loupe/lib/promise.js
var getPromiseValue, promise_default;
var init_promise = __esm({
  "node_modules/loupe/lib/promise.js"() {
    getPromiseValue = () => "Promise{\u2026}";
    try {
      const { getPromiseDetails, kPending, kRejected } = process.binding("util");
      if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
        getPromiseValue = (value, options) => {
          const [state, innerValue] = getPromiseDetails(value);
          if (state === kPending) {
            return "Promise{<pending>}";
          }
          return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
        };
      }
    } catch (notNode) {
    }
    promise_default = getPromiseValue;
  }
});

// node_modules/loupe/lib/object.js
function inspectObject(object2, options) {
  const properties = Object.getOwnPropertyNames(object2);
  const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.indexOf(object2) >= 0) {
    return "[Circular]";
  }
  options.seen.push(object2);
  const propertyContents = inspectList(
    properties.map((key) => [key, object2[key]]),
    options,
    inspectProperty
  );
  const symbolContents = inspectList(
    symbols.map((key) => [key, object2[key]]),
    options,
    inspectProperty
  );
  options.seen.pop();
  let sep = "";
  if (propertyContents && symbolContents) {
    sep = ", ";
  }
  return `{ ${propertyContents}${sep}${symbolContents} }`;
}
var init_object = __esm({
  "node_modules/loupe/lib/object.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/class.js
function inspectClass(value, options) {
  let name = "";
  if (toStringTag && toStringTag in value) {
    name = value[toStringTag];
  }
  name = name || (0, import_get_func_name3.default)(value.constructor);
  if (!name || name === "_class") {
    name = "<Anonymous Class>";
  }
  options.truncate -= name.length;
  return `${name}${inspectObject(value, options)}`;
}
var import_get_func_name3, toStringTag;
var init_class = __esm({
  "node_modules/loupe/lib/class.js"() {
    import_get_func_name3 = __toESM(require_get_func_name());
    init_object();
    toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
  }
});

// node_modules/loupe/lib/arguments.js
function inspectArguments(args, options) {
  if (args.length === 0)
    return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList(args, options)} ]`;
}
var init_arguments = __esm({
  "node_modules/loupe/lib/arguments.js"() {
    init_helpers();
  }
});

// node_modules/loupe/lib/error.js
function inspectObject2(error, options) {
  const properties = Object.getOwnPropertyNames(error).filter((key) => errorKeys.indexOf(key) === -1);
  const name = error.name;
  options.truncate -= name.length;
  let message = "";
  if (typeof error.message === "string") {
    message = truncate(error.message, options.truncate);
  } else {
    properties.unshift("message");
  }
  message = message ? `: ${message}` : "";
  options.truncate -= message.length + 5;
  const propertyContents = inspectList(
    properties.map((key) => [key, error[key]]),
    options,
    inspectProperty
  );
  return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ""}`;
}
var errorKeys;
var init_error = __esm({
  "node_modules/loupe/lib/error.js"() {
    init_helpers();
    errorKeys = [
      "stack",
      "line",
      "column",
      "name",
      "message",
      "fileName",
      "lineNumber",
      "columnNumber",
      "number",
      "description"
    ];
  }
});

// node_modules/loupe/lib/html.js
function inspectAttribute([key, value], options) {
  options.truncate -= 3;
  if (!value) {
    return `${options.stylize(key, "yellow")}`;
  }
  return `${options.stylize(key, "yellow")}=${options.stylize(`"${value}"`, "string")}`;
}
function inspectHTMLCollection(collection, options) {
  return inspectList(collection, options, inspectHTML, "\n");
}
function inspectHTML(element, options) {
  const properties = element.getAttributeNames();
  const name = element.tagName.toLowerCase();
  const head = options.stylize(`<${name}`, "special");
  const headClose = options.stylize(`>`, "special");
  const tail = options.stylize(`</${name}>`, "special");
  options.truncate -= name.length * 2 + 5;
  let propertyContents = "";
  if (properties.length > 0) {
    propertyContents += " ";
    propertyContents += inspectList(
      properties.map((key) => [key, element.getAttribute(key)]),
      options,
      inspectAttribute,
      " "
    );
  }
  options.truncate -= propertyContents.length;
  const truncate2 = options.truncate;
  let children = inspectHTMLCollection(element.children, options);
  if (children && children.length > truncate2) {
    children = `${truncator}(${element.children.length})`;
  }
  return `${head}${propertyContents}${headClose}${children}${tail}`;
}
var init_html = __esm({
  "node_modules/loupe/lib/html.js"() {
    init_helpers();
  }
});

// node_modules/loupe/index.js
var loupe_exports = {};
__export(loupe_exports, {
  custom: () => custom,
  default: () => loupe_default,
  inspect: () => inspect,
  registerConstructor: () => registerConstructor,
  registerStringTag: () => registerStringTag
});
function FakeMap() {
  this.key = "chai/loupe__" + Math.random() + Date.now();
}
function inspect(value, options) {
  options = normaliseOptions(options);
  options.inspect = inspect;
  const { customInspect } = options;
  let type2 = value === null ? "null" : typeof value;
  if (type2 === "object") {
    type2 = toString.call(value).slice(8, -1);
  }
  if (baseTypesMap[type2]) {
    return baseTypesMap[type2](value, options);
  }
  if (customInspect && value) {
    const output = inspectCustom(value, options, type2);
    if (output) {
      if (typeof output === "string")
        return output;
      return inspect(output, options);
    }
  }
  const proto = value ? Object.getPrototypeOf(value) : false;
  if (proto === Object.prototype || proto === null) {
    return inspectObject(value, options);
  }
  if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
    return inspectHTML(value, options);
  }
  if ("constructor" in value) {
    if (value.constructor !== Object) {
      return inspectClass(value, options);
    }
    return inspectObject(value, options);
  }
  if (value === Object(value)) {
    return inspectObject(value, options);
  }
  return options.stylize(String(value), type2);
}
function registerConstructor(constructor, inspector) {
  if (constructorMap.has(constructor)) {
    return false;
  }
  constructorMap.set(constructor, inspector);
  return true;
}
function registerStringTag(stringTag, inspector) {
  if (stringTag in stringTagMap) {
    return false;
  }
  stringTagMap[stringTag] = inspector;
  return true;
}
var symbolsSupported, chaiInspect, nodeInspect, constructorMap, stringTagMap, baseTypesMap, inspectCustom, toString, custom, loupe_default;
var init_loupe = __esm({
  "node_modules/loupe/index.js"() {
    init_array();
    init_typedarray();
    init_date();
    init_function();
    init_map();
    init_number();
    init_bigint();
    init_regexp();
    init_set();
    init_string();
    init_symbol();
    init_promise();
    init_class();
    init_object();
    init_arguments();
    init_error();
    init_html();
    init_helpers();
    symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
    chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
    nodeInspect = false;
    try {
      const nodeUtil = require("util");
      nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
    } catch (noNodeInspect) {
      nodeInspect = false;
    }
    FakeMap.prototype = {
      // eslint-disable-next-line object-shorthand
      get: function get(key) {
        return key[this.key];
      },
      // eslint-disable-next-line object-shorthand
      has: function has(key) {
        return this.key in key;
      },
      // eslint-disable-next-line object-shorthand
      set: function set(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this.key, {
            // eslint-disable-next-line object-shorthand
            value,
            configurable: true
          });
        }
      }
    };
    constructorMap = new (typeof WeakMap === "function" ? WeakMap : FakeMap)();
    stringTagMap = {};
    baseTypesMap = {
      undefined: (value, options) => options.stylize("undefined", "undefined"),
      null: (value, options) => options.stylize(null, "null"),
      boolean: (value, options) => options.stylize(value, "boolean"),
      Boolean: (value, options) => options.stylize(value, "boolean"),
      number: inspectNumber,
      Number: inspectNumber,
      bigint: inspectBigInt,
      BigInt: inspectBigInt,
      string: inspectString,
      String: inspectString,
      function: inspectFunction,
      Function: inspectFunction,
      symbol: inspectSymbol,
      // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
      Symbol: inspectSymbol,
      Array: inspectArray,
      Date: inspectDate,
      Map: inspectMap,
      Set: inspectSet,
      RegExp: inspectRegExp,
      Promise: promise_default,
      // WeakSet, WeakMap are totally opaque to us
      WeakSet: (value, options) => options.stylize("WeakSet{\u2026}", "special"),
      WeakMap: (value, options) => options.stylize("WeakMap{\u2026}", "special"),
      Arguments: inspectArguments,
      Int8Array: inspectTypedArray,
      Uint8Array: inspectTypedArray,
      Uint8ClampedArray: inspectTypedArray,
      Int16Array: inspectTypedArray,
      Uint16Array: inspectTypedArray,
      Int32Array: inspectTypedArray,
      Uint32Array: inspectTypedArray,
      Float32Array: inspectTypedArray,
      Float64Array: inspectTypedArray,
      Generator: () => "",
      DataView: () => "",
      ArrayBuffer: () => "",
      Error: inspectObject2,
      HTMLCollection: inspectHTMLCollection,
      NodeList: inspectHTMLCollection
    };
    inspectCustom = (value, options, type2) => {
      if (chaiInspect in value && typeof value[chaiInspect] === "function") {
        return value[chaiInspect](options);
      }
      if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
        return value[nodeInspect](options.depth, options);
      }
      if ("inspect" in value && typeof value.inspect === "function") {
        return value.inspect(options.depth, options);
      }
      if ("constructor" in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options);
      }
      if (stringTagMap[type2]) {
        return stringTagMap[type2](value, options);
      }
      return "";
    };
    toString = Object.prototype.toString;
    custom = chaiInspect;
    loupe_default = inspect;
  }
});

// node_modules/diff-sequences/build/index.js
var require_build2 = __commonJS({
  "node_modules/diff-sequences/build/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = diffSequence;
    var pkg = "diff-sequences";
    var NOT_YET_SET = 0;
    var countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
      let nCommon = 0;
      while (aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex)) {
        aIndex += 1;
        bIndex += 1;
        nCommon += 1;
      }
      return nCommon;
    };
    var countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
      let nCommon = 0;
      while (aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex)) {
        aIndex -= 1;
        bIndex -= 1;
        nCommon += 1;
      }
      return nCommon;
    };
    var extendPathsF = (d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
      let iF = 0;
      let kF = -d;
      let aFirst = aIndexesF[iF];
      let aIndexPrev1 = aFirst;
      aIndexesF[iF] += countCommonItemsF(
        aFirst + 1,
        aEnd,
        bF + aFirst - kF + 1,
        bEnd,
        isCommon
      );
      const nF = d < iMaxF ? d : iMaxF;
      for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
        if (iF !== d && aIndexPrev1 < aIndexesF[iF]) {
          aFirst = aIndexesF[iF];
        } else {
          aFirst = aIndexPrev1 + 1;
          if (aEnd <= aFirst) {
            return iF - 1;
          }
        }
        aIndexPrev1 = aIndexesF[iF];
        aIndexesF[iF] = aFirst + countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
      }
      return iMaxF;
    };
    var extendPathsR = (d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
      let iR = 0;
      let kR = d;
      let aFirst = aIndexesR[iR];
      let aIndexPrev1 = aFirst;
      aIndexesR[iR] -= countCommonItemsR(
        aStart,
        aFirst - 1,
        bStart,
        bR + aFirst - kR - 1,
        isCommon
      );
      const nR = d < iMaxR ? d : iMaxR;
      for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
        if (iR !== d && aIndexesR[iR] < aIndexPrev1) {
          aFirst = aIndexesR[iR];
        } else {
          aFirst = aIndexPrev1 - 1;
          if (aFirst < aStart) {
            return iR - 1;
          }
        }
        aIndexPrev1 = aIndexesR[iR];
        aIndexesR[iR] = aFirst - countCommonItemsR(
          aStart,
          aFirst - 1,
          bStart,
          bR + aFirst - kR - 1,
          isCommon
        );
      }
      return iMaxR;
    };
    var extendOverlappablePathsF = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
      const bF = bStart - aStart;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      const kMinOverlapF = -baDeltaLength - (d - 1);
      const kMaxOverlapF = -baDeltaLength + (d - 1);
      let aIndexPrev1 = NOT_YET_SET;
      const nF = d < iMaxF ? d : iMaxF;
      for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
        const insert2 = iF === 0 || iF !== d && aIndexPrev1 < aIndexesF[iF];
        const aLastPrev = insert2 ? aIndexesF[iF] : aIndexPrev1;
        const aFirst = insert2 ? aLastPrev : aLastPrev + 1;
        const bFirst = bF + aFirst - kF;
        const nCommonF = countCommonItemsF(
          aFirst + 1,
          aEnd,
          bFirst + 1,
          bEnd,
          isCommon
        );
        const aLast = aFirst + nCommonF;
        aIndexPrev1 = aIndexesF[iF];
        aIndexesF[iF] = aLast;
        if (kMinOverlapF <= kF && kF <= kMaxOverlapF) {
          const iR = (d - 1 - (kF + baDeltaLength)) / 2;
          if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
            const bLastPrev = bF + aLastPrev - (insert2 ? kF + 1 : kF - 1);
            const nCommonR = countCommonItemsR(
              aStart,
              aLastPrev,
              bStart,
              bLastPrev,
              isCommon
            );
            const aIndexPrevFirst = aLastPrev - nCommonR;
            const bIndexPrevFirst = bLastPrev - nCommonR;
            const aEndPreceding = aIndexPrevFirst + 1;
            const bEndPreceding = bIndexPrevFirst + 1;
            division.nChangePreceding = d - 1;
            if (d - 1 === aEndPreceding + bEndPreceding - aStart - bStart) {
              division.aEndPreceding = aStart;
              division.bEndPreceding = bStart;
            } else {
              division.aEndPreceding = aEndPreceding;
              division.bEndPreceding = bEndPreceding;
            }
            division.nCommonPreceding = nCommonR;
            if (nCommonR !== 0) {
              division.aCommonPreceding = aEndPreceding;
              division.bCommonPreceding = bEndPreceding;
            }
            division.nCommonFollowing = nCommonF;
            if (nCommonF !== 0) {
              division.aCommonFollowing = aFirst + 1;
              division.bCommonFollowing = bFirst + 1;
            }
            const aStartFollowing = aLast + 1;
            const bStartFollowing = bFirst + nCommonF + 1;
            division.nChangeFollowing = d - 1;
            if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              division.aStartFollowing = aStartFollowing;
              division.bStartFollowing = bStartFollowing;
            }
            return true;
          }
        }
      }
      return false;
    };
    var extendOverlappablePathsR = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
      const bR = bEnd - aEnd;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      const kMinOverlapR = baDeltaLength - d;
      const kMaxOverlapR = baDeltaLength + d;
      let aIndexPrev1 = NOT_YET_SET;
      const nR = d < iMaxR ? d : iMaxR;
      for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
        const insert2 = iR === 0 || iR !== d && aIndexesR[iR] < aIndexPrev1;
        const aLastPrev = insert2 ? aIndexesR[iR] : aIndexPrev1;
        const aFirst = insert2 ? aLastPrev : aLastPrev - 1;
        const bFirst = bR + aFirst - kR;
        const nCommonR = countCommonItemsR(
          aStart,
          aFirst - 1,
          bStart,
          bFirst - 1,
          isCommon
        );
        const aLast = aFirst - nCommonR;
        aIndexPrev1 = aIndexesR[iR];
        aIndexesR[iR] = aLast;
        if (kMinOverlapR <= kR && kR <= kMaxOverlapR) {
          const iF = (d + (kR - baDeltaLength)) / 2;
          if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
            const bLast = bFirst - nCommonR;
            division.nChangePreceding = d;
            if (d === aLast + bLast - aStart - bStart) {
              division.aEndPreceding = aStart;
              division.bEndPreceding = bStart;
            } else {
              division.aEndPreceding = aLast;
              division.bEndPreceding = bLast;
            }
            division.nCommonPreceding = nCommonR;
            if (nCommonR !== 0) {
              division.aCommonPreceding = aLast;
              division.bCommonPreceding = bLast;
            }
            division.nChangeFollowing = d - 1;
            if (d === 1) {
              division.nCommonFollowing = 0;
              division.aStartFollowing = aEnd;
              division.bStartFollowing = bEnd;
            } else {
              const bLastPrev = bR + aLastPrev - (insert2 ? kR - 1 : kR + 1);
              const nCommonF = countCommonItemsF(
                aLastPrev,
                aEnd,
                bLastPrev,
                bEnd,
                isCommon
              );
              division.nCommonFollowing = nCommonF;
              if (nCommonF !== 0) {
                division.aCommonFollowing = aLastPrev;
                division.bCommonFollowing = bLastPrev;
              }
              const aStartFollowing = aLastPrev + nCommonF;
              const bStartFollowing = bLastPrev + nCommonF;
              if (d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing) {
                division.aStartFollowing = aEnd;
                division.bStartFollowing = bEnd;
              } else {
                division.aStartFollowing = aStartFollowing;
                division.bStartFollowing = bStartFollowing;
              }
            }
            return true;
          }
        }
      }
      return false;
    };
    var divide = (nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division) => {
      const bF = bStart - aStart;
      const bR = bEnd - aEnd;
      const aLength = aEnd - aStart;
      const bLength = bEnd - bStart;
      const baDeltaLength = bLength - aLength;
      let iMaxF = aLength;
      let iMaxR = aLength;
      aIndexesF[0] = aStart - 1;
      aIndexesR[0] = aEnd;
      if (baDeltaLength % 2 === 0) {
        const dMin = (nChange || baDeltaLength) / 2;
        const dMax = (aLength + bLength) / 2;
        for (let d = 1; d <= dMax; d += 1) {
          iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
          if (d < dMin) {
            iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
          } else if (
            // If a reverse path overlaps a forward path in the same diagonal,
            // return a division of the index intervals at the middle change.
            extendOverlappablePathsR(
              d,
              aStart,
              aEnd,
              bStart,
              bEnd,
              isCommon,
              aIndexesF,
              iMaxF,
              aIndexesR,
              iMaxR,
              division
            )
          ) {
            return;
          }
        }
      } else {
        const dMin = ((nChange || baDeltaLength) + 1) / 2;
        const dMax = (aLength + bLength + 1) / 2;
        let d = 1;
        iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
        for (d += 1; d <= dMax; d += 1) {
          iMaxR = extendPathsR(
            d - 1,
            aStart,
            bStart,
            bR,
            isCommon,
            aIndexesR,
            iMaxR
          );
          if (d < dMin) {
            iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
          } else if (
            // If a forward path overlaps a reverse path in the same diagonal,
            // return a division of the index intervals at the middle change.
            extendOverlappablePathsF(
              d,
              aStart,
              aEnd,
              bStart,
              bEnd,
              isCommon,
              aIndexesF,
              iMaxF,
              aIndexesR,
              iMaxR,
              division
            )
          ) {
            return;
          }
        }
      }
      throw new Error(
        `${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`
      );
    };
    var findSubsequences = (nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division) => {
      if (bEnd - bStart < aEnd - aStart) {
        transposed = !transposed;
        if (transposed && callbacks.length === 1) {
          const { foundSubsequence: foundSubsequence2, isCommon: isCommon2 } = callbacks[0];
          callbacks[1] = {
            foundSubsequence: (nCommon, bCommon, aCommon) => {
              foundSubsequence2(nCommon, aCommon, bCommon);
            },
            isCommon: (bIndex, aIndex) => isCommon2(aIndex, bIndex)
          };
        }
        const tStart = aStart;
        const tEnd = aEnd;
        aStart = bStart;
        aEnd = bEnd;
        bStart = tStart;
        bEnd = tEnd;
      }
      const { foundSubsequence, isCommon } = callbacks[transposed ? 1 : 0];
      divide(
        nChange,
        aStart,
        aEnd,
        bStart,
        bEnd,
        isCommon,
        aIndexesF,
        aIndexesR,
        division
      );
      const {
        nChangePreceding,
        aEndPreceding,
        bEndPreceding,
        nCommonPreceding,
        aCommonPreceding,
        bCommonPreceding,
        nCommonFollowing,
        aCommonFollowing,
        bCommonFollowing,
        nChangeFollowing,
        aStartFollowing,
        bStartFollowing
      } = division;
      if (aStart < aEndPreceding && bStart < bEndPreceding) {
        findSubsequences(
          nChangePreceding,
          aStart,
          aEndPreceding,
          bStart,
          bEndPreceding,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
      if (nCommonPreceding !== 0) {
        foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding);
      }
      if (nCommonFollowing !== 0) {
        foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing);
      }
      if (aStartFollowing < aEnd && bStartFollowing < bEnd) {
        findSubsequences(
          nChangeFollowing,
          aStartFollowing,
          aEnd,
          bStartFollowing,
          bEnd,
          transposed,
          callbacks,
          aIndexesF,
          aIndexesR,
          division
        );
      }
    };
    var validateLength = (name, arg) => {
      if (typeof arg !== "number") {
        throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
      }
      if (!Number.isSafeInteger(arg)) {
        throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
      }
      if (arg < 0) {
        throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
      }
    };
    var validateCallback = (name, arg) => {
      const type2 = typeof arg;
      if (type2 !== "function") {
        throw new TypeError(`${pkg}: ${name} typeof ${type2} is not a function`);
      }
    };
    function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
      validateLength("aLength", aLength);
      validateLength("bLength", bLength);
      validateCallback("isCommon", isCommon);
      validateCallback("foundSubsequence", foundSubsequence);
      const nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
      if (nCommonF !== 0) {
        foundSubsequence(nCommonF, 0, 0);
      }
      if (aLength !== nCommonF || bLength !== nCommonF) {
        const aStart = nCommonF;
        const bStart = nCommonF;
        const nCommonR = countCommonItemsR(
          aStart,
          aLength - 1,
          bStart,
          bLength - 1,
          isCommon
        );
        const aEnd = aLength - nCommonR;
        const bEnd = bLength - nCommonR;
        const nCommonFR = nCommonF + nCommonR;
        if (aLength !== nCommonFR && bLength !== nCommonFR) {
          const nChange = 0;
          const transposed = false;
          const callbacks = [
            {
              foundSubsequence,
              isCommon
            }
          ];
          const aIndexesF = [NOT_YET_SET];
          const aIndexesR = [NOT_YET_SET];
          const division = {
            aCommonFollowing: NOT_YET_SET,
            aCommonPreceding: NOT_YET_SET,
            aEndPreceding: NOT_YET_SET,
            aStartFollowing: NOT_YET_SET,
            bCommonFollowing: NOT_YET_SET,
            bCommonPreceding: NOT_YET_SET,
            bEndPreceding: NOT_YET_SET,
            bStartFollowing: NOT_YET_SET,
            nChangeFollowing: NOT_YET_SET,
            nChangePreceding: NOT_YET_SET,
            nCommonFollowing: NOT_YET_SET,
            nCommonPreceding: NOT_YET_SET
          };
          findSubsequences(
            nChange,
            aStart,
            aEnd,
            bStart,
            bEnd,
            transposed,
            callbacks,
            aIndexesF,
            aIndexesR,
            division
          );
        }
        if (nCommonR !== 0) {
          foundSubsequence(nCommonR, aEnd, bEnd);
        }
      }
    }
  }
});

// node_modules/assertion-error/index.js
var require_assertion_error = __commonJS({
  "node_modules/assertion-error/index.js"(exports, module2) {
    function exclude() {
      var excludes = [].slice.call(arguments);
      function excludeProps(res, obj) {
        Object.keys(obj).forEach(function(key) {
          if (!~excludes.indexOf(key))
            res[key] = obj[key];
        });
      }
      return function extendExclude() {
        var args = [].slice.call(arguments), i2 = 0, res = {};
        for (; i2 < args.length; i2++) {
          excludeProps(res, args[i2]);
        }
        return res;
      };
    }
    module2.exports = AssertionError2;
    function AssertionError2(message, _props, ssf) {
      var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
      this.message = message || "Unspecified AssertionError";
      this.showDiff = false;
      for (var key in props) {
        this[key] = props[key];
      }
      ssf = ssf || AssertionError2;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf);
      } else {
        try {
          throw new Error();
        } catch (e) {
          this.stack = e.stack;
        }
      }
    }
    AssertionError2.prototype = Object.create(Error.prototype);
    AssertionError2.prototype.name = "AssertionError";
    AssertionError2.prototype.constructor = AssertionError2;
    AssertionError2.prototype.toJSON = function(stack) {
      var extend = exclude("constructor", "toJSON", "stack"), props = extend({ name: this.name }, this);
      if (false !== stack && this.stack) {
        props.stack = this.stack;
      }
      return props;
    };
  }
});

// node_modules/pathval/index.js
var require_pathval = __commonJS({
  "node_modules/pathval/index.js"(exports, module2) {
    "use strict";
    function hasProperty(obj, name) {
      if (typeof obj === "undefined" || obj === null) {
        return false;
      }
      return name in Object(obj);
    }
    function parsePath(path) {
      var str = path.replace(/([^\\])\[/g, "$1.[");
      var parts = str.match(/(\\\.|[^.]+?)+/g);
      return parts.map(function mapMatches(value) {
        if (value === "constructor" || value === "__proto__" || value === "prototype") {
          return {};
        }
        var regexp = /^\[(\d+)\]$/;
        var mArr = regexp.exec(value);
        var parsed = null;
        if (mArr) {
          parsed = { i: parseFloat(mArr[1]) };
        } else {
          parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
        }
        return parsed;
      });
    }
    function internalGetPathValue(obj, parsed, pathDepth) {
      var temporaryValue = obj;
      var res = null;
      pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
      for (var i2 = 0; i2 < pathDepth; i2++) {
        var part = parsed[i2];
        if (temporaryValue) {
          if (typeof part.p === "undefined") {
            temporaryValue = temporaryValue[part.i];
          } else {
            temporaryValue = temporaryValue[part.p];
          }
          if (i2 === pathDepth - 1) {
            res = temporaryValue;
          }
        }
      }
      return res;
    }
    function internalSetPathValue(obj, val, parsed) {
      var tempObj = obj;
      var pathDepth = parsed.length;
      var part = null;
      for (var i2 = 0; i2 < pathDepth; i2++) {
        var propName = null;
        var propVal = null;
        part = parsed[i2];
        if (i2 === pathDepth - 1) {
          propName = typeof part.p === "undefined" ? part.i : part.p;
          tempObj[propName] = val;
        } else if (typeof part.p !== "undefined" && tempObj[part.p]) {
          tempObj = tempObj[part.p];
        } else if (typeof part.i !== "undefined" && tempObj[part.i]) {
          tempObj = tempObj[part.i];
        } else {
          var next = parsed[i2 + 1];
          propName = typeof part.p === "undefined" ? part.i : part.p;
          propVal = typeof next.p === "undefined" ? [] : {};
          tempObj[propName] = propVal;
          tempObj = tempObj[propName];
        }
      }
    }
    function getPathInfo(obj, path) {
      var parsed = parsePath(path);
      var last = parsed[parsed.length - 1];
      var info = {
        parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
        name: last.p || last.i,
        value: internalGetPathValue(obj, parsed)
      };
      info.exists = hasProperty(info.parent, info.name);
      return info;
    }
    function getPathValue(obj, path) {
      var info = getPathInfo(obj, path);
      return info.value;
    }
    function setPathValue(obj, path, val) {
      var parsed = parsePath(path);
      internalSetPathValue(obj, val, parsed);
      return obj;
    }
    module2.exports = {
      hasProperty,
      getPathInfo,
      getPathValue,
      setPathValue
    };
  }
});

// node_modules/chai/lib/chai/utils/flag.js
var require_flag = __commonJS({
  "node_modules/chai/lib/chai/utils/flag.js"(exports, module2) {
    module2.exports = function flag(obj, key, value) {
      var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
      if (arguments.length === 3) {
        flags[key] = value;
      } else {
        return flags[key];
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/test.js
var require_test = __commonJS({
  "node_modules/chai/lib/chai/utils/test.js"(exports, module2) {
    var flag = require_flag();
    module2.exports = function test3(obj, args) {
      var negate = flag(obj, "negate"), expr = args[0];
      return negate ? !expr : expr;
    };
  }
});

// node_modules/type-detect/type-detect.js
var require_type_detect = __commonJS({
  "node_modules/type-detect/type-detect.js"(exports, module2) {
    (function(global3, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global3.typeDetect = factory();
    })(exports, function() {
      "use strict";
      var promiseExists = typeof Promise === "function";
      var globalObject2 = typeof self === "object" ? self : global;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect2(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject2) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect2;
    });
  }
});

// node_modules/chai/lib/chai/utils/expectTypes.js
var require_expectTypes = __commonJS({
  "node_modules/chai/lib/chai/utils/expectTypes.js"(exports, module2) {
    var AssertionError2 = require_assertion_error();
    var flag = require_flag();
    var type2 = require_type_detect();
    module2.exports = function expectTypes(obj, types) {
      var flagMsg = flag(obj, "message");
      var ssfi = flag(obj, "ssfi");
      flagMsg = flagMsg ? flagMsg + ": " : "";
      obj = flag(obj, "object");
      types = types.map(function(t) {
        return t.toLowerCase();
      });
      types.sort();
      var str = types.map(function(t, index2) {
        var art = ~["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a";
        var or = types.length > 1 && index2 === types.length - 1 ? "or " : "";
        return or + art + " " + t;
      }).join(", ");
      var objType = type2(obj).toLowerCase();
      if (!types.some(function(expected) {
        return objType === expected;
      })) {
        throw new AssertionError2(
          flagMsg + "object tested must be " + str + ", but " + objType + " given",
          void 0,
          ssfi
        );
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getActual.js
var require_getActual = __commonJS({
  "node_modules/chai/lib/chai/utils/getActual.js"(exports, module2) {
    module2.exports = function getActual(obj, args) {
      return args.length > 4 ? args[4] : obj._obj;
    };
  }
});

// node_modules/chai/lib/chai/config.js
var require_config = __commonJS({
  "node_modules/chai/lib/chai/config.js"(exports, module2) {
    module2.exports = {
      /**
       * ### config.includeStack
       *
       * User configurable property, influences whether stack trace
       * is included in Assertion error message. Default of false
       * suppresses stack trace in the error message.
       *
       *     chai.config.includeStack = true;  // enable stack on error
       *
       * @param {Boolean}
       * @api public
       */
      includeStack: false,
      /**
       * ### config.showDiff
       *
       * User configurable property, influences whether or not
       * the `showDiff` flag should be included in the thrown
       * AssertionErrors. `false` will always be `false`; `true`
       * will be true when the assertion has requested a diff
       * be shown.
       *
       * @param {Boolean}
       * @api public
       */
      showDiff: true,
      /**
       * ### config.truncateThreshold
       *
       * User configurable property, sets length threshold for actual and
       * expected values in assertion errors. If this threshold is exceeded, for
       * example for large data structures, the value is replaced with something
       * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
       *
       * Set it to zero if you want to disable truncating altogether.
       *
       * This is especially userful when doing assertions on arrays: having this
       * set to a reasonable large value makes the failure messages readily
       * inspectable.
       *
       *     chai.config.truncateThreshold = 0;  // disable truncating
       *
       * @param {Number}
       * @api public
       */
      truncateThreshold: 40,
      /**
       * ### config.useProxy
       *
       * User configurable property, defines if chai will use a Proxy to throw
       * an error when a non-existent property is read, which protects users
       * from typos when using property-based assertions.
       *
       * Set it to false if you want to disable this feature.
       *
       *     chai.config.useProxy = false;  // disable use of Proxy
       *
       * This feature is automatically disabled regardless of this config value
       * in environments that don't support proxies.
       *
       * @param {Boolean}
       * @api public
       */
      useProxy: true,
      /**
       * ### config.proxyExcludedKeys
       *
       * User configurable property, defines which properties should be ignored
       * instead of throwing an error if they do not exist on the assertion.
       * This is only applied if the environment Chai is running in supports proxies and
       * if the `useProxy` configuration setting is enabled.
       * By default, `then` and `inspect` will not throw an error if they do not exist on the
       * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
       * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
       *
       *     // By default these keys will not throw an error if they do not exist on the assertion object
       *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
       *
       * @param {Array}
       * @api public
       */
      proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
    };
  }
});

// node_modules/chai/lib/chai/utils/inspect.js
var require_inspect = __commonJS({
  "node_modules/chai/lib/chai/utils/inspect.js"(exports, module2) {
    var getName = require_get_func_name();
    var loupe = (init_loupe(), __toCommonJS(loupe_exports));
    var config2 = require_config();
    module2.exports = inspect3;
    function inspect3(obj, showHidden, depth, colors2) {
      var options = {
        colors: colors2,
        depth: typeof depth === "undefined" ? 2 : depth,
        showHidden,
        truncate: config2.truncateThreshold ? config2.truncateThreshold : Infinity
      };
      return loupe.inspect(obj, options);
    }
  }
});

// node_modules/chai/lib/chai/utils/objDisplay.js
var require_objDisplay = __commonJS({
  "node_modules/chai/lib/chai/utils/objDisplay.js"(exports, module2) {
    var inspect3 = require_inspect();
    var config2 = require_config();
    module2.exports = function objDisplay2(obj) {
      var str = inspect3(obj), type2 = Object.prototype.toString.call(obj);
      if (config2.truncateThreshold && str.length >= config2.truncateThreshold) {
        if (type2 === "[object Function]") {
          return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
        } else if (type2 === "[object Array]") {
          return "[ Array(" + obj.length + ") ]";
        } else if (type2 === "[object Object]") {
          var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
          return "{ Object (" + kstr + ") }";
        } else {
          return str;
        }
      } else {
        return str;
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getMessage.js
var require_getMessage = __commonJS({
  "node_modules/chai/lib/chai/utils/getMessage.js"(exports, module2) {
    var flag = require_flag();
    var getActual = require_getActual();
    var objDisplay2 = require_objDisplay();
    module2.exports = function getMessage(obj, args) {
      var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      msg = msg.replace(/#\{this\}/g, function() {
        return objDisplay2(val);
      }).replace(/#\{act\}/g, function() {
        return objDisplay2(actual);
      }).replace(/#\{exp\}/g, function() {
        return objDisplay2(expected);
      });
      return flagMsg ? flagMsg + ": " + msg : msg;
    };
  }
});

// node_modules/chai/lib/chai/utils/transferFlags.js
var require_transferFlags = __commonJS({
  "node_modules/chai/lib/chai/utils/transferFlags.js"(exports, module2) {
    module2.exports = function transferFlags(assertion, object2, includeAll) {
      var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
      if (!object2.__flags) {
        object2.__flags = /* @__PURE__ */ Object.create(null);
      }
      includeAll = arguments.length === 3 ? includeAll : true;
      for (var flag in flags) {
        if (includeAll || flag !== "object" && flag !== "ssfi" && flag !== "lockSsfi" && flag != "message") {
          object2.__flags[flag] = flags[flag];
        }
      }
    };
  }
});

// node_modules/deep-eql/index.js
var require_deep_eql = __commonJS({
  "node_modules/deep-eql/index.js"(exports, module2) {
    "use strict";
    var type2 = require_type_detect();
    function FakeMap2() {
      this._key = "chai/deep-eql__" + Math.random() + Date.now();
    }
    FakeMap2.prototype = {
      get: function get2(key) {
        return key[this._key];
      },
      set: function set3(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this._key, {
            value,
            configurable: true
          });
        }
      }
    };
    var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap2;
    function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
      if (!memoizeMap || isPrimitive3(leftHandOperand) || isPrimitive3(rightHandOperand)) {
        return null;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        var result = leftHandMap.get(rightHandOperand);
        if (typeof result === "boolean") {
          return result;
        }
      }
      return null;
    }
    function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
      if (!memoizeMap || isPrimitive3(leftHandOperand) || isPrimitive3(rightHandOperand)) {
        return;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        leftHandMap.set(rightHandOperand, result);
      } else {
        leftHandMap = new MemoizeMap();
        leftHandMap.set(rightHandOperand, result);
        memoizeMap.set(leftHandOperand, leftHandMap);
      }
    }
    module2.exports = deepEqual;
    module2.exports.MemoizeMap = MemoizeMap;
    function deepEqual(leftHandOperand, rightHandOperand, options) {
      if (options && options.comparator) {
        return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
      }
      var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
      if (simpleResult !== null) {
        return simpleResult;
      }
      return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
    }
    function simpleEqual(leftHandOperand, rightHandOperand) {
      if (leftHandOperand === rightHandOperand) {
        return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
      }
      if (leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
      rightHandOperand !== rightHandOperand) {
        return true;
      }
      if (isPrimitive3(leftHandOperand) || isPrimitive3(rightHandOperand)) {
        return false;
      }
      return null;
    }
    function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
      options = options || {};
      options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
      var comparator2 = options && options.comparator;
      var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
      if (memoizeResultLeft !== null) {
        return memoizeResultLeft;
      }
      var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
      if (memoizeResultRight !== null) {
        return memoizeResultRight;
      }
      if (comparator2) {
        var comparatorResult = comparator2(leftHandOperand, rightHandOperand);
        if (comparatorResult === false || comparatorResult === true) {
          memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
          return comparatorResult;
        }
        var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
        if (simpleResult !== null) {
          return simpleResult;
        }
      }
      var leftHandType = type2(leftHandOperand);
      if (leftHandType !== type2(rightHandOperand)) {
        memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
        return false;
      }
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
      var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
      return result;
    }
    function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
      switch (leftHandType) {
        case "String":
        case "Number":
        case "Boolean":
        case "Date":
          return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
        case "Promise":
        case "Symbol":
        case "function":
        case "WeakMap":
        case "WeakSet":
          return leftHandOperand === rightHandOperand;
        case "Error":
          return keysEqual(leftHandOperand, rightHandOperand, ["name", "message", "code"], options);
        case "Arguments":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "Array":
          return iterableEqual(leftHandOperand, rightHandOperand, options);
        case "RegExp":
          return regexpEqual(leftHandOperand, rightHandOperand);
        case "Generator":
          return generatorEqual(leftHandOperand, rightHandOperand, options);
        case "DataView":
          return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
        case "ArrayBuffer":
          return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
        case "Set":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Map":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.Instant":
        case "Temporal.ZonedDateTime":
        case "Temporal.PlainYearMonth":
        case "Temporal.PlainMonthDay":
          return leftHandOperand.equals(rightHandOperand);
        case "Temporal.Duration":
          return leftHandOperand.total("nanoseconds") === rightHandOperand.total("nanoseconds");
        case "Temporal.TimeZone":
        case "Temporal.Calendar":
          return leftHandOperand.toString() === rightHandOperand.toString();
        default:
          return objectEqual(leftHandOperand, rightHandOperand, options);
      }
    }
    function regexpEqual(leftHandOperand, rightHandOperand) {
      return leftHandOperand.toString() === rightHandOperand.toString();
    }
    function entriesEqual(leftHandOperand, rightHandOperand, options) {
      if (leftHandOperand.size !== rightHandOperand.size) {
        return false;
      }
      if (leftHandOperand.size === 0) {
        return true;
      }
      var leftHandItems = [];
      var rightHandItems = [];
      leftHandOperand.forEach(function gatherEntries(key, value) {
        leftHandItems.push([key, value]);
      });
      rightHandOperand.forEach(function gatherEntries(key, value) {
        rightHandItems.push([key, value]);
      });
      return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
    }
    function iterableEqual(leftHandOperand, rightHandOperand, options) {
      var length = leftHandOperand.length;
      if (length !== rightHandOperand.length) {
        return false;
      }
      if (length === 0) {
        return true;
      }
      var index2 = -1;
      while (++index2 < length) {
        if (deepEqual(leftHandOperand[index2], rightHandOperand[index2], options) === false) {
          return false;
        }
      }
      return true;
    }
    function generatorEqual(leftHandOperand, rightHandOperand, options) {
      return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
    }
    function hasIteratorFunction(target) {
      return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
    }
    function getIteratorEntries(target) {
      if (hasIteratorFunction(target)) {
        try {
          return getGeneratorEntries(target[Symbol.iterator]());
        } catch (iteratorError) {
          return [];
        }
      }
      return [];
    }
    function getGeneratorEntries(generator) {
      var generatorResult = generator.next();
      var accumulator = [generatorResult.value];
      while (generatorResult.done === false) {
        generatorResult = generator.next();
        accumulator.push(generatorResult.value);
      }
      return accumulator;
    }
    function getEnumerableKeys(target) {
      var keys2 = [];
      for (var key in target) {
        keys2.push(key);
      }
      return keys2;
    }
    function getEnumerableSymbols(target) {
      var keys2 = [];
      var allKeys = Object.getOwnPropertySymbols(target);
      for (var i2 = 0; i2 < allKeys.length; i2 += 1) {
        var key = allKeys[i2];
        if (Object.getOwnPropertyDescriptor(target, key).enumerable) {
          keys2.push(key);
        }
      }
      return keys2;
    }
    function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
      var length = keys2.length;
      if (length === 0) {
        return true;
      }
      for (var i2 = 0; i2 < length; i2 += 1) {
        if (deepEqual(leftHandOperand[keys2[i2]], rightHandOperand[keys2[i2]], options) === false) {
          return false;
        }
      }
      return true;
    }
    function objectEqual(leftHandOperand, rightHandOperand, options) {
      var leftHandKeys = getEnumerableKeys(leftHandOperand);
      var rightHandKeys = getEnumerableKeys(rightHandOperand);
      var leftHandSymbols = getEnumerableSymbols(leftHandOperand);
      var rightHandSymbols = getEnumerableSymbols(rightHandOperand);
      leftHandKeys = leftHandKeys.concat(leftHandSymbols);
      rightHandKeys = rightHandKeys.concat(rightHandSymbols);
      if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
        if (iterableEqual(mapSymbols(leftHandKeys).sort(), mapSymbols(rightHandKeys).sort()) === false) {
          return false;
        }
        return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
      }
      var leftHandEntries = getIteratorEntries(leftHandOperand);
      var rightHandEntries = getIteratorEntries(rightHandOperand);
      if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
        leftHandEntries.sort();
        rightHandEntries.sort();
        return iterableEqual(leftHandEntries, rightHandEntries, options);
      }
      if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
        return true;
      }
      return false;
    }
    function isPrimitive3(value) {
      return value === null || typeof value !== "object";
    }
    function mapSymbols(arr) {
      return arr.map(function mapSymbol(entry) {
        if (typeof entry === "symbol") {
          return entry.toString();
        }
        return entry;
      });
    }
  }
});

// node_modules/chai/lib/chai/utils/isProxyEnabled.js
var require_isProxyEnabled = __commonJS({
  "node_modules/chai/lib/chai/utils/isProxyEnabled.js"(exports, module2) {
    var config2 = require_config();
    module2.exports = function isProxyEnabled() {
      return config2.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
    };
  }
});

// node_modules/chai/lib/chai/utils/addProperty.js
var require_addProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/addProperty.js"(exports, module2) {
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function addProperty(ctx, name, getter) {
      getter = getter === void 0 ? function() {
      } : getter;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function propertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", propertyGetter);
            }
            var result = getter.call(this);
            if (result !== void 0)
              return result;
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/addLengthGuard.js
var require_addLengthGuard = __commonJS({
  "node_modules/chai/lib/chai/utils/addLengthGuard.js"(exports, module2) {
    var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
    }, "length");
    module2.exports = function addLengthGuard(fn2, assertionName, isChainable) {
      if (!fnLengthDesc.configurable)
        return fn2;
      Object.defineProperty(fn2, "length", {
        get: function() {
          if (isChainable) {
            throw Error("Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
          }
          throw Error("Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".');
        }
      });
      return fn2;
    };
  }
});

// node_modules/chai/lib/chai/utils/getProperties.js
var require_getProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getProperties.js"(exports, module2) {
    module2.exports = function getProperties(object2) {
      var result = Object.getOwnPropertyNames(object2);
      function addProperty(property) {
        if (result.indexOf(property) === -1) {
          result.push(property);
        }
      }
      var proto = Object.getPrototypeOf(object2);
      while (proto !== null) {
        Object.getOwnPropertyNames(proto).forEach(addProperty);
        proto = Object.getPrototypeOf(proto);
      }
      return result;
    };
  }
});

// node_modules/chai/lib/chai/utils/proxify.js
var require_proxify = __commonJS({
  "node_modules/chai/lib/chai/utils/proxify.js"(exports, module2) {
    var config2 = require_config();
    var flag = require_flag();
    var getProperties = require_getProperties();
    var isProxyEnabled = require_isProxyEnabled();
    var builtins = ["__flags", "__methods", "_obj", "assert"];
    module2.exports = function proxify(obj, nonChainableMethodName) {
      if (!isProxyEnabled())
        return obj;
      return new Proxy(obj, {
        get: function proxyGetter(target, property) {
          if (typeof property === "string" && config2.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
            if (nonChainableMethodName) {
              throw Error("Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
            }
            var suggestion = null;
            var suggestionDistance = 4;
            getProperties(target).forEach(function(prop) {
              if (!Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1) {
                var dist2 = stringDistanceCapped(
                  property,
                  prop,
                  suggestionDistance
                );
                if (dist2 < suggestionDistance) {
                  suggestion = prop;
                  suggestionDistance = dist2;
                }
              }
            });
            if (suggestion !== null) {
              throw Error("Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?');
            } else {
              throw Error("Invalid Chai property: " + property);
            }
          }
          if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
            flag(target, "ssfi", proxyGetter);
          }
          return Reflect.get(target, property);
        }
      });
    };
    function stringDistanceCapped(strA, strB, cap) {
      if (Math.abs(strA.length - strB.length) >= cap) {
        return cap;
      }
      var memo = [];
      for (var i2 = 0; i2 <= strA.length; i2++) {
        memo[i2] = Array(strB.length + 1).fill(0);
        memo[i2][0] = i2;
      }
      for (var j = 0; j < strB.length; j++) {
        memo[0][j] = j;
      }
      for (var i2 = 1; i2 <= strA.length; i2++) {
        var ch = strA.charCodeAt(i2 - 1);
        for (var j = 1; j <= strB.length; j++) {
          if (Math.abs(i2 - j) >= cap) {
            memo[i2][j] = cap;
            continue;
          }
          memo[i2][j] = Math.min(
            memo[i2 - 1][j] + 1,
            memo[i2][j - 1] + 1,
            memo[i2 - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
          );
        }
      }
      return memo[strA.length][strB.length];
    }
  }
});

// node_modules/chai/lib/chai/utils/addMethod.js
var require_addMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function addMethod(ctx, name, method) {
      var methodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", methodWrapper);
        }
        var result = method.apply(this, arguments);
        if (result !== void 0)
          return result;
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(methodWrapper, name, false);
      ctx[name] = proxify(methodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteProperty.js
var require_overwriteProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteProperty.js"(exports, module2) {
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteProperty(ctx, name, getter) {
      var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function() {
      };
      if (_get && "function" === typeof _get.get)
        _super = _get.get;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function overwritingPropertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", overwritingPropertyGetter);
            }
            var origLockSsfi = flag(this, "lockSsfi");
            flag(this, "lockSsfi", true);
            var result = getter(_super).call(this);
            flag(this, "lockSsfi", origLockSsfi);
            if (result !== void 0) {
              return result;
            }
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteMethod.js
var require_overwriteMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteMethod(ctx, name, method) {
      var _method = ctx[name], _super = function() {
        throw new Error(name + " is not a function");
      };
      if (_method && "function" === typeof _method)
        _super = _method;
      var overwritingMethodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", overwritingMethodWrapper);
        }
        var origLockSsfi = flag(this, "lockSsfi");
        flag(this, "lockSsfi", true);
        var result = method(_super).apply(this, arguments);
        flag(this, "lockSsfi", origLockSsfi);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(overwritingMethodWrapper, name, false);
      ctx[name] = proxify(overwritingMethodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/addChainableMethod.js
var require_addChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addChainableMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    var canSetPrototype = typeof Object.setPrototypeOf === "function";
    var testFn = function() {
    };
    var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
      var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
      if (typeof propDesc !== "object")
        return true;
      return !propDesc.configurable;
    });
    var call2 = Function.prototype.call;
    var apply = Function.prototype.apply;
    module2.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
      if (typeof chainingBehavior !== "function") {
        chainingBehavior = function() {
        };
      }
      var chainableBehavior = {
        method,
        chainingBehavior
      };
      if (!ctx.__methods) {
        ctx.__methods = {};
      }
      ctx.__methods[name] = chainableBehavior;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function chainableMethodGetter() {
            chainableBehavior.chainingBehavior.call(this);
            var chainableMethodWrapper = function() {
              if (!flag(this, "lockSsfi")) {
                flag(this, "ssfi", chainableMethodWrapper);
              }
              var result = chainableBehavior.method.apply(this, arguments);
              if (result !== void 0) {
                return result;
              }
              var newAssertion = new chai3.Assertion();
              transferFlags(this, newAssertion);
              return newAssertion;
            };
            addLengthGuard(chainableMethodWrapper, name, true);
            if (canSetPrototype) {
              var prototype = Object.create(this);
              prototype.call = call2;
              prototype.apply = apply;
              Object.setPrototypeOf(chainableMethodWrapper, prototype);
            } else {
              var asserterNames = Object.getOwnPropertyNames(ctx);
              asserterNames.forEach(function(asserterName) {
                if (excludeNames.indexOf(asserterName) !== -1) {
                  return;
                }
                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                Object.defineProperty(chainableMethodWrapper, asserterName, pd);
              });
            }
            transferFlags(this, chainableMethodWrapper);
            return proxify(chainableMethodWrapper);
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteChainableMethod.js
var require_overwriteChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteChainableMethod.js"(exports, module2) {
    var chai3 = require_chai();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
      var chainableBehavior = ctx.__methods[name];
      var _chainingBehavior = chainableBehavior.chainingBehavior;
      chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
        var result = chainingBehavior(_chainingBehavior).call(this);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      var _method = chainableBehavior.method;
      chainableBehavior.method = function overwritingChainableMethodWrapper() {
        var result = method(_method).apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
    };
  }
});

// node_modules/chai/lib/chai/utils/compareByInspect.js
var require_compareByInspect = __commonJS({
  "node_modules/chai/lib/chai/utils/compareByInspect.js"(exports, module2) {
    var inspect3 = require_inspect();
    module2.exports = function compareByInspect(a, b2) {
      return inspect3(a) < inspect3(b2) ? -1 : 1;
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js
var require_getOwnEnumerablePropertySymbols = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js"(exports, module2) {
    module2.exports = function getOwnEnumerablePropertySymbols(obj) {
      if (typeof Object.getOwnPropertySymbols !== "function")
        return [];
      return Object.getOwnPropertySymbols(obj).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
      });
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js
var require_getOwnEnumerableProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js"(exports, module2) {
    var getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    module2.exports = function getOwnEnumerableProperties(obj) {
      return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
    };
  }
});

// node_modules/check-error/index.js
var require_check_error = __commonJS({
  "node_modules/check-error/index.js"(exports, module2) {
    "use strict";
    function compatibleInstance(thrown, errorLike) {
      return errorLike instanceof Error && thrown === errorLike;
    }
    function compatibleConstructor(thrown, errorLike) {
      if (errorLike instanceof Error) {
        return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
      } else if (errorLike.prototype instanceof Error || errorLike === Error) {
        return thrown.constructor === errorLike || thrown instanceof errorLike;
      }
      return false;
    }
    function compatibleMessage(thrown, errMatcher) {
      var comparisonString = typeof thrown === "string" ? thrown : thrown.message;
      if (errMatcher instanceof RegExp) {
        return errMatcher.test(comparisonString);
      } else if (typeof errMatcher === "string") {
        return comparisonString.indexOf(errMatcher) !== -1;
      }
      return false;
    }
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
    function getFunctionName2(constructorFn) {
      var name = "";
      if (typeof constructorFn.name === "undefined") {
        var match = String(constructorFn).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = constructorFn.name;
      }
      return name;
    }
    function getConstructorName(errorLike) {
      var constructorName = errorLike;
      if (errorLike instanceof Error) {
        constructorName = getFunctionName2(errorLike.constructor);
      } else if (typeof errorLike === "function") {
        constructorName = getFunctionName2(errorLike).trim() || getFunctionName2(new errorLike());
      }
      return constructorName;
    }
    function getMessage(errorLike) {
      var msg = "";
      if (errorLike && errorLike.message) {
        msg = errorLike.message;
      } else if (typeof errorLike === "string") {
        msg = errorLike;
      }
      return msg;
    }
    module2.exports = {
      compatibleInstance,
      compatibleConstructor,
      compatibleMessage,
      getMessage,
      getConstructorName
    };
  }
});

// node_modules/chai/lib/chai/utils/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/chai/lib/chai/utils/isNaN.js"(exports, module2) {
    function isNaN3(value) {
      return value !== value;
    }
    module2.exports = Number.isNaN || isNaN3;
  }
});

// node_modules/chai/lib/chai/utils/getOperator.js
var require_getOperator = __commonJS({
  "node_modules/chai/lib/chai/utils/getOperator.js"(exports, module2) {
    var type2 = require_type_detect();
    var flag = require_flag();
    function isObjectType(obj) {
      var objectType = type2(obj);
      var objectTypes = ["Array", "Object", "function"];
      return objectTypes.indexOf(objectType) !== -1;
    }
    module2.exports = function getOperator(obj, args) {
      var operator = flag(obj, "operator");
      var negate = flag(obj, "negate");
      var expected = args[3];
      var msg = negate ? args[2] : args[1];
      if (operator) {
        return operator;
      }
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      if (!msg) {
        return void 0;
      }
      if (/\shave\s/.test(msg)) {
        return void 0;
      }
      var isObject4 = isObjectType(expected);
      if (/\snot\s/.test(msg)) {
        return isObject4 ? "notDeepStrictEqual" : "notStrictEqual";
      }
      return isObject4 ? "deepStrictEqual" : "strictEqual";
    };
  }
});

// node_modules/chai/lib/chai/utils/index.js
var require_utils = __commonJS({
  "node_modules/chai/lib/chai/utils/index.js"(exports) {
    var pathval = require_pathval();
    exports.test = require_test();
    exports.type = require_type_detect();
    exports.expectTypes = require_expectTypes();
    exports.getMessage = require_getMessage();
    exports.getActual = require_getActual();
    exports.inspect = require_inspect();
    exports.objDisplay = require_objDisplay();
    exports.flag = require_flag();
    exports.transferFlags = require_transferFlags();
    exports.eql = require_deep_eql();
    exports.getPathInfo = pathval.getPathInfo;
    exports.hasProperty = pathval.hasProperty;
    exports.getName = require_get_func_name();
    exports.addProperty = require_addProperty();
    exports.addMethod = require_addMethod();
    exports.overwriteProperty = require_overwriteProperty();
    exports.overwriteMethod = require_overwriteMethod();
    exports.addChainableMethod = require_addChainableMethod();
    exports.overwriteChainableMethod = require_overwriteChainableMethod();
    exports.compareByInspect = require_compareByInspect();
    exports.getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    exports.getOwnEnumerableProperties = require_getOwnEnumerableProperties();
    exports.checkError = require_check_error();
    exports.proxify = require_proxify();
    exports.addLengthGuard = require_addLengthGuard();
    exports.isProxyEnabled = require_isProxyEnabled();
    exports.isNaN = require_isNaN();
    exports.getOperator = require_getOperator();
  }
});

// node_modules/chai/lib/chai/assertion.js
var require_assertion = __commonJS({
  "node_modules/chai/lib/chai/assertion.js"(exports, module2) {
    var config2 = require_config();
    module2.exports = function(_chai, util2) {
      var AssertionError2 = _chai.AssertionError, flag = util2.flag;
      _chai.Assertion = Assertion2;
      function Assertion2(obj, msg, ssfi, lockSsfi) {
        flag(this, "ssfi", ssfi || Assertion2);
        flag(this, "lockSsfi", lockSsfi);
        flag(this, "object", obj);
        flag(this, "message", msg);
        return util2.proxify(this);
      }
      Object.defineProperty(Assertion2, "includeStack", {
        get: function() {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          return config2.includeStack;
        },
        set: function(value) {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          config2.includeStack = value;
        }
      });
      Object.defineProperty(Assertion2, "showDiff", {
        get: function() {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          return config2.showDiff;
        },
        set: function(value) {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          config2.showDiff = value;
        }
      });
      Assertion2.addProperty = function(name, fn2) {
        util2.addProperty(this.prototype, name, fn2);
      };
      Assertion2.addMethod = function(name, fn2) {
        util2.addMethod(this.prototype, name, fn2);
      };
      Assertion2.addChainableMethod = function(name, fn2, chainingBehavior) {
        util2.addChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.overwriteProperty = function(name, fn2) {
        util2.overwriteProperty(this.prototype, name, fn2);
      };
      Assertion2.overwriteMethod = function(name, fn2) {
        util2.overwriteMethod(this.prototype, name, fn2);
      };
      Assertion2.overwriteChainableMethod = function(name, fn2, chainingBehavior) {
        util2.overwriteChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
        var ok = util2.test(this, arguments);
        if (false !== showDiff)
          showDiff = true;
        if (void 0 === expected && void 0 === _actual)
          showDiff = false;
        if (true !== config2.showDiff)
          showDiff = false;
        if (!ok) {
          msg = util2.getMessage(this, arguments);
          var actual = util2.getActual(this, arguments);
          var assertionErrorObjectProperties = {
            actual,
            expected,
            showDiff
          };
          var operator = util2.getOperator(this, arguments);
          if (operator) {
            assertionErrorObjectProperties.operator = operator;
          }
          throw new AssertionError2(
            msg,
            assertionErrorObjectProperties,
            config2.includeStack ? this.assert : flag(this, "ssfi")
          );
        }
      };
      Object.defineProperty(
        Assertion2.prototype,
        "_obj",
        {
          get: function() {
            return flag(this, "object");
          },
          set: function(val) {
            flag(this, "object", val);
          }
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/core/assertions.js
var require_assertions = __commonJS({
  "node_modules/chai/lib/chai/core/assertions.js"(exports, module2) {
    module2.exports = function(chai3, _) {
      var Assertion2 = chai3.Assertion, AssertionError2 = chai3.AssertionError, flag = _.flag;
      [
        "to",
        "be",
        "been",
        "is",
        "and",
        "has",
        "have",
        "with",
        "that",
        "which",
        "at",
        "of",
        "same",
        "but",
        "does",
        "still",
        "also"
      ].forEach(function(chain) {
        Assertion2.addProperty(chain);
      });
      Assertion2.addProperty("not", function() {
        flag(this, "negate", true);
      });
      Assertion2.addProperty("deep", function() {
        flag(this, "deep", true);
      });
      Assertion2.addProperty("nested", function() {
        flag(this, "nested", true);
      });
      Assertion2.addProperty("own", function() {
        flag(this, "own", true);
      });
      Assertion2.addProperty("ordered", function() {
        flag(this, "ordered", true);
      });
      Assertion2.addProperty("any", function() {
        flag(this, "any", true);
        flag(this, "all", false);
      });
      Assertion2.addProperty("all", function() {
        flag(this, "all", true);
        flag(this, "any", false);
      });
      function an(type2, msg) {
        if (msg)
          flag(this, "message", msg);
        type2 = type2.toLowerCase();
        var obj = flag(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type2.charAt(0)) ? "an " : "a ";
        this.assert(
          type2 === _.type(obj).toLowerCase(),
          "expected #{this} to be " + article + type2,
          "expected #{this} not to be " + article + type2
        );
      }
      Assertion2.addChainableMethod("an", an);
      Assertion2.addChainableMethod("a", an);
      function SameValueZero(a, b2) {
        return _.isNaN(a) && _.isNaN(b2) || a === b2;
      }
      function includeChainingBehavior() {
        flag(this, "contains", true);
      }
      function include(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), negate = flag(this, "negate"), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), descriptor = isDeep ? "deep " : "";
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var included = false;
        switch (objType) {
          case "string":
            included = obj.indexOf(val) !== -1;
            break;
          case "weakset":
            if (isDeep) {
              throw new AssertionError2(
                flagMsg + "unable to use .deep.include with WeakSet",
                void 0,
                ssfi
              );
            }
            included = obj.has(val);
            break;
          case "map":
            var isEql = isDeep ? _.eql : SameValueZero;
            obj.forEach(function(item) {
              included = included || isEql(item, val);
            });
            break;
          case "set":
            if (isDeep) {
              obj.forEach(function(item) {
                included = included || _.eql(item, val);
              });
            } else {
              included = obj.has(val);
            }
            break;
          case "array":
            if (isDeep) {
              included = obj.some(function(item) {
                return _.eql(item, val);
              });
            } else {
              included = obj.indexOf(val) !== -1;
            }
            break;
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + "the given combination of arguments (" + objType + " and " + _.type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + _.type(val).toLowerCase(),
                void 0,
                ssfi
              );
            }
            var props = Object.keys(val), firstErr = null, numErrs = 0;
            props.forEach(function(prop) {
              var propAssertion = new Assertion2(obj);
              _.transferFlags(this, propAssertion, true);
              flag(propAssertion, "lockSsfi", true);
              if (!negate || props.length === 1) {
                propAssertion.property(prop, val[prop]);
                return;
              }
              try {
                propAssertion.property(prop, val[prop]);
              } catch (err) {
                if (!_.checkError.compatibleConstructor(err, AssertionError2)) {
                  throw err;
                }
                if (firstErr === null)
                  firstErr = err;
                numErrs++;
              }
            }, this);
            if (negate && props.length > 1 && numErrs === props.length) {
              throw firstErr;
            }
            return;
        }
        this.assert(
          included,
          "expected #{this} to " + descriptor + "include " + _.inspect(val),
          "expected #{this} to not " + descriptor + "include " + _.inspect(val)
        );
      }
      Assertion2.addChainableMethod("include", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contain", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contains", include, includeChainingBehavior);
      Assertion2.addChainableMethod("includes", include, includeChainingBehavior);
      Assertion2.addProperty("ok", function() {
        this.assert(
          flag(this, "object"),
          "expected #{this} to be truthy",
          "expected #{this} to be falsy"
        );
      });
      Assertion2.addProperty("true", function() {
        this.assert(
          true === flag(this, "object"),
          "expected #{this} to be true",
          "expected #{this} to be false",
          flag(this, "negate") ? false : true
        );
      });
      Assertion2.addProperty("false", function() {
        this.assert(
          false === flag(this, "object"),
          "expected #{this} to be false",
          "expected #{this} to be true",
          flag(this, "negate") ? true : false
        );
      });
      Assertion2.addProperty("null", function() {
        this.assert(
          null === flag(this, "object"),
          "expected #{this} to be null",
          "expected #{this} not to be null"
        );
      });
      Assertion2.addProperty("undefined", function() {
        this.assert(
          void 0 === flag(this, "object"),
          "expected #{this} to be undefined",
          "expected #{this} not to be undefined"
        );
      });
      Assertion2.addProperty("NaN", function() {
        this.assert(
          _.isNaN(flag(this, "object")),
          "expected #{this} to be NaN",
          "expected #{this} not to be NaN"
        );
      });
      function assertExist() {
        var val = flag(this, "object");
        this.assert(
          val !== null && val !== void 0,
          "expected #{this} to exist",
          "expected #{this} to not exist"
        );
      }
      Assertion2.addProperty("exist", assertExist);
      Assertion2.addProperty("exists", assertExist);
      Assertion2.addProperty("empty", function() {
        var val = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), itemsCount;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        switch (_.type(val).toLowerCase()) {
          case "array":
          case "string":
            itemsCount = val.length;
            break;
          case "map":
          case "set":
            itemsCount = val.size;
            break;
          case "weakmap":
          case "weakset":
            throw new AssertionError2(
              flagMsg + ".empty was passed a weak collection",
              void 0,
              ssfi
            );
          case "function":
            var msg = flagMsg + ".empty was passed a function " + _.getName(val);
            throw new AssertionError2(msg.trim(), void 0, ssfi);
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + ".empty was passed non-string primitive " + _.inspect(val),
                void 0,
                ssfi
              );
            }
            itemsCount = Object.keys(val).length;
        }
        this.assert(
          0 === itemsCount,
          "expected #{this} to be empty",
          "expected #{this} not to be empty"
        );
      });
      function checkArguments() {
        var obj = flag(this, "object"), type2 = _.type(obj);
        this.assert(
          "Arguments" === type2,
          "expected #{this} to be arguments but got " + type2,
          "expected #{this} to not be arguments"
        );
      }
      Assertion2.addProperty("arguments", checkArguments);
      Assertion2.addProperty("Arguments", checkArguments);
      function assertEqual(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        if (flag(this, "deep")) {
          var prevLockSsfi = flag(this, "lockSsfi");
          flag(this, "lockSsfi", true);
          this.eql(val);
          flag(this, "lockSsfi", prevLockSsfi);
        } else {
          this.assert(
            val === obj,
            "expected #{this} to equal #{exp}",
            "expected #{this} to not equal #{exp}",
            val,
            this._obj,
            true
          );
        }
      }
      Assertion2.addMethod("equal", assertEqual);
      Assertion2.addMethod("equals", assertEqual);
      Assertion2.addMethod("eq", assertEqual);
      function assertEql(obj, msg) {
        if (msg)
          flag(this, "message", msg);
        this.assert(
          _.eql(obj, flag(this, "object")),
          "expected #{this} to deeply equal #{exp}",
          "expected #{this} to not deeply equal #{exp}",
          obj,
          this._obj,
          true
        );
      }
      Assertion2.addMethod("eql", assertEql);
      Assertion2.addMethod("eqls", assertEql);
      function assertAbove(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to above must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to above must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount > n2,
            "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj > n2,
            "expected #{this} to be above #{exp}",
            "expected #{this} to be at most #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("above", assertAbove);
      Assertion2.addMethod("gt", assertAbove);
      Assertion2.addMethod("greaterThan", assertAbove);
      function assertLeast(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to least must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to least must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= n2,
            "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj >= n2,
            "expected #{this} to be at least #{exp}",
            "expected #{this} to be below #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("least", assertLeast);
      Assertion2.addMethod("gte", assertLeast);
      Assertion2.addMethod("greaterThanOrEqual", assertLeast);
      function assertBelow(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to below must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to below must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount < n2,
            "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj < n2,
            "expected #{this} to be below #{exp}",
            "expected #{this} to be at least #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("below", assertBelow);
      Assertion2.addMethod("lt", assertBelow);
      Assertion2.addMethod("lessThan", assertBelow);
      function assertMost(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to most must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to most must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount <= n2,
            "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj <= n2,
            "expected #{this} to be at most #{exp}",
            "expected #{this} to be above #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("most", assertMost);
      Assertion2.addMethod("lte", assertMost);
      Assertion2.addMethod("lessThanOrEqual", assertMost);
      Assertion2.addMethod("within", function(start, finish, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), startType = _.type(start).toLowerCase(), finishType = _.type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && (startType !== "date" || finishType !== "date"))) {
          errorMessage = msgPrefix + "the arguments to within must be dates";
        } else if ((startType !== "number" || finishType !== "number") && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the arguments to within must be numbers";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= start && itemsCount <= finish,
            "expected #{this} to have a " + descriptor + " within " + range,
            "expected #{this} to not have a " + descriptor + " within " + range
          );
        } else {
          this.assert(
            obj >= start && obj <= finish,
            "expected #{this} to be within " + range,
            "expected #{this} to not be within " + range
          );
        }
      });
      function assertInstanceOf(constructor, msg) {
        if (msg)
          flag(this, "message", msg);
        var target = flag(this, "object");
        var ssfi = flag(this, "ssfi");
        var flagMsg = flag(this, "message");
        try {
          var isInstanceOf = target instanceof constructor;
        } catch (err) {
          if (err instanceof TypeError) {
            flagMsg = flagMsg ? flagMsg + ": " : "";
            throw new AssertionError2(
              flagMsg + "The instanceof assertion needs a constructor but " + _.type(constructor) + " was given.",
              void 0,
              ssfi
            );
          }
          throw err;
        }
        var name = _.getName(constructor);
        if (name === null) {
          name = "an unnamed constructor";
        }
        this.assert(
          isInstanceOf,
          "expected #{this} to be an instance of " + name,
          "expected #{this} to not be an instance of " + name
        );
      }
      ;
      Assertion2.addMethod("instanceof", assertInstanceOf);
      Assertion2.addMethod("instanceOf", assertInstanceOf);
      function assertProperty(name, val, msg) {
        if (msg)
          flag(this, "message", msg);
        var isNested = flag(this, "nested"), isOwn = flag(this, "own"), flagMsg = flag(this, "message"), obj = flag(this, "object"), ssfi = flag(this, "ssfi"), nameType = typeof name;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        if (isNested) {
          if (nameType !== "string") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string when using nested syntax",
              void 0,
              ssfi
            );
          }
        } else {
          if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string, number, or symbol",
              void 0,
              ssfi
            );
          }
        }
        if (isNested && isOwn) {
          throw new AssertionError2(
            flagMsg + 'The "nested" and "own" flags cannot be combined.',
            void 0,
            ssfi
          );
        }
        if (obj === null || obj === void 0) {
          throw new AssertionError2(
            flagMsg + "Target cannot be null or undefined.",
            void 0,
            ssfi
          );
        }
        var isDeep = flag(this, "deep"), negate = flag(this, "negate"), pathInfo = isNested ? _.getPathInfo(obj, name) : null, value = isNested ? pathInfo.value : obj[name];
        var descriptor = "";
        if (isDeep)
          descriptor += "deep ";
        if (isOwn)
          descriptor += "own ";
        if (isNested)
          descriptor += "nested ";
        descriptor += "property ";
        var hasProperty;
        if (isOwn)
          hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
        else if (isNested)
          hasProperty = pathInfo.exists;
        else
          hasProperty = _.hasProperty(obj, name);
        if (!negate || arguments.length === 1) {
          this.assert(
            hasProperty,
            "expected #{this} to have " + descriptor + _.inspect(name),
            "expected #{this} to not have " + descriptor + _.inspect(name)
          );
        }
        if (arguments.length > 1) {
          this.assert(
            hasProperty && (isDeep ? _.eql(val, value) : val === value),
            "expected #{this} to have " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}",
            "expected #{this} to not have " + descriptor + _.inspect(name) + " of #{act}",
            val,
            value
          );
        }
        flag(this, "object", value);
      }
      Assertion2.addMethod("property", assertProperty);
      function assertOwnProperty(name, value, msg) {
        flag(this, "own", true);
        assertProperty.apply(this, arguments);
      }
      Assertion2.addMethod("ownProperty", assertOwnProperty);
      Assertion2.addMethod("haveOwnProperty", assertOwnProperty);
      function assertOwnPropertyDescriptor(name, descriptor, msg) {
        if (typeof descriptor === "string") {
          msg = descriptor;
          descriptor = null;
        }
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
        if (actualDescriptor && descriptor) {
          this.assert(
            _.eql(descriptor, actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor),
            descriptor,
            actualDescriptor,
            true
          );
        } else {
          this.assert(
            actualDescriptor,
            "expected #{this} to have an own property descriptor for " + _.inspect(name),
            "expected #{this} to not have an own property descriptor for " + _.inspect(name)
          );
        }
        flag(this, "object", actualDescriptor);
      }
      Assertion2.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
      Assertion2.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
      function assertLengthChain() {
        flag(this, "doLength", true);
      }
      function assertLength(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), descriptor = "length", itemsCount;
        switch (objType) {
          case "map":
          case "set":
            descriptor = "size";
            itemsCount = obj.size;
            break;
          default:
            new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
            itemsCount = obj.length;
        }
        this.assert(
          itemsCount == n2,
          "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
          "expected #{this} to not have a " + descriptor + " of #{act}",
          n2,
          itemsCount
        );
      }
      Assertion2.addChainableMethod("length", assertLength, assertLengthChain);
      Assertion2.addChainableMethod("lengthOf", assertLength, assertLengthChain);
      function assertMatch(re, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        this.assert(
          re.exec(obj),
          "expected #{this} to match " + re,
          "expected #{this} not to match " + re
        );
      }
      Assertion2.addMethod("match", assertMatch);
      Assertion2.addMethod("matches", assertMatch);
      Assertion2.addMethod("string", function(str, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("string");
        this.assert(
          ~obj.indexOf(str),
          "expected #{this} to contain " + _.inspect(str),
          "expected #{this} to not contain " + _.inspect(str)
        );
      });
      function assertKeys(keys2) {
        var obj = flag(this, "object"), objType = _.type(obj), keysType = _.type(keys2), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag(this, "message");
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
        if (objType === "Map" || objType === "Set") {
          deepStr = isDeep ? "deeply " : "";
          actual = [];
          obj.forEach(function(val, key) {
            actual.push(key);
          });
          if (keysType !== "Array") {
            keys2 = Array.prototype.slice.call(arguments);
          }
        } else {
          actual = _.getOwnEnumerableProperties(obj);
          switch (keysType) {
            case "Array":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              break;
            case "Object":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              keys2 = Object.keys(keys2);
              break;
            default:
              keys2 = Array.prototype.slice.call(arguments);
          }
          keys2 = keys2.map(function(val) {
            return typeof val === "symbol" ? val : String(val);
          });
        }
        if (!keys2.length) {
          throw new AssertionError2(flagMsg + "keys required", void 0, ssfi);
        }
        var len = keys2.length, any = flag(this, "any"), all = flag(this, "all"), expected = keys2;
        if (!any && !all) {
          all = true;
        }
        if (any) {
          ok = expected.some(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
        }
        if (all) {
          ok = expected.every(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
          if (!flag(this, "contains")) {
            ok = ok && keys2.length == actual.length;
          }
        }
        if (len > 1) {
          keys2 = keys2.map(function(key) {
            return _.inspect(key);
          });
          var last = keys2.pop();
          if (all) {
            str = keys2.join(", ") + ", and " + last;
          }
          if (any) {
            str = keys2.join(", ") + ", or " + last;
          }
        } else {
          str = _.inspect(keys2[0]);
        }
        str = (len > 1 ? "keys " : "key ") + str;
        str = (flag(this, "contains") ? "contain " : "have ") + str;
        this.assert(
          ok,
          "expected #{this} to " + deepStr + str,
          "expected #{this} to not " + deepStr + str,
          expected.slice(0).sort(_.compareByInspect),
          actual.sort(_.compareByInspect),
          true
        );
      }
      Assertion2.addMethod("keys", assertKeys);
      Assertion2.addMethod("key", assertKeys);
      function assertThrows(errorLike, errMsgMatcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), negate = flag(this, "negate") || false;
        new Assertion2(obj, flagMsg, ssfi, true).is.a("function");
        if (errorLike instanceof RegExp || typeof errorLike === "string") {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var caughtErr;
        try {
          obj();
        } catch (err) {
          caughtErr = err;
        }
        var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
        var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
        var errorLikeFail = false;
        var errMsgMatcherFail = false;
        if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
          var errorLikeString = "an error";
          if (errorLike instanceof Error) {
            errorLikeString = "#{exp}";
          } else if (errorLike) {
            errorLikeString = _.checkError.getConstructorName(errorLike);
          }
          this.assert(
            caughtErr,
            "expected #{this} to throw " + errorLikeString,
            "expected #{this} to not throw an error but #{act} was thrown",
            errorLike && errorLike.toString(),
            caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === "string" ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        if (errorLike && caughtErr) {
          if (errorLike instanceof Error) {
            var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);
            if (isCompatibleInstance === negate) {
              if (everyArgIsDefined && negate) {
                errorLikeFail = true;
              } else {
                this.assert(
                  negate,
                  "expected #{this} to throw #{exp} but #{act} was thrown",
                  "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
                  errorLike.toString(),
                  caughtErr.toString()
                );
              }
            }
          }
          var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
          if (isCompatibleConstructor === negate) {
            if (everyArgIsDefined && negate) {
              errorLikeFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw #{exp} but #{act} was thrown",
                "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
                errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
                caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
              );
            }
          }
        }
        if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
          var placeholder = "including";
          if (errMsgMatcher instanceof RegExp) {
            placeholder = "matching";
          }
          var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
          if (isCompatibleMessage === negate) {
            if (everyArgIsDefined && negate) {
              errMsgMatcherFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
                "expected #{this} to throw error not " + placeholder + " #{exp}",
                errMsgMatcher,
                _.checkError.getMessage(caughtErr)
              );
            }
          }
        }
        if (errorLikeFail && errMsgMatcherFail) {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
            errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
            caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        flag(this, "object", caughtErr);
      }
      ;
      Assertion2.addMethod("throw", assertThrows);
      Assertion2.addMethod("throws", assertThrows);
      Assertion2.addMethod("Throw", assertThrows);
      function respondTo(method, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
        this.assert(
          "function" === typeof context,
          "expected #{this} to respond to " + _.inspect(method),
          "expected #{this} to not respond to " + _.inspect(method)
        );
      }
      Assertion2.addMethod("respondTo", respondTo);
      Assertion2.addMethod("respondsTo", respondTo);
      Assertion2.addProperty("itself", function() {
        flag(this, "itself", true);
      });
      function satisfy(matcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var result = matcher(obj);
        this.assert(
          result,
          "expected #{this} to satisfy " + _.objDisplay(matcher),
          "expected #{this} to not satisfy" + _.objDisplay(matcher),
          flag(this, "negate") ? false : true,
          result
        );
      }
      Assertion2.addMethod("satisfy", satisfy);
      Assertion2.addMethod("satisfies", satisfy);
      function closeTo(expected, delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("number");
        if (typeof expected !== "number" || typeof delta !== "number") {
          flagMsg = flagMsg ? flagMsg + ": " : "";
          var deltaMessage = delta === void 0 ? ", and a delta is required" : "";
          throw new AssertionError2(
            flagMsg + "the arguments to closeTo or approximately must be numbers" + deltaMessage,
            void 0,
            ssfi
          );
        }
        this.assert(
          Math.abs(obj - expected) <= delta,
          "expected #{this} to be close to " + expected + " +/- " + delta,
          "expected #{this} not to be close to " + expected + " +/- " + delta
        );
      }
      Assertion2.addMethod("closeTo", closeTo);
      Assertion2.addMethod("approximately", closeTo);
      function isSubsetOf(subset, superset, cmp, contains, ordered) {
        if (!contains) {
          if (subset.length !== superset.length)
            return false;
          superset = superset.slice();
        }
        return subset.every(function(elem, idx) {
          if (ordered)
            return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
          if (!cmp) {
            var matchIdx = superset.indexOf(elem);
            if (matchIdx === -1)
              return false;
            if (!contains)
              superset.splice(matchIdx, 1);
            return true;
          }
          return superset.some(function(elem2, matchIdx2) {
            if (!cmp(elem, elem2))
              return false;
            if (!contains)
              superset.splice(matchIdx2, 1);
            return true;
          });
        });
      }
      Assertion2.addMethod("members", function(subset, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).to.be.an("array");
        new Assertion2(subset, flagMsg, ssfi, true).to.be.an("array");
        var contains = flag(this, "contains");
        var ordered = flag(this, "ordered");
        var subject, failMsg, failNegateMsg;
        if (contains) {
          subject = ordered ? "an ordered superset" : "a superset";
          failMsg = "expected #{this} to be " + subject + " of #{exp}";
          failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
        } else {
          subject = ordered ? "ordered members" : "members";
          failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
          failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
        }
        var cmp = flag(this, "deep") ? _.eql : void 0;
        this.assert(
          isSubsetOf(subset, obj, cmp, contains, ordered),
          failMsg,
          failNegateMsg,
          subset,
          obj,
          true
        );
      });
      function oneOf(list, msg) {
        if (msg)
          flag(this, "message", msg);
        var expected = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), contains = flag(this, "contains"), isDeep = flag(this, "deep");
        new Assertion2(list, flagMsg, ssfi, true).to.be.an("array");
        if (contains) {
          this.assert(
            list.some(function(possibility) {
              return expected.indexOf(possibility) > -1;
            }),
            "expected #{this} to contain one of #{exp}",
            "expected #{this} to not contain one of #{exp}",
            list,
            expected
          );
        } else {
          if (isDeep) {
            this.assert(
              list.some(function(possibility) {
                return _.eql(expected, possibility);
              }),
              "expected #{this} to deeply equal one of #{exp}",
              "expected #{this} to deeply equal one of #{exp}",
              list,
              expected
            );
          } else {
            this.assert(
              list.indexOf(expected) > -1,
              "expected #{this} to be one of #{exp}",
              "expected #{this} to not be one of #{exp}",
              list,
              expected
            );
          }
        }
      }
      Assertion2.addMethod("oneOf", oneOf);
      function assertChanges(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "change");
        flag(this, "realDelta", final !== initial);
        this.assert(
          initial !== final,
          "expected " + msgObj + " to change",
          "expected " + msgObj + " to not change"
        );
      }
      Assertion2.addMethod("change", assertChanges);
      Assertion2.addMethod("changes", assertChanges);
      function assertIncreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "increase");
        flag(this, "realDelta", final - initial);
        this.assert(
          final - initial > 0,
          "expected " + msgObj + " to increase",
          "expected " + msgObj + " to not increase"
        );
      }
      Assertion2.addMethod("increase", assertIncreases);
      Assertion2.addMethod("increases", assertIncreases);
      function assertDecreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "decrease");
        flag(this, "realDelta", initial - final);
        this.assert(
          final - initial < 0,
          "expected " + msgObj + " to decrease",
          "expected " + msgObj + " to not decrease"
        );
      }
      Assertion2.addMethod("decrease", assertDecreases);
      Assertion2.addMethod("decreases", assertDecreases);
      function assertDelta(delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var msgObj = flag(this, "deltaMsgObj");
        var initial = flag(this, "initialDeltaValue");
        var final = flag(this, "finalDeltaValue");
        var behavior = flag(this, "deltaBehavior");
        var realDelta = flag(this, "realDelta");
        var expression;
        if (behavior === "change") {
          expression = Math.abs(final - initial) === Math.abs(delta);
        } else {
          expression = realDelta === Math.abs(delta);
        }
        this.assert(
          expression,
          "expected " + msgObj + " to " + behavior + " by " + delta,
          "expected " + msgObj + " to not " + behavior + " by " + delta
        );
      }
      Assertion2.addMethod("by", assertDelta);
      Assertion2.addProperty("extensible", function() {
        var obj = flag(this, "object");
        var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
        this.assert(
          isExtensible,
          "expected #{this} to be extensible",
          "expected #{this} to not be extensible"
        );
      });
      Assertion2.addProperty("sealed", function() {
        var obj = flag(this, "object");
        var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
        this.assert(
          isSealed,
          "expected #{this} to be sealed",
          "expected #{this} to not be sealed"
        );
      });
      Assertion2.addProperty("frozen", function() {
        var obj = flag(this, "object");
        var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
        this.assert(
          isFrozen,
          "expected #{this} to be frozen",
          "expected #{this} to not be frozen"
        );
      });
      Assertion2.addProperty("finite", function(msg) {
        var obj = flag(this, "object");
        this.assert(
          typeof obj === "number" && isFinite(obj),
          "expected #{this} to be a finite number",
          "expected #{this} to not be a finite number"
        );
      });
    };
  }
});

// node_modules/chai/lib/chai/interface/expect.js
var require_expect = __commonJS({
  "node_modules/chai/lib/chai/interface/expect.js"(exports, module2) {
    module2.exports = function(chai3, util2) {
      chai3.expect = function(val, message) {
        return new chai3.Assertion(val, message);
      };
      chai3.expect.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "expect.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, chai3.expect.fail);
      };
    };
  }
});

// node_modules/chai/lib/chai/interface/should.js
var require_should = __commonJS({
  "node_modules/chai/lib/chai/interface/should.js"(exports, module2) {
    module2.exports = function(chai3, util2) {
      var Assertion2 = chai3.Assertion;
      function loadShould() {
        function shouldGetter() {
          if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
            return new Assertion2(this.valueOf(), null, shouldGetter);
          }
          return new Assertion2(this, null, shouldGetter);
        }
        function shouldSetter(value) {
          Object.defineProperty(this, "should", {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        }
        Object.defineProperty(Object.prototype, "should", {
          set: shouldSetter,
          get: shouldGetter,
          configurable: true
        });
        var should2 = {};
        should2.fail = function(actual, expected, message, operator) {
          if (arguments.length < 2) {
            message = actual;
            actual = void 0;
          }
          message = message || "should.fail()";
          throw new chai3.AssertionError(message, {
            actual,
            expected,
            operator
          }, should2.fail);
        };
        should2.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.equal(val2);
        };
        should2.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.Throw(errt, errs);
        };
        should2.exist = function(val, msg) {
          new Assertion2(val, msg).to.exist;
        };
        should2.not = {};
        should2.not.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.not.equal(val2);
        };
        should2.not.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.not.Throw(errt, errs);
        };
        should2.not.exist = function(val, msg) {
          new Assertion2(val, msg).to.not.exist;
        };
        should2["throw"] = should2["Throw"];
        should2.not["throw"] = should2.not["Throw"];
        return should2;
      }
      ;
      chai3.should = loadShould;
      chai3.Should = loadShould;
    };
  }
});

// node_modules/chai/lib/chai/interface/assert.js
var require_assert = __commonJS({
  "node_modules/chai/lib/chai/interface/assert.js"(exports, module2) {
    module2.exports = function(chai3, util2) {
      var Assertion2 = chai3.Assertion, flag = util2.flag;
      var assert2 = chai3.assert = function(express, errmsg) {
        var test3 = new Assertion2(null, null, chai3.assert, true);
        test3.assert(
          express,
          errmsg,
          "[ negation message unavailable ]"
        );
      };
      assert2.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "assert.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, assert2.fail);
      };
      assert2.isOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isOk, true).is.ok;
      };
      assert2.isNotOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotOk, true).is.not.ok;
      };
      assert2.equal = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.equal, true);
        test3.assert(
          exp == flag(test3, "object"),
          "expected #{this} to equal #{exp}",
          "expected #{this} to not equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.notEqual = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.notEqual, true);
        test3.assert(
          exp != flag(test3, "object"),
          "expected #{this} to not equal #{exp}",
          "expected #{this} to equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.strictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.strictEqual, true).to.equal(exp);
      };
      assert2.notStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
      };
      assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.deepEqual, true).to.eql(exp);
      };
      assert2.notDeepEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
      };
      assert2.isAbove = function(val, abv, msg) {
        new Assertion2(val, msg, assert2.isAbove, true).to.be.above(abv);
      };
      assert2.isAtLeast = function(val, atlst, msg) {
        new Assertion2(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
      };
      assert2.isBelow = function(val, blw, msg) {
        new Assertion2(val, msg, assert2.isBelow, true).to.be.below(blw);
      };
      assert2.isAtMost = function(val, atmst, msg) {
        new Assertion2(val, msg, assert2.isAtMost, true).to.be.most(atmst);
      };
      assert2.isTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isTrue, true).is["true"];
      };
      assert2.isNotTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotTrue, true).to.not.equal(true);
      };
      assert2.isFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isFalse, true).is["false"];
      };
      assert2.isNotFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFalse, true).to.not.equal(false);
      };
      assert2.isNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNull, true).to.equal(null);
      };
      assert2.isNotNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNull, true).to.not.equal(null);
      };
      assert2.isNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNaN, true).to.be.NaN;
      };
      assert2.isNotNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNaN, true).not.to.be.NaN;
      };
      assert2.exists = function(val, msg) {
        new Assertion2(val, msg, assert2.exists, true).to.exist;
      };
      assert2.notExists = function(val, msg) {
        new Assertion2(val, msg, assert2.notExists, true).to.not.exist;
      };
      assert2.isUndefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isUndefined, true).to.equal(void 0);
      };
      assert2.isDefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isDefined, true).to.not.equal(void 0);
      };
      assert2.isFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isFunction, true).to.be.a("function");
      };
      assert2.isNotFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFunction, true).to.not.be.a("function");
      };
      assert2.isObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isObject, true).to.be.a("object");
      };
      assert2.isNotObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotObject, true).to.not.be.a("object");
      };
      assert2.isArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isArray, true).to.be.an("array");
      };
      assert2.isNotArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotArray, true).to.not.be.an("array");
      };
      assert2.isString = function(val, msg) {
        new Assertion2(val, msg, assert2.isString, true).to.be.a("string");
      };
      assert2.isNotString = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotString, true).to.not.be.a("string");
      };
      assert2.isNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNumber, true).to.be.a("number");
      };
      assert2.isNotNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
      };
      assert2.isFinite = function(val, msg) {
        new Assertion2(val, msg, assert2.isFinite, true).to.be.finite;
      };
      assert2.isBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isBoolean, true).to.be.a("boolean");
      };
      assert2.isNotBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
      };
      assert2.typeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.typeOf, true).to.be.a(type2);
      };
      assert2.notTypeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notTypeOf, true).to.not.be.a(type2);
      };
      assert2.instanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.instanceOf, true).to.be.instanceOf(type2);
      };
      assert2.notInstanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(type2);
      };
      assert2.include = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.include, true).include(inc);
      };
      assert2.notInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notInclude, true).not.include(inc);
      };
      assert2.deepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepInclude, true).deep.include(inc);
      };
      assert2.notDeepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc);
      };
      assert2.nestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.nestedInclude, true).nested.include(inc);
      };
      assert2.notNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notNestedInclude, true).not.nested.include(inc);
      };
      assert2.deepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(inc);
      };
      assert2.notDeepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepNestedInclude, true).not.deep.nested.include(inc);
      };
      assert2.ownInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.ownInclude, true).own.include(inc);
      };
      assert2.notOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notOwnInclude, true).not.own.include(inc);
      };
      assert2.deepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc);
      };
      assert2.notDeepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(inc);
      };
      assert2.match = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.match, true).to.match(re);
      };
      assert2.notMatch = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.notMatch, true).to.not.match(re);
      };
      assert2.property = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.property, true).to.have.property(prop);
      };
      assert2.notProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notProperty, true).to.not.have.property(prop);
      };
      assert2.propertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.propertyVal, true).to.have.property(prop, val);
      };
      assert2.notPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notPropertyVal, true).to.not.have.property(prop, val);
      };
      assert2.deepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(prop, val);
      };
      assert2.notDeepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepPropertyVal, true).to.not.have.deep.property(prop, val);
      };
      assert2.ownProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.ownProperty, true).to.have.own.property(prop);
      };
      assert2.notOwnProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(prop);
      };
      assert2.ownPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(prop, value);
      };
      assert2.notOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notOwnPropertyVal, true).to.not.have.own.property(prop, value);
      };
      assert2.deepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.deepOwnPropertyVal, true).to.have.deep.own.property(prop, value);
      };
      assert2.notDeepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop, value);
      };
      assert2.nestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.nestedProperty, true).to.have.nested.property(prop);
      };
      assert2.notNestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notNestedProperty, true).to.not.have.nested.property(prop);
      };
      assert2.nestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.nestedPropertyVal, true).to.have.nested.property(prop, val);
      };
      assert2.notNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notNestedPropertyVal, true).to.not.have.nested.property(prop, val);
      };
      assert2.deepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepNestedPropertyVal, true).to.have.deep.nested.property(prop, val);
      };
      assert2.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop, val);
      };
      assert2.lengthOf = function(exp, len, msg) {
        new Assertion2(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
      };
      assert2.hasAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys2);
      };
      assert2.hasAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys2);
      };
      assert2.containsAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(keys2);
      };
      assert2.doesNotHaveAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys2);
      };
      assert2.doesNotHaveAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(keys2);
      };
      assert2.hasAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(keys2);
      };
      assert2.hasAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(keys2);
      };
      assert2.containsAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllDeepKeys, true).to.contain.all.deep.keys(keys2);
      };
      assert2.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys2);
      };
      assert2.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys2);
      };
      assert2.throws = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var assertErr = new Assertion2(fn2, msg, assert2.throws, true).to.throw(errorLike, errMsgMatcher);
        return flag(assertErr, "object");
      };
      assert2.doesNotThrow = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        new Assertion2(fn2, msg, assert2.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
      };
      assert2.operator = function(val, operator, val2, msg) {
        var ok;
        switch (operator) {
          case "==":
            ok = val == val2;
            break;
          case "===":
            ok = val === val2;
            break;
          case ">":
            ok = val > val2;
            break;
          case ">=":
            ok = val >= val2;
            break;
          case "<":
            ok = val < val2;
            break;
          case "<=":
            ok = val <= val2;
            break;
          case "!=":
            ok = val != val2;
            break;
          case "!==":
            ok = val !== val2;
            break;
          default:
            msg = msg ? msg + ": " : msg;
            throw new chai3.AssertionError(
              msg + 'Invalid operator "' + operator + '"',
              void 0,
              assert2.operator
            );
        }
        var test3 = new Assertion2(ok, msg, assert2.operator, true);
        test3.assert(
          true === flag(test3, "object"),
          "expected " + util2.inspect(val) + " to be " + operator + " " + util2.inspect(val2),
          "expected " + util2.inspect(val) + " to not be " + operator + " " + util2.inspect(val2)
        );
      };
      assert2.closeTo = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
      };
      assert2.approximately = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.approximately, true).to.be.approximately(exp, delta);
      };
      assert2.sameMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameMembers, true).to.have.same.members(set22);
      };
      assert2.notSameMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameMembers, true).to.not.have.same.members(set22);
      };
      assert2.sameDeepMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameDeepMembers, true).to.have.same.deep.members(set22);
      };
      assert2.notSameDeepMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepMembers, true).to.not.have.same.deep.members(set22);
      };
      assert2.sameOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameOrderedMembers, true).to.have.same.ordered.members(set22);
      };
      assert2.notSameOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameOrderedMembers, true).to.not.have.same.ordered.members(set22);
      };
      assert2.sameDeepOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set22);
      };
      assert2.notSameDeepOrderedMembers = function(set1, set22, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set22);
      };
      assert2.includeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeMembers, true).to.include.members(subset);
      };
      assert2.notIncludeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeMembers, true).to.not.include.members(subset);
      };
      assert2.includeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepMembers, true).to.include.deep.members(subset);
      };
      assert2.notIncludeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepMembers, true).to.not.include.deep.members(subset);
      };
      assert2.includeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeOrderedMembers, true).to.include.ordered.members(subset);
      };
      assert2.notIncludeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset);
      };
      assert2.includeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset);
      };
      assert2.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset);
      };
      assert2.oneOf = function(inList, list, msg) {
        new Assertion2(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
      };
      assert2.changes = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changes, true).to.change(obj, prop);
      };
      assert2.changesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesBy, true).to.change(obj, prop).by(delta);
      };
      assert2.doesNotChange = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotChange, true).to.not.change(obj, prop);
      };
      assert2.changesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
      };
      assert2.increases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.increases, true).to.increase(obj, prop);
      };
      assert2.increasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesBy, true).to.increase(obj, prop).by(delta);
      };
      assert2.doesNotIncrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotIncrease, true).to.not.increase(obj, prop);
      };
      assert2.increasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
      };
      assert2.decreases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.decreases, true).to.decrease(obj, prop);
      };
      assert2.decreasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesBy, true).to.decrease(obj, prop).by(delta);
      };
      assert2.doesNotDecrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecrease, true).to.not.decrease(obj, prop);
      };
      assert2.doesNotDecreaseBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
      };
      assert2.decreasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
      };
      assert2.ifError = function(val) {
        if (val) {
          throw val;
        }
      };
      assert2.isExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isExtensible, true).to.be.extensible;
      };
      assert2.isNotExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
      };
      assert2.isSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isSealed, true).to.be.sealed;
      };
      assert2.isNotSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
      };
      assert2.isFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isFrozen, true).to.be.frozen;
      };
      assert2.isNotFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
      };
      assert2.isEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isEmpty, true).to.be.empty;
      };
      assert2.isNotEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
      };
      (function alias(name, as) {
        assert2[as] = assert2[name];
        return alias;
      })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
    };
  }
});

// node_modules/chai/lib/chai.js
var require_chai = __commonJS({
  "node_modules/chai/lib/chai.js"(exports) {
    var used = [];
    exports.version = "4.3.8";
    exports.AssertionError = require_assertion_error();
    var util2 = require_utils();
    exports.use = function(fn2) {
      if (!~used.indexOf(fn2)) {
        fn2(exports, util2);
        used.push(fn2);
      }
      return exports;
    };
    exports.util = util2;
    var config2 = require_config();
    exports.config = config2;
    var assertion = require_assertion();
    exports.use(assertion);
    var core2 = require_assertions();
    exports.use(core2);
    var expect2 = require_expect();
    exports.use(expect2);
    var should2 = require_should();
    exports.use(should2);
    var assert2 = require_assert();
    exports.use(assert2);
  }
});

// node_modules/chai/index.js
var require_chai2 = __commonJS({
  "node_modules/chai/index.js"(exports, module2) {
    module2.exports = require_chai();
  }
});

// node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs
function encode(decoded) {
  const state = new Int32Array(5);
  const bufLength = 1024 * 16;
  const subLength = bufLength - 36;
  const buf = new Uint8Array(bufLength);
  const sub = buf.subarray(0, subLength);
  let pos = 0;
  let out = "";
  for (let i2 = 0; i2 < decoded.length; i2++) {
    const line = decoded[i2];
    if (i2 > 0) {
      if (pos === bufLength) {
        out += td.decode(buf);
        pos = 0;
      }
      buf[pos++] = semicolon;
    }
    if (line.length === 0)
      continue;
    state[0] = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (pos > subLength) {
        out += td.decode(sub);
        buf.copyWithin(0, subLength, pos);
        pos -= subLength;
      }
      if (j > 0)
        buf[pos++] = comma;
      pos = encodeInteger(buf, pos, state, segment, 0);
      if (segment.length === 1)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 1);
      pos = encodeInteger(buf, pos, state, segment, 2);
      pos = encodeInteger(buf, pos, state, segment, 3);
      if (segment.length === 4)
        continue;
      pos = encodeInteger(buf, pos, state, segment, 4);
    }
  }
  return out + td.decode(buf.subarray(0, pos));
}
function encodeInteger(buf, pos, state, segment, j) {
  const next = segment[j];
  let num = next - state[j];
  state[j] = next;
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    let clamped = num & 31;
    num >>>= 5;
    if (num > 0)
      clamped |= 32;
    buf[pos++] = intToChar[clamped];
  } while (num > 0);
  return pos;
}
var comma, semicolon, chars, intToChar, charToInt, td;
var init_sourcemap_codec = __esm({
  "node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs"() {
    comma = ",".charCodeAt(0);
    semicolon = ";".charCodeAt(0);
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    intToChar = new Uint8Array(64);
    charToInt = new Uint8Array(128);
    for (let i2 = 0; i2 < chars.length; i2++) {
      const c = chars.charCodeAt(i2);
      intToChar[i2] = c;
      charToInt[c] = i2;
    }
    td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
      decode(buf) {
        const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
        return out.toString();
      }
    } : {
      decode(buf) {
        let out = "";
        for (let i2 = 0; i2 < buf.length; i2++) {
          out += String.fromCharCode(buf[i2]);
        }
        return out;
      }
    };
  }
});

// node_modules/magic-string/dist/magic-string.es.mjs
var magic_string_es_exports = {};
__export(magic_string_es_exports, {
  Bundle: () => Bundle,
  SourceMap: () => SourceMap,
  default: () => MagicString
});
function getBtoa() {
  if (typeof window !== "undefined" && typeof window.btoa === "function") {
    return (str) => window.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i2 = fromParts.length;
    while (i2--)
      fromParts[i2] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
function isObject2(thing) {
  return toString2.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i2 = 0, pos = 0; i2 < originalLines.length; i2++) {
    lineOffsets.push(pos);
    pos += originalLines[i2].length + 1;
  }
  return function locate(index2) {
    let i2 = 0;
    let j = lineOffsets.length;
    while (i2 < j) {
      const m2 = i2 + j >> 1;
      if (index2 < lineOffsets[m2]) {
        j = m2;
      } else {
        i2 = m2 + 1;
      }
    }
    const line = i2 - 1;
    const column = index2 - lineOffsets[line];
    return { line, column };
  };
}
var BitSet, Chunk, btoa, SourceMap, toString2, wordRegex, Mappings, n, warned, MagicString, hasOwnProp, Bundle;
var init_magic_string_es = __esm({
  "node_modules/magic-string/dist/magic-string.es.mjs"() {
    init_sourcemap_codec();
    BitSet = class _BitSet {
      constructor(arg) {
        this.bits = arg instanceof _BitSet ? arg.bits.slice() : [];
      }
      add(n2) {
        this.bits[n2 >> 5] |= 1 << (n2 & 31);
      }
      has(n2) {
        return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
      }
    };
    Chunk = class _Chunk {
      constructor(start, end, content) {
        this.start = start;
        this.end = end;
        this.original = content;
        this.intro = "";
        this.outro = "";
        this.content = content;
        this.storeName = false;
        this.edited = false;
        {
          this.previous = null;
          this.next = null;
        }
      }
      appendLeft(content) {
        this.outro += content;
      }
      appendRight(content) {
        this.intro = this.intro + content;
      }
      clone() {
        const chunk = new _Chunk(this.start, this.end, this.original);
        chunk.intro = this.intro;
        chunk.outro = this.outro;
        chunk.content = this.content;
        chunk.storeName = this.storeName;
        chunk.edited = this.edited;
        return chunk;
      }
      contains(index2) {
        return this.start < index2 && index2 < this.end;
      }
      eachNext(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.next;
        }
      }
      eachPrevious(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.previous;
        }
      }
      edit(content, storeName, contentOnly) {
        this.content = content;
        if (!contentOnly) {
          this.intro = "";
          this.outro = "";
        }
        this.storeName = storeName;
        this.edited = true;
        return this;
      }
      prependLeft(content) {
        this.outro = content + this.outro;
      }
      prependRight(content) {
        this.intro = content + this.intro;
      }
      split(index2) {
        const sliceIndex = index2 - this.start;
        const originalBefore = this.original.slice(0, sliceIndex);
        const originalAfter = this.original.slice(sliceIndex);
        this.original = originalBefore;
        const newChunk = new _Chunk(index2, this.end, originalAfter);
        newChunk.outro = this.outro;
        this.outro = "";
        this.end = index2;
        if (this.edited) {
          newChunk.edit("", false);
          this.content = "";
        } else {
          this.content = originalBefore;
        }
        newChunk.next = this.next;
        if (newChunk.next)
          newChunk.next.previous = newChunk;
        newChunk.previous = this;
        this.next = newChunk;
        return newChunk;
      }
      toString() {
        return this.intro + this.content + this.outro;
      }
      trimEnd(rx) {
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.start + trimmed.length).edit("", void 0, true);
            if (this.edited) {
              this.edit(trimmed, this.storeName, true);
            }
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.intro = this.intro.replace(rx, "");
          if (this.intro.length)
            return true;
        }
      }
      trimStart(rx) {
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            const newChunk = this.split(this.end - trimmed.length);
            if (this.edited) {
              newChunk.edit(trimmed, this.storeName, true);
            }
            this.edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.outro = this.outro.replace(rx, "");
          if (this.outro.length)
            return true;
        }
      }
    };
    btoa = /* @__PURE__ */ getBtoa();
    SourceMap = class {
      constructor(properties) {
        this.version = 3;
        this.file = properties.file;
        this.sources = properties.sources;
        this.sourcesContent = properties.sourcesContent;
        this.names = properties.names;
        this.mappings = encode(properties.mappings);
        if (typeof properties.x_google_ignoreList !== "undefined") {
          this.x_google_ignoreList = properties.x_google_ignoreList;
        }
      }
      toString() {
        return JSON.stringify(this);
      }
      toUrl() {
        return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
      }
    };
    toString2 = Object.prototype.toString;
    wordRegex = /\w/;
    Mappings = class {
      constructor(hires) {
        this.hires = hires;
        this.generatedCodeLine = 0;
        this.generatedCodeColumn = 0;
        this.raw = [];
        this.rawSegments = this.raw[this.generatedCodeLine] = [];
        this.pending = null;
      }
      addEdit(sourceIndex, content, loc, nameIndex) {
        if (content.length) {
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (nameIndex >= 0) {
            segment.push(nameIndex);
          }
          this.rawSegments.push(segment);
        } else if (this.pending) {
          this.rawSegments.push(this.pending);
        }
        this.advance(content);
        this.pending = null;
      }
      addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
        let originalCharIndex = chunk.start;
        let first = true;
        let charInHiresBoundary = false;
        while (originalCharIndex < chunk.end) {
          if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
            const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
            if (this.hires === "boundary") {
              if (wordRegex.test(original[originalCharIndex])) {
                if (!charInHiresBoundary) {
                  this.rawSegments.push(segment);
                  charInHiresBoundary = true;
                }
              } else {
                this.rawSegments.push(segment);
                charInHiresBoundary = false;
              }
            } else {
              this.rawSegments.push(segment);
            }
          }
          if (original[originalCharIndex] === "\n") {
            loc.line += 1;
            loc.column = 0;
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            first = true;
          } else {
            loc.column += 1;
            this.generatedCodeColumn += 1;
            first = false;
          }
          originalCharIndex += 1;
        }
        this.pending = null;
      }
      advance(str) {
        if (!str)
          return;
        const lines = str.split("\n");
        if (lines.length > 1) {
          for (let i2 = 0; i2 < lines.length - 1; i2++) {
            this.generatedCodeLine++;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
          }
          this.generatedCodeColumn = 0;
        }
        this.generatedCodeColumn += lines[lines.length - 1].length;
      }
    };
    n = "\n";
    warned = {
      insertLeft: false,
      insertRight: false,
      storeName: false
    };
    MagicString = class _MagicString {
      constructor(string3, options = {}) {
        const chunk = new Chunk(0, string3.length, string3);
        Object.defineProperties(this, {
          original: { writable: true, value: string3 },
          outro: { writable: true, value: "" },
          intro: { writable: true, value: "" },
          firstChunk: { writable: true, value: chunk },
          lastChunk: { writable: true, value: chunk },
          lastSearchedChunk: { writable: true, value: chunk },
          byStart: { writable: true, value: {} },
          byEnd: { writable: true, value: {} },
          filename: { writable: true, value: options.filename },
          indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
          sourcemapLocations: { writable: true, value: new BitSet() },
          storedNames: { writable: true, value: {} },
          indentStr: { writable: true, value: void 0 },
          ignoreList: { writable: true, value: options.ignoreList }
        });
        this.byStart[0] = chunk;
        this.byEnd[string3.length] = chunk;
      }
      addSourcemapLocation(char) {
        this.sourcemapLocations.add(char);
      }
      append(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.outro += content;
        return this;
      }
      appendLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.appendLeft(content);
        } else {
          this.intro += content;
        }
        return this;
      }
      appendRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.appendRight(content);
        } else {
          this.outro += content;
        }
        return this;
      }
      clone() {
        const cloned = new _MagicString(this.original, { filename: this.filename });
        let originalChunk = this.firstChunk;
        let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
        while (originalChunk) {
          cloned.byStart[clonedChunk.start] = clonedChunk;
          cloned.byEnd[clonedChunk.end] = clonedChunk;
          const nextOriginalChunk = originalChunk.next;
          const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
          if (nextClonedChunk) {
            clonedChunk.next = nextClonedChunk;
            nextClonedChunk.previous = clonedChunk;
            clonedChunk = nextClonedChunk;
          }
          originalChunk = nextOriginalChunk;
        }
        cloned.lastChunk = clonedChunk;
        if (this.indentExclusionRanges) {
          cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
        }
        cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
        cloned.intro = this.intro;
        cloned.outro = this.outro;
        return cloned;
      }
      generateDecodedMap(options) {
        options = options || {};
        const sourceIndex = 0;
        const names = Object.keys(this.storedNames);
        const mappings = new Mappings(options.hires);
        const locate = getLocator(this.original);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.firstChunk.eachNext((chunk) => {
          const loc = locate(chunk.start);
          if (chunk.intro.length)
            mappings.advance(chunk.intro);
          if (chunk.edited) {
            mappings.addEdit(
              sourceIndex,
              chunk.content,
              loc,
              chunk.storeName ? names.indexOf(chunk.original) : -1
            );
          } else {
            mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
          }
          if (chunk.outro.length)
            mappings.advance(chunk.outro);
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: [
            options.source ? getRelativePath(options.file || "", options.source) : options.file || ""
          ],
          sourcesContent: options.includeContent ? [this.original] : void 0,
          names,
          mappings: mappings.raw,
          x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      _ensureindentStr() {
        if (this.indentStr === void 0) {
          this.indentStr = guessIndent(this.original);
        }
      }
      _getRawIndentString() {
        this._ensureindentStr();
        return this.indentStr;
      }
      getIndentString() {
        this._ensureindentStr();
        return this.indentStr === null ? "	" : this.indentStr;
      }
      indent(indentStr, options) {
        const pattern = /^[^\r\n]/gm;
        if (isObject2(indentStr)) {
          options = indentStr;
          indentStr = void 0;
        }
        if (indentStr === void 0) {
          this._ensureindentStr();
          indentStr = this.indentStr || "	";
        }
        if (indentStr === "")
          return this;
        options = options || {};
        const isExcluded = {};
        if (options.exclude) {
          const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
          exclusions.forEach((exclusion) => {
            for (let i2 = exclusion[0]; i2 < exclusion[1]; i2 += 1) {
              isExcluded[i2] = true;
            }
          });
        }
        let shouldIndentNextCharacter = options.indentStart !== false;
        const replacer = (match) => {
          if (shouldIndentNextCharacter)
            return `${indentStr}${match}`;
          shouldIndentNextCharacter = true;
          return match;
        };
        this.intro = this.intro.replace(pattern, replacer);
        let charIndex = 0;
        let chunk = this.firstChunk;
        while (chunk) {
          const end = chunk.end;
          if (chunk.edited) {
            if (!isExcluded[charIndex]) {
              chunk.content = chunk.content.replace(pattern, replacer);
              if (chunk.content.length) {
                shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
              }
            }
          } else {
            charIndex = chunk.start;
            while (charIndex < end) {
              if (!isExcluded[charIndex]) {
                const char = this.original[charIndex];
                if (char === "\n") {
                  shouldIndentNextCharacter = true;
                } else if (char !== "\r" && shouldIndentNextCharacter) {
                  shouldIndentNextCharacter = false;
                  if (charIndex === chunk.start) {
                    chunk.prependRight(indentStr);
                  } else {
                    this._splitChunk(chunk, charIndex);
                    chunk = chunk.next;
                    chunk.prependRight(indentStr);
                  }
                }
              }
              charIndex += 1;
            }
          }
          charIndex = chunk.end;
          chunk = chunk.next;
        }
        this.outro = this.outro.replace(pattern, replacer);
        return this;
      }
      insert() {
        throw new Error(
          "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
        );
      }
      insertLeft(index2, content) {
        if (!warned.insertLeft) {
          console.warn(
            "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
          );
          warned.insertLeft = true;
        }
        return this.appendLeft(index2, content);
      }
      insertRight(index2, content) {
        if (!warned.insertRight) {
          console.warn(
            "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
          );
          warned.insertRight = true;
        }
        return this.prependRight(index2, content);
      }
      move(start, end, index2) {
        if (index2 >= start && index2 <= end)
          throw new Error("Cannot move a selection inside itself");
        this._split(start);
        this._split(end);
        this._split(index2);
        const first = this.byStart[start];
        const last = this.byEnd[end];
        const oldLeft = first.previous;
        const oldRight = last.next;
        const newRight = this.byStart[index2];
        if (!newRight && last === this.lastChunk)
          return this;
        const newLeft = newRight ? newRight.previous : this.lastChunk;
        if (oldLeft)
          oldLeft.next = oldRight;
        if (oldRight)
          oldRight.previous = oldLeft;
        if (newLeft)
          newLeft.next = first;
        if (newRight)
          newRight.previous = last;
        if (!first.previous)
          this.firstChunk = last.next;
        if (!last.next) {
          this.lastChunk = first.previous;
          this.lastChunk.next = null;
        }
        first.previous = newLeft;
        last.next = newRight || null;
        if (!newLeft)
          this.firstChunk = first;
        if (!newRight)
          this.lastChunk = last;
        return this;
      }
      overwrite(start, end, content, options) {
        options = options || {};
        return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
      }
      update(start, end, content, options) {
        if (typeof content !== "string")
          throw new TypeError("replacement content must be a string");
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (end > this.original.length)
          throw new Error("end is out of bounds");
        if (start === end)
          throw new Error(
            "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
          );
        this._split(start);
        this._split(end);
        if (options === true) {
          if (!warned.storeName) {
            console.warn(
              "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
            );
            warned.storeName = true;
          }
          options = { storeName: true };
        }
        const storeName = options !== void 0 ? options.storeName : false;
        const overwrite = options !== void 0 ? options.overwrite : false;
        if (storeName) {
          const original = this.original.slice(start, end);
          Object.defineProperty(this.storedNames, original, {
            writable: true,
            value: true,
            enumerable: true
          });
        }
        const first = this.byStart[start];
        const last = this.byEnd[end];
        if (first) {
          let chunk = first;
          while (chunk !== last) {
            if (chunk.next !== this.byStart[chunk.end]) {
              throw new Error("Cannot overwrite across a split point");
            }
            chunk = chunk.next;
            chunk.edit("", false);
          }
          first.edit(content, storeName, !overwrite);
        } else {
          const newChunk = new Chunk(start, end, "").edit(content, storeName);
          last.next = newChunk;
          newChunk.previous = last;
        }
        return this;
      }
      prepend(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.intro = content + this.intro;
        return this;
      }
      prependLeft(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byEnd[index2];
        if (chunk) {
          chunk.prependLeft(content);
        } else {
          this.intro = content + this.intro;
        }
        return this;
      }
      prependRight(index2, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index2);
        const chunk = this.byStart[index2];
        if (chunk) {
          chunk.prependRight(content);
        } else {
          this.outro = content + this.outro;
        }
        return this;
      }
      remove(start, end) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (start === end)
          return this;
        if (start < 0 || end > this.original.length)
          throw new Error("Character is out of bounds");
        if (start > end)
          throw new Error("end must be greater than start");
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while (chunk) {
          chunk.intro = "";
          chunk.outro = "";
          chunk.edit("");
          chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
      }
      lastChar() {
        if (this.outro.length)
          return this.outro[this.outro.length - 1];
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length)
            return chunk.outro[chunk.outro.length - 1];
          if (chunk.content.length)
            return chunk.content[chunk.content.length - 1];
          if (chunk.intro.length)
            return chunk.intro[chunk.intro.length - 1];
        } while (chunk = chunk.previous);
        if (this.intro.length)
          return this.intro[this.intro.length - 1];
        return "";
      }
      lastLine() {
        let lineIndex = this.outro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.outro.substr(lineIndex + 1);
        let lineStr = this.outro;
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length > 0) {
            lineIndex = chunk.outro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.outro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.outro + lineStr;
          }
          if (chunk.content.length > 0) {
            lineIndex = chunk.content.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.content.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.content + lineStr;
          }
          if (chunk.intro.length > 0) {
            lineIndex = chunk.intro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.intro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.intro + lineStr;
          }
        } while (chunk = chunk.previous);
        lineIndex = this.intro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.intro.substr(lineIndex + 1) + lineStr;
        return this.intro + lineStr;
      }
      slice(start = 0, end = this.original.length) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        let result = "";
        let chunk = this.firstChunk;
        while (chunk && (chunk.start > start || chunk.end <= start)) {
          if (chunk.start < end && chunk.end >= end) {
            return result;
          }
          chunk = chunk.next;
        }
        if (chunk && chunk.edited && chunk.start !== start)
          throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
        const startChunk = chunk;
        while (chunk) {
          if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
            result += chunk.intro;
          }
          const containsEnd = chunk.start < end && chunk.end >= end;
          if (containsEnd && chunk.edited && chunk.end !== end)
            throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
          const sliceStart = startChunk === chunk ? start - chunk.start : 0;
          const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
          result += chunk.content.slice(sliceStart, sliceEnd);
          if (chunk.outro && (!containsEnd || chunk.end === end)) {
            result += chunk.outro;
          }
          if (containsEnd) {
            break;
          }
          chunk = chunk.next;
        }
        return result;
      }
      // TODO deprecate this? not really very useful
      snip(start, end) {
        const clone2 = this.clone();
        clone2.remove(0, start);
        clone2.remove(end, clone2.original.length);
        return clone2;
      }
      _split(index2) {
        if (this.byStart[index2] || this.byEnd[index2])
          return;
        let chunk = this.lastSearchedChunk;
        const searchForward = index2 > chunk.end;
        while (chunk) {
          if (chunk.contains(index2))
            return this._splitChunk(chunk, index2);
          chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
        }
      }
      _splitChunk(chunk, index2) {
        if (chunk.edited && chunk.content.length) {
          const loc = getLocator(this.original)(index2);
          throw new Error(
            `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
          );
        }
        const newChunk = chunk.split(index2);
        this.byEnd[index2] = chunk;
        this.byStart[index2] = newChunk;
        this.byEnd[newChunk.end] = newChunk;
        if (chunk === this.lastChunk)
          this.lastChunk = newChunk;
        this.lastSearchedChunk = chunk;
        return true;
      }
      toString() {
        let str = this.intro;
        let chunk = this.firstChunk;
        while (chunk) {
          str += chunk.toString();
          chunk = chunk.next;
        }
        return str + this.outro;
      }
      isEmpty() {
        let chunk = this.firstChunk;
        do {
          if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
            return false;
        } while (chunk = chunk.next);
        return true;
      }
      length() {
        let chunk = this.firstChunk;
        let length = 0;
        do {
          length += chunk.intro.length + chunk.content.length + chunk.outro.length;
        } while (chunk = chunk.next);
        return length;
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimEndAborted(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        let chunk = this.lastChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimEnd(rx);
          if (chunk.end !== end) {
            if (this.lastChunk === chunk) {
              this.lastChunk = chunk.next;
            }
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.previous;
        } while (chunk);
        return false;
      }
      trimEnd(charType) {
        this.trimEndAborted(charType);
        return this;
      }
      trimStartAborted(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        let chunk = this.firstChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimStart(rx);
          if (chunk.end !== end) {
            if (chunk === this.lastChunk)
              this.lastChunk = chunk.next;
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.next;
        } while (chunk);
        return false;
      }
      trimStart(charType) {
        this.trimStartAborted(charType);
        return this;
      }
      hasChanged() {
        return this.original !== this.toString();
      }
      _replaceRegexp(searchValue, replacement) {
        function getReplacement(match, str) {
          if (typeof replacement === "string") {
            return replacement.replace(/\$(\$|&|\d+)/g, (_, i2) => {
              if (i2 === "$")
                return "$";
              if (i2 === "&")
                return match[0];
              const num = +i2;
              if (num < match.length)
                return match[+i2];
              return `$${i2}`;
            });
          } else {
            return replacement(...match, match.index, str, match.groups);
          }
        }
        function matchAll(re, str) {
          let match;
          const matches = [];
          while (match = re.exec(str)) {
            matches.push(match);
          }
          return matches;
        }
        if (searchValue.global) {
          const matches = matchAll(searchValue, this.original);
          matches.forEach((match) => {
            if (match.index != null)
              this.overwrite(
                match.index,
                match.index + match[0].length,
                getReplacement(match, this.original)
              );
          });
        } else {
          const match = this.original.match(searchValue);
          if (match && match.index != null)
            this.overwrite(
              match.index,
              match.index + match[0].length,
              getReplacement(match, this.original)
            );
        }
        return this;
      }
      _replaceString(string3, replacement) {
        const { original } = this;
        const index2 = original.indexOf(string3);
        if (index2 !== -1) {
          this.overwrite(index2, index2 + string3.length, replacement);
        }
        return this;
      }
      replace(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceString(searchValue, replacement);
        }
        return this._replaceRegexp(searchValue, replacement);
      }
      _replaceAllString(string3, replacement) {
        const { original } = this;
        const stringLength = string3.length;
        for (let index2 = original.indexOf(string3); index2 !== -1; index2 = original.indexOf(string3, index2 + stringLength)) {
          this.overwrite(index2, index2 + stringLength, replacement);
        }
        return this;
      }
      replaceAll(searchValue, replacement) {
        if (typeof searchValue === "string") {
          return this._replaceAllString(searchValue, replacement);
        }
        if (!searchValue.global) {
          throw new TypeError(
            "MagicString.prototype.replaceAll called with a non-global RegExp argument"
          );
        }
        return this._replaceRegexp(searchValue, replacement);
      }
    };
    hasOwnProp = Object.prototype.hasOwnProperty;
    Bundle = class _Bundle {
      constructor(options = {}) {
        this.intro = options.intro || "";
        this.separator = options.separator !== void 0 ? options.separator : "\n";
        this.sources = [];
        this.uniqueSources = [];
        this.uniqueSourceIndexByFilename = {};
      }
      addSource(source) {
        if (source instanceof MagicString) {
          return this.addSource({
            content: source,
            filename: source.filename,
            separator: this.separator
          });
        }
        if (!isObject2(source) || !source.content) {
          throw new Error(
            "bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`"
          );
        }
        ["filename", "ignoreList", "indentExclusionRanges", "separator"].forEach((option) => {
          if (!hasOwnProp.call(source, option))
            source[option] = source.content[option];
        });
        if (source.separator === void 0) {
          source.separator = this.separator;
        }
        if (source.filename) {
          if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
            this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
            this.uniqueSources.push({ filename: source.filename, content: source.content.original });
          } else {
            const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
            if (source.content.original !== uniqueSource.content) {
              throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
            }
          }
        }
        this.sources.push(source);
        return this;
      }
      append(str, options) {
        this.addSource({
          content: new MagicString(str),
          separator: options && options.separator || ""
        });
        return this;
      }
      clone() {
        const bundle = new _Bundle({
          intro: this.intro,
          separator: this.separator
        });
        this.sources.forEach((source) => {
          bundle.addSource({
            filename: source.filename,
            content: source.content.clone(),
            separator: source.separator
          });
        });
        return bundle;
      }
      generateDecodedMap(options = {}) {
        const names = [];
        let x_google_ignoreList = void 0;
        this.sources.forEach((source) => {
          Object.keys(source.content.storedNames).forEach((name) => {
            if (!~names.indexOf(name))
              names.push(name);
          });
        });
        const mappings = new Mappings(options.hires);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.sources.forEach((source, i2) => {
          if (i2 > 0) {
            mappings.advance(this.separator);
          }
          const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
          const magicString = source.content;
          const locate = getLocator(magicString.original);
          if (magicString.intro) {
            mappings.advance(magicString.intro);
          }
          magicString.firstChunk.eachNext((chunk) => {
            const loc = locate(chunk.start);
            if (chunk.intro.length)
              mappings.advance(chunk.intro);
            if (source.filename) {
              if (chunk.edited) {
                mappings.addEdit(
                  sourceIndex,
                  chunk.content,
                  loc,
                  chunk.storeName ? names.indexOf(chunk.original) : -1
                );
              } else {
                mappings.addUneditedChunk(
                  sourceIndex,
                  chunk,
                  magicString.original,
                  loc,
                  magicString.sourcemapLocations
                );
              }
            } else {
              mappings.advance(chunk.content);
            }
            if (chunk.outro.length)
              mappings.advance(chunk.outro);
          });
          if (magicString.outro) {
            mappings.advance(magicString.outro);
          }
          if (source.ignoreList && sourceIndex !== -1) {
            if (x_google_ignoreList === void 0) {
              x_google_ignoreList = [];
            }
            x_google_ignoreList.push(sourceIndex);
          }
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
          sources: this.uniqueSources.map((source) => {
            return options.file ? getRelativePath(options.file, source.filename) : source.filename;
          }),
          sourcesContent: this.uniqueSources.map((source) => {
            return options.includeContent ? source.content : null;
          }),
          names,
          mappings: mappings.raw,
          x_google_ignoreList
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      getIndentString() {
        const indentStringCounts = {};
        this.sources.forEach((source) => {
          const indentStr = source.content._getRawIndentString();
          if (indentStr === null)
            return;
          if (!indentStringCounts[indentStr])
            indentStringCounts[indentStr] = 0;
          indentStringCounts[indentStr] += 1;
        });
        return Object.keys(indentStringCounts).sort((a, b2) => {
          return indentStringCounts[a] - indentStringCounts[b2];
        })[0] || "	";
      }
      indent(indentStr) {
        if (!arguments.length) {
          indentStr = this.getIndentString();
        }
        if (indentStr === "")
          return this;
        let trailingNewline = !this.intro || this.intro.slice(-1) === "\n";
        this.sources.forEach((source, i2) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const indentStart = trailingNewline || i2 > 0 && /\r?\n$/.test(separator);
          source.content.indent(indentStr, {
            exclude: source.indentExclusionRanges,
            indentStart
            //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
          });
          trailingNewline = source.content.lastChar() === "\n";
        });
        if (this.intro) {
          this.intro = indentStr + this.intro.replace(/^[^\n]/gm, (match, index2) => {
            return index2 > 0 ? indentStr + match : match;
          });
        }
        return this;
      }
      prepend(str) {
        this.intro = str + this.intro;
        return this;
      }
      toString() {
        const body = this.sources.map((source, i2) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const str = (i2 > 0 ? separator : "") + source.content.toString();
          return str;
        }).join("");
        return this.intro + body;
      }
      isEmpty() {
        if (this.intro.length && this.intro.trim())
          return false;
        if (this.sources.some((source) => !source.content.isEmpty()))
          return false;
        return true;
      }
      length() {
        return this.sources.reduce(
          (length, source) => length + source.content.length(),
          this.intro.length
        );
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimStart(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (!this.intro) {
          let source;
          let i2 = 0;
          do {
            source = this.sources[i2++];
            if (!source) {
              break;
            }
          } while (!source.content.trimStartAborted(charType));
        }
        return this;
      }
      trimEnd(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        let source;
        let i2 = this.sources.length - 1;
        do {
          source = this.sources[i2--];
          if (!source) {
            this.intro = this.intro.replace(rx, "");
            break;
          }
        } while (!source.content.trimEndAborted(charType));
        return this;
      }
    };
  }
});

// node_modules/logform/format.js
var require_format = __commonJS({
  "node_modules/logform/format.js"(exports, module2) {
    "use strict";
    var InvalidFormatError = class _InvalidFormatError extends Error {
      constructor(formatFn) {
        super(`Format functions must be synchronous taking a two arguments: (info, opts)
Found: ${formatFn.toString().split("\n")[0]}
`);
        Error.captureStackTrace(this, _InvalidFormatError);
      }
    };
    module2.exports = (formatFn) => {
      if (formatFn.length > 2) {
        throw new InvalidFormatError(formatFn);
      }
      function Format(options = {}) {
        this.options = options;
      }
      Format.prototype.transform = formatFn;
      function createFormatWrap(opts) {
        return new Format(opts);
      }
      createFormatWrap.Format = Format;
      return createFormatWrap;
    };
  }
});

// node_modules/@colors/colors/lib/styles.js
var require_styles = __commonJS({
  "node_modules/@colors/colors/lib/styles.js"(exports, module2) {
    var styles2 = {};
    module2["exports"] = styles2;
    var codes = {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29],
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      gray: [90, 39],
      grey: [90, 39],
      brightRed: [91, 39],
      brightGreen: [92, 39],
      brightYellow: [93, 39],
      brightBlue: [94, 39],
      brightMagenta: [95, 39],
      brightCyan: [96, 39],
      brightWhite: [97, 39],
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgBrightRed: [101, 49],
      bgBrightGreen: [102, 49],
      bgBrightYellow: [103, 49],
      bgBrightBlue: [104, 49],
      bgBrightMagenta: [105, 49],
      bgBrightCyan: [106, 49],
      bgBrightWhite: [107, 49],
      // legacy styles for colors pre v1.0.0
      blackBG: [40, 49],
      redBG: [41, 49],
      greenBG: [42, 49],
      yellowBG: [43, 49],
      blueBG: [44, 49],
      magentaBG: [45, 49],
      cyanBG: [46, 49],
      whiteBG: [47, 49]
    };
    Object.keys(codes).forEach(function(key) {
      var val = codes[key];
      var style = styles2[key] = [];
      style.open = "\x1B[" + val[0] + "m";
      style.close = "\x1B[" + val[1] + "m";
    });
  }
});

// node_modules/@colors/colors/lib/system/has-flag.js
var require_has_flag = __commonJS({
  "node_modules/@colors/colors/lib/system/has-flag.js"(exports, module2) {
    "use strict";
    module2.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^-{1,2}/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/@colors/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS({
  "node_modules/@colors/colors/lib/system/supports-colors.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor = void 0;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level2) {
      if (level2 === 0) {
        return false;
      }
      return {
        level: level2,
        hasBasic: true,
        has256: level2 >= 2,
        has16m: level2 >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      var min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        var osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
          return sign in env;
        }) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TERM_PROGRAM" in env) {
        var version2 = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version2 >= 3 ? 3 : 2;
          case "Hyper":
            return 3;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      var level2 = supportsColor(stream);
      return translateLevel(level2);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/@colors/colors/lib/custom/trap.js
var require_trap = __commonJS({
  "node_modules/@colors/colors/lib/custom/trap.js"(exports, module2) {
    module2["exports"] = function runTheTrap(text, options) {
      var result = "";
      text = text || "Run the trap, drop the bass";
      text = text.split("");
      var trap = {
        a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
        b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
        c: ["\xA9", "\u023B", "\u03FE"],
        d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
        e: [
          "\xCB",
          "\u0115",
          "\u018E",
          "\u0258",
          "\u03A3",
          "\u03BE",
          "\u04BC",
          "\u0A6C"
        ],
        f: ["\u04FA"],
        g: ["\u0262"],
        h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
        i: ["\u0F0F"],
        j: ["\u0134"],
        k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
        l: ["\u0139"],
        m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
        n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
        o: [
          "\xD8",
          "\xF5",
          "\xF8",
          "\u01FE",
          "\u0298",
          "\u047A",
          "\u05DD",
          "\u06DD",
          "\u0E4F"
        ],
        p: ["\u01F7", "\u048E"],
        q: ["\u09CD"],
        r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
        s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
        t: ["\u0141", "\u0166", "\u0373"],
        u: ["\u01B1", "\u054D"],
        v: ["\u05D8"],
        w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
        x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
        y: ["\xA5", "\u04B0", "\u04CB"],
        z: ["\u01B5", "\u0240"]
      };
      text.forEach(function(c) {
        c = c.toLowerCase();
        var chars4 = trap[c] || [" "];
        var rand = Math.floor(Math.random() * chars4.length);
        if (typeof trap[c] !== "undefined") {
          result += trap[c][rand];
        } else {
          result += c;
        }
      });
      return result;
    };
  }
});

// node_modules/@colors/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS({
  "node_modules/@colors/colors/lib/custom/zalgo.js"(exports, module2) {
    module2["exports"] = function zalgo(text, options) {
      text = text || "   he is here   ";
      var soul = {
        "up": [
          "\u030D",
          "\u030E",
          "\u0304",
          "\u0305",
          "\u033F",
          "\u0311",
          "\u0306",
          "\u0310",
          "\u0352",
          "\u0357",
          "\u0351",
          "\u0307",
          "\u0308",
          "\u030A",
          "\u0342",
          "\u0313",
          "\u0308",
          "\u034A",
          "\u034B",
          "\u034C",
          "\u0303",
          "\u0302",
          "\u030C",
          "\u0350",
          "\u0300",
          "\u0301",
          "\u030B",
          "\u030F",
          "\u0312",
          "\u0313",
          "\u0314",
          "\u033D",
          "\u0309",
          "\u0363",
          "\u0364",
          "\u0365",
          "\u0366",
          "\u0367",
          "\u0368",
          "\u0369",
          "\u036A",
          "\u036B",
          "\u036C",
          "\u036D",
          "\u036E",
          "\u036F",
          "\u033E",
          "\u035B",
          "\u0346",
          "\u031A"
        ],
        "down": [
          "\u0316",
          "\u0317",
          "\u0318",
          "\u0319",
          "\u031C",
          "\u031D",
          "\u031E",
          "\u031F",
          "\u0320",
          "\u0324",
          "\u0325",
          "\u0326",
          "\u0329",
          "\u032A",
          "\u032B",
          "\u032C",
          "\u032D",
          "\u032E",
          "\u032F",
          "\u0330",
          "\u0331",
          "\u0332",
          "\u0333",
          "\u0339",
          "\u033A",
          "\u033B",
          "\u033C",
          "\u0345",
          "\u0347",
          "\u0348",
          "\u0349",
          "\u034D",
          "\u034E",
          "\u0353",
          "\u0354",
          "\u0355",
          "\u0356",
          "\u0359",
          "\u035A",
          "\u0323"
        ],
        "mid": [
          "\u0315",
          "\u031B",
          "\u0300",
          "\u0301",
          "\u0358",
          "\u0321",
          "\u0322",
          "\u0327",
          "\u0328",
          "\u0334",
          "\u0335",
          "\u0336",
          "\u035C",
          "\u035D",
          "\u035E",
          "\u035F",
          "\u0360",
          "\u0362",
          "\u0338",
          "\u0337",
          "\u0361",
          " \u0489"
        ]
      };
      var all = [].concat(soul.up, soul.down, soul.mid);
      function randomNumber(range) {
        var r = Math.floor(Math.random() * range);
        return r;
      }
      function isChar(character) {
        var bool = false;
        all.filter(function(i2) {
          bool = i2 === character;
        });
        return bool;
      }
      function heComes(text2, options2) {
        var result = "";
        var counts;
        var l2;
        options2 = options2 || {};
        options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
        options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
        options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
        options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
        text2 = text2.split("");
        for (l2 in text2) {
          if (isChar(l2)) {
            continue;
          }
          result = result + text2[l2];
          counts = { "up": 0, "down": 0, "mid": 0 };
          switch (options2.size) {
            case "mini":
              counts.up = randomNumber(8);
              counts.mid = randomNumber(2);
              counts.down = randomNumber(8);
              break;
            case "maxi":
              counts.up = randomNumber(16) + 3;
              counts.mid = randomNumber(4) + 1;
              counts.down = randomNumber(64) + 3;
              break;
            default:
              counts.up = randomNumber(8) + 1;
              counts.mid = randomNumber(6) / 2;
              counts.down = randomNumber(8) + 1;
              break;
          }
          var arr = ["up", "mid", "down"];
          for (var d in arr) {
            var index2 = arr[d];
            for (var i2 = 0; i2 <= counts[index2]; i2++) {
              if (options2[index2]) {
                result = result + soul[index2][randomNumber(soul[index2].length)];
              }
            }
          }
        }
        return result;
      }
      return heComes(text, options);
    };
  }
});

// node_modules/@colors/colors/lib/maps/america.js
var require_america = __commonJS({
  "node_modules/@colors/colors/lib/maps/america.js"(exports, module2) {
    module2["exports"] = function(colors2) {
      return function(letter, i2, exploded) {
        if (letter === " ")
          return letter;
        switch (i2 % 3) {
          case 0:
            return colors2.red(letter);
          case 1:
            return colors2.white(letter);
          case 2:
            return colors2.blue(letter);
        }
      };
    };
  }
});

// node_modules/@colors/colors/lib/maps/zebra.js
var require_zebra = __commonJS({
  "node_modules/@colors/colors/lib/maps/zebra.js"(exports, module2) {
    module2["exports"] = function(colors2) {
      return function(letter, i2, exploded) {
        return i2 % 2 === 0 ? letter : colors2.inverse(letter);
      };
    };
  }
});

// node_modules/@colors/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS({
  "node_modules/@colors/colors/lib/maps/rainbow.js"(exports, module2) {
    module2["exports"] = function(colors2) {
      var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
      return function(letter, i2, exploded) {
        if (letter === " ") {
          return letter;
        } else {
          return colors2[rainbowColors[i2++ % rainbowColors.length]](letter);
        }
      };
    };
  }
});

// node_modules/@colors/colors/lib/maps/random.js
var require_random = __commonJS({
  "node_modules/@colors/colors/lib/maps/random.js"(exports, module2) {
    module2["exports"] = function(colors2) {
      var available = [
        "underline",
        "inverse",
        "grey",
        "yellow",
        "red",
        "green",
        "blue",
        "white",
        "cyan",
        "magenta",
        "brightYellow",
        "brightRed",
        "brightGreen",
        "brightBlue",
        "brightWhite",
        "brightCyan",
        "brightMagenta"
      ];
      return function(letter, i2, exploded) {
        return letter === " " ? letter : colors2[available[Math.round(Math.random() * (available.length - 2))]](letter);
      };
    };
  }
});

// node_modules/@colors/colors/lib/colors.js
var require_colors = __commonJS({
  "node_modules/@colors/colors/lib/colors.js"(exports, module2) {
    var colors2 = {};
    module2["exports"] = colors2;
    colors2.themes = {};
    var util2 = require("util");
    var ansiStyles = colors2.styles = require_styles();
    var defineProps = Object.defineProperties;
    var newLineRegex = new RegExp(/[\r\n]+/g);
    colors2.supportsColor = require_supports_colors().supportsColor;
    if (typeof colors2.enabled === "undefined") {
      colors2.enabled = colors2.supportsColor() !== false;
    }
    colors2.enable = function() {
      colors2.enabled = true;
    };
    colors2.disable = function() {
      colors2.enabled = false;
    };
    colors2.stripColors = colors2.strip = function(str) {
      return ("" + str).replace(/\x1B\[\d+m/g, "");
    };
    var stylize = colors2.stylize = function stylize2(str, style) {
      if (!colors2.enabled) {
        return str + "";
      }
      var styleMap = ansiStyles[style];
      if (!styleMap && style in colors2) {
        return colors2[style](str);
      }
      return styleMap.open + str + styleMap.close;
    };
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    var escapeStringRegexp = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
    function build(_styles) {
      var builder = function builder2() {
        return applyStyle.apply(builder2, arguments);
      };
      builder._styles = _styles;
      builder.__proto__ = proto;
      return builder;
    }
    var styles2 = function() {
      var ret = {};
      ansiStyles.grey = ansiStyles.gray;
      Object.keys(ansiStyles).forEach(function(key) {
        ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
        ret[key] = {
          get: function() {
            return build(this._styles.concat(key));
          }
        };
      });
      return ret;
    }();
    var proto = defineProps(function colors3() {
    }, styles2);
    function applyStyle() {
      var args = Array.prototype.slice.call(arguments);
      var str = args.map(function(arg) {
        if (arg != null && arg.constructor === String) {
          return arg;
        } else {
          return util2.inspect(arg);
        }
      }).join(" ");
      if (!colors2.enabled || !str) {
        return str;
      }
      var newLinesPresent = str.indexOf("\n") != -1;
      var nestedStyles = this._styles;
      var i2 = nestedStyles.length;
      while (i2--) {
        var code = ansiStyles[nestedStyles[i2]];
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        if (newLinesPresent) {
          str = str.replace(newLineRegex, function(match) {
            return code.close + match + code.open;
          });
        }
      }
      return str;
    }
    colors2.setTheme = function(theme) {
      if (typeof theme === "string") {
        console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller's) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + '/../themes/generic-logging.js'); The new syntax looks like colors.setTheme(require(__dirname + '/../themes/generic-logging.js'));");
        return;
      }
      for (var style in theme) {
        (function(style2) {
          colors2[style2] = function(str) {
            if (typeof theme[style2] === "object") {
              var out = str;
              for (var i2 in theme[style2]) {
                out = colors2[theme[style2][i2]](out);
              }
              return out;
            }
            return colors2[theme[style2]](str);
          };
        })(style);
      }
    };
    function init() {
      var ret = {};
      Object.keys(styles2).forEach(function(name) {
        ret[name] = {
          get: function() {
            return build([name]);
          }
        };
      });
      return ret;
    }
    var sequencer = function sequencer2(map3, str) {
      var exploded = str.split("");
      exploded = exploded.map(map3);
      return exploded.join("");
    };
    colors2.trap = require_trap();
    colors2.zalgo = require_zalgo();
    colors2.maps = {};
    colors2.maps.america = require_america()(colors2);
    colors2.maps.zebra = require_zebra()(colors2);
    colors2.maps.rainbow = require_rainbow()(colors2);
    colors2.maps.random = require_random()(colors2);
    for (map2 in colors2.maps) {
      (function(map3) {
        colors2[map3] = function(str) {
          return sequencer(colors2.maps[map3], str);
        };
      })(map2);
    }
    var map2;
    defineProps(colors2, init());
  }
});

// node_modules/@colors/colors/safe.js
var require_safe = __commonJS({
  "node_modules/@colors/colors/safe.js"(exports, module2) {
    var colors2 = require_colors();
    module2["exports"] = colors2;
  }
});

// node_modules/triple-beam/config/cli.js
var require_cli = __commonJS({
  "node_modules/triple-beam/config/cli.js"(exports) {
    "use strict";
    exports.levels = {
      error: 0,
      warn: 1,
      help: 2,
      data: 3,
      info: 4,
      debug: 5,
      prompt: 6,
      verbose: 7,
      input: 8,
      silly: 9
    };
    exports.colors = {
      error: "red",
      warn: "yellow",
      help: "cyan",
      data: "grey",
      info: "green",
      debug: "blue",
      prompt: "grey",
      verbose: "cyan",
      input: "grey",
      silly: "magenta"
    };
  }
});

// node_modules/triple-beam/config/npm.js
var require_npm = __commonJS({
  "node_modules/triple-beam/config/npm.js"(exports) {
    "use strict";
    exports.levels = {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      verbose: 4,
      debug: 5,
      silly: 6
    };
    exports.colors = {
      error: "red",
      warn: "yellow",
      info: "green",
      http: "green",
      verbose: "cyan",
      debug: "blue",
      silly: "magenta"
    };
  }
});

// node_modules/triple-beam/config/syslog.js
var require_syslog = __commonJS({
  "node_modules/triple-beam/config/syslog.js"(exports) {
    "use strict";
    exports.levels = {
      emerg: 0,
      alert: 1,
      crit: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    };
    exports.colors = {
      emerg: "red",
      alert: "yellow",
      crit: "red",
      error: "red",
      warning: "red",
      notice: "yellow",
      info: "green",
      debug: "blue"
    };
  }
});

// node_modules/triple-beam/config/index.js
var require_config2 = __commonJS({
  "node_modules/triple-beam/config/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "cli", {
      value: require_cli()
    });
    Object.defineProperty(exports, "npm", {
      value: require_npm()
    });
    Object.defineProperty(exports, "syslog", {
      value: require_syslog()
    });
  }
});

// node_modules/triple-beam/index.js
var require_triple_beam = __commonJS({
  "node_modules/triple-beam/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "LEVEL", {
      value: Symbol.for("level")
    });
    Object.defineProperty(exports, "MESSAGE", {
      value: Symbol.for("message")
    });
    Object.defineProperty(exports, "SPLAT", {
      value: Symbol.for("splat")
    });
    Object.defineProperty(exports, "configs", {
      value: require_config2()
    });
  }
});

// node_modules/logform/colorize.js
var require_colorize = __commonJS({
  "node_modules/logform/colorize.js"(exports, module2) {
    "use strict";
    var colors2 = require_safe();
    var { LEVEL, MESSAGE } = require_triple_beam();
    colors2.enabled = true;
    var hasSpace = /\s+/;
    var Colorizer = class _Colorizer {
      constructor(opts = {}) {
        if (opts.colors) {
          this.addColors(opts.colors);
        }
        this.options = opts;
      }
      /*
       * Adds the colors Object to the set of allColors
       * known by the Colorizer
       *
       * @param {Object} colors Set of color mappings to add.
       */
      static addColors(clrs) {
        const nextColors = Object.keys(clrs).reduce((acc, level2) => {
          acc[level2] = hasSpace.test(clrs[level2]) ? clrs[level2].split(hasSpace) : clrs[level2];
          return acc;
        }, {});
        _Colorizer.allColors = Object.assign({}, _Colorizer.allColors || {}, nextColors);
        return _Colorizer.allColors;
      }
      /*
       * Adds the colors Object to the set of allColors
       * known by the Colorizer
       *
       * @param {Object} colors Set of color mappings to add.
       */
      addColors(clrs) {
        return _Colorizer.addColors(clrs);
      }
      /*
       * function colorize (lookup, level, message)
       * Performs multi-step colorization using @colors/colors/safe
       */
      colorize(lookup, level2, message) {
        if (typeof message === "undefined") {
          message = level2;
        }
        if (!Array.isArray(_Colorizer.allColors[lookup])) {
          return colors2[_Colorizer.allColors[lookup]](message);
        }
        for (let i2 = 0, len = _Colorizer.allColors[lookup].length; i2 < len; i2++) {
          message = colors2[_Colorizer.allColors[lookup][i2]](message);
        }
        return message;
      }
      /*
       * function transform (info, opts)
       * Attempts to colorize the { level, message } of the given
       * `logform` info object.
       */
      transform(info, opts) {
        if (opts.all && typeof info[MESSAGE] === "string") {
          info[MESSAGE] = this.colorize(info[LEVEL], info.level, info[MESSAGE]);
        }
        if (opts.level || opts.all || !opts.message) {
          info.level = this.colorize(info[LEVEL], info.level);
        }
        if (opts.all || opts.message) {
          info.message = this.colorize(info[LEVEL], info.level, info.message);
        }
        return info;
      }
    };
    module2.exports = (opts) => new Colorizer(opts);
    module2.exports.Colorizer = module2.exports.Format = Colorizer;
  }
});

// node_modules/logform/levels.js
var require_levels = __commonJS({
  "node_modules/logform/levels.js"(exports, module2) {
    "use strict";
    var { Colorizer } = require_colorize();
    module2.exports = (config2) => {
      Colorizer.addColors(config2.colors || config2);
      return config2;
    };
  }
});

// node_modules/logform/align.js
var require_align = __commonJS({
  "node_modules/logform/align.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    module2.exports = format7((info) => {
      info.message = `	${info.message}`;
      return info;
    });
  }
});

// node_modules/logform/errors.js
var require_errors = __commonJS({
  "node_modules/logform/errors.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    var { LEVEL, MESSAGE } = require_triple_beam();
    module2.exports = format7((einfo, { stack, cause }) => {
      if (einfo instanceof Error) {
        const info = Object.assign({}, einfo, {
          level: einfo.level,
          [LEVEL]: einfo[LEVEL] || einfo.level,
          message: einfo.message,
          [MESSAGE]: einfo[MESSAGE] || einfo.message
        });
        if (stack)
          info.stack = einfo.stack;
        if (cause)
          info.cause = einfo.cause;
        return info;
      }
      if (!(einfo.message instanceof Error))
        return einfo;
      const err = einfo.message;
      Object.assign(einfo, err);
      einfo.message = err.message;
      einfo[MESSAGE] = err.message;
      if (stack)
        einfo.stack = err.stack;
      if (cause)
        einfo.cause = err.cause;
      return einfo;
    });
  }
});

// node_modules/logform/pad-levels.js
var require_pad_levels = __commonJS({
  "node_modules/logform/pad-levels.js"(exports, module2) {
    "use strict";
    var { configs, LEVEL, MESSAGE } = require_triple_beam();
    var Padder = class _Padder {
      constructor(opts = { levels: configs.npm.levels }) {
        this.paddings = _Padder.paddingForLevels(opts.levels, opts.filler);
        this.options = opts;
      }
      /**
       * Returns the maximum length of keys in the specified `levels` Object.
       * @param  {Object} levels Set of all levels to calculate longest level against.
       * @returns {Number} Maximum length of the longest level string.
       */
      static getLongestLevel(levels2) {
        const lvls = Object.keys(levels2).map((level2) => level2.length);
        return Math.max(...lvls);
      }
      /**
       * Returns the padding for the specified `level` assuming that the
       * maximum length of all levels it's associated with is `maxLength`.
       * @param  {String} level Level to calculate padding for.
       * @param  {String} filler Repeatable text to use for padding.
       * @param  {Number} maxLength Length of the longest level
       * @returns {String} Padding string for the `level`
       */
      static paddingForLevel(level2, filler, maxLength) {
        const targetLen = maxLength + 1 - level2.length;
        const rep = Math.floor(targetLen / filler.length);
        const padding = `${filler}${filler.repeat(rep)}`;
        return padding.slice(0, targetLen);
      }
      /**
       * Returns an object with the string paddings for the given `levels`
       * using the specified `filler`.
       * @param  {Object} levels Set of all levels to calculate padding for.
       * @param  {String} filler Repeatable text to use for padding.
       * @returns {Object} Mapping of level to desired padding.
       */
      static paddingForLevels(levels2, filler = " ") {
        const maxLength = _Padder.getLongestLevel(levels2);
        return Object.keys(levels2).reduce((acc, level2) => {
          acc[level2] = _Padder.paddingForLevel(level2, filler, maxLength);
          return acc;
        }, {});
      }
      /**
       * Prepends the padding onto the `message` based on the `LEVEL` of
       * the `info`. This is based on the behavior of `winston@2` which also
       * prepended the level onto the message.
       *
       * See: https://github.com/winstonjs/winston/blob/2.x/lib/winston/logger.js#L198-L201
       *
       * @param  {Info} info Logform info object
       * @param  {Object} opts Options passed along to this instance.
       * @returns {Info} Modified logform info object.
       */
      transform(info, opts) {
        info.message = `${this.paddings[info[LEVEL]]}${info.message}`;
        if (info[MESSAGE]) {
          info[MESSAGE] = `${this.paddings[info[LEVEL]]}${info[MESSAGE]}`;
        }
        return info;
      }
    };
    module2.exports = (opts) => new Padder(opts);
    module2.exports.Padder = module2.exports.Format = Padder;
  }
});

// node_modules/logform/cli.js
var require_cli2 = __commonJS({
  "node_modules/logform/cli.js"(exports, module2) {
    "use strict";
    var { Colorizer } = require_colorize();
    var { Padder } = require_pad_levels();
    var { configs, MESSAGE } = require_triple_beam();
    var CliFormat = class {
      constructor(opts = {}) {
        if (!opts.levels) {
          opts.levels = configs.cli.levels;
        }
        this.colorizer = new Colorizer(opts);
        this.padder = new Padder(opts);
        this.options = opts;
      }
      /*
       * function transform (info, opts)
       * Attempts to both:
       * 1. Pad the { level }
       * 2. Colorize the { level, message }
       * of the given `logform` info object depending on the `opts`.
       */
      transform(info, opts) {
        this.colorizer.transform(
          this.padder.transform(info, opts),
          opts
        );
        info[MESSAGE] = `${info.level}:${info.message}`;
        return info;
      }
    };
    module2.exports = (opts) => new CliFormat(opts);
    module2.exports.Format = CliFormat;
  }
});

// node_modules/logform/combine.js
var require_combine = __commonJS({
  "node_modules/logform/combine.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    function cascade(formats) {
      if (!formats.every(isValidFormat)) {
        return;
      }
      return (info) => {
        let obj = info;
        for (let i2 = 0; i2 < formats.length; i2++) {
          obj = formats[i2].transform(obj, formats[i2].options);
          if (!obj) {
            return false;
          }
        }
        return obj;
      };
    }
    function isValidFormat(fmt) {
      if (typeof fmt.transform !== "function") {
        throw new Error([
          "No transform function found on format. Did you create a format instance?",
          "const myFormat = format(formatFn);",
          "const instance = myFormat();"
        ].join("\n"));
      }
      return true;
    }
    module2.exports = (...formats) => {
      const combinedFormat = format7(cascade(formats));
      const instance = combinedFormat();
      instance.Format = combinedFormat.Format;
      return instance;
    };
    module2.exports.cascade = cascade;
  }
});

// node_modules/safe-stable-stringify/index.js
var require_safe_stable_stringify = __commonJS({
  "node_modules/safe-stable-stringify/index.js"(exports, module2) {
    "use strict";
    var { hasOwnProperty } = Object.prototype;
    var stringify2 = configure();
    stringify2.configure = configure;
    stringify2.stringify = stringify2;
    stringify2.default = stringify2;
    exports.stringify = stringify2;
    exports.configure = configure;
    module2.exports = stringify2;
    var strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
    function strEscape(str) {
      if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
        return `"${str}"`;
      }
      return JSON.stringify(str);
    }
    function insertSort(array2) {
      if (array2.length > 200) {
        return array2.sort();
      }
      for (let i2 = 1; i2 < array2.length; i2++) {
        const currentValue = array2[i2];
        let position = i2;
        while (position !== 0 && array2[position - 1] > currentValue) {
          array2[position] = array2[position - 1];
          position--;
        }
        array2[position] = currentValue;
      }
      return array2;
    }
    var typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(
        Object.getPrototypeOf(
          new Int8Array()
        )
      ),
      Symbol.toStringTag
    ).get;
    function isTypedArrayWithEntries(value) {
      return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0 && value.length !== 0;
    }
    function stringifyTypedArray(array2, separator, maximumBreadth) {
      if (array2.length < maximumBreadth) {
        maximumBreadth = array2.length;
      }
      const whitespace = separator === "," ? "" : " ";
      let res = `"0":${whitespace}${array2[0]}`;
      for (let i2 = 1; i2 < maximumBreadth; i2++) {
        res += `${separator}"${i2}":${whitespace}${array2[i2]}`;
      }
      return res;
    }
    function getCircularValueOption(options) {
      if (hasOwnProperty.call(options, "circularValue")) {
        const circularValue = options.circularValue;
        if (typeof circularValue === "string") {
          return `"${circularValue}"`;
        }
        if (circularValue == null) {
          return circularValue;
        }
        if (circularValue === Error || circularValue === TypeError) {
          return {
            toString() {
              throw new TypeError("Converting circular structure to JSON");
            }
          };
        }
        throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
      }
      return '"[Circular]"';
    }
    function getBooleanOption(options, key) {
      let value;
      if (hasOwnProperty.call(options, key)) {
        value = options[key];
        if (typeof value !== "boolean") {
          throw new TypeError(`The "${key}" argument must be of type boolean`);
        }
      }
      return value === void 0 ? true : value;
    }
    function getPositiveIntegerOption(options, key) {
      let value;
      if (hasOwnProperty.call(options, key)) {
        value = options[key];
        if (typeof value !== "number") {
          throw new TypeError(`The "${key}" argument must be of type number`);
        }
        if (!Number.isInteger(value)) {
          throw new TypeError(`The "${key}" argument must be an integer`);
        }
        if (value < 1) {
          throw new RangeError(`The "${key}" argument must be >= 1`);
        }
      }
      return value === void 0 ? Infinity : value;
    }
    function getItemCount(number) {
      if (number === 1) {
        return "1 item";
      }
      return `${number} items`;
    }
    function getUniqueReplacerSet(replacerArray) {
      const replacerSet = /* @__PURE__ */ new Set();
      for (const value of replacerArray) {
        if (typeof value === "string" || typeof value === "number") {
          replacerSet.add(String(value));
        }
      }
      return replacerSet;
    }
    function getStrictOption(options) {
      if (hasOwnProperty.call(options, "strict")) {
        const value = options.strict;
        if (typeof value !== "boolean") {
          throw new TypeError('The "strict" argument must be of type boolean');
        }
        if (value) {
          return (value2) => {
            let message = `Object can not safely be stringified. Received type ${typeof value2}`;
            if (typeof value2 !== "function")
              message += ` (${value2.toString()})`;
            throw new Error(message);
          };
        }
      }
    }
    function configure(options) {
      options = { ...options };
      const fail = getStrictOption(options);
      if (fail) {
        if (options.bigint === void 0) {
          options.bigint = false;
        }
        if (!("circularValue" in options)) {
          options.circularValue = Error;
        }
      }
      const circularValue = getCircularValueOption(options);
      const bigint = getBooleanOption(options, "bigint");
      const deterministic = getBooleanOption(options, "deterministic");
      const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
      const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
      function stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
        let value = parent[key];
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        value = replacer.call(parent, key, value);
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res = "";
            let join = ",";
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i2 = 0;
              for (; i2 < maximumValuesToStringify - 1; i2++) {
                const tmp2 = stringifyFnReplacer(String(i2), value, stack, replacer, spacer, indentation);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += join;
              }
              const tmp = stringifyFnReplacer(String(i2), value, stack, replacer, spacer, indentation);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res}]`;
            }
            let keys2 = Object.keys(value);
            const keyLength = keys2.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let whitespace = "";
            let separator = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (deterministic && !isTypedArrayWithEntries(value)) {
              keys2 = insertSort(keys2);
            }
            stack.push(value);
            for (let i2 = 0; i2 < maximumPropertiesToStringify; i2++) {
              const key2 = keys2[i2];
              const tmp = stringifyFnReplacer(key2, value, stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (spacer !== "" && separator.length > 1) {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            let res = "";
            let join = ",";
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i2 = 0;
              for (; i2 < maximumValuesToStringify - 1; i2++) {
                const tmp2 = stringifyArrayReplacer(String(i2), value[i2], stack, replacer, spacer, indentation);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += join;
              }
              const tmp = stringifyArrayReplacer(String(i2), value[i2], stack, replacer, spacer, indentation);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res}]`;
            }
            stack.push(value);
            let whitespace = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            let separator = "";
            for (const key2 of replacer) {
              const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (spacer !== "" && separator.length > 1) {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifyIndent(key, value, stack, spacer, indentation) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifyIndent(key, value, stack, spacer, indentation);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              indentation += spacer;
              let res2 = `
${indentation}`;
              const join2 = `,
${indentation}`;
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i2 = 0;
              for (; i2 < maximumValuesToStringify - 1; i2++) {
                const tmp2 = stringifyIndent(String(i2), value[i2], stack, spacer, indentation);
                res2 += tmp2 !== void 0 ? tmp2 : "null";
                res2 += join2;
              }
              const tmp = stringifyIndent(String(i2), value[i2], stack, spacer, indentation);
              res2 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res2 += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              res2 += `
${originalIndentation}`;
              stack.pop();
              return `[${res2}]`;
            }
            let keys2 = Object.keys(value);
            const keyLength = keys2.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            indentation += spacer;
            const join = `,
${indentation}`;
            let res = "";
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (isTypedArrayWithEntries(value)) {
              res += stringifyTypedArray(value, join, maximumBreadth);
              keys2 = keys2.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = join;
            }
            if (deterministic) {
              keys2 = insertSort(keys2);
            }
            stack.push(value);
            for (let i2 = 0; i2 < maximumPropertiesToStringify; i2++) {
              const key2 = keys2[i2];
              const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}: ${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (separator !== "") {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringifySimple(key, value, stack) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifySimple(key, value, stack);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res = "";
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i2 = 0;
              for (; i2 < maximumValuesToStringify - 1; i2++) {
                const tmp2 = stringifySimple(String(i2), value[i2], stack);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += ",";
              }
              const tmp = stringifySimple(String(i2), value[i2], stack);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `,"... ${getItemCount(removedKeys)} not stringified"`;
              }
              stack.pop();
              return `[${res}]`;
            }
            let keys2 = Object.keys(value);
            const keyLength = keys2.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (isTypedArrayWithEntries(value)) {
              res += stringifyTypedArray(value, ",", maximumBreadth);
              keys2 = keys2.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = ",";
            }
            if (deterministic) {
              keys2 = insertSort(keys2);
            }
            stack.push(value);
            for (let i2 = 0; i2 < maximumPropertiesToStringify; i2++) {
              const key2 = keys2[i2];
              const tmp = stringifySimple(key2, value[key2], stack);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${tmp}`;
                separator = ",";
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      function stringify3(value, replacer, space) {
        if (arguments.length > 1) {
          let spacer = "";
          if (typeof space === "number") {
            spacer = " ".repeat(Math.min(space, 10));
          } else if (typeof space === "string") {
            spacer = space.slice(0, 10);
          }
          if (replacer != null) {
            if (typeof replacer === "function") {
              return stringifyFnReplacer("", { "": value }, [], replacer, spacer, "");
            }
            if (Array.isArray(replacer)) {
              return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer), spacer, "");
            }
          }
          if (spacer.length !== 0) {
            return stringifyIndent("", value, [], spacer, "");
          }
        }
        return stringifySimple("", value, []);
      }
      return stringify3;
    }
  }
});

// node_modules/logform/json.js
var require_json = __commonJS({
  "node_modules/logform/json.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    var { MESSAGE } = require_triple_beam();
    var stringify2 = require_safe_stable_stringify();
    function replacer(key, value) {
      if (typeof value === "bigint")
        return value.toString();
      return value;
    }
    module2.exports = format7((info, opts) => {
      const jsonStringify = stringify2.configure(opts);
      info[MESSAGE] = jsonStringify(info, opts.replacer || replacer, opts.space);
      return info;
    });
  }
});

// node_modules/logform/label.js
var require_label = __commonJS({
  "node_modules/logform/label.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    module2.exports = format7((info, opts) => {
      if (opts.message) {
        info.message = `[${opts.label}] ${info.message}`;
        return info;
      }
      info.label = opts.label;
      return info;
    });
  }
});

// node_modules/logform/logstash.js
var require_logstash = __commonJS({
  "node_modules/logform/logstash.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    var { MESSAGE } = require_triple_beam();
    var jsonStringify = require_safe_stable_stringify();
    module2.exports = format7((info) => {
      const logstash = {};
      if (info.message) {
        logstash["@message"] = info.message;
        delete info.message;
      }
      if (info.timestamp) {
        logstash["@timestamp"] = info.timestamp;
        delete info.timestamp;
      }
      logstash["@fields"] = info;
      info[MESSAGE] = jsonStringify(logstash);
      return info;
    });
  }
});

// node_modules/logform/metadata.js
var require_metadata = __commonJS({
  "node_modules/logform/metadata.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    function fillExcept(info, fillExceptKeys, metadataKey) {
      const savedKeys = fillExceptKeys.reduce((acc, key) => {
        acc[key] = info[key];
        delete info[key];
        return acc;
      }, {});
      const metadata = Object.keys(info).reduce((acc, key) => {
        acc[key] = info[key];
        delete info[key];
        return acc;
      }, {});
      Object.assign(info, savedKeys, {
        [metadataKey]: metadata
      });
      return info;
    }
    function fillWith(info, fillWithKeys, metadataKey) {
      info[metadataKey] = fillWithKeys.reduce((acc, key) => {
        acc[key] = info[key];
        delete info[key];
        return acc;
      }, {});
      return info;
    }
    module2.exports = format7((info, opts = {}) => {
      let metadataKey = "metadata";
      if (opts.key) {
        metadataKey = opts.key;
      }
      let fillExceptKeys = [];
      if (!opts.fillExcept && !opts.fillWith) {
        fillExceptKeys.push("level");
        fillExceptKeys.push("message");
      }
      if (opts.fillExcept) {
        fillExceptKeys = opts.fillExcept;
      }
      if (fillExceptKeys.length > 0) {
        return fillExcept(info, fillExceptKeys, metadataKey);
      }
      if (opts.fillWith) {
        return fillWith(info, opts.fillWith, metadataKey);
      }
      return info;
    });
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s = 1e3;
    var m2 = s * 60;
    var h = m2 * 60;
    var d = h * 24;
    var w = d * 7;
    var y2 = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type2 = typeof val;
      if (type2 === "string" && val.length > 0) {
        return parse2(val);
      } else if (type2 === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n2 = parseFloat(match[1]);
      var type2 = (match[2] || "ms").toLowerCase();
      switch (type2) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n2 * y2;
        case "weeks":
        case "week":
        case "w":
          return n2 * w;
        case "days":
        case "day":
        case "d":
          return n2 * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n2 * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n2 * m2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n2 * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n2;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m2) {
        return Math.round(ms / m2) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m2) {
        return plural(ms, msAbs, m2, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n2, name) {
      var isPlural = msAbs >= n2 * 1.5;
      return Math.round(ms / n2) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/logform/ms.js
var require_ms2 = __commonJS({
  "node_modules/logform/ms.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    var ms = require_ms();
    module2.exports = format7((info) => {
      const curr = +/* @__PURE__ */ new Date();
      exports.diff = curr - (exports.prevTime || curr);
      exports.prevTime = curr;
      info.ms = `+${ms(exports.diff)}`;
      return info;
    });
  }
});

// node_modules/logform/pretty-print.js
var require_pretty_print = __commonJS({
  "node_modules/logform/pretty-print.js"(exports, module2) {
    "use strict";
    var inspect3 = require("util").inspect;
    var format7 = require_format();
    var { LEVEL, MESSAGE, SPLAT } = require_triple_beam();
    module2.exports = format7((info, opts = {}) => {
      const stripped = Object.assign({}, info);
      delete stripped[LEVEL];
      delete stripped[MESSAGE];
      delete stripped[SPLAT];
      info[MESSAGE] = inspect3(stripped, false, opts.depth || null, opts.colorize);
      return info;
    });
  }
});

// node_modules/logform/printf.js
var require_printf = __commonJS({
  "node_modules/logform/printf.js"(exports, module2) {
    "use strict";
    var { MESSAGE } = require_triple_beam();
    var Printf = class {
      constructor(templateFn) {
        this.template = templateFn;
      }
      transform(info) {
        info[MESSAGE] = this.template(info);
        return info;
      }
    };
    module2.exports = (opts) => new Printf(opts);
    module2.exports.Printf = module2.exports.Format = Printf;
  }
});

// node_modules/logform/simple.js
var require_simple = __commonJS({
  "node_modules/logform/simple.js"(exports, module2) {
    "use strict";
    var format7 = require_format();
    var { MESSAGE } = require_triple_beam();
    var jsonStringify = require_safe_stable_stringify();
    module2.exports = format7((info) => {
      const stringifiedRest = jsonStringify(Object.assign({}, info, {
        level: void 0,
        message: void 0,
        splat: void 0
      }));
      const padding = info.padding && info.padding[info.level] || "";
      if (stringifiedRest !== "{}") {
        info[MESSAGE] = `${info.level}:${padding} ${info.message} ${stringifiedRest}`;
      } else {
        info[MESSAGE] = `${info.level}:${padding} ${info.message}`;
      }
      return info;
    });
  }
});

// node_modules/logform/splat.js
var require_splat = __commonJS({
  "node_modules/logform/splat.js"(exports, module2) {
    "use strict";
    var util2 = require("util");
    var { SPLAT } = require_triple_beam();
    var formatRegExp2 = /%[scdjifoO%]/g;
    var escapedPercent = /%%/g;
    var Splatter = class {
      constructor(opts) {
        this.options = opts;
      }
      /**
         * Check to see if tokens <= splat.length, assign { splat, meta } into the
         * `info` accordingly, and write to this instance.
         *
         * @param  {Info} info Logform info message.
         * @param  {String[]} tokens Set of string interpolation tokens.
         * @returns {Info} Modified info message
         * @private
         */
      _splat(info, tokens) {
        const msg = info.message;
        const splat = info[SPLAT] || info.splat || [];
        const percents = msg.match(escapedPercent);
        const escapes = percents && percents.length || 0;
        const expectedSplat = tokens.length - escapes;
        const extraSplat = expectedSplat - splat.length;
        const metas = extraSplat < 0 ? splat.splice(extraSplat, -1 * extraSplat) : [];
        const metalen = metas.length;
        if (metalen) {
          for (let i2 = 0; i2 < metalen; i2++) {
            Object.assign(info, metas[i2]);
          }
        }
        info.message = util2.format(msg, ...splat);
        return info;
      }
      /**
        * Transforms the `info` message by using `util.format` to complete
        * any `info.message` provided it has string interpolation tokens.
        * If no tokens exist then `info` is immutable.
        *
        * @param  {Info} info Logform info message.
        * @param  {Object} opts Options for this instance.
        * @returns {Info} Modified info message
        */
      transform(info) {
        const msg = info.message;
        const splat = info[SPLAT] || info.splat;
        if (!splat || !splat.length) {
          return info;
        }
        const tokens = msg && msg.match && msg.match(formatRegExp2);
        if (!tokens && (splat || splat.length)) {
          const metas = splat.length > 1 ? splat.splice(0) : splat;
          const metalen = metas.length;
          if (metalen) {
            for (let i2 = 0; i2 < metalen; i2++) {
              Object.assign(info, metas[i2]);
            }
          }
          return info;
        }
        if (tokens) {
          return this._splat(info, tokens);
        }
        return info;
      }
    };
    module2.exports = (opts) => new Splatter(opts);
  }
});

// node_modules/fecha/lib/fecha.js
var fecha_exports = {};
__export(fecha_exports, {
  assign: () => assign,
  default: () => fecha_default,
  defaultI18n: () => defaultI18n,
  format: () => format4,
  parse: () => parse,
  setGlobalDateI18n: () => setGlobalDateI18n,
  setGlobalDateMasks: () => setGlobalDateMasks
});
function shorten(arr, sLen) {
  var newArr = [];
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    newArr.push(arr[i2].substr(0, sLen));
  }
  return newArr;
}
function assign(origObj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  for (var _a2 = 0, args_1 = args; _a2 < args_1.length; _a2++) {
    var obj = args_1[_a2];
    for (var key in obj) {
      origObj[key] = obj[key];
    }
  }
  return origObj;
}
function parse(dateStr, format7, i18n) {
  if (i18n === void 0) {
    i18n = {};
  }
  if (typeof format7 !== "string") {
    throw new Error("Invalid format in fecha parse");
  }
  format7 = globalMasks[format7] || format7;
  if (dateStr.length > 1e3) {
    return null;
  }
  var today = /* @__PURE__ */ new Date();
  var dateInfo = {
    year: today.getFullYear(),
    month: 0,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    isPm: null,
    timezoneOffset: null
  };
  var parseInfo = [];
  var literals = [];
  var newFormat = format7.replace(literal, function($0, $1) {
    literals.push(regexEscape($1));
    return "@@@";
  });
  var specifiedFields = {};
  var requiredFields = {};
  newFormat = regexEscape(newFormat).replace(token, function($0) {
    var info = parseFlags[$0];
    var field2 = info[0], regex = info[1], requiredField = info[3];
    if (specifiedFields[field2]) {
      throw new Error("Invalid format. " + field2 + " specified twice in format");
    }
    specifiedFields[field2] = true;
    if (requiredField) {
      requiredFields[requiredField] = true;
    }
    parseInfo.push(info);
    return "(" + regex + ")";
  });
  Object.keys(requiredFields).forEach(function(field2) {
    if (!specifiedFields[field2]) {
      throw new Error("Invalid format. " + field2 + " is required in specified format");
    }
  });
  newFormat = newFormat.replace(/@@@/g, function() {
    return literals.shift();
  });
  var matches = dateStr.match(new RegExp(newFormat, "i"));
  if (!matches) {
    return null;
  }
  var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
  for (var i2 = 1; i2 < matches.length; i2++) {
    var _a2 = parseInfo[i2 - 1], field = _a2[0], parser = _a2[2];
    var value = parser ? parser(matches[i2], combinedI18nSettings) : +matches[i2];
    if (value == null) {
      return null;
    }
    dateInfo[field] = value;
  }
  if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
    dateInfo.hour = +dateInfo.hour + 12;
  } else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
    dateInfo.hour = 0;
  }
  var dateTZ;
  if (dateInfo.timezoneOffset == null) {
    dateTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
    var validateFields = [
      ["month", "getMonth"],
      ["day", "getDate"],
      ["hour", "getHours"],
      ["minute", "getMinutes"],
      ["second", "getSeconds"]
    ];
    for (var i2 = 0, len = validateFields.length; i2 < len; i2++) {
      if (specifiedFields[validateFields[i2][0]] && dateInfo[validateFields[i2][0]] !== dateTZ[validateFields[i2][1]]()) {
        return null;
      }
    }
  } else {
    dateTZ = new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
    if (dateInfo.month > 11 || dateInfo.month < 0 || dateInfo.day > 31 || dateInfo.day < 1 || dateInfo.hour > 23 || dateInfo.hour < 0 || dateInfo.minute > 59 || dateInfo.minute < 0 || dateInfo.second > 59 || dateInfo.second < 0) {
      return null;
    }
  }
  return dateTZ;
}
var token, twoDigitsOptional, twoDigits, threeDigits, fourDigits, word, literal, monthUpdate, dayNames, monthNames, monthNamesShort, dayNamesShort, defaultI18n, globalI18n, setGlobalDateI18n, regexEscape, pad, formatFlags, monthParse, emptyDigits, emptyWord, amPm, timezoneOffset, parseFlags, globalMasks, setGlobalDateMasks, format4, fecha, fecha_default;
var init_fecha = __esm({
  "node_modules/fecha/lib/fecha.js"() {
    token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    twoDigitsOptional = "\\d\\d?";
    twoDigits = "\\d\\d";
    threeDigits = "\\d{3}";
    fourDigits = "\\d{4}";
    word = "[^\\s]+";
    literal = /\[([^]*?)\]/gm;
    monthUpdate = function(arrName) {
      return function(v, i18n) {
        var lowerCaseArr = i18n[arrName].map(function(v2) {
          return v2.toLowerCase();
        });
        var index2 = lowerCaseArr.indexOf(v.toLowerCase());
        if (index2 > -1) {
          return index2;
        }
        return null;
      };
    };
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    monthNamesShort = shorten(monthNames, 3);
    dayNamesShort = shorten(dayNames, 3);
    defaultI18n = {
      dayNamesShort,
      dayNames,
      monthNamesShort,
      monthNames,
      amPm: ["am", "pm"],
      DoFn: function(dayOfMonth) {
        return dayOfMonth + ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3 ? 0 : (dayOfMonth - dayOfMonth % 10 !== 10 ? 1 : 0) * dayOfMonth % 10];
      }
    };
    globalI18n = assign({}, defaultI18n);
    setGlobalDateI18n = function(i18n) {
      return globalI18n = assign(globalI18n, i18n);
    };
    regexEscape = function(str) {
      return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
    };
    pad = function(val, len) {
      if (len === void 0) {
        len = 2;
      }
      val = String(val);
      while (val.length < len) {
        val = "0" + val;
      }
      return val;
    };
    formatFlags = {
      D: function(dateObj) {
        return String(dateObj.getDate());
      },
      DD: function(dateObj) {
        return pad(dateObj.getDate());
      },
      Do: function(dateObj, i18n) {
        return i18n.DoFn(dateObj.getDate());
      },
      d: function(dateObj) {
        return String(dateObj.getDay());
      },
      dd: function(dateObj) {
        return pad(dateObj.getDay());
      },
      ddd: function(dateObj, i18n) {
        return i18n.dayNamesShort[dateObj.getDay()];
      },
      dddd: function(dateObj, i18n) {
        return i18n.dayNames[dateObj.getDay()];
      },
      M: function(dateObj) {
        return String(dateObj.getMonth() + 1);
      },
      MM: function(dateObj) {
        return pad(dateObj.getMonth() + 1);
      },
      MMM: function(dateObj, i18n) {
        return i18n.monthNamesShort[dateObj.getMonth()];
      },
      MMMM: function(dateObj, i18n) {
        return i18n.monthNames[dateObj.getMonth()];
      },
      YY: function(dateObj) {
        return pad(String(dateObj.getFullYear()), 4).substr(2);
      },
      YYYY: function(dateObj) {
        return pad(dateObj.getFullYear(), 4);
      },
      h: function(dateObj) {
        return String(dateObj.getHours() % 12 || 12);
      },
      hh: function(dateObj) {
        return pad(dateObj.getHours() % 12 || 12);
      },
      H: function(dateObj) {
        return String(dateObj.getHours());
      },
      HH: function(dateObj) {
        return pad(dateObj.getHours());
      },
      m: function(dateObj) {
        return String(dateObj.getMinutes());
      },
      mm: function(dateObj) {
        return pad(dateObj.getMinutes());
      },
      s: function(dateObj) {
        return String(dateObj.getSeconds());
      },
      ss: function(dateObj) {
        return pad(dateObj.getSeconds());
      },
      S: function(dateObj) {
        return String(Math.round(dateObj.getMilliseconds() / 100));
      },
      SS: function(dateObj) {
        return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
      },
      SSS: function(dateObj) {
        return pad(dateObj.getMilliseconds(), 3);
      },
      a: function(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
      },
      A: function(dateObj, i18n) {
        return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
      },
      ZZ: function(dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60) * 100 + Math.abs(offset) % 60, 4);
      },
      Z: function(dateObj) {
        var offset = dateObj.getTimezoneOffset();
        return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);
      }
    };
    monthParse = function(v) {
      return +v - 1;
    };
    emptyDigits = [null, twoDigitsOptional];
    emptyWord = [null, word];
    amPm = [
      "isPm",
      word,
      function(v, i18n) {
        var val = v.toLowerCase();
        if (val === i18n.amPm[0]) {
          return 0;
        } else if (val === i18n.amPm[1]) {
          return 1;
        }
        return null;
      }
    ];
    timezoneOffset = [
      "timezoneOffset",
      "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
      function(v) {
        var parts = (v + "").match(/([+-]|\d\d)/gi);
        if (parts) {
          var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
          return parts[0] === "+" ? minutes : -minutes;
        }
        return 0;
      }
    ];
    parseFlags = {
      D: ["day", twoDigitsOptional],
      DD: ["day", twoDigits],
      Do: ["day", twoDigitsOptional + word, function(v) {
        return parseInt(v, 10);
      }],
      M: ["month", twoDigitsOptional, monthParse],
      MM: ["month", twoDigits, monthParse],
      YY: [
        "year",
        twoDigits,
        function(v) {
          var now3 = /* @__PURE__ */ new Date();
          var cent = +("" + now3.getFullYear()).substr(0, 2);
          return +("" + (+v > 68 ? cent - 1 : cent) + v);
        }
      ],
      h: ["hour", twoDigitsOptional, void 0, "isPm"],
      hh: ["hour", twoDigits, void 0, "isPm"],
      H: ["hour", twoDigitsOptional],
      HH: ["hour", twoDigits],
      m: ["minute", twoDigitsOptional],
      mm: ["minute", twoDigits],
      s: ["second", twoDigitsOptional],
      ss: ["second", twoDigits],
      YYYY: ["year", fourDigits],
      S: ["millisecond", "\\d", function(v) {
        return +v * 100;
      }],
      SS: ["millisecond", twoDigits, function(v) {
        return +v * 10;
      }],
      SSS: ["millisecond", threeDigits],
      d: emptyDigits,
      dd: emptyDigits,
      ddd: emptyWord,
      dddd: emptyWord,
      MMM: ["month", word, monthUpdate("monthNamesShort")],
      MMMM: ["month", word, monthUpdate("monthNames")],
      a: amPm,
      A: amPm,
      ZZ: timezoneOffset,
      Z: timezoneOffset
    };
    globalMasks = {
      default: "ddd MMM DD YYYY HH:mm:ss",
      shortDate: "M/D/YY",
      mediumDate: "MMM D, YYYY",
      longDate: "MMMM D, YYYY",
      fullDate: "dddd, MMMM D, YYYY",
      isoDate: "YYYY-MM-DD",
      isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
      shortTime: "HH:mm",
      mediumTime: "HH:mm:ss",
      longTime: "HH:mm:ss.SSS"
    };
    setGlobalDateMasks = function(masks) {
      return assign(globalMasks, masks);
    };
    format4 = function(dateObj, mask, i18n) {
      if (mask === void 0) {
        mask = globalMasks["default"];
      }
      if (i18n === void 0) {
        i18n = {};
      }
      if (typeof dateObj === "number") {
        dateObj = new Date(dateObj);
      }
      if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
        throw new Error("Invalid Date pass to format");
      }
      mask = globalMasks[mask] || mask;
      var literals = [];
      mask = mask.replace(literal, function($0, $1) {
        literals.push($1);
        return "@@@";
      });
      var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
      mask = mask.replace(token, function($0) {
        return formatFlags[$0](dateObj, combinedI18nSettings);
      });
      return mask.replace(/@@@/g, function() {
        return literals.shift();
      });
    };
    fecha = {
      format: format4,
      parse,
      defaultI18n,
      setGlobalDateI18n,
      setGlobalDateMasks
    };
    fecha_default = fecha;
  }
});

// node_modules/logform/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/logform/timestamp.js"(exports, module2) {
    "use strict";
    var fecha2 = (init_fecha(), __toCommonJS(fecha_exports));
    var format7 = require_format();
    module2.exports = format7((info, opts = {}) => {
      if (opts.format) {
        info.timestamp = typeof opts.format === "function" ? opts.format() : fecha2.format(/* @__PURE__ */ new Date(), opts.format);
      }
      if (!info.timestamp) {
        info.timestamp = (/* @__PURE__ */ new Date()).toISOString();
      }
      if (opts.alias) {
        info[opts.alias] = info.timestamp;
      }
      return info;
    });
  }
});

// node_modules/logform/uncolorize.js
var require_uncolorize = __commonJS({
  "node_modules/logform/uncolorize.js"(exports, module2) {
    "use strict";
    var colors2 = require_safe();
    var format7 = require_format();
    var { MESSAGE } = require_triple_beam();
    module2.exports = format7((info, opts) => {
      if (opts.level !== false) {
        info.level = colors2.strip(info.level);
      }
      if (opts.message !== false) {
        info.message = colors2.strip(String(info.message));
      }
      if (opts.raw !== false && info[MESSAGE]) {
        info[MESSAGE] = colors2.strip(String(info[MESSAGE]));
      }
      return info;
    });
  }
});

// node_modules/logform/index.js
var require_logform = __commonJS({
  "node_modules/logform/index.js"(exports) {
    "use strict";
    var format7 = exports.format = require_format();
    exports.levels = require_levels();
    function exposeFormat(name, requireFormat) {
      Object.defineProperty(format7, name, {
        get() {
          return requireFormat();
        },
        configurable: true
      });
    }
    exposeFormat("align", function() {
      return require_align();
    });
    exposeFormat("errors", function() {
      return require_errors();
    });
    exposeFormat("cli", function() {
      return require_cli2();
    });
    exposeFormat("combine", function() {
      return require_combine();
    });
    exposeFormat("colorize", function() {
      return require_colorize();
    });
    exposeFormat("json", function() {
      return require_json();
    });
    exposeFormat("label", function() {
      return require_label();
    });
    exposeFormat("logstash", function() {
      return require_logstash();
    });
    exposeFormat("metadata", function() {
      return require_metadata();
    });
    exposeFormat("ms", function() {
      return require_ms2();
    });
    exposeFormat("padLevels", function() {
      return require_pad_levels();
    });
    exposeFormat("prettyPrint", function() {
      return require_pretty_print();
    });
    exposeFormat("printf", function() {
      return require_printf();
    });
    exposeFormat("simple", function() {
      return require_simple();
    });
    exposeFormat("splat", function() {
      return require_splat();
    });
    exposeFormat("timestamp", function() {
      return require_timestamp();
    });
    exposeFormat("uncolorize", function() {
      return require_uncolorize();
    });
  }
});

// node_modules/winston/lib/winston/common.js
var require_common = __commonJS({
  "node_modules/winston/lib/winston/common.js"(exports) {
    "use strict";
    var { format: format7 } = require("util");
    exports.warn = {
      deprecated(prop) {
        return () => {
          throw new Error(format7("{ %s } was removed in winston@3.0.0.", prop));
        };
      },
      useFormat(prop) {
        return () => {
          throw new Error([
            format7("{ %s } was removed in winston@3.0.0.", prop),
            "Use a custom winston.format = winston.format(function) instead."
          ].join("\n"));
        };
      },
      forFunctions(obj, type2, props) {
        props.forEach((prop) => {
          obj[prop] = exports.warn[type2](prop);
        });
      },
      forProperties(obj, type2, props) {
        props.forEach((prop) => {
          const notice = exports.warn[type2](prop);
          Object.defineProperty(obj, prop, {
            get: notice,
            set: notice
          });
        });
      }
    };
  }
});

// node_modules/winston/package.json
var require_package = __commonJS({
  "node_modules/winston/package.json"(exports, module2) {
    module2.exports = {
      name: "winston",
      description: "A logger for just about everything.",
      version: "3.10.0",
      author: "Charlie Robbins <charlie.robbins@gmail.com>",
      maintainers: [
        "David Hyde <dabh@alumni.stanford.edu>"
      ],
      repository: {
        type: "git",
        url: "https://github.com/winstonjs/winston.git"
      },
      keywords: [
        "winston",
        "logger",
        "logging",
        "logs",
        "sysadmin",
        "bunyan",
        "pino",
        "loglevel",
        "tools",
        "json",
        "stream"
      ],
      dependencies: {
        "@dabh/diagnostics": "^2.0.2",
        "@colors/colors": "1.5.0",
        async: "^3.2.3",
        "is-stream": "^2.0.0",
        logform: "^2.4.0",
        "one-time": "^1.0.0",
        "readable-stream": "^3.4.0",
        "safe-stable-stringify": "^2.3.1",
        "stack-trace": "0.0.x",
        "triple-beam": "^1.3.0",
        "winston-transport": "^4.5.0"
      },
      devDependencies: {
        "@babel/cli": "^7.17.0",
        "@babel/core": "^7.17.2",
        "@babel/preset-env": "^7.16.7",
        "@dabh/eslint-config-populist": "^5.0.0",
        "@types/node": "^20.3.1",
        "abstract-winston-transport": "^0.5.1",
        assume: "^2.2.0",
        "cross-spawn-async": "^2.2.5",
        eslint: "^8.9.0",
        hock: "^1.4.1",
        mocha: "8.1.3",
        nyc: "^15.1.0",
        rimraf: "^3.0.2",
        split2: "^4.1.0",
        "std-mocks": "^1.0.1",
        through2: "^4.0.2",
        "winston-compat": "^0.1.5"
      },
      main: "./lib/winston.js",
      browser: "./dist/winston",
      types: "./index.d.ts",
      scripts: {
        lint: "eslint lib/*.js lib/winston/*.js lib/winston/**/*.js --resolve-plugins-relative-to ./node_modules/@dabh/eslint-config-populist",
        test: "mocha",
        "test:coverage": "nyc npm run test:unit",
        "test:unit": "mocha test/unit",
        "test:integration": "mocha test/integration",
        build: "rimraf dist && babel lib -d dist",
        prepublishOnly: "npm run build"
      },
      engines: {
        node: ">= 12.0.0"
      },
      license: "MIT"
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/util-deprecate/node.js"(exports, module2) {
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module2) {
    module2.exports = require("stream");
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module2) {
    "use strict";
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose)
        return;
      if (self2._readableState && !self2._readableState.emitClose)
        return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy)
        stream.destroy(err);
      else
        stream.emit("error", err);
    }
    module2.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/readable-stream/errors.js
var require_errors2 = __commonJS({
  "node_modules/readable-stream/errors.js"(exports, module2) {
    "use strict";
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      class NodeError extends Base {
        constructor(arg1, arg2, arg3) {
          super(getMessage(arg1, arg2, arg3));
        }
      }
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i2) => String(i2));
        if (len > 2) {
          return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        } else if (len === 2) {
          return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
          return `of ${thing} ${expected[0]}`;
        }
      } else {
        return `of ${thing} ${String(expected)}`;
      }
    }
    function startsWith(str, search, pos) {
      return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str, search, this_len) {
      if (this_len === void 0 || this_len > str.length) {
        this_len = str.length;
      }
      return str.substring(this_len - search.length, this_len) === search;
    }
    function includes(str, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str.length) {
        return false;
      } else {
        return str.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      let determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      let msg;
      if (endsWith(name, " argument")) {
        msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
      } else {
        const type2 = includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type2} ${determiner} ${oneOf(expected, "type")}`;
      }
      msg += `. Received type ${typeof actual}`;
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module2.exports.codes = codes;
  }
});

// node_modules/readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/state.js"(exports, module2) {
    "use strict";
    var ERR_INVALID_OPT_VALUE = require_errors2().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module2.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module2) {
    try {
      util2 = require("util");
      if (typeof util2.inherits !== "function")
        throw "";
      module2.exports = util2.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util2;
  }
});

// node_modules/readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module2) {
    "use strict";
    function ownKeys(object2, enumerableOnly) {
      var keys2 = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = null != arguments[i2] ? arguments[i2] : {};
        i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var _require = require("buffer");
    var Buffer2 = _require.Buffer;
    var _require2 = require("util");
    var inspect3 = _require2.inspect;
    var custom2 = inspect3 && inspect3.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    module2.exports = /* @__PURE__ */ function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [{
        key: "push",
        value: function push(v) {
          var entry = {
            data: v,
            next: null
          };
          if (this.length > 0)
            this.tail.next = entry;
          else
            this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v) {
          var entry = {
            data: v,
            next: this.head
          };
          if (this.length === 0)
            this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0)
            return;
          var ret = this.head.data;
          if (this.length === 1)
            this.head = this.tail = null;
          else
            this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join(s) {
          if (this.length === 0)
            return "";
          var p = this.head;
          var ret = "" + p.data;
          while (p = p.next)
            ret += s + p.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n2) {
          if (this.length === 0)
            return Buffer2.alloc(0);
          var ret = Buffer2.allocUnsafe(n2 >>> 0);
          var p = this.head;
          var i2 = 0;
          while (p) {
            copyBuffer(p.data, ret, i2);
            i2 += p.data.length;
            p = p.next;
          }
          return ret;
        }
        // Consumes a specified amount of bytes or characters from the buffered data.
      }, {
        key: "consume",
        value: function consume(n2, hasStrings) {
          var ret;
          if (n2 < this.head.data.length) {
            ret = this.head.data.slice(0, n2);
            this.head.data = this.head.data.slice(n2);
          } else if (n2 === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n2) : this._getBuffer(n2);
          }
          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
        // Consumes a specified amount of characters from the buffered data.
      }, {
        key: "_getString",
        value: function _getString(n2) {
          var p = this.head;
          var c = 1;
          var ret = p.data;
          n2 -= ret.length;
          while (p = p.next) {
            var str = p.data;
            var nb = n2 > str.length ? str.length : n2;
            if (nb === str.length)
              ret += str;
            else
              ret += str.slice(0, n2);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === str.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = str.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
        // Consumes a specified amount of bytes from the buffered data.
      }, {
        key: "_getBuffer",
        value: function _getBuffer(n2) {
          var ret = Buffer2.allocUnsafe(n2);
          var p = this.head;
          var c = 1;
          p.data.copy(ret);
          n2 -= p.data.length;
          while (p = p.next) {
            var buf = p.data;
            var nb = n2 > buf.length ? buf.length : n2;
            buf.copy(ret, ret.length - n2, 0, nb);
            n2 -= nb;
            if (n2 === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
        // Make sure the linked list only shows the minimal necessary information.
      }, {
        key: custom2,
        value: function value(_, options) {
          return inspect3(this, _objectSpread(_objectSpread({}, options), {}, {
            // Only inspect one level.
            depth: 0,
            // It should not recurse.
            customInspect: false
          }));
        }
      }]);
      return BufferList;
    }();
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i2;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i2 = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i2 = 0;
      }
      if (i2 < buf.length)
        return r ? r + this.text(buf, i2) : this.text(buf, i2);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i2) {
      var j = buf.length - 1;
      if (j < i2)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i2 || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i2 || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i2) {
      var total = utf8CheckIncomplete(this, buf, i2);
      if (!this.lastNeed)
        return buf.toString("utf8", i2);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i2, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i2) {
      if ((buf.length - i2) % 2 === 0) {
        var r = buf.toString("utf16le", i2);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i2, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i2) {
      var n2 = (buf.length - i2) % 3;
      if (n2 === 0)
        return buf.toString("base64", i2);
      this.lastNeed = 3 - n2;
      this.lastTotal = 3;
      if (n2 === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i2, buf.length - n2);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module2) {
    "use strict";
    var ERR_STREAM_PREMATURE_CLOSE = require_errors2().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop3() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop3);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable)
          onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable)
          callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable)
          callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req)
          onrequest();
        else
          stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false)
        stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    module2.exports = eos;
  }
});

// node_modules/readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module2) {
    "use strict";
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve2 = iter[kLastResolve];
      if (resolve2 !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve2(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve2, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve2(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve2, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve2, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve2(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve2, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve2(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve2, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve2(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve2;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve2 = iterator[kLastResolve];
        if (resolve2 !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve2(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    module2.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/from.js"(exports, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve2, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve2(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn2) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve2, reject) {
          var gen = fn2.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve2, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve2, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function ownKeys(object2, enumerableOnly) {
      var keys2 = Object.keys(object2);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object2);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
        })), keys2.push.apply(keys2, symbols);
      }
      return keys2;
    }
    function _objectSpread(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = null != arguments[i2] ? arguments[i2] : {};
        i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var ERR_INVALID_ARG_TYPE = require_errors2().codes.ERR_INVALID_ARG_TYPE;
    function from(Readable, iterable, opts) {
      var iterator;
      if (iterable && typeof iterable.next === "function") {
        iterator = iterable;
      } else if (iterable && iterable[Symbol.asyncIterator])
        iterator = iterable[Symbol.asyncIterator]();
      else if (iterable && iterable[Symbol.iterator])
        iterator = iterable[Symbol.iterator]();
      else
        throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
      var readable = new Readable(_objectSpread({
        objectMode: true
      }, opts));
      var reading = false;
      readable._read = function() {
        if (!reading) {
          reading = true;
          next();
        }
      };
      function next() {
        return _next2.apply(this, arguments);
      }
      function _next2() {
        _next2 = _asyncToGenerator(function* () {
          try {
            var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
            if (done) {
              readable.push(null);
            } else if (readable.push(yield value)) {
              next();
            } else {
              reading = false;
            }
          } catch (err) {
            readable.destroy(err);
          }
        });
        return _next2.apply(this, arguments);
      }
      return readable;
    }
    module2.exports = from;
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module2) {
    "use strict";
    module2.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type2) {
      return emitter.listeners(type2).length;
    };
    var Stream = require_stream();
    var Buffer2 = require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require("util");
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors2().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from;
    require_inherits()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn2) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn2);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn2);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn2);
      else
        emitter._events[event] = [fn2, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable))
        return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set3(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n2) {
      if (n2 >= MAX_HWM) {
        n2 = MAX_HWM;
      } else {
        n2--;
        n2 |= n2 >>> 1;
        n2 |= n2 >>> 2;
        n2 |= n2 >>> 4;
        n2 |= n2 >>> 8;
        n2 |= n2 >>> 16;
        n2++;
      }
      return n2;
    }
    function howMuchToRead(n2, state) {
      if (n2 <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n2 !== n2) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n2 > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n2);
      if (n2 <= state.length)
        return n2;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n2) {
      debug("read", n2);
      n2 = parseInt(n2, 10);
      var state = this._readableState;
      var nOrig = n2;
      if (n2 !== 0)
        state.emittedReadable = false;
      if (n2 === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n2 = howMuchToRead(n2, state);
      if (n2 === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n2 < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n2 = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n2 > 0)
        ret = fromList(n2, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n2 = 0;
      } else {
        state.length -= n2;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n2 && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n2) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf3(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          errorOrDestroy(dest, er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i2 = 0; i2 < len; i2++)
          dests[i2].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      var index2 = indexOf3(state.pipes, dest);
      if (index2 === -1)
        return this;
      state.pipes.splice(index2, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn2) {
      var res = Stream.prototype.on.call(this, ev, fn2);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn2) {
      var res = Stream.prototype.removeListener.call(this, ev, fn2);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null)
        ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i2 in stream) {
        if (this[i2] === void 0 && typeof stream[i2] === "function") {
          this[i2] = function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i2);
        }
      }
      for (var n2 = 0; n2 < kProxyEvents.length; n2++) {
        stream.on(kProxyEvents[n2], this.emit.bind(this, kProxyEvents[n2]));
      }
      this._read = function(n3) {
        debug("wrapped _read", n3);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._readableState.flowing;
      },
      set: function set3(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._readableState.length;
      }
    });
    function fromList(n2, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n2 || n2 >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n2, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from === void 0) {
          from = require_from();
        }
        return from(Readable, iterable, opts);
      };
    }
    function indexOf3(xs, x) {
      for (var i2 = 0, l2 = xs.length; i2 < l2; i2++) {
        if (xs[i2] === x)
          return i2;
      }
      return -1;
    }
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module2) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys3 = [];
      for (var key in obj)
        keys3.push(key);
      return keys3;
    };
    module2.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits()(Duplex, Readable);
    {
      keys2 = objectKeys(Writable.prototype);
      for (v = 0; v < keys2.length; v++) {
        method = keys2[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys2;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false)
          this.readable = false;
        if (options.writable === false)
          this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended)
        return;
      process.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set3(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module2) {
    "use strict";
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_node()
    };
    var Stream = require_stream();
    var Buffer2 = require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors2().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object2) {
          if (realHasInstance.call(this, object2))
            return true;
          if (this !== Writable)
            return false;
          return object2 && object2._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object2) {
        return object2 instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this))
        return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ending)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed)
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function")
        throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l2 = state.bufferedRequestCount;
        var buffer = new Array(l2);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending)
        endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function get2() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set3(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/winston-transport/legacy.js
var require_legacy = __commonJS({
  "node_modules/winston-transport/legacy.js"(exports, module2) {
    "use strict";
    var util2 = require("util");
    var { LEVEL } = require_triple_beam();
    var TransportStream = require_winston_transport();
    var LegacyTransportStream = module2.exports = function LegacyTransportStream2(options = {}) {
      TransportStream.call(this, options);
      if (!options.transport || typeof options.transport.log !== "function") {
        throw new Error("Invalid transport, must be an object with a log method.");
      }
      this.transport = options.transport;
      this.level = this.level || options.transport.level;
      this.handleExceptions = this.handleExceptions || options.transport.handleExceptions;
      this._deprecated();
      function transportError(err) {
        this.emit("error", err, this.transport);
      }
      if (!this.transport.__winstonError) {
        this.transport.__winstonError = transportError.bind(this);
        this.transport.on("error", this.transport.__winstonError);
      }
    };
    util2.inherits(LegacyTransportStream, TransportStream);
    LegacyTransportStream.prototype._write = function _write(info, enc, callback) {
      if (this.silent || info.exception === true && !this.handleExceptions) {
        return callback(null);
      }
      if (!this.level || this.levels[this.level] >= this.levels[info[LEVEL]]) {
        this.transport.log(info[LEVEL], info.message, info, this._nop);
      }
      callback(null);
    };
    LegacyTransportStream.prototype._writev = function _writev(chunks, callback) {
      for (let i2 = 0; i2 < chunks.length; i2++) {
        if (this._accept(chunks[i2])) {
          this.transport.log(
            chunks[i2].chunk[LEVEL],
            chunks[i2].chunk.message,
            chunks[i2].chunk,
            this._nop
          );
          chunks[i2].callback();
        }
      }
      return callback(null);
    };
    LegacyTransportStream.prototype._deprecated = function _deprecated() {
      console.error([
        `${this.transport.name} is a legacy winston transport. Consider upgrading: `,
        "- Upgrade docs: https://github.com/winstonjs/winston/blob/master/UPGRADE-3.0.md"
      ].join("\n"));
    };
    LegacyTransportStream.prototype.close = function close() {
      if (this.transport.close) {
        this.transport.close();
      }
      if (this.transport.__winstonError) {
        this.transport.removeListener("error", this.transport.__winstonError);
        this.transport.__winstonError = null;
      }
    };
  }
});

// node_modules/winston-transport/index.js
var require_winston_transport = __commonJS({
  "node_modules/winston-transport/index.js"(exports, module2) {
    "use strict";
    var util2 = require("util");
    var Writable = require_stream_writable();
    var { LEVEL } = require_triple_beam();
    var TransportStream = module2.exports = function TransportStream2(options = {}) {
      Writable.call(this, { objectMode: true, highWaterMark: options.highWaterMark });
      this.format = options.format;
      this.level = options.level;
      this.handleExceptions = options.handleExceptions;
      this.handleRejections = options.handleRejections;
      this.silent = options.silent;
      if (options.log)
        this.log = options.log;
      if (options.logv)
        this.logv = options.logv;
      if (options.close)
        this.close = options.close;
      this.once("pipe", (logger) => {
        this.levels = logger.levels;
        this.parent = logger;
      });
      this.once("unpipe", (src) => {
        if (src === this.parent) {
          this.parent = null;
          if (this.close) {
            this.close();
          }
        }
      });
    };
    util2.inherits(TransportStream, Writable);
    TransportStream.prototype._write = function _write(info, enc, callback) {
      if (this.silent || info.exception === true && !this.handleExceptions) {
        return callback(null);
      }
      const level2 = this.level || this.parent && this.parent.level;
      if (!level2 || this.levels[level2] >= this.levels[info[LEVEL]]) {
        if (info && !this.format) {
          return this.log(info, callback);
        }
        let errState;
        let transformed;
        try {
          transformed = this.format.transform(Object.assign({}, info), this.format.options);
        } catch (err) {
          errState = err;
        }
        if (errState || !transformed) {
          callback();
          if (errState)
            throw errState;
          return;
        }
        return this.log(transformed, callback);
      }
      this._writableState.sync = false;
      return callback(null);
    };
    TransportStream.prototype._writev = function _writev(chunks, callback) {
      if (this.logv) {
        const infos = chunks.filter(this._accept, this);
        if (!infos.length) {
          return callback(null);
        }
        return this.logv(infos, callback);
      }
      for (let i2 = 0; i2 < chunks.length; i2++) {
        if (!this._accept(chunks[i2]))
          continue;
        if (chunks[i2].chunk && !this.format) {
          this.log(chunks[i2].chunk, chunks[i2].callback);
          continue;
        }
        let errState;
        let transformed;
        try {
          transformed = this.format.transform(
            Object.assign({}, chunks[i2].chunk),
            this.format.options
          );
        } catch (err) {
          errState = err;
        }
        if (errState || !transformed) {
          chunks[i2].callback();
          if (errState) {
            callback(null);
            throw errState;
          }
        } else {
          this.log(transformed, chunks[i2].callback);
        }
      }
      return callback(null);
    };
    TransportStream.prototype._accept = function _accept(write) {
      const info = write.chunk;
      if (this.silent) {
        return false;
      }
      const level2 = this.level || this.parent && this.parent.level;
      if (info.exception === true || !level2 || this.levels[level2] >= this.levels[info[LEVEL]]) {
        if (this.handleExceptions || info.exception !== true) {
          return true;
        }
      }
      return false;
    };
    TransportStream.prototype._nop = function _nop() {
      return void 0;
    };
    module2.exports.LegacyTransportStream = require_legacy();
  }
});

// node_modules/winston/lib/winston/transports/console.js
var require_console = __commonJS({
  "node_modules/winston/lib/winston/transports/console.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var { LEVEL, MESSAGE } = require_triple_beam();
    var TransportStream = require_winston_transport();
    module2.exports = class Console extends TransportStream {
      /**
       * Constructor function for the Console transport object responsible for
       * persisting log messages and metadata to a terminal or TTY.
       * @param {!Object} [options={}] - Options for this instance.
       */
      constructor(options = {}) {
        super(options);
        this.name = options.name || "console";
        this.stderrLevels = this._stringArrayToSet(options.stderrLevels);
        this.consoleWarnLevels = this._stringArrayToSet(options.consoleWarnLevels);
        this.eol = typeof options.eol === "string" ? options.eol : os.EOL;
        this.setMaxListeners(30);
      }
      /**
       * Core logging method exposed to Winston.
       * @param {Object} info - TODO: add param description.
       * @param {Function} callback - TODO: add param description.
       * @returns {undefined}
       */
      log(info, callback) {
        setImmediate(() => this.emit("logged", info));
        if (this.stderrLevels[info[LEVEL]]) {
          if (console._stderr) {
            console._stderr.write(`${info[MESSAGE]}${this.eol}`);
          } else {
            console.error(info[MESSAGE]);
          }
          if (callback) {
            callback();
          }
          return;
        } else if (this.consoleWarnLevels[info[LEVEL]]) {
          if (console._stderr) {
            console._stderr.write(`${info[MESSAGE]}${this.eol}`);
          } else {
            console.warn(info[MESSAGE]);
          }
          if (callback) {
            callback();
          }
          return;
        }
        if (console._stdout) {
          console._stdout.write(`${info[MESSAGE]}${this.eol}`);
        } else {
          console.log(info[MESSAGE]);
        }
        if (callback) {
          callback();
        }
      }
      /**
       * Returns a Set-like object with strArray's elements as keys (each with the
       * value true).
       * @param {Array} strArray - Array of Set-elements as strings.
       * @param {?string} [errMsg] - Custom error message thrown on invalid input.
       * @returns {Object} - TODO: add return description.
       * @private
       */
      _stringArrayToSet(strArray, errMsg) {
        if (!strArray)
          return {};
        errMsg = errMsg || "Cannot make set from type other than Array of string elements";
        if (!Array.isArray(strArray)) {
          throw new Error(errMsg);
        }
        return strArray.reduce((set3, el) => {
          if (typeof el !== "string") {
            throw new Error(errMsg);
          }
          set3[el] = true;
          return set3;
        }, {});
      }
    };
  }
});

// node_modules/async/internal/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/async/internal/isArrayLike.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isArrayLike;
    function isArrayLike(value) {
      return value && typeof value.length === "number" && value.length >= 0 && value.length % 1 === 0;
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/initialParams.js
var require_initialParams = __commonJS({
  "node_modules/async/internal/initialParams.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(fn2) {
      return function(...args) {
        var callback = args.pop();
        return fn2.call(this, args, callback);
      };
    };
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/setImmediate.js
var require_setImmediate = __commonJS({
  "node_modules/async/internal/setImmediate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fallback = fallback;
    exports.wrap = wrap;
    var hasQueueMicrotask = exports.hasQueueMicrotask = typeof queueMicrotask === "function" && queueMicrotask;
    var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === "function" && setImmediate;
    var hasNextTick = exports.hasNextTick = typeof process === "object" && typeof process.nextTick === "function";
    function fallback(fn2) {
      setTimeout(fn2, 0);
    }
    function wrap(defer) {
      return (fn2, ...args) => defer(() => fn2(...args));
    }
    var _defer;
    if (hasQueueMicrotask) {
      _defer = queueMicrotask;
    } else if (hasSetImmediate) {
      _defer = setImmediate;
    } else if (hasNextTick) {
      _defer = process.nextTick;
    } else {
      _defer = fallback;
    }
    exports.default = wrap(_defer);
  }
});

// node_modules/async/asyncify.js
var require_asyncify = __commonJS({
  "node_modules/async/asyncify.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = asyncify;
    var _initialParams = require_initialParams();
    var _initialParams2 = _interopRequireDefault(_initialParams);
    var _setImmediate = require_setImmediate();
    var _setImmediate2 = _interopRequireDefault(_setImmediate);
    var _wrapAsync = require_wrapAsync();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function asyncify(func) {
      if ((0, _wrapAsync.isAsync)(func)) {
        return function(...args) {
          const callback = args.pop();
          const promise = func.apply(this, args);
          return handlePromise(promise, callback);
        };
      }
      return (0, _initialParams2.default)(function(args, callback) {
        var result;
        try {
          result = func.apply(this, args);
        } catch (e) {
          return callback(e);
        }
        if (result && typeof result.then === "function") {
          return handlePromise(result, callback);
        } else {
          callback(null, result);
        }
      });
    }
    function handlePromise(promise, callback) {
      return promise.then((value) => {
        invokeCallback(callback, null, value);
      }, (err) => {
        invokeCallback(callback, err && err.message ? err : new Error(err));
      });
    }
    function invokeCallback(callback, error, value) {
      try {
        callback(error, value);
      } catch (err) {
        (0, _setImmediate2.default)((e) => {
          throw e;
        }, err);
      }
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/wrapAsync.js
var require_wrapAsync = __commonJS({
  "node_modules/async/internal/wrapAsync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAsyncIterable = exports.isAsyncGenerator = exports.isAsync = void 0;
    var _asyncify = require_asyncify();
    var _asyncify2 = _interopRequireDefault(_asyncify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isAsync(fn2) {
      return fn2[Symbol.toStringTag] === "AsyncFunction";
    }
    function isAsyncGenerator(fn2) {
      return fn2[Symbol.toStringTag] === "AsyncGenerator";
    }
    function isAsyncIterable(obj) {
      return typeof obj[Symbol.asyncIterator] === "function";
    }
    function wrapAsync(asyncFn) {
      if (typeof asyncFn !== "function")
        throw new Error("expected a function");
      return isAsync(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
    }
    exports.default = wrapAsync;
    exports.isAsync = isAsync;
    exports.isAsyncGenerator = isAsyncGenerator;
    exports.isAsyncIterable = isAsyncIterable;
  }
});

// node_modules/async/internal/awaitify.js
var require_awaitify = __commonJS({
  "node_modules/async/internal/awaitify.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = awaitify;
    function awaitify(asyncFn, arity = asyncFn.length) {
      if (!arity)
        throw new Error("arity is undefined");
      function awaitable(...args) {
        if (typeof args[arity - 1] === "function") {
          return asyncFn.apply(this, args);
        }
        return new Promise((resolve2, reject) => {
          args[arity - 1] = (err, ...cbArgs) => {
            if (err)
              return reject(err);
            resolve2(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
          };
          asyncFn.apply(this, args);
        });
      }
      return awaitable;
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/parallel.js
var require_parallel = __commonJS({
  "node_modules/async/internal/parallel.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _isArrayLike = require_isArrayLike();
    var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
    var _wrapAsync = require_wrapAsync();
    var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
    var _awaitify = require_awaitify();
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = (0, _awaitify2.default)((eachfn, tasks, callback) => {
      var results = (0, _isArrayLike2.default)(tasks) ? [] : {};
      eachfn(tasks, (task, key, taskCb) => {
        (0, _wrapAsync2.default)(task)((err, ...result) => {
          if (result.length < 2) {
            [result] = result;
          }
          results[key] = result;
          taskCb(err);
        });
      }, (err) => callback(err, results));
    }, 3);
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/once.js
var require_once = __commonJS({
  "node_modules/async/internal/once.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = once;
    function once(fn2) {
      function wrapper(...args) {
        if (fn2 === null)
          return;
        var callFn = fn2;
        fn2 = null;
        callFn.apply(this, args);
      }
      Object.assign(wrapper, fn2);
      return wrapper;
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/getIterator.js
var require_getIterator = __commonJS({
  "node_modules/async/internal/getIterator.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(coll) {
      return coll[Symbol.iterator] && coll[Symbol.iterator]();
    };
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/iterator.js
var require_iterator = __commonJS({
  "node_modules/async/internal/iterator.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createIterator;
    var _isArrayLike = require_isArrayLike();
    var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
    var _getIterator = require_getIterator();
    var _getIterator2 = _interopRequireDefault(_getIterator);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function createArrayIterator(coll) {
      var i2 = -1;
      var len = coll.length;
      return function next() {
        return ++i2 < len ? { value: coll[i2], key: i2 } : null;
      };
    }
    function createES2015Iterator(iterator) {
      var i2 = -1;
      return function next() {
        var item = iterator.next();
        if (item.done)
          return null;
        i2++;
        return { value: item.value, key: i2 };
      };
    }
    function createObjectIterator(obj) {
      var okeys = obj ? Object.keys(obj) : [];
      var i2 = -1;
      var len = okeys.length;
      return function next() {
        var key = okeys[++i2];
        if (key === "__proto__") {
          return next();
        }
        return i2 < len ? { value: obj[key], key } : null;
      };
    }
    function createIterator(coll) {
      if ((0, _isArrayLike2.default)(coll)) {
        return createArrayIterator(coll);
      }
      var iterator = (0, _getIterator2.default)(coll);
      return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/onlyOnce.js
var require_onlyOnce = __commonJS({
  "node_modules/async/internal/onlyOnce.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = onlyOnce;
    function onlyOnce(fn2) {
      return function(...args) {
        if (fn2 === null)
          throw new Error("Callback was already called.");
        var callFn = fn2;
        fn2 = null;
        callFn.apply(this, args);
      };
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/breakLoop.js
var require_breakLoop = __commonJS({
  "node_modules/async/internal/breakLoop.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var breakLoop = {};
    exports.default = breakLoop;
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/asyncEachOfLimit.js
var require_asyncEachOfLimit = __commonJS({
  "node_modules/async/internal/asyncEachOfLimit.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = asyncEachOfLimit;
    var _breakLoop = require_breakLoop();
    var _breakLoop2 = _interopRequireDefault(_breakLoop);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function asyncEachOfLimit(generator, limit, iteratee, callback) {
      let done = false;
      let canceled = false;
      let awaiting = false;
      let running = 0;
      let idx = 0;
      function replenish() {
        if (running >= limit || awaiting || done)
          return;
        awaiting = true;
        generator.next().then(({ value, done: iterDone }) => {
          if (canceled || done)
            return;
          awaiting = false;
          if (iterDone) {
            done = true;
            if (running <= 0) {
              callback(null);
            }
            return;
          }
          running++;
          iteratee(value, idx, iterateeCallback);
          idx++;
          replenish();
        }).catch(handleError);
      }
      function iterateeCallback(err, result) {
        running -= 1;
        if (canceled)
          return;
        if (err)
          return handleError(err);
        if (err === false) {
          done = true;
          canceled = true;
          return;
        }
        if (result === _breakLoop2.default || done && running <= 0) {
          done = true;
          return callback(null);
        }
        replenish();
      }
      function handleError(err) {
        if (canceled)
          return;
        awaiting = false;
        done = true;
        callback(err);
      }
      replenish();
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/eachOfLimit.js
var require_eachOfLimit = __commonJS({
  "node_modules/async/internal/eachOfLimit.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _once = require_once();
    var _once2 = _interopRequireDefault(_once);
    var _iterator = require_iterator();
    var _iterator2 = _interopRequireDefault(_iterator);
    var _onlyOnce = require_onlyOnce();
    var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
    var _wrapAsync = require_wrapAsync();
    var _asyncEachOfLimit = require_asyncEachOfLimit();
    var _asyncEachOfLimit2 = _interopRequireDefault(_asyncEachOfLimit);
    var _breakLoop = require_breakLoop();
    var _breakLoop2 = _interopRequireDefault(_breakLoop);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = (limit) => {
      return (obj, iteratee, callback) => {
        callback = (0, _once2.default)(callback);
        if (limit <= 0) {
          throw new RangeError("concurrency limit cannot be less than 1");
        }
        if (!obj) {
          return callback(null);
        }
        if ((0, _wrapAsync.isAsyncGenerator)(obj)) {
          return (0, _asyncEachOfLimit2.default)(obj, limit, iteratee, callback);
        }
        if ((0, _wrapAsync.isAsyncIterable)(obj)) {
          return (0, _asyncEachOfLimit2.default)(obj[Symbol.asyncIterator](), limit, iteratee, callback);
        }
        var nextElem = (0, _iterator2.default)(obj);
        var done = false;
        var canceled = false;
        var running = 0;
        var looping = false;
        function iterateeCallback(err, value) {
          if (canceled)
            return;
          running -= 1;
          if (err) {
            done = true;
            callback(err);
          } else if (err === false) {
            done = true;
            canceled = true;
          } else if (value === _breakLoop2.default || done && running <= 0) {
            done = true;
            return callback(null);
          } else if (!looping) {
            replenish();
          }
        }
        function replenish() {
          looping = true;
          while (running < limit && !done) {
            var elem = nextElem();
            if (elem === null) {
              done = true;
              if (running <= 0) {
                callback(null);
              }
              return;
            }
            running += 1;
            iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
          }
          looping = false;
        }
        replenish();
      };
    };
    module2.exports = exports["default"];
  }
});

// node_modules/async/eachOfLimit.js
var require_eachOfLimit2 = __commonJS({
  "node_modules/async/eachOfLimit.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _eachOfLimit2 = require_eachOfLimit();
    var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);
    var _wrapAsync = require_wrapAsync();
    var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
    var _awaitify = require_awaitify();
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function eachOfLimit(coll, limit, iteratee, callback) {
      return (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
    }
    exports.default = (0, _awaitify2.default)(eachOfLimit, 4);
    module2.exports = exports["default"];
  }
});

// node_modules/async/eachOfSeries.js
var require_eachOfSeries = __commonJS({
  "node_modules/async/eachOfSeries.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _eachOfLimit = require_eachOfLimit2();
    var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
    var _awaitify = require_awaitify();
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function eachOfSeries(coll, iteratee, callback) {
      return (0, _eachOfLimit2.default)(coll, 1, iteratee, callback);
    }
    exports.default = (0, _awaitify2.default)(eachOfSeries, 3);
    module2.exports = exports["default"];
  }
});

// node_modules/async/series.js
var require_series = __commonJS({
  "node_modules/async/series.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = series;
    var _parallel2 = require_parallel();
    var _parallel3 = _interopRequireDefault(_parallel2);
    var _eachOfSeries = require_eachOfSeries();
    var _eachOfSeries2 = _interopRequireDefault(_eachOfSeries);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function series(tasks, callback) {
      return (0, _parallel3.default)(_eachOfSeries2.default, tasks, callback);
    }
    module2.exports = exports["default"];
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module2) {
    "use strict";
    module2.exports = Transform;
    var _require$codes = require_errors2().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n2) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming)
        throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module2) {
    "use strict";
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module2) {
    "use strict";
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors2().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop3(err) {
      if (err)
        throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0)
        eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err)
          return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed)
          return;
        if (destroyed)
          return;
        destroyed = true;
        if (isRequest(stream))
          return stream.abort();
        if (typeof stream.destroy === "function")
          return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call2(fn2) {
      fn2();
    }
    function pipe(from, to) {
      return from.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length)
        return noop3;
      if (typeof streams[streams.length - 1] !== "function")
        return noop3;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0]))
        streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i2) {
        var reading = i2 < streams.length - 1;
        var writing = i2 > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error)
            error = err;
          if (err)
            destroys.forEach(call2);
          if (reading)
            return;
          destroys.forEach(call2);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module2.exports = pipeline;
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports, module2) {
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream.Readable;
      Object.assign(module2.exports, Stream);
      module2.exports.Stream = Stream;
    } else {
      exports = module2.exports = require_stream_readable();
      exports.Stream = Stream || exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
      exports.finished = require_end_of_stream();
      exports.pipeline = require_pipeline();
    }
  }
});

// node_modules/@dabh/diagnostics/diagnostics.js
var require_diagnostics = __commonJS({
  "node_modules/@dabh/diagnostics/diagnostics.js"(exports, module2) {
    var adapters = [];
    var modifiers = [];
    var logger = function devnull() {
    };
    function use2(adapter) {
      if (~adapters.indexOf(adapter))
        return false;
      adapters.push(adapter);
      return true;
    }
    function set3(custom2) {
      logger = custom2;
    }
    function enabled(namespace) {
      var async = [];
      for (var i2 = 0; i2 < adapters.length; i2++) {
        if (adapters[i2].async) {
          async.push(adapters[i2]);
          continue;
        }
        if (adapters[i2](namespace))
          return true;
      }
      if (!async.length)
        return false;
      return new Promise(function pinky(resolve2) {
        Promise.all(
          async.map(function prebind(fn2) {
            return fn2(namespace);
          })
        ).then(function resolved(values) {
          resolve2(values.some(Boolean));
        });
      });
    }
    function modify(fn2) {
      if (~modifiers.indexOf(fn2))
        return false;
      modifiers.push(fn2);
      return true;
    }
    function write() {
      logger.apply(logger, arguments);
    }
    function process2(message) {
      for (var i2 = 0; i2 < modifiers.length; i2++) {
        message = modifiers[i2].apply(modifiers[i2], arguments);
      }
      return message;
    }
    function introduce(fn2, options) {
      var has2 = Object.prototype.hasOwnProperty;
      for (var key in options) {
        if (has2.call(options, key)) {
          fn2[key] = options[key];
        }
      }
      return fn2;
    }
    function nope(options) {
      options.enabled = false;
      options.modify = modify;
      options.set = set3;
      options.use = use2;
      return introduce(function diagnopes() {
        return false;
      }, options);
    }
    function yep(options) {
      function diagnostics() {
        var args = Array.prototype.slice.call(arguments, 0);
        write.call(write, options, process2(args, options));
        return true;
      }
      options.enabled = true;
      options.modify = modify;
      options.set = set3;
      options.use = use2;
      return introduce(diagnostics, options);
    }
    module2.exports = function create(diagnostics) {
      diagnostics.introduce = introduce;
      diagnostics.enabled = enabled;
      diagnostics.process = process2;
      diagnostics.modify = modify;
      diagnostics.write = write;
      diagnostics.nope = nope;
      diagnostics.yep = yep;
      diagnostics.set = set3;
      diagnostics.use = use2;
      return diagnostics;
    };
  }
});

// node_modules/@dabh/diagnostics/node/production.js
var require_production = __commonJS({
  "node_modules/@dabh/diagnostics/node/production.js"(exports, module2) {
    var create = require_diagnostics();
    var diagnostics = create(function prod(namespace, options) {
      options = options || {};
      options.namespace = namespace;
      options.prod = true;
      options.dev = false;
      if (!(options.force || prod.force))
        return prod.nope(options);
      return prod.yep(options);
    });
    module2.exports = diagnostics;
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/is-arrayish/index.js"(exports, module2) {
    module2.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports, module2) {
    "use strict";
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice2 = Array.prototype.slice;
    var swizzle = module2.exports = function swizzle2(args) {
      var results = [];
      for (var i2 = 0, len = args.length; i2 < len; i2++) {
        var arg = args[i2];
        if (isArrayish(arg)) {
          results = concat.call(results, slice2.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn2) {
      return function() {
        return fn2(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports, module2) {
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module2.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string3) {
      var prefix = string3.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string3);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string3);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string3);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string3) {
      if (!string3) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex2 = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i2;
      var hexAlpha;
      if (match = string3.match(hex2)) {
        hexAlpha = match[2];
        match = match[1];
        for (i2 = 0; i2 < 3; i2++) {
          var i22 = i2 * 2;
          rgb[i2] = parseInt(match.slice(i22, i22 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string3.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2] + match[i2], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string3.match(rgba)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2 + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string3.match(per)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Math.round(parseFloat(match[i2 + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string3.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i2 = 0; i2 < 3; i2++) {
        rgb[i2] = clamp(rgb[i2], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string3) {
      if (!string3) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string3.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l2 = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l2, a];
      }
      return null;
    };
    cs.get.hwb = function(string3) {
      if (!string3) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string3.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b2 = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b2, a];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r = Math.round(rgba[0] / 255 * 100);
      var g2 = Math.round(rgba[1] / 255 * 100);
      var b2 = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/color/node_modules/color-name/index.js
var require_color_name2 = __commonJS({
  "node_modules/color/node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color/node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_color_name2();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g2 = rgb[1] / 255;
      var b2 = rgb[2] / 255;
      var min = Math.min(r, g2, b2);
      var max = Math.max(r, g2, b2);
      var delta = max - min;
      var h;
      var s;
      var l2;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g2 - b2) / delta;
      } else if (g2 === max) {
        h = 2 + (b2 - r) / delta;
      } else if (b2 === max) {
        h = 4 + (r - g2) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l2 = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l2 <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l2 * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g2 = rgb[1] / 255;
      var b2 = rgb[2] / 255;
      var v = Math.max(r, g2, b2);
      var diff2 = v - Math.min(r, g2, b2);
      var diffc = function(c) {
        return (v - c) / 6 / diff2 + 1 / 2;
      };
      if (diff2 === 0) {
        h = s = 0;
      } else {
        s = diff2 / v;
        rdif = diffc(r);
        gdif = diffc(g2);
        bdif = diffc(b2);
        if (r === v) {
          h = bdif - gdif;
        } else if (g2 === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b2 === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g2 = rgb[1];
      var b2 = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g2, b2));
      b2 = 1 - 1 / 255 * Math.max(r, Math.max(g2, b2));
      return [h, w * 100, b2 * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g2 = rgb[1] / 255;
      var b2 = rgb[2] / 255;
      var c;
      var m2;
      var y2;
      var k;
      k = Math.min(1 - r, 1 - g2, 1 - b2);
      c = (1 - r - k) / (1 - k) || 0;
      m2 = (1 - g2 - k) / (1 - k) || 0;
      y2 = (1 - b2 - k) / (1 - k) || 0;
      return [c * 100, m2 * 100, y2 * 100, k * 100];
    };
    function comparativeDistance(x, y2) {
      return Math.pow(x[0] - y2[0], 2) + Math.pow(x[1] - y2[1], 2) + Math.pow(x[2] - y2[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g2 = rgb[1] / 255;
      var b2 = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g2 = g2 > 0.04045 ? Math.pow((g2 + 0.055) / 1.055, 2.4) : g2 / 12.92;
      b2 = b2 > 0.04045 ? Math.pow((b2 + 0.055) / 1.055, 2.4) : b2 / 12.92;
      var x = r * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
      var y2 = r * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
      var z = r * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
      return [x * 100, y2 * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y2 = xyz[1];
      var z = xyz[2];
      var l2;
      var a;
      var b2;
      x /= 95.047;
      y2 /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y2 = y2 > 8856e-6 ? Math.pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l2 = 116 * y2 - 16;
      a = 500 * (x - y2);
      b2 = 200 * (y2 - z);
      return [l2, a, b2];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l2 = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l2 * 255;
        return [val, val, val];
      }
      if (l2 < 0.5) {
        t2 = l2 * (1 + s);
      } else {
        t2 = l2 + s - l2 * s;
      }
      t1 = 2 * l2 - t2;
      rgb = [0, 0, 0];
      for (var i2 = 0; i2 < 3; i2++) {
        t3 = h + 1 / 3 * -(i2 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i2] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l2 = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l2, 0.01);
      var sv;
      var v;
      l2 *= 2;
      s *= l2 <= 1 ? l2 : 2 - l2;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l2 + s) / 2;
      sv = l2 === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l2 + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f2 = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f2);
      var t = 255 * v * (1 - s * (1 - f2));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l2;
      l2 = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l2 /= 2;
      return [h, sl * 100, l2 * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i2;
      var v;
      var f2;
      var n2;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i2 = Math.floor(6 * h);
      v = 1 - bl;
      f2 = 6 * h - i2;
      if ((i2 & 1) !== 0) {
        f2 = 1 - f2;
      }
      n2 = wh + f2 * (v - wh);
      var r;
      var g2;
      var b2;
      switch (i2) {
        default:
        case 6:
        case 0:
          r = v;
          g2 = n2;
          b2 = wh;
          break;
        case 1:
          r = n2;
          g2 = v;
          b2 = wh;
          break;
        case 2:
          r = wh;
          g2 = v;
          b2 = n2;
          break;
        case 3:
          r = wh;
          g2 = n2;
          b2 = v;
          break;
        case 4:
          r = n2;
          g2 = wh;
          b2 = v;
          break;
        case 5:
          r = v;
          g2 = wh;
          b2 = n2;
          break;
      }
      return [r * 255, g2 * 255, b2 * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m2 = cmyk[1] / 100;
      var y2 = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g2;
      var b2;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g2 = 1 - Math.min(1, m2 * (1 - k) + k);
      b2 = 1 - Math.min(1, y2 * (1 - k) + k);
      return [r * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y2 = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g2;
      var b2;
      r = x * 3.2406 + y2 * -1.5372 + z * -0.4986;
      g2 = x * -0.9689 + y2 * 1.8758 + z * 0.0415;
      b2 = x * 0.0557 + y2 * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g2 = g2 > 31308e-7 ? 1.055 * Math.pow(g2, 1 / 2.4) - 0.055 : g2 * 12.92;
      b2 = b2 > 31308e-7 ? 1.055 * Math.pow(b2, 1 / 2.4) - 0.055 : b2 * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g2 = Math.min(Math.max(0, g2), 1);
      b2 = Math.min(Math.max(0, b2), 1);
      return [r * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y2 = xyz[1];
      var z = xyz[2];
      var l2;
      var a;
      var b2;
      x /= 95.047;
      y2 /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y2 = y2 > 8856e-6 ? Math.pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l2 = 116 * y2 - 16;
      a = 500 * (x - y2);
      b2 = 200 * (y2 - z);
      return [l2, a, b2];
    };
    convert.lab.xyz = function(lab) {
      var l2 = lab[0];
      var a = lab[1];
      var b2 = lab[2];
      var x;
      var y2;
      var z;
      y2 = (l2 + 16) / 116;
      x = a / 500 + y2;
      z = y2 - b2 / 200;
      var y22 = Math.pow(y2, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y2 *= 100;
      z *= 108.883;
      return [x, y2, z];
    };
    convert.lab.lch = function(lab) {
      var l2 = lab[0];
      var a = lab[1];
      var b2 = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b2, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b2 * b2);
      return [l2, c, h];
    };
    convert.lch.lab = function(lch) {
      var l2 = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b2;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b2 = c * Math.sin(hr);
      return [l2, a, b2];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g2 = args[1];
      var b2 = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g2 = args[1];
      var b2 = args[2];
      if (r === g2 && g2 === b2) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g2 = (color >> 1 & 1) * mult * 255;
      var b2 = (color >> 2 & 1) * mult * 255;
      return [r, g2, b2];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b2 = rem % 6 / 5 * 255;
      return [r, g2, b2];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string3 = integer.toString(16).toUpperCase();
      return "000000".substring(string3.length) + string3;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g2 = integer >> 8 & 255;
      var b2 = integer & 255;
      return [r, g2, b2];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g2 = rgb[1] / 255;
      var b2 = rgb[2] / 255;
      var max = Math.max(Math.max(r, g2), b2);
      var min = Math.min(Math.min(r, g2), b2);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g2 - b2) / chroma % 6;
      } else if (max === g2) {
        hue = 2 + (b2 - r) / chroma;
      } else {
        hue = 4 + (r - g2) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l2 = hsl[2] / 100;
      var c = 1;
      var f2 = 0;
      if (l2 < 0.5) {
        c = 2 * s * l2;
      } else {
        c = 2 * s * (1 - l2);
      }
      if (c < 1) {
        f2 = (l2 - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f2 * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f2 = 0;
      if (c < 1) {
        f2 = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f2 * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g2 = hcg[2] / 100;
      if (c === 0) {
        return [g2 * 255, g2 * 255, g2 * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g2;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g2 = hcg[2] / 100;
      var v = c + g2 * (1 - c);
      var f2 = 0;
      if (v > 0) {
        f2 = c / v;
      }
      return [hcg[0], f2 * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g2 = hcg[2] / 100;
      var l2 = g2 * (1 - c) + 0.5 * c;
      var s = 0;
      if (l2 > 0 && l2 < 0.5) {
        s = c / (2 * l2);
      } else if (l2 >= 0.5 && l2 < 1) {
        s = c / (2 * (1 - l2));
      }
      return [hcg[0], s * 100, l2 * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g2 = hcg[2] / 100;
      var v = c + g2 * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b2 = hwb[2] / 100;
      var v = 1 - b2;
      var c = v - w;
      var g2 = 0;
      if (c < 1) {
        g2 = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g2 * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string3 = integer.toString(16).toUpperCase();
      return "000000".substring(string3.length) + string3;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color/node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color/node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i2 = 0; i2 < len; i2++) {
        graph[models[i2]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i2 = 0; i2 < len; i2++) {
          var adjacent = adjacents[i2];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn2 = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn2 = link(conversions[graph[cur].parent][cur], fn2);
        cur = graph[cur].parent;
      }
      fn2.conversion = path;
      return fn2;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i2 = 0; i2 < len; i2++) {
        var toModel = models[i2];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color/node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn2) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn2(args);
      };
      if ("conversion" in fn2) {
        wrappedFn.conversion = fn2.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn2) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn2(args);
        if (typeof result === "object") {
          for (var len = result.length, i2 = 0; i2 < len; i2++) {
            result[i2] = Math.round(result[i2]);
          }
        }
        return result;
      };
      if ("conversion" in fn2) {
        wrappedFn.conversion = fn2.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn2 = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn2);
        convert[fromModel][toModel].raw = wrapRaw(fn2);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports, module2) {
    "use strict";
    var colorString = require_color_string();
    var convert = require_color_convert();
    var _slice = [].slice;
    var skippedModels = [
      // to be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // gray conflicts with some method names, and has its own method defined.
      "gray",
      // shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    Object.keys(convert).forEach(function(model) {
      hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model;
    });
    var limiters = {};
    function Color(obj, model) {
      if (!(this instanceof Color)) {
        return new Color(obj, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      var i2;
      var channels;
      if (obj == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (obj instanceof Color) {
        this.model = obj.model;
        this.color = obj.color.slice();
        this.valpha = obj.valpha;
      } else if (typeof obj === "string") {
        var result = colorString.get(obj);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + obj);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (obj.length) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        var newArr = _slice.call(obj, 0, channels);
        this.color = zeroArray(newArr, channels);
        this.valpha = typeof obj[channels] === "number" ? obj[channels] : 1;
      } else if (typeof obj === "number") {
        obj &= 16777215;
        this.model = "rgb";
        this.color = [
          obj >> 16 & 255,
          obj >> 8 & 255,
          obj & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        var keys2 = Object.keys(obj);
        if ("alpha" in obj) {
          keys2.splice(keys2.indexOf("alpha"), 1);
          this.valpha = typeof obj.alpha === "number" ? obj.alpha : 0;
        }
        var hashedKeys = keys2.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(obj));
        }
        this.model = hashedModelKeys[hashedKeys];
        var labels = convert[this.model].labels;
        var color = [];
        for (i2 = 0; i2 < labels.length; i2++) {
          color.push(obj[labels[i2]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i2 = 0; i2 < channels; i2++) {
          var limit = limiters[this.model][i2];
          if (limit) {
            this.color[i2] = limit(this.color[i2]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color.prototype = {
      toString: function() {
        return this.string();
      },
      toJSON: function() {
        return this[this.model]();
      },
      string: function(places) {
        var self2 = this.model in colorString.to ? this : this.rgb();
        self2 = self2.round(typeof places === "number" ? places : 1);
        var args = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
        return colorString.to[self2.model](args);
      },
      percentString: function(places) {
        var self2 = this.rgb().round(typeof places === "number" ? places : 1);
        var args = self2.valpha === 1 ? self2.color : self2.color.concat(this.valpha);
        return colorString.to.rgb.percent(args);
      },
      array: function() {
        return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
      },
      object: function() {
        var result = {};
        var channels = convert[this.model].channels;
        var labels = convert[this.model].labels;
        for (var i2 = 0; i2 < channels; i2++) {
          result[labels[i2]] = this.color[i2];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray: function() {
        var rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject: function() {
        var rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round: function(places) {
        places = Math.max(places || 0, 0);
        return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
      },
      alpha: function(val) {
        if (arguments.length) {
          return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
        }
        return this.valpha;
      },
      // rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(val) {
        return (val % 360 + 360) % 360;
      }),
      // eslint-disable-line brace-style
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(100)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(100)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword: function(val) {
        if (arguments.length) {
          return new Color(val);
        }
        return convert[this.model].keyword(this.color);
      },
      hex: function(val) {
        if (arguments.length) {
          return new Color(val);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      rgbNumber: function() {
        var rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity: function() {
        var rgb = this.rgb().color;
        var lum = [];
        for (var i2 = 0; i2 < rgb.length; i2++) {
          var chan = rgb[i2] / 255;
          lum[i2] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast: function(color2) {
        var lum1 = this.luminosity();
        var lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level: function(color2) {
        var contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7.1) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark: function() {
        var rgb = this.rgb().color;
        var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
        return yiq < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      negate: function() {
        var rgb = this.rgb();
        for (var i2 = 0; i2 < 3; i2++) {
          rgb.color[i2] = 255 - rgb.color[i2];
        }
        return rgb;
      },
      lighten: function(ratio) {
        var hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken: function(ratio) {
        var hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate: function(ratio) {
        var hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate: function(ratio) {
        var hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten: function(ratio) {
        var hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken: function(ratio) {
        var hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale: function() {
        var rgb = this.rgb().color;
        var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(val, val, val);
      },
      fade: function(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer: function(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate: function(degrees) {
        var hsl = this.hsl();
        var hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix: function(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        var color1 = mixinColor.rgb();
        var color2 = this.rgb();
        var p = weight === void 0 ? 0.5 : weight;
        var w = 2 * p - 1;
        var a = color1.alpha() - color2.alpha();
        var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        var w2 = 1 - w1;
        return Color.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    Object.keys(convert).forEach(function(model) {
      if (skippedModels.indexOf(model) !== -1) {
        return;
      }
      var channels = convert[model].channels;
      Color.prototype[model] = function() {
        if (this.model === model) {
          return new Color(this);
        }
        if (arguments.length) {
          return new Color(arguments, model);
        }
        var newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
        return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
      };
      Color[model] = function(color) {
        if (typeof color === "number") {
          color = zeroArray(_slice.call(arguments), channels);
        }
        return new Color(color, model);
      };
    });
    function roundTo(num, places) {
      return Number(num.toFixed(places));
    }
    function roundToPlace(places) {
      return function(num) {
        return roundTo(num, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      model.forEach(function(m2) {
        (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
      });
      model = model[0];
      return function(val) {
        var result;
        if (arguments.length) {
          if (modifier) {
            val = modifier(val);
          }
          result = this[model]();
          result.color[channel] = val;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    function assertArray(val) {
      return Array.isArray(val) ? val : [val];
    }
    function zeroArray(arr, length) {
      for (var i2 = 0; i2 < length; i2++) {
        if (typeof arr[i2] !== "number") {
          arr[i2] = 0;
        }
      }
      return arr;
    }
    module2.exports = Color;
  }
});

// node_modules/text-hex/index.js
var require_text_hex = __commonJS({
  "node_modules/text-hex/index.js"(exports, module2) {
    "use strict";
    module2.exports = function hex2(str) {
      for (var i2 = 0, hash = 0; i2 < str.length; hash = str.charCodeAt(i2++) + ((hash << 5) - hash))
        ;
      var color = Math.floor(
        Math.abs(
          Math.sin(hash) * 1e4 % 1 * 16777216
        )
      ).toString(16);
      return "#" + Array(6 - color.length + 1).join("0") + color;
    };
  }
});

// node_modules/colorspace/index.js
var require_colorspace = __commonJS({
  "node_modules/colorspace/index.js"(exports, module2) {
    "use strict";
    var color = require_color();
    var hex2 = require_text_hex();
    module2.exports = function colorspace(namespace, delimiter) {
      var split = namespace.split(delimiter || ":");
      var base = hex2(split[0]);
      if (!split.length)
        return base;
      for (var i2 = 0, l2 = split.length - 1; i2 < l2; i2++) {
        base = color(base).mix(color(hex2(split[i2 + 1]))).saturate(1).hex();
      }
      return base;
    };
  }
});

// node_modules/kuler/index.js
var require_kuler = __commonJS({
  "node_modules/kuler/index.js"(exports, module2) {
    "use strict";
    function Kuler(text, color) {
      if (color)
        return new Kuler(text).style(color);
      if (!(this instanceof Kuler))
        return new Kuler(text);
      this.text = text;
    }
    Kuler.prototype.prefix = "\x1B[";
    Kuler.prototype.suffix = "m";
    Kuler.prototype.hex = function hex2(color) {
      color = color[0] === "#" ? color.substring(1) : color;
      if (color.length === 3) {
        color = color.split("");
        color[5] = color[2];
        color[4] = color[2];
        color[3] = color[1];
        color[2] = color[1];
        color[1] = color[0];
        color = color.join("");
      }
      var r = color.substring(0, 2), g2 = color.substring(2, 4), b2 = color.substring(4, 6);
      return [parseInt(r, 16), parseInt(g2, 16), parseInt(b2, 16)];
    };
    Kuler.prototype.rgb = function rgb(r, g2, b2) {
      var red = r / 255 * 5, green = g2 / 255 * 5, blue = b2 / 255 * 5;
      return this.ansi(red, green, blue);
    };
    Kuler.prototype.ansi = function ansi(r, g2, b2) {
      var red = Math.round(r), green = Math.round(g2), blue = Math.round(b2);
      return 16 + red * 36 + green * 6 + blue;
    };
    Kuler.prototype.reset = function reset() {
      return this.prefix + "39;49" + this.suffix;
    };
    Kuler.prototype.style = function style(color) {
      return this.prefix + "38;5;" + this.rgb.apply(this, this.hex(color)) + this.suffix + this.text + this.reset();
    };
    module2.exports = Kuler;
  }
});

// node_modules/@dabh/diagnostics/modifiers/namespace-ansi.js
var require_namespace_ansi = __commonJS({
  "node_modules/@dabh/diagnostics/modifiers/namespace-ansi.js"(exports, module2) {
    var colorspace = require_colorspace();
    var kuler = require_kuler();
    module2.exports = function ansiModifier(args, options) {
      var namespace = options.namespace;
      var ansi = options.colors !== false ? kuler(namespace + ":", colorspace(namespace)) : namespace + ":";
      args[0] = ansi + " " + args[0];
      return args;
    };
  }
});

// node_modules/enabled/index.js
var require_enabled = __commonJS({
  "node_modules/enabled/index.js"(exports, module2) {
    "use strict";
    module2.exports = function enabled(name, variable) {
      if (!variable)
        return false;
      var variables = variable.split(/[\s,]+/), i2 = 0;
      for (; i2 < variables.length; i2++) {
        variable = variables[i2].replace("*", ".*?");
        if ("-" === variable.charAt(0)) {
          if (new RegExp("^" + variable.substr(1) + "$").test(name)) {
            return false;
          }
          continue;
        }
        if (new RegExp("^" + variable + "$").test(name)) {
          return true;
        }
      }
      return false;
    };
  }
});

// node_modules/@dabh/diagnostics/adapters/index.js
var require_adapters = __commonJS({
  "node_modules/@dabh/diagnostics/adapters/index.js"(exports, module2) {
    var enabled = require_enabled();
    module2.exports = function create(fn2) {
      return function adapter(namespace) {
        try {
          return enabled(namespace, fn2());
        } catch (e) {
        }
        return false;
      };
    };
  }
});

// node_modules/@dabh/diagnostics/adapters/process.env.js
var require_process_env = __commonJS({
  "node_modules/@dabh/diagnostics/adapters/process.env.js"(exports, module2) {
    var adapter = require_adapters();
    module2.exports = adapter(function processenv() {
      return process.env.DEBUG || process.env.DIAGNOSTICS;
    });
  }
});

// node_modules/@dabh/diagnostics/logger/console.js
var require_console2 = __commonJS({
  "node_modules/@dabh/diagnostics/logger/console.js"(exports, module2) {
    module2.exports = function(meta, messages) {
      try {
        Function.prototype.apply.call(console.log, console, messages);
      } catch (e) {
      }
    };
  }
});

// node_modules/@dabh/diagnostics/node/development.js
var require_development = __commonJS({
  "node_modules/@dabh/diagnostics/node/development.js"(exports, module2) {
    var create = require_diagnostics();
    var tty = require("tty").isatty(1);
    var diagnostics = create(function dev(namespace, options) {
      options = options || {};
      options.colors = "colors" in options ? options.colors : tty;
      options.namespace = namespace;
      options.prod = false;
      options.dev = true;
      if (!dev.enabled(namespace) && !(options.force || dev.force)) {
        return dev.nope(options);
      }
      return dev.yep(options);
    });
    diagnostics.modify(require_namespace_ansi());
    diagnostics.use(require_process_env());
    diagnostics.set(require_console2());
    module2.exports = diagnostics;
  }
});

// node_modules/@dabh/diagnostics/node/index.js
var require_node2 = __commonJS({
  "node_modules/@dabh/diagnostics/node/index.js"(exports, module2) {
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_production();
    } else {
      module2.exports = require_development();
    }
  }
});

// node_modules/winston/lib/winston/tail-file.js
var require_tail_file = __commonJS({
  "node_modules/winston/lib/winston/tail-file.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var { StringDecoder } = require("string_decoder");
    var { Stream } = require_readable();
    function noop3() {
    }
    module2.exports = (options, iter) => {
      const buffer = Buffer.alloc(64 * 1024);
      const decode3 = new StringDecoder("utf8");
      const stream = new Stream();
      let buff = "";
      let pos = 0;
      let row = 0;
      if (options.start === -1) {
        delete options.start;
      }
      stream.readable = true;
      stream.destroy = () => {
        stream.destroyed = true;
        stream.emit("end");
        stream.emit("close");
      };
      fs.open(options.file, "a+", "0644", (err, fd) => {
        if (err) {
          if (!iter) {
            stream.emit("error", err);
          } else {
            iter(err);
          }
          stream.destroy();
          return;
        }
        (function read() {
          if (stream.destroyed) {
            fs.close(fd, noop3);
            return;
          }
          return fs.read(fd, buffer, 0, buffer.length, pos, (error, bytes) => {
            if (error) {
              if (!iter) {
                stream.emit("error", error);
              } else {
                iter(error);
              }
              stream.destroy();
              return;
            }
            if (!bytes) {
              if (buff) {
                if (options.start == null || row > options.start) {
                  if (!iter) {
                    stream.emit("line", buff);
                  } else {
                    iter(null, buff);
                  }
                }
                row++;
                buff = "";
              }
              return setTimeout(read, 1e3);
            }
            let data = decode3.write(buffer.slice(0, bytes));
            if (!iter) {
              stream.emit("data", data);
            }
            data = (buff + data).split(/\n+/);
            const l2 = data.length - 1;
            let i2 = 0;
            for (; i2 < l2; i2++) {
              if (options.start == null || row > options.start) {
                if (!iter) {
                  stream.emit("line", data[i2]);
                } else {
                  iter(null, data[i2]);
                }
              }
              row++;
            }
            buff = data[l2];
            pos += bytes;
            return read();
          });
        })();
      });
      if (!iter) {
        return stream;
      }
      return stream.destroy;
    };
  }
});

// node_modules/winston/lib/winston/transports/file.js
var require_file = __commonJS({
  "node_modules/winston/lib/winston/transports/file.js"(exports, module2) {
    "use strict";
    var fs = require("fs");
    var path = require("path");
    var asyncSeries = require_series();
    var zlib = require("zlib");
    var { MESSAGE } = require_triple_beam();
    var { Stream, PassThrough } = require_readable();
    var TransportStream = require_winston_transport();
    var debug = require_node2()("winston:file");
    var os = require("os");
    var tailFile = require_tail_file();
    module2.exports = class File extends TransportStream {
      /**
       * Constructor function for the File transport object responsible for
       * persisting log messages and metadata to one or more files.
       * @param {Object} options - Options for this instance.
       */
      constructor(options = {}) {
        super(options);
        this.name = options.name || "file";
        function throwIf(target, ...args) {
          args.slice(1).forEach((name) => {
            if (options[name]) {
              throw new Error(`Cannot set ${name} and ${target} together`);
            }
          });
        }
        this._stream = new PassThrough();
        this._stream.setMaxListeners(30);
        this._onError = this._onError.bind(this);
        if (options.filename || options.dirname) {
          throwIf("filename or dirname", "stream");
          this._basename = this.filename = options.filename ? path.basename(options.filename) : "winston.log";
          this.dirname = options.dirname || path.dirname(options.filename);
          this.options = options.options || { flags: "a" };
        } else if (options.stream) {
          console.warn("options.stream will be removed in winston@4. Use winston.transports.Stream");
          throwIf("stream", "filename", "maxsize");
          this._dest = this._stream.pipe(this._setupStream(options.stream));
          this.dirname = path.dirname(this._dest.path);
        } else {
          throw new Error("Cannot log to file without filename or stream.");
        }
        this.maxsize = options.maxsize || null;
        this.rotationFormat = options.rotationFormat || false;
        this.zippedArchive = options.zippedArchive || false;
        this.maxFiles = options.maxFiles || null;
        this.eol = typeof options.eol === "string" ? options.eol : os.EOL;
        this.tailable = options.tailable || false;
        this.lazy = options.lazy || false;
        this._size = 0;
        this._pendingSize = 0;
        this._created = 0;
        this._drain = false;
        this._opening = false;
        this._ending = false;
        this._fileExist = false;
        if (this.dirname)
          this._createLogDirIfNotExist(this.dirname);
        if (!this.lazy)
          this.open();
      }
      finishIfEnding() {
        if (this._ending) {
          if (this._opening) {
            this.once("open", () => {
              this._stream.once("finish", () => this.emit("finish"));
              setImmediate(() => this._stream.end());
            });
          } else {
            this._stream.once("finish", () => this.emit("finish"));
            setImmediate(() => this._stream.end());
          }
        }
      }
      /**
       * Core logging method exposed to Winston. Metadata is optional.
       * @param {Object} info - TODO: add param description.
       * @param {Function} callback - TODO: add param description.
       * @returns {undefined}
       */
      log(info, callback = () => {
      }) {
        if (this.silent) {
          callback();
          return true;
        }
        if (this._drain) {
          this._stream.once("drain", () => {
            this._drain = false;
            this.log(info, callback);
          });
          return;
        }
        if (this._rotate) {
          this._stream.once("rotate", () => {
            this._rotate = false;
            this.log(info, callback);
          });
          return;
        }
        if (this.lazy) {
          if (!this._fileExist) {
            if (!this._opening) {
              this.open();
            }
            this.once("open", () => {
              this._fileExist = true;
              this.log(info, callback);
              return;
            });
            return;
          }
          if (this._needsNewFile(this._pendingSize)) {
            this._dest.once("close", () => {
              if (!this._opening) {
                this.open();
              }
              this.once("open", () => {
                this.log(info, callback);
                return;
              });
              return;
            });
            return;
          }
        }
        const output = `${info[MESSAGE]}${this.eol}`;
        const bytes = Buffer.byteLength(output);
        function logged() {
          this._size += bytes;
          this._pendingSize -= bytes;
          debug("logged %s %s", this._size, output);
          this.emit("logged", info);
          if (this._rotate) {
            return;
          }
          if (this._opening) {
            return;
          }
          if (!this._needsNewFile()) {
            return;
          }
          if (this.lazy) {
            this._endStream(() => {
              this.emit("fileclosed");
            });
            return;
          }
          this._rotate = true;
          this._endStream(() => this._rotateFile());
        }
        this._pendingSize += bytes;
        if (this._opening && !this.rotatedWhileOpening && this._needsNewFile(this._size + this._pendingSize)) {
          this.rotatedWhileOpening = true;
        }
        const written = this._stream.write(output, logged.bind(this));
        if (!written) {
          this._drain = true;
          this._stream.once("drain", () => {
            this._drain = false;
            callback();
          });
        } else {
          callback();
        }
        debug("written", written, this._drain);
        this.finishIfEnding();
        return written;
      }
      /**
       * Query the transport. Options object is optional.
       * @param {Object} options - Loggly-like query options for this instance.
       * @param {function} callback - Continuation to respond to when complete.
       * TODO: Refactor me.
       */
      query(options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = normalizeQuery(options);
        const file = path.join(this.dirname, this.filename);
        let buff = "";
        let results = [];
        let row = 0;
        const stream = fs.createReadStream(file, {
          encoding: "utf8"
        });
        stream.on("error", (err) => {
          if (stream.readable) {
            stream.destroy();
          }
          if (!callback) {
            return;
          }
          return err.code !== "ENOENT" ? callback(err) : callback(null, results);
        });
        stream.on("data", (data) => {
          data = (buff + data).split(/\n+/);
          const l2 = data.length - 1;
          let i2 = 0;
          for (; i2 < l2; i2++) {
            if (!options.start || row >= options.start) {
              add(data[i2]);
            }
            row++;
          }
          buff = data[l2];
        });
        stream.on("close", () => {
          if (buff) {
            add(buff, true);
          }
          if (options.order === "desc") {
            results = results.reverse();
          }
          if (callback)
            callback(null, results);
        });
        function add(buff2, attempt) {
          try {
            const log = JSON.parse(buff2);
            if (check(log)) {
              push(log);
            }
          } catch (e) {
            if (!attempt) {
              stream.emit("error", e);
            }
          }
        }
        function push(log) {
          if (options.rows && results.length >= options.rows && options.order !== "desc") {
            if (stream.readable) {
              stream.destroy();
            }
            return;
          }
          if (options.fields) {
            log = options.fields.reduce((obj, key) => {
              obj[key] = log[key];
              return obj;
            }, {});
          }
          if (options.order === "desc") {
            if (results.length >= options.rows) {
              results.shift();
            }
          }
          results.push(log);
        }
        function check(log) {
          if (!log) {
            return;
          }
          if (typeof log !== "object") {
            return;
          }
          const time = new Date(log.timestamp);
          if (options.from && time < options.from || options.until && time > options.until || options.level && options.level !== log.level) {
            return;
          }
          return true;
        }
        function normalizeQuery(options2) {
          options2 = options2 || {};
          options2.rows = options2.rows || options2.limit || 10;
          options2.start = options2.start || 0;
          options2.until = options2.until || /* @__PURE__ */ new Date();
          if (typeof options2.until !== "object") {
            options2.until = new Date(options2.until);
          }
          options2.from = options2.from || options2.until - 24 * 60 * 60 * 1e3;
          if (typeof options2.from !== "object") {
            options2.from = new Date(options2.from);
          }
          options2.order = options2.order || "desc";
          return options2;
        }
      }
      /**
       * Returns a log stream for this transport. Options object is optional.
       * @param {Object} options - Stream options for this instance.
       * @returns {Stream} - TODO: add return description.
       * TODO: Refactor me.
       */
      stream(options = {}) {
        const file = path.join(this.dirname, this.filename);
        const stream = new Stream();
        const tail = {
          file,
          start: options.start
        };
        stream.destroy = tailFile(tail, (err, line) => {
          if (err) {
            return stream.emit("error", err);
          }
          try {
            stream.emit("data", line);
            line = JSON.parse(line);
            stream.emit("log", line);
          } catch (e) {
            stream.emit("error", e);
          }
        });
        return stream;
      }
      /**
       * Checks to see the filesize of.
       * @returns {undefined}
       */
      open() {
        if (!this.filename)
          return;
        if (this._opening)
          return;
        this._opening = true;
        this.stat((err, size) => {
          if (err) {
            return this.emit("error", err);
          }
          debug("stat done: %s { size: %s }", this.filename, size);
          this._size = size;
          this._dest = this._createStream(this._stream);
          this._opening = false;
          this.once("open", () => {
            if (this._stream.eventNames().includes("rotate")) {
              this._stream.emit("rotate");
            } else {
              this._rotate = false;
            }
          });
        });
      }
      /**
       * Stat the file and assess information in order to create the proper stream.
       * @param {function} callback - TODO: add param description.
       * @returns {undefined}
       */
      stat(callback) {
        const target = this._getFile();
        const fullpath = path.join(this.dirname, target);
        fs.stat(fullpath, (err, stat) => {
          if (err && err.code === "ENOENT") {
            debug("ENOENT\xA0ok", fullpath);
            this.filename = target;
            return callback(null, 0);
          }
          if (err) {
            debug(`err ${err.code} ${fullpath}`);
            return callback(err);
          }
          if (!stat || this._needsNewFile(stat.size)) {
            return this._incFile(() => this.stat(callback));
          }
          this.filename = target;
          callback(null, stat.size);
        });
      }
      /**
       * Closes the stream associated with this instance.
       * @param {function} cb - TODO: add param description.
       * @returns {undefined}
       */
      close(cb) {
        if (!this._stream) {
          return;
        }
        this._stream.end(() => {
          if (cb) {
            cb();
          }
          this.emit("flush");
          this.emit("closed");
        });
      }
      /**
       * TODO: add method description.
       * @param {number} size - TODO: add param description.
       * @returns {undefined}
       */
      _needsNewFile(size) {
        size = size || this._size;
        return this.maxsize && size >= this.maxsize;
      }
      /**
       * TODO: add method description.
       * @param {Error} err - TODO: add param description.
       * @returns {undefined}
       */
      _onError(err) {
        this.emit("error", err);
      }
      /**
       * TODO: add method description.
       * @param {Stream} stream - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       */
      _setupStream(stream) {
        stream.on("error", this._onError);
        return stream;
      }
      /**
       * TODO: add method description.
       * @param {Stream} stream - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       */
      _cleanupStream(stream) {
        stream.removeListener("error", this._onError);
        stream.destroy();
        return stream;
      }
      /**
       * TODO: add method description.
       */
      _rotateFile() {
        this._incFile(() => this.open());
      }
      /**
       * Unpipe from the stream that has been marked as full and end it so it
       * flushes to disk.
       *
       * @param {function} callback - Callback for when the current file has closed.
       * @private
       */
      _endStream(callback = () => {
      }) {
        if (this._dest) {
          this._stream.unpipe(this._dest);
          this._dest.end(() => {
            this._cleanupStream(this._dest);
            callback();
          });
        } else {
          callback();
        }
      }
      /**
       * Returns the WritableStream for the active file on this instance. If we
       * should gzip the file then a zlib stream is returned.
       *
       * @param {ReadableStream} source –PassThrough to pipe to the file when open.
       * @returns {WritableStream} Stream that writes to disk for the active file.
       */
      _createStream(source) {
        const fullpath = path.join(this.dirname, this.filename);
        debug("create stream start", fullpath, this.options);
        const dest = fs.createWriteStream(fullpath, this.options).on("error", (err) => debug(err)).on("close", () => debug("close", dest.path, dest.bytesWritten)).on("open", () => {
          debug("file open ok", fullpath);
          this.emit("open", fullpath);
          source.pipe(dest);
          if (this.rotatedWhileOpening) {
            this._stream = new PassThrough();
            this._stream.setMaxListeners(30);
            this._rotateFile();
            this.rotatedWhileOpening = false;
            this._cleanupStream(dest);
            source.end();
          }
        });
        debug("create stream ok", fullpath);
        if (this.zippedArchive) {
          const gzip = zlib.createGzip();
          gzip.pipe(dest);
          return gzip;
        }
        return dest;
      }
      /**
       * TODO: add method description.
       * @param {function} callback - TODO: add param description.
       * @returns {undefined}
       */
      _incFile(callback) {
        debug("_incFile", this.filename);
        const ext = path.extname(this._basename);
        const basename = path.basename(this._basename, ext);
        if (!this.tailable) {
          this._created += 1;
          this._checkMaxFilesIncrementing(ext, basename, callback);
        } else {
          this._checkMaxFilesTailable(ext, basename, callback);
        }
      }
      /**
       * Gets the next filename to use for this instance in the case that log
       * filesizes are being capped.
       * @returns {string} - TODO: add return description.
       * @private
       */
      _getFile() {
        const ext = path.extname(this._basename);
        const basename = path.basename(this._basename, ext);
        const isRotation = this.rotationFormat ? this.rotationFormat() : this._created;
        const target = !this.tailable && this._created ? `${basename}${isRotation}${ext}` : `${basename}${ext}`;
        return this.zippedArchive && !this.tailable ? `${target}.gz` : target;
      }
      /**
       * Increment the number of files created or checked by this instance.
       * @param {mixed} ext - TODO: add param description.
       * @param {mixed} basename - TODO: add param description.
       * @param {mixed} callback - TODO: add param description.
       * @returns {undefined}
       * @private
       */
      _checkMaxFilesIncrementing(ext, basename, callback) {
        if (!this.maxFiles || this._created < this.maxFiles) {
          return setImmediate(callback);
        }
        const oldest = this._created - this.maxFiles;
        const isOldest = oldest !== 0 ? oldest : "";
        const isZipped = this.zippedArchive ? ".gz" : "";
        const filePath = `${basename}${isOldest}${ext}${isZipped}`;
        const target = path.join(this.dirname, filePath);
        fs.unlink(target, callback);
      }
      /**
       * Roll files forward based on integer, up to maxFiles. e.g. if base if
       * file.log and it becomes oversized, roll to file1.log, and allow file.log
       * to be re-used. If file is oversized again, roll file1.log to file2.log,
       * roll file.log to file1.log, and so on.
       * @param {mixed} ext - TODO: add param description.
       * @param {mixed} basename - TODO: add param description.
       * @param {mixed} callback - TODO: add param description.
       * @returns {undefined}
       * @private
       */
      _checkMaxFilesTailable(ext, basename, callback) {
        const tasks = [];
        if (!this.maxFiles) {
          return;
        }
        const isZipped = this.zippedArchive ? ".gz" : "";
        for (let x = this.maxFiles - 1; x > 1; x--) {
          tasks.push(function(i2, cb) {
            let fileName = `${basename}${i2 - 1}${ext}${isZipped}`;
            const tmppath = path.join(this.dirname, fileName);
            fs.exists(tmppath, (exists) => {
              if (!exists) {
                return cb(null);
              }
              fileName = `${basename}${i2}${ext}${isZipped}`;
              fs.rename(tmppath, path.join(this.dirname, fileName), cb);
            });
          }.bind(this, x));
        }
        asyncSeries(tasks, () => {
          fs.rename(
            path.join(this.dirname, `${basename}${ext}`),
            path.join(this.dirname, `${basename}1${ext}${isZipped}`),
            callback
          );
        });
      }
      _createLogDirIfNotExist(dirPath) {
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
      }
    };
  }
});

// node_modules/winston/lib/winston/transports/http.js
var require_http = __commonJS({
  "node_modules/winston/lib/winston/transports/http.js"(exports, module2) {
    "use strict";
    var http = require("http");
    var https = require("https");
    var { Stream } = require_readable();
    var TransportStream = require_winston_transport();
    var jsonStringify = require_safe_stable_stringify();
    module2.exports = class Http extends TransportStream {
      /**
       * Constructor function for the Http transport object responsible for
       * persisting log messages and metadata to a terminal or TTY.
       * @param {!Object} [options={}] - Options for this instance.
       */
      // eslint-disable-next-line max-statements
      constructor(options = {}) {
        super(options);
        this.options = options;
        this.name = options.name || "http";
        this.ssl = !!options.ssl;
        this.host = options.host || "localhost";
        this.port = options.port;
        this.auth = options.auth;
        this.path = options.path || "";
        this.agent = options.agent;
        this.headers = options.headers || {};
        this.headers["content-type"] = "application/json";
        this.batch = options.batch || false;
        this.batchInterval = options.batchInterval || 5e3;
        this.batchCount = options.batchCount || 10;
        this.batchOptions = [];
        this.batchTimeoutID = -1;
        this.batchCallback = {};
        if (!this.port) {
          this.port = this.ssl ? 443 : 80;
        }
      }
      /**
       * Core logging method exposed to Winston.
       * @param {Object} info - TODO: add param description.
       * @param {function} callback - TODO: add param description.
       * @returns {undefined}
       */
      log(info, callback) {
        this._request(info, null, null, (err, res) => {
          if (res && res.statusCode !== 200) {
            err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
          }
          if (err) {
            this.emit("warn", err);
          } else {
            this.emit("logged", info);
          }
        });
        if (callback) {
          setImmediate(callback);
        }
      }
      /**
       * Query the transport. Options object is optional.
       * @param {Object} options -  Loggly-like query options for this instance.
       * @param {function} callback - Continuation to respond to when complete.
       * @returns {undefined}
       */
      query(options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = {
          method: "query",
          params: this.normalizeQuery(options)
        };
        const auth = options.params.auth || null;
        delete options.params.auth;
        const path = options.params.path || null;
        delete options.params.path;
        this._request(options, auth, path, (err, res, body) => {
          if (res && res.statusCode !== 200) {
            err = new Error(`Invalid HTTP Status Code: ${res.statusCode}`);
          }
          if (err) {
            return callback(err);
          }
          if (typeof body === "string") {
            try {
              body = JSON.parse(body);
            } catch (e) {
              return callback(e);
            }
          }
          callback(null, body);
        });
      }
      /**
       * Returns a log stream for this transport. Options object is optional.
       * @param {Object} options - Stream options for this instance.
       * @returns {Stream} - TODO: add return description
       */
      stream(options = {}) {
        const stream = new Stream();
        options = {
          method: "stream",
          params: options
        };
        const path = options.params.path || null;
        delete options.params.path;
        const auth = options.params.auth || null;
        delete options.params.auth;
        let buff = "";
        const req = this._request(options, auth, path);
        stream.destroy = () => req.destroy();
        req.on("data", (data) => {
          data = (buff + data).split(/\n+/);
          const l2 = data.length - 1;
          let i2 = 0;
          for (; i2 < l2; i2++) {
            try {
              stream.emit("log", JSON.parse(data[i2]));
            } catch (e) {
              stream.emit("error", e);
            }
          }
          buff = data[l2];
        });
        req.on("error", (err) => stream.emit("error", err));
        return stream;
      }
      /**
       * Make a request to a winstond server or any http server which can
       * handle json-rpc.
       * @param {function} options - Options to sent the request.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       * @param {function} callback - Continuation to respond to when complete.
       */
      _request(options, auth, path, callback) {
        options = options || {};
        auth = auth || this.auth;
        path = path || this.path || "";
        if (this.batch) {
          this._doBatch(options, callback, auth, path);
        } else {
          this._doRequest(options, callback, auth, path);
        }
      }
      /**
       * Send or memorize the options according to batch configuration
       * @param {function} options - Options to sent the request.
       * @param {function} callback - Continuation to respond to when complete.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       */
      _doBatch(options, callback, auth, path) {
        this.batchOptions.push(options);
        if (this.batchOptions.length === 1) {
          const me = this;
          this.batchCallback = callback;
          this.batchTimeoutID = setTimeout(function() {
            me.batchTimeoutID = -1;
            me._doBatchRequest(me.batchCallback, auth, path);
          }, this.batchInterval);
        }
        if (this.batchOptions.length === this.batchCount) {
          this._doBatchRequest(this.batchCallback, auth, path);
        }
      }
      /**
       * Initiate a request with the memorized batch options, stop the batch timeout
       * @param {function} callback - Continuation to respond to when complete.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       */
      _doBatchRequest(callback, auth, path) {
        if (this.batchTimeoutID > 0) {
          clearTimeout(this.batchTimeoutID);
          this.batchTimeoutID = -1;
        }
        const batchOptionsCopy = this.batchOptions.slice();
        this.batchOptions = [];
        this._doRequest(batchOptionsCopy, callback, auth, path);
      }
      /**
       * Make a request to a winstond server or any http server which can
       * handle json-rpc.
       * @param {function} options - Options to sent the request.
       * @param {function} callback - Continuation to respond to when complete.
       * @param {Object?} auth - authentication options
       * @param {string} path - request path
       */
      _doRequest(options, callback, auth, path) {
        const headers = Object.assign({}, this.headers);
        if (auth && auth.bearer) {
          headers.Authorization = `Bearer ${auth.bearer}`;
        }
        const req = (this.ssl ? https : http).request({
          ...this.options,
          method: "POST",
          host: this.host,
          port: this.port,
          path: `/${path.replace(/^\//, "")}`,
          headers,
          auth: auth && auth.username && auth.password ? `${auth.username}:${auth.password}` : "",
          agent: this.agent
        });
        req.on("error", callback);
        req.on("response", (res) => res.on("end", () => callback(null, res)).resume());
        req.end(Buffer.from(jsonStringify(options, this.options.replacer), "utf8"));
      }
    };
  }
});

// node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/is-stream/index.js"(exports, module2) {
    "use strict";
    var isStream = (stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function";
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module2.exports = isStream;
  }
});

// node_modules/winston/lib/winston/transports/stream.js
var require_stream2 = __commonJS({
  "node_modules/winston/lib/winston/transports/stream.js"(exports, module2) {
    "use strict";
    var isStream = require_is_stream();
    var { MESSAGE } = require_triple_beam();
    var os = require("os");
    var TransportStream = require_winston_transport();
    module2.exports = class Stream extends TransportStream {
      /**
       * Constructor function for the Console transport object responsible for
       * persisting log messages and metadata to a terminal or TTY.
       * @param {!Object} [options={}] - Options for this instance.
       */
      constructor(options = {}) {
        super(options);
        if (!options.stream || !isStream(options.stream)) {
          throw new Error("options.stream is required.");
        }
        this._stream = options.stream;
        this._stream.setMaxListeners(Infinity);
        this.isObjectMode = options.stream._writableState.objectMode;
        this.eol = typeof options.eol === "string" ? options.eol : os.EOL;
      }
      /**
       * Core logging method exposed to Winston.
       * @param {Object} info - TODO: add param description.
       * @param {Function} callback - TODO: add param description.
       * @returns {undefined}
       */
      log(info, callback) {
        setImmediate(() => this.emit("logged", info));
        if (this.isObjectMode) {
          this._stream.write(info);
          if (callback) {
            callback();
          }
          return;
        }
        this._stream.write(`${info[MESSAGE]}${this.eol}`);
        if (callback) {
          callback();
        }
        return;
      }
    };
  }
});

// node_modules/winston/lib/winston/transports/index.js
var require_transports = __commonJS({
  "node_modules/winston/lib/winston/transports/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "Console", {
      configurable: true,
      enumerable: true,
      get() {
        return require_console();
      }
    });
    Object.defineProperty(exports, "File", {
      configurable: true,
      enumerable: true,
      get() {
        return require_file();
      }
    });
    Object.defineProperty(exports, "Http", {
      configurable: true,
      enumerable: true,
      get() {
        return require_http();
      }
    });
    Object.defineProperty(exports, "Stream", {
      configurable: true,
      enumerable: true,
      get() {
        return require_stream2();
      }
    });
  }
});

// node_modules/winston/lib/winston/config/index.js
var require_config3 = __commonJS({
  "node_modules/winston/lib/winston/config/index.js"(exports) {
    "use strict";
    var logform = require_logform();
    var { configs } = require_triple_beam();
    exports.cli = logform.levels(configs.cli);
    exports.npm = logform.levels(configs.npm);
    exports.syslog = logform.levels(configs.syslog);
    exports.addColors = logform.levels;
  }
});

// node_modules/async/eachOf.js
var require_eachOf = __commonJS({
  "node_modules/async/eachOf.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _isArrayLike = require_isArrayLike();
    var _isArrayLike2 = _interopRequireDefault(_isArrayLike);
    var _breakLoop = require_breakLoop();
    var _breakLoop2 = _interopRequireDefault(_breakLoop);
    var _eachOfLimit = require_eachOfLimit2();
    var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);
    var _once = require_once();
    var _once2 = _interopRequireDefault(_once);
    var _onlyOnce = require_onlyOnce();
    var _onlyOnce2 = _interopRequireDefault(_onlyOnce);
    var _wrapAsync = require_wrapAsync();
    var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
    var _awaitify = require_awaitify();
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function eachOfArrayLike(coll, iteratee, callback) {
      callback = (0, _once2.default)(callback);
      var index2 = 0, completed = 0, { length } = coll, canceled = false;
      if (length === 0) {
        callback(null);
      }
      function iteratorCallback(err, value) {
        if (err === false) {
          canceled = true;
        }
        if (canceled === true)
          return;
        if (err) {
          callback(err);
        } else if (++completed === length || value === _breakLoop2.default) {
          callback(null);
        }
      }
      for (; index2 < length; index2++) {
        iteratee(coll[index2], index2, (0, _onlyOnce2.default)(iteratorCallback));
      }
    }
    function eachOfGeneric(coll, iteratee, callback) {
      return (0, _eachOfLimit2.default)(coll, Infinity, iteratee, callback);
    }
    function eachOf(coll, iteratee, callback) {
      var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
      return eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
    }
    exports.default = (0, _awaitify2.default)(eachOf, 3);
    module2.exports = exports["default"];
  }
});

// node_modules/async/internal/withoutIndex.js
var require_withoutIndex = __commonJS({
  "node_modules/async/internal/withoutIndex.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _withoutIndex;
    function _withoutIndex(iteratee) {
      return (value, index2, callback) => iteratee(value, callback);
    }
    module2.exports = exports["default"];
  }
});

// node_modules/async/forEach.js
var require_forEach = __commonJS({
  "node_modules/async/forEach.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _eachOf = require_eachOf();
    var _eachOf2 = _interopRequireDefault(_eachOf);
    var _withoutIndex = require_withoutIndex();
    var _withoutIndex2 = _interopRequireDefault(_withoutIndex);
    var _wrapAsync = require_wrapAsync();
    var _wrapAsync2 = _interopRequireDefault(_wrapAsync);
    var _awaitify = require_awaitify();
    var _awaitify2 = _interopRequireDefault(_awaitify);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function eachLimit(coll, iteratee, callback) {
      return (0, _eachOf2.default)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
    }
    exports.default = (0, _awaitify2.default)(eachLimit, 3);
    module2.exports = exports["default"];
  }
});

// node_modules/fn.name/index.js
var require_fn = __commonJS({
  "node_modules/fn.name/index.js"(exports, module2) {
    "use strict";
    var toString3 = Object.prototype.toString;
    module2.exports = function name(fn2) {
      if ("string" === typeof fn2.displayName && fn2.constructor.name) {
        return fn2.displayName;
      } else if ("string" === typeof fn2.name && fn2.name) {
        return fn2.name;
      }
      if ("object" === typeof fn2 && fn2.constructor && "string" === typeof fn2.constructor.name)
        return fn2.constructor.name;
      var named = fn2.toString(), type2 = toString3.call(fn2).slice(8, -1);
      if ("Function" === type2) {
        named = named.substring(named.indexOf("(") + 1, named.indexOf(")"));
      } else {
        named = type2;
      }
      return named || "anonymous";
    };
  }
});

// node_modules/one-time/index.js
var require_one_time = __commonJS({
  "node_modules/one-time/index.js"(exports, module2) {
    "use strict";
    var name = require_fn();
    module2.exports = function one(fn2) {
      var called = 0, value;
      function onetime() {
        if (called)
          return value;
        called = 1;
        value = fn2.apply(this, arguments);
        fn2 = null;
        return value;
      }
      onetime.displayName = name(fn2);
      return onetime;
    };
  }
});

// node_modules/stack-trace/lib/stack-trace.js
var require_stack_trace = __commonJS({
  "node_modules/stack-trace/lib/stack-trace.js"(exports) {
    exports.get = function(belowFn) {
      var oldLimit = Error.stackTraceLimit;
      Error.stackTraceLimit = Infinity;
      var dummyObject = {};
      var v8Handler = Error.prepareStackTrace;
      Error.prepareStackTrace = function(dummyObject2, v8StackTrace2) {
        return v8StackTrace2;
      };
      Error.captureStackTrace(dummyObject, belowFn || exports.get);
      var v8StackTrace = dummyObject.stack;
      Error.prepareStackTrace = v8Handler;
      Error.stackTraceLimit = oldLimit;
      return v8StackTrace;
    };
    exports.parse = function(err) {
      if (!err.stack) {
        return [];
      }
      var self2 = this;
      var lines = err.stack.split("\n").slice(1);
      return lines.map(function(line) {
        if (line.match(/^\s*[-]{4,}$/)) {
          return self2._createParsedCallSite({
            fileName: line,
            lineNumber: null,
            functionName: null,
            typeName: null,
            methodName: null,
            columnNumber: null,
            "native": null
          });
        }
        var lineMatch = line.match(/at (?:(.+)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
        if (!lineMatch) {
          return;
        }
        var object2 = null;
        var method = null;
        var functionName3 = null;
        var typeName = null;
        var methodName = null;
        var isNative = lineMatch[5] === "native";
        if (lineMatch[1]) {
          functionName3 = lineMatch[1];
          var methodStart = functionName3.lastIndexOf(".");
          if (functionName3[methodStart - 1] == ".")
            methodStart--;
          if (methodStart > 0) {
            object2 = functionName3.substr(0, methodStart);
            method = functionName3.substr(methodStart + 1);
            var objectEnd = object2.indexOf(".Module");
            if (objectEnd > 0) {
              functionName3 = functionName3.substr(objectEnd + 1);
              object2 = object2.substr(0, objectEnd);
            }
          }
          typeName = null;
        }
        if (method) {
          typeName = object2;
          methodName = method;
        }
        if (method === "<anonymous>") {
          methodName = null;
          functionName3 = null;
        }
        var properties = {
          fileName: lineMatch[2] || null,
          lineNumber: parseInt(lineMatch[3], 10) || null,
          functionName: functionName3,
          typeName,
          methodName,
          columnNumber: parseInt(lineMatch[4], 10) || null,
          "native": isNative
        };
        return self2._createParsedCallSite(properties);
      }).filter(function(callSite) {
        return !!callSite;
      });
    };
    function CallSite(properties) {
      for (var property in properties) {
        this[property] = properties[property];
      }
    }
    var strProperties = [
      "this",
      "typeName",
      "functionName",
      "methodName",
      "fileName",
      "lineNumber",
      "columnNumber",
      "function",
      "evalOrigin"
    ];
    var boolProperties = [
      "topLevel",
      "eval",
      "native",
      "constructor"
    ];
    strProperties.forEach(function(property) {
      CallSite.prototype[property] = null;
      CallSite.prototype["get" + property[0].toUpperCase() + property.substr(1)] = function() {
        return this[property];
      };
    });
    boolProperties.forEach(function(property) {
      CallSite.prototype[property] = false;
      CallSite.prototype["is" + property[0].toUpperCase() + property.substr(1)] = function() {
        return this[property];
      };
    });
    exports._createParsedCallSite = function(properties) {
      return new CallSite(properties);
    };
  }
});

// node_modules/winston/lib/winston/exception-stream.js
var require_exception_stream = __commonJS({
  "node_modules/winston/lib/winston/exception-stream.js"(exports, module2) {
    "use strict";
    var { Writable } = require_readable();
    module2.exports = class ExceptionStream extends Writable {
      /**
       * Constructor function for the ExceptionStream responsible for wrapping a
       * TransportStream; only allowing writes of `info` objects with
       * `info.exception` set to true.
       * @param {!TransportStream} transport - Stream to filter to exceptions
       */
      constructor(transport) {
        super({ objectMode: true });
        if (!transport) {
          throw new Error("ExceptionStream requires a TransportStream instance.");
        }
        this.handleExceptions = true;
        this.transport = transport;
      }
      /**
       * Writes the info object to our transport instance if (and only if) the
       * `exception` property is set on the info.
       * @param {mixed} info - TODO: add param description.
       * @param {mixed} enc - TODO: add param description.
       * @param {mixed} callback - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       * @private
       */
      _write(info, enc, callback) {
        if (info.exception) {
          return this.transport.log(info, callback);
        }
        callback();
        return true;
      }
    };
  }
});

// node_modules/winston/lib/winston/exception-handler.js
var require_exception_handler = __commonJS({
  "node_modules/winston/lib/winston/exception-handler.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var asyncForEach = require_forEach();
    var debug = require_node2()("winston:exception");
    var once = require_one_time();
    var stackTrace = require_stack_trace();
    var ExceptionStream = require_exception_stream();
    module2.exports = class ExceptionHandler {
      /**
       * TODO: add contructor description
       * @param {!Logger} logger - TODO: add param description
       */
      constructor(logger) {
        if (!logger) {
          throw new Error("Logger is required to handle exceptions");
        }
        this.logger = logger;
        this.handlers = /* @__PURE__ */ new Map();
      }
      /**
       * Handles `uncaughtException` events for the current process by adding any
       * handlers passed in.
       * @returns {undefined}
       */
      handle(...args) {
        args.forEach((arg) => {
          if (Array.isArray(arg)) {
            return arg.forEach((handler) => this._addHandler(handler));
          }
          this._addHandler(arg);
        });
        if (!this.catcher) {
          this.catcher = this._uncaughtException.bind(this);
          process.on("uncaughtException", this.catcher);
        }
      }
      /**
       * Removes any handlers to `uncaughtException` events for the current
       * process. This does not modify the state of the `this.handlers` set.
       * @returns {undefined}
       */
      unhandle() {
        if (this.catcher) {
          process.removeListener("uncaughtException", this.catcher);
          this.catcher = false;
          Array.from(this.handlers.values()).forEach((wrapper) => this.logger.unpipe(wrapper));
        }
      }
      /**
       * TODO: add method description
       * @param {Error} err - Error to get information about.
       * @returns {mixed} - TODO: add return description.
       */
      getAllInfo(err) {
        let message = null;
        if (err) {
          message = typeof err === "string" ? err : err.message;
        }
        return {
          error: err,
          // TODO (indexzero): how do we configure this?
          level: "error",
          message: [
            `uncaughtException: ${message || "(no error message)"}`,
            err && err.stack || "  No stack trace"
          ].join("\n"),
          stack: err && err.stack,
          exception: true,
          date: (/* @__PURE__ */ new Date()).toString(),
          process: this.getProcessInfo(),
          os: this.getOsInfo(),
          trace: this.getTrace(err)
        };
      }
      /**
       * Gets all relevant process information for the currently running process.
       * @returns {mixed} - TODO: add return description.
       */
      getProcessInfo() {
        return {
          pid: process.pid,
          uid: process.getuid ? process.getuid() : null,
          gid: process.getgid ? process.getgid() : null,
          cwd: process.cwd(),
          execPath: process.execPath,
          version: process.version,
          argv: process.argv,
          memoryUsage: process.memoryUsage()
        };
      }
      /**
       * Gets all relevant OS information for the currently running process.
       * @returns {mixed} - TODO: add return description.
       */
      getOsInfo() {
        return {
          loadavg: os.loadavg(),
          uptime: os.uptime()
        };
      }
      /**
       * Gets a stack trace for the specified error.
       * @param {mixed} err - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       */
      getTrace(err) {
        const trace = err ? stackTrace.parse(err) : stackTrace.get();
        return trace.map((site) => {
          return {
            column: site.getColumnNumber(),
            file: site.getFileName(),
            function: site.getFunctionName(),
            line: site.getLineNumber(),
            method: site.getMethodName(),
            native: site.isNative()
          };
        });
      }
      /**
       * Helper method to add a transport as an exception handler.
       * @param {Transport} handler - The transport to add as an exception handler.
       * @returns {void}
       */
      _addHandler(handler) {
        if (!this.handlers.has(handler)) {
          handler.handleExceptions = true;
          const wrapper = new ExceptionStream(handler);
          this.handlers.set(handler, wrapper);
          this.logger.pipe(wrapper);
        }
      }
      /**
       * Logs all relevant information around the `err` and exits the current
       * process.
       * @param {Error} err - Error to handle
       * @returns {mixed} - TODO: add return description.
       * @private
       */
      _uncaughtException(err) {
        const info = this.getAllInfo(err);
        const handlers = this._getExceptionHandlers();
        let doExit = typeof this.logger.exitOnError === "function" ? this.logger.exitOnError(err) : this.logger.exitOnError;
        let timeout;
        if (!handlers.length && doExit) {
          console.warn("winston: exitOnError cannot be true with no exception handlers.");
          console.warn("winston: not exiting process.");
          doExit = false;
        }
        function gracefulExit() {
          debug("doExit", doExit);
          debug("process._exiting", process._exiting);
          if (doExit && !process._exiting) {
            if (timeout) {
              clearTimeout(timeout);
            }
            process.exit(1);
          }
        }
        if (!handlers || handlers.length === 0) {
          return process.nextTick(gracefulExit);
        }
        asyncForEach(handlers, (handler, next) => {
          const done = once(next);
          const transport = handler.transport || handler;
          function onDone(event) {
            return () => {
              debug(event);
              done();
            };
          }
          transport._ending = true;
          transport.once("finish", onDone("finished"));
          transport.once("error", onDone("error"));
        }, () => doExit && gracefulExit());
        this.logger.log(info);
        if (doExit) {
          timeout = setTimeout(gracefulExit, 3e3);
        }
      }
      /**
       * Returns the list of transports and exceptionHandlers for this instance.
       * @returns {Array} - List of transports and exceptionHandlers for this
       * instance.
       * @private
       */
      _getExceptionHandlers() {
        return this.logger.transports.filter((wrap) => {
          const transport = wrap.transport || wrap;
          return transport.handleExceptions;
        });
      }
    };
  }
});

// node_modules/winston/lib/winston/rejection-handler.js
var require_rejection_handler = __commonJS({
  "node_modules/winston/lib/winston/rejection-handler.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var asyncForEach = require_forEach();
    var debug = require_node2()("winston:rejection");
    var once = require_one_time();
    var stackTrace = require_stack_trace();
    var ExceptionStream = require_exception_stream();
    module2.exports = class RejectionHandler {
      /**
       * TODO: add contructor description
       * @param {!Logger} logger - TODO: add param description
       */
      constructor(logger) {
        if (!logger) {
          throw new Error("Logger is required to handle rejections");
        }
        this.logger = logger;
        this.handlers = /* @__PURE__ */ new Map();
      }
      /**
       * Handles `unhandledRejection` events for the current process by adding any
       * handlers passed in.
       * @returns {undefined}
       */
      handle(...args) {
        args.forEach((arg) => {
          if (Array.isArray(arg)) {
            return arg.forEach((handler) => this._addHandler(handler));
          }
          this._addHandler(arg);
        });
        if (!this.catcher) {
          this.catcher = this._unhandledRejection.bind(this);
          process.on("unhandledRejection", this.catcher);
        }
      }
      /**
       * Removes any handlers to `unhandledRejection` events for the current
       * process. This does not modify the state of the `this.handlers` set.
       * @returns {undefined}
       */
      unhandle() {
        if (this.catcher) {
          process.removeListener("unhandledRejection", this.catcher);
          this.catcher = false;
          Array.from(this.handlers.values()).forEach(
            (wrapper) => this.logger.unpipe(wrapper)
          );
        }
      }
      /**
       * TODO: add method description
       * @param {Error} err - Error to get information about.
       * @returns {mixed} - TODO: add return description.
       */
      getAllInfo(err) {
        let message = null;
        if (err) {
          message = typeof err === "string" ? err : err.message;
        }
        return {
          error: err,
          // TODO (indexzero): how do we configure this?
          level: "error",
          message: [
            `unhandledRejection: ${message || "(no error message)"}`,
            err && err.stack || "  No stack trace"
          ].join("\n"),
          stack: err && err.stack,
          exception: true,
          date: (/* @__PURE__ */ new Date()).toString(),
          process: this.getProcessInfo(),
          os: this.getOsInfo(),
          trace: this.getTrace(err)
        };
      }
      /**
       * Gets all relevant process information for the currently running process.
       * @returns {mixed} - TODO: add return description.
       */
      getProcessInfo() {
        return {
          pid: process.pid,
          uid: process.getuid ? process.getuid() : null,
          gid: process.getgid ? process.getgid() : null,
          cwd: process.cwd(),
          execPath: process.execPath,
          version: process.version,
          argv: process.argv,
          memoryUsage: process.memoryUsage()
        };
      }
      /**
       * Gets all relevant OS information for the currently running process.
       * @returns {mixed} - TODO: add return description.
       */
      getOsInfo() {
        return {
          loadavg: os.loadavg(),
          uptime: os.uptime()
        };
      }
      /**
       * Gets a stack trace for the specified error.
       * @param {mixed} err - TODO: add param description.
       * @returns {mixed} - TODO: add return description.
       */
      getTrace(err) {
        const trace = err ? stackTrace.parse(err) : stackTrace.get();
        return trace.map((site) => {
          return {
            column: site.getColumnNumber(),
            file: site.getFileName(),
            function: site.getFunctionName(),
            line: site.getLineNumber(),
            method: site.getMethodName(),
            native: site.isNative()
          };
        });
      }
      /**
       * Helper method to add a transport as an exception handler.
       * @param {Transport} handler - The transport to add as an exception handler.
       * @returns {void}
       */
      _addHandler(handler) {
        if (!this.handlers.has(handler)) {
          handler.handleRejections = true;
          const wrapper = new ExceptionStream(handler);
          this.handlers.set(handler, wrapper);
          this.logger.pipe(wrapper);
        }
      }
      /**
       * Logs all relevant information around the `err` and exits the current
       * process.
       * @param {Error} err - Error to handle
       * @returns {mixed} - TODO: add return description.
       * @private
       */
      _unhandledRejection(err) {
        const info = this.getAllInfo(err);
        const handlers = this._getRejectionHandlers();
        let doExit = typeof this.logger.exitOnError === "function" ? this.logger.exitOnError(err) : this.logger.exitOnError;
        let timeout;
        if (!handlers.length && doExit) {
          console.warn("winston: exitOnError cannot be true with no rejection handlers.");
          console.warn("winston: not exiting process.");
          doExit = false;
        }
        function gracefulExit() {
          debug("doExit", doExit);
          debug("process._exiting", process._exiting);
          if (doExit && !process._exiting) {
            if (timeout) {
              clearTimeout(timeout);
            }
            process.exit(1);
          }
        }
        if (!handlers || handlers.length === 0) {
          return process.nextTick(gracefulExit);
        }
        asyncForEach(
          handlers,
          (handler, next) => {
            const done = once(next);
            const transport = handler.transport || handler;
            function onDone(event) {
              return () => {
                debug(event);
                done();
              };
            }
            transport._ending = true;
            transport.once("finish", onDone("finished"));
            transport.once("error", onDone("error"));
          },
          () => doExit && gracefulExit()
        );
        this.logger.log(info);
        if (doExit) {
          timeout = setTimeout(gracefulExit, 3e3);
        }
      }
      /**
       * Returns the list of transports and exceptionHandlers for this instance.
       * @returns {Array} - List of transports and exceptionHandlers for this
       * instance.
       * @private
       */
      _getRejectionHandlers() {
        return this.logger.transports.filter((wrap) => {
          const transport = wrap.transport || wrap;
          return transport.handleRejections;
        });
      }
    };
  }
});

// node_modules/winston/lib/winston/profiler.js
var require_profiler = __commonJS({
  "node_modules/winston/lib/winston/profiler.js"(exports, module2) {
    "use strict";
    module2.exports = class Profiler {
      /**
       * Constructor function for the Profiler instance used by
       * `Logger.prototype.startTimer`. When done is called the timer will finish
       * and log the duration.
       * @param {!Logger} logger - TODO: add param description.
       * @private
       */
      constructor(logger) {
        if (!logger) {
          throw new Error("Logger is required for profiling.");
        }
        this.logger = logger;
        this.start = Date.now();
      }
      /**
       * Ends the current timer (i.e. Profiler) instance and logs the `msg` along
       * with the duration since creation.
       * @returns {mixed} - TODO: add return description.
       * @private
       */
      done(...args) {
        if (typeof args[args.length - 1] === "function") {
          console.warn("Callback function no longer supported as of winston@3.0.0");
          args.pop();
        }
        const info = typeof args[args.length - 1] === "object" ? args.pop() : {};
        info.level = info.level || "info";
        info.durationMs = Date.now() - this.start;
        return this.logger.write(info);
      }
    };
  }
});

// node_modules/winston/lib/winston/logger.js
var require_logger = __commonJS({
  "node_modules/winston/lib/winston/logger.js"(exports, module2) {
    "use strict";
    var { Stream, Transform } = require_readable();
    var asyncForEach = require_forEach();
    var { LEVEL, SPLAT } = require_triple_beam();
    var isStream = require_is_stream();
    var ExceptionHandler = require_exception_handler();
    var RejectionHandler = require_rejection_handler();
    var LegacyTransportStream = require_legacy();
    var Profiler = require_profiler();
    var { warn } = require_common();
    var config2 = require_config3();
    var formatRegExp2 = /%[scdjifoO%]/g;
    var Logger2 = class extends Transform {
      /**
       * Constructor function for the Logger object responsible for persisting log
       * messages and metadata to one or more transports.
       * @param {!Object} options - foo
       */
      constructor(options) {
        super({ objectMode: true });
        this.configure(options);
      }
      child(defaultRequestMetadata) {
        const logger = this;
        return Object.create(logger, {
          write: {
            value: function(info) {
              const infoClone = Object.assign(
                {},
                defaultRequestMetadata,
                info
              );
              if (info instanceof Error) {
                infoClone.stack = info.stack;
                infoClone.message = info.message;
              }
              logger.write(infoClone);
            }
          }
        });
      }
      /**
       * This will wholesale reconfigure this instance by:
       * 1. Resetting all transports. Older transports will be removed implicitly.
       * 2. Set all other options including levels, colors, rewriters, filters,
       *    exceptionHandlers, etc.
       * @param {!Object} options - TODO: add param description.
       * @returns {undefined}
       */
      configure({
        silent,
        format: format7,
        defaultMeta,
        levels: levels2,
        level: level2 = "info",
        exitOnError = true,
        transports: transports3,
        colors: colors2,
        emitErrs,
        formatters,
        padLevels,
        rewriters,
        stripColors,
        exceptionHandlers,
        rejectionHandlers
      } = {}) {
        if (this.transports.length) {
          this.clear();
        }
        this.silent = silent;
        this.format = format7 || this.format || require_json()();
        this.defaultMeta = defaultMeta || null;
        this.levels = levels2 || this.levels || config2.npm.levels;
        this.level = level2;
        if (this.exceptions) {
          this.exceptions.unhandle();
        }
        if (this.rejections) {
          this.rejections.unhandle();
        }
        this.exceptions = new ExceptionHandler(this);
        this.rejections = new RejectionHandler(this);
        this.profilers = {};
        this.exitOnError = exitOnError;
        if (transports3) {
          transports3 = Array.isArray(transports3) ? transports3 : [transports3];
          transports3.forEach((transport) => this.add(transport));
        }
        if (colors2 || emitErrs || formatters || padLevels || rewriters || stripColors) {
          throw new Error(
            [
              "{ colors, emitErrs, formatters, padLevels, rewriters, stripColors } were removed in winston@3.0.0.",
              "Use a custom winston.format(function) instead.",
              "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"
            ].join("\n")
          );
        }
        if (exceptionHandlers) {
          this.exceptions.handle(exceptionHandlers);
        }
        if (rejectionHandlers) {
          this.rejections.handle(rejectionHandlers);
        }
      }
      isLevelEnabled(level2) {
        const givenLevelValue = getLevelValue(this.levels, level2);
        if (givenLevelValue === null) {
          return false;
        }
        const configuredLevelValue = getLevelValue(this.levels, this.level);
        if (configuredLevelValue === null) {
          return false;
        }
        if (!this.transports || this.transports.length === 0) {
          return configuredLevelValue >= givenLevelValue;
        }
        const index2 = this.transports.findIndex((transport) => {
          let transportLevelValue = getLevelValue(this.levels, transport.level);
          if (transportLevelValue === null) {
            transportLevelValue = configuredLevelValue;
          }
          return transportLevelValue >= givenLevelValue;
        });
        return index2 !== -1;
      }
      /* eslint-disable valid-jsdoc */
      /**
       * Ensure backwards compatibility with a `log` method
       * @param {mixed} level - Level the log message is written at.
       * @param {mixed} msg - TODO: add param description.
       * @param {mixed} meta - TODO: add param description.
       * @returns {Logger} - TODO: add return description.
       *
       * @example
       *    // Supports the existing API:
       *    logger.log('info', 'Hello world', { custom: true });
       *    logger.log('info', new Error('Yo, it\'s on fire'));
       *
       *    // Requires winston.format.splat()
       *    logger.log('info', '%s %d%%', 'A string', 50, { thisIsMeta: true });
       *
       *    // And the new API with a single JSON literal:
       *    logger.log({ level: 'info', message: 'Hello world', custom: true });
       *    logger.log({ level: 'info', message: new Error('Yo, it\'s on fire') });
       *
       *    // Also requires winston.format.splat()
       *    logger.log({
       *      level: 'info',
       *      message: '%s %d%%',
       *      [SPLAT]: ['A string', 50],
       *      meta: { thisIsMeta: true }
       *    });
       *
       */
      /* eslint-enable valid-jsdoc */
      log(level2, msg, ...splat) {
        if (arguments.length === 1) {
          level2[LEVEL] = level2.level;
          this._addDefaultMeta(level2);
          this.write(level2);
          return this;
        }
        if (arguments.length === 2) {
          if (msg && typeof msg === "object") {
            msg[LEVEL] = msg.level = level2;
            this._addDefaultMeta(msg);
            this.write(msg);
            return this;
          }
          msg = { [LEVEL]: level2, level: level2, message: msg };
          this._addDefaultMeta(msg);
          this.write(msg);
          return this;
        }
        const [meta] = splat;
        if (typeof meta === "object" && meta !== null) {
          const tokens = msg && msg.match && msg.match(formatRegExp2);
          if (!tokens) {
            const info = Object.assign({}, this.defaultMeta, meta, {
              [LEVEL]: level2,
              [SPLAT]: splat,
              level: level2,
              message: msg
            });
            if (meta.message)
              info.message = `${info.message} ${meta.message}`;
            if (meta.stack)
              info.stack = meta.stack;
            this.write(info);
            return this;
          }
        }
        this.write(Object.assign({}, this.defaultMeta, {
          [LEVEL]: level2,
          [SPLAT]: splat,
          level: level2,
          message: msg
        }));
        return this;
      }
      /**
       * Pushes data so that it can be picked up by all of our pipe targets.
       * @param {mixed} info - TODO: add param description.
       * @param {mixed} enc - TODO: add param description.
       * @param {mixed} callback - Continues stream processing.
       * @returns {undefined}
       * @private
       */
      _transform(info, enc, callback) {
        if (this.silent) {
          return callback();
        }
        if (!info[LEVEL]) {
          info[LEVEL] = info.level;
        }
        if (!this.levels[info[LEVEL]] && this.levels[info[LEVEL]] !== 0) {
          console.error("[winston] Unknown logger level: %s", info[LEVEL]);
        }
        if (!this._readableState.pipes) {
          console.error(
            "[winston] Attempt to write logs with no transports, which can increase memory usage: %j",
            info
          );
        }
        try {
          this.push(this.format.transform(info, this.format.options));
        } finally {
          this._writableState.sync = false;
          callback();
        }
      }
      /**
       * Delays the 'finish' event until all transport pipe targets have
       * also emitted 'finish' or are already finished.
       * @param {mixed} callback - Continues stream processing.
       */
      _final(callback) {
        const transports3 = this.transports.slice();
        asyncForEach(
          transports3,
          (transport, next) => {
            if (!transport || transport.finished)
              return setImmediate(next);
            transport.once("finish", next);
            transport.end();
          },
          callback
        );
      }
      /**
       * Adds the transport to this logger instance by piping to it.
       * @param {mixed} transport - TODO: add param description.
       * @returns {Logger} - TODO: add return description.
       */
      add(transport) {
        const target = !isStream(transport) || transport.log.length > 2 ? new LegacyTransportStream({ transport }) : transport;
        if (!target._writableState || !target._writableState.objectMode) {
          throw new Error(
            "Transports must WritableStreams in objectMode. Set { objectMode: true }."
          );
        }
        this._onEvent("error", target);
        this._onEvent("warn", target);
        this.pipe(target);
        if (transport.handleExceptions) {
          this.exceptions.handle();
        }
        if (transport.handleRejections) {
          this.rejections.handle();
        }
        return this;
      }
      /**
       * Removes the transport from this logger instance by unpiping from it.
       * @param {mixed} transport - TODO: add param description.
       * @returns {Logger} - TODO: add return description.
       */
      remove(transport) {
        if (!transport)
          return this;
        let target = transport;
        if (!isStream(transport) || transport.log.length > 2) {
          target = this.transports.filter(
            (match) => match.transport === transport
          )[0];
        }
        if (target) {
          this.unpipe(target);
        }
        return this;
      }
      /**
       * Removes all transports from this logger instance.
       * @returns {Logger} - TODO: add return description.
       */
      clear() {
        this.unpipe();
        return this;
      }
      /**
       * Cleans up resources (streams, event listeners) for all transports
       * associated with this instance (if necessary).
       * @returns {Logger} - TODO: add return description.
       */
      close() {
        this.exceptions.unhandle();
        this.rejections.unhandle();
        this.clear();
        this.emit("close");
        return this;
      }
      /**
       * Sets the `target` levels specified on this instance.
       * @param {Object} Target levels to use on this instance.
       */
      setLevels() {
        warn.deprecated("setLevels");
      }
      /**
       * Queries the all transports for this instance with the specified `options`.
       * This will aggregate each transport's results into one object containing
       * a property per transport.
       * @param {Object} options - Query options for this instance.
       * @param {function} callback - Continuation to respond to when complete.
       */
      query(options, callback) {
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        options = options || {};
        const results = {};
        const queryObject = Object.assign({}, options.query || {});
        function queryTransport(transport, next) {
          if (options.query && typeof transport.formatQuery === "function") {
            options.query = transport.formatQuery(queryObject);
          }
          transport.query(options, (err, res) => {
            if (err) {
              return next(err);
            }
            if (typeof transport.formatResults === "function") {
              res = transport.formatResults(res, options.format);
            }
            next(null, res);
          });
        }
        function addResults(transport, next) {
          queryTransport(transport, (err, result) => {
            if (next) {
              result = err || result;
              if (result) {
                results[transport.name] = result;
              }
              next();
            }
            next = null;
          });
        }
        asyncForEach(
          this.transports.filter((transport) => !!transport.query),
          addResults,
          () => callback(null, results)
        );
      }
      /**
       * Returns a log stream for all transports. Options object is optional.
       * @param{Object} options={} - Stream options for this instance.
       * @returns {Stream} - TODO: add return description.
       */
      stream(options = {}) {
        const out = new Stream();
        const streams = [];
        out._streams = streams;
        out.destroy = () => {
          let i2 = streams.length;
          while (i2--) {
            streams[i2].destroy();
          }
        };
        this.transports.filter((transport) => !!transport.stream).forEach((transport) => {
          const str = transport.stream(options);
          if (!str) {
            return;
          }
          streams.push(str);
          str.on("log", (log) => {
            log.transport = log.transport || [];
            log.transport.push(transport.name);
            out.emit("log", log);
          });
          str.on("error", (err) => {
            err.transport = err.transport || [];
            err.transport.push(transport.name);
            out.emit("error", err);
          });
        });
        return out;
      }
      /**
       * Returns an object corresponding to a specific timing. When done is called
       * the timer will finish and log the duration. e.g.:
       * @returns {Profile} - TODO: add return description.
       * @example
       *    const timer = winston.startTimer()
       *    setTimeout(() => {
       *      timer.done({
       *        message: 'Logging message'
       *      });
       *    }, 1000);
       */
      startTimer() {
        return new Profiler(this);
      }
      /**
       * Tracks the time inbetween subsequent calls to this method with the same
       * `id` parameter. The second call to this method will log the difference in
       * milliseconds along with the message.
       * @param {string} id Unique id of the profiler
       * @returns {Logger} - TODO: add return description.
       */
      profile(id, ...args) {
        const time = Date.now();
        if (this.profilers[id]) {
          const timeEnd = this.profilers[id];
          delete this.profilers[id];
          if (typeof args[args.length - 2] === "function") {
            console.warn(
              "Callback function no longer supported as of winston@3.0.0"
            );
            args.pop();
          }
          const info = typeof args[args.length - 1] === "object" ? args.pop() : {};
          info.level = info.level || "info";
          info.durationMs = time - timeEnd;
          info.message = info.message || id;
          return this.write(info);
        }
        this.profilers[id] = time;
        return this;
      }
      /**
       * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
       * @returns {undefined}
       * @deprecated
       */
      handleExceptions(...args) {
        console.warn(
          "Deprecated: .handleExceptions() will be removed in winston@4. Use .exceptions.handle()"
        );
        this.exceptions.handle(...args);
      }
      /**
       * Backwards compatibility to `exceptions.handle` in winston < 3.0.0.
       * @returns {undefined}
       * @deprecated
       */
      unhandleExceptions(...args) {
        console.warn(
          "Deprecated: .unhandleExceptions() will be removed in winston@4. Use .exceptions.unhandle()"
        );
        this.exceptions.unhandle(...args);
      }
      /**
       * Throw a more meaningful deprecation notice
       * @throws {Error} - TODO: add throws description.
       */
      cli() {
        throw new Error(
          [
            "Logger.cli() was removed in winston@3.0.0",
            "Use a custom winston.formats.cli() instead.",
            "See: https://github.com/winstonjs/winston/tree/master/UPGRADE-3.0.md"
          ].join("\n")
        );
      }
      /**
       * Bubbles the `event` that occured on the specified `transport` up
       * from this instance.
       * @param {string} event - The event that occured
       * @param {Object} transport - Transport on which the event occured
       * @private
       */
      _onEvent(event, transport) {
        function transportEvent(err) {
          if (event === "error" && !this.transports.includes(transport)) {
            this.add(transport);
          }
          this.emit(event, err, transport);
        }
        if (!transport["__winston" + event]) {
          transport["__winston" + event] = transportEvent.bind(this);
          transport.on(event, transport["__winston" + event]);
        }
      }
      _addDefaultMeta(msg) {
        if (this.defaultMeta) {
          Object.assign(msg, this.defaultMeta);
        }
      }
    };
    function getLevelValue(levels2, level2) {
      const value = levels2[level2];
      if (!value && value !== 0) {
        return null;
      }
      return value;
    }
    Object.defineProperty(Logger2.prototype, "transports", {
      configurable: false,
      enumerable: true,
      get() {
        const { pipes } = this._readableState;
        return !Array.isArray(pipes) ? [pipes].filter(Boolean) : pipes;
      }
    });
    module2.exports = Logger2;
  }
});

// node_modules/winston/lib/winston/create-logger.js
var require_create_logger = __commonJS({
  "node_modules/winston/lib/winston/create-logger.js"(exports, module2) {
    "use strict";
    var { LEVEL } = require_triple_beam();
    var config2 = require_config3();
    var Logger2 = require_logger();
    var debug = require_node2()("winston:create-logger");
    function isLevelEnabledFunctionName(level2) {
      return "is" + level2.charAt(0).toUpperCase() + level2.slice(1) + "Enabled";
    }
    module2.exports = function(opts = {}) {
      opts.levels = opts.levels || config2.npm.levels;
      class DerivedLogger extends Logger2 {
        /**
         * Create a new class derived logger for which the levels can be attached to
         * the prototype of. This is a V8 optimization that is well know to increase
         * performance of prototype functions.
         * @param {!Object} options - Options for the created logger.
         */
        constructor(options) {
          super(options);
        }
      }
      const logger = new DerivedLogger(opts);
      Object.keys(opts.levels).forEach(function(level2) {
        debug('Define prototype method for "%s"', level2);
        if (level2 === "log") {
          console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
          return;
        }
        DerivedLogger.prototype[level2] = function(...args) {
          const self2 = this || logger;
          if (args.length === 1) {
            const [msg] = args;
            const info = msg && msg.message && msg || { message: msg };
            info.level = info[LEVEL] = level2;
            self2._addDefaultMeta(info);
            self2.write(info);
            return this || logger;
          }
          if (args.length === 0) {
            self2.log(level2, "");
            return self2;
          }
          return self2.log(level2, ...args);
        };
        DerivedLogger.prototype[isLevelEnabledFunctionName(level2)] = function() {
          return (this || logger).isLevelEnabled(level2);
        };
      });
      return logger;
    };
  }
});

// node_modules/winston/lib/winston/container.js
var require_container = __commonJS({
  "node_modules/winston/lib/winston/container.js"(exports, module2) {
    "use strict";
    var createLogger2 = require_create_logger();
    module2.exports = class Container {
      /**
       * Constructor function for the Container object responsible for managing a
       * set of `winston.Logger` instances based on string ids.
       * @param {!Object} [options={}] - Default pass-thru options for Loggers.
       */
      constructor(options = {}) {
        this.loggers = /* @__PURE__ */ new Map();
        this.options = options;
      }
      /**
       * Retrieves a `winston.Logger` instance for the specified `id`. If an
       * instance does not exist, one is created.
       * @param {!string} id - The id of the Logger to get.
       * @param {?Object} [options] - Options for the Logger instance.
       * @returns {Logger} - A configured Logger instance with a specified id.
       */
      add(id, options) {
        if (!this.loggers.has(id)) {
          options = Object.assign({}, options || this.options);
          const existing = options.transports || this.options.transports;
          if (existing) {
            options.transports = Array.isArray(existing) ? existing.slice() : [existing];
          } else {
            options.transports = [];
          }
          const logger = createLogger2(options);
          logger.on("close", () => this._delete(id));
          this.loggers.set(id, logger);
        }
        return this.loggers.get(id);
      }
      /**
       * Retreives a `winston.Logger` instance for the specified `id`. If
       * an instance does not exist, one is created.
       * @param {!string} id - The id of the Logger to get.
       * @param {?Object} [options] - Options for the Logger instance.
       * @returns {Logger} - A configured Logger instance with a specified id.
       */
      get(id, options) {
        return this.add(id, options);
      }
      /**
       * Check if the container has a logger with the id.
       * @param {?string} id - The id of the Logger instance to find.
       * @returns {boolean} - Boolean value indicating if this instance has a
       * logger with the specified `id`.
       */
      has(id) {
        return !!this.loggers.has(id);
      }
      /**
       * Closes a `Logger` instance with the specified `id` if it exists.
       * If no `id` is supplied then all Loggers are closed.
       * @param {?string} id - The id of the Logger instance to close.
       * @returns {undefined}
       */
      close(id) {
        if (id) {
          return this._removeLogger(id);
        }
        this.loggers.forEach((val, key) => this._removeLogger(key));
      }
      /**
       * Remove a logger based on the id.
       * @param {!string} id - The id of the logger to remove.
       * @returns {undefined}
       * @private
       */
      _removeLogger(id) {
        if (!this.loggers.has(id)) {
          return;
        }
        const logger = this.loggers.get(id);
        logger.close();
        this._delete(id);
      }
      /**
       * Deletes a `Logger` instance with the specified `id`.
       * @param {!string} id - The id of the Logger instance to delete from
       * container.
       * @returns {undefined}
       * @private
       */
      _delete(id) {
        this.loggers.delete(id);
      }
    };
  }
});

// node_modules/winston/lib/winston.js
var require_winston = __commonJS({
  "node_modules/winston/lib/winston.js"(exports) {
    "use strict";
    var logform = require_logform();
    var { warn } = require_common();
    exports.version = require_package().version;
    exports.transports = require_transports();
    exports.config = require_config3();
    exports.addColors = logform.levels;
    exports.format = logform.format;
    exports.createLogger = require_create_logger();
    exports.Logger = require_logger();
    exports.ExceptionHandler = require_exception_handler();
    exports.RejectionHandler = require_rejection_handler();
    exports.Container = require_container();
    exports.Transport = require_winston_transport();
    exports.loggers = new exports.Container();
    var defaultLogger = exports.createLogger();
    Object.keys(exports.config.npm.levels).concat([
      "log",
      "query",
      "stream",
      "add",
      "remove",
      "clear",
      "profile",
      "startTimer",
      "handleExceptions",
      "unhandleExceptions",
      "handleRejections",
      "unhandleRejections",
      "configure",
      "child"
    ]).forEach(
      (method) => exports[method] = (...args) => defaultLogger[method](...args)
    );
    Object.defineProperty(exports, "level", {
      get() {
        return defaultLogger.level;
      },
      set(val) {
        defaultLogger.level = val;
      }
    });
    Object.defineProperty(exports, "exceptions", {
      get() {
        return defaultLogger.exceptions;
      }
    });
    ["exitOnError"].forEach((prop) => {
      Object.defineProperty(exports, prop, {
        get() {
          return defaultLogger[prop];
        },
        set(val) {
          defaultLogger[prop] = val;
        }
      });
    });
    Object.defineProperty(exports, "default", {
      get() {
        return {
          exceptionHandlers: defaultLogger.exceptionHandlers,
          rejectionHandlers: defaultLogger.rejectionHandlers,
          transports: defaultLogger.transports
        };
      }
    });
    warn.deprecated(exports, "setLevels");
    warn.forFunctions(exports, "useFormat", ["cli"]);
    warn.forProperties(exports, "useFormat", ["padLevels", "stripColors"]);
    warn.forFunctions(exports, "deprecated", [
      "addRewriter",
      "addFilter",
      "clone",
      "extend"
    ]);
    warn.forProperties(exports, "deprecated", ["emitErrs", "levelLength"]);
  }
});

// node_modules/yocto-queue/index.js
var Node = class {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
};
var Queue = class {
  #head;
  #tail;
  #size;
  constructor() {
    this.clear();
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.#head) {
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }
    this.#size++;
  }
  dequeue() {
    const current = this.#head;
    if (!current) {
      return;
    }
    this.#head = this.#head.next;
    this.#size--;
    return current.value;
  }
  clear() {
    this.#head = void 0;
    this.#tail = void 0;
    this.#size = 0;
  }
  get size() {
    return this.#size;
  }
  *[Symbol.iterator]() {
    let current = this.#head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
};

// node_modules/@vitest/utils/dist/helpers.js
function assertTypes(value, name, types) {
  const receivedType = typeof value;
  const pass = types.includes(receivedType);
  if (!pass)
    throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
}
function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function isFinalObj(obj) {
  return obj === Object.prototype || obj === Function.prototype || obj === RegExp.prototype;
}
function getType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function collectOwnProperties(obj, collector) {
  const collect = typeof collector === "function" ? collector : (key) => collector.add(key);
  Object.getOwnPropertyNames(obj).forEach(collect);
  Object.getOwnPropertySymbols(obj).forEach(collect);
}
function getOwnProperties(obj) {
  const ownProps = /* @__PURE__ */ new Set();
  if (isFinalObj(obj))
    return [];
  collectOwnProperties(obj, ownProps);
  return Array.from(ownProps);
}
var defaultCloneOptions = { forceWritable: false };
function deepClone(val, options = defaultCloneOptions) {
  const seen = /* @__PURE__ */ new WeakMap();
  return clone(val, seen, options);
}
function clone(val, seen, options = defaultCloneOptions) {
  let k, out;
  if (seen.has(val))
    return seen.get(val);
  if (Array.isArray(val)) {
    out = Array(k = val.length);
    seen.set(val, out);
    while (k--)
      out[k] = clone(val[k], seen);
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = Object.create(Object.getPrototypeOf(val));
    seen.set(val, out);
    const props = getOwnProperties(val);
    for (const k2 of props) {
      const descriptor = Object.getOwnPropertyDescriptor(val, k2);
      if (!descriptor)
        continue;
      const cloned = clone(val[k2], seen);
      if ("get" in descriptor) {
        Object.defineProperty(out, k2, {
          ...descriptor,
          get() {
            return cloned;
          }
        });
      } else {
        Object.defineProperty(out, k2, {
          ...descriptor,
          writable: options.forceWritable ? true : descriptor.writable,
          value: cloned
        });
      }
    }
    return out;
  }
  return val;
}
function noop() {
}
function objectAttr(source, path, defaultValue = void 0) {
  const paths = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let result = source;
  for (const p of paths) {
    result = Object(result)[p];
    if (result === void 0)
      return defaultValue;
  }
  return result;
}

// node_modules/@vitest/utils/dist/chunk-display.js
var import_pretty_format = __toESM(require_build(), 1);
init_loupe();
var {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent
} = import_pretty_format.plugins;
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
function stringify(object2, maxDepth = 10, { maxLength, ...options } = {}) {
  const MAX_LENGTH = maxLength ?? 1e4;
  let result;
  try {
    result = (0, import_pretty_format.format)(object2, {
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS,
      ...options
    });
  } catch {
    result = (0, import_pretty_format.format)(object2, {
      callToJSON: false,
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS,
      ...options
    });
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object2, Math.floor(maxDepth / 2)) : result;
}
var formatRegExp = /%[sdjifoOcj%]/g;
function format(...args) {
  if (typeof args[0] !== "string") {
    const objects = [];
    for (let i22 = 0; i22 < args.length; i22++)
      objects.push(inspect2(args[i22], { depth: 0, colors: false, compact: 3 }));
    return objects.join(" ");
  }
  const len = args.length;
  let i2 = 1;
  const template = args[0];
  let str = String(template).replace(formatRegExp, (x) => {
    if (x === "%%")
      return "%";
    if (i2 >= len)
      return x;
    switch (x) {
      case "%s": {
        const value = args[i2++];
        if (typeof value === "bigint")
          return `${value.toString()}n`;
        if (typeof value === "number" && value === 0 && 1 / value < 0)
          return "-0";
        if (typeof value === "object" && value !== null)
          return inspect2(value, { depth: 0, colors: false, compact: 3 });
        return String(value);
      }
      case "%d": {
        const value = args[i2++];
        if (typeof value === "bigint")
          return `${value.toString()}n`;
        return Number(value).toString();
      }
      case "%i": {
        const value = args[i2++];
        if (typeof value === "bigint")
          return `${value.toString()}n`;
        return Number.parseInt(String(value)).toString();
      }
      case "%f":
        return Number.parseFloat(String(args[i2++])).toString();
      case "%o":
        return inspect2(args[i2++], { showHidden: true, showProxy: true });
      case "%O":
        return inspect2(args[i2++]);
      case "%c": {
        i2++;
        return "";
      }
      case "%j":
        try {
          return JSON.stringify(args[i2++]);
        } catch (err) {
          const m2 = err.message;
          if (
            // chromium
            m2.includes("circular structure") || m2.includes("cyclic structures") || m2.includes("cyclic object")
          )
            return "[Circular]";
          throw err;
        }
      default:
        return x;
    }
  });
  for (let x = args[i2]; i2 < len; x = args[++i2]) {
    if (x === null || typeof x !== "object")
      str += ` ${x}`;
    else
      str += ` ${inspect2(x)}`;
  }
  return str;
}
function inspect2(obj, options = {}) {
  if (options.truncate === 0)
    options.truncate = Number.POSITIVE_INFINITY;
  return inspect(obj, options);
}
function objDisplay(obj, options = {}) {
  const truncateThreshold = options.truncate ?? 40;
  const str = inspect2(obj, options);
  const type2 = Object.prototype.toString.call(obj);
  if (truncateThreshold && str.length >= truncateThreshold) {
    if (type2 === "[object Function]") {
      const fn2 = obj;
      return !fn2.name || fn2.name === "" ? "[Function]" : `[Function: ${fn2.name}]`;
    } else if (type2 === "[object Array]") {
      return `[ Array(${obj.length}) ]`;
    } else if (type2 === "[object Object]") {
      const keys2 = Object.keys(obj);
      const kstr = keys2.length > 2 ? `${keys2.splice(0, 2).join(", ")}, ...` : keys2.join(", ");
      return `{ Object (${kstr}) }`;
    } else {
      return str;
    }
  }
  return str;
}

// node_modules/@vitest/utils/dist/chunk-colors.js
var SAFE_TIMERS_SYMBOL = Symbol("vitest:SAFE_TIMERS");
var SAFE_COLORS_SYMBOL = Symbol("vitest:SAFE_COLORS");
var colorsMap = {
  bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"],
  dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"],
  italic: ["\x1B[3m", "\x1B[23m"],
  underline: ["\x1B[4m", "\x1B[24m"],
  inverse: ["\x1B[7m", "\x1B[27m"],
  hidden: ["\x1B[8m", "\x1B[28m"],
  strikethrough: ["\x1B[9m", "\x1B[29m"],
  black: ["\x1B[30m", "\x1B[39m"],
  red: ["\x1B[31m", "\x1B[39m"],
  green: ["\x1B[32m", "\x1B[39m"],
  yellow: ["\x1B[33m", "\x1B[39m"],
  blue: ["\x1B[34m", "\x1B[39m"],
  magenta: ["\x1B[35m", "\x1B[39m"],
  cyan: ["\x1B[36m", "\x1B[39m"],
  white: ["\x1B[37m", "\x1B[39m"],
  gray: ["\x1B[90m", "\x1B[39m"],
  bgBlack: ["\x1B[40m", "\x1B[49m"],
  bgRed: ["\x1B[41m", "\x1B[49m"],
  bgGreen: ["\x1B[42m", "\x1B[49m"],
  bgYellow: ["\x1B[43m", "\x1B[49m"],
  bgBlue: ["\x1B[44m", "\x1B[49m"],
  bgMagenta: ["\x1B[45m", "\x1B[49m"],
  bgCyan: ["\x1B[46m", "\x1B[49m"],
  bgWhite: ["\x1B[47m", "\x1B[49m"]
};
var colorsEntries = Object.entries(colorsMap);
function string(str) {
  return String(str);
}
string.open = "";
string.close = "";
var defaultColors = /* @__PURE__ */ colorsEntries.reduce((acc, [key]) => {
  acc[key] = string;
  return acc;
}, { isColorSupported: false });
function getColors() {
  return globalThis[SAFE_COLORS_SYMBOL] || defaultColors;
}

// node_modules/@vitest/utils/dist/index.js
var import_pretty_format2 = __toESM(require_build(), 1);
init_loupe();
function getSafeTimers() {
  const {
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis;
  const {
    nextTick: safeNextTick
  } = globalThis[SAFE_TIMERS_SYMBOL] || globalThis.process || { nextTick: (cb) => cb() };
  return {
    nextTick: safeNextTick,
    setTimeout: safeSetTimeout,
    setInterval: safeSetInterval,
    clearInterval: safeClearInterval,
    clearTimeout: safeClearTimeout,
    setImmediate: safeSetImmediate,
    clearImmediate: safeClearImmediate
  };
}
function createSimpleStackTrace(options) {
  const { message = "error", stackTraceLimit = 1 } = options || {};
  const limit = Error.stackTraceLimit;
  const prepareStackTrace = Error.prepareStackTrace;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = (e) => e.stack;
  const err = new Error(message);
  const stackTrace = err.stack || "";
  Error.prepareStackTrace = prepareStackTrace;
  Error.stackTraceLimit = limit;
  return stackTrace;
}

// node_modules/@vitest/utils/dist/diff.js
var import_pretty_format3 = __toESM(require_build(), 1);
var diff$1 = __toESM(require_build2(), 1);
function getType2(value) {
  if (value === void 0) {
    return "undefined";
  } else if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else if (typeof value === "boolean") {
    return "boolean";
  } else if (typeof value === "function") {
    return "function";
  } else if (typeof value === "number") {
    return "number";
  } else if (typeof value === "string") {
    return "string";
  } else if (typeof value === "bigint") {
    return "bigint";
  } else if (typeof value === "object") {
    if (value != null) {
      if (value.constructor === RegExp)
        return "regexp";
      else if (value.constructor === Map)
        return "map";
      else if (value.constructor === Set)
        return "set";
      else if (value.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof value === "symbol") {
    return "symbol";
  }
  throw new Error(`value of unknown type: ${value}`);
}
var DIFF_DELETE = -1;
var DIFF_INSERT = 1;
var DIFF_EQUAL = 0;
var Diff = class {
  0;
  1;
  constructor(op, text) {
    this[0] = op;
    this[1] = text;
  }
};
var NO_DIFF_MESSAGE = "Compared values have no visual difference.";
var SIMILAR_MESSAGE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function formatTrailingSpaces(line, trailingSpaceFormatter) {
  return line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
}
function printDiffLine(line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) {
  return line.length !== 0 ? color(
    `${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`
  ) : indicator !== " " ? color(indicator) : isFirstOrLast && emptyFirstOrLastLinePlaceholder.length !== 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "";
}
function printDeleteLine(line, isFirstOrLast, {
  aColor,
  aIndicator,
  changeLineTrailingSpaceColor,
  emptyFirstOrLastLinePlaceholder
}) {
  return printDiffLine(
    line,
    isFirstOrLast,
    aColor,
    aIndicator,
    changeLineTrailingSpaceColor,
    emptyFirstOrLastLinePlaceholder
  );
}
function printInsertLine(line, isFirstOrLast, {
  bColor,
  bIndicator,
  changeLineTrailingSpaceColor,
  emptyFirstOrLastLinePlaceholder
}) {
  return printDiffLine(
    line,
    isFirstOrLast,
    bColor,
    bIndicator,
    changeLineTrailingSpaceColor,
    emptyFirstOrLastLinePlaceholder
  );
}
function printCommonLine(line, isFirstOrLast, {
  commonColor,
  commonIndicator,
  commonLineTrailingSpaceColor,
  emptyFirstOrLastLinePlaceholder
}) {
  return printDiffLine(
    line,
    isFirstOrLast,
    commonColor,
    commonIndicator,
    commonLineTrailingSpaceColor,
    emptyFirstOrLastLinePlaceholder
  );
}
function createPatchMark(aStart, aEnd, bStart, bEnd, { patchColor }) {
  return patchColor(
    `@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`
  );
}
function joinAlignedDiffsNoExpand(diffs, options) {
  const iLength = diffs.length;
  const nContextLines = options.contextLines;
  const nContextLines2 = nContextLines + nContextLines;
  let jLength = iLength;
  let hasExcessAtStartOrEnd = false;
  let nExcessesBetweenChanges = 0;
  let i2 = 0;
  while (i2 !== iLength) {
    const iStart = i2;
    while (i2 !== iLength && diffs[i2][0] === DIFF_EQUAL)
      i2 += 1;
    if (iStart !== i2) {
      if (iStart === 0) {
        if (i2 > nContextLines) {
          jLength -= i2 - nContextLines;
          hasExcessAtStartOrEnd = true;
        }
      } else if (i2 === iLength) {
        const n2 = i2 - iStart;
        if (n2 > nContextLines) {
          jLength -= n2 - nContextLines;
          hasExcessAtStartOrEnd = true;
        }
      } else {
        const n2 = i2 - iStart;
        if (n2 > nContextLines2) {
          jLength -= n2 - nContextLines2;
          nExcessesBetweenChanges += 1;
        }
      }
    }
    while (i2 !== iLength && diffs[i2][0] !== DIFF_EQUAL)
      i2 += 1;
  }
  const hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
  if (nExcessesBetweenChanges !== 0)
    jLength += nExcessesBetweenChanges + 1;
  else if (hasExcessAtStartOrEnd)
    jLength += 1;
  const jLast = jLength - 1;
  const lines = [];
  let jPatchMark = 0;
  if (hasPatch)
    lines.push("");
  let aStart = 0;
  let bStart = 0;
  let aEnd = 0;
  let bEnd = 0;
  const pushCommonLine = (line) => {
    const j = lines.length;
    lines.push(printCommonLine(line, j === 0 || j === jLast, options));
    aEnd += 1;
    bEnd += 1;
  };
  const pushDeleteLine = (line) => {
    const j = lines.length;
    lines.push(printDeleteLine(line, j === 0 || j === jLast, options));
    aEnd += 1;
  };
  const pushInsertLine = (line) => {
    const j = lines.length;
    lines.push(printInsertLine(line, j === 0 || j === jLast, options));
    bEnd += 1;
  };
  i2 = 0;
  while (i2 !== iLength) {
    let iStart = i2;
    while (i2 !== iLength && diffs[i2][0] === DIFF_EQUAL)
      i2 += 1;
    if (iStart !== i2) {
      if (iStart === 0) {
        if (i2 > nContextLines) {
          iStart = i2 - nContextLines;
          aStart = iStart;
          bStart = iStart;
          aEnd = aStart;
          bEnd = bStart;
        }
        for (let iCommon = iStart; iCommon !== i2; iCommon += 1)
          pushCommonLine(diffs[iCommon][1]);
      } else if (i2 === iLength) {
        const iEnd = i2 - iStart > nContextLines ? iStart + nContextLines : i2;
        for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1)
          pushCommonLine(diffs[iCommon][1]);
      } else {
        const nCommon = i2 - iStart;
        if (nCommon > nContextLines2) {
          const iEnd = iStart + nContextLines;
          for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1)
            pushCommonLine(diffs[iCommon][1]);
          lines[jPatchMark] = createPatchMark(
            aStart,
            aEnd,
            bStart,
            bEnd,
            options
          );
          jPatchMark = lines.length;
          lines.push("");
          const nOmit = nCommon - nContextLines2;
          aStart = aEnd + nOmit;
          bStart = bEnd + nOmit;
          aEnd = aStart;
          bEnd = bStart;
          for (let iCommon = i2 - nContextLines; iCommon !== i2; iCommon += 1)
            pushCommonLine(diffs[iCommon][1]);
        } else {
          for (let iCommon = iStart; iCommon !== i2; iCommon += 1)
            pushCommonLine(diffs[iCommon][1]);
        }
      }
    }
    while (i2 !== iLength && diffs[i2][0] === DIFF_DELETE) {
      pushDeleteLine(diffs[i2][1]);
      i2 += 1;
    }
    while (i2 !== iLength && diffs[i2][0] === DIFF_INSERT) {
      pushInsertLine(diffs[i2][1]);
      i2 += 1;
    }
  }
  if (hasPatch)
    lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options);
  return lines.join("\n");
}
function joinAlignedDiffsExpand(diffs, options) {
  return diffs.map((diff2, i2, diffs2) => {
    const line = diff2[1];
    const isFirstOrLast = i2 === 0 || i2 === diffs2.length - 1;
    switch (diff2[0]) {
      case DIFF_DELETE:
        return printDeleteLine(line, isFirstOrLast, options);
      case DIFF_INSERT:
        return printInsertLine(line, isFirstOrLast, options);
      default:
        return printCommonLine(line, isFirstOrLast, options);
    }
  }).join("\n");
}
var noColor = (string3) => string3;
var DIFF_CONTEXT_DEFAULT = 5;
function getDefaultOptions() {
  const c = getColors();
  return {
    aAnnotation: "Expected",
    aColor: c.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: c.red,
    bIndicator: "+",
    changeColor: c.inverse,
    changeLineTrailingSpaceColor: noColor,
    commonColor: c.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: noColor,
    compareKeys: void 0,
    contextLines: DIFF_CONTEXT_DEFAULT,
    emptyFirstOrLastLinePlaceholder: "",
    expand: true,
    includeChangeCounts: false,
    omitAnnotationLines: false,
    patchColor: c.yellow
  };
}
function getCompareKeys(compareKeys) {
  return compareKeys && typeof compareKeys === "function" ? compareKeys : void 0;
}
function getContextLines(contextLines) {
  return typeof contextLines === "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
}
function normalizeDiffOptions(options = {}) {
  return {
    ...getDefaultOptions(),
    ...options,
    compareKeys: getCompareKeys(options.compareKeys),
    contextLines: getContextLines(options.contextLines)
  };
}
function isEmptyString(lines) {
  return lines.length === 1 && lines[0].length === 0;
}
function countChanges(diffs) {
  let a = 0;
  let b2 = 0;
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        a += 1;
        break;
      case DIFF_INSERT:
        b2 += 1;
        break;
    }
  });
  return { a, b: b2 };
}
function printAnnotation({
  aAnnotation,
  aColor,
  aIndicator,
  bAnnotation,
  bColor,
  bIndicator,
  includeChangeCounts,
  omitAnnotationLines
}, changeCounts) {
  if (omitAnnotationLines)
    return "";
  let aRest = "";
  let bRest = "";
  if (includeChangeCounts) {
    const aCount = String(changeCounts.a);
    const bCount = String(changeCounts.b);
    const baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length;
    const aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff));
    const bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff));
    const baCountLengthDiff = bCount.length - aCount.length;
    const aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff));
    const bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
    aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`;
    bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
  }
  const a = `${aIndicator} ${aAnnotation}${aRest}`;
  const b2 = `${bIndicator} ${bAnnotation}${bRest}`;
  return `${aColor(a)}
${bColor(b2)}

`;
}
function printDiffLines(diffs, options) {
  return printAnnotation(options, countChanges(diffs)) + (options.expand ? joinAlignedDiffsExpand(diffs, options) : joinAlignedDiffsNoExpand(diffs, options));
}
function diffLinesUnified(aLines, bLines, options) {
  return printDiffLines(
    diffLinesRaw(
      isEmptyString(aLines) ? [] : aLines,
      isEmptyString(bLines) ? [] : bLines
    ),
    normalizeDiffOptions(options)
  );
}
function diffLinesUnified2(aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) {
  if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare)) {
    aLinesDisplay = [];
    aLinesCompare = [];
  }
  if (isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare)) {
    bLinesDisplay = [];
    bLinesCompare = [];
  }
  if (aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) {
    return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
  }
  const diffs = diffLinesRaw(aLinesCompare, bLinesCompare);
  let aIndex = 0;
  let bIndex = 0;
  diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        diff2[1] = aLinesDisplay[aIndex];
        aIndex += 1;
        break;
      case DIFF_INSERT:
        diff2[1] = bLinesDisplay[bIndex];
        bIndex += 1;
        break;
      default:
        diff2[1] = bLinesDisplay[bIndex];
        aIndex += 1;
        bIndex += 1;
    }
  });
  return printDiffLines(diffs, normalizeDiffOptions(options));
}
function diffLinesRaw(aLines, bLines) {
  const aLength = aLines.length;
  const bLength = bLines.length;
  const isCommon = (aIndex2, bIndex2) => aLines[aIndex2] === bLines[bIndex2];
  const diffs = [];
  let aIndex = 0;
  let bIndex = 0;
  const foundSubsequence = (nCommon, aCommon, bCommon) => {
    for (; aIndex !== aCommon; aIndex += 1)
      diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
    for (; bIndex !== bCommon; bIndex += 1)
      diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
    for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1)
      diffs.push(new Diff(DIFF_EQUAL, bLines[bIndex]));
  };
  const diffSequences = diff$1.default.default || diff$1.default;
  diffSequences(aLength, bLength, isCommon, foundSubsequence);
  for (; aIndex !== aLength; aIndex += 1)
    diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
  for (; bIndex !== bLength; bIndex += 1)
    diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
  return diffs;
}
function getCommonMessage(message, options) {
  const { commonColor } = normalizeDiffOptions(options);
  return commonColor(message);
}
var {
  AsymmetricMatcher: AsymmetricMatcher2,
  DOMCollection: DOMCollection2,
  DOMElement: DOMElement2,
  Immutable: Immutable2,
  ReactElement: ReactElement2,
  ReactTestComponent: ReactTestComponent2
} = import_pretty_format3.plugins;
var PLUGINS2 = [
  ReactTestComponent2,
  ReactElement2,
  DOMElement2,
  DOMCollection2,
  Immutable2,
  AsymmetricMatcher2
];
var FORMAT_OPTIONS = {
  plugins: PLUGINS2
};
var FALLBACK_FORMAT_OPTIONS = {
  callToJSON: false,
  maxDepth: 10,
  plugins: PLUGINS2
};
function diff(a, b2, options) {
  if (Object.is(a, b2))
    return "";
  const aType = getType2(a);
  let expectedType = aType;
  let omitDifference = false;
  if (aType === "object" && typeof a.asymmetricMatch === "function") {
    if (a.$$typeof !== Symbol.for("jest.asymmetricMatcher")) {
      return null;
    }
    if (typeof a.getExpectedType !== "function") {
      return null;
    }
    expectedType = a.getExpectedType();
    omitDifference = expectedType === "string";
  }
  if (expectedType !== getType2(b2)) {
    const { aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator } = normalizeDiffOptions(options);
    const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    const aDisplay = (0, import_pretty_format3.format)(a, formatOptions);
    const bDisplay = (0, import_pretty_format3.format)(b2, formatOptions);
    const aDiff = `${aColor(`${aIndicator} ${aAnnotation}:`)} 
${aDisplay}`;
    const bDiff = `${bColor(`${bIndicator} ${bAnnotation}:`)} 
${bDisplay}`;
    return `${aDiff}

${bDiff}`;
  }
  if (omitDifference)
    return null;
  switch (aType) {
    case "string":
      return diffLinesUnified(a.split("\n"), b2.split("\n"), options);
    case "boolean":
    case "number":
      return comparePrimitive(a, b2, options);
    case "map":
      return compareObjects(sortMap(a), sortMap(b2), options);
    case "set":
      return compareObjects(sortSet(a), sortSet(b2), options);
    default:
      return compareObjects(a, b2, options);
  }
}
function comparePrimitive(a, b2, options) {
  const aFormat = (0, import_pretty_format3.format)(a, FORMAT_OPTIONS);
  const bFormat = (0, import_pretty_format3.format)(b2, FORMAT_OPTIONS);
  return aFormat === bFormat ? "" : diffLinesUnified(aFormat.split("\n"), bFormat.split("\n"), options);
}
function sortMap(map2) {
  return new Map(Array.from(map2.entries()).sort());
}
function sortSet(set3) {
  return new Set(Array.from(set3.values()).sort());
}
function compareObjects(a, b2, options) {
  let difference;
  let hasThrown = false;
  try {
    const formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a, b2, formatOptions, options);
  } catch {
    hasThrown = true;
  }
  const noDiffMessage = getCommonMessage(NO_DIFF_MESSAGE, options);
  if (difference === void 0 || difference === noDiffMessage) {
    const formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a, b2, formatOptions, options);
    if (difference !== noDiffMessage && !hasThrown) {
      difference = `${getCommonMessage(
        SIMILAR_MESSAGE,
        options
      )}

${difference}`;
    }
  }
  return difference;
}
function getFormatOptions(formatOptions, options) {
  const { compareKeys } = normalizeDiffOptions(options);
  return {
    ...formatOptions,
    compareKeys
  };
}
function getObjectsDifference(a, b2, formatOptions, options) {
  const formatOptionsZeroIndent = { ...formatOptions, indent: 0 };
  const aCompare = (0, import_pretty_format3.format)(a, formatOptionsZeroIndent);
  const bCompare = (0, import_pretty_format3.format)(b2, formatOptionsZeroIndent);
  if (aCompare === bCompare) {
    return getCommonMessage(NO_DIFF_MESSAGE, options);
  } else {
    const aDisplay = (0, import_pretty_format3.format)(a, formatOptions);
    const bDisplay = (0, import_pretty_format3.format)(b2, formatOptions);
    return diffLinesUnified2(
      aDisplay.split("\n"),
      bDisplay.split("\n"),
      aCompare.split("\n"),
      bCompare.split("\n"),
      options
    );
  }
}

// node_modules/@vitest/utils/dist/error.js
var import_pretty_format4 = __toESM(require_build(), 1);
var import_diff_sequences = __toESM(require_build2(), 1);
init_loupe();
var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
function isImmutable(v) {
  return v && (v[IS_COLLECTION_SYMBOL] || v[IS_RECORD_SYMBOL]);
}
var OBJECT_PROTO = Object.getPrototypeOf({});
function getUnserializableMessage(err) {
  if (err instanceof Error)
    return `<unserializable>: ${err.message}`;
  if (typeof err === "string")
    return `<unserializable>: ${err}`;
  return "<unserializable>";
}
function serializeError(val, seen = /* @__PURE__ */ new WeakMap()) {
  if (!val || typeof val === "string")
    return val;
  if (typeof val === "function")
    return `Function<${val.name || "anonymous"}>`;
  if (typeof val === "symbol")
    return val.toString();
  if (typeof val !== "object")
    return val;
  if (isImmutable(val))
    return serializeError(val.toJSON(), seen);
  if (val instanceof Promise || val.constructor && val.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element !== "undefined" && val instanceof Element)
    return val.tagName;
  if (typeof val.asymmetricMatch === "function")
    return `${val.toString()} ${format(val.sample)}`;
  if (seen.has(val))
    return seen.get(val);
  if (Array.isArray(val)) {
    const clone2 = new Array(val.length);
    seen.set(val, clone2);
    val.forEach((e, i2) => {
      try {
        clone2[i2] = serializeError(e, seen);
      } catch (err) {
        clone2[i2] = getUnserializableMessage(err);
      }
    });
    return clone2;
  } else {
    const clone2 = /* @__PURE__ */ Object.create(null);
    seen.set(val, clone2);
    let obj = val;
    while (obj && obj !== OBJECT_PROTO) {
      Object.getOwnPropertyNames(obj).forEach((key) => {
        if (key in clone2)
          return;
        try {
          clone2[key] = serializeError(val[key], seen);
        } catch (err) {
          delete clone2[key];
          clone2[key] = getUnserializableMessage(err);
        }
      });
      obj = Object.getPrototypeOf(obj);
    }
    return clone2;
  }
}
function normalizeErrorMessage(message) {
  return message.replace(/__vite_ssr_import_\d+__\./g, "");
}
function processError(err) {
  if (!err || typeof err !== "object")
    return { message: err };
  if (err.stack)
    err.stackStr = String(err.stack);
  if (err.name)
    err.nameStr = String(err.name);
  if (err.showDiff || err.showDiff === void 0 && err.expected !== void 0 && err.actual !== void 0) {
    const clonedActual = deepClone(err.actual, { forceWritable: true });
    const clonedExpected = deepClone(err.expected, { forceWritable: true });
    const { replacedActual, replacedExpected } = replaceAsymmetricMatcher(clonedActual, clonedExpected);
    err.diff = diff(replacedExpected, replacedActual);
  }
  if (typeof err.expected !== "string")
    err.expected = stringify(err.expected, 10);
  if (typeof err.actual !== "string")
    err.actual = stringify(err.actual, 10);
  try {
    if (typeof err.message === "string")
      err.message = normalizeErrorMessage(err.message);
    if (typeof err.cause === "object" && typeof err.cause.message === "string")
      err.cause.message = normalizeErrorMessage(err.cause.message);
  } catch {
  }
  try {
    return serializeError(err);
  } catch (e) {
    return serializeError(new Error(`Failed to fully serialize error: ${e == null ? void 0 : e.message}
Inner error message: ${err == null ? void 0 : err.message}`));
  }
}
function isAsymmetricMatcher(data) {
  const type2 = getType(data);
  return type2 === "Object" && typeof data.asymmetricMatch === "function";
}
function isReplaceable(obj1, obj2) {
  const obj1Type = getType(obj1);
  const obj2Type = getType(obj2);
  return obj1Type === obj2Type && obj1Type === "Object";
}
function replaceAsymmetricMatcher(actual, expected, actualReplaced = /* @__PURE__ */ new WeakSet(), expectedReplaced = /* @__PURE__ */ new WeakSet()) {
  if (!isReplaceable(actual, expected))
    return { replacedActual: actual, replacedExpected: expected };
  if (actualReplaced.has(actual) || expectedReplaced.has(expected))
    return { replacedActual: actual, replacedExpected: expected };
  actualReplaced.add(actual);
  expectedReplaced.add(expected);
  getOwnProperties(expected).forEach((key) => {
    const expectedValue = expected[key];
    const actualValue = actual[key];
    if (isAsymmetricMatcher(expectedValue)) {
      if (expectedValue.asymmetricMatch(actualValue))
        actual[key] = expectedValue;
    } else if (isAsymmetricMatcher(actualValue)) {
      if (actualValue.asymmetricMatch(expectedValue))
        expected[key] = actualValue;
    } else if (isReplaceable(actualValue, expectedValue)) {
      const replaced = replaceAsymmetricMatcher(
        actualValue,
        expectedValue,
        actualReplaced,
        expectedReplaced
      );
      actual[key] = replaced.replacedActual;
      expected[key] = replaced.replacedExpected;
    }
  });
  return {
    replacedActual: actual,
    replacedExpected: expected
  };
}

// node_modules/@vitest/runner/dist/utils.js
function createChainable(keys2, fn2) {
  function create(context) {
    const chain2 = function(...args) {
      return fn2.apply(context, args);
    };
    Object.assign(chain2, fn2);
    chain2.withContext = () => chain2.bind(context);
    chain2.setContext = (key, value) => {
      context[key] = value;
    };
    chain2.mergeContext = (ctx) => {
      Object.assign(context, ctx);
    };
    for (const key of keys2) {
      Object.defineProperty(chain2, key, {
        get() {
          return create({ ...context, [key]: true });
        }
      });
    }
    return chain2;
  }
  const chain = create({});
  chain.fn = fn2;
  return chain;
}
function getNames(task) {
  const names = [task.name];
  let current = task;
  while ((current == null ? void 0 : current.suite) || (current == null ? void 0 : current.file)) {
    current = current.suite || current.file;
    if (current == null ? void 0 : current.name)
      names.unshift(current.name);
  }
  return names;
}

// node_modules/@vitest/runner/dist/index.js
var fnMap = /* @__PURE__ */ new WeakMap();
var hooksMap = /* @__PURE__ */ new WeakMap();
function setFn(key, fn2) {
  fnMap.set(key, fn2);
}
function setHooks(key, hooks) {
  hooksMap.set(key, hooks);
}
function getHooks(key) {
  return hooksMap.get(key);
}
var PendingError = class extends Error {
  constructor(message, task) {
    super(message);
    this.message = message;
    this.taskId = task.id;
  }
  code = "VITEST_PENDING";
  taskId;
};
var collectorContext = {
  tasks: [],
  currentSuite: null
};
function collectTask(task) {
  var _a2;
  (_a2 = collectorContext.currentSuite) == null ? void 0 : _a2.tasks.push(task);
}
async function runWithSuite(suite2, fn2) {
  const prev = collectorContext.currentSuite;
  collectorContext.currentSuite = suite2;
  await fn2();
  collectorContext.currentSuite = prev;
}
function withTimeout(fn2, timeout, isHook = false) {
  if (timeout <= 0 || timeout === Number.POSITIVE_INFINITY)
    return fn2;
  const { setTimeout: setTimeout2, clearTimeout: clearTimeout2 } = getSafeTimers();
  return (...args) => {
    return Promise.race([fn2(...args), new Promise((resolve2, reject) => {
      var _a2;
      const timer = setTimeout2(() => {
        clearTimeout2(timer);
        reject(new Error(makeTimeoutMsg(isHook, timeout)));
      }, timeout);
      (_a2 = timer.unref) == null ? void 0 : _a2.call(timer);
    })]);
  };
}
function createTestContext(test3, runner2) {
  var _a2;
  const context = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  context.meta = test3;
  context.task = test3;
  context.skip = () => {
    test3.pending = true;
    throw new PendingError("test is skipped; abort execution", test3);
  };
  context.onTestFailed = (fn2) => {
    test3.onFailed || (test3.onFailed = []);
    test3.onFailed.push(fn2);
  };
  return ((_a2 = runner2.extendTestContext) == null ? void 0 : _a2.call(runner2, context)) || context;
}
function makeTimeoutMsg(isHook, timeout) {
  return `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.
If this is a long-running ${isHook ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
}
function mergeContextFixtures(fixtures, context = {}) {
  const fixtureArray = Object.entries(fixtures).map(([prop, value], index2) => {
    const isFn = typeof value === "function";
    return {
      prop,
      value,
      index: index2,
      isFn
    };
  });
  if (Array.isArray(context.fixtures))
    context.fixtures = context.fixtures.concat(fixtureArray);
  else
    context.fixtures = fixtureArray;
  fixtureArray.forEach((fixture) => {
    if (fixture.isFn) {
      const usedProps = getUsedProps(fixture.value);
      if (usedProps.length)
        fixture.deps = context.fixtures.filter(({ index: index2, prop }) => index2 !== fixture.index && usedProps.includes(prop));
    }
  });
  return context;
}
function withFixtures(fn2, fixtures, context) {
  if (!fixtures.length)
    return () => fn2(context);
  const usedProps = getUsedProps(fn2);
  if (!usedProps.length)
    return () => fn2(context);
  const usedFixtures = fixtures.filter(({ prop }) => usedProps.includes(prop));
  const pendingFixtures = resolveDeps(usedFixtures);
  let cursor = 0;
  async function use2(fixtureValue) {
    const { prop } = pendingFixtures[cursor++];
    context[prop] = fixtureValue;
    if (cursor < pendingFixtures.length)
      await next();
    else
      await fn2(context);
  }
  async function next() {
    const { value } = pendingFixtures[cursor];
    typeof value === "function" ? await value(context, use2) : await use2(value);
  }
  return () => next();
}
function resolveDeps(fixtures, depSet = /* @__PURE__ */ new Set(), pendingFixtures = []) {
  fixtures.forEach((fixture) => {
    if (pendingFixtures.includes(fixture))
      return;
    if (!fixture.isFn || !fixture.deps) {
      pendingFixtures.push(fixture);
      return;
    }
    if (depSet.has(fixture))
      throw new Error("circular fixture dependency");
    depSet.add(fixture);
    resolveDeps(fixture.deps, depSet, pendingFixtures);
    pendingFixtures.push(fixture);
    depSet.clear();
  });
  return pendingFixtures;
}
function getUsedProps(fn2) {
  const match = fn2.toString().match(/[^(]*\(([^)]*)/);
  if (!match)
    return [];
  const args = splitByComma(match[1]);
  if (!args.length)
    return [];
  const first = args[0];
  if (!(first.startsWith("{") && first.endsWith("}")))
    throw new Error("the first argument must use object destructuring pattern");
  const _first = first.slice(1, -1).replace(/\s/g, "");
  const props = splitByComma(_first).map((prop) => {
    return prop.replace(/\:.*|\=.*/g, "");
  });
  const last = props.at(-1);
  if (last && last.startsWith("..."))
    throw new Error("Rest parameters are not supported");
  return props;
}
function splitByComma(s) {
  const result = [];
  const stack = [];
  let start = 0;
  for (let i2 = 0; i2 < s.length; i2++) {
    if (s[i2] === "{" || s[i2] === "[") {
      stack.push(s[i2] === "{" ? "}" : "]");
    } else if (s[i2] === stack[stack.length - 1]) {
      stack.pop();
    } else if (!stack.length && s[i2] === ",") {
      const token2 = s.substring(start, i2).trim();
      if (token2)
        result.push(token2);
      start = i2 + 1;
    }
  }
  const lastToken = s.substring(start).trim();
  if (lastToken)
    result.push(lastToken);
  return result;
}
var suite = createSuite();
var test = createTest(
  function(name, fn2, options) {
    getCurrentSuite().test.fn.call(this, formatName(name), fn2, options);
  }
);
var describe = suite;
var it = test;
var runner;
var defaultSuite;
function getRunner() {
  return runner;
}
function getCurrentSuite() {
  return collectorContext.currentSuite || defaultSuite;
}
function createSuiteHooks() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function createSuiteCollector(name, factory = () => {
}, mode, concurrent, sequential, shuffle2, each, suiteOptions) {
  const tasks = [];
  const factoryQueue = [];
  let suite2;
  initSuite();
  const test22 = createTest(function(name2, fn2 = noop, options) {
    const mode2 = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    if (typeof options === "number")
      options = { timeout: options };
    if (typeof suiteOptions === "object")
      options = Object.assign({}, suiteOptions, options);
    const test3 = {
      id: "",
      type: "test",
      name: formatName(name2),
      each: this.each,
      mode: mode2,
      suite: void 0,
      fails: this.fails,
      retry: (options == null ? void 0 : options.retry) ?? runner.config.retry,
      repeats: options == null ? void 0 : options.repeats,
      meta: /* @__PURE__ */ Object.create(null)
    };
    if (this.concurrent || !sequential && (concurrent || runner.config.sequence.concurrent))
      test3.concurrent = true;
    if (shuffle2)
      test3.shuffle = true;
    const context = createTestContext(test3, runner);
    Object.defineProperty(test3, "context", {
      value: context,
      enumerable: false
    });
    setFn(test3, withTimeout(
      this.fixtures ? withFixtures(fn2, this.fixtures, context) : () => fn2(context),
      (options == null ? void 0 : options.timeout) ?? runner.config.testTimeout
    ));
    tasks.push(test3);
  });
  const custom2 = function(name2 = "") {
    const self2 = this || {};
    const task = {
      id: "",
      name: name2,
      type: "custom",
      mode: self2.only ? "only" : self2.skip ? "skip" : self2.todo ? "todo" : "run",
      meta: /* @__PURE__ */ Object.create(null)
    };
    tasks.push(task);
    return task;
  };
  const collector = {
    type: "collector",
    name,
    mode,
    options: suiteOptions,
    test: test22,
    tasks,
    collect,
    custom: custom2,
    clear,
    on: addHook
  };
  function addHook(name2, ...fn2) {
    getHooks(suite2)[name2].push(...fn2);
  }
  function initSuite() {
    if (typeof suiteOptions === "number")
      suiteOptions = { timeout: suiteOptions };
    suite2 = {
      id: "",
      type: "suite",
      name,
      mode,
      each,
      shuffle: shuffle2,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null)
    };
    setHooks(suite2, createSuiteHooks());
  }
  function clear() {
    tasks.length = 0;
    factoryQueue.length = 0;
    initSuite();
  }
  async function collect(file) {
    factoryQueue.length = 0;
    if (factory)
      await runWithSuite(collector, () => factory(test22));
    const allChildren = [];
    for (const i2 of [...factoryQueue, ...tasks])
      allChildren.push(i2.type === "collector" ? await i2.collect(file) : i2);
    suite2.file = file;
    suite2.tasks = allChildren;
    allChildren.forEach((task) => {
      task.suite = suite2;
      if (file)
        task.file = file;
    });
    return suite2;
  }
  collectTask(collector);
  return collector;
}
function createSuite() {
  function suiteFn(name, factory, options) {
    const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    const currentSuite = getCurrentSuite();
    if (typeof options === "number")
      options = { timeout: options };
    if (currentSuite == null ? void 0 : currentSuite.options)
      options = { ...currentSuite.options, ...options };
    return createSuiteCollector(formatName(name), factory, mode, this.concurrent, this.sequence, this.shuffle, this.each, options);
  }
  suiteFn.each = function(cases, ...args) {
    const suite2 = this.withContext();
    this.setContext("each", true);
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name, fn2, options) => {
      const _name = formatName(name);
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i2, idx) => {
        const items = Array.isArray(i2) ? i2 : [i2];
        arrayOnlyCases ? suite2(formatTitle(_name, items, idx), () => fn2(...items), options) : suite2(formatTitle(_name, items, idx), () => fn2(i2), options);
      });
      this.setContext("each", void 0);
    };
  };
  suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
  suiteFn.runIf = (condition) => condition ? suite : suite.skip;
  return createChainable(
    ["concurrent", "sequential", "shuffle", "skip", "only", "todo"],
    suiteFn
  );
}
function createTest(fn2, context) {
  const testFn = fn2;
  testFn.each = function(cases, ...args) {
    const test22 = this.withContext();
    this.setContext("each", true);
    if (Array.isArray(cases) && args.length)
      cases = formatTemplateString(cases, args);
    return (name, fn22, options) => {
      const _name = formatName(name);
      const arrayOnlyCases = cases.every(Array.isArray);
      cases.forEach((i2, idx) => {
        const items = Array.isArray(i2) ? i2 : [i2];
        arrayOnlyCases ? test22(formatTitle(_name, items, idx), () => fn22(...items), options) : test22(formatTitle(_name, items, idx), () => fn22(i2), options);
      });
      this.setContext("each", void 0);
    };
  };
  testFn.skipIf = (condition) => condition ? test.skip : test;
  testFn.runIf = (condition) => condition ? test : test.skip;
  testFn.extend = function(fixtures) {
    const _context = mergeContextFixtures(fixtures, context);
    return createTest(function fn22(name, fn22, options) {
      getCurrentSuite().test.fn.call(this, formatName(name), fn22, options);
    }, _context);
  };
  const _test2 = createChainable(
    ["concurrent", "skip", "only", "todo", "fails"],
    testFn
  );
  if (context)
    _test2.mergeContext(context);
  return _test2;
}
function formatName(name) {
  return typeof name === "string" ? name : name instanceof Function ? name.name || "<anonymous>" : String(name);
}
function formatTitle(template, items, idx) {
  if (template.includes("%#")) {
    template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/__vitest_escaped_%__/g, "%%");
  }
  const count = template.split("%").length - 1;
  let formatted = format(template, ...items.slice(0, count));
  if (isObject(items[0])) {
    formatted = formatted.replace(
      /\$([$\w_.]+)/g,
      (_, key) => {
        var _a2, _b;
        return objDisplay(objectAttr(items[0], key), { truncate: (_b = (_a2 = runner == null ? void 0 : runner.config) == null ? void 0 : _a2.chaiConfig) == null ? void 0 : _b.truncateThreshold });
      }
      // https://github.com/chaijs/chai/pull/1490
    );
  }
  return formatted;
}
function formatTemplateString(cases, args) {
  const header = cases.join("").trim().replace(/ /g, "").split("\n").map((i2) => i2.split("|"))[0];
  const res = [];
  for (let i2 = 0; i2 < Math.floor(args.length / header.length); i2++) {
    const oneCase = {};
    for (let j = 0; j < header.length; j++)
      oneCase[header[j]] = args[i2 * header.length + j];
    res.push(oneCase);
  }
  return res;
}
var now$1 = Date.now;
var _test;
function getCurrentTest() {
  return _test;
}
var now = Date.now;
function getDefaultHookTimeout() {
  return getRunner().config.hookTimeout;
}
function beforeAll(fn2, timeout) {
  return getCurrentSuite().on("beforeAll", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
function afterAll(fn2, timeout) {
  return getCurrentSuite().on("afterAll", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
function beforeEach(fn2, timeout) {
  return getCurrentSuite().on("beforeEach", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
function afterEach(fn2, timeout) {
  return getCurrentSuite().on("afterEach", withTimeout(fn2, timeout ?? getDefaultHookTimeout(), true));
}
var onTestFailed = createTestHook("onTestFailed", (test3, handler) => {
  test3.onFailed || (test3.onFailed = []);
  test3.onFailed.push(handler);
});
function createTestHook(name, handler) {
  return (fn2) => {
    const current = getCurrentTest();
    if (!current)
      throw new Error(`Hook ${name}() can only be called inside a test`);
    handler(current, fn2);
  };
}

// node_modules/vitest/dist/vendor-global.97e4527c.js
function getWorkerState() {
  return globalThis.__vitest_worker__;
}
function getCurrentEnvironment() {
  const state = getWorkerState();
  return state == null ? void 0 : state.environment.name;
}

// node_modules/vitest/dist/vendor-index.29282562.js
var _a;
var isNode = typeof process < "u" && typeof process.stdout < "u" && !((_a = process.versions) == null ? void 0 : _a.deno) && !globalThis.window;
var isWindows = isNode && process.platform === "win32";
function getRunMode() {
  return getWorkerState().config.mode;
}
function isRunningInBenchmark() {
  return getRunMode() === "benchmark";
}

// node_modules/chai/index.mjs
var chai_exports = {};
__export(chai_exports, {
  Assertion: () => Assertion,
  AssertionError: () => AssertionError,
  assert: () => assert,
  config: () => config,
  core: () => core,
  default: () => chai_default,
  expect: () => expect,
  should: () => should,
  use: () => use,
  util: () => util,
  version: () => version
});
var import_index = __toESM(require_chai2(), 1);
var expect = import_index.default.expect;
var version = import_index.default.version;
var Assertion = import_index.default.Assertion;
var AssertionError = import_index.default.AssertionError;
var util = import_index.default.util;
var config = import_index.default.config;
var use = import_index.default.use;
var should = import_index.default.should;
var assert = import_index.default.assert;
var core = import_index.default.core;
var chai_default = import_index.default;

// node_modules/vitest/dist/vendor-_commonjsHelpers.7d1333e8.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}

// node_modules/tinyspy/dist/index.js
function g(e, t) {
  if (!e)
    throw new Error(t);
}
function i(e, t) {
  return typeof t === e;
}
function b(e) {
  return e instanceof Promise;
}
function f(e, t, r) {
  Object.defineProperty(e, t, r);
}
function l(e, t, r) {
  Object.defineProperty(e, t, { value: r });
}
var y = Symbol.for("tinyspy:spy");
var m = /* @__PURE__ */ new Set();
var M = (e) => {
  e.called = false, e.callCount = 0, e.calls = [], e.results = [];
};
var C = (e) => (f(e, y, { value: { reset: () => M(e[y]) } }), e[y]);
var A = (e) => e[y] || C(e);
function I(e) {
  g(i("function", e) || i("undefined", e), "cannot spy on a non-function value");
  let t = function(...o) {
    let n2 = A(t);
    if (n2.called = true, n2.callCount++, n2.calls.push(o), n2.next) {
      let [p, s] = n2.next;
      if (n2.results.push(n2.next), n2.next = null, p === "ok")
        return s;
      throw s;
    }
    let a, d = "ok";
    if (n2.impl)
      try {
        a = n2.impl.apply(this, o), d = "ok";
      } catch (p) {
        throw a = p, d = "error", n2.results.push([d, p]), p;
      }
    let u = [d, a];
    if (b(a)) {
      let p = a.then((s) => u[1] = s).catch((s) => {
        throw u[0] = "error", u[1] = s, s;
      });
      Object.assign(p, a), a = p;
    }
    return n2.results.push(u), a;
  };
  l(t, "_isMockFunction", true), l(t, "length", e ? e.length : 0), l(t, "name", e && e.name || "spy");
  let r = A(t);
  return r.reset(), r.impl = e, t;
}
var P = (e, t) => Object.getOwnPropertyDescriptor(e, t);
function E(e, t, r) {
  g(!i("undefined", e), "spyOn could not find an object to spy upon"), g(i("object", e) || i("function", e), "cannot spyOn on a primitive value");
  let o = () => {
    if (!i("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [n2, a] = o(), d = P(e, n2), u = Object.getPrototypeOf(e), p = u && P(u, n2), s = d || p;
  g(s || n2 in e, `${String(n2)} does not exist`);
  let w = false;
  a === "value" && s && !s.value && s.get && (a = "get", w = true, r = s.get());
  let c;
  s ? c = s[a] : a !== "value" ? c = () => e[n2] : c = e[n2], r || (r = c);
  let x = I(r), O = (h) => {
    let { value: G, ...k } = s || {
      configurable: true,
      writable: true
    };
    a !== "value" && delete k.writable, k[a] = h, f(e, n2, k);
  }, K = () => s ? f(e, n2, s) : O(c), T = x[y];
  return l(T, "restore", K), l(T, "getOriginal", () => w ? c() : c), l(T, "willCall", (h) => (T.impl = h, x)), O(w ? () => x : x), m.add(x), x;
}

// node_modules/@vitest/spy/dist/index.js
var spies = /* @__PURE__ */ new Set();
function isMockFunction(fn2) {
  return typeof fn2 === "function" && "_isMockFunction" in fn2 && fn2._isMockFunction;
}
function spyOn(obj, method, accessType) {
  const dictionary = {
    get: "getter",
    set: "setter"
  };
  const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
  const stub = E(obj, objMethod);
  return enhanceSpy(stub);
}
var callOrder = 0;
function enhanceSpy(spy) {
  const stub = spy;
  let implementation;
  let instances = [];
  let invocations = [];
  const state = A(spy);
  const mockContext = {
    get calls() {
      return state.calls;
    },
    get instances() {
      return instances;
    },
    get invocationCallOrder() {
      return invocations;
    },
    get results() {
      return state.results.map(([callType, value]) => {
        const type2 = callType === "error" ? "throw" : "return";
        return { type: type2, value };
      });
    },
    get lastCall() {
      return state.calls[state.calls.length - 1];
    }
  };
  let onceImplementations = [];
  let implementationChangedTemporarily = false;
  function mockCall(...args) {
    instances.push(this);
    invocations.push(++callOrder);
    const impl = implementationChangedTemporarily ? implementation : onceImplementations.shift() || implementation || state.getOriginal() || (() => {
    });
    return impl.apply(this, args);
  }
  let name = stub.name;
  stub.getMockName = () => name || "vi.fn()";
  stub.mockName = (n2) => {
    name = n2;
    return stub;
  };
  stub.mockClear = () => {
    state.reset();
    instances = [];
    invocations = [];
    return stub;
  };
  stub.mockReset = () => {
    stub.mockClear();
    implementation = () => void 0;
    onceImplementations = [];
    return stub;
  };
  stub.mockRestore = () => {
    stub.mockReset();
    state.restore();
    implementation = void 0;
    return stub;
  };
  stub.getMockImplementation = () => implementation;
  stub.mockImplementation = (fn2) => {
    implementation = fn2;
    state.willCall(mockCall);
    return stub;
  };
  stub.mockImplementationOnce = (fn2) => {
    onceImplementations.push(fn2);
    return stub;
  };
  function withImplementation(fn2, cb) {
    const originalImplementation = implementation;
    implementation = fn2;
    state.willCall(mockCall);
    implementationChangedTemporarily = true;
    const reset = () => {
      implementation = originalImplementation;
      implementationChangedTemporarily = false;
    };
    const result = cb();
    if (result instanceof Promise) {
      return result.then(() => {
        reset();
        return stub;
      });
    }
    reset();
    return stub;
  }
  stub.withImplementation = withImplementation;
  stub.mockReturnThis = () => stub.mockImplementation(function() {
    return this;
  });
  stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
  stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
  stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
  stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
  stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
  stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
  Object.defineProperty(stub, "mock", {
    get: () => mockContext
  });
  state.willCall(mockCall);
  spies.add(stub);
  return stub;
}
function fn(implementation) {
  const enhancedSpy = enhanceSpy(E({ spy: implementation || (() => {
  }) }, "spy"));
  if (implementation)
    enhancedSpy.mockImplementation(implementation);
  return enhancedSpy;
}

// node_modules/@vitest/expect/dist/index.js
var MATCHERS_OBJECT = Symbol.for("matchers-object");
var JEST_MATCHERS_OBJECT = Symbol.for("$$jest-matchers-object");
var GLOBAL_EXPECT = Symbol.for("expect-global");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT, {
    get: () => globalState
  });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT]),
      matchers
    })
  });
}
function getState(expect2) {
  return globalThis[MATCHERS_OBJECT].get(expect2);
}
function setState(state, expect2) {
  const map2 = globalThis[MATCHERS_OBJECT];
  const current = map2.get(expect2) || {};
  Object.assign(current, state);
  map2.set(expect2, current);
}
function getMatcherUtils() {
  const c = () => getColors();
  const EXPECTED_COLOR = c().green;
  const RECEIVED_COLOR = c().red;
  const INVERTED_COLOR = c().inverse;
  const BOLD_WEIGHT = c().bold;
  const DIM_COLOR = c().dim;
  function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
    const {
      comment = "",
      isDirectExpectCall = false,
      // seems redundant with received === ''
      isNot = false,
      promise = "",
      secondArgument = "",
      expectedColor = EXPECTED_COLOR,
      receivedColor = RECEIVED_COLOR,
      secondArgumentColor = EXPECTED_COLOR
    } = options;
    let hint = "";
    let dimString = "expect";
    if (!isDirectExpectCall && received !== "") {
      hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
      dimString = ")";
    }
    if (promise !== "") {
      hint += DIM_COLOR(`${dimString}.`) + promise;
      dimString = "";
    }
    if (isNot) {
      hint += `${DIM_COLOR(`${dimString}.`)}not`;
      dimString = "";
    }
    if (matcherName.includes(".")) {
      dimString += matcherName;
    } else {
      hint += DIM_COLOR(`${dimString}.`) + matcherName;
      dimString = "";
    }
    if (expected === "") {
      dimString += "()";
    } else {
      hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
      if (secondArgument)
        hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
      dimString = ")";
    }
    if (comment !== "")
      dimString += ` // ${comment}`;
    if (dimString !== "")
      hint += DIM_COLOR(dimString);
    return hint;
  }
  const SPACE_SYMBOL = "\xB7";
  const replaceTrailingSpaces = (text) => text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
  const printReceived = (object2) => RECEIVED_COLOR(replaceTrailingSpaces(stringify(object2)));
  const printExpected = (value) => EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));
  return {
    EXPECTED_COLOR,
    RECEIVED_COLOR,
    INVERTED_COLOR,
    BOLD_WEIGHT,
    DIM_COLOR,
    matcherHint,
    printReceived,
    printExpected
  };
}
function equals(a, b2, customTesters, strictCheck) {
  customTesters = customTesters || [];
  return eq(a, b2, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
var functionToString = Function.prototype.toString;
function isAsymmetric(obj) {
  return !!obj && typeof obj === "object" && "asymmetricMatch" in obj && isA("Function", obj.asymmetricMatch);
}
function asymmetricMatch(a, b2) {
  const asymmetricA = isAsymmetric(a);
  const asymmetricB = isAsymmetric(b2);
  if (asymmetricA && asymmetricB)
    return void 0;
  if (asymmetricA)
    return a.asymmetricMatch(b2);
  if (asymmetricB)
    return b2.asymmetricMatch(a);
}
function eq(a, b2, aStack, bStack, customTesters, hasKey2) {
  let result = true;
  const asymmetricResult = asymmetricMatch(a, b2);
  if (asymmetricResult !== void 0)
    return asymmetricResult;
  for (let i2 = 0; i2 < customTesters.length; i2++) {
    const customTesterResult = customTesters[i2](a, b2);
    if (customTesterResult !== void 0)
      return customTesterResult;
  }
  if (a instanceof Error && b2 instanceof Error)
    return a.message === b2.message;
  if (Object.is(a, b2))
    return true;
  if (a === null || b2 === null)
    return a === b2;
  const className2 = Object.prototype.toString.call(a);
  if (className2 !== Object.prototype.toString.call(b2))
    return false;
  switch (className2) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      if (typeof a !== typeof b2) {
        return false;
      } else if (typeof a !== "object" && typeof b2 !== "object") {
        return Object.is(a, b2);
      } else {
        return Object.is(a.valueOf(), b2.valueOf());
      }
    case "[object Date]": {
      const numA = +a;
      const numB = +b2;
      return numA === numB || Number.isNaN(numA) && Number.isNaN(numB);
    }
    case "[object RegExp]":
      return a.source === b2.source && a.flags === b2.flags;
  }
  if (typeof a !== "object" || typeof b2 !== "object")
    return false;
  if (isDomNode(a) && isDomNode(b2))
    return a.isEqualNode(b2);
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b2;
    else if (bStack[length] === b2)
      return false;
  }
  aStack.push(a);
  bStack.push(b2);
  if (className2 === "[object Array]" && a.length !== b2.length)
    return false;
  const aKeys = keys(a, hasKey2);
  let key;
  let size = aKeys.length;
  if (keys(b2, hasKey2).length !== size)
    return false;
  while (size--) {
    key = aKeys[size];
    result = hasKey2(b2, key) && eq(a[key], b2[key], aStack, bStack, customTesters, hasKey2);
    if (!result)
      return false;
  }
  aStack.pop();
  bStack.pop();
  return result;
}
function keys(obj, hasKey2) {
  const keys2 = [];
  for (const key in obj) {
    if (hasKey2(obj, key))
      keys2.push(key);
  }
  return keys2.concat(
    Object.getOwnPropertySymbols(obj).filter(
      (symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable
    )
  );
}
function hasDefinedKey(obj, key) {
  return hasKey(obj, key) && obj[key] !== void 0;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
  return obj !== null && typeof obj === "object" && "nodeType" in obj && typeof obj.nodeType === "number" && "nodeName" in obj && typeof obj.nodeName === "string" && "isEqualNode" in obj && typeof obj.isEqualNode === "function";
}
var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL] && !maybeKeyed[IS_ORDERED_SENTINEL]);
}
function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL] && !maybeSet[IS_ORDERED_SENTINEL]);
}
var IteratorSymbol = Symbol.iterator;
function hasIterator(object2) {
  return !!(object2 != null && object2[IteratorSymbol]);
}
function iterableEquality(a, b2, aStack = [], bStack = []) {
  if (typeof a !== "object" || typeof b2 !== "object" || Array.isArray(a) || Array.isArray(b2) || !hasIterator(a) || !hasIterator(b2))
    return void 0;
  if (a.constructor !== b2.constructor)
    return false;
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b2;
  }
  aStack.push(a);
  bStack.push(b2);
  const iterableEqualityWithStack = (a2, b22) => iterableEquality(a2, b22, [...aStack], [...bStack]);
  if (a.size !== void 0) {
    if (a.size !== b2.size) {
      return false;
    } else if (isA("Set", a) || isImmutableUnorderedSet(a)) {
      let allFound = true;
      for (const aValue of a) {
        if (!b2.has(aValue)) {
          let has2 = false;
          for (const bValue of b2) {
            const isEqual = equals(aValue, bValue, [iterableEqualityWithStack]);
            if (isEqual === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    } else if (isA("Map", a) || isImmutableUnorderedKeyed(a)) {
      let allFound = true;
      for (const aEntry of a) {
        if (!b2.has(aEntry[0]) || !equals(aEntry[1], b2.get(aEntry[0]), [iterableEqualityWithStack])) {
          let has2 = false;
          for (const bEntry of b2) {
            const matchedKey = equals(aEntry[0], bEntry[0], [
              iterableEqualityWithStack
            ]);
            let matchedValue = false;
            if (matchedKey === true) {
              matchedValue = equals(aEntry[1], bEntry[1], [
                iterableEqualityWithStack
              ]);
            }
            if (matchedValue === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    }
  }
  const bIterator = b2[IteratorSymbol]();
  for (const aValue of a) {
    const nextB = bIterator.next();
    if (nextB.done || !equals(aValue, nextB.value, [iterableEqualityWithStack]))
      return false;
  }
  if (!bIterator.next().done)
    return false;
  aStack.pop();
  bStack.pop();
  return true;
}
function hasPropertyInObject(object2, key) {
  const shouldTerminate = !object2 || typeof object2 !== "object" || object2 === Object.prototype;
  if (shouldTerminate)
    return false;
  return Object.prototype.hasOwnProperty.call(object2, key) || hasPropertyInObject(Object.getPrototypeOf(object2), key);
}
function isObjectWithKeys(a) {
  return isObject(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date);
}
function subsetEquality(object2, subset) {
  const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object22, subset2) => {
    if (!isObjectWithKeys(subset2))
      return void 0;
    return Object.keys(subset2).every((key) => {
      if (isObjectWithKeys(subset2[key])) {
        if (seenReferences.has(subset2[key]))
          return equals(object22[key], subset2[key], [iterableEquality]);
        seenReferences.set(subset2[key], true);
      }
      const result = object22 != null && hasPropertyInObject(object22, key) && equals(object22[key], subset2[key], [
        iterableEquality,
        subsetEqualityWithContext(seenReferences)
      ]);
      seenReferences.delete(subset2[key]);
      return result;
    });
  };
  return subsetEqualityWithContext()(object2, subset);
}
function typeEquality(a, b2) {
  if (a == null || b2 == null || a.constructor === b2.constructor)
    return void 0;
  return false;
}
function arrayBufferEquality(a, b2) {
  let dataViewA = a;
  let dataViewB = b2;
  if (!(a instanceof DataView && b2 instanceof DataView)) {
    if (!(a instanceof ArrayBuffer) || !(b2 instanceof ArrayBuffer))
      return void 0;
    dataViewA = new DataView(a);
    dataViewB = new DataView(b2);
  }
  if (dataViewA.byteLength !== dataViewB.byteLength)
    return false;
  for (let i2 = 0; i2 < dataViewA.byteLength; i2++) {
    if (dataViewA.getUint8(i2) !== dataViewB.getUint8(i2))
      return false;
  }
  return true;
}
function sparseArrayEquality(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2))
    return void 0;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b2);
  return equals(a, b2, [iterableEquality, typeEquality], true) && equals(aKeys, bKeys);
}
function generateToBeMessage(deepEqualityName, expected = "#{this}", actual = "#{exp}") {
  const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
  if (["toStrictEqual", "toEqual"].includes(deepEqualityName))
    return `${toBeMessage}

If it should pass with deep equality, replace "toBe" with "${deepEqualityName}"

Expected: ${expected}
Received: serializes to the same string
`;
  return toBeMessage;
}
var AsymmetricMatcher3 = class {
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
  }
  // should have "jest" to be compatible with its ecosystem
  $$typeof = Symbol.for("jest.asymmetricMatcher");
  getMatcherContext(expect2) {
    return {
      ...getState(expect2 || globalThis[GLOBAL_EXPECT]),
      equals,
      isNot: this.inverse,
      utils: {
        ...getMatcherUtils(),
        diff,
        stringify,
        iterableEquality,
        subsetEquality
      }
    };
  }
};
var StringContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var Anything = class extends AsymmetricMatcher3 {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ObjectContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  getPrototype(obj) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(obj);
    if (obj.constructor.prototype === obj)
      return null;
    return obj.constructor.prototype;
  }
  hasProperty(obj, property) {
    if (!obj)
      return false;
    if (Object.prototype.hasOwnProperty.call(obj, property))
      return true;
    return this.hasProperty(this.getPrototype(obj), property);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(
        `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    let result = true;
    for (const property in this.sample) {
      if (!this.hasProperty(other, property) || !equals(this.sample[property], other[property])) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var ArrayContaining = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(
        `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`
      );
    }
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every(
      (item) => other.some((another) => equals(item, another))
    );
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var Any = class extends AsymmetricMatcher3 {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError(
        "any() expects to be passed a constructor function. Please pass one or use anything() to match any object."
      );
    }
    super(sample);
  }
  fnNameFor(func) {
    if (func.name)
      return func.name;
    const functionToString2 = Function.prototype.toString;
    const matches = functionToString2.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return matches ? matches[1] : "<anonymous>";
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other == "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other == "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other == "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other == "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other == "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other == "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other == "object";
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    return this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
};
var StringMatching = class extends AsymmetricMatcher3 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var JestAsymmetricMatchers = (chai3, utils) => {
  utils.addMethod(
    chai3.expect,
    "anything",
    () => new Anything()
  );
  utils.addMethod(
    chai3.expect,
    "any",
    (expected) => new Any(expected)
  );
  utils.addMethod(
    chai3.expect,
    "stringContaining",
    (expected) => new StringContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "objectContaining",
    (expected) => new ObjectContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "arrayContaining",
    (expected) => new ArrayContaining(expected)
  );
  utils.addMethod(
    chai3.expect,
    "stringMatching",
    (expected) => new StringMatching(expected)
  );
  chai3.expect.not = {
    stringContaining: (expected) => new StringContaining(expected, true),
    objectContaining: (expected) => new ObjectContaining(expected, true),
    arrayContaining: (expected) => new ArrayContaining(expected, true),
    stringMatching: (expected) => new StringMatching(expected, true)
  };
};
function recordAsyncExpect(test3, promise) {
  if (test3 && promise instanceof Promise) {
    promise = promise.finally(() => {
      const index2 = test3.promises.indexOf(promise);
      if (index2 !== -1)
        test3.promises.splice(index2, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise);
  }
  return promise;
}
function wrapSoft(utils, fn2) {
  return function(...args) {
    var _a2;
    const test3 = utils.flag(this, "vitest-test");
    const state = (test3 == null ? void 0 : test3.context._local) ? test3.context.expect.getState() : getState(globalThis[GLOBAL_EXPECT]);
    if (!state.soft)
      return fn2.apply(this, args);
    if (!test3)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      return fn2.apply(this, args);
    } catch (err) {
      test3.result || (test3.result = { state: "fail" });
      test3.result.state = "fail";
      (_a2 = test3.result).errors || (_a2.errors = []);
      test3.result.errors.push(processError(err));
    }
  };
}
var JestChaiExpect = (chai3, utils) => {
  const c = () => getColors();
  function def(name, fn2) {
    const addMethod = (n2) => {
      const softWrapper = wrapSoft(utils, fn2);
      utils.addMethod(chai3.Assertion.prototype, n2, softWrapper);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, n2, softWrapper);
    };
    if (Array.isArray(name))
      name.forEach((n2) => addMethod(n2));
    else
      addMethod(name);
  }
  ["throw", "throws", "Throw"].forEach((m2) => {
    utils.overwriteMethod(chai3.Assertion.prototype, m2, (_super) => {
      return function(...args) {
        const promise = utils.flag(this, "promise");
        const object2 = utils.flag(this, "object");
        const isNot = utils.flag(this, "negate");
        if (promise === "rejects") {
          utils.flag(this, "object", () => {
            throw object2;
          });
        } else if (promise === "resolves" && typeof object2 !== "function") {
          if (!isNot) {
            const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
            const error = {
              showDiff: false
            };
            throw new AssertionError(message, error, utils.flag(this, "ssfi"));
          } else {
            return;
          }
        }
        _super.apply(this, args);
      };
    });
  });
  def("withTest", function(test3) {
    utils.flag(this, "vitest-test", test3);
    return this;
  });
  def("toEqual", function(expected) {
    const actual = utils.flag(this, "object");
    const equal = equals(
      actual,
      expected,
      [iterableEquality]
    );
    return this.assert(
      equal,
      "expected #{this} to deeply equal #{exp}",
      "expected #{this} to not deeply equal #{exp}",
      expected,
      actual
    );
  });
  def("toStrictEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const equal = equals(
      obj,
      expected,
      [
        iterableEquality,
        typeEquality,
        sparseArrayEquality,
        arrayBufferEquality
      ],
      true
    );
    return this.assert(
      equal,
      "expected #{this} to strictly equal #{exp}",
      "expected #{this} to not strictly equal #{exp}",
      expected,
      obj
    );
  });
  def("toBe", function(expected) {
    const actual = this._obj;
    const pass = Object.is(actual, expected);
    let deepEqualityName = "";
    if (!pass) {
      const toStrictEqualPass = equals(
        actual,
        expected,
        [
          iterableEquality,
          typeEquality,
          sparseArrayEquality,
          arrayBufferEquality
        ],
        true
      );
      if (toStrictEqualPass) {
        deepEqualityName = "toStrictEqual";
      } else {
        const toEqualPass = equals(
          actual,
          expected,
          [iterableEquality]
        );
        if (toEqualPass)
          deepEqualityName = "toEqual";
      }
    }
    return this.assert(
      pass,
      generateToBeMessage(deepEqualityName),
      "expected #{this} not to be #{exp} // Object.is equality",
      expected,
      actual
    );
  });
  def("toMatchObject", function(expected) {
    const actual = this._obj;
    return this.assert(
      equals(actual, expected, [iterableEquality, subsetEquality]),
      "expected #{this} to match object #{exp}",
      "expected #{this} to not match object #{exp}",
      expected,
      actual
    );
  });
  def("toMatch", function(expected) {
    if (typeof expected === "string")
      return this.include(expected);
    else
      return this.match(expected);
  });
  def("toContain", function(item) {
    return this.contain(item);
  });
  def("toContainEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const index2 = Array.from(obj).findIndex((item) => {
      return equals(item, expected);
    });
    this.assert(
      index2 !== -1,
      "expected #{this} to deep equally contain #{exp}",
      "expected #{this} to not deep equally contain #{exp}",
      expected
    );
  });
  def("toBeTruthy", function() {
    const obj = utils.flag(this, "object");
    this.assert(
      Boolean(obj),
      "expected #{this} to be truthy",
      "expected #{this} to not be truthy",
      obj,
      false
    );
  });
  def("toBeFalsy", function() {
    const obj = utils.flag(this, "object");
    this.assert(
      !obj,
      "expected #{this} to be falsy",
      "expected #{this} to not be falsy",
      obj,
      false
    );
  });
  def("toBeGreaterThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual > expected,
      `expected ${actual} to be greater than ${expected}`,
      `expected ${actual} to be not greater than ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeGreaterThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual >= expected,
      `expected ${actual} to be greater than or equal to ${expected}`,
      `expected ${actual} to be not greater than or equal to ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeLessThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual < expected,
      `expected ${actual} to be less than ${expected}`,
      `expected ${actual} to be not less than ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeLessThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(
      actual <= expected,
      `expected ${actual} to be less than or equal to ${expected}`,
      `expected ${actual} to be not less than or equal to ${expected}`,
      actual,
      expected,
      false
    );
  });
  def("toBeNaN", function() {
    return this.be.NaN;
  });
  def("toBeUndefined", function() {
    return this.be.undefined;
  });
  def("toBeNull", function() {
    return this.be.null;
  });
  def("toBeDefined", function() {
    const negate = utils.flag(this, "negate");
    utils.flag(this, "negate", false);
    if (negate)
      return this.be.undefined;
    return this.not.be.undefined;
  });
  def("toBeTypeOf", function(expected) {
    const actual = typeof this._obj;
    const equal = expected === actual;
    return this.assert(
      equal,
      "expected #{this} to be type of #{exp}",
      "expected #{this} not to be type of #{exp}",
      expected,
      actual
    );
  });
  def("toBeInstanceOf", function(obj) {
    return this.instanceOf(obj);
  });
  def("toHaveLength", function(length) {
    return this.have.length(length);
  });
  def("toHaveProperty", function(...args) {
    if (Array.isArray(args[0]))
      args[0] = args[0].map((key) => String(key).replace(/([.[\]])/g, "\\$1")).join(".");
    const actual = this._obj;
    const [propertyName, expected] = args;
    const getValue = () => {
      const hasOwn = Object.prototype.hasOwnProperty.call(actual, propertyName);
      if (hasOwn)
        return { value: actual[propertyName], exists: true };
      return utils.getPathInfo(actual, propertyName);
    };
    const { value, exists } = getValue();
    const pass = exists && (args.length === 1 || equals(expected, value));
    const valueString = args.length === 1 ? "" : ` with value ${utils.objDisplay(expected)}`;
    return this.assert(
      pass,
      `expected #{this} to have property "${propertyName}"${valueString}`,
      `expected #{this} to not have property "${propertyName}"${valueString}`,
      actual
    );
  });
  def("toBeCloseTo", function(received, precision = 2) {
    const expected = this._obj;
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Number.POSITIVE_INFINITY && expected === Number.POSITIVE_INFINITY) {
      pass = true;
    } else if (received === Number.NEGATIVE_INFINITY && expected === Number.NEGATIVE_INFINITY) {
      pass = true;
    } else {
      expectedDiff = 10 ** -precision / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    return this.assert(
      pass,
      `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`,
      received,
      expected,
      false
    );
  });
  const assertIsMock = (assertion) => {
    if (!isMockFunction(assertion._obj))
      throw new TypeError(`${utils.inspect(assertion._obj)} is not a spy or a call to a spy!`);
  };
  const getSpy = (assertion) => {
    assertIsMock(assertion);
    return assertion._obj;
  };
  const ordinalOf = (i2) => {
    const j = i2 % 10;
    const k = i2 % 100;
    if (j === 1 && k !== 11)
      return `${i2}st`;
    if (j === 2 && k !== 12)
      return `${i2}nd`;
    if (j === 3 && k !== 13)
      return `${i2}rd`;
    return `${i2}th`;
  };
  const formatCalls = (spy, msg, actualCall) => {
    if (spy.mock.calls) {
      msg += c().gray(`

Received: 

${spy.mock.calls.map((callArg, i2) => {
        let methodCall = c().bold(`  ${ordinalOf(i2 + 1)} ${spy.getMockName()} call:

`);
        if (actualCall)
          methodCall += diff(actualCall, callArg, { omitAnnotationLines: true });
        else
          methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
        methodCall += "\n";
        return methodCall;
      }).join("\n")}`);
    }
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  const formatReturns = (spy, msg, actualReturn) => {
    msg += c().gray(`

Received: 

${spy.mock.results.map((callReturn, i2) => {
      let methodCall = c().bold(`  ${ordinalOf(i2 + 1)} ${spy.getMockName()} call return:

`);
      if (actualReturn)
        methodCall += diff(actualReturn, callReturn.value, { omitAnnotationLines: true });
      else
        methodCall += stringify(callReturn).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += c().gray(`

Number of calls: ${c().bold(spy.mock.calls.length)}
`);
    return msg;
  };
  def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === number,
      `expected "${spyName}" to be called #{exp} times, but got ${callCount} times`,
      `expected "${spyName}" to not be called #{exp} times`,
      number,
      callCount,
      false
    );
  });
  def("toHaveBeenCalledOnce", function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(
      callCount === 1,
      `expected "${spyName}" to be called once, but got ${callCount} times`,
      `expected "${spyName}" to not be called once`,
      1,
      callCount,
      false
    );
  });
  def(["toHaveBeenCalled", "toBeCalled"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    const called = callCount > 0;
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        called,
        `expected "${spyName}" to be called at least once`,
        `expected "${spyName}" to not be called at all, but actually been called ${callCount} times`,
        true,
        called
      ]
    );
    if (called && isNot)
      msg = formatCalls(spy, msg);
    if (called && isNot || !called && !isNot) {
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.calls.some((callArg) => equals(callArg, args, [iterableEquality]));
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to be called with arguments: #{exp}`,
        `expected "${spyName}" to not be called with arguments: #{exp}`,
        args
      ]
    );
    if (pass && isNot || !pass && !isNot) {
      msg = formatCalls(spy, msg, args);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const nthCall = spy.mock.calls[times - 1];
    this.assert(
      equals(nthCall, args, [iterableEquality]),
      `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}`,
      `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`,
      args,
      nthCall
    );
  });
  def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const lastCall = spy.mock.calls[spy.mock.calls.length - 1];
    this.assert(
      equals(lastCall, args, [iterableEquality]),
      `expected last "${spyName}" call to have been called with #{exp}`,
      `expected last "${spyName}" call to not have been called with #{exp}`,
      args,
      lastCall
    );
  });
  def(["toThrow", "toThrowError"], function(expected) {
    if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp)
      return this.throws(expected);
    const obj = this._obj;
    const promise = utils.flag(this, "promise");
    const isNot = utils.flag(this, "negate");
    let thrown = null;
    if (promise === "rejects") {
      thrown = obj;
    } else if (promise === "resolves" && typeof obj !== "function") {
      if (!isNot) {
        const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
        const error = {
          showDiff: false
        };
        throw new AssertionError(message, error, utils.flag(this, "ssfi"));
      } else {
        return;
      }
    } else {
      try {
        obj();
      } catch (err) {
        thrown = err;
      }
    }
    if (typeof expected === "function") {
      const name = expected.name || expected.prototype.constructor.name;
      return this.assert(
        thrown && thrown instanceof expected,
        `expected error to be instance of ${name}`,
        `expected error not to be instance of ${name}`,
        expected,
        thrown,
        false
      );
    }
    if (expected instanceof Error) {
      return this.assert(
        thrown && expected.message === thrown.message,
        `expected error to have message: ${expected.message}`,
        `expected error not to have message: ${expected.message}`,
        expected.message,
        thrown && thrown.message
      );
    }
    if (typeof expected === "object" && "asymmetricMatch" in expected && typeof expected.asymmetricMatch === "function") {
      const matcher = expected;
      return this.assert(
        thrown && matcher.asymmetricMatch(thrown),
        "expected error to match asymmetric matcher",
        "expected error not to match asymmetric matcher",
        matcher.toString(),
        thrown,
        false
      );
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
  });
  def(["toHaveReturned", "toReturn"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const calledAndNotThrew = spy.mock.calls.length > 0 && spy.mock.results.some(({ type: type2 }) => type2 !== "throw");
    this.assert(
      calledAndNotThrew,
      `expected "${spyName}" to be successfully called at least once`,
      `expected "${spyName}" to not be successfully called`,
      calledAndNotThrew,
      !calledAndNotThrew,
      false
    );
  });
  def(["toHaveReturnedTimes", "toReturnTimes"], function(times) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const successfulReturns = spy.mock.results.reduce((success, { type: type2 }) => type2 === "throw" ? success : ++success, 0);
    this.assert(
      successfulReturns === times,
      `expected "${spyName}" to be successfully called ${times} times`,
      `expected "${spyName}" to not be successfully called ${times} times`,
      `expected number of returns: ${times}`,
      `received number of returns: ${successfulReturns}`,
      false
    );
  });
  def(["toHaveReturnedWith", "toReturnWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.results.some(({ type: type2, value: result }) => type2 === "return" && equals(value, result));
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(
      this,
      [
        pass,
        `expected "${spyName}" to return with: #{exp} at least once`,
        `expected "${spyName}" to not return with: #{exp}`,
        value
      ]
    );
    if (pass && isNot || !pass && !isNot) {
      msg = formatReturns(spy, msg, value);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveLastReturnedWith", "lastReturnedWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const { value: lastResult } = spy.mock.results[spy.mock.results.length - 1];
    const pass = equals(lastResult, value);
    this.assert(
      pass,
      `expected last "${spyName}" call to return #{exp}`,
      `expected last "${spyName}" call to not return #{exp}`,
      value,
      lastResult
    );
  });
  def(["toHaveNthReturnedWith", "nthReturnedWith"], function(nthCall, value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const isNot = utils.flag(this, "negate");
    const { type: callType, value: callResult } = spy.mock.results[nthCall - 1];
    const ordinalCall = `${ordinalOf(nthCall)} call`;
    if (!isNot && callType === "throw")
      chai3.assert.fail(`expected ${ordinalCall} to return #{exp}, but instead it threw an error`);
    const nthCallReturn = equals(callResult, value);
    this.assert(
      nthCallReturn,
      `expected ${ordinalCall} "${spyName}" call to return #{exp}`,
      `expected ${ordinalCall} "${spyName}" call to not return #{exp}`,
      value,
      callResult
    );
  });
  def("toSatisfy", function(matcher, message) {
    return this.be.satisfy(matcher, message);
  });
  utils.addProperty(chai3.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
    utils.flag(this, "promise", "resolves");
    utils.flag(this, "error", new Error("resolves"));
    const test3 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    if (typeof (obj == null ? void 0 : obj.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return async (...args) => {
          const promise = obj.then(
            (value) => {
              utils.flag(this, "object", value);
              return result.call(this, ...args);
            },
            (err) => {
              throw new Error(`promise rejected "${String(err)}" instead of resolving`);
            }
          );
          return recordAsyncExpect(test3, promise);
        };
      }
    });
    return proxy;
  });
  utils.addProperty(chai3.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
    utils.flag(this, "promise", "rejects");
    utils.flag(this, "error", new Error("rejects"));
    const test3 = utils.flag(this, "vitest-test");
    const obj = utils.flag(this, "object");
    const wrapper = typeof obj === "function" ? obj() : obj;
    if (typeof (wrapper == null ? void 0 : wrapper.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return async (...args) => {
          const promise = wrapper.then(
            (value) => {
              throw new Error(`promise resolved "${String(value)}" instead of rejecting`);
            },
            (err) => {
              utils.flag(this, "object", err);
              return result.call(this, ...args);
            }
          );
          return recordAsyncExpect(test3, promise);
        };
      }
    });
    return proxy;
  });
};
function getMatcherState(assertion, expect2) {
  const obj = assertion._obj;
  const isNot = util.flag(assertion, "negate");
  const promise = util.flag(assertion, "promise") || "";
  const jestUtils = {
    ...getMatcherUtils(),
    diff,
    stringify,
    iterableEquality,
    subsetEquality
  };
  const matcherState = {
    ...getState(expect2),
    isNot,
    utils: jestUtils,
    promise,
    equals,
    // needed for built-in jest-snapshots, but we don't use it
    suppressedErrors: []
  };
  return {
    state: matcherState,
    isNot,
    obj
  };
}
var JestExtendError = class extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.actual = actual;
    this.expected = expected;
  }
};
function JestExtendPlugin(expect2, matchers) {
  return (c, utils) => {
    Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
      function expectWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const result = expectAssertion.call(state, obj, ...args);
        if (result && typeof result === "object" && result instanceof Promise) {
          return result.then(({ pass: pass2, message: message2, actual: actual2, expected: expected2 }) => {
            if (pass2 && isNot || !pass2 && !isNot)
              throw new JestExtendError(message2(), actual2, expected2);
          });
        }
        const { pass, message, actual, expected } = result;
        if (pass && isNot || !pass && !isNot)
          throw new JestExtendError(message(), actual, expected);
      }
      const softWrapper = wrapSoft(utils, expectWrapper);
      utils.addMethod(globalThis[JEST_MATCHERS_OBJECT].matchers, expectAssertionName, softWrapper);
      utils.addMethod(c.Assertion.prototype, expectAssertionName, softWrapper);
      class CustomMatcher extends AsymmetricMatcher3 {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = expectAssertion.call(
            this.getMatcherContext(expect2),
            other,
            ...this.sample
          );
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${expectAssertionName}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      Object.defineProperty(expect2, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(false, ...sample),
        writable: true
      });
      Object.defineProperty(expect2.not, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
    });
  };
}
var JestExtend = (chai3, utils) => {
  utils.addMethod(chai3.expect, "extend", (expect2, expects) => {
    chai3.use(JestExtendPlugin(expect2, expects));
  });
};

// node_modules/@vitest/snapshot/dist/index.js
var import_pretty_format5 = __toESM(require_build(), 1);
function getDefaultExportFromCjs2(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var naturalCompare$2 = { exports: {} };
var naturalCompare = function(a, b2) {
  var i2, codeA, codeB = 1, posA = 0, posB = 0, alphabet = String.alphabet;
  function getCode(str, pos, code) {
    if (code) {
      for (i2 = pos; code = getCode(str, i2), code < 76 && code > 65; )
        ++i2;
      return +str.slice(pos - 1, i2);
    }
    code = alphabet && alphabet.indexOf(str.charAt(pos));
    return code > -1 ? code + 76 : (code = str.charCodeAt(pos) || 0, code < 45 || code > 127) ? code : code < 46 ? 65 : code < 48 ? code - 1 : code < 58 ? code + 18 : code < 65 ? code - 11 : code < 91 ? code + 11 : code < 97 ? code - 37 : code < 123 ? code + 5 : code - 63;
  }
  if ((a += "") != (b2 += ""))
    for (; codeB; ) {
      codeA = getCode(a, posA++);
      codeB = getCode(b2, posB++);
      if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
        codeA = getCode(a, posA, posA);
        codeB = getCode(b2, posB, posA = i2);
        posB = i2;
      }
      if (codeA != codeB)
        return codeA < codeB ? -1 : 1;
    }
  return 0;
};
try {
  naturalCompare$2.exports = naturalCompare;
} catch (e) {
  String.naturalCompare = naturalCompare;
}
var naturalCompareExports = naturalCompare$2.exports;
var naturalCompare$1 = /* @__PURE__ */ getDefaultExportFromCjs2(naturalCompareExports);
function notNullish2(v) {
  return v != null;
}
function isPrimitive2(value) {
  return value === null || typeof value !== "function" && typeof value !== "object";
}
function isObject3(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function getCallLastIndex2(code) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code.length) {
    beforeChar = code[charIndex];
    charIndex++;
    const char = code[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char)
        inString = null;
      else if (!inString)
        inString = char;
    }
    if (!inString) {
      if (char === "(")
        startedBracers++;
      if (char === ")")
        endedBracers++;
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers)
      return charIndex;
  }
  return null;
}
var getPromiseValue2 = () => "Promise{\u2026}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue2 = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
var nodeInspect2 = false;
try {
  const nodeUtil = require("util");
  nodeInspect2 = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
} catch (noNodeInspect) {
  nodeInspect2 = false;
}
var lineSplitRE = /\r?\n/;
function positionToOffset(source, lineNumber, columnNumber) {
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let start = 0;
  if (lineNumber > lines.length)
    return source.length;
  for (let i2 = 0; i2 < lineNumber - 1; i2++)
    start += lines[i2].length + nl;
  return start + columnNumber;
}
function offsetToLineNumber(source, offset) {
  if (offset > source.length) {
    throw new Error(
      `offset is longer than source length! offset ${offset} > length ${source.length}`
    );
  }
  const lines = source.split(lineSplitRE);
  const nl = /\r\n/.test(source) ? 2 : 1;
  let counted = 0;
  let line = 0;
  for (; line < lines.length; line++) {
    const lineLength = lines[line].length + nl;
    if (counted + lineLength >= offset)
      break;
    counted += lineLength;
  }
  return line + 1;
}
var serialize$1 = (val, config2, indentation, depth, refs, printer) => {
  const name = val.getMockName();
  const nameString = name === "vi.fn()" ? "" : ` ${name}`;
  let callsString = "";
  if (val.mock.calls.length !== 0) {
    const indentationNext = indentation + config2.indent;
    callsString = ` {${config2.spacingOuter}${indentationNext}"calls": ${printer(val.mock.calls, config2, indentationNext, depth, refs)}${config2.min ? ", " : ","}${config2.spacingOuter}${indentationNext}"results": ${printer(val.mock.results, config2, indentationNext, depth, refs)}${config2.min ? "" : ","}${config2.spacingOuter}${indentation}}`;
  }
  return `[MockFunction${nameString}]${callsString}`;
};
var test2 = (val) => val && !!val._isMockFunction;
var plugin = { serialize: serialize$1, test: test2 };
var {
  DOMCollection: DOMCollection3,
  DOMElement: DOMElement3,
  Immutable: Immutable3,
  ReactElement: ReactElement3,
  ReactTestComponent: ReactTestComponent3,
  AsymmetricMatcher: AsymmetricMatcher4
} = import_pretty_format5.plugins;
var PLUGINS3 = [
  ReactTestComponent3,
  ReactElement3,
  DOMElement3,
  DOMCollection3,
  Immutable3,
  AsymmetricMatcher4,
  plugin
];
function addSerializer(plugin2) {
  PLUGINS3 = [plugin2].concat(PLUGINS3);
}
function getSerializers() {
  return PLUGINS3;
}
function testNameToKey(testName, count) {
  return `${testName} ${count}`;
}
function keyToTestName(key) {
  if (!/ \d+$/.test(key))
    throw new Error("Snapshot keys must end with a number.");
  return key.replace(/ \d+$/, "");
}
function getSnapshotData(content, options) {
  const update = options.updateSnapshot;
  const data = /* @__PURE__ */ Object.create(null);
  let snapshotContents = "";
  let dirty = false;
  if (content != null) {
    try {
      snapshotContents = content;
      const populate = new Function("exports", snapshotContents);
      populate(data);
    } catch {
    }
  }
  const isInvalid = snapshotContents;
  if ((update === "all" || update === "new") && isInvalid)
    dirty = true;
  return { data, dirty };
}
function addExtraLineBreaks(string3) {
  return string3.includes("\n") ? `
${string3}
` : string3;
}
function removeExtraLineBreaks(string3) {
  return string3.length > 2 && string3.startsWith("\n") && string3.endsWith("\n") ? string3.slice(1, -1) : string3;
}
var escapeRegex = true;
var printFunctionName = false;
function serialize(val, indent = 2, formatOverrides = {}) {
  return normalizeNewlines(
    (0, import_pretty_format5.format)(val, {
      escapeRegex,
      indent,
      plugins: getSerializers(),
      printFunctionName,
      ...formatOverrides
    })
  );
}
function escapeBacktickString(str) {
  return str.replace(/`|\\|\${/g, "\\$&");
}
function printBacktickString(str) {
  return `\`${escapeBacktickString(str)}\``;
}
function normalizeNewlines(string3) {
  return string3.replace(/\r\n|\r/g, "\n");
}
async function saveSnapshotFile(environment, snapshotData, snapshotPath) {
  const snapshots = Object.keys(snapshotData).sort(naturalCompare$1).map(
    (key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`
  );
  const content = `${environment.getHeader()}

${snapshots.join("\n\n")}
`;
  const oldContent = await environment.readSnapshotFile(snapshotPath);
  const skipWriting = oldContent != null && oldContent === content;
  if (skipWriting)
    return;
  await environment.saveSnapshotFile(
    snapshotPath,
    content
  );
}
function prepareExpected(expected) {
  function findStartIndent() {
    var _a2, _b;
    const matchObject = /^( +)}\s+$/m.exec(expected || "");
    const objectIndent = (_a2 = matchObject == null ? void 0 : matchObject[1]) == null ? void 0 : _a2.length;
    if (objectIndent)
      return objectIndent;
    const matchText = /^\n( +)"/.exec(expected || "");
    return ((_b = matchText == null ? void 0 : matchText[1]) == null ? void 0 : _b.length) || 0;
  }
  const startIndent = findStartIndent();
  let expectedTrimmed = expected == null ? void 0 : expected.trim();
  if (startIndent) {
    expectedTrimmed = expectedTrimmed == null ? void 0 : expectedTrimmed.replace(new RegExp(`^${" ".repeat(startIndent)}`, "gm"), "").replace(/ +}$/, "}");
  }
  return expectedTrimmed;
}
function deepMergeArray(target = [], source = []) {
  const mergedOutput = Array.from(target);
  source.forEach((sourceElement, index2) => {
    const targetElement = mergedOutput[index2];
    if (Array.isArray(target[index2])) {
      mergedOutput[index2] = deepMergeArray(target[index2], sourceElement);
    } else if (isObject3(targetElement)) {
      mergedOutput[index2] = deepMergeSnapshot(target[index2], sourceElement);
    } else {
      mergedOutput[index2] = sourceElement;
    }
  });
  return mergedOutput;
}
function deepMergeSnapshot(target, source) {
  if (isObject3(target) && isObject3(source)) {
    const mergedOutput = { ...target };
    Object.keys(source).forEach((key) => {
      if (isObject3(source[key]) && !source[key].$$typeof) {
        if (!(key in target))
          Object.assign(mergedOutput, { [key]: source[key] });
        else
          mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        mergedOutput[key] = deepMergeArray(target[key], source[key]);
      } else {
        Object.assign(mergedOutput, { [key]: source[key] });
      }
    });
    return mergedOutput;
  } else if (Array.isArray(target) && Array.isArray(source)) {
    return deepMergeArray(target, source);
  }
  return target;
}
function normalizeWindowsPath(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve$2 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path = index2 >= 0 ? arguments_[index2] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path.length; ++index2) {
    if (index2 < path.length) {
      char = path[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index2)}`;
        } else {
          res = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
var comma2 = ",".charCodeAt(0);
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar2 = new Uint8Array(64);
var charToInt2 = new Uint8Array(128);
for (let i2 = 0; i2 < chars2.length; i2++) {
  const c = chars2.charCodeAt(i2);
  intToChar2[i2] = c;
  charToInt2[c] = i2;
}
function decode(mappings) {
  const state = new Int32Array(5);
  const decoded = [];
  let index2 = 0;
  do {
    const semi = indexOf(mappings, index2);
    const line = [];
    let sorted = true;
    let lastCol = 0;
    state[0] = 0;
    for (let i2 = index2; i2 < semi; i2++) {
      let seg;
      i2 = decodeInteger(mappings, i2, state, 0);
      const col = state[0];
      if (col < lastCol)
        sorted = false;
      lastCol = col;
      if (hasMoreVlq(mappings, i2, semi)) {
        i2 = decodeInteger(mappings, i2, state, 1);
        i2 = decodeInteger(mappings, i2, state, 2);
        i2 = decodeInteger(mappings, i2, state, 3);
        if (hasMoreVlq(mappings, i2, semi)) {
          i2 = decodeInteger(mappings, i2, state, 4);
          seg = [col, state[1], state[2], state[3], state[4]];
        } else {
          seg = [col, state[1], state[2], state[3]];
        }
      } else {
        seg = [col];
      }
      line.push(seg);
    }
    if (!sorted)
      sort(line);
    decoded.push(line);
    index2 = semi + 1;
  } while (index2 <= mappings.length);
  return decoded;
}
function indexOf(mappings, index2) {
  const idx = mappings.indexOf(";", index2);
  return idx === -1 ? mappings.length : idx;
}
function decodeInteger(mappings, pos, state, j) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = mappings.charCodeAt(pos++);
    integer = charToInt2[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  state[j] += value;
  return pos;
}
function hasMoreVlq(mappings, i2, length) {
  if (i2 >= length)
    return false;
  return mappings.charCodeAt(i2) !== comma2;
}
function sort(line) {
  line.sort(sortComparator$1);
}
function sortComparator$1(a, b2) {
  return a[0] - b2[0];
}
var schemeRegex = /^[\w+.-]+:\/\//;
var urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
var fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var UrlType;
(function(UrlType22) {
  UrlType22[UrlType22["Empty"] = 1] = "Empty";
  UrlType22[UrlType22["Hash"] = 2] = "Hash";
  UrlType22[UrlType22["Query"] = 3] = "Query";
  UrlType22[UrlType22["RelativePath"] = 4] = "RelativePath";
  UrlType22[UrlType22["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType22[UrlType22["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType22[UrlType22["Absolute"] = 7] = "Absolute";
})(UrlType || (UrlType = {}));
function isAbsoluteUrl(input) {
  return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
  return input.startsWith("//");
}
function isAbsolutePath(input) {
  return input.startsWith("/");
}
function isFileUrl(input) {
  return input.startsWith("file:");
}
function isRelative(input) {
  return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
  const match = urlRegex.exec(input);
  return makeUrl(match[1], match[2] || "", match[3], match[4] || "", match[5] || "/", match[6] || "", match[7] || "");
}
function parseFileUrl(input) {
  const match = fileRegex.exec(input);
  const path = match[2];
  return makeUrl("file:", "", match[1] || "", "", isAbsolutePath(path) ? path : "/" + path, match[3] || "", match[4] || "");
}
function makeUrl(scheme, user, host, port, path, query, hash) {
  return {
    scheme,
    user,
    host,
    port,
    path,
    query,
    hash,
    type: UrlType.Absolute
  };
}
function parseUrl(input) {
  if (isSchemeRelativeUrl(input)) {
    const url2 = parseAbsoluteUrl("http:" + input);
    url2.scheme = "";
    url2.type = UrlType.SchemeRelative;
    return url2;
  }
  if (isAbsolutePath(input)) {
    const url2 = parseAbsoluteUrl("http://foo.com" + input);
    url2.scheme = "";
    url2.host = "";
    url2.type = UrlType.AbsolutePath;
    return url2;
  }
  if (isFileUrl(input))
    return parseFileUrl(input);
  if (isAbsoluteUrl(input))
    return parseAbsoluteUrl(input);
  const url = parseAbsoluteUrl("http://foo.com/" + input);
  url.scheme = "";
  url.host = "";
  url.type = input ? input.startsWith("?") ? UrlType.Query : input.startsWith("#") ? UrlType.Hash : UrlType.RelativePath : UrlType.Empty;
  return url;
}
function stripPathFilename(path) {
  if (path.endsWith("/.."))
    return path;
  const index2 = path.lastIndexOf("/");
  return path.slice(0, index2 + 1);
}
function mergePaths(url, base) {
  normalizePath(base, base.type);
  if (url.path === "/") {
    url.path = base.path;
  } else {
    url.path = stripPathFilename(base.path) + url.path;
  }
}
function normalizePath(url, type2) {
  const rel = type2 <= UrlType.RelativePath;
  const pieces = url.path.split("/");
  let pointer = 1;
  let positive = 0;
  let addTrailingSlash = false;
  for (let i2 = 1; i2 < pieces.length; i2++) {
    const piece = pieces[i2];
    if (!piece) {
      addTrailingSlash = true;
      continue;
    }
    addTrailingSlash = false;
    if (piece === ".")
      continue;
    if (piece === "..") {
      if (positive) {
        addTrailingSlash = true;
        positive--;
        pointer--;
      } else if (rel) {
        pieces[pointer++] = piece;
      }
      continue;
    }
    pieces[pointer++] = piece;
    positive++;
  }
  let path = "";
  for (let i2 = 1; i2 < pointer; i2++) {
    path += "/" + pieces[i2];
  }
  if (!path || addTrailingSlash && !path.endsWith("/..")) {
    path += "/";
  }
  url.path = path;
}
function resolve$1(input, base) {
  if (!input && !base)
    return "";
  const url = parseUrl(input);
  let inputType = url.type;
  if (base && inputType !== UrlType.Absolute) {
    const baseUrl = parseUrl(base);
    const baseType = baseUrl.type;
    switch (inputType) {
      case UrlType.Empty:
        url.hash = baseUrl.hash;
      case UrlType.Hash:
        url.query = baseUrl.query;
      case UrlType.Query:
      case UrlType.RelativePath:
        mergePaths(url, baseUrl);
      case UrlType.AbsolutePath:
        url.user = baseUrl.user;
        url.host = baseUrl.host;
        url.port = baseUrl.port;
      case UrlType.SchemeRelative:
        url.scheme = baseUrl.scheme;
    }
    if (baseType > inputType)
      inputType = baseType;
  }
  normalizePath(url, inputType);
  const queryHash = url.query + url.hash;
  switch (inputType) {
    case UrlType.Hash:
    case UrlType.Query:
      return queryHash;
    case UrlType.RelativePath: {
      const path = url.path.slice(1);
      if (!path)
        return queryHash || ".";
      if (isRelative(base || input) && !isRelative(path)) {
        return "./" + path + queryHash;
      }
      return path + queryHash;
    }
    case UrlType.AbsolutePath:
      return url.path + queryHash;
    default:
      return url.scheme + "//" + url.user + url.host + url.port + url.path + queryHash;
  }
}
function resolve(input, base) {
  if (base && !base.endsWith("/"))
    base += "/";
  return resolve$1(input, base);
}
function stripFilename(path) {
  if (!path)
    return "";
  const index2 = path.lastIndexOf("/");
  return path.slice(0, index2 + 1);
}
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
function maybeSort(mappings, owned) {
  const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
  if (unsortedIndex === mappings.length)
    return mappings;
  if (!owned)
    mappings = mappings.slice();
  for (let i2 = unsortedIndex; i2 < mappings.length; i2 = nextUnsortedSegmentLine(mappings, i2 + 1)) {
    mappings[i2] = sortSegments(mappings[i2], owned);
  }
  return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
  for (let i2 = start; i2 < mappings.length; i2++) {
    if (!isSorted(mappings[i2]))
      return i2;
  }
  return mappings.length;
}
function isSorted(line) {
  for (let j = 1; j < line.length; j++) {
    if (line[j][COLUMN] < line[j - 1][COLUMN]) {
      return false;
    }
  }
  return true;
}
function sortSegments(line, owned) {
  if (!owned)
    line = line.slice();
  return line.sort(sortComparator);
}
function sortComparator(a, b2) {
  return a[COLUMN] - b2[COLUMN];
}
var found = false;
function binarySearch(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN] - needle;
    if (cmp === 0) {
      found = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found = false;
  return low - 1;
}
function upperBound(haystack, needle, index2) {
  for (let i2 = index2 + 1; i2 < haystack.length; index2 = i2++) {
    if (haystack[i2][COLUMN] !== needle)
      break;
  }
  return index2;
}
function lowerBound(haystack, needle, index2) {
  for (let i2 = index2 - 1; i2 >= 0; index2 = i2--) {
    if (haystack[i2][COLUMN] !== needle)
      break;
  }
  return index2;
}
function memoizedState() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function memoizedBinarySearch(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch(haystack, needle, low, high);
}
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
var decodedMappings;
var originalPositionFor;
var TraceMap = class {
  constructor(map2, mapUrl) {
    const isString = typeof map2 === "string";
    if (!isString && map2._decodedMemo)
      return map2;
    const parsed = isString ? JSON.parse(map2) : map2;
    const { version: version2, file, names, sourceRoot, sources, sourcesContent } = parsed;
    this.version = version2;
    this.file = file;
    this.names = names;
    this.sourceRoot = sourceRoot;
    this.sources = sources;
    this.sourcesContent = sourcesContent;
    const from = resolve(sourceRoot || "", stripFilename(mapUrl));
    this.resolvedSources = sources.map((s) => resolve(s || "", from));
    const { mappings } = parsed;
    if (typeof mappings === "string") {
      this._encoded = mappings;
      this._decoded = void 0;
    } else {
      this._encoded = void 0;
      this._decoded = maybeSort(mappings, isString);
    }
    this._decodedMemo = memoizedState();
    this._bySources = void 0;
    this._bySourceMemos = void 0;
  }
};
(() => {
  decodedMappings = (map2) => {
    return map2._decoded || (map2._decoded = decode(map2._encoded));
  };
  originalPositionFor = (map2, { line, column, bias }) => {
    line--;
    if (line < 0)
      throw new Error(LINE_GTR_ZERO);
    if (column < 0)
      throw new Error(COL_GTR_EQ_ZERO);
    const decoded = decodedMappings(map2);
    if (line >= decoded.length)
      return OMapping(null, null, null, null);
    const segments = decoded[line];
    const index2 = traceSegmentInternal(segments, map2._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
    if (index2 === -1)
      return OMapping(null, null, null, null);
    const segment = segments[index2];
    if (segment.length === 1)
      return OMapping(null, null, null, null);
    const { names, resolvedSources } = map2;
    return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
  };
})();
function OMapping(source, line, column, name) {
  return { source, line, column, name };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
  let index2 = memoizedBinarySearch(segments, column, memo, line);
  if (found) {
    index2 = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index2);
  } else if (bias === LEAST_UPPER_BOUND)
    index2++;
  if (index2 === -1 || index2 === segments.length)
    return -1;
  return index2;
}
var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
var stackIgnorePatterns = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chai.js",
  /__vitest_browser__/
];
function extractLocation(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts)
    return [urlLike];
  let url = parts[1];
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    url = urlObj.pathname;
  }
  if (url.startsWith("/@fs/")) {
    url = url.slice(typeof process !== "undefined" && process.platform === "win32" ? 5 : 4);
  }
  return [url, parts[2] || void 0, parts[3] || void 0];
}
function parseSingleFFOrSafariStack(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP.test(line))
    return null;
  if (line.includes(" > eval"))
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  if (!line.includes("@") && !line.includes(":"))
    return null;
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
  const matches = line.match(functionNameRegex);
  const functionName3 = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber)
    return null;
  return {
    file: url,
    method: functionName3 || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleV8Stack(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP.test(line))
    return null;
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve$2(file);
  if (method)
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseStacktrace(stack, options = {}) {
  const { ignoreStackEntries = stackIgnorePatterns } = options;
  let stacks = !CHROME_IE_STACK_REGEXP.test(stack) ? parseFFOrSafariStackTrace(stack) : parseV8Stacktrace(stack);
  if (ignoreStackEntries.length)
    stacks = stacks.filter((stack2) => !ignoreStackEntries.some((p) => stack2.file.match(p)));
  return stacks.map((stack2) => {
    var _a2;
    const map2 = (_a2 = options.getSourceMap) == null ? void 0 : _a2.call(options, stack2.file);
    if (!map2 || typeof map2 !== "object" || !map2.version)
      return stack2;
    const traceMap = new TraceMap(map2);
    const { line, column } = originalPositionFor(traceMap, stack2);
    if (line != null && column != null)
      return { ...stack2, line, column };
    return stack2;
  });
}
function parseFFOrSafariStackTrace(stack) {
  return stack.split("\n").map((line) => parseSingleFFOrSafariStack(line)).filter(notNullish2);
}
function parseV8Stacktrace(stack) {
  return stack.split("\n").map((line) => parseSingleV8Stack(line)).filter(notNullish2);
}
function parseErrorStacktrace(e, options = {}) {
  if (!e || isPrimitive2(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const stackStr = e.stack || e.stackStr || "";
  const stackFrames = parseStacktrace(stackStr, options);
  e.stacks = stackFrames;
  return stackFrames;
}
async function saveInlineSnapshots(environment, snapshots) {
  const MagicString2 = (await Promise.resolve().then(() => (init_magic_string_es(), magic_string_es_exports))).default;
  const files = new Set(snapshots.map((i2) => i2.file));
  await Promise.all(Array.from(files).map(async (file) => {
    const snaps = snapshots.filter((i2) => i2.file === file);
    const code = await environment.readSnapshotFile(file);
    const s = new MagicString2(code);
    for (const snap of snaps) {
      const index2 = positionToOffset(code, snap.line, snap.column);
      replaceInlineSnap(code, s, index2, snap.snapshot);
    }
    const transformed = s.toString();
    if (transformed !== code)
      await environment.saveSnapshotFile(file, transformed);
  }));
}
var startObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*({)/m;
function replaceObjectSnap(code, s, index2, newSnap) {
  let _code = code.slice(index2);
  const startMatch = startObjectRegex.exec(_code);
  if (!startMatch)
    return false;
  _code = _code.slice(startMatch.index);
  let callEnd = getCallLastIndex2(_code);
  if (callEnd === null)
    return false;
  callEnd += index2 + startMatch.index;
  const shapeStart = index2 + startMatch.index + startMatch[0].length;
  const shapeEnd = getObjectShapeEndIndex(code, shapeStart);
  const snap = `, ${prepareSnapString(newSnap, code, index2)}`;
  if (shapeEnd === callEnd) {
    s.appendLeft(callEnd, snap);
  } else {
    s.overwrite(shapeEnd, callEnd, snap);
  }
  return true;
}
function getObjectShapeEndIndex(code, index2) {
  let startBraces = 1;
  let endBraces = 0;
  while (startBraces !== endBraces && index2 < code.length) {
    const s = code[index2++];
    if (s === "{")
      startBraces++;
    else if (s === "}")
      endBraces++;
  }
  return index2;
}
function prepareSnapString(snap, source, index2) {
  const lineNumber = offsetToLineNumber(source, index2);
  const line = source.split(lineSplitRE)[lineNumber - 1];
  const indent = line.match(/^\s*/)[0] || "";
  const indentNext = indent.includes("	") ? `${indent}	` : `${indent}  `;
  const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
  const isOneline = lines.length <= 1;
  const quote = isOneline ? "'" : "`";
  if (isOneline)
    return `'${lines.join("\n").replace(/'/g, "\\'")}'`;
  else
    return `${quote}
${lines.map((i2) => i2 ? indentNext + i2 : "").join("\n").replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${indent}${quote}`;
}
var startRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\S\s]*\*\/\s*|\/\/.*\s+)*\s*[\w_$]*(['"`\)])/m;
function replaceInlineSnap(code, s, index2, newSnap) {
  const startMatch = startRegex.exec(code.slice(index2));
  if (!startMatch)
    return replaceObjectSnap(code, s, index2, newSnap);
  const quote = startMatch[1];
  const startIndex = index2 + startMatch.index + startMatch[0].length;
  const snapString = prepareSnapString(newSnap, code, index2);
  if (quote === ")") {
    s.appendRight(startIndex - 1, snapString);
    return true;
  }
  const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
  const endMatch = quoteEndRE.exec(code.slice(startIndex));
  if (!endMatch)
    return false;
  const endIndex = startIndex + endMatch.index + endMatch[0].length;
  s.overwrite(startIndex - 1, endIndex, snapString);
  return true;
}
var INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
  const match = inlineSnapshot.match(INDENTATION_REGEX);
  if (!match || !match[1]) {
    return inlineSnapshot;
  }
  const indentation = match[1];
  const lines = inlineSnapshot.split(/\n/g);
  if (lines.length <= 2) {
    return inlineSnapshot;
  }
  if (lines[0].trim() !== "" || lines[lines.length - 1].trim() !== "") {
    return inlineSnapshot;
  }
  for (let i2 = 1; i2 < lines.length - 1; i2++) {
    if (lines[i2] !== "") {
      if (lines[i2].indexOf(indentation) !== 0) {
        return inlineSnapshot;
      }
      lines[i2] = lines[i2].substring(indentation.length);
    }
  }
  lines[lines.length - 1] = "";
  inlineSnapshot = lines.join("\n");
  return inlineSnapshot;
}
async function saveRawSnapshots(environment, snapshots) {
  await Promise.all(snapshots.map(async (snap) => {
    if (!snap.readonly)
      await environment.saveSnapshotFile(snap.file, snap.snapshot);
  }));
}
var SnapshotState = class _SnapshotState {
  constructor(testFilePath, snapshotPath, snapshotContent, options) {
    this.testFilePath = testFilePath;
    this.snapshotPath = snapshotPath;
    const { data, dirty } = getSnapshotData(
      snapshotContent,
      options
    );
    this._fileExists = snapshotContent != null;
    this._initialData = data;
    this._snapshotData = data;
    this._dirty = dirty;
    this._inlineSnapshots = [];
    this._rawSnapshots = [];
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this._counters = /* @__PURE__ */ new Map();
    this.expand = options.expand || false;
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this._updateSnapshot = options.updateSnapshot;
    this.updated = 0;
    this._snapshotFormat = {
      printBasicPrototype: false,
      ...options.snapshotFormat
    };
    this._environment = options.snapshotEnvironment;
  }
  _counters;
  _dirty;
  _updateSnapshot;
  _snapshotData;
  _initialData;
  _inlineSnapshots;
  _rawSnapshots;
  _uncheckedKeys;
  _snapshotFormat;
  _environment;
  _fileExists;
  added;
  expand;
  matched;
  unmatched;
  updated;
  static async create(testFilePath, options) {
    const snapshotPath = await options.snapshotEnvironment.resolvePath(testFilePath);
    const content = await options.snapshotEnvironment.readSnapshotFile(snapshotPath);
    return new _SnapshotState(testFilePath, snapshotPath, content, options);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(testName) {
    this._uncheckedKeys.forEach((uncheckedKey) => {
      if (keyToTestName(uncheckedKey) === testName)
        this._uncheckedKeys.delete(uncheckedKey);
    });
  }
  _inferInlineSnapshotStack(stacks) {
    const promiseIndex = stacks.findIndex((i2) => i2.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (promiseIndex !== -1)
      return stacks[promiseIndex + 3];
    const stackIndex = stacks.findIndex((i2) => i2.method.includes("__INLINE_SNAPSHOT__"));
    return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
  }
  _addSnapshot(key, receivedSerialized, options) {
    this._dirty = true;
    if (options.isInline) {
      const stacks = parseErrorStacktrace(options.error || new Error("snapshot"), { ignoreStackEntries: [] });
      const stack = this._inferInlineSnapshotStack(stacks);
      if (!stack) {
        throw new Error(
          `@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(stacks)}`
        );
      }
      stack.column--;
      this._inlineSnapshots.push({
        snapshot: receivedSerialized,
        ...stack
      });
    } else if (options.rawSnapshot) {
      this._rawSnapshots.push({
        ...options.rawSnapshot,
        snapshot: receivedSerialized
      });
    } else {
      this._snapshotData[key] = receivedSerialized;
    }
  }
  clear() {
    this._snapshotData = this._initialData;
    this._counters = /* @__PURE__ */ new Map();
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this.updated = 0;
    this._dirty = false;
  }
  async save() {
    const hasExternalSnapshots = Object.keys(this._snapshotData).length;
    const hasInlineSnapshots = this._inlineSnapshots.length;
    const hasRawSnapshots = this._rawSnapshots.length;
    const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots && !hasRawSnapshots;
    const status = {
      deleted: false,
      saved: false
    };
    if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
      if (hasExternalSnapshots) {
        await saveSnapshotFile(this._environment, this._snapshotData, this.snapshotPath);
        this._fileExists = true;
      }
      if (hasInlineSnapshots)
        await saveInlineSnapshots(this._environment, this._inlineSnapshots);
      if (hasRawSnapshots)
        await saveRawSnapshots(this._environment, this._rawSnapshots);
      status.saved = true;
    } else if (!hasExternalSnapshots && this._fileExists) {
      if (this._updateSnapshot === "all") {
        await this._environment.removeSnapshotFile(this.snapshotPath);
        this._fileExists = false;
      }
      status.deleted = true;
    }
    return status;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }
  match({
    testName,
    received,
    key,
    inlineSnapshot,
    isInline,
    error,
    rawSnapshot
  }) {
    this._counters.set(testName, (this._counters.get(testName) || 0) + 1);
    const count = Number(this._counters.get(testName));
    if (!key)
      key = testNameToKey(testName, count);
    if (!(isInline && this._snapshotData[key] !== void 0))
      this._uncheckedKeys.delete(key);
    let receivedSerialized = rawSnapshot && typeof received === "string" ? received : serialize(received, void 0, this._snapshotFormat);
    if (!rawSnapshot)
      receivedSerialized = addExtraLineBreaks(receivedSerialized);
    if (rawSnapshot) {
      if (rawSnapshot.content && rawSnapshot.content.match(/\r\n/) && !receivedSerialized.match(/\r\n/))
        rawSnapshot.content = normalizeNewlines(rawSnapshot.content);
    }
    const expected = isInline ? inlineSnapshot : rawSnapshot ? rawSnapshot.content : this._snapshotData[key];
    const expectedTrimmed = prepareExpected(expected);
    const pass = expectedTrimmed === prepareExpected(receivedSerialized);
    const hasSnapshot = expected !== void 0;
    const snapshotIsPersisted = isInline || this._fileExists || rawSnapshot && rawSnapshot.content != null;
    if (pass && !isInline && !rawSnapshot) {
      this._snapshotData[key] = receivedSerialized;
    }
    if (hasSnapshot && this._updateSnapshot === "all" || (!hasSnapshot || !snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
      if (this._updateSnapshot === "all") {
        if (!pass) {
          if (hasSnapshot)
            this.updated++;
          else
            this.added++;
          this._addSnapshot(key, receivedSerialized, { error, isInline, rawSnapshot });
        } else {
          this.matched++;
        }
      } else {
        this._addSnapshot(key, receivedSerialized, { error, isInline, rawSnapshot });
        this.added++;
      }
      return {
        actual: "",
        count,
        expected: "",
        key,
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched++;
        return {
          actual: removeExtraLineBreaks(receivedSerialized),
          count,
          expected: expectedTrimmed !== void 0 ? removeExtraLineBreaks(expectedTrimmed) : void 0,
          key,
          pass: false
        };
      } else {
        this.matched++;
        return {
          actual: "",
          count,
          expected: "",
          key,
          pass: true
        };
      }
    }
  }
  async pack() {
    const snapshot = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: false,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    };
    const uncheckedCount = this.getUncheckedCount();
    const uncheckedKeys = this.getUncheckedKeys();
    if (uncheckedCount)
      this.removeUncheckedKeys();
    const status = await this.save();
    snapshot.fileDeleted = status.deleted;
    snapshot.added = this.added;
    snapshot.matched = this.matched;
    snapshot.unmatched = this.unmatched;
    snapshot.updated = this.updated;
    snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
    snapshot.uncheckedKeys = Array.from(uncheckedKeys);
    return snapshot;
  }
};
function createMismatchError(message, actual, expected) {
  const error = new Error(message);
  Object.defineProperty(error, "actual", {
    value: actual,
    enumerable: true,
    configurable: true,
    writable: true
  });
  Object.defineProperty(error, "expected", {
    value: expected,
    enumerable: true,
    configurable: true,
    writable: true
  });
  return error;
}
var SnapshotClient = class {
  constructor(Service = SnapshotState) {
    this.Service = Service;
  }
  filepath;
  name;
  snapshotState;
  snapshotStateMap = /* @__PURE__ */ new Map();
  async setTest(filepath, name, options) {
    var _a2;
    this.filepath = filepath;
    this.name = name;
    if (((_a2 = this.snapshotState) == null ? void 0 : _a2.testFilePath) !== filepath) {
      this.resetCurrent();
      if (!this.getSnapshotState(filepath)) {
        this.snapshotStateMap.set(
          filepath,
          await this.Service.create(
            filepath,
            options
          )
        );
      }
      this.snapshotState = this.getSnapshotState(filepath);
    }
  }
  getSnapshotState(filepath) {
    return this.snapshotStateMap.get(filepath);
  }
  clearTest() {
    this.filepath = void 0;
    this.name = void 0;
  }
  skipTestSnapshots(name) {
    var _a2;
    (_a2 = this.snapshotState) == null ? void 0 : _a2.markSnapshotsAsCheckedForTest(name);
  }
  /**
   * Should be overridden by the consumer.
   *
   * Vitest checks equality with @vitest/expect.
   */
  equalityCheck(received, expected) {
    return received === expected;
  }
  assert(options) {
    const {
      filepath = this.filepath,
      name = this.name,
      message,
      isInline = false,
      properties,
      inlineSnapshot,
      error,
      errorMessage,
      rawSnapshot
    } = options;
    let { received } = options;
    if (!filepath)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof properties === "object") {
      if (typeof received !== "object" || !received)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        const pass2 = this.equalityCheck(received, properties);
        if (!pass2)
          throw createMismatchError("Snapshot properties mismatched", received, properties);
        else
          received = deepMergeSnapshot(received, properties);
      } catch (err) {
        err.message = errorMessage || "Snapshot mismatched";
        throw err;
      }
    }
    const testName = [
      name,
      ...message ? [message] : []
    ].join(" > ");
    const snapshotState = this.getSnapshotState(filepath);
    const { actual, expected, key, pass } = snapshotState.match({
      testName,
      received,
      isInline,
      error,
      inlineSnapshot,
      rawSnapshot
    });
    if (!pass)
      throw createMismatchError(`Snapshot \`${key || "unknown"}\` mismatched`, actual == null ? void 0 : actual.trim(), expected == null ? void 0 : expected.trim());
  }
  async assertRaw(options) {
    if (!options.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const {
      filepath = this.filepath,
      rawSnapshot
    } = options;
    if (rawSnapshot.content == null) {
      if (!filepath)
        throw new Error("Snapshot cannot be used outside of test");
      const snapshotState = this.getSnapshotState(filepath);
      options.filepath || (options.filepath = filepath);
      rawSnapshot.file = await snapshotState.environment.resolveRawPath(filepath, rawSnapshot.file);
      rawSnapshot.content = await snapshotState.environment.readSnapshotFile(rawSnapshot.file) || void 0;
    }
    return this.assert(options);
  }
  async resetCurrent() {
    if (!this.snapshotState)
      return null;
    const result = await this.snapshotState.pack();
    this.snapshotState = void 0;
    return result;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
};

// node_modules/vitest/dist/vendor-tasks.f9d75aed.js
function getFullName(task, separator = " > ") {
  return getNames(task).join(separator);
}

// node_modules/@vitest/utils/dist/source-map.js
function normalizeWindowsPath2(input = "") {
  if (!input || !input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _IS_ABSOLUTE_RE2 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd2() {
  if (typeof process !== "undefined") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
var resolve$22 = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath2(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path = index2 >= 0 ? arguments_[index2] : cwd2();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute2(path);
  }
  resolvedPath = normalizeString2(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute2(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString2(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path.length; ++index2) {
    if (index2 < path.length) {
      char = path[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index2)}`;
        } else {
          res = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute2 = function(p) {
  return _IS_ABSOLUTE_RE2.test(p);
};
var comma3 = ",".charCodeAt(0);
var chars3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar3 = new Uint8Array(64);
var charToInt3 = new Uint8Array(128);
for (let i2 = 0; i2 < chars3.length; i2++) {
  const c = chars3.charCodeAt(i2);
  intToChar3[i2] = c;
  charToInt3[c] = i2;
}
function decode2(mappings) {
  const state = new Int32Array(5);
  const decoded = [];
  let index2 = 0;
  do {
    const semi = indexOf2(mappings, index2);
    const line = [];
    let sorted = true;
    let lastCol = 0;
    state[0] = 0;
    for (let i2 = index2; i2 < semi; i2++) {
      let seg;
      i2 = decodeInteger2(mappings, i2, state, 0);
      const col = state[0];
      if (col < lastCol)
        sorted = false;
      lastCol = col;
      if (hasMoreVlq2(mappings, i2, semi)) {
        i2 = decodeInteger2(mappings, i2, state, 1);
        i2 = decodeInteger2(mappings, i2, state, 2);
        i2 = decodeInteger2(mappings, i2, state, 3);
        if (hasMoreVlq2(mappings, i2, semi)) {
          i2 = decodeInteger2(mappings, i2, state, 4);
          seg = [col, state[1], state[2], state[3], state[4]];
        } else {
          seg = [col, state[1], state[2], state[3]];
        }
      } else {
        seg = [col];
      }
      line.push(seg);
    }
    if (!sorted)
      sort2(line);
    decoded.push(line);
    index2 = semi + 1;
  } while (index2 <= mappings.length);
  return decoded;
}
function indexOf2(mappings, index2) {
  const idx = mappings.indexOf(";", index2);
  return idx === -1 ? mappings.length : idx;
}
function decodeInteger2(mappings, pos, state, j) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = mappings.charCodeAt(pos++);
    integer = charToInt3[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  state[j] += value;
  return pos;
}
function hasMoreVlq2(mappings, i2, length) {
  if (i2 >= length)
    return false;
  return mappings.charCodeAt(i2) !== comma3;
}
function sort2(line) {
  line.sort(sortComparator$12);
}
function sortComparator$12(a, b2) {
  return a[0] - b2[0];
}
var UrlType2;
(function(UrlType3) {
  UrlType3[UrlType3["Empty"] = 1] = "Empty";
  UrlType3[UrlType3["Hash"] = 2] = "Hash";
  UrlType3[UrlType3["Query"] = 3] = "Query";
  UrlType3[UrlType3["RelativePath"] = 4] = "RelativePath";
  UrlType3[UrlType3["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType3[UrlType3["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType3[UrlType3["Absolute"] = 7] = "Absolute";
})(UrlType2 || (UrlType2 = {}));
var COLUMN2 = 0;
var SOURCES_INDEX2 = 1;
var SOURCE_LINE2 = 2;
var SOURCE_COLUMN2 = 3;
var NAMES_INDEX2 = 4;
var REV_GENERATED_LINE = 1;
var REV_GENERATED_COLUMN = 2;
var found2 = false;
function binarySearch2(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN2] - needle;
    if (cmp === 0) {
      found2 = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found2 = false;
  return low - 1;
}
function upperBound2(haystack, needle, index2) {
  for (let i2 = index2 + 1; i2 < haystack.length; index2 = i2++) {
    if (haystack[i2][COLUMN2] !== needle)
      break;
  }
  return index2;
}
function lowerBound2(haystack, needle, index2) {
  for (let i2 = index2 - 1; i2 >= 0; index2 = i2--) {
    if (haystack[i2][COLUMN2] !== needle)
      break;
  }
  return index2;
}
function memoizedState2() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function memoizedBinarySearch2(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found2 = lastIndex !== -1 && haystack[lastIndex][COLUMN2] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch2(haystack, needle, low, high);
}
function buildBySources(decoded, memos) {
  const sources = memos.map(buildNullArray);
  for (let i2 = 0; i2 < decoded.length; i2++) {
    const line = decoded[i2];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      if (seg.length === 1)
        continue;
      const sourceIndex = seg[SOURCES_INDEX2];
      const sourceLine = seg[SOURCE_LINE2];
      const sourceColumn = seg[SOURCE_COLUMN2];
      const originalSource = sources[sourceIndex];
      const originalLine = originalSource[sourceLine] || (originalSource[sourceLine] = []);
      const memo = memos[sourceIndex];
      const index2 = upperBound2(originalLine, sourceColumn, memoizedBinarySearch2(originalLine, sourceColumn, memo, sourceLine));
      insert(originalLine, memo.lastIndex = index2 + 1, [sourceColumn, i2, seg[COLUMN2]]);
    }
  }
  return sources;
}
function insert(array2, index2, value) {
  for (let i2 = array2.length; i2 > index2; i2--) {
    array2[i2] = array2[i2 - 1];
  }
  array2[index2] = value;
}
function buildNullArray() {
  return { __proto__: null };
}
var LINE_GTR_ZERO2 = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO2 = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND2 = -1;
var GREATEST_LOWER_BOUND2 = 1;
var decodedMappings2;
var originalPositionFor2;
var generatedPositionFor;
(() => {
  decodedMappings2 = (map2) => {
    return map2._decoded || (map2._decoded = decode2(map2._encoded));
  };
  originalPositionFor2 = (map2, { line, column, bias }) => {
    line--;
    if (line < 0)
      throw new Error(LINE_GTR_ZERO2);
    if (column < 0)
      throw new Error(COL_GTR_EQ_ZERO2);
    const decoded = decodedMappings2(map2);
    if (line >= decoded.length)
      return OMapping2(null, null, null, null);
    const segments = decoded[line];
    const index2 = traceSegmentInternal2(segments, map2._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND2);
    if (index2 === -1)
      return OMapping2(null, null, null, null);
    const segment = segments[index2];
    if (segment.length === 1)
      return OMapping2(null, null, null, null);
    const { names, resolvedSources } = map2;
    return OMapping2(resolvedSources[segment[SOURCES_INDEX2]], segment[SOURCE_LINE2] + 1, segment[SOURCE_COLUMN2], segment.length === 5 ? names[segment[NAMES_INDEX2]] : null);
  };
  generatedPositionFor = (map2, { source, line, column, bias }) => {
    return generatedPosition(map2, source, line, column, bias || GREATEST_LOWER_BOUND2, false);
  };
  function generatedPosition(map2, source, line, column, bias, all) {
    line--;
    if (line < 0)
      throw new Error(LINE_GTR_ZERO2);
    if (column < 0)
      throw new Error(COL_GTR_EQ_ZERO2);
    const { sources, resolvedSources } = map2;
    let sourceIndex = sources.indexOf(source);
    if (sourceIndex === -1)
      sourceIndex = resolvedSources.indexOf(source);
    if (sourceIndex === -1)
      return all ? [] : GMapping(null, null);
    const generated = map2._bySources || (map2._bySources = buildBySources(decodedMappings2(map2), map2._bySourceMemos = sources.map(memoizedState2)));
    const segments = generated[sourceIndex][line];
    if (segments == null)
      return all ? [] : GMapping(null, null);
    const memo = map2._bySourceMemos[sourceIndex];
    if (all)
      return sliceGeneratedPositions(segments, memo, line, column, bias);
    const index2 = traceSegmentInternal2(segments, memo, line, column, bias);
    if (index2 === -1)
      return GMapping(null, null);
    const segment = segments[index2];
    return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
  }
})();
function OMapping2(source, line, column, name) {
  return { source, line, column, name };
}
function GMapping(line, column) {
  return { line, column };
}
function traceSegmentInternal2(segments, memo, line, column, bias) {
  let index2 = memoizedBinarySearch2(segments, column, memo, line);
  if (found2) {
    index2 = (bias === LEAST_UPPER_BOUND2 ? upperBound2 : lowerBound2)(segments, column, index2);
  } else if (bias === LEAST_UPPER_BOUND2)
    index2++;
  if (index2 === -1 || index2 === segments.length)
    return -1;
  return index2;
}
function sliceGeneratedPositions(segments, memo, line, column, bias) {
  let min = traceSegmentInternal2(segments, memo, line, column, GREATEST_LOWER_BOUND2);
  if (!found2 && bias === LEAST_UPPER_BOUND2)
    min++;
  if (min === -1 || min === segments.length)
    return [];
  const matchedColumn = found2 ? column : segments[min][COLUMN2];
  if (!found2)
    min = lowerBound2(segments, matchedColumn, min);
  const max = upperBound2(segments, matchedColumn, min);
  const result = [];
  for (; min <= max; min++) {
    const segment = segments[min];
    result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
  }
  return result;
}
var CHROME_IE_STACK_REGEXP2 = /^\s*at .*(\S+:\d+|\(native\))/m;
var SAFARI_NATIVE_CODE_REGEXP2 = /^(eval@)?(\[native code])?$/;
function extractLocation2(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts)
    return [urlLike];
  let url = parts[1];
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    url = urlObj.pathname;
  }
  if (url.startsWith("/@fs/")) {
    url = url.slice(typeof process !== "undefined" && process.platform === "win32" ? 5 : 4);
  }
  return [url, parts[2] || void 0, parts[3] || void 0];
}
function parseSingleFFOrSafariStack2(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP2.test(line))
    return null;
  if (line.includes(" > eval"))
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  if (!line.includes("@") && !line.includes(":"))
    return null;
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
  const matches = line.match(functionNameRegex);
  const functionName3 = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation2(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber)
    return null;
  return {
    file: url,
    method: functionName3 || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleStack(raw) {
  const line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP2.test(line))
    return parseSingleFFOrSafariStack2(line);
  return parseSingleV8Stack2(line);
}
function parseSingleV8Stack2(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP2.test(line))
    return null;
  if (line.includes("(eval "))
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation2(location ? location[1] : sanitizedLine);
  let method = location && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber)
    return null;
  if (method.startsWith("async "))
    method = method.slice(6);
  if (file.startsWith("file://"))
    file = file.slice(7);
  file = resolve$22(file);
  if (method)
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}

// node_modules/vitest/dist/vendor-vi.597d9e06.js
var import_util = __toESM(require("util"), 1);

// node_modules/vitest/dist/vendor-date.6e993429.js
var RealDate = Date;
var now2 = null;
var MockDate = class extends RealDate {
  constructor(y2, m2, d, h, M2, s, ms) {
    super();
    let date;
    switch (arguments.length) {
      case 0:
        if (now2 !== null)
          date = new RealDate(now2.valueOf());
        else
          date = new RealDate();
        break;
      case 1:
        date = new RealDate(y2);
        break;
      default:
        d = typeof d === "undefined" ? 1 : d;
        h = h || 0;
        M2 = M2 || 0;
        s = s || 0;
        ms = ms || 0;
        date = new RealDate(y2, m2, d, h, M2, s, ms);
        break;
    }
    return date;
  }
};
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
  return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
  return RealDate.parse(dateString);
};
MockDate.toString = function() {
  return RealDate.toString();
};
function mockDate(date) {
  const dateObj = new RealDate(date.valueOf());
  if (Number.isNaN(dateObj.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${date}`);
  globalThis.Date = MockDate;
  now2 = dateObj.valueOf();
}
function resetDate() {
  globalThis.Date = RealDate;
}

// node_modules/vitest/dist/vendor-vi.597d9e06.js
function resetModules(modules, resetMocks = false) {
  const skipPaths = [
    // Vitest
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    // yarn's .store folder
    /vitest-virtual-\w+\/dist/,
    // cnpm
    /@vitest\/dist/,
    // don't clear mocks
    ...!resetMocks ? [/^mock:/] : []
  ];
  modules.forEach((mod, path) => {
    if (skipPaths.some((re) => re.test(path)))
      return;
    modules.invalidateModule(mod);
  });
}
function waitNextTick() {
  const { setTimeout: setTimeout2 } = getSafeTimers();
  return new Promise((resolve2) => setTimeout2(resolve2, 0));
}
async function waitForImportsToResolve() {
  await waitNextTick();
  const state = getWorkerState();
  const promises = [];
  let resolvingCount = 0;
  for (const mod of state.moduleCache.values()) {
    if (mod.promise && !mod.evaluated)
      promises.push(mod.promise);
    if (mod.resolving)
      resolvingCount++;
  }
  if (!promises.length && !resolvingCount)
    return;
  await Promise.allSettled(promises);
  await waitForImportsToResolve();
}
var benchFns = /* @__PURE__ */ new WeakMap();
var benchOptsMap = /* @__PURE__ */ new WeakMap();
var bench = createBenchmark(
  function(name, fn2 = noop, options = {}) {
    if (!isRunningInBenchmark())
      throw new Error("`bench()` is only available in benchmark mode.");
    const task = getCurrentSuite().custom.call(this, formatName2(name));
    task.meta = {
      benchmark: true
    };
    benchFns.set(task, fn2);
    benchOptsMap.set(task, options);
  }
);
function createBenchmark(fn2) {
  const benchmark = createChainable(
    ["skip", "only", "todo"],
    fn2
  );
  benchmark.skipIf = (condition) => condition ? benchmark.skip : benchmark;
  benchmark.runIf = (condition) => condition ? benchmark : benchmark.skip;
  return benchmark;
}
function formatName2(name) {
  return typeof name === "string" ? name : name instanceof Function ? name.name || "<anonymous>" : String(name);
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var chaiSubset = { exports: {} };
(function(module2, exports) {
  (function() {
    (function(chaiSubset2) {
      if (typeof commonjsRequire === "function" && true && true) {
        return module2.exports = chaiSubset2;
      } else {
        return chai.use(chaiSubset2);
      }
    })(function(chai3, utils) {
      var Assertion2 = chai3.Assertion;
      var assertionPrototype = Assertion2.prototype;
      Assertion2.addMethod("containSubset", function(expected) {
        var actual = utils.flag(this, "object");
        var showDiff = chai3.config.showDiff;
        assertionPrototype.assert.call(
          this,
          compare(expected, actual),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          expected,
          actual,
          showDiff
        );
      });
      chai3.assert.containSubset = function(val, exp, msg) {
        new chai3.Assertion(val, msg).to.be.containSubset(exp);
      };
      function compare(expected, actual) {
        if (expected === actual) {
          return true;
        }
        if (typeof actual !== typeof expected) {
          return false;
        }
        if (typeof expected !== "object" || expected === null) {
          return expected === actual;
        }
        if (!!expected && !actual) {
          return false;
        }
        if (Array.isArray(expected)) {
          if (typeof actual.length !== "number") {
            return false;
          }
          var aa = Array.prototype.slice.call(actual);
          return expected.every(function(exp) {
            return aa.some(function(act) {
              return compare(exp, act);
            });
          });
        }
        if (expected instanceof Date) {
          if (actual instanceof Date) {
            return expected.getTime() === actual.getTime();
          } else {
            return false;
          }
        }
        return Object.keys(expected).every(function(key) {
          var eo = expected[key];
          var ao = actual[key];
          if (typeof eo === "object" && eo !== null && ao !== null) {
            return compare(eo, ao);
          }
          if (typeof eo === "function") {
            return eo(ao);
          }
          return ao === eo;
        });
      }
    });
  }).call(commonjsGlobal);
})(chaiSubset);
var chaiSubsetExports = chaiSubset.exports;
var Subset = /* @__PURE__ */ getDefaultExportFromCjs(chaiSubsetExports);
var MATCHERS_OBJECT2 = Symbol.for("matchers-object");
var JEST_MATCHERS_OBJECT2 = Symbol.for("$$jest-matchers-object");
var GLOBAL_EXPECT2 = Symbol.for("expect-global");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT2)) {
  const globalState = /* @__PURE__ */ new WeakMap();
  const matchers = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, MATCHERS_OBJECT2, {
    get: () => globalState
  });
  Object.defineProperty(globalThis, JEST_MATCHERS_OBJECT2, {
    configurable: true,
    get: () => ({
      state: globalState.get(globalThis[GLOBAL_EXPECT2]),
      matchers
    })
  });
}
function recordAsyncExpect2(test3, promise) {
  if (test3 && promise instanceof Promise) {
    promise = promise.finally(() => {
      const index2 = test3.promises.indexOf(promise);
      if (index2 !== -1)
        test3.promises.splice(index2, 1);
    });
    if (!test3.promises)
      test3.promises = [];
    test3.promises.push(promise);
  }
  return promise;
}
var VitestSnapshotClient = class extends SnapshotClient {
  equalityCheck(received, expected) {
    return equals(received, expected, [iterableEquality, subsetEquality]);
  }
};
var _client;
function getSnapshotClient() {
  if (!_client)
    _client = new VitestSnapshotClient();
  return _client;
}
function getErrorMessage(err) {
  if (err instanceof Error)
    return err.message;
  return err;
}
function getErrorString(expected, promise) {
  if (typeof expected !== "function") {
    if (!promise)
      throw new Error(`expected must be a function, received ${typeof expected}`);
    return getErrorMessage(expected);
  }
  try {
    expected();
  } catch (e) {
    return getErrorMessage(e);
  }
  throw new Error("snapshot function didn't throw");
}
var SnapshotPlugin = (chai3, utils) => {
  const getTestNames = (test3) => {
    var _a2;
    if (!test3)
      return {};
    return {
      filepath: (_a2 = test3.file) == null ? void 0 : _a2.filepath,
      name: getNames(test3).slice(1).join(" > ")
    };
  };
  for (const key of ["matchSnapshot", "toMatchSnapshot"]) {
    utils.addMethod(
      chai3.Assertion.prototype,
      key,
      function(properties, message) {
        const expected = utils.flag(this, "object");
        const test3 = utils.flag(this, "vitest-test");
        if (typeof properties === "string" && typeof message === "undefined") {
          message = properties;
          properties = void 0;
        }
        const errorMessage = utils.flag(this, "message");
        getSnapshotClient().assert({
          received: expected,
          message,
          isInline: false,
          properties,
          errorMessage,
          ...getTestNames(test3)
        });
      }
    );
  }
  utils.addMethod(
    chai3.Assertion.prototype,
    "toMatchFileSnapshot",
    function(file, message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      const errorMessage = utils.flag(this, "message");
      const promise = getSnapshotClient().assertRaw({
        received: expected,
        message,
        isInline: false,
        rawSnapshot: {
          file
        },
        errorMessage,
        ...getTestNames(test3)
      });
      return recordAsyncExpect2(test3, promise);
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toMatchInlineSnapshot",
    function __INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
      var _a2;
      const test3 = utils.flag(this, "vitest-test");
      const isInsideEach = test3 && (test3.each || ((_a2 = test3.suite) == null ? void 0 : _a2.each));
      if (isInsideEach)
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const expected = utils.flag(this, "object");
      const error = utils.flag(this, "error");
      if (typeof properties === "string") {
        message = inlineSnapshot;
        inlineSnapshot = properties;
        properties = void 0;
      }
      if (inlineSnapshot)
        inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: expected,
        message,
        isInline: true,
        properties,
        inlineSnapshot,
        error,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toThrowErrorMatchingSnapshot",
    function(message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      const promise = utils.flag(this, "promise");
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: getErrorString(expected, promise),
        message,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils.addMethod(
    chai3.Assertion.prototype,
    "toThrowErrorMatchingInlineSnapshot",
    function __INLINE_SNAPSHOT__(inlineSnapshot, message) {
      var _a2;
      const test3 = utils.flag(this, "vitest-test");
      const isInsideEach = test3 && (test3.each || ((_a2 = test3.suite) == null ? void 0 : _a2.each));
      if (isInsideEach)
        throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
      const expected = utils.flag(this, "object");
      const error = utils.flag(this, "error");
      const promise = utils.flag(this, "promise");
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: getErrorString(expected, promise),
        message,
        inlineSnapshot,
        isInline: true,
        error,
        errorMessage,
        ...getTestNames(test3)
      });
    }
  );
  utils.addMethod(
    chai3.expect,
    "addSnapshotSerializer",
    addSerializer
  );
};
use(JestExtend);
use(JestChaiExpect);
use(Subset);
use(SnapshotPlugin);
use(JestAsymmetricMatchers);
function createExpect(test3) {
  var _a2;
  const expect2 = (value, message) => {
    const { assertionCalls } = getState(expect2);
    setState({ assertionCalls: assertionCalls + 1, soft: false }, expect2);
    const assert2 = expect(value, message);
    const _test2 = test3 || getCurrentTest();
    if (_test2)
      return assert2.withTest(_test2);
    else
      return assert2;
  };
  Object.assign(expect2, expect);
  expect2.getState = () => getState(expect2);
  expect2.setState = (state) => setState(state, expect2);
  const globalState = getState(globalThis[GLOBAL_EXPECT]) || {};
  setState({
    // this should also add "snapshotState" that is added conditionally
    ...globalState,
    assertionCalls: 0,
    isExpectingAssertions: false,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: getCurrentEnvironment(),
    testPath: test3 ? (_a2 = test3.suite.file) == null ? void 0 : _a2.filepath : globalState.testPath,
    currentTestName: test3 ? getFullName(test3) : globalState.currentTestName
  }, expect2);
  expect2.extend = (matchers) => expect.extend(expect2, matchers);
  expect2.soft = (...args) => {
    const assert2 = expect2(...args);
    expect2.setState({
      soft: true
    });
    return assert2;
  };
  expect2.unreachable = (message) => {
    assert.fail(`expected${message ? ` "${message}" ` : " "}not to be reached`);
  };
  function assertions(expected) {
    const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect2.getState().assertionCalls}`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(errorGen(), assertions);
    expect2.setState({
      expectedAssertionsNumber: expected,
      expectedAssertionsNumberErrorGen: errorGen
    });
  }
  function hasAssertions() {
    const error = new Error("expected any number of assertion, but got none");
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, hasAssertions);
    expect2.setState({
      isExpectingAssertions: true,
      isExpectingAssertionsError: error
    });
  }
  util.addMethod(expect2, "assertions", assertions);
  util.addMethod(expect2, "hasAssertions", hasAssertions);
  return expect2;
}
var globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
  value: globalExpect,
  writable: true,
  configurable: true
});
var fakeTimersSrc = { exports: {} };
var globalObject;
if (typeof commonjsGlobal !== "undefined") {
  globalObject = commonjsGlobal;
} else if (typeof window !== "undefined") {
  globalObject = window;
} else {
  globalObject = self;
}
var global2 = globalObject;
var throwsOnProto$1;
try {
  const object2 = {};
  object2.__proto__;
  throwsOnProto$1 = false;
} catch (_) {
  throwsOnProto$1 = true;
}
var throwsOnProto_1 = throwsOnProto$1;
var call = Function.call;
var throwsOnProto = throwsOnProto_1;
var disallowedProperties = [
  // ignore size because it throws from Map
  "size",
  "caller",
  "callee",
  "arguments"
];
if (throwsOnProto) {
  disallowedProperties.push("__proto__");
}
var copyPrototypeMethods = function copyPrototypeMethods2(prototype) {
  return Object.getOwnPropertyNames(prototype).reduce(
    function(result, name) {
      if (disallowedProperties.includes(name)) {
        return result;
      }
      if (typeof prototype[name] !== "function") {
        return result;
      }
      result[name] = call.bind(prototype[name]);
      return result;
    },
    /* @__PURE__ */ Object.create(null)
  );
};
var copyPrototype$5 = copyPrototypeMethods;
var array = copyPrototype$5(Array.prototype);
var every$1 = array.every;
function hasCallsLeft(callMap, spy) {
  if (callMap[spy.id] === void 0) {
    callMap[spy.id] = 0;
  }
  return callMap[spy.id] < spy.callCount;
}
function checkAdjacentCalls(callMap, spy, index2, spies2) {
  var calledBeforeNext = true;
  if (index2 !== spies2.length - 1) {
    calledBeforeNext = spy.calledBefore(spies2[index2 + 1]);
  }
  if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
    callMap[spy.id] += 1;
    return true;
  }
  return false;
}
function calledInOrder(spies2) {
  var callMap = {};
  var _spies = arguments.length > 1 ? arguments : spies2;
  return every$1(_spies, checkAdjacentCalls.bind(null, callMap));
}
var calledInOrder_1 = calledInOrder;
var functionName$1 = function functionName(func) {
  if (!func) {
    return "";
  }
  try {
    return func.displayName || func.name || // Use function decomposition as a last resort to get function
    // name. Does not rely on function decomposition to work - if it
    // doesn't debugging will be slightly less informative
    // (i.e. toString will say 'spy' rather than 'myFunc').
    (String(func).match(/function ([^\s(]+)/) || [])[1];
  } catch (e) {
    return "";
  }
};
var functionName2 = functionName$1;
function className(value) {
  return value.constructor && value.constructor.name || // The next branch is for IE11 support only:
  // Because the name property is not set on the prototype
  // of the Function object, we finally try to grab the
  // name from its definition. This will never be reached
  // in node, so we are not able to test this properly.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
  typeof value.constructor === "function" && /* istanbul ignore next */
  functionName2(value.constructor) || null;
}
var className_1 = className;
var deprecated = {};
(function(exports) {
  exports.wrap = function(func, msg) {
    var wrapped = function() {
      exports.printWarning(msg);
      return func.apply(this, arguments);
    };
    if (func.prototype) {
      wrapped.prototype = func.prototype;
    }
    return wrapped;
  };
  exports.defaultMsg = function(packageName, funcName) {
    return `${packageName}.${funcName} is deprecated and will be removed from the public API in a future version of ${packageName}.`;
  };
  exports.printWarning = function(msg) {
    if (typeof process === "object" && process.emitWarning) {
      process.emitWarning(msg);
    } else if (console.info) {
      console.info(msg);
    } else {
      console.log(msg);
    }
  };
})(deprecated);
var every = function every2(obj, fn2) {
  var pass = true;
  try {
    obj.forEach(function() {
      if (!fn2.apply(this, arguments)) {
        throw new Error();
      }
    });
  } catch (e) {
    pass = false;
  }
  return pass;
};
var sort3 = array.sort;
var slice = array.slice;
function comparator(a, b2) {
  var aCall = a.getCall(0);
  var bCall = b2.getCall(0);
  var aId = aCall && aCall.callId || -1;
  var bId = bCall && bCall.callId || -1;
  return aId < bId ? -1 : 1;
}
function orderByFirstCall(spies2) {
  return sort3(slice(spies2), comparator);
}
var orderByFirstCall_1 = orderByFirstCall;
var copyPrototype$4 = copyPrototypeMethods;
var _function = copyPrototype$4(Function.prototype);
var copyPrototype$3 = copyPrototypeMethods;
var map = copyPrototype$3(Map.prototype);
var copyPrototype$2 = copyPrototypeMethods;
var object = copyPrototype$2(Object.prototype);
var copyPrototype$1 = copyPrototypeMethods;
var set2 = copyPrototype$1(Set.prototype);
var copyPrototype = copyPrototypeMethods;
var string2 = copyPrototype(String.prototype);
var prototypes = {
  array,
  function: _function,
  map,
  object,
  set: set2,
  string: string2
};
var typeDetect = { exports: {} };
(function(module2, exports) {
  (function(global3, factory) {
    module2.exports = factory();
  })(commonjsGlobal, function() {
    var promiseExists = typeof Promise === "function";
    var globalObject2 = typeof self === "object" ? self : commonjsGlobal;
    var symbolExists = typeof Symbol !== "undefined";
    var mapExists = typeof Map !== "undefined";
    var setExists = typeof Set !== "undefined";
    var weakMapExists = typeof WeakMap !== "undefined";
    var weakSetExists = typeof WeakSet !== "undefined";
    var dataViewExists = typeof DataView !== "undefined";
    var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
    var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
    var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
    var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
    var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
    var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
    var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
    var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
    var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
    var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
    var toStringLeftSliceLength = 8;
    var toStringRightSliceLength = -1;
    function typeDetect2(obj) {
      var typeofObj = typeof obj;
      if (typeofObj !== "object") {
        return typeofObj;
      }
      if (obj === null) {
        return "null";
      }
      if (obj === globalObject2) {
        return "global";
      }
      if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
        return "Array";
      }
      if (typeof window === "object" && window !== null) {
        if (typeof window.location === "object" && obj === window.location) {
          return "Location";
        }
        if (typeof window.document === "object" && obj === window.document) {
          return "Document";
        }
        if (typeof window.navigator === "object") {
          if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
            return "MimeTypeArray";
          }
          if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
            return "PluginArray";
          }
        }
        if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
          if (obj.tagName === "BLOCKQUOTE") {
            return "HTMLQuoteElement";
          }
          if (obj.tagName === "TD") {
            return "HTMLTableDataCellElement";
          }
          if (obj.tagName === "TH") {
            return "HTMLTableHeaderCellElement";
          }
        }
      }
      var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
      if (typeof stringTag === "string") {
        return stringTag;
      }
      var objPrototype = Object.getPrototypeOf(obj);
      if (objPrototype === RegExp.prototype) {
        return "RegExp";
      }
      if (objPrototype === Date.prototype) {
        return "Date";
      }
      if (promiseExists && objPrototype === Promise.prototype) {
        return "Promise";
      }
      if (setExists && objPrototype === Set.prototype) {
        return "Set";
      }
      if (mapExists && objPrototype === Map.prototype) {
        return "Map";
      }
      if (weakSetExists && objPrototype === WeakSet.prototype) {
        return "WeakSet";
      }
      if (weakMapExists && objPrototype === WeakMap.prototype) {
        return "WeakMap";
      }
      if (dataViewExists && objPrototype === DataView.prototype) {
        return "DataView";
      }
      if (mapExists && objPrototype === mapIteratorPrototype) {
        return "Map Iterator";
      }
      if (setExists && objPrototype === setIteratorPrototype) {
        return "Set Iterator";
      }
      if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
        return "Array Iterator";
      }
      if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
        return "String Iterator";
      }
      if (objPrototype === null) {
        return "Object";
      }
      return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
    }
    return typeDetect2;
  });
})(typeDetect);
var typeDetectExports = typeDetect.exports;
var type = typeDetectExports;
var typeOf = function typeOf2(value) {
  return type(value).toLowerCase();
};
function valueToString(value) {
  if (value && value.toString) {
    return value.toString();
  }
  return String(value);
}
var valueToString_1 = valueToString;
var lib = {
  global: global2,
  calledInOrder: calledInOrder_1,
  className: className_1,
  deprecated,
  every,
  functionName: functionName$1,
  orderByFirstCall: orderByFirstCall_1,
  prototypes,
  typeOf,
  valueToString: valueToString_1
};
(function(module2, exports) {
  const globalObject2 = lib.global;
  let timersModule;
  if (typeof commonjsRequire === "function" && true) {
    try {
      timersModule = require("timers");
    } catch (e) {
    }
  }
  function withGlobal(_global) {
    const userAgent = _global.navigator && _global.navigator.userAgent;
    const isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;
    const maxTimeout = Math.pow(2, 31) - 1;
    const idCounterStart = 1e12;
    const NOOP = function() {
      return void 0;
    };
    const NOOP_ARRAY = function() {
      return [];
    };
    const timeoutResult = _global.setTimeout(NOOP, 0);
    const addTimerReturnsObject = typeof timeoutResult === "object";
    const hrtimePresent = _global.process && typeof _global.process.hrtime === "function";
    const hrtimeBigintPresent = hrtimePresent && typeof _global.process.hrtime.bigint === "function";
    const nextTickPresent = _global.process && typeof _global.process.nextTick === "function";
    const utilPromisify = _global.process && import_util.default.promisify;
    const performancePresent = _global.performance && typeof _global.performance.now === "function";
    const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
    const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
    const queueMicrotaskPresent = _global.hasOwnProperty("queueMicrotask");
    const requestAnimationFramePresent = _global.requestAnimationFrame && typeof _global.requestAnimationFrame === "function";
    const cancelAnimationFramePresent = _global.cancelAnimationFrame && typeof _global.cancelAnimationFrame === "function";
    const requestIdleCallbackPresent = _global.requestIdleCallback && typeof _global.requestIdleCallback === "function";
    const cancelIdleCallbackPresent = _global.cancelIdleCallback && typeof _global.cancelIdleCallback === "function";
    const setImmediatePresent = _global.setImmediate && typeof _global.setImmediate === "function";
    if (isRunningInIE) {
      _global.setTimeout = _global.setTimeout;
      _global.clearTimeout = _global.clearTimeout;
      _global.setInterval = _global.setInterval;
      _global.clearInterval = _global.clearInterval;
      _global.Date = _global.Date;
    }
    if (setImmediatePresent) {
      _global.setImmediate = _global.setImmediate;
      _global.clearImmediate = _global.clearImmediate;
    }
    _global.clearTimeout(timeoutResult);
    const NativeDate = _global.Date;
    let uniqueTimerId = idCounterStart;
    function isNumberFinite(num) {
      if (Number.isFinite) {
        return Number.isFinite(num);
      }
      return isFinite(num);
    }
    let isNearInfiniteLimit = false;
    function checkIsNearInfiniteLimit(clock, i2) {
      if (clock.loopLimit && i2 === clock.loopLimit - 1) {
        isNearInfiniteLimit = true;
      }
    }
    function resetIsNearInfiniteLimit() {
      isNearInfiniteLimit = false;
    }
    function parseTime(str) {
      if (!str) {
        return 0;
      }
      const strings = str.split(":");
      const l2 = strings.length;
      let i2 = l2;
      let ms = 0;
      let parsed;
      if (l2 > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
        throw new Error(
          "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
        );
      }
      while (i2--) {
        parsed = parseInt(strings[i2], 10);
        if (parsed >= 60) {
          throw new Error(`Invalid time ${str}`);
        }
        ms += parsed * Math.pow(60, l2 - i2 - 1);
      }
      return ms * 1e3;
    }
    function nanoRemainder(msFloat) {
      const modulo = 1e6;
      const remainder = msFloat * 1e6 % modulo;
      const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
      return Math.floor(positiveRemainder);
    }
    function getEpoch(epoch) {
      if (!epoch) {
        return 0;
      }
      if (typeof epoch.getTime === "function") {
        return epoch.getTime();
      }
      if (typeof epoch === "number") {
        return epoch;
      }
      throw new TypeError("now should be milliseconds since UNIX epoch");
    }
    function inRange(from, to, timer) {
      return timer && timer.callAt >= from && timer.callAt <= to;
    }
    function getInfiniteLoopError(clock, job) {
      const infiniteLoopError = new Error(
        `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`
      );
      if (!job.error) {
        return infiniteLoopError;
      }
      const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
      let clockMethodPattern = new RegExp(
        String(Object.keys(clock).join("|"))
      );
      if (addTimerReturnsObject) {
        clockMethodPattern = new RegExp(
          `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`
        );
      }
      let matchedLineIndex = -1;
      job.error.stack.split("\n").some(function(line, i2) {
        const matchedComputedTarget = line.match(computedTargetPattern);
        if (matchedComputedTarget) {
          matchedLineIndex = i2;
          return true;
        }
        const matchedClockMethod = line.match(clockMethodPattern);
        if (matchedClockMethod) {
          matchedLineIndex = i2;
          return false;
        }
        return matchedLineIndex >= 0;
      });
      const stack = `${infiniteLoopError}
${job.type || "Microtask"} - ${job.func.name || "anonymous"}
${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
      try {
        Object.defineProperty(infiniteLoopError, "stack", {
          value: stack
        });
      } catch (e) {
      }
      return infiniteLoopError;
    }
    function mirrorDateProperties(target, source) {
      let prop;
      for (prop in source) {
        if (source.hasOwnProperty(prop)) {
          target[prop] = source[prop];
        }
      }
      if (source.now) {
        target.now = function now3() {
          return target.clock.now;
        };
      } else {
        delete target.now;
      }
      if (source.toSource) {
        target.toSource = function toSource() {
          return source.toSource();
        };
      } else {
        delete target.toSource;
      }
      target.toString = function toString3() {
        return source.toString();
      };
      target.prototype = source.prototype;
      target.parse = source.parse;
      target.UTC = source.UTC;
      target.prototype.toUTCString = source.prototype.toUTCString;
      target.isFake = true;
      return target;
    }
    function createDate() {
      function ClockDate(year, month, date, hour, minute, second, ms) {
        if (!(this instanceof ClockDate)) {
          return new NativeDate(ClockDate.clock.now).toString();
        }
        switch (arguments.length) {
          case 0:
            return new NativeDate(ClockDate.clock.now);
          case 1:
            return new NativeDate(year);
          case 2:
            return new NativeDate(year, month);
          case 3:
            return new NativeDate(year, month, date);
          case 4:
            return new NativeDate(year, month, date, hour);
          case 5:
            return new NativeDate(year, month, date, hour, minute);
          case 6:
            return new NativeDate(
              year,
              month,
              date,
              hour,
              minute,
              second
            );
          default:
            return new NativeDate(
              year,
              month,
              date,
              hour,
              minute,
              second,
              ms
            );
        }
      }
      return mirrorDateProperties(ClockDate, NativeDate);
    }
    function enqueueJob(clock, job) {
      if (!clock.jobs) {
        clock.jobs = [];
      }
      clock.jobs.push(job);
    }
    function runJobs(clock) {
      if (!clock.jobs) {
        return;
      }
      for (let i2 = 0; i2 < clock.jobs.length; i2++) {
        const job = clock.jobs[i2];
        job.func.apply(null, job.args);
        checkIsNearInfiniteLimit(clock, i2);
        if (clock.loopLimit && i2 > clock.loopLimit) {
          throw getInfiniteLoopError(clock, job);
        }
      }
      resetIsNearInfiniteLimit();
      clock.jobs = [];
    }
    function addTimer(clock, timer) {
      if (timer.func === void 0) {
        throw new Error("Callback must be provided to timer calls");
      }
      if (addTimerReturnsObject) {
        if (typeof timer.func !== "function") {
          throw new TypeError(
            `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`
          );
        }
      }
      if (isNearInfiniteLimit) {
        timer.error = new Error();
      }
      timer.type = timer.immediate ? "Immediate" : "Timeout";
      if (timer.hasOwnProperty("delay")) {
        if (typeof timer.delay !== "number") {
          timer.delay = parseInt(timer.delay, 10);
        }
        if (!isNumberFinite(timer.delay)) {
          timer.delay = 0;
        }
        timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
        timer.delay = Math.max(0, timer.delay);
      }
      if (timer.hasOwnProperty("interval")) {
        timer.type = "Interval";
        timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
      }
      if (timer.hasOwnProperty("animation")) {
        timer.type = "AnimationFrame";
        timer.animation = true;
      }
      if (timer.hasOwnProperty("idleCallback")) {
        timer.type = "IdleCallback";
        timer.idleCallback = true;
      }
      if (!clock.timers) {
        clock.timers = {};
      }
      timer.id = uniqueTimerId++;
      timer.createdAt = clock.now;
      timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
      clock.timers[timer.id] = timer;
      if (addTimerReturnsObject) {
        const res = {
          refed: true,
          ref: function() {
            this.refed = true;
            return res;
          },
          unref: function() {
            this.refed = false;
            return res;
          },
          hasRef: function() {
            return this.refed;
          },
          refresh: function() {
            timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
            clock.timers[timer.id] = timer;
            return res;
          },
          [Symbol.toPrimitive]: function() {
            return timer.id;
          }
        };
        return res;
      }
      return timer.id;
    }
    function compareTimers(a, b2) {
      if (a.callAt < b2.callAt) {
        return -1;
      }
      if (a.callAt > b2.callAt) {
        return 1;
      }
      if (a.immediate && !b2.immediate) {
        return -1;
      }
      if (!a.immediate && b2.immediate) {
        return 1;
      }
      if (a.createdAt < b2.createdAt) {
        return -1;
      }
      if (a.createdAt > b2.createdAt) {
        return 1;
      }
      if (a.id < b2.id) {
        return -1;
      }
      if (a.id > b2.id) {
        return 1;
      }
    }
    function firstTimerInRange(clock, from, to) {
      const timers2 = clock.timers;
      let timer = null;
      let id, isInRange;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          isInRange = inRange(from, to, timers2[id]);
          if (isInRange && (!timer || compareTimers(timer, timers2[id]) === 1)) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function firstTimer(clock) {
      const timers2 = clock.timers;
      let timer = null;
      let id;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          if (!timer || compareTimers(timer, timers2[id]) === 1) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function lastTimer(clock) {
      const timers2 = clock.timers;
      let timer = null;
      let id;
      for (id in timers2) {
        if (timers2.hasOwnProperty(id)) {
          if (!timer || compareTimers(timer, timers2[id]) === -1) {
            timer = timers2[id];
          }
        }
      }
      return timer;
    }
    function callTimer(clock, timer) {
      if (typeof timer.interval === "number") {
        clock.timers[timer.id].callAt += timer.interval;
      } else {
        delete clock.timers[timer.id];
      }
      if (typeof timer.func === "function") {
        timer.func.apply(null, timer.args);
      } else {
        const eval2 = eval;
        (function() {
          eval2(timer.func);
        })();
      }
    }
    function getClearHandler(ttype) {
      if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
        return `cancel${ttype}`;
      }
      return `clear${ttype}`;
    }
    function getScheduleHandler(ttype) {
      if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
        return `request${ttype}`;
      }
      return `set${ttype}`;
    }
    function createWarnOnce() {
      let calls = 0;
      return function(msg) {
        !calls++ && console.warn(msg);
      };
    }
    const warnOnce = createWarnOnce();
    function clearTimer(clock, timerId, ttype) {
      if (!timerId) {
        return;
      }
      if (!clock.timers) {
        clock.timers = {};
      }
      const id = Number(timerId);
      if (Number.isNaN(id) || id < idCounterStart) {
        const handlerName = getClearHandler(ttype);
        if (clock.shouldClearNativeTimers === true) {
          const nativeHandler = clock[`_${handlerName}`];
          return typeof nativeHandler === "function" ? nativeHandler(timerId) : void 0;
        }
        warnOnce(
          `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
        );
      }
      if (clock.timers.hasOwnProperty(id)) {
        const timer = clock.timers[id];
        if (timer.type === ttype || timer.type === "Timeout" && ttype === "Interval" || timer.type === "Interval" && ttype === "Timeout") {
          delete clock.timers[id];
        } else {
          const clear = getClearHandler(ttype);
          const schedule = getScheduleHandler(timer.type);
          throw new Error(
            `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`
          );
        }
      }
    }
    function uninstall(clock, config2) {
      let method, i2, l2;
      const installedHrTime = "_hrtime";
      const installedNextTick = "_nextTick";
      for (i2 = 0, l2 = clock.methods.length; i2 < l2; i2++) {
        method = clock.methods[i2];
        if (method === "hrtime" && _global.process) {
          _global.process.hrtime = clock[installedHrTime];
        } else if (method === "nextTick" && _global.process) {
          _global.process.nextTick = clock[installedNextTick];
        } else if (method === "performance") {
          const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
            clock,
            `_${method}`
          );
          if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
            Object.defineProperty(
              _global,
              method,
              originalPerfDescriptor
            );
          } else if (originalPerfDescriptor.configurable) {
            _global[method] = clock[`_${method}`];
          }
        } else {
          if (_global[method] && _global[method].hadOwnProperty) {
            _global[method] = clock[`_${method}`];
          } else {
            try {
              delete _global[method];
            } catch (ignore) {
            }
          }
        }
        if (clock.timersModuleMethods !== void 0) {
          for (let j = 0; j < clock.timersModuleMethods.length; j++) {
            const entry = clock.timersModuleMethods[j];
            timersModule[entry.methodName] = entry.original;
          }
        }
      }
      if (config2.shouldAdvanceTime === true) {
        _global.clearInterval(clock.attachedInterval);
      }
      clock.methods = [];
      if (!clock.timers) {
        return [];
      }
      return Object.keys(clock.timers).map(function mapper(key) {
        return clock.timers[key];
      });
    }
    function hijackMethod(target, method, clock) {
      clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
        target,
        method
      );
      clock[`_${method}`] = target[method];
      if (method === "Date") {
        const date = mirrorDateProperties(clock[method], target[method]);
        target[method] = date;
      } else if (method === "performance") {
        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
          target,
          method
        );
        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
          Object.defineProperty(
            clock,
            `_${method}`,
            originalPerfDescriptor
          );
          const perfDescriptor = Object.getOwnPropertyDescriptor(
            clock,
            method
          );
          Object.defineProperty(target, method, perfDescriptor);
        } else {
          target[method] = clock[method];
        }
      } else {
        target[method] = function() {
          return clock[method].apply(clock, arguments);
        };
        Object.defineProperties(
          target[method],
          Object.getOwnPropertyDescriptors(clock[method])
        );
      }
      target[method].clock = clock;
    }
    function doIntervalTick(clock, advanceTimeDelta) {
      clock.tick(advanceTimeDelta);
    }
    const timers = {
      setTimeout: _global.setTimeout,
      clearTimeout: _global.clearTimeout,
      setInterval: _global.setInterval,
      clearInterval: _global.clearInterval,
      Date: _global.Date
    };
    if (setImmediatePresent) {
      timers.setImmediate = _global.setImmediate;
      timers.clearImmediate = _global.clearImmediate;
    }
    if (hrtimePresent) {
      timers.hrtime = _global.process.hrtime;
    }
    if (nextTickPresent) {
      timers.nextTick = _global.process.nextTick;
    }
    if (performancePresent) {
      timers.performance = _global.performance;
    }
    if (requestAnimationFramePresent) {
      timers.requestAnimationFrame = _global.requestAnimationFrame;
    }
    if (queueMicrotaskPresent) {
      timers.queueMicrotask = true;
    }
    if (cancelAnimationFramePresent) {
      timers.cancelAnimationFrame = _global.cancelAnimationFrame;
    }
    if (requestIdleCallbackPresent) {
      timers.requestIdleCallback = _global.requestIdleCallback;
    }
    if (cancelIdleCallbackPresent) {
      timers.cancelIdleCallback = _global.cancelIdleCallback;
    }
    const originalSetTimeout = _global.setImmediate || _global.setTimeout;
    function createClock(start, loopLimit) {
      start = Math.floor(getEpoch(start));
      loopLimit = loopLimit || 1e3;
      let nanos = 0;
      const adjustedSystemTime = [0, 0];
      if (NativeDate === void 0) {
        throw new Error(
          "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
        );
      }
      const clock = {
        now: start,
        Date: createDate(),
        loopLimit
      };
      clock.Date.clock = clock;
      function getTimeToNextFrame() {
        return 16 - (clock.now - start) % 16;
      }
      function hrtime(prev) {
        const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
        const secsSinceStart = Math.floor(millisSinceStart / 1e3);
        const remainderInNanos = (millisSinceStart - secsSinceStart * 1e3) * 1e6 + nanos - adjustedSystemTime[1];
        if (Array.isArray(prev)) {
          if (prev[1] > 1e9) {
            throw new TypeError(
              "Number of nanoseconds can't exceed a billion"
            );
          }
          const oldSecs = prev[0];
          let nanoDiff = remainderInNanos - prev[1];
          let secDiff = secsSinceStart - oldSecs;
          if (nanoDiff < 0) {
            nanoDiff += 1e9;
            secDiff -= 1;
          }
          return [secDiff, nanoDiff];
        }
        return [secsSinceStart, remainderInNanos];
      }
      function fakePerformanceNow() {
        const hrt = hrtime();
        const millis = hrt[0] * 1e3 + hrt[1] / 1e6;
        return millis;
      }
      if (hrtimeBigintPresent) {
        hrtime.bigint = function() {
          const parts = hrtime();
          return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
        };
      }
      clock.requestIdleCallback = function requestIdleCallback(func, timeout) {
        let timeToNextIdlePeriod = 0;
        if (clock.countTimers() > 0) {
          timeToNextIdlePeriod = 50;
        }
        const result = addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: typeof timeout === "undefined" ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
          idleCallback: true
        });
        return Number(result);
      };
      clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
        return clearTimer(clock, timerId, "IdleCallback");
      };
      clock.setTimeout = function setTimeout2(func, timeout) {
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: timeout
        });
      };
      if (typeof _global.Promise !== "undefined" && utilPromisify) {
        clock.setTimeout[utilPromisify.custom] = function promisifiedSetTimeout(timeout, arg) {
          return new _global.Promise(function setTimeoutExecutor(resolve2) {
            addTimer(clock, {
              func: resolve2,
              args: [arg],
              delay: timeout
            });
          });
        };
      }
      clock.clearTimeout = function clearTimeout2(timerId) {
        return clearTimer(clock, timerId, "Timeout");
      };
      clock.nextTick = function nextTick(func) {
        return enqueueJob(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 1),
          error: isNearInfiniteLimit ? new Error() : null
        });
      };
      clock.queueMicrotask = function queueMicrotask2(func) {
        return clock.nextTick(func);
      };
      clock.setInterval = function setInterval(func, timeout) {
        timeout = parseInt(timeout, 10);
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 2),
          delay: timeout,
          interval: timeout
        });
      };
      clock.clearInterval = function clearInterval(timerId) {
        return clearTimer(clock, timerId, "Interval");
      };
      if (setImmediatePresent) {
        clock.setImmediate = function setImmediate2(func) {
          return addTimer(clock, {
            func,
            args: Array.prototype.slice.call(arguments, 1),
            immediate: true
          });
        };
        if (typeof _global.Promise !== "undefined" && utilPromisify) {
          clock.setImmediate[utilPromisify.custom] = function promisifiedSetImmediate(arg) {
            return new _global.Promise(
              function setImmediateExecutor(resolve2) {
                addTimer(clock, {
                  func: resolve2,
                  args: [arg],
                  immediate: true
                });
              }
            );
          };
        }
        clock.clearImmediate = function clearImmediate(timerId) {
          return clearTimer(clock, timerId, "Immediate");
        };
      }
      clock.countTimers = function countTimers() {
        return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
      };
      clock.requestAnimationFrame = function requestAnimationFrame(func) {
        const result = addTimer(clock, {
          func,
          delay: getTimeToNextFrame(),
          get args() {
            return [fakePerformanceNow()];
          },
          animation: true
        });
        return Number(result);
      };
      clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
        return clearTimer(clock, timerId, "AnimationFrame");
      };
      clock.runMicrotasks = function runMicrotasks() {
        runJobs(clock);
      };
      function doTick(tickValue, isAsync, resolve2, reject) {
        const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
        const ms = Math.floor(msFloat);
        const remainder = nanoRemainder(msFloat);
        let nanosTotal = nanos + remainder;
        let tickTo = clock.now + ms;
        if (msFloat < 0) {
          throw new TypeError("Negative ticks are not supported");
        }
        if (nanosTotal >= 1e6) {
          tickTo += 1;
          nanosTotal -= 1e6;
        }
        nanos = nanosTotal;
        let tickFrom = clock.now;
        let previous = clock.now;
        let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
        clock.duringTick = true;
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
        }
        function doTickInner() {
          timer = firstTimerInRange(clock, tickFrom, tickTo);
          while (timer && tickFrom <= tickTo) {
            if (clock.timers[timer.id]) {
              tickFrom = timer.callAt;
              clock.now = timer.callAt;
              oldNow = clock.now;
              try {
                runJobs(clock);
                callTimer(clock, timer);
              } catch (e) {
                firstException = firstException || e;
              }
              if (isAsync) {
                originalSetTimeout(nextPromiseTick);
                return;
              }
              compensationCheck();
            }
            postTimerCall();
          }
          oldNow = clock.now;
          runJobs(clock);
          if (oldNow !== clock.now) {
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
          }
          clock.duringTick = false;
          timer = firstTimerInRange(clock, tickFrom, tickTo);
          if (timer) {
            try {
              clock.tick(tickTo - clock.now);
            } catch (e) {
              firstException = firstException || e;
            }
          } else {
            clock.now = tickTo;
            nanos = nanosTotal;
          }
          if (firstException) {
            throw firstException;
          }
          if (isAsync) {
            resolve2(clock.now);
          } else {
            return clock.now;
          }
        }
        nextPromiseTick = isAsync && function() {
          try {
            compensationCheck();
            postTimerCall();
            doTickInner();
          } catch (e) {
            reject(e);
          }
        };
        compensationCheck = function() {
          if (oldNow !== clock.now) {
            tickFrom += clock.now - oldNow;
            tickTo += clock.now - oldNow;
            previous += clock.now - oldNow;
          }
        };
        postTimerCall = function() {
          timer = firstTimerInRange(clock, previous, tickTo);
          previous = tickFrom;
        };
        return doTickInner();
      }
      clock.tick = function tick(tickValue) {
        return doTick(tickValue, false);
      };
      if (typeof _global.Promise !== "undefined") {
        clock.tickAsync = function tickAsync(tickValue) {
          return new _global.Promise(function(resolve2, reject) {
            originalSetTimeout(function() {
              try {
                doTick(tickValue, true, resolve2, reject);
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.next = function next() {
        runJobs(clock);
        const timer = firstTimer(clock);
        if (!timer) {
          return clock.now;
        }
        clock.duringTick = true;
        try {
          clock.now = timer.callAt;
          callTimer(clock, timer);
          runJobs(clock);
          return clock.now;
        } finally {
          clock.duringTick = false;
        }
      };
      if (typeof _global.Promise !== "undefined") {
        clock.nextAsync = function nextAsync() {
          return new _global.Promise(function(resolve2, reject) {
            originalSetTimeout(function() {
              try {
                const timer = firstTimer(clock);
                if (!timer) {
                  resolve2(clock.now);
                  return;
                }
                let err;
                clock.duringTick = true;
                clock.now = timer.callAt;
                try {
                  callTimer(clock, timer);
                } catch (e) {
                  err = e;
                }
                clock.duringTick = false;
                originalSetTimeout(function() {
                  if (err) {
                    reject(err);
                  } else {
                    resolve2(clock.now);
                  }
                });
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.runAll = function runAll() {
        let numTimers, i2;
        runJobs(clock);
        for (i2 = 0; i2 < clock.loopLimit; i2++) {
          if (!clock.timers) {
            resetIsNearInfiniteLimit();
            return clock.now;
          }
          numTimers = Object.keys(clock.timers).length;
          if (numTimers === 0) {
            resetIsNearInfiniteLimit();
            return clock.now;
          }
          clock.next();
          checkIsNearInfiniteLimit(clock, i2);
        }
        const excessJob = firstTimer(clock);
        throw getInfiniteLoopError(clock, excessJob);
      };
      clock.runToFrame = function runToFrame() {
        return clock.tick(getTimeToNextFrame());
      };
      if (typeof _global.Promise !== "undefined") {
        clock.runAllAsync = function runAllAsync() {
          return new _global.Promise(function(resolve2, reject) {
            let i2 = 0;
            function doRun() {
              originalSetTimeout(function() {
                try {
                  let numTimers;
                  if (i2 < clock.loopLimit) {
                    if (!clock.timers) {
                      resetIsNearInfiniteLimit();
                      resolve2(clock.now);
                      return;
                    }
                    numTimers = Object.keys(
                      clock.timers
                    ).length;
                    if (numTimers === 0) {
                      resetIsNearInfiniteLimit();
                      resolve2(clock.now);
                      return;
                    }
                    clock.next();
                    i2++;
                    doRun();
                    checkIsNearInfiniteLimit(clock, i2);
                    return;
                  }
                  const excessJob = firstTimer(clock);
                  reject(getInfiniteLoopError(clock, excessJob));
                } catch (e) {
                  reject(e);
                }
              });
            }
            doRun();
          });
        };
      }
      clock.runToLast = function runToLast() {
        const timer = lastTimer(clock);
        if (!timer) {
          runJobs(clock);
          return clock.now;
        }
        return clock.tick(timer.callAt - clock.now);
      };
      if (typeof _global.Promise !== "undefined") {
        clock.runToLastAsync = function runToLastAsync() {
          return new _global.Promise(function(resolve2, reject) {
            originalSetTimeout(function() {
              try {
                const timer = lastTimer(clock);
                if (!timer) {
                  resolve2(clock.now);
                }
                resolve2(clock.tickAsync(timer.callAt - clock.now));
              } catch (e) {
                reject(e);
              }
            });
          });
        };
      }
      clock.reset = function reset() {
        nanos = 0;
        clock.timers = {};
        clock.jobs = [];
        clock.now = start;
      };
      clock.setSystemTime = function setSystemTime(systemTime) {
        const newNow = getEpoch(systemTime);
        const difference = newNow - clock.now;
        let id, timer;
        adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
        adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
        clock.now = newNow;
        nanos = 0;
        for (id in clock.timers) {
          if (clock.timers.hasOwnProperty(id)) {
            timer = clock.timers[id];
            timer.createdAt += difference;
            timer.callAt += difference;
          }
        }
      };
      clock.jump = function jump(tickValue) {
        const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
        const ms = Math.floor(msFloat);
        for (const timer of Object.values(clock.timers)) {
          if (clock.now + ms > timer.callAt) {
            timer.callAt = clock.now + ms;
          }
        }
        clock.tick(ms);
      };
      if (performancePresent) {
        clock.performance = /* @__PURE__ */ Object.create(null);
        clock.performance.now = fakePerformanceNow;
      }
      if (hrtimePresent) {
        clock.hrtime = hrtime;
      }
      return clock;
    }
    function install(config2) {
      if (arguments.length > 1 || config2 instanceof Date || Array.isArray(config2) || typeof config2 === "number") {
        throw new TypeError(
          `FakeTimers.install called with ${String(
            config2
          )} install requires an object parameter`
        );
      }
      if (_global.Date.isFake === true) {
        throw new TypeError(
          "Can't install fake timers twice on the same global object."
        );
      }
      config2 = typeof config2 !== "undefined" ? config2 : {};
      config2.shouldAdvanceTime = config2.shouldAdvanceTime || false;
      config2.advanceTimeDelta = config2.advanceTimeDelta || 20;
      config2.shouldClearNativeTimers = config2.shouldClearNativeTimers || false;
      if (config2.target) {
        throw new TypeError(
          "config.target is no longer supported. Use `withGlobal(target)` instead."
        );
      }
      let i2, l2;
      const clock = createClock(config2.now, config2.loopLimit);
      clock.shouldClearNativeTimers = config2.shouldClearNativeTimers;
      clock.uninstall = function() {
        return uninstall(clock, config2);
      };
      clock.methods = config2.toFake || [];
      if (clock.methods.length === 0) {
        clock.methods = Object.keys(timers).filter(function(key) {
          return key !== "nextTick" && key !== "queueMicrotask";
        });
      }
      if (config2.shouldAdvanceTime === true) {
        const intervalTick = doIntervalTick.bind(
          null,
          clock,
          config2.advanceTimeDelta
        );
        const intervalId = _global.setInterval(
          intervalTick,
          config2.advanceTimeDelta
        );
        clock.attachedInterval = intervalId;
      }
      if (clock.methods.includes("performance")) {
        const proto = (() => {
          if (hasPerformancePrototype) {
            return _global.Performance.prototype;
          }
          if (hasPerformanceConstructorPrototype) {
            return _global.performance.constructor.prototype;
          }
        })();
        if (proto) {
          Object.getOwnPropertyNames(proto).forEach(function(name) {
            if (name !== "now") {
              clock.performance[name] = name.indexOf("getEntries") === 0 ? NOOP_ARRAY : NOOP;
            }
          });
        } else if ((config2.toFake || []).includes("performance")) {
          throw new ReferenceError(
            "non-existent performance object cannot be faked"
          );
        }
      }
      if (_global === globalObject2 && timersModule) {
        clock.timersModuleMethods = [];
      }
      for (i2 = 0, l2 = clock.methods.length; i2 < l2; i2++) {
        const nameOfMethodToReplace = clock.methods[i2];
        if (nameOfMethodToReplace === "hrtime") {
          if (_global.process && typeof _global.process.hrtime === "function") {
            hijackMethod(_global.process, nameOfMethodToReplace, clock);
          }
        } else if (nameOfMethodToReplace === "nextTick") {
          if (_global.process && typeof _global.process.nextTick === "function") {
            hijackMethod(_global.process, nameOfMethodToReplace, clock);
          }
        } else {
          hijackMethod(_global, nameOfMethodToReplace, clock);
        }
        if (clock.timersModuleMethods !== void 0 && timersModule[nameOfMethodToReplace]) {
          const original = timersModule[nameOfMethodToReplace];
          clock.timersModuleMethods.push({
            methodName: nameOfMethodToReplace,
            original
          });
          timersModule[nameOfMethodToReplace] = _global[nameOfMethodToReplace];
        }
      }
      return clock;
    }
    return {
      timers,
      createClock,
      install,
      withGlobal
    };
  }
  const defaultImplementation = withGlobal(globalObject2);
  exports.timers = defaultImplementation.timers;
  exports.createClock = defaultImplementation.createClock;
  exports.install = defaultImplementation.install;
  exports.withGlobal = withGlobal;
})(fakeTimersSrc, fakeTimersSrc.exports);
var fakeTimersSrcExports = fakeTimersSrc.exports;
var FakeTimers = class {
  _clock;
  _fakingTime;
  _fakingDate;
  _fakeTimers;
  _userConfig;
  _now = RealDate.now;
  constructor({
    global: global3,
    config: config2
  }) {
    this._userConfig = config2;
    this._fakingDate = false;
    this._fakingTime = false;
    this._fakeTimers = fakeTimersSrcExports.withGlobal(global3);
  }
  clearAllTimers() {
    if (this._fakingTime)
      this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    if (this._checkFakeTimers())
      this._clock.runAll();
  }
  async runAllTimersAsync() {
    if (this._checkFakeTimers())
      await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    if (this._checkFakeTimers())
      this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    if (this._checkFakeTimers())
      await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i2 = steps; i2 > 0; i2--) {
        this._clock.next();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  async advanceTimersToNextTimerAsync(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i2 = steps; i2 > 0; i2--) {
        await this._clock.nextAsync();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  advanceTimersByTime(msToRun) {
    if (this._checkFakeTimers())
      this._clock.tick(msToRun);
  }
  async advanceTimersByTimeAsync(msToRun) {
    if (this._checkFakeTimers())
      await this._clock.tickAsync(msToRun);
  }
  runAllTicks() {
    if (this._checkFakeTimers()) {
      this._clock.runMicrotasks();
    }
  }
  useRealTimers() {
    if (this._fakingDate) {
      resetDate();
      this._fakingDate = false;
    }
    if (this._fakingTime) {
      this._clock.uninstall();
      this._fakingTime = false;
    }
  }
  useFakeTimers() {
    if (this._fakingDate) {
      throw new Error(
        '"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.'
      );
    }
    if (!this._fakingTime) {
      const toFake = Object.keys(this._fakeTimers.timers);
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        toFake,
        ...this._userConfig
      });
      this._fakingTime = true;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: now3 } = this._clock;
      this._clock.reset();
      this._clock.setSystemTime(now3);
    }
  }
  setSystemTime(now3) {
    if (this._fakingTime) {
      this._clock.setSystemTime(now3);
    } else {
      mockDate(now3 ?? this.getRealSystemTime());
      this._fakingDate = true;
    }
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    if (this._checkFakeTimers())
      return this._clock.countTimers();
    return 0;
  }
  configure(config2) {
    this._userConfig = config2;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) {
      throw new Error(
        'Timers are not mocked. Try calling "vi.useFakeTimers()" first.'
      );
    }
    return this._fakingTime;
  }
};
function createVitest() {
  const _mocker = typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : new Proxy({}, {
    get(_, name) {
      throw new Error(
        `Vitest mocker was not initialized in this environment. vi.${String(name)}() is forbidden.`
      );
    }
  });
  let _mockedDate = null;
  let _config = null;
  const workerState = getWorkerState();
  if (!workerState) {
    const errorMsg = 'Vitest failed to access its internal state.\n\nOne of the following is possible:\n- "vitest" is imported directly without running "vitest" command\n- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n';
    throw new Error(errorMsg);
  }
  const _timers = new FakeTimers({
    global: globalThis,
    config: workerState.config.fakeTimers
  });
  const _stubsGlobal = /* @__PURE__ */ new Map();
  const _stubsEnv = /* @__PURE__ */ new Map();
  const getImporter = () => {
    const stackTrace = createSimpleStackTrace({ stackTraceLimit: 4 });
    const importerStack = stackTrace.split("\n")[4];
    const stack = parseSingleStack(importerStack);
    return (stack == null ? void 0 : stack.file) || "";
  };
  return {
    useFakeTimers(config2) {
      if (config2) {
        _timers.configure(config2);
      } else {
        const workerState2 = getWorkerState();
        _timers.configure(workerState2.config.fakeTimers);
      }
      _timers.useFakeTimers();
      return this;
    },
    useRealTimers() {
      _timers.useRealTimers();
      _mockedDate = null;
      return this;
    },
    runOnlyPendingTimers() {
      _timers.runOnlyPendingTimers();
      return this;
    },
    async runOnlyPendingTimersAsync() {
      await _timers.runOnlyPendingTimersAsync();
      return this;
    },
    runAllTimers() {
      _timers.runAllTimers();
      return this;
    },
    async runAllTimersAsync() {
      await _timers.runAllTimersAsync();
      return this;
    },
    runAllTicks() {
      _timers.runAllTicks();
      return this;
    },
    advanceTimersByTime(ms) {
      _timers.advanceTimersByTime(ms);
      return this;
    },
    async advanceTimersByTimeAsync(ms) {
      await _timers.advanceTimersByTimeAsync(ms);
      return this;
    },
    advanceTimersToNextTimer() {
      _timers.advanceTimersToNextTimer();
      return this;
    },
    async advanceTimersToNextTimerAsync() {
      await _timers.advanceTimersToNextTimerAsync();
      return this;
    },
    getTimerCount() {
      return _timers.getTimerCount();
    },
    setSystemTime(time) {
      const date = time instanceof Date ? time : new Date(time);
      _mockedDate = date;
      _timers.setSystemTime(date);
      return this;
    },
    getMockedSystemTime() {
      return _mockedDate;
    },
    getRealSystemTime() {
      return _timers.getRealSystemTime();
    },
    clearAllTimers() {
      _timers.clearAllTimers();
      return this;
    },
    // mocks
    spyOn,
    fn,
    hoisted(factory) {
      assertTypes(factory, '"vi.hoisted" factory', ["function"]);
      return factory();
    },
    mock(path, factory) {
      const importer = getImporter();
      _mocker.queueMock(
        path,
        importer,
        factory ? () => factory(() => _mocker.importActual(path, importer)) : void 0
      );
    },
    unmock(path) {
      _mocker.queueUnmock(path, getImporter());
    },
    doMock(path, factory) {
      _mocker.queueMock(path, getImporter(), factory);
    },
    doUnmock(path) {
      _mocker.queueUnmock(path, getImporter());
    },
    async importActual(path) {
      return _mocker.importActual(path, getImporter());
    },
    async importMock(path) {
      return _mocker.importMock(path, getImporter());
    },
    mocked(item, _options = {}) {
      return item;
    },
    isMockFunction(fn2) {
      return isMockFunction(fn2);
    },
    clearAllMocks() {
      spies.forEach((spy) => spy.mockClear());
      return this;
    },
    resetAllMocks() {
      spies.forEach((spy) => spy.mockReset());
      return this;
    },
    restoreAllMocks() {
      spies.forEach((spy) => spy.mockRestore());
      return this;
    },
    stubGlobal(name, value) {
      if (!_stubsGlobal.has(name))
        _stubsGlobal.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
      Object.defineProperty(globalThis, name, {
        value,
        writable: true,
        configurable: true,
        enumerable: true
      });
      return this;
    },
    stubEnv(name, value) {
      if (!_stubsEnv.has(name))
        _stubsEnv.set(name, process.env[name]);
      process.env[name] = value;
      return this;
    },
    unstubAllGlobals() {
      _stubsGlobal.forEach((original, name) => {
        if (!original)
          Reflect.deleteProperty(globalThis, name);
        else
          Object.defineProperty(globalThis, name, original);
      });
      _stubsGlobal.clear();
      return this;
    },
    unstubAllEnvs() {
      _stubsEnv.forEach((original, name) => {
        if (original === void 0)
          delete process.env[name];
        else
          process.env[name] = original;
      });
      _stubsEnv.clear();
      return this;
    },
    resetModules() {
      const state = getWorkerState();
      resetModules(state.moduleCache);
      return this;
    },
    async dynamicImportSettled() {
      return waitForImportsToResolve();
    },
    setConfig(config2) {
      const state = getWorkerState();
      if (!_config)
        _config = { ...state.config };
      Object.assign(state.config, config2);
    },
    resetConfig() {
      if (_config) {
        const state = getWorkerState();
        Object.assign(state.config, _config);
      }
    }
  };
}
var vitest = createVitest();
var vi = vitest;

// node_modules/vitest/dist/vendor-run-once.3e5ef7d7.js
var filesCount = /* @__PURE__ */ new Map();
var cache = /* @__PURE__ */ new Map();
function runOnce(fn2, key) {
  const filepath = getWorkerState().filepath || "__unknown_files__";
  if (!key) {
    filesCount.set(filepath, (filesCount.get(filepath) || 0) + 1);
    key = String(filesCount.get(filepath));
  }
  const id = `${filepath}:${key}`;
  if (!cache.has(id))
    cache.set(id, fn2());
  return cache.get(id);
}
function isFirstRun() {
  let firstRun = false;
  runOnce(() => {
    firstRun = true;
  }, "__vitest_first_run__");
  return firstRun;
}

// node_modules/vitest/dist/vendor-index.7178e7a2.js
function getRunningMode() {
  return process.env.VITEST_MODE === "WATCH" ? "watch" : "run";
}
function isWatchMode() {
  return getRunningMode() === "watch";
}
var dist = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.expectTypeOf = void 0;
  const fn2 = () => true;
  const expectTypeOf2 = (_actual) => {
    const nonFunctionProperties = [
      "parameters",
      "returns",
      "resolves",
      "not",
      "items",
      "constructorParameters",
      "thisParameter",
      "instance",
      "guards",
      "asserts",
      "branded"
    ];
    const obj = {
      /* eslint-disable mmkal/@typescript-eslint/no-unsafe-assignment */
      toBeAny: fn2,
      toBeUnknown: fn2,
      toBeNever: fn2,
      toBeFunction: fn2,
      toBeObject: fn2,
      toBeArray: fn2,
      toBeString: fn2,
      toBeNumber: fn2,
      toBeBoolean: fn2,
      toBeVoid: fn2,
      toBeSymbol: fn2,
      toBeNull: fn2,
      toBeUndefined: fn2,
      toBeNullable: fn2,
      toMatchTypeOf: fn2,
      toEqualTypeOf: fn2,
      toBeCallableWith: fn2,
      toBeConstructibleWith: fn2,
      /* eslint-enable mmkal/@typescript-eslint/no-unsafe-assignment */
      extract: exports.expectTypeOf,
      exclude: exports.expectTypeOf,
      toHaveProperty: exports.expectTypeOf,
      parameter: exports.expectTypeOf
    };
    const getterProperties = nonFunctionProperties;
    getterProperties.forEach((prop) => Object.defineProperty(obj, prop, { get: () => (0, exports.expectTypeOf)({}) }));
    return obj;
  };
  exports.expectTypeOf = expectTypeOf2;
})(dist);
function noop2() {
}
var assertType = noop2;
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  afterAll,
  afterEach,
  assert,
  assertType,
  beforeAll,
  beforeEach,
  bench,
  chai: chai_exports,
  createExpect,
  describe,
  expect: globalExpect,
  expectTypeOf: dist.expectTypeOf,
  getRunningMode,
  isFirstRun,
  isWatchMode,
  it,
  onTestFailed,
  runOnce,
  should,
  suite,
  test,
  vi,
  vitest
});

// node_modules/vitest/dist/index.js
var expectTypeOf = dist.expectTypeOf;

// src/infra/service/logger/winston.ts
var winston = __toESM(require_winston());
var logFileName = "logs/error.log";
var levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};
var colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white"
};
function level() {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
}
winston.addColors(colors);
var format6 = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
);
var transports2 = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: logFileName,
    level: "error"
  }),
  new winston.transports.File({ filename: logFileName })
];
var Logger = winston.createLogger({
  level: level(),
  levels,
  format: format6,
  transports: transports2
});
var winston_default = Logger;

// src/infra/service/logger/__tests__/winston.spec.ts
describe("Logger", () => {
  it("deve criar uma inst\xE2ncia de logger corretamente", () => {
    globalExpect(winston_default).toBeDefined();
    globalExpect(winston_default).toBeInstanceOf(Object);
  });
  it("deve definir n\xEDveis de log corretamente", () => {
    const expectedLevels = {
      error: 0,
      warn: 1,
      info: 2,
      http: 3,
      debug: 4
    };
    globalExpect(winston_default.levels).toEqual(expectedLevels);
  });
  it("deve usar o n\xEDvel de log correto no ambiente de desenvolvimento", () => {
    process.env.NODE_ENV = "development";
    globalExpect(winston_default.level).toBe("warn");
  });
  it("deve usar o n\xEDvel de log correto em outros ambientes", () => {
    process.env.NODE_ENV = "production";
    globalExpect(winston_default.level).toBe("warn");
  });
});
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

assertion-error/index.js:
  (*!
   * assertion-error
   * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
   * MIT Licensed
   *)
  (*!
   * Return a function that will copy properties from
   * one object to another excluding any originally
   * listed. Returned function will create a new `{}`.
   *
   * @param {String} excluded properties ...
   * @return {Function}
   *)
  (*!
   * Primary Exports
   *)
  (*!
   * Inherit from Error.prototype
   *)
  (*!
   * Statically set name
   *)
  (*!
   * Ensure correct constructor
   *)

chai/lib/chai/utils/flag.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/test.js:
  (*!
   * Chai - test utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/expectTypes.js:
  (*!
   * Chai - expectTypes utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getActual.js:
  (*!
   * Chai - getActual utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/objDisplay.js:
  (*!
   * Chai - flag utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/getMessage.js:
  (*!
   * Chai - message composition utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/transferFlags.js:
  (*!
   * Chai - transferFlags utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)

chai/lib/chai/utils/isProxyEnabled.js:
  (*!
   * Chai - isProxyEnabled helper
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addProperty.js:
  (*!
   * Chai - addProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addLengthGuard.js:
  (*!
   * Chai - addLengthGuard utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getProperties.js:
  (*!
   * Chai - getProperties utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/proxify.js:
  (*!
   * Chai - proxify utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addMethod.js:
  (*!
   * Chai - addMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/overwriteProperty.js:
  (*!
   * Chai - overwriteProperty utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/overwriteMethod.js:
  (*!
   * Chai - overwriteMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/addChainableMethod.js:
  (*!
   * Chai - addChainingMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)
  (*!
   * Module variables
   *)

chai/lib/chai/utils/overwriteChainableMethod.js:
  (*!
   * Chai - overwriteChainableMethod utility
   * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/compareByInspect.js:
  (*!
   * Chai - compareByInspect utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js:
  (*!
   * Chai - getOwnEnumerablePropertySymbols utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/getOwnEnumerableProperties.js:
  (*!
   * Chai - getOwnEnumerableProperties utility
   * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies
   *)

chai/lib/chai/utils/isNaN.js:
  (*!
   * Chai - isNaN utility
   * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
   * MIT Licensed
   *)

chai/lib/chai/utils/index.js:
  (*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Dependencies that are used for multiple exports are required here only once
   *)
  (*!
   * test utility
   *)
  (*!
   * type utility
   *)
  (*!
   * expectTypes utility
   *)
  (*!
   * message utility
   *)
  (*!
   * actual utility
   *)
  (*!
   * Inspect util
   *)
  (*!
   * Object Display util
   *)
  (*!
   * Flag utility
   *)
  (*!
   * Flag transferring utility
   *)
  (*!
   * Deep equal utility
   *)
  (*!
   * Deep path info
   *)
  (*!
   * Check if a property exists
   *)
  (*!
   * Function name
   *)
  (*!
   * add Property
   *)
  (*!
   * add Method
   *)
  (*!
   * overwrite Property
   *)
  (*!
   * overwrite Method
   *)
  (*!
   * Add a chainable method
   *)
  (*!
   * Overwrite chainable method
   *)
  (*!
   * Compare by inspect method
   *)
  (*!
   * Get own enumerable property symbols method
   *)
  (*!
   * Get own enumerable properties method
   *)
  (*!
   * Checks error against a given set of criteria
   *)
  (*!
   * Proxify util
   *)
  (*!
   * addLengthGuard util
   *)
  (*!
   * isProxyEnabled helper
   *)
  (*!
   * isNaN method
   *)
  (*!
   * getOperator method
   *)

chai/lib/chai/assertion.js:
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Module dependencies.
   *)
  (*!
   * Module export.
   *)
  (*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   *)
  (*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   *)

chai/lib/chai/core/assertions.js:
  (*!
   * chai
   * http://chaijs.com
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/expect.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/should.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)

chai/lib/chai/interface/assert.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai dependencies.
   *)
  (*!
   * Module export.
   *)
  (*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   *)
  (*!
   * Aliases.
   *)

chai/lib/chai.js:
  (*!
   * chai
   * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Chai version
   *)
  (*!
   * Assertion Error
   *)
  (*!
   * Utils for plugins (not exported)
   *)
  (*!
   * Utility Functions
   *)
  (*!
   * Configuration
   *)
  (*!
   * Primary `Assertion` prototype
   *)
  (*!
   * Core Assertions
   *)
  (*!
   * Expect interface
   *)
  (*!
   * Should interface
   *)
  (*!
   * Assert interface
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@vitest/snapshot/dist/index.js:
  (*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   *)
*/
