import { Selector } from "testcafe";

fixture("Weeknumber.com tests")
    .page("https://test.boulund.net/todo/");

test("Adding items", async t => {
    await t
        // Arrange + Act
        .typeText(Selector("#todo-input"), "Water flowers")
        .click(Selector(".todo-form input[type='button']"))
        .typeText(Selector("#todo-input"), "Buy milk")
        .click(Selector(".todo-form input[type='button']"))
        // Assert
        .expect(Selector("#todo-list").childElementCount).eql(2);
});

test("Removing items", async t => {
    await t
        // Arrange
        .typeText(Selector("#todo-input"), "Water flowers")
        .click(Selector(".todo-form input[type='button']"))
        // Act
        .click(Selector(".todo-item:first-of-type button"))
        // Assert
        .expect(Selector("#todo-list").childElementCount).eql(0);
});