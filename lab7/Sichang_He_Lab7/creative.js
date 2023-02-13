const mid = () => 300
const lines = [
    { 'x1': mid(), 'y1': 0, 'x2': mid() - 100, 'y2': 100 },
    { 'x1': mid(), 'y1': 0, 'x2': mid() + 100, 'y2': 100 },
    { 'x1': mid(), 'y1': 0, 'x2': mid(), 'y2': 200 },
    { 'x1': mid(), 'y1': 400, 'x2': mid(), 'y2': 600 },
    { 'x1': mid() - 100, 'y1': 500, 'x2': mid() + 100, 'y2': 500 },
]
const lines_group = d3.select("body > .flex")
    .append("svg")
    .attr('class', 'symbol')
    .attr('height', 600)
    .attr('width', 600)
    .append('g')

lines_group.selectAll('line')
    .data(lines)
    .join('line')
    .attr('stroke', 'pink')
    .attr('stroke-width', '5')
    .attr('x1', (d) => d['x1'])
    .attr('y1', (d) => d['y1'])
    .attr('x2', (d) => d['x2'])
    .attr('y2', (d) => d['y2'])

lines_group.append('circle')
    .attr('r', 100)
    .attr('cx', mid())
    .attr('cy', 300)
    .attr('fill', 'none')
    .attr('stroke', 'pink')
    .attr('stroke-width', '5')
