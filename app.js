const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const userInput = form.elements.query.value;
    const config = { params: { q: userInput } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for(let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

//added the reset button for quick clearing the results
const resetButton = document.querySelector('#reset');
const clearImages = function() {
    const imgs = document.querySelectorAll('img');
    for(let img of imgs) {
        img.remove();
    }
}
resetButton.addEventListener('click', clearImages);