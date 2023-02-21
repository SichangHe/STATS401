(async () => {
    const height = 400;
    const width = 1000;
    const parseDate = d3.timeParse("%m/%d/%Y")

    const svg = d3.select("body")
        .append("svg")
        .attr("height", "30%")
        .attr("width", "100%")

    const data = await d3.csv("price_data.csv",
        (d) => ({
            date: parseDate(d.date),
            price: Number(d.price.trim().slice(1))
        })
    )
    data.sort((a, b) => a.date - b.date)

    const getDate = (d) => d.date
    const max_date = d3.max(data, getDate)
    const min_date = d3.min(data, getDate)
    const max_price = d3.max(data, (d) => d.price)

    const y = d3.scaleLinear()
        .domain([0, max_price])
        .range([height, 0])
    const x = d3.scaleTime()
        .domain([min_date, max_date])
        .range([0, width])

    const yAxis = d3.axisLeft(y)
    const xAxis = d3.axisBottom(x)

    const chart = svg.append("g")
        .attr("transform", "translate(50,50)")

    const line = d3.line()
        .x(d => x(d.date))
        .y(d => y(d.price))

    chart.append("path")
        .attr("d", line(data))
        .attr('class', 'price')
    chart.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis)
    chart.append("g")
        .attr("class", "y-axis")
        .call(yAxis)
})()
