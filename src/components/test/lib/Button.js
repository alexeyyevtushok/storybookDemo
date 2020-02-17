"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./Button.css");
var Button = function (_a) {
    var textValue = _a.textValue, classValue = _a.classValue;
    var setClass = classValue || 'default';
    var _b = react_1.default.useState(false), active = _b[0], setActive = _b[1];
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("button", { className: setClass, onClick: function () { return setActive(!active); } }, textValue || 'click'),
        react_1.default.createElement("br", null),
        active && react_1.default.createElement("span", null, "Button is clicked")));
};
exports.default = Button;
