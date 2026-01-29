// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const noListingsMsg = document.getElementById("no-listings");
    
    // --- 1. SUGGESTIONS BOX CREATE KARNA ---
    // Suggestions dikhane ke liye dropdown box select ya create karein
    let suggestionsBox = document.getElementById("suggestions-box");
    if (!suggestionsBox && searchInput) {
        suggestionsBox = document.createElement("div");
        suggestionsBox.id = "suggestions-box";
        suggestionsBox.className = "list-group";
        // Search input ke theek niche position set karna
        searchInput.parentNode.style.position = "relative";
        searchInput.parentNode.appendChild(suggestionsBox);
    }

    const filterListings = (event) => {
        if (event) event.preventDefault();
        let searchValue = searchInput.value.toLowerCase().trim();
        let items = document.querySelectorAll(".listing-item");
        let foundAny = false;

        if (searchValue === "") {
            items.forEach(item => item.style.display = "inline-block");
            if(noListingsMsg) noListingsMsg.style.display = "none";
            return;
        }

        items.forEach((item) => {
            let title = item.getAttribute("data-title") || "";
            let location = item.getAttribute("data-location") || "";
            let country = item.getAttribute("data-country") || "";
            
            if (title.includes(searchValue) || location.includes(searchValue) || country.includes(searchValue)) {
                item.style.display = "inline-block";
                foundAny = true;
            } else {
                item.style.display = "none";
            }
        });

        if (noListingsMsg) {
            noListingsMsg.style.display = foundAny ? "none" : "block";
        }
        
        // Search hone ke baad suggestions band kar dein
        if(suggestionsBox) suggestionsBox.style.display = "none";
    };

    // --- 2. SUGGESTIONS LOGIC ADD KARNA ---
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            let val = searchInput.value.toLowerCase().trim();
            suggestionsBox.innerHTML = "";
            
            if (val.length < 1) {
                suggestionsBox.style.display = "none";
                return;
            }

            // Page par maujood data se matches dhoondna
            let items = document.querySelectorAll(".listing-item");
            let matches = [];
            items.forEach(item => {
                let loc = item.getAttribute("data-location");
                let tit = item.getAttribute("data-title");
                if (loc.includes(val)) matches.push(loc);
                if (tit.includes(val)) matches.push(tit);
            });

            // Unique matches rakhna
            let uniqueMatches = [...new Set(matches)].slice(0, 5);

            if (uniqueMatches.length > 0) {
                suggestionsBox.style.display = "block";
                uniqueMatches.forEach(match => {
                    let div = document.createElement("div");
                    div.className = "list-group-item suggestion-item";
                    div.style.cursor = "pointer";
                    div.innerText = match;
                    div.onclick = () => {
                        searchInput.value = match;
                        suggestionsBox.style.display = "none";
                        filterListings(); // Selection ke baad auto-filter
                    };
                    suggestionsBox.appendChild(div);
                });
            } else {
                suggestionsBox.style.display = "none";
            }
        });
    }

    // Button click aur Enter key logic (Aapka purana logic)
    if(searchBtn) searchBtn.addEventListener("click", filterListings);
    if(searchInput) {
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") filterListings(e);
        });
    }

    // Bahar click karne par dropdown band karna
    document.addEventListener("click", (e) => {
        if (e.target !== searchInput) suggestionsBox.style.display = "none";
    });
});