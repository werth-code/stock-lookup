const getData = () => { 

    const storedInput = []
    
    const inputs = {
        tickerInput: document.getElementById("ticker-input"),
        sharesInput: document.getElementById("shares-input"),
        nodButton: document.getElementById("nod-button").addEventListener("click", () => { 
            storedInput.push([inputs.tickerInput.value, inputs.sharesInput.value])
            console.log(storedInput)

            displayOurData()
         })
    }

    const outputs = {
        displayDataTicker: document.getElementById("show-input-ticker"),
        displayDataShares: document.getElementById("show-input-shares"),
    }

    const displayOurData = () => {
        outputs.displayDataTicker.innerHTML = 'Ticker: ' + inputs.tickerInput.value 
        outputs.displayDataShares.innerHTML = 'Shares: ' + inputs.sharesInput.value
        inputs.tickerInput.value = ""
        inputs.sharesInput.value = ""
    }
    
}

getData()




/* 
1 We have an input box that takes in data on click.
2 We have an array that the data is added to every time the button is clicked.
3 We are displaying our input on the page a
*/