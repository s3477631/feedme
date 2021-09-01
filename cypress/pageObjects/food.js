import FoodHeader from "./foodHeader";

class Food {
  header = new FoodHeader();

  parentMenu(parentMenuItem) {
      return this.header.getParentButton(parentMenuItem);
  }
  addOrderModal() {
      return this.header.addOrderModalButton()
  }
  foodDetailMenu() {
      return this.header.foodDetail()
  }

  addOrder() {
      return this.header.addOrder()
  }
  orderPageName() {
      return this.header.orderItemName()
  }

}

export default Food;
