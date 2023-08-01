
const numberValue = () => {
//função para pegar o valor do input e passar para o card 

    const valorInput1 = document.getElementById("cartaoCredito").value

    const resultado = document.getElementById("result")
    
    resultado.textContent = valorInput1


// abaixo é o codigo para verificação de erro
        
    const valorInput = document.getElementById("cartaoCredito")
    const numeroCartao = valorInput.value.replace(/\s/g, '');
    if (numeroCartao.length < 16) {
        const mensagemErroElemento = document.getElementById('mensagemErro');
        mensagemErroElemento.textContent = 'O número do cartão precisa ter 16 dígitos';
        mensagemErroElemento.style.display = 'block';
} else if (numeroCartao.length == 16) {
        const mensagemErroElemento = document.getElementById('mensagemErro');
        mensagemErroElemento.textContent = '';
        mensagemErroElemento.style.display = 'block';
    }


}


// função para dar espaço nos valores digitados 

const cartaoCreditoInput = document.getElementById('cartaoCredito');

cartaoCreditoInput.addEventListener('input', formatarNumeroCartao);

function formatarNumeroCartao() {
    let numeroCartao = cartaoCreditoInput.value.replace(/\s/g, ''); // Remove espaços em branco existentes
    let formattedNumber = '';
    for (let i = 0; i < numeroCartao.length; i++) {
        formattedNumber += numeroCartao[i];
        if ((i + 1) % 4 === 0 && i !== numeroCartao.length - 1) {
            formattedNumber += ' ';
        }
    }

    cartaoCreditoInput.value = formattedNumber;
}

const nameValue = () => {
    const InputName = document.getElementById("input-name").value

    const resultName = document.getElementById("name")

    resultName.textContent = InputName
    
    const valorName = document.getElementById("input-name")
    const numeroCartao = valorName.value.replace(/\s/g, '');
    if (numeroCartao.length < 4) {
        const mensagemErroElemento = document.getElementById('mensagemName');
        mensagemErroElemento.textContent = 'coloque um nome valido ';
        mensagemErroElemento.style.display = 'block';
} else if (numeroCartao.length > 4) {
        const mensagemErroElemento = document.getElementById('mensagemName');
        mensagemErroElemento.textContent = '';
        mensagemErroElemento.style.display = 'block';
    }

}
    
const month = () => {
    const inputMonth = document.getElementById("month-input").value

    const resultMonth = document.getElementById("validate-month")

resultMonth.textContent = inputMonth
}

const years = () => {
    const inputYears = document.getElementById("years-input").value

    const resultYears = document.getElementById("validate-years")

resultYears.textContent = inputYears
}

const cvc = () => {
    const inputCvc = document.getElementById("input-cvc").value
   
    const resultCvc = document.getElementById("cvc")

    resultCvc.textContent = inputCvc

    const valorCvc = document.getElementById("input-cvc")
    const numeroCartao = valorCvc.value.replace(/\s/g, '');
    if (numeroCartao.length >3 || numeroCartao.length < 3) {
        const mensagemErroElemento = document.getElementById('mensagemCvc');
        mensagemErroElemento.textContent = 'somente 3 digitos';
        mensagemErroElemento.style.display = 'block';
} else if (numeroCartao.length == 3) {
        const mensagemErroElemento = document.getElementById('mensagemCvc');
        mensagemErroElemento.textContent = '';
        mensagemErroElemento.style.display = 'block';
    }


}


//pegando valores das divs pra fazer a ação de proximo
const container = document.getElementById("container-rigth")
const container2 = document.getElementById("container-rigth2")



//validando se todos estão corretos e se estiverem a aplicacão continua

const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
        e.preventDefault();
      
    const firstNameField = document.getElementById("input-name").value
    const inputCvc = document.getElementById("input-cvc").value
    const inputYears = document.getElementById("years-input").value
    const inputMonth = document.getElementById("month-input").value
    const valorInput1 = document.getElementById("cartaoCredito").value

    
    
        let valid = true;
      
        if (!firstNameField) {
          const nameError = document.getElementById("mensagemName");
          nameError.textContent = 'O campo não pode ficar em branco.';
          nameError.style.display = 'block';
        }if (!inputCvc) {
            const cvcError = document.getElementById("mensagemCvc");
           cvcError.textContent = 'O campo não pode ficar em branco.';
           cvcError.style.display = 'block';
    } if (!inputMonth, !inputYears ) {
        const dateError = document.getElementById("mensagemDate");
        dateError.textContent = 'O campo não pode ficar em branco.';
        dateError.style.display = 'block';
    } if (!valorInput1) {
        const numberError = document.getElementById("mensagemNumber");
        numberError.textContent = 'O campo não pode ficar em branco.';
        numberError.style.display = 'block';
    }else if (valid == container.style.display === "none") {
        container.style.display = "block"
        container2.style.display = "none"
        } else {
        container.style.display = "none"
        container2.style.display = "block"
    }
                
  
    return valid
    
}

//para retornar para a pagina anterior 

const returnPage = () => {

    if (container2.style.display === "none") {
        container.style.display = "block"
        container2.style.display = "none"
    } else {
        container2.style.display = "none"
        container.style.display = "block"
    }
}