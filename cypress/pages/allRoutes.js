class allRoutes {
  originText = '[data-cy="fromOrigin"]';
  originSelect = '[data-key="4cf0e7a4-8443-40c9-bbf3-bfe253a3c631"]';
  destinationText = '[data-cy="toDestination"]';
  destinationSelect = '[data-key="96a5d6f3-4951-4b5a-8243-6a5ded94bd47"]';

  visit() {
    cy.visit('/all-routes');
  }
  from(origin) {
    cy.get(this.originText).click().type(origin);
  }
  selectFrom() {
    cy.get(this.originSelect).click();
  }
  to(destination) {
    cy.get(this.destinationText).click().type(destination);
  }
  selectTo() {
    cy.get(this.destinationSelect).click();
  }
  check() {
    cy.get(this.originText).should('not.be.empty');
    cy.get(this.destinationText).should('not.be.empty');
  }
}

export default allRoutes;
