export class whatsNewPage {
  webLocators = {
    shopNewYogaButton: ".more.button",
    whatsNewTopTitleText: "span.base", // className = [class="base"]
  };

  clickWhatsNew() {
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/what-is-new.html"]'
    ).click();
  }

  // checking whats new page -> New Luma Yoga Collection links

  // newLumaYogaCollectionLink() {
  //   cy.get(
  //     'a[href="https://magento.softwaretestingboard.com/collections/yoga-new.html"]'
  //   )
  //     .click()
  //     .should("contain", "New Luma Yoga Collection");
  // }

  shopNewYogaButton() {
    cy.get(this.webLocators.shopNewYogaButton)
      .click()
      .should("contain", "Shop New Yoga");
  }

  message() {
    return cy.get(this.webLocators.whatsNewTopTitleText);

    //   .invoke("text")
    //   .then((text1) => {
    //     expect(text1).to.eq("New Luma Yoga Collection");
    //   });
  }

  selectCartNewLumaYogaCollection() {
    cy.get("li[class ='item product product-item']").eq(0).click();
    cy.get("span.base").should("contain", "Echo Fit Compression Short");
  }

  // checkGridItems() {
  //   cy.get("strong.modes-mode.active.mode-grid").first().click();
  //   cy.get('[title="Grid"]').should("have.class");
  // }

  // Checking dropdown in whats new linked page

  checkSortByDropDown() {
    cy.get("#sorter").should("be.visible");
    cy.get(".sorter-options option:selected")
      .first()
      .should("contain", "Position");
    cy.get(".sorter-options").first().select("name");
    cy.get(".sorter-options").should("contain", "Product Name");
    cy.get(".sorter-options").first().select("price");
    cy.get(".sorter-options").should("contain", "Price");
  }
}
