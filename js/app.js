const btn = document.getElementById('random');
let content = document.getElementById('content');
const questions = data;

let keys = Object.keys(data[0]);


btn.addEventListener('click', () => {

    content.innerHTML = '';

    for (let step = 0; step < 3; step++) {
        let q1 = getRandomInt(keys.length);
        let question = keys[q1];
        let answer = data[0][keys[q1]];

        if (question === undefined) { content.innerHTML += '<div class="alert alert-danger">koniec pytań</div>'; break; }

        keys.splice(q1, 1);
        content.innerHTML += `
                <div class="card mb-2">
                <div class="card-header">Pytanie nr. ${step + 1} </div>
                <div class="card-body">  
                <h5 class="card-title">${question}</h5>
                <p class="card-text d-none" data-index="${step}">${answer.join("<br><br>")}</p>
                <button type="button" data-index="${step}" class="btn btn-primary answer">Pokaż/ Ukryj</button>
            </div>
            </div>
        `;



    }
    let btnAsw = document.querySelectorAll('button.answer');
    btnAsw.forEach((el) => {
        el.addEventListener('click', () => {
            let ind = el.dataset.index;
            document.querySelector('p[data-index="' + ind + '"]').classList.toggle('d-none');
        });
    });
});






function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
