class Product{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const addProduct = document.getElementById("add-product");
const productName = document.getElementById("product-name");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");

const inventory = document.getElementById("inventory");

const arrayOfProduct = [];

let arraySize = 0;

addProduct.onclick = () => {
    const tableRow = document.createElement("tr");

    const product = document.createElement("td");
    const value = document.createElement("td");
    const amount = document.createElement("td");


    if(productName.value === "" || price.value === "" || quantity.value === ""){
        window.alert("Enter the details");
        productName.value = "";
        price.value = "";
        quantity.value = "";
        return;
    }

    
    arrayOfProduct.push(new Product(productName.value, price.value, Number(quantity.value)));
    
    product.textContent = productName.value;
    value.textContent = "$" + price.value;
    
    amount.textContent = Number(quantity.value);
    const editButon = document.createElement("button");
    editButon.textContent = "edit";
    editButon.classList.add("edit");
    const deleteButon = document.createElement("button");
    deleteButon.innerHTML = "&#215;";
    deleteButon.classList.add("delete");


    amount.appendChild(deleteButon);
    amount.appendChild(editButon);

    
    tableRow.appendChild(product);
    tableRow.appendChild(value);
    tableRow.appendChild(amount);
    
    inventory.appendChild(tableRow);

    productName.value = "";
    price.value = "";
    quantity.value = "";

    deleteButon.onclick = () => {

        deleteButon.parentElement.parentElement.remove();
    }

    console.log(arrayOfProduct[arraySize]);
    arraySize ++;


    editButon.onclick = () => {
        let addQuantity = amount.textContent;
        Product.prototype= {quantity: addQuantity};
        const updatedQuantity = window.prompt("Enter the updates quantity");

        amount.textContent = updatedQuantity;
        amount.appendChild(deleteButon);
        amount.appendChild(editButon);

    };

    
}


