function waitForElement(selector, callback, count = 1, countLimit = 30) {
	const checkWaitingElementInterval = setInterval(() => {
		if (document.querySelectorAll(selector).length >= count) {
			clearInterval(checkWaitingElementInterval)
			callback();
		} else {
			countLimit--
		}

		if (!countLimit) {
			clearInterval(checkWaitingElementInterval)
			if (document.querySelectorAll(selector).length > 0) callback();
		}
	}, 1000);
}

class VariantQuantity extends HTMLElement {
  constructor() {
    super();

    this.radioInput = this.querySelector('.js-variant-quantity')
    this.section = this.closest('.shopify-section')
  }

  connectedCallback () {
    this.radioInput.addEventListener('input', this.handleSelection.bind(this))

    if (+this.radioInput.dataset.quantity === 2) {
      waitForElement('.appstle_sub_widget', () => {
        this.radioInput.click()
      })
      
    }
  }

  disconnectedCallback () {
    this.radioInput.removeEventListener('input')
  }

  handleSelection (event) {
    const { quantity, price, note, fulfillmentCount } = event.target.dataset

    const totalPrice = Number(quantity) * Number(price)

    this.section.querySelectorAll('.price-item--regular').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice)} USD`
    })

    this.section.querySelectorAll('.appstle_one_time_price_wrapper .appstle_subscription_amount').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice)}`
    })

    this.section.querySelectorAll('.appstle_subscription_amount_wrapper .appstle_subscription_compare_amount').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice)}`
    })

    this.section.querySelectorAll('.appstle_subscription_amount_wrapper .appstle_subscription_amount').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice * 0.9)}`
    })

    this.section.querySelectorAll('.appstle_select .transcy-money').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice * 0.9)}`
    })

    this.section.querySelectorAll('[name="id"]').forEach(el => el.value = event.target.value)
    this.section.querySelectorAll('[name="quantity"]').forEach(el => el.value = quantity)
    this.section.querySelector('.js-note').value = note
    this.section.querySelector('.js-fulfillment-count').value = fulfillmentCount
    this.section.querySelector('.js-sales-unit').value = quantity
  }
}

customElements.define('variant-quantity', VariantQuantity);

class VariantQuantities extends HTMLElement {
  constructor() {
    super();

  }
}

customElements.define('variant-quantities', VariantQuantities);

// document.addEventListener("DOMContentLoaded", function () {
//   var wrappers = document.querySelectorAll(".variant-quantity-wrapper");

//   wrappers.forEach(function (wrapper) {
//     wrapper.addEventListener("click", function () {
//       // Remove selected class from all wrappers
//       wrappers.forEach(function (w) {
//         w.classList.remove("selected");
//         var radio = w.querySelector('input[type="radio"]');
//         if (radio) {
//           radio.checked = false;
//         }
//       });

//       // Add selected class to the clicked wrapper
//       wrapper.classList.add("selected");

//       // Get the clicked wrapper's radio input
//       var clickedRadio = wrapper.querySelector('input[type="radio"]');

//       // Check the radio input within the clicked wrapper
//       if (clickedRadio) {
//         clickedRadio.checked = true;
//       }

//       // Get the selected value after checking the radio input
//       var selectedValue = clickedRadio.getAttribute("data-value");

//       // Assign the selected value to .quantity__input
//       var quantityInput = document.querySelector(".quantity__input");
//       if (quantityInput) {
//         quantityInput.value = selectedValue;
//       }

//       // Get the price inside the selected wrapper
//       var priceRegular = wrapper.querySelector(
//         ".variant-quantity-price-regular"
//       );
//       if (priceRegular) {
//         var price = priceRegular.innerText.trim();
//         // Append the price to the .price-item--regular
//         var priceItemRegular = document.querySelector(".price-item--regular");
//         if (priceItemRegular) {
//           priceItemRegular.innerText = price + " USD";
//         }
//       }
//     });
//   });
// });
