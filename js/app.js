class Product {
  constructor(name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

//class UI
class UI {
  addProduct(product) {
   const productList = document.getElementById('product-list');
   const element = document.createElement('div');
   element.innerHTML = `
    <div class="card text-center mb-4">
      <div class="card-body">
        <strong>Product Name</strong>: ${product.name}
        <strong>Product Price</strong>: ${product.price}
        <strong>Product Year</strong>: ${product.year}
        <a href="#" class="btn btn-danger ml-3" name="delete">Delete</a>
      </div>
    </div>
    `;
    productList.appendChild(element);
    this.resetForm();
  }

  resetForm(){
    document.getElementById('Form').reset();
  }

  deleteProduct(element){
    if(element.name === 'delete'){
      element.parentElement.parentElement.remove();
      this.showMessage('Product Deleted Successfully', 'info');
    }
  }

  showMessage(message, cssClass){
   const div = document.createElement('div');
   div.className = `text-center mt-3 alert alert-${cssClass}`;
   div.appendChild(document.createTextNode(message));
   //mostrando en el dom
   const container = document.querySelector('.container');
   const app = document.querySelector('#App');
   container.insertBefore(div, app);
   setTimeout(function(){
      document.querySelector('.alert').remove();
   }, 3000);
  }
}//class UI

//Dom Event

document.getElementById('Form').addEventListener('submit', function (e){
 const name = document.getElementById('name').value;
 const price = document.getElementById('price').value;
 const year = document.getElementById('year').value;
 const product = new Product(name, price, year);

 const ui = new UI();
 
 if(name === '' || price === '' || year === ''){
  ui.showMessage('Complete Fields Please', 'danger');
 }
 else{
  ui.showMessage('Product Added Succesfully', 'success');
  ui.addProduct(product);
 }


 e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteProduct(e.target);
});