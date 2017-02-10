//I'm going to write a function that pulls the data that I need
//Data I need:
// -Image
// -Price
// -Store Name
// -Store Link
// -Item Name
// -Item Link

//Then I need to loop through that data and generate the HTML on the page

function pullData () {
  for (var i= 0; i < etsyData.results.length; i++){
    //console.log('hii');

  var image = etsyData.results[i].Images[0].url_170x135;
  var price = etsyData.results[i].price;
  var storeName = etsyData.results[i].Shop.shop_name;
  var storeURL = etsyData.results[i].Shop.url;
  var itemName = etsyData.results[i].title;
  var itemURL = etsyData.results[i].url;

  var HTMLresult =
      `
      <a href="${itemURL}">
        <div class="each-result">
          <img src="${image}"/>
      </a>
          <div class="item-name">
          <a class ="item-url" href="${itemURL}"> ${itemName} </a>
          </div>

          <div class ="shop-name-price">
          <span class ="shop-name">
          <a class ="shop-name-url" href="${storeURL}">${storeName}</a>
          </span>
          <span class ="price">$${price}</span>
          </div>
        </div>

      `;

      $(".search-results").append(HTMLresult);
 }
}
pullData();
