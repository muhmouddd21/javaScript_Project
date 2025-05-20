const shoppingBag = document.querySelector(".shopping-bag");
const cartPanel = document.querySelector(".cart-panel");
const cartOverlay = document.querySelector(".cart-overlay");
const backToShopping = document.querySelector(".back-to-shopping");
const searchButton = document.querySelector(".search-small");
const searchPanel = document.querySelector(".search-panel");
const closeCart = document.querySelector(".cart-panel .close-cart");
const closeSearch = document.querySelector(".search-panel .close-cart");




function openCart() {
    cartPanel.classList.add("open");
    cartOverlay.classList.add("show");
}

function closeCartPanel() {
    cartPanel.classList.remove("open");
    cartOverlay.classList.remove("show");
    searchPanel.classList.remove("open");
}

function openSearchCart() {
    searchPanel.classList.add("open");
    cartOverlay.classList.add("show");

}

shoppingBag.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartPanel);
closeSearch.addEventListener("click", closeCartPanel);
cartOverlay.addEventListener("click", closeCartPanel);
backToShopping.addEventListener("click", closeCartPanel);
searchButton.addEventListener("click", openSearchCart);
// =======================================================

const menSpan = document.getElementById("tab-men");
const womenSpan = document.getElementById("tab-women");
const toggleButt = document.getElementById("menu-toggle");
const toggleMenu = document.getElementById("menu");
const toggleCloseButt = document.getElementById("menu-close");

function selectMen() {  
    menSpan.classList.add("active");
    womenSpan.classList.remove("active");
    document.querySelector('.category-list-men').style.display = 'block';
    document.querySelector('.category-list-women').style.display = 'none';
}

function selectWomen() {
    womenSpan.classList.add("active");
    menSpan.classList.remove("active");
    document.querySelector('.category-list-men').style.display = 'none';
    document.querySelector('.category-list-women').style.display = 'block';
}

function openMenu(){
    toggleMenu.classList.add("open");
    cartOverlay.classList.add("show");
}

function closeMenu(){
    toggleMenu.classList.remove("open");
    cartOverlay.classList.remove("show");
}


menSpan.addEventListener("click", selectMen);
womenSpan.addEventListener("click", selectWomen);
toggleButt.addEventListener("click",openMenu);
toggleCloseButt.addEventListener("click",closeMenu);






 /**drop down  */
        // Toggle dropdowns on click
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // prevent navigating
    const content = this.nextElementSibling;
    content.classList.toggle('show');
  });
});

// Close if clicked outside
window.addEventListener('click', function (e) {
  document.querySelectorAll('.dropdown-content').forEach(menu => {
    if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});