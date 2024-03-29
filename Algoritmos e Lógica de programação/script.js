//PERGUNTE O NOME DO USUÁRIO E ESCREVA A MENSAGEM//

/*let nome = prompt("Qual o seu nome?")
alert("Olá, " + nome)*/

/*SOLICITE 2 NÚMEROS, FAÇA A SOMA DELES E APRESENTE 
O RESULTADO FINAL AO USUÁRIO*/

/*alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado final: " + result)*/

/*CAPTURAR 2 NÚMEROS E FAZER AS OPERAÇÕES MATEMÁTICAS DE SOMA,
 SUBTRAÇÃO, MULTIPLICAÇÃO, DIVISÃO E RESTO DA DIVISÃO

 E PARA CADA OPERAÇÃO, MOSTRAR UM ALERTA COM O RESULTADO.*/

 /*let firstNumber = prompt('Digite o primeiro número')
 let secondNumber = prompt('Digite o segundo número')

 firstNumber = Number(firstNumber)
 secondNumber = Number(secondNumber)

 const sum = firstNumber + secondNumber
 const sub = firstNumber - secondNumber
 const multi = firstNumber * secondNumber
 const div = firstNumber / secondNumber
 const restDiv = firstNumber % secondNumber

 alert('Soma: ' + sum)
 alert('Subtração: ' + sub)
 alert('Multiplicação: ' + multi)
 alert('Divisão: ' + div)
 alert('Resto da divisão: ' + restDiv)

 if (sum % 2 === 0){
   alert("A soma é par")
 }

 else {
   alert("A soma é ímpar")
 }

 if (firstNumber === secondNumber) {
   alert("Os números são iguais")
 }

 else {
   alert("Os números são diferentes")
 }*/


 /*SOLICITAR O NOME DO ALUNO E AS 3 NOTAS
 DO BIMESTRE CALCULAR A MÉDIA DAQUELE ALUNO

 A MÉDIA POSITIVA DEVERÁ SER MAIOR QUE 6 

 SE O ALUNO PASSOU NO BIMESTRE, DAR OS PARABÉNS

 SE O ALUNO NÃO PASSOU NO BIMESTRE,
 MOTIVAR O ALUNO A DAR SEU MELHOR NA PROVA DE RECUPERAÇÃO

 EM AMBOS OS CASOS, MOSTRE UMA MENSAGEM COM O NOME DO ALUNO E A NOTA*/
 
 /*let student = prompt("Qual o nome do(a) aluno(a)?")
 let n1 = prompt("Qual a nota da primeira prova?")
 let n2 = prompt("Qual a nota da segunda prova?")
 let n3 = prompt("Qual a nota da terceira prova?")

 let average = (Number(n1) + Number(n2) + Number(n3)) / 3

 average = average.toFixed(2)

 if (average > 6) {
    alert("Parabéns, " + student + "! sua média foi de: " + average)
 }

 else if (average < 3) {
    alert("Reprovado")
 }

 else {
    alert(student + " estude para sua prova de recuperação! Sua média foi de: " + 
    average)
 }*/

/* CAPTURE 10 ITENS PARA COMPOR A LISTA DE UM SUPERMERCADO

APÓS CAPTURAR OS 10 ITENS, IMPRIMA-OS, SEPARANDO POR VÍRGULA.*/

/*let items = []

for(let item = 0; item < 10; item++) {
   let itemName = prompt("Digite o item " + (item + 1))

   items[item] = itemName
}

alert(items)*/

