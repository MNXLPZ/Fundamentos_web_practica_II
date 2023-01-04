const NUM_RESULTS = 5;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/morepost?from=${from}&to=${to}`);

    const newProducts = await response.text();
  
    const itemsDiv = document.getElementById("item_menu");

    itemsDiv.innerHTML += newProducts;

    loadMoreRequests++;
}