let mostViewedResponse = fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et');

fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et')
    .then((response) => {
        return response.json();
        // handle the response
    })
    .then(function (jsonData) {
        console.log(jsonData);
    })
    .catch((error) => {
        return error;
        // handle the error
    });

let homePageResponse = fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et');

fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3Ne3OobjMQy6G75F9aOUiIOVNwGe50et')
    .then((response) => {
        return response.json();
        // handle the response
    })
    .then(function (jsonData) {
        console.log(jsonData);

        // Article cards
        let articleCard = '';
        let articleCardData = '';
        for (let i = 1; i < 4; i++) {
            articleCard = {
                image: document.querySelector(`#article_image_0${i}`),
                metadata: document.querySelector(`#article_metadata_0${i}`),
                title: document.querySelector(`#article_title_0${i}`),
                description: document.querySelector(`#article_description_0${i}`),
                date: document.querySelector('.date'),
                ref: document.querySelector(`#article_link_0${i}`),
            };
            articleCardData = {
                image: jsonData.results[i].multimedia[0].url,
                title: jsonData.results[i].title,
                description: jsonData.results[i].abstract,
                date: jsonData.results[i].updated_date.substring(5, 10),
                url: jsonData.results[i].url,
                byline: jsonData.results[i].byline,
                geo: jsonData.results[i].geo_facet,
                des: jsonData.results[i].des_facet,
            };
            // Image
            articleCard.image.src = articleCardData.image;
            articleCard.image.alt = articleCardData.title;
            // Title
            articleCard.title.innerHTML = `<h6>${articleCardData.title}</h6>`;
            // Description
            articleCard.description.innerHTML += `<p>${articleCardData.description}</p>`;
            // Date
            articleCard.date.innerHTML = `<p>${articleCardData.date}</p>`;
            // Metadata
            articleCard.metadata.innerHTML = `<p>${articleCardData.des[0]}</p>`;
            // Link
            let a = document.createElement('a'); // Create a <a> element
            a.href = articleCardData.url; // Set the href to the url
            a.innerHTML = 'Read more'; // Set the text content to the url
            a.id = `article_link_a_0${i}`; // Set the id to the url
            articleCard.ref.appendChild(a); // Append the <a> to the <p>
        }
    })
    .catch((error) => {
        return error;
        // handle the error
    });
