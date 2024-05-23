const button = document.querySelectorAll('button');
const submitButton = document.getElementById('submitButton');
const ratingCard = document.getElementById('ratingCard');
const thankYouCard = document.getElementById('thankYouCard');
const ratingText = document.getElementById('ratingText');

let rating = null;

const handleRate = (rate) => {
    rating = rate;
}

const handleSubmit = () => {
    ratingCard.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
    ratingText.innerHTML = "You selected " + rating + " out of 5"
}

button.forEach(selectedBtn => {
    selectedBtn.addEventListener('click' , () => {
        button.forEach(unSelectedBtn => {
            unSelectedBtn.classList.remove('active');
            selectedBtn.setAttribute('aria-pressed' , 'falsse')
        })
        selectedBtn.classList.add('active');
        selectedBtn.setAttribute('aria-pressed' , 'true')
        submitButton.style.pointerEvents = "auto";
    });
});