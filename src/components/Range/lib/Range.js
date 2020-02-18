import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Slider from "@material-ui/core/Slider";
var getDots = function (max) {
    var dots = [];
    for (var i = 1; i <= max; i++) {
        if (i === 1 || i === max) {
            dots.push({
                value: i,
                label: i === 1 ? i + " year" : i + " years"
            });
        }
        else {
            dots.push({
                value: i,
                label: i
            });
        }
    }
    return dots;
};
var RangeModified = withStyles({
    root: {
        color: "darkorange"
    },
    rail: {
        color: 'black'
    },
    valueLabel: {
        left: "-14px",
        "& > span > span": {
            fontSize: '14px',
            paddingRight: "9px"
        }
    },
    thumb: {
        '&:hover': {
            boxShadow: '0px 0px 0px 8px rgba(255, 140, 0, 0.16)'
        },
        '&:active,&:focus': {
            boxShadow: '0px 0px 0px 14px rgba(255, 140, 0, 0.16)'
        }
    }
})(Slider);
var Range = function (_a) {
    var max = _a.max;
    var maxValue = max || 6;
    return (React.createElement("div", { className: 'rangeInput' },
        React.createElement(RangeModified, { min: 1, max: maxValue, defaultValue: 1, step: 1, marks: getDots(maxValue), valueLabelDisplay: "on" })));
};
export default Range;
