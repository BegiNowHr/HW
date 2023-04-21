const wrapper = document.querySelector(".wrapper")

const getData = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/json/data.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.addEventListener("load", () => {
            const data = JSON.parse(request.response);
            console.log(data);
            data.map((item) => {

                const image = document.createElement("img");
                image.classList.add("image");
                const card = document.createElement("div");
                card.classList.add("card");
                const price = document.createElement("p");
                price.classList.add("price");
                price.setAttribute("class" , "price" );
                const name = document.createElement("h2");
                name.classList.add("name");
                const description = document.createElement("p");
                description.classList.add("description");
                description.setAttribute("class","description")


                name.innerText = item.name;
                description.innerText = item.description;
                price.innerText = item.price;
                image.src = item.image;

                card.appendChild(image);
                card.appendChild(price);
                card.appendChild(name);
                card.appendChild(description);
                wrapper.appendChild(card);

            });
    });
};

getData();
