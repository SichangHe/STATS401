(async () => {
    const request = fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
    const width = 1000;
    const height = 600;
    const pale_green_gray = 'hsl(120deg 10% 90%)';

    const projection = d3
        .geoNaturalEarth1()
        .scale(width / 4)
        .translate([width / 5, (2 * height) / 3]);

    const tooltip = d3.select("body")
        .append("div")
        .text("name");

    const svg = d3.select('body')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const requesting = await request
    const data = await requesting.json()
    const features = data.features

    svg
        .append('g')
        .selectAll('path')
        .data(features)
        .join('path')
        .attr('fill', pale_green_gray)
        .attr('d', d3.geoPath().projection(projection))
        .style('stroke', '#fff');

    const quakes = [
        { coord: [37.166, 37.032], name: 'Şehitkamil, Gaziantep' },
        { coord: [38.0818, 37.1773], name: 'Ekinözü, Kahramanmaraş' },
    ]
    svg
        .selectAll('circle')
        .data(quakes)
        .join('circle')
        .attr('cx', (d) => projection(d.coord)[0])
        .attr('cy', (d) => projection(d.coord)[1])
        .attr('r', 3)
        .style('fill', '#f00')
        .style('stroke', '#f00')
        .style('stroke-width', 0.7)
        .attr('fill-opacity', 0.5)
        .style('opacity', 0.8)
        .on("mouseover", (_, d) => tooltip.text(d.name).style("visibility", "visible"));
})()
