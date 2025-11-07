import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("kullanıcı ana sayfadadır", () => {
  cy.visit("/");
});

When("sayfa yüklendiğinde", () => {
  // Sayfa zaten yüklendi
});

Then(/"(.*)" başlığını görmeliyim/, (title) => {
  cy.get("h1").should("contain", title);
});

Then("vardiya listesini görmeliyim", () => {
  cy.get("[data-testid='shift-list']").should("be.visible");
});