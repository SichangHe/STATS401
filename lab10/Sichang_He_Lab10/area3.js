(() => {
    let data = []
    const width = 600
    const height = 400
    const n_point = 100
    const svg = d3.select('svg')

    const updateData = () => {
        data = [...Array(n_point).keys()].map((i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            r: 1 + Math.random() * 20,
        }))
    }
    const inBrushExtent = (d, extent) => extent &&
        d.x >= extent[0][0] &&
        d.x <= extent[1][0] &&
        d.y >= extent[0][1] &&
        d.y <= extent[1][1]
    const update = (extent) => svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 20)
        .style('fill', (d) => inBrushExtent(d, extent) ? 'red' : 'black')
    const handleBrush = (e) => update(e.selection)
    const brush = d3.brush().on('start brush', handleBrush)

    updateData()
    update()
    svg.call(brush)
})()

