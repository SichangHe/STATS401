(() => {
    const data = [14, 53, 54, 67, 86, 89, 93, 105, 125, 158, 189, 234]
    const months = [...Array(12).keys()].map((i) => i + 1)
    const height = 400
    const width = 1000

    const area = d3.area()
        .x((_, i) => i * 20 + 50)
        .y0(height)
        .y1((d) => height - d)

    const svg = d3.select("body")
        .append("svg")
        .attr("height", height)
        .attr("width", width)
    svg.append("path")
        .attr("d", area(data))
        .attr("fill", "pink")
})()
