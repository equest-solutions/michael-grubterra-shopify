function waitForElement(selector, callback, count = 1, countLimit = 30) {
  const checkWaitingElementInterval = setInterval(() => {
    if (document.querySelectorAll(selector).length >= count) {
      clearInterval(checkWaitingElementInterval);
      callback();
    } else {
      countLimit--;
    }

    if (!countLimit) {
      clearInterval(checkWaitingElementInterval);
      if (document.querySelectorAll(selector).length > 0) callback();
    }
  }, 1000);
}

class VariantQuantity extends HTMLElement {
  constructor() {
    super();

    this.radioInput = this.querySelector('.js-variant-quantity');
    this.section = this.closest('.shopify-section');
    this.handleSelection = this.handleSelection.bind(this); // Bind the handler
  }

  connectedCallback() {
    this.radioInput.addEventListener('input', this.handleSelection);

    if (+this.radioInput.dataset.quantity === 2) {
      waitForElement('.appstle_sub_widget', () => {
        this.radioInput.click();
      });
    }
  }

  disconnectedCallback() {
    this.radioInput.removeEventListener('input', this.handleSelection); // Pass handler reference
  }

  handleSelection(event) {
    const { quantity, price, note, fulfillmentCount } = event.target.dataset;

    const totalPrice = Number(quantity) * Number(price);

    this.section.querySelectorAll('.price-item--regular').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice)} USD`;
    });

    this.section.querySelectorAll('.appstle_one_time_price_wrapper .appstle_subscription_amount').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice)}`;
    });

    this.section.querySelectorAll('.appstle_subscription_amount_wrapper .appstle_subscription_compare_amount').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice)}`;
    });

    this.section.querySelectorAll('.appstle_subscription_amount_wrapper .appstle_subscription_amount').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice * 0.9)}`;
    });

    this.section.querySelectorAll('.appstle_select .transcy-money').forEach(el => {
      el.innerHTML = `${Shopify.formatMoney(totalPrice * 0.9)}`;
    });

    this.section.querySelectorAll('[name="id"]').forEach(el => el.value = event.target.value);
    this.section.querySelectorAll('[name="quantity"]').forEach(el => el.value = quantity);
    this.section.querySelector('.js-note').value = note;
    this.section.querySelector('.js-fulfillment-count').value = fulfillmentCount;
    this.section.querySelector('.js-sales-unit').value = quantity;
  }
}

customElements.define('variant-quantity', VariantQuantity);

class VariantQuantities extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('variant-quantities', VariantQuantities);