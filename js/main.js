// css style for equal div

(function () {
  var one = document.querySelector(".imgDiv");
  var two = document.querySelector(".mileStones");
  two.style.height = one.offsetHeight + "px";
})();

//Start dyinamic data
const milestonesData = JSON.parse(data).data;
console.log(milestonesData);

// Data onLoad function
function mileStoneLoad() {
  const mileStones = document.querySelector(".mileStone");
  mileStones.innerHTML = `${milestonesData
    .map(function (mileStone) {
      return `<div class="mileStone" id="${mileStone._id}">
    <input class="check" type="checkbox" name="check" id="check" onclick="markItem(this, ${
      mileStone._id
    })">
    <p class="mileName" onclick="showFunction(this, ${mileStone._id})">${
        mileStone.name
      }
        <span><i class="fa-solid fa-chevron-down"></i></span>
    </p>
    <div class="hiddenDiv">
    ${mileStone.modules
      .map(function (modul) {
        return `
                    <p class="innerMileName">${modul.name}</p>`;
      })
      .join("")}
      </div>
</div>`;
    })
    .join("")}`;
}
function showFunction(id, ids) {
  const open = id.nextElementSibling;
  const shows = document.querySelector(".show");
  if (!open.classList.contains("show") && shows) shows.classList.remove("show");
  open.classList.toggle("show");

  const active = id;
  const activeList = document.querySelector(".active");
  if (!active.classList.contains("active") && activeList)
    activeList.classList.remove("active");
  active.classList.toggle("active");

  imageDiv(ids);
}

function imageDiv(id) {
  const images = document.querySelector(".mileStoneImg");
  const name = document.querySelector(".name");
  const details = document.querySelector(".details");

  images.style.opacity = "0";
  images.src = milestonesData[id].image;
  name.innerHTML = milestonesData[id].name;
  details.innerHTML = milestonesData[id].description;
}

const images = document.querySelector(".mileStoneImg");
images.addEventListener('load', function(){
  this.style.opacity = '1';
});

function markItem (checkbox, id){
  const complete = document.querySelector(".comMilestone");
  const inComplete = document.querySelector(".mileStone");
  const items = document.getElementById(id);

  if(checkbox.checked){
    inComplete.removeChild(items);
    complete.appendChild(items);
  }
  else{
    inComplete.appendChild(items);
    complete.removeChild(items);
  }
  
}


mileStoneLoad();


