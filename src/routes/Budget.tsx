import React, { useState } from "react";
import "../App.css";
import { textSpanIsEmpty } from "typescript";

 function Budget() {
  const [formNeg, setFormNeg] = useState<Boolean>(false);
  const [formPlus, setFormPlus] = useState<Boolean>(false);
  const [negBudget, setNegBudget] = useState<String>("");
  const [negCategories, setNegCategories] = useState<String>("");
  const [negInfo, setNegInfo] = useState<String>("");
  const [plusBudget, setPlusBudget] = useState<String>("");
  const [plusCategories, setPlusCategories] = useState<String>("");
  const [sum, setSum] = useState<number>(0);

  function showFormNeg() {
    setFormNeg(true);
    console.log(formNeg);
  }
  function showFormPlus() {
    setFormPlus(true);
  }

  function handleSubmitFormNeg(e: React.FormEvent) {
    e.preventDefault();
    setFormNeg(false);
    const inputNegBudget = document.getElementById("price") as HTMLInputElement;
    setNegBudget(inputNegBudget.value);

    const inputNegCategorie = document.getElementById(
      "categoriesNeg"
    ) as HTMLSelectElement;
    setNegCategories(inputNegCategorie?.value);

    const textareaNeg = document.getElementById("more") as HTMLTextAreaElement;
    setNegInfo(textareaNeg?.value);

    const sumNegBudget = sum - parseInt(inputNegBudget.value);
    console.log(sumNegBudget, "NEGBUDGET");
    setSum(sumNegBudget);
  }

  function handleSubmitFormPlus(e: React.FormEvent) {
    e.preventDefault();
    setFormPlus(false);
    const inputPlusBudget = document.getElementById(
      "amount"
    ) as HTMLInputElement;

    const inputPlusCategorie = document.getElementById(
      "categoriesPlus"
    ) as HTMLSelectElement;
    setPlusCategories(inputPlusCategorie?.value);

    const sumPlusBuget = sum + inputPlusBudget.value;
    console.log(sumPlusBuget, "BudgetPLIS!!");
    setSum(parseInt(sumPlusBuget));
  }

  const budgetFormPlus = formPlus ? (
    <form className="formPlus" onSubmit={handleSubmitFormPlus}>
      <label htmlFor="categoriesPlus">Add to your budget</label>
      <select id="categoriesPlus" name="categoriesPlus">
        <option value="startBudgte">Start Budget</option>
        <option value="job">Job</option>
        <option value="gift">Gift</option>
      </select>
      <label htmlFor="amount">Amount:</label>
      <input id="amount" name="amount" placeholder="$" type="number"></input>
      <button type="submit">Save</button>
    </form>
  ) : (
    <div></div>
  );

  const budgetFormNeg = formNeg ? (
    <form
      className="formNeg"
      onSubmit={handleSubmitFormNeg}
    >
      <label htmlFor="categoriesNeg">Choos a categorie</label>
      <select name="categoriesNeg" id="categoriesNeg">
        <option value="transports">Transports</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
        <option value="adventures">Adventures</option>
        <option value="accomodation">Accomodation</option>
      </select>
      <label htmlFor="price">Price:</label>
      <input id="price" name="price" placeholder="price" type="number"></input>
      <label htmlFor="more">more:</label>
      <textarea
        id="more"
        name="more"
        placeholder="souvenire for Mom"
      ></textarea>
      <button type="submit">Save</button>
    </form>
  ) : (
    <div></div>
  );
  return (
    <>
      <div className="budget">
        <h2>Check your Budget $</h2>
        <button onClick={showFormPlus}> + </button>
        <button onClick={showFormNeg}> - </button>
        {budgetFormNeg}
      {budgetFormPlus}
        <p>Total: {sum}</p>
      </div>
      
    </>
  );
};
export default Budget;
