// system for an E-Commerce website

class system {
  constructor(productName, Price, Category) {
    this.name = productName;
    this.price = Price;
    this.category = Category;
  }
  calculateDiscount() {
    if (this.price <= 1500) {
      console.log("No Discount:");
    } else if (this.price > 1500 && this.price <= 3000) {
      let discount = this.price * (15 / 100);
      let finalDiscount = this.price - discount;
      console.log(`Your Discount is  ${finalDiscount}`);
    } else if (this.price > 3000 && this.price <= 5000) {
      let discount = this.price * (20 / 100);
      let finalDiscount = this.price - discount;
      console.log(`Your Discount is  ${finalDiscount}`);
    } else {
      let discount = this.price * (25 / 100);
      let finalDiscount = this.price - discount;
      console.log(`Your Final Price  is : ${finalDiscount}`);
    }
  }
  finalList() {
    console.log(
      `Your Product is : ${this.name}
      Your price is : ${this.price} 
      Your Category is : ${this.category}`,
    );
  }
}
