(function () {

    let btn = document.querySelector('#submit');
    btn.addEventListener("click", function () {
        let noms = document.querySelector('#noms').value
        let genre = document.querySelector('#genre').value
        let lieu = document.querySelector('#lieu').value
        let datenaissance = document.querySelector('#datenaissance').value
        let adresse = document.querySelector('#adresse').value

        let form = new FormData()
        form.append('noms', noms)
        form.append('genre', genre)
        form.append('lieu', lieu)
        form.append('datenaissance', datenaissance)
        form.append('adresse', adresse)

        axios.post("https://apilabo2groupe1.000webhostapp.com/etudiant/enregistrer/?user=tplabo&mdp=12345", form).then((data) => {
            console.log(data);
            let inputs = document.querySelectorAll("input")
            inputs.forEach((index) => {
                index.value = "";
            })
        })
    })
})()
