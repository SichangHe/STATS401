(() => {
    let data = []
    const width = 600
    const height = 400
    const n_point = 100
    const svg = d3.select('svg')

    const quadtree = d3.quadtree()
        .x((d) => d.x)
        .y((d) => d.y)
    const updateData = () => {
        data = [...Array(n_point).keys()].map((i) => ({
            id: i,
            x: Math.random() * width,
            y: Math.random() * height,
            r: 1 + Math.random() * 20,
        }))
    }
    const update = (hover_id) => svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => d.r)
        .style('fill', d => d.id === hover_id ? 'red' : null)
    const handleMousemove = (e) =>
        update(quadtree.find(e.pageX, e.pageY, 20)?.id)
    const updateQuadtree = () => quadtree.addAll(data)

    updateData()
    updateQuadtree()
    update()
    svg.on('mousemove', handleMousemove)
})()
