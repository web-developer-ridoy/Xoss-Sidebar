
const sidebar = document.querySelector('.sidebar');
const nav = document.querySelectorAll('.nav-item');
const toggles = document.querySelector('.toggle');


toggles.addEventListener('click', () => {
    if(sidebar.className === 'sidebar'){
        sidebar.classList.toggle('open');
    }else{
        sidebar.classList.remove('open');
    }
});


nav.forEach((data) =>{
    data.addEventListener('click', () => {
        nav.forEach((data) => {
            data.classList.remove('active');
        });



        data.classList.add('active');

    });
});