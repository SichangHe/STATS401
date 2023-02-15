(() => {
    const scale = d3.scaleLinear().domain([0, 100]).range([0, 500])
    const fn_w_ids = [[d3.axisLeft, "#left"], [d3.axisRight, "#right"], [d3.axisTop, "#top"], [d3.axisBottom, "#bottom"]]
    fn_w_ids.forEach(([fn, id]) => {
        const axis = fn(scale)
        axis.ticks(20)
        d3.select(id)
            .call(axis)
    })
})()

