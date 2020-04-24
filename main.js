const getData = () => { 

    storedInput = []
    
    const inputs = {
        tickerInput: document.getElementById("ticker-input"),
        sharesInput: document.getElementById("shares-input"),
        nodButton: document.getElementById("nod-button").addEventListener("click", () => { 
            const userInput = inputs.tickerInput.value
            storedInput.push(userInput)
            console.log(storedInput)

            displayOurData()
         })
    }

    const outputs = {
        displayData: document.getElementById("show-input"),

    }

    const displayOurData = () => {
        outputs.displayData.innerHTML = storedInput
        inputs.tickerInput.value = ""
    }
    

}

getData()



/* 
1 We have an input box that takes in data on click.
2 We have an array that the data is added to every time the button is clicked.
3 We are displaying our input on the page
*/