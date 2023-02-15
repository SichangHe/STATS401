(() => {
    const scale_x = d3.scaleLinear().domain([0, 3]).range([4.6582, 177.466])
    const scale_y = d3.scaleLinear().domain([5, 0]).range([8.43652, 91])
    const axis_x = d3.axisBottom(scale_x)
    const axis_y = d3.axisRight(scale_y)
    axis_x.ticks(4)
    axis_y.ticks(6)
    const original = d3.select("#original")
    original.append("g")
        .call(axis_x)
        .attr("transform", "translate(0, 91)")
    original.append("g")
        .call(axis_y)
        .attr("transform", "translate(182, 0)")
})();

(() => {
    const scale_x = d3.scaleLinear().domain([0, 3]).range([4.6582, 177.466])
    const scale_y = d3.scaleLinear().domain([5, 0]).range([8.43652, 91])
    const axis_x = d3.axisBottom(scale_x)
    const axis_y = d3.axisRight(scale_y)
    axis_x.ticks(4)
    axis_y.ticks(6)

    const regen = d3.select("body")
        .append("svg")
        .attr("id", "regen")
        .attr("width", "212")
        .attr("height", "111")
    regen.append("g")
        .call(axis_x)
        .attr("transform", "translate(0, 91)")
    regen.append("g")
        .call(axis_y)
        .attr("transform", "translate(182, 0)")

    const data_green = [
        { x: 6, y: 8 },
        { x: 62, y: 52 },
        { x: 120, y: 29 },
        { x: 177, y: 85 },
    ]
    const data_blue = [
        { x: 5, y: 35 },
        { x: 62, y: 22 },
        { x: 120, y: 77 },
        { x: 177, y: 38 },
    ]

    const area = d3.area()
        .x((d) => d.x)
        .y0(91)
        .y1((d) => d.y)
        .curve(d3.curveCardinal)

    const g_green = regen.append("g")
    g_green.append("path")
        .attr("fill", "url(#paint0_linear_579_41)")
        .attr("stroke", "#68E285")
        .attr("stroke-width", 2)
        .attr("d", area(data_green))
    g_green.selectAll("circle")
        .data(data_green)
        .join("circle")
        .attr("fill", "#68E285")
        .attr("r", 4)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)

    const g_blue = regen.append("g")
    g_blue.append("path")
        .attr("fill", "url(#paint1_linear_579_41)")
        .attr("stroke", "#2D99FE")
        .attr("stroke-width", 2)
        .attr("d", area(data_blue))
    g_blue.selectAll("circle")
        .data(data_blue)
        .join("circle")
        .attr("fill", "#2D99FE")
        .attr("r", 4)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
})();

