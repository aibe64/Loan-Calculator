// LOAN FORM
const loanForm = document.querySelector('.loanForm')

// LOAN DATA
const loanAmount = document.querySelector('.loanAmount')

const paymentDuration = document.querySelector('.paymentDuration')

const interestRate = document.querySelector('.interestRate')

// INTEREST VARIABLES
let P
let T
let R
  
// REPAYMENT DATA
let loading = document.querySelector('.loading')
let loanInfo = document.querySelector('.loanInfo')
let loanAmountOutput = document.querySelector('.loanAmountOutput')
let loanInterestOutput = document.querySelector('.loanInterestOutput')
let loanTotalOutput = document.querySelector('.loanTotalOutput')
let paymentDurationOutput = document.querySelector('.paymentDurationOutput')
let monthlyPayment = document.querySelector('.monthlyPayment')

// LOADING AND LOAN-INFO DISPLAY
loading.style.display = 'none'
loading.firstElementChild.style.width = '70px'
loading.firstElementChild.style.height = '70px'
loanInfo.style.display = 'none'

// LOAN COMPUTATION
loanForm.addEventListener('submit', (e) => {
  e.preventDefault()
  P = Number(loanAmount.value)
  T = Number(paymentDuration.value)
  R = Number(interestRate.value)

  if ( (P == '' || T == ''))
    errorFunction()
  else
    successFunction()
})

// ERROR FUNCTION
errorFunction = () => {
  const errorMsg = loanForm.firstElementChild
  errorMsg.className = 'alert alert-danger mb-3'
  errorMsg.style.display = 'block'
  
  const errorText = 'Please provide values'

  errorMsg.textContent = errorText
  
  setTimeout(() => {
    errorMsg.style.display = 'none'
  }, 5000);
}

// SUCCESS FUNCTION
successFunction = () => {
  // TOTAL AMOUNT PAYABLE
  const I = Number(((P * R * T) / 100))
  const loanTotal = (P + I)
  
  // LOAN APPLICATION OUTPUT
  loanAmountOutput.value = loanAmount.value

  loanInterestOutput.value = I

  loanTotalOutput.value = loanTotal

  paymentDurationOutput.value = paymentDuration.value

  monthlyPayment.value = (loanTotal / paymentDuration.value).toFixed(3)

  loading.style.display = 'block'
  loanInfo.style.display = 'none'


  setTimeout(() => {
    loading.style.display = 'none'
    loanInfo.style.display = 'block'
  }, 1000);
}
