"use strict"
const getData = async (para) => {
  const response = await fetch(para);
  const data = await response.json();
  return data;
};

getData("https://fakerapi.it/api/v1/companies?_quantity=100")
  .then((data) => generateTable(data.data))
  .catch((err) => err);

  const generateTable = function(infos){
    const grid= document.querySelector('.lists');
    for(const {id,name,email,vat,phone,website} of infos){
        const htmlTemplate = `
        <div class="companies">
        <div class="id">ID:${id}</div>
        <div class="name">Name: ${name}</div>
        <div class="mail">E-mail:${email}</div>
        <div class="vat">Vat: ${vat}</div>
        <div class="phone">Phone: ${phone}</div>
        <div class="website">Website: ${website}</div>
    </div>`
    
    grid.innerHTML+= htmlTemplate
    }
  }