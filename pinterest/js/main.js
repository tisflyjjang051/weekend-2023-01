const itemList = document.querySelector(".itemList");

fetch("../data/typo.json")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const typoList = result.typoList;
    let tempHtml = "";
    typoList.forEach(function (item, idx) {
      tempHtml += `
    <li class="item ${item.category}">
      <a href="title">
        <div class="img">
          <img src="../images/${item.img}" alt="" />
        </div>
        <div class="info">
          <h2>${item.title}</h2>
          <p class="desc">${item.desc}</p>
          <p class="point">
            <span>${item.point}</span>
          </p>
        </div>
      </a>
    </li>
    `;
    });
    itemList.innerHTML = tempHtml;
  });

/*
$.ajax({
  url: "../data/typo.json",
  success: function (result) {
    const typoList = result.typoList;
    console.log(result);
    let tempHtml = "";
    typoList.forEach(function (item, idx) {
      tempHtml += `
        <li class="item ${item.category}">
          <a href="title">
            <div class="img">
              <img src="../images/${item.img}" alt="" />
            </div>
            <div class="info">
              <h2>${item.title}</h2>
              <p class="desc">${item.desc}</p>
              <p class="point">
                <span>${item.point}</span>
              </p>
            </div>
          </a>
        </li>
    `;
    });
    $(".itemList").html(tempHtml);
  },
});
*/

/*
// prettier-ignore
axios
.get("../data/typo.json")
.then(function (result) {
  console.log(result.data);
  const typoList = result.data.typoList;
  let tempHtml="";
  typoList.forEach(function(item,idx){
    tempHtml+=`
    <li class="item ${item.category}">
      <a href="title">
        <div class="img">
          <img src="../images/${item.img}" alt="" />
        </div>
        <div class="info">
          <h2>${item.title}</h2>
          <p class="desc">${item.desc}</p>
          <p class="point">
            <span>${item.point}</span>
          </p>
        </div>
      </a>
    </li>
    `
  })
  itemList.innerHTML = tempHtml;
});
*/
