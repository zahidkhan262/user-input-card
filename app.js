var allData = [];


// document.getElementById('addData').onclick = function (e) 
function addItem() {

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
                                    <p> ${items.name}</p>
                                    <p> ${items.price}</p>
                                </div>
                                <button class="btn btn-danger" onclick="delItem()">Remove</button>
                        </div>
                    </div>
                `
    })

    document.getElementById('bind').innerHTML = bindData;

}



function delItem(index) {




    allData.splice(index, 1);

    console.log(allData)

    bindData = ""

    allData.forEach((ele) => {

        bindData += `
                        <div class="col-md-3">
                            <div class="card m-1">
                                <div class="card-body d-flex justify-content-between">
                                    <p>${ele.name}</p>
                                    <p>${ele.price}</p>
                                </div>
                            <button class="btn btn-danger" onclick="delItem()">Remove</button>
                            </div>
                        </div>
    `
    })

    document.getElementById('bind').innerHTML = bindData;

}
