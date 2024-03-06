document.addEventListener('DOMContentLoaded', function() {
    const memeForm = document.getElementById('meme-form');
    const memeList = document.querySelector('.meme-list');

    memeForm.addEventListener('submit', function(e) {
        // prevent default behavior of form submission
        e.preventDefault();

        // get input values
        const urlInput = document.getElementById('image-url').value;
        const topTextValue = document.getElementById('top-text').value;
        const bottomTextValue = document.getElementById('bottom-text').value;

        // check if url is valid
        if (!urlInput.trim()) {
            alert('Invalid URL!');
            return;
        }

        // create meme element
        const li = createMemeElement(urlInput, topTextValue, bottomTextValue);

        // append meme element to meme list
        memeList.appendChild(li);

        // reset form
        memeForm.reset();
    });

    // function for creating meme element
    function createMemeElement(url, topText, bottomText) {
        //create li element
        const li = document.createElement('li');
        li.classList.add('meme-img');

        //create img element
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Meme Image';

        //create text div
        const topTextDiv = createTextElement(topText, ['text', 'top']);
        const bottomTextDiv = createTextElement(bottomText, ['text', 'bottom']);

        //create remove div
        const removeDiv = document.createElement('div');
        removeDiv.classList.add('remove');
        removeDiv.innerHTML = 'X';
        // removeDiv.style.color = 'red';

        //append all elements to li
        li.appendChild(img);
        li.appendChild(topTextDiv);
        li.appendChild(bottomTextDiv);
        li.appendChild(removeDiv);

        return li;
    }

    // function for creating text element
    function createTextElement(text, classNames) {
        const textDiv = document.createElement('div');
        textDiv.innerText = text;
        classNames.forEach(className => textDiv.classList.add(className));
        return textDiv;
    }

    // function for removing meme
    function removeMeme(e) {
        const confirmation = confirm('Would you want to remove this meme?');
        if (confirmation) {
            e.target.parentElement.remove();
        }
    }

    // event delegation for removing meme
    memeList.addEventListener('click', removeMeme);    
});
