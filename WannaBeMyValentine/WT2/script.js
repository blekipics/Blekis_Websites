const data = ['Audi', 'VW', 'BYD', 'BMW', 'Mercedes', 'Tesla', 'Ferrari'];

    console.log (
        data.map(element => element.toLowerCase())
            .filter(element => element.charAt(1) ==='e')
            .map (element => element.substring(0, 1))
            .reduce (element => element + '')
    )