/* JOGO DA ADIVINHAÇÃO 

APRESENTE A MENSAGEM AO USUÁRIO:
"ADVINHE O NÚMERO QUE ESTOU PENSANDO? ESTÁ ENTRE 0 E 10"

CRIE UMA LÓGICA PARA GERAR UM NÚMERO ALEATÓRIO 
E VERIFICAR SE O NÚMERO DIGITADO É O MESMO QUE O ALEATÓRIO GERADO PELO SISTEMA 

ENQUANTO O USUÁRIO NÃO ADIVINHAR O NÚMERO, MOSTRAR A MENSAGEM:
 "ERRO, TENTE NOVAMENTE:"

 CASO O USUÁRIO ACERTE O NÚMERO, APRESENTAR A MENSAGEM:
 "PARABÉNS! VOCÊ ADIVINHOU O NÚMERO EM X TENTATIVAS"

 SUBSTITUA O "X" DA MENSAGEM, PELO NÚMERO DE TENTATIVAS*/
 
 /*let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")
 const randomNumber = Math.round(Math.random() * 10)

 let xAttempts = 1

 while(Number(result) != randomNumber) {
   result = prompt("Erro, tente novamente:")
   xAttempts++
 }

  if(xAttempts < 2) {
   alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número
   em ${xAttempts} tentativa`)
  }

  else {
   alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou o número
  em ${xAttempts} tentativas`)
  }*/

  /* FAÇA UM PROGRAMA QUE TENHA UM MENU E APRESENTE A SEGUINTE MENSAGEM:

  OLÁ USUÁRIO! DIGITE O NÚMERO DA OPÇÃO DESEJADA

   1. Cadastrar um item na lista
   2. Mostrar itens cadastrados
   3. Sair do programa

   O PROGRAMA DEVERÁ CAPTURAR O NÚMERO DIGITADO PELO USUÁRIO E MOSTRAR O SEGUINTE CENÁRIO:

   CASO O USUÁRIO DIGITE 1, ELE PODERÁ CADASTRAR UM ITEM EM UMA LISTA
   CASO O USUÁRIO DIGITE 2, ELE PODERÁ VER OS ITENS CADASTRADOS
    SE NÃO HOUVER NENHUM ITEM CADASTRADO, MOSTRAR A MENSAGEM:
    "NÃO EXISTEM ITENS CADASTRADOS"
   CASO O USUÁRIO DIGITE 3, A APLICAÇÃO DEVERÁ SER ENCERRADA.*/ 

   /*let option
   let items = []

   while(option != 3) {

      option = Number(prompt(`
      Olá usuário! Digite o número da opção desejada

      1. Cadastrar um item na lista 
      2. Mostrar itens cadastrados
      3. Sair do programa
      `))

      switch(option) {
         case 1:
            let item = prompt("Digite o nome do item")
            items.push(item)
            break
         case 2:
            if(items.length == 0) {
               alert("Não existem itens cadastrados")
            } else {
               alert(items)
            }
            break
         case 3:
            alert("Tchau")
            break
         default:
            alert("Opção inválida. Tente novamente")          
      }
   } */
   
   /* CRIE UMA LISTA DE PACIENTES

   CADA PACIENTE DEVERÁ CONTER
   NOME
   IDADE
   PESO
   ALTURA

   ESCREVA UMA LISTA CONTENDO O NOME E OS DADOS DOS PACIENTES */
 
  /* const patients = [
      {
         name: "Luiz",
         age: 20,
         weight: 100,
         height: 190
      },

      {
         
         name: "Marcos",
         age: 50,
         weight: 80,
         height: 180
      }, 

      {
         name: "Larissa",
         age: 18,
         weight: 50,
         height: 157
      },
   ]

   let patientsNames = []

   for(let patient of patients) {
      patientsNames.push(patient.name)
      patientsNames.push(patient.age)
      patientsNames.push(patient.weight)
      patientsNames.push(patient.height)
   }

   alert(patientsNames) */

 
   
   /* DADA UMA LISTA DE PACIENTES, DESCUBRA O IMC DE CADA PACIENTE E IMPRIMA 

   "PACIENTE X POSSUI O IMC DE: Y:"

   ONDE X É O NOME DO PACIENTE E Y É O IMC DESSE PACIENTE 

   CRIE UMA FUNÇÃO PARA FAZER O CÁLCULO DE IMC */

  /* const patients = [
      {
         name: "Luiz",
         age: 20,
         weight: 100,
         height: 190
      },

      {
         
         name: "Marcos",
         age: 50,
         weight: 80,
         height: 180
      }, 

      {
         name: "Larissa",
         age: 18,
         weight: 50,
         height: 157
      },
   ]

   function IMC(weight, height) {
      return (weight / ((height /100) ** 2)).toFixed(2)
   }

   function printPatientIMC(patients) {
      return `
      Paciente ${patients.name} possui o IMC de 
     ${IMC(patients.weight, patients.height)}
      `   
   }

   for (let patient of patients) {
      let IMCmessage = printPatientIMC(patient)
      alert(IMCmessage)
   }*/
   
   



   


 






