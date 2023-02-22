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
    const update = () => svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 20)
    const handleDrag = (e) => {
        e.subject.x = e.x
        e.subject.y = e.y
        update()
    }
    const drag = d3.drag().on('drag', handleDrag)

    updateData()
    update()
    svg.selectAll('circle').call(drag)
})()

