(() => {
    const matrix = [
        [0, 5871, 8916, 2868],
        [1951, 0, 2060, 6171],
        [8010, 16145, 0, 3045],
        [1013, 990, 940, 1540]
    ]
    const colors = ["#f2808f", "#f2e380", "#c8f280", "#808ff2"]

    const svg = d3.select("body")
        .append("svg")
        .attr("width", 800)
        .attr("height", 800)
        .append("g")
        .attr("transform", "translate(400,400)")
    const chord = d3.chord()
        .padAngle(0.05)
        .sortSubgroups(d3.descending)(matrix)

    svg.datum(chord)
        .selectAll("g")
        .data((d) => d.groups)
        .join("g")
        .append("path")
        .style("fill", (_, i) => colors[i])
        .style("stroke", "none")
        .attr("d", d3.arc().innerRadius(300).outerRadius(310))
    svg.datum(chord)
        .append("g")
        .selectAll("path")
        .data((d) => d)
        .join("path")
        .attr("d", d3.ribbon().radius(300))
        .style("fill", (d) => colors[d.source.index])
        .style("opacity", 0.5)
        .style("stroke", "none")
})()
