(() => {
    let data = []
    const width = 600
    const height = 400
    const n_point = 100
    const svg = d3.select('svg')
    const g = svg.append('g')

    const updateData = () => {
        data = [...Array(n_point).keys()].map((i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            r: 1 + Math.random() * 20,
        }))
    }
    const update = () => g.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 3)
    const handleZoom = (e) => g.attr('transform', e.transform)
    const zoom = d3.zoom().on('zoom', handleZoom)

    updateData()
    update()
    svg.call(zoom)
})()

