const itemList = document.querySelector(".itemList");
const filter = document.querySelector("#filter ul");
let iso = null;
fetch("../data/typo.json")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const typoList = result.typoList;
    let tempHtml = "";
    typoList.forEach(function (item, idx) {
      tempHtml += `
    <li class="item ${item.category}">
      <a href="../images/${item.img}" data-fancybox="${item.category}">
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
    imagesLoaded(itemList, function () {
      iso = new Isotope(itemList, {
        itemSelector: ".item",
        layoutMode: "masonry",
        getSortData: {
          point: ".point",
          title: ".title",
        },
        sortBy: ["point", "title"],
        sortAscending: false,
      });
    });
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

const cursor = document.querySelector(".cursor");
const cursorTxt = document.querySelector(".cursor .txt");

window.addEventListener("mousemove", function (e) {
  //console.log(e);

  //cursor.style.left = e.clientX + "px";
  //cursor.style.top = e.clientY + "px";
  gsap.to(cursor, { left: e.clientX, top: e.clientY });

  $("input[name='clientY']").val(e.clientY);
  $("input[name='pageY']").val(e.pageY);
  $("input[name='offsetY']").val(e.offsetY);
  $("input[name='screenY']").val(e.screenY);
});
// document.body.addEventListener("click", function (e) {
//   console.log(e.target);
// });

itemList.addEventListener("mouseenter", function (e) {
  //console.log(e.target);
  gsap.to(cursor, { width: 80, height: 80, backgroundColor: "#c92a2a", ease: "elastic", duration: 1 });
  cursorTxt.textContent = "VIEW";
});
itemList.addEventListener("mouseleave", function (e) {
  //console.log(e.target);
  gsap.to(cursor, { width: 10, height: 10, backgroundColor: "#ffffff", ease: "elastic", duration: 1 });
  cursorTxt.textContent = "";
});
filter.addEventListener("mouseenter", function (e) {
  //console.log(e.target);
  gsap.to(cursor, { width: 80, height: 80, backgroundColor: "#c92a2a", ease: "elastic", duration: 1 });
  cursorTxt.textContent = "CLICK";
});
filter.addEventListener("mouseleave", function (e) {
  //console.log(e.target);
  gsap.to(cursor, { width: 10, height: 10, backgroundColor: "#ffffff", ease: "elastic", duration: 1 });
  cursorTxt.textContent = "";
});

const items = filter.querySelectorAll("li");

filter.addEventListener("click", function (e) {
  const item = e.target;
  const filterWord = `.${item.dataset.filter}`;
  console.log(item.parentElement.children);
  // item.parentElement.children.forEach(function (item, idx) {
  //   console.log(item);
  // });
  // for (let i = 0; i < 4; i++) {
  //   console.log(item.parentElement.children[i]);
  // }
  items.forEach(function (item, idx) {
    item.classList.remove("on");
  });
  item.classList.add("on");
  console.log("🚀 ~ file: main.js:140 ~ filterWord", filterWord);
  iso.arrange({ filter: filterWord, sortBy: "point" });
  //iso.arrange();
});

// html login template
// frontend developer portfolio template
