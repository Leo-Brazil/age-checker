function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Precisa digitar na caixa do "Ano de Nascimento"')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebe-h.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-h.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-h.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-h.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        }
        res.innerHTML = `Detectado ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
