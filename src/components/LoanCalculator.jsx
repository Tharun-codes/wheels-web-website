import { useState } from 'react'
import { Calculator, DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react'

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(35000)
  const [interestRate, setInterestRate] = useState(4.5)
  const [loanTerm, setLoanTerm] = useState(60)
  const [downPayment, setDownPayment] = useState(5000)

  const calculateMonthlyPayment = () => {
    const principal = loanAmount - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm
    
    if (monthlyRate === 0) {
      return principal / numberOfPayments
    }
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    return monthlyPayment
  }

  const calculateTotalPayment = () => {
    return calculateMonthlyPayment() * loanTerm
  }

  const calculateTotalInterest = () => {
    return calculateTotalPayment() - (loanAmount - downPayment)
  }

  const monthlyPayment = calculateMonthlyPayment()
  const totalPayment = calculateTotalPayment()
  const totalInterest = calculateTotalInterest()

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Inputs */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary-600" />
            Loan Details
          </h3>

          {/* Loan Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="inline h-4 w-4 mr-1" />
              Loan Amount
            </label>
            <input
              type="range"
              min="5000"
              max="100000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">$5,000</span>
              <span className="text-lg font-bold text-primary-600">${loanAmount.toLocaleString()}</span>
              <span className="text-sm text-gray-500">$100,000</span>
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="inline h-4 w-4 mr-1" />
              Down Payment
            </label>
            <input
              type="range"
              min="0"
              max="loanAmount"
              step="500"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">$0</span>
              <span className="text-lg font-bold text-primary-600">${downPayment.toLocaleString()}</span>
              <span className="text-sm text-gray-500">${loanAmount.toLocaleString()}</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Percent className="inline h-4 w-4 mr-1" />
              Interest Rate (APR)
            </label>
            <input
              type="range"
              min="2"
              max="15"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">2%</span>
              <span className="text-lg font-bold text-primary-600">{interestRate}%</span>
              <span className="text-sm text-gray-500">15%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Loan Term
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[24, 36, 48, 60, 72, 84].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTerm(term)}
                  className={`py-2 px-4 rounded-lg font-medium transition-all ${
                    loanTerm === term
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border'
                  }`}
                >
                  {term} mo
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Display */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-accent-500" />
            Your Monthly Payment
          </h3>

          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-gradient mb-2">
              ${monthlyPayment.toFixed(2)}
            </div>
            <p className="text-gray-600">per month</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Principal Amount</span>
              <span className="font-semibold text-gray-900">
                ${(loanAmount - downPayment).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Interest</span>
              <span className="font-semibold text-accent-600">
                ${totalInterest.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-primary-50 rounded-lg">
              <span className="text-gray-700 font-medium">Total Cost</span>
              <span className="font-bold text-primary-700 text-lg">
                ${totalPayment.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full mt-6 btn-primary">
            Apply for This Loan
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            *Rates are estimates and may vary based on credit score and other factors.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoanCalculator
