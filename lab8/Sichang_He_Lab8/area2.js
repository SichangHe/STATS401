(() => {
    const data = [14, 53, 54, 67, 86, 89, 93, 105, 125, 158, 189, 234]
    const months = [...Array(12).keys()].map((i) => i + 1)
    const height = 400
    const width = 1500
    const curve_types = [
        d3.curveCardinal,
        d3.curveBasis,
        d3.curveLinear,
        d3.curveStep,
        d3.curveNatural,
        // d3.curveBundle,
    ]

    const svg = d3.select("body")
        .append("svg")
        .attr("height", height)
        .attr("width", width)

    curve_types.forEach((curve_type, t) => {
        const area = d3.area()
            .x((_, i) => i * 20 + 50)
            .y0(height)
            .y1((d) => height - d)
            .curve(curve_type)

        const g = svg.append("g")
            .attr("transform", `translate(${t * 250},0)`)
        g.append("path")
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("d", area(data))
        g.selectAll(`circle.group-circle${t}`)
            .data(data)
            .join("circle")
            .attr("class", `group-circle${t}`)
            .attr("cx", (_, i) => i * 20 + 50)
            .attr("cy", (d) => height - d)
            .attr('r', 2)
    })
})()
