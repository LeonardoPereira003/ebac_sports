    function parseNumberBR(value) {
        if (typeof value !== "string") return NaN
        return Number(value.replace(",", "."))
    }
    
    function calcular() {
        const alturaInput = document.getElementById("altura")
        const pesoInput = document.getElementById("peso")
        const resultado = document.getElementById("resultado")
    
        const altura = parseNumberBR(alturaInput.value)
        const peso = parseNumberBR(pesoInput.value)
    
        if (!altura || !peso || altura <= 0 || peso <= 0) {
        resultado.textContent = "Preencha altura e peso válidos."
        resultado.className = "muted"
        return
        }
    
        const imc = (peso / (altura * altura)).toFixed(2)
    
        let classificacao = ""
        if (imc < 18.5) classificacao = "Magreza"
        else if (imc < 25) classificacao = "Normal"
        else if (imc < 30) classificacao = "Sobrepeso"
        else if (imc < 35) classificacao = "Obesidade I"
        else if (imc < 40) classificacao = "Obesidade II"
        else classificacao = "Obesidade III"
    
        resultado.className = ""
        resultado.innerHTML = `
        <strong>IMC:</strong> ${imc}<br>
        <strong>Classificação:</strong> ${classificacao}
        `
    }
    
    function limpar() {
        document.getElementById("altura").value = ""
        document.getElementById("peso").value = ""
        document.getElementById("resultado").textContent = "Informe os dados acima."
        document.getElementById("resultado").className = "muted"
    }
    
