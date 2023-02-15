(() => {
    const data = [
        { x: 4, y: 10 },
        { x: 7, y: 2 },
        { x: 9, y: 3 },
        { x: 12, y: 9 },
        { x: 17, y: 6 },
        { x: 20, y: 20 },
    ]

    const svg = d3.select("body")
        .append("svg")
        .attr("height", 1000)
        .attr("width", 1000)
    const line = d3.line()
        .x((d) => d.x * 10)
        .y((d) => d.y * 10)
        .curve(d3.curveCardinal)
    svg.append("path")
        .attr("d", line(data))
        .attr("fill", "none")
        .attr("stroke", "blue")
})()
