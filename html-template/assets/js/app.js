const favBtnUnchecked = document.querySelectorAll('.fav-btn-unchecked');
const favBtnChecked = document.querySelectorAll('.fav-btn-checked');
const favBtns = document.querySelectorAll('.fav-btn');





// Fav Btn Functionality

[...favBtns].forEach(btn => {

    btn.onclick = e => {

        let id = e.target.dataset.id;
        let selectedBtns;

        e.target.classList.toggle('hide');

        selectedBtns = (e.target.classList.contains('fav-btn-unchecked')) ? favBtnChecked : favBtnUnchecked;

        let clickedBtn = [...selectedBtns].find( btn => btn.dataset.id === id);
        clickedBtn.classList.toggle('hide');
    }
})