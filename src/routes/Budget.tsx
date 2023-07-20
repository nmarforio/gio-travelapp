import React, { useState } from "react";
import "../App.css";
import { textSpanIsEmpty } from "typescript";

const Budget: React.FC<{}> = () => {
  const [formNeg, setFormNeg] = useState<Boolean>(false);
  const [formPlus, setFormPlus] = useState<Boolean>(false);
  const [negBudget, setNegBudget] = useState<string>("");
  const [negCategories, setNegCategories] = useState<String>("");
  const [negInfo, setNegInfo] = useState<String>("");
  const [plusBudget, setPlusBudget] = useState<Number>(0);
  const [plusCategories, setPlusCategories] = useState<String>("");
  const [sum, setSum] = useState<Number>(0);

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
    setNegBudget(inputNegBudget?.value);

    const inputNegCategorie = document.getElementById(
      "categoreisNeg"
    ) as HTMLSelectElement
    

    const textareaNeg = document.getElementById("more") as HTMLTextAreaElement;
    setNegInfo(textareaNeg?.value);

    // const sumNegBudget = (sum - inputNegBudget)
    // setSum(sumNegBudget)
  }
  console.log("NEG FORM DATA", negBudget, negCategories, negInfo);

  function handleSubmitFormPlus(e: React.FormEvent) {
    // e.preventDefault();
    // setFormPlus(false);
    // const inputPlusBudget = e.currentTarget.amount.value;
    // const inputPlusCategorie = e.currentTarget.categoriesPlus.value;
    // setPlusBudget(inputPlusBudget)
    // setPlusCategories(inputPlusCategorie)
    // const sumPlusBudget = (sum + inputPlusBudget)
    // setSum(sumPlusBudget)
  }
  console.log(sum);

  const budgetFormPlus = formPlus ? (
    <form name="formPlus" onSubmit={handleSubmitFormPlus}>
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
    <form onSubmit={handleSubmitFormNeg} name="formNeg">
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
      <div>
        <button onClick={showFormPlus}> + </button>
        <button onClick={showFormNeg}> - </button>
        {/* <p>Total: {sum}</p> */}
      </div>
      {budgetFormNeg}
      {budgetFormPlus}
    </>
  );
};
export default Budget;
