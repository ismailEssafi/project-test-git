let card={Title : "ELzero", Description : "Elzero web school",Date : "25/10"} ;


let cardTemplate=`
<div class="card">
    <h3>${card.Title}</h3>
    <p>${card.Description}</p>
    <span>${card.Date}</span>
</div>
` ;

for(i=0;i<4;i++){
    console.log(cardTemplate);
    document.write(cardTemplate);
}