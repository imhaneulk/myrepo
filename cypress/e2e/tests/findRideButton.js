describe('Find Ride Button', function () {
  it('Find Ride Button', function () {
    cy.visit('');
    cy.get('[data-cy="findRideButton"]').should('be.visible');
  });
});
