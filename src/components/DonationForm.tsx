import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isCompany: false,
    isMemorial: false,
    address: '',
    suburb: '',
    city: '',
    postcode: '',
    country: 'NZ',
    comment: ''
  });

  const donationAmounts = [50, 100, 150];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getCurrentAmount = () => {
    return customAmount ? parseFloat(customAmount) : selectedAmount;
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Donation submitted:', { amount: getCurrentAmount(), ...formData });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
      {currentStep === 1 ? (
        <div>
          {/* Step 1: Amount Selection */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Donate to restore sight</h3>
          </div>

          <div className="mb-6">
            <h5 className="text-center text-gray-700 mb-4">Select an amount to donate</h5>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedAmount === amount && !customAmount
                      ? 'border-[#4CAF50] bg-[#4CAF50] text-white'
                      : 'border-gray-200 hover:border-[#4CAF50] text-gray-900'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      <span className="text-lg">$</span>{amount}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="my choice"
                className="w-full pl-8 pr-16 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent text-lg"
                min="5"
                max="50000"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">NZD</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isMemorial}
                onChange={(e) => handleInputChange('isMemorial', e.target.checked)}
                className="w-4 h-4 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50]"
              />
              <span className="text-gray-700">Donate in memory/celebration</span>
            </label>
          </div>

          <button
            onClick={handleContinue}
            disabled={!getCurrentAmount() || getCurrentAmount() < 5}
            className="w-full bg-[#4CAF50] hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <span>Continue</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
            <Lock className="h-4 w-4 mr-2" />
            <span>Secure Payment. This form is protected by BBMS encryption.</span>
          </div>
        </div>
      ) : (
        <div>
          {/* Step 2: Personal Details */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              You've chosen to donate <span className="text-[#4CAF50]">${getCurrentAmount().toFixed(2)}</span>
            </h3>
            <h5 className="text-gray-700">Please enter your details below</h5>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isCompany}
                  onChange={(e) => handleInputChange('isCompany', e.target.checked)}
                  className="w-4 h-4 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50]"
                />
                <span className="text-gray-700">Donate as an organisation</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Enter your postal address"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Suburb <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.suburb}
                  onChange={(e) => handleInputChange('suburb', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Postcode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.postcode}
                onChange={(e) => handleInputChange('postcode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Leave a comment
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) => handleInputChange('comment', e.target.value)}
                placeholder="Leave a comment"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              />
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                className="w-full bg-[#4CAF50] hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Lock className="h-5 w-5" />
                <span>Complete my ${getCurrentAmount().toFixed(2)} donation</span>
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-6 rounded-xl font-medium transition-colors"
              >
                Back
              </button>
            </div>

            <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
              <Lock className="h-4 w-4 mr-2" />
              <span>Secure Payment. This form is protected by BBMS encryption.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DonationForm;