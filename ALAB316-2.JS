// Data for menu links
const menuLinks = [
    { text: "about", href: "/about" },
    {
        text: "catalog",
        href: "#",
        subLinks: [
            { text: "all", href: "/catalog/all" },
            { text: "top selling", href: "/catalog/top" },
            { text: "search", href: "/catalog/search" }
        ]
    },
    {
        text: "orders",
        href: "#",
        subLinks: [
            { text: "new", href: "/orders/new" },
            { text: "pending", href: "/orders/pending" },
            { text: "history", href: "/orders/history" }
        ]
    },
    {
        text: "account",
        href: "#",
        subLinks: [
            { text: "profile", href: "/account/profile" },
            { text: "sign out", href: "/account/signout" }
        ]
    }
];

// TO START
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

// Menu Bar 
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Menu Buttons
menuLinks.forEach(link => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
});

//Adding Interactivity
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("#top-menu a");

/// SubMenu 
function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = "";
    subLinks.forEach(link => {
        const a = document.createElement("a");
        a.setAttribute("href", link.href);
        a.textContent = link.text;
        subMenuEl.appendChild(a);
    });
}

topMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    const clickedLink = event.target;

    if (clickedLink.tagName !== "A") return;

    topMenuLinks.forEach(link => link.classList.remove("active"));
    clickedLink.classList.add("active");

    const clickedLinkData = menuLinks.find(link => link.text === clickedLink.textContent);

    if (clickedLinkData && clickedLinkData.subLinks) {
        subMenuEl.style.top = "100%";
        buildSubMenu(clickedLinkData.subLinks);
    } else {
        subMenuEl.style.top = "0";
    }
});

subMenuEl.addEventListener("click", function (event) {
    event.preventDefault();
    const clickedSubLink = event.target;

    if (clickedSubLink.tagName !== "A") return;

    subMenuEl.style.top = "0";
    topMenuLinks.forEach(link => link.classList.remove("active"));

    mainEl.innerHTML = `<h1>${clickedSubLink.textContent}</h1>`;
});
