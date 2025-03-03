describe("Page d'accueil", () => {
    it("Doit afficher le titre", () => {
        cy.visit("/");
        cy.get("h1").should("contain", "Titre de la page");
        cy.contains("Titre de la page").should("be.visible")
    }
    )
})