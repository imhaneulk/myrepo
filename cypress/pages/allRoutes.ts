export class allRoutes {
  originBox = '[data-cy="fromOrigin"]';
  destinationBox = '[data-cy="toDestination"]';
  selectList = '[data-cy="routeListOption"]';

  visit() {
    cy.visit('/all-routes');
  }
  selectFrom(origin) {
    cy.get(this.originBox).click().type(origin, { delay: 200 }).wait(300);
    cy.get(this.selectList).first().click();
  }
  selectTo(destination) {
    cy.get(this.destinationBox).click().type(destination, { delay: 300 });
    cy.get(this.selectList).first().click();
  }
  checkEmpty() {
    cy.get(this.originBox).should('not.be.empty');
    cy.get(this.destinationBox).should('not.be.empty');
  }
  checkValue(origin, destination) {
    cy.get(this.originBox).within(() =>
      cy.get('input').should('have.value', origin)
    );
    cy.get(this.destinationBox).within(() =>
      cy.get('input').should('have.value', destination)
    );
  }
}

export default allRoutes;
