
// Exercise 6
const validate = () => {
	let error = 0;
	// Get the input fields
	const fName = document.getElementById("fName");
	const fEmail = document.getElementById("fEmail");

	// Get the error elements
	const errorName = document.getElementById("errorName");
	const errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value.trim() == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Please fill in all required fields.");
	}else{
		alert("Form submitted successfully");
	}

}

/* let cartTable = document.getElementById("cart_list");
let totalPrice = document.getElementById("total_price"); */

const printCartCheckout = () => {
  

  let carritoProductosHTML = "";

  if (cartTable && totalPrice) {
    for (let product of cartList) {
      carritoProductosHTML += `<tr>
									<th scope="row">${product.name}</th>
									<td>$${product.price}</td>
									<td>
                    <div class="pl-1">
                      <button class="btn btn-outline-secondary btn-sm me-2 btn-restar" data-id="${
                        product.id
                      }">
                          <i class="fas fa-minus"></i>
                      </button>

                        <span class="cantidad">${product.quantity}</span>

                      <button class="btn btn-outline-secondary btn-sm ms-2 btn-sumar"  data-id="${
                        product.id
                      }">
                          <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </td>
									<td>$${product.totalPriceElement.toFixed(2)}</td>
								</tr>`;
    }
    cartTable.innerHTML = carritoProductosHTML;
    totalPrice.innerHTML = total;
  }

  localStorage.setItem("cartList", JSON.stringify(cartList));
};




