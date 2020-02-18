import withStyles from "@material-ui/core/styles/withStyles";
import React from "react";
import Slider from "@material-ui/core/Slider";
import { RangeProps } from './Range.d'

const getDots = (max: number) => {
    let dots: any[] = [];
    for (let i = 1; i <= max; i++) {
        if (i === 1 || i === max) {
            dots.push({
                value: i,
                label: i === 1 ? `${i} year` : `${i} years`
            });
        } else {
            dots.push({
                value: i,
                label: i
            });
        }
    }
    return dots;
};

const RangeModified = withStyles({
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


const Range = ({max}: RangeProps) => {
    const maxValue: number = max || 6;
    return (
        <div className={'rangeInput'}>
            <RangeModified
                min={1}
                max={maxValue}
                defaultValue={1}
                step={1}
                marks={getDots(maxValue)}
                valueLabelDisplay="on"
            />
        </div>
    );
}

export default Range;