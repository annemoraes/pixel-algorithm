const pixelArray = []
const width = 2
const heigth = 3

function start(){
    createDataStructure()
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
            html += '<td>'
            html += pixelIndex
            html += '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#canvas').innerHTML = html
}

start()