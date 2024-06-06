var Top5MobileCompanies = {
  Top5OppoMobileModal: [{
      name: "Oppo Find N2 Flip",
      img: "path/to/image1.jpg"
    },
    {
      name: "Oppo Find X5 Pro",
      img: "path/to/image2.jpg"
    },
    {
      name: "Oppo Reno 10 5G",
      img: "path/to/image3.jpg"
    },
    {
      name: "Oppo Find X5",
      img: "path/to/image4.jpg"
    },
    {
      name: "Oppo Reno 8",
      img: "path/to/image5.jpg"
    },
  ],
  Top5SamsungMobileModal: [{
      name: "Samsung Galaxy S24",
      img: "path/to/image6.jpg"
    },
    {
      name: "Samsung Galaxy S24 Plus",
      img: "path/to/image7.jpg"
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      img: "path/to/image8.jpg"
    },
    {
      name: "Samsung Galaxy Z Fold 5",
      img: "path/to/image9.jpg"
    },
    {
      name: "Samsung Galaxy Z Flip 5",
      img: "path/to/image10.jpg"
    },
  ],
  Top5VivoMobileModal: [{
      name: "Vivo Y200 5G",
      img: "path/to/image11.jpg"
    },
    {
      name: "Vivo Y56",
      img: "path/to/image12.jpg"
    },
    {
      name: "Vivo V29e",
      img: "path/to/image13.jpg"
    },
    {
      name: "Vivo V25",
      img: "path/to/image14.jpg"
    },
    {
      name: "Vivo Y27",
      img: "path/to/image15.jpg"
    },
  ],
  Top5XiaomiMobileModal: [{
      name: "Xiaomi 14",
      img: "path/to/image16.jpg"
    },
    {
      name: "Xiaomi 13T Pro",
      img: "path/to/image17.jpg"
    },
    {
      name: "Xiaomi 13",
      img: "path/to/image18.jpg"
    },
    {
      name: "Xiaomi Black Shark 5 Pro",
      img: "path/to/image19.jpg"
    },
    {
      name: "Xiaomi Redmi Note 11 Pro 5G",
      img: "path/to/image20.jpg"
    },
  ],
  Top5AppleMobileModal: [{
      name: "iPhone 15 Pro Max",
      img: "path/to/image21.jpg"
    },
    {
      name: "iPhone 15 Pro",
      img: "path/to/image22.jpg"
    },
    {
      name: "iPhone 15",
      img: "path/to/image23.jpg"
    },
    {
      name: "iPhone 13",
      img: "path/to/image24.jpg"
    },
    {
      name: "iPhone 15 Plus",
      img: "path/to/image25.jpg"
    },
  ],
};

var companiedropdown = document.getElementById("companiedropdown");
var modaldropdown = document.getElementById("modaldropdown");
var cardsContainer = document.getElementById("cardsContainer");

companyDropdown.addEventListener("change", function () {
  var selectedCompany = companyDropdown.value;
  populateModels(selectedCompany);
  displayCards(selectedCompany);
});

modaldropdown.addEventListener("change", function () {
  var selectedCompany = companiedropdown.value;
  var selectedModel = modaldropdown.value;
  displayCards(selectedCompany, selectedModel);
});

function populateModels(company) {
  modaldropdown.innerHTML = '<option value="">Select a mobile model</option>';
  if (company && Top5MobileCompanies[company]) {
    Top5MobileCompanies[company].forEach((model) => {
      var option = document.createElement("option");
      option.value = modal.name;
      option.textContent = modal.name;
      modaldropdown.appendChild(option);
    });
  }
}

function displayCards(company, modal = "") {
  cardsContainer.innerHTML = "";
  if (company && Top5MobileCompanies[company]) {
    Top5MobileCompanies[company].forEach((item) => {
      if (!modal || modal === item.name) {
        var card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                  <img src="${item.img}" alt="${item.name}">
                  <h3>${item.name}</h3>
                  <p>Some description about ${item.name}</p>
              `;
        cardsContainer.appendChild(card);
      }
    });
  }
}

<

function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.product');
  let l = document.getElementsByTagName('h3');
  for (var i = 0; i <= l.length; i++) {
    let a = item[i].getElementsByTagName('h3')[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
};