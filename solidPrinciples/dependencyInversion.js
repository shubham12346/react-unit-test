class Store {
  constructor(user) {
    // this.stripe = new Stripe(user);
    this.payPal = new PayPal();
    this.user = user;
  }
  purchaseBike(quantity) {
    //this.stripe.makePayment(200 * quantity * 100);
    this.payPal.makePayment(this.user, quantity * 20);
  }
  purchaseHelmet(quantity) {
    // this.stripe.makePayment(15 * quantity * 100);
    this.payPal.makePayment(this.user, quantity * 1);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInRupees) {
    console.log(
      `${this.user} made a payment of Rupess ${amountInRupees}$ with Stripe`
    );
  }
}

class PayPal {
  makePayment(user, amountInDollar) {
    console.log(`${user} made a payment of ${amountInDollar}$ with Paypal`);
  }
}

const store = new Store("John");
// store.purchaseBike(2);
// store.purchaseHelmet(3);
store.purchaseBike(1);
store.purchaseHelmet(2);
