export default function TableGrid({ submit }) {

    const { rows, cols } = submit

    let wi = `${cols* 32}px`
    let hi = `${rows* 32}px`

    let dblArr = []
    let count = 1

    for(let i = 1; i <= cols; i++){
        let rowArr = []
        for(let j = 1; j <= rows; j++){
            rowArr.push(count)
            count++
        }
        dblArr.push(rowArr)
    }

    function fixOrder(arr){
        for(let i = 1; i < arr.length; i+=2){
            arr[i].reverse()
        }
    }

    fixOrder(dblArr)
    
    let correctedArr = dblArr.flat()

    return (
        <div className="grid">
            <section id="boxes"
            style={{width: wi, height: hi}} >
                {correctedArr.map((num) =>
                <div key={num} className="box">
                    {num}
                </div>)}
            </section>
        </div>
    )
} 