let form = document.querySelector('.form')

let wordInput = document.querySelector('.wordInput')

let searchButton = document.querySelector('.searchButton')

function handleSubmit(event) {
    event.preventDefault();
    let Value = wordInput.value
    console.log(Value)
    //function call
    food(Value)

}

form.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSubmit);

   
  


//food(Value)- Value used to fetch API so here using food(Value)
async function food(Value) {
  app_id='c46fea64';
  app_key = ' 26a0abd9ee854b9263be3015ec5872ec';
  baseURl = `https://api.edamam.com/search?q=${Value}&app_id=${app_id}&app_key=${app_key}`;
  
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
     display(datas.hits);
}


function display(results) {

  results.map(result => {

    // col-3 - column split 12 int0 3 3 3 3 , text-truncate =word sring into next line when width reaches low
    //my -margin top and bottom
    document.querySelector('#showRecipe').innerHTML  += `
   
      <div class="col-3 my-3">
      <div class="card">
          <div class="card-body">
              <img src="${result.recipe.image}" alt="" class='img-fluid'>
              <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
              <div class="d- flex justify-content-between align-items-center">
                  <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                  <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
              </div>
          </div>
      </div>
  </div> 
      `
    
  })
}


