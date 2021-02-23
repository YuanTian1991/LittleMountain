import React from 'react';
import ecStat from 'echarts-stat';

import PvalueHistOption from './TemplateOptions/PvalueHistOption';

export const CreatePvalueHist = (mycolumns, myrows, axis) => {

  if (!mycolumns.find(x => x.key === axis.key)) {
    return {
      option: [],
      EventsDict: {},
      msg: '',
      errorMsg: 'Seems ' + axis.name + ' does not exist in your column. Try assign correct column in Tune tab.',
      plotReady: false,
    };
  }

  let tmpValue = myrows.map((x) => Number(x[axis.key]));

  if (tmpValue.length < 2) {
    return {
      option: [],
      EventsDict: {},
      msg: '',
      errorMsg: 'Not enought row to draw Histogram, at least 2 rows required',
      plotReady: false,
    };
  }

  if (tmpValue.filter(x => !isNaN(x)).length < 2) {
    return {
      option: [],
      EventsDict: {},
      msg: '',
      errorMsg: 'Seems there are too many NA in your ' + axis.name + ' column.',
      plotReady: false,
    };
  }

  // ------------------- Input Check ----------------------

  var bins = ecStat.histogram(tmpValue);

  const newHistogramOption = JSON.parse(JSON.stringify(PvalueHistOption));

  newHistogramOption.title.text = 'Histogram for Distribution of ' + axis.name;
  newHistogramOption.tooltip.formatter = function (params) {
    return `${axis.name} (x-axis): <b>${params.value[0]}</b><br />
            Total counts (y-axis): <b>${params.value[1]}</b>`;
  };
  newHistogramOption.xAxis[0].name = axis.name;

  newHistogramOption.series[0].data = bins.data;

  let tmpMsg =
    'Now you have chose one number column, histogram will be plotted one the left. \n\n' +
    'Note that The x-axis in a histogram is a number line that has been split into number ranges , ' +
    ' or bins. NOT actually ' +
    axis.name +
    ' value. the height of the bar represents the number of data points that fall into that range. \n\n' +
    'You may hover on bar to check total counts (y axis) and corresponding ' +
    axis.name +
    ' value range in distribution (x axis).\n\n' +
    'If you use row filter and column filter, the plot will change promptly';

  return {
    option: newHistogramOption,
    EventsDict: {},
    msg: tmpMsg,
    errorMsg: '',
    warningMsg: '',
    plotReady: true,
  };
};