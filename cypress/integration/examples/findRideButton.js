describe('My First Test Suite', function () {
  it('My First Test Case', function () {
    cy.visit('https://website.staging.mydaytrip.net/');
    cy.get('[data-cy="findRideButton"]').then(($button) => {
      if ($button.is(':visible')) {
      }
    });
  });
});
