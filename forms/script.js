function calculateCategoryTotals() {
  const totals = {};
  for (const [category, items] of Object.entries(categories)) {
    totals[category] = items.reduce(
      (sum, item) => sum + (resources[item]?.count || 0),
      0
    );
  }
  return totals;
}

function renderCategoryTotals() {
  const categoryTotals = calculateCategoryTotals();
  const resourceList = document.getElementById("resource-list");
  resourceList.innerHTML = "";

  for (const [category, total] of Object.entries(categoryTotals)) {
    const unit = units[category] || "";
    const li = document.createElement("li");
    li.innerHTML = `${
      category.charAt(0).toUpperCase() + category.slice(1)
    }: <span id="${category}-count">${total} ${unit}</span>`;
    resourceList.appendChild(li);
  }
}

function updateResourceCounts() {
  for (const [key, resource] of Object.entries(resources)) {
    resource.count += resource.rate;
  }
  renderCategoryTotals();
}

setInterval(updateResourceCounts, 1000);

function autocomplete(input, data) {
  let currentFocus;
  input.addEventListener("input", function () {
    updateAutocompleteList(this.value);
  });
  input.addEventListener("focus", function () {
    updateAutocompleteList("");
  });
  input.addEventListener("keydown", function (e) {
    let items = document.getElementById(this.id + "-autocomplete-list");
    if (items) items = items.getElementsByTagName("div");
    if (e.keyCode === 40) {
      currentFocus++;
      addActive(items);
    } else if (e.keyCode === 38) {
      currentFocus--;
      addActive(items);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (currentFocus > -1) items[currentFocus].click();
    }
  });

  function updateAutocompleteList(val) {
    let list, item;
    closeAllLists();
    currentFocus = -1;
    list = document.createElement("div");
    list.setAttribute("id", input.id + "-autocomplete-list");
    list.setAttribute("class", "autocomplete-items");
    input.parentNode.appendChild(list);
    data.forEach((entry) => {
      const resource = resources[entry];
      const displayName = resource.displayName || entry;
      if (displayName.toUpperCase().startsWith(val.toUpperCase())) {
        item = document.createElement("div");
        item.innerHTML =
          "<strong>" + displayName.substr(0, val.length) + "</strong>";
        item.innerHTML += displayName.substr(val.length);
        item.innerHTML += "<input type='hidden' value='" + entry + "'>";
        item.addEventListener("click", function () {
          input.value = displayName;
          closeAllLists();
          updateResourceSelection(entry);
        });
        list.appendChild(item);
      }
    });
  }

  function addActive(items) {
    if (!items) return false;
    removeActive(items);
    if (currentFocus >= items.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = items.length - 1;
    items[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(items) {
    for (let i = 0; i < items.length; i++)
      items[i].classList.remove("autocomplete-active");
  }

  function closeAllLists(elmnt) {
    const items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
      if (elmnt !== items[i] && elmnt !== input)
        items[i].parentNode.removeChild(items[i]);
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

function updateResourceSelection(resource) {
  const category = Object.keys(categories).find((cat) =>
    categories[cat].includes(resource)
  );
  if (category) {
    const maxAmount = resources[resource].maxRequest;
    const amountInput = document.getElementById("amount");
    amountInput.max = maxAmount;
    document.getElementById("unit-adornment").textContent =
      units[category] || "";

    amountInput.addEventListener("input", function () {
      if (parseInt(amountInput.value) > maxAmount) {
        amountInput.value = maxAmount;
      }
    });

    const maxRequestDisplay = document.getElementById("max-request-display");
    maxRequestDisplay.textContent = `Max: ${maxAmount} ${units[category]}`;
  }
}

autocomplete(document.getElementById("autocomplete"), Object.keys(resources));
renderCategoryTotals();
