class FoodHeader {
    getParentButton(parentMenuItem) {
      return cy.get(`[data-cy=parent-item-name-${parentMenuItem}]`)
    }
    addOrderModalButton() {
      return cy.get('[data-cy=add-to-order-modal]')
    }
    addOrder() {
      return cy.get('[data-cy=add-order-button]')
    }
    foodDetail() {
      return cy.get('[data-cy=food-detail-menu]')
    }
    orderItemName() {
      return cy.get('[data-cy=order-name-size]')
    }
}

export default FoodHeader;
