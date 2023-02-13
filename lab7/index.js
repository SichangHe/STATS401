const temperature = [3, 6, 15, 23, 29, 32, 33, 32, 27, 19, 10, 4];
const svg = d3.select("body")
    .append("svg")
    .attr('height', '100%')
    .attr('width', '100%');
svg.append('g')
    .attr('class', 'bar-chart')
    .selectAll('rect')
    .data(temperature)
    .join('rect')
    .attr('fill', '#96d82a')
    .attr('height', function(d) { return (d * 10); })
    .attr('width', '30')
    .attr('x', function(_, i) { return 40 * i; })
    .attr('y', function(d) { return (380 - d * 10); });

const max_temperature = [8, 9, 13, 19, 24, 27, 32, 32, 28, 23, 17, 11];
const min_temperature = [1, 2, 5, 11, 16, 21, 25, 25, 21, 15, 9, 3];
let fixedX0 = 0;
svg.append('g')
    .attr('class', 'circle-line')
    .selectAll('circle')
    .data(max_temperature)
    .join('circle')
    .attr('fill', '#ffbca4')
    .attr('cx', function(d, i) { fixedX0 += d * 3 + i * 10; return fixedX0; })
    .attr('cy', '500')
    .attr('r', function(d) { return d * 2 });
let fixedX1 = 0;
svg.append('g')
    .attr('class', 'another-circle-line')
    .selectAll('circle')
    .data(min_temperature)
    .join('circle')
    .attr('fill', '#a4e7ff')
    .attr('cx', function(d, i) { fixedX1 += d * 3 + i * 10; return fixedX1; })
    .attr('cy', '700')
    .attr('r', function(d) { return d * 2 });
const ug_number = [247, 325, 318, 407];
const fixedX2 = 600;
svg.append('g')
    .attr('class', 'lines')
    .selectAll('line')
    .data(ug_number)
    .join('line')
    .attr('stroke', '#a4baff')
    .attr('stroke-width', '5')
    .attr('x1', fixedX2)
    .attr('y1', function(_, i) { return (150 + i * 50); })
    .attr('x2', function(d) { return fixedX2 + d; })
    .attr('y2', function(_, i) { return (150 + i * 50); });
svg.append('g')
    .attr('class', 'text')
    .append('text')
    .attr('x', 600)
    .attr('y', 100)
    .text('lorem ipsum dolor sit amet, consectetur')
    .style("fill", "black")
    .style("stroke", "red")
    .attr('font-size', 25);
const fixedX3 = 1320;
svg.append('g')
    .attr('class', 'dku-text')
    .append('text')
    .attr('x', fixedX3)
    .attr('y', 175)
    .attr('text-anchor', 'start')
    .attr('font-size', 50)
    .style("fill", "#ff90ab")
    .text('DKU');
svg.append('g')
    .attr('class', 'dku-text')
    .append('text')
    .attr('x', fixedX3)
    .attr('y', 225)
    .attr('text-anchor', 'middle')
    .attr('font-size', 50)
    .style("fill", "#ff7d9c")
    .text('DKU');
svg.append('g')
    .attr('class', 'dku-text')
    .append('text')
    .attr('x', fixedX3)
    .attr('y', 270)
    .attr('text-anchor', 'end')
    .attr('font-size', 50)
    .style("fill", "#ff698d")
    .text('DKU');