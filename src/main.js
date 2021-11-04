const navbarCollection = document.querySelector(".navbar__collection");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", (e) => {
    hamburgerMenu.classList.toggle("open__nav");
    navbarCollection.classList.toggle("open__nav");
});

// price card data
const features = [
    "Attestation Charges",
    "Registered Agent",
    "Registered Office",
    "Varal Administrative",
    "Preparing Statutory File",
    "Liasing with Registration Authorities",
    "Due Diligence Appraisal",
    "Keeping The Register",
    "Seal Charges",
    "Certificate of Good Standing",
];

const PricingData = [
    {
        name: "AJMAN OFFSHORE",
        plan: "pricing__basic",
        price: "2,997",
        company: "Ajman Offshore New Company formation includes",
    },
    {
        name: "RAK ICC",
        plan: "pricing__standard",
        price: "2,997",
        company: "Rak Icc New Company formation includes",
    },
    {
        name: "SHARJAH MEDIA",
        price: "4,124",
        plan: "pricing__pro",
        company: "Sharjah Media New Company formation includes",
    },
];

const pricing = document.querySelector(".plans__pricing");

// appending all pricing cards in section 5 pricing section in the class "plans__pricing" element
PricingData.forEach((data, index) => {
    const article = document.createElement("article");
    const heading = document.createElement("h1");
    const priceSection = document.createElement("div");
    const price = document.createElement("h1");
    const priceInfo = document.createElement("p");
    const pricingSubheading = document.createElement("p");

    article.className = data.plan;
    article.classList.add("price");
    article.id = index + 1;

    heading.className = "pricing__heading";
    heading.innerText = data.name;
    article.append(heading);

    priceSection.className = "pricing__price";
    price.innerText = `$${data.price}`;
    priceSection.append(price);

    priceInfo.innerText = `One Time Payment`;
    priceSection.append(priceInfo);

    article.append(priceSection);

    pricingSubheading.className = "pricing__subheading";
    pricingSubheading.innerText = data.company;
    article.append(pricingSubheading);

    features.forEach((feature) => {
        const pricingFeatures = document.createElement("div");
        const image = document.createElement("img");
        const div = document.createElement("div");
        pricingFeatures.className = "pricing__features";
        image.src = "./assets/Group35.png";
        image.alt = feature;
        pricingFeatures.append(image);
        div.innerText = feature;
        pricingFeatures.append(div);
        article.append(pricingFeatures);
    });
    const choose = document.createElement("div");
    choose.className = "choose";
    const button = document.createElement("button");
    button.innerText = "Continue";
    choose.append(button);
    article.append(choose);
    pricing.append(article);
});

const plansPricingBox = document.querySelector(".plans__pricing");
const singlePriceBox = document.querySelector(".price");
const ideal = document.querySelector(".ideal");

PricingData.forEach((data, index) => {
    const button = document.createElement("button");
    button.className = "slider";
    button.id = index + 1;
    ideal.append(button);
});

let singlePriceBoxWidth = singlePriceBox.offsetWidth;
let idealBoxWidth = ideal.offsetWidth;
let isMobile = false;
const sliders = document.querySelectorAll(".slider");
const priceboxes = document.querySelectorAll(".price");

// resize handler for hamburgerMenu and slider
window.addEventListener("resize", (e) => {
    if (window.innerWidth <= 700) {
        isMobile = true;
        Array.from(sliders).forEach((slider) => {
            slider.style.display = "block";
        });
    } else {
        isMobile = false;
        Array.from(sliders).forEach((slider) => {
            slider.style.display = "none";
        });
    }

    Array.from(priceboxes).forEach((box) => {
        box.classList.remove("focus");
    });
    Array.from(sliders).forEach((box) => {
        box.classList.remove("focus");
    });
    singlePriceBoxWidth = singlePriceBox.offsetWidth;
    idealBoxWidth = ideal.offsetWidth;
    hamburgerMenu.classList.remove("open__nav");
    navbarCollection.classList.remove("open__nav");
    plansPricingBox.style.transform = `translateX(0px)`;
    Array.from(priceboxes)[1].classList.add("focus");
    Array.from(sliders)[1].classList.add("focus");
});

// focus state for slider dot and price card for initial render
Array.from(priceboxes)[1].classList.add("focus");
Array.from(sliders)[1].classList.add("focus");

//looping through boxes and adding click event listener for each price card to focus on click
Array.from(priceboxes).forEach((box) => {
    box.addEventListener("click", (e) => {
        Array.from(priceboxes).forEach((box) => {
            box.classList.remove("focus");
        });
        Array.from(sliders).forEach((slider) => {
            slider.classList.remove("focus");
        });
        Array.from(priceboxes)[e.target.id - 1].classList.add("focus");
        Array.from(sliders)[e.target.id - 1].classList.add("focus");
        if (window.innerWidth < 900) {
            if (e.target.id == 1) {
                const movingWidth = 200;
                plansPricingBox.style.transform = `translateX(${movingWidth}px)`;
            }
            if (e.target.id == 2) {
                const movingWidth = 0;
                plansPricingBox.style.transform = `translateX(-${movingWidth}px)`;
            }
            if (e.target.id == 3) {
                const movingWidth = 200;
                plansPricingBox.style.transform = `translateX(-${movingWidth}px)`;
            }
        }
    });
});

//looping through sliders and adding click event listener for each sliderdots to focus on click
Array.from(sliders).forEach((slider) => {
    slider.addEventListener("click", (e) => {
        sliders.forEach((eachSlider) => {
            eachSlider.classList.remove("focus");
        });
        Array.from(priceboxes).forEach((box) => {
            box.classList.remove("focus");
        });
        Array.from(priceboxes)[e.target.id - 1].classList.add("focus");
        if (window.innerWidth < 900) {
            if (e.target.id == 1) {
                const movingWidth = 200;
                plansPricingBox.style.transform = `translateX(${movingWidth}px)`;
            }
            if (e.target.id == 2) {
                const movingWidth = 0;
                plansPricingBox.style.transform = `translateX(-${movingWidth}px)`;
            }
            if (e.target.id == 3) {
                const movingWidth = 200;
                plansPricingBox.style.transform = `translateX(-${movingWidth}px)`;
            }
        }
        e.target.classList.add("focus");
    });
});
