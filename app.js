var allData = [];

document.getElementById('addData').onclick = function (e) {

    e.preventDefault()
    let inpName = document.getElementById('name').value;
    let inpPrice = document.getElementById('price').value;


    var objList = { name: inpName, price: inpPrice }

    allData.push(objList)
    // console.log(allData)

    bindData = ""
    allData.forEach((items) => {
        bindData += `
        <div class="col-md-3">
                <div class="card m-1">
                    <div class="card-body d-flex justify-content-between">
                        <p>BookName: ${items.name}</p>
                        <p>BookPrice: ${items.price}</p>
                    </div>
                    <button class="btn btn-danger">Remove</button>
                </div>
            </div>
        `
    })

    inpPrice = ""
    inpName = ""
    document.getElementById('bind').innerHTML = bindData;

}