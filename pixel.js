const pixelArray = []
const width = 10
const heigth = 10

function start(){
    createDataStructure()
    createSource()
    render()
    console.log(pixelArray)
}

function createDataStructure(){
    const numberOfPixels = width * heigth
    for(let i = 0; i < numberOfPixels; i++){
        pixelArray[i] = 0;
    }
}

function calculatePropagation(){

}

function render(){
    let html = '<table cellpadding=0 cellspacing=0>'
    for(let row = 0; row < heigth; row++){
        html += '<tr>'
        for(let column = 0; column < width; column++){
            const pixelIndex = column + (width * row)
            const intensity = pixelArray[pixelIndex]
            html += '<td>'
            html += `<div class="pixel-index">${pixelIndex}</div>`
            html += intensity
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#canvas').innerHTML = html
}

function createSource(){
    for(let column = 0; column <= width; column++){
        const overflowPixelIndex = width * heigth
        const pixelIndex = (overflowPixelIndex - width) + column
        pixelArray[pixelIndex] = 36
    }
}
start()