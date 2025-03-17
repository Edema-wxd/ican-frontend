'use client';
import React, { useState, useEffect } from 'react';
import { Users, CalendarRange, MapPin, CalendarCheck, Copy, FilePlus, CircleAlert } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import SuccessModal from './SuccessMessage';
import { useToast } from '@/hooks/use-toast';


const EventRegistration = () => {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [emailError, setEmailError] = useState('');


  const [eventDetails, setEventDetails] = useState({
    id: '',
    topic: '',
    date: '',
    location: '',
    eventFee: '',
    eventPayment: '',
    image: '',
    registeredNo: '',
    totalSpot: '',
    isFull: ''
  });
  useEffect(() => {
    // Get event details from URL parameters
    setEventDetails({
      id: searchParams.get('id') || '',
      topic: searchParams.get('topic') || '',
      date: searchParams.get('date') || '',
      location: searchParams.get('location') || '',
      eventFee: searchParams.get('eventFee') || '',
      eventPayment: searchParams.get('eventPayment') || '',
      image: searchParams.get('image') || "",
      registeredNo: searchParams.get('registeredNo') || '',
      totalSpot: searchParams.get('totalSpot') || '',
      isFull: searchParams.get('isFull') || '',
    });
  }, [searchParams]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    paymentMethod: '',
    receipt: null as File | null,
  });

  const handleCardPayment = () => {

   
    setIsToastVisible(true);
    setIsPaymentSuccessful(true);
    toast({
      title: "Payment Successful",
      description: "You can proceed to submit your registration ",
      variant: "default",
      duration: 2000,
    });

  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [bankDetails] = useState({
    bankName: 'FirstBank',
    accountNumber: '2045417438',
    accountName: 'ICAN Surulere & District Society'
  });

  const [isReceiptUploaded, setIsReceiptUploaded] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        receipt: file
      }));
      setIsReceiptUploaded(true);
    }
  };

  const isFormValidAndToastVisible = () => {
    return (
      isFormValid() ||
      (isPaymentSuccessful)  // Ensuring either payment success or toast popup
    );
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'email') {
      setEmailError('');
      // Validate email as user types
      if (value && !validateEmail(value)) {
        setEmailError('Invalid email address');
      }
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

   
    console.log('Registration submitted', formData);
    setIsModalOpen(true);


  };

  const isFormValid = () => {
    return formData.fullName &&
      formData.email &&
      formData.paymentMethod === 'bankTransfer' &&
      isReceiptUploaded;
  };

  const isNoFeeFormValid = () => {
    return formData.fullName &&
      formData.email;
  };
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Column */}
      <div className="w-1/2 mr-20">
      <div className={`rounded-lg shadow-md p-6 ${Number(eventDetails.eventFee) > 0 ? 'bg-white' : 'bg-gray-100'}`}>
          <div className="flex items-center mb-4">
            <div className={`flex ${Number(eventDetails.eventFee) > 0 ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'} px-3 py-1 rounded-full text-sm mr-2`}>
              <CalendarCheck className={`w-5 h-5 mr-1 ${Number(eventDetails.eventFee) > 0 ? 'text-green-600' : 'text-gray-600'}`} />
              {Number(eventDetails.eventFee) > 0 ? 'Paid Event' : 'Free Event'}
            </div>
          </div>
  
          <h1 className="font-Spartan text-3xl font-bold mb-4">
            {eventDetails.topic} - Understanding Accounting
          </h1>
          
          {eventDetails.image && (
  <div className="relative h-80 mb-4 rounded-lg overflow-hidden">
    <Image
      src={eventDetails.image}
      alt={eventDetails.topic}
      layout="fill"
      objectFit="cover"
    />
  </div>
)}
          <div className="mb-4">
            <div className="flex items-center mb-2 text-sm text-gray-500">
              <CalendarRange className="h-5 w-5 mr-2 text-gray-500" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-5 w-5 mr-2 text-gray-500" />
              <span>{eventDetails.location}</span>
            </div>
          </div>
  
          <p className="text-gray-600 text-base mb-4">
            Join us for an insightful evening focused on managing life's challenges and prioritizing mental well-being. Network, learn, and unwind in a supportive environment.
          </p>
  
          <div className="flex items-center text-sm mb-2 text-gray-500">
            <Users className="h-5 w-5 mr-2 text-gray-500" />
            <span>{eventDetails.registeredNo}/{eventDetails.totalSpot} registered people</span>
          </div>
        </div>
      </div>
  
      {/* Right Column */}
      <div className="w-1/2 p-8">
        <p className="flex flex-row text-sm font-medium">
          Event fee - <span className='flex text-base text-primary'>₦{eventDetails.eventFee}</span>
        </p>
        <h2 className="text-2xl font-bold mb-2">Register for the Event</h2>
        <p className="text-gray-700 mb-6">Secure your spot by filling out the form below.</p>
        <p className="text-gray-800 text-sm mb-2 font-semibold">Personal Details</p>
        <hr className='mb-4 border-gray-500' />
        
        {Number(eventDetails.eventFee) > 0 ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Details Section */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name<span className='text-red-600 text-base mr-1'>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your first and last name"
                className="w-full px-3 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address<span className='text-red-600'>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full px-3 py-2 border ${
                  emailError  ? 'border-red-500' : 'border-gray-300'
                } text-sm rounded-md focus:outline-none focus:ring-2 ${
                  emailError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
  
              />
            </div>
            {emailError &&  (
              <div className="flex items-center mt-1">
                <CircleAlert
                  className="w-4 h-4 text-red-500 mr-1"
                  
                />
                <span className="text-red-500 text-sm">{emailError}</span>
              </div>)}
  
            {/* Payment Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Payment
              </label>
              <hr className='mb-4 border-gray-500' />
              <p className="text-sm text-gray-600 mb-4">This event is paid, payment is required to register</p>
  
              <label htmlFor="select" className="block text-sm font-medium text-gray-600 mb-6">
                Select Payment Method<span className='text-red-600'>*</span>
              </label>
  
              <div className="flex gap-12 mb-4">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    required
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="card" className="text-sm text-gray-700">Card Payment</label>
                </div>
  
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="bankTransfer"
                    name="paymentMethod"
                    value="bankTransfer"
                    required
                    checked={formData.paymentMethod === 'bankTransfer'}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="bankTransfer" className="text-sm text-gray-700">Bank Transfer</label>
                </div>
              </div>
  
              {formData.paymentMethod === 'card' && (
                <button
                  type="button"
                  onClick={handleCardPayment}
                  disabled={isPaymentSuccessful}
                  className={`w-full py-2 px-4 rounded-full ${
                    isPaymentSuccessful
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white transition duration-300 mb-4`}
                >
                  Pay ₦{eventDetails.eventFee}
                </button>
              )}
  
              {formData.paymentMethod === 'bankTransfer' && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold mb-4">Account Details</h3>
                  <div className="space-y-4">
                    <div className='flex items-center space-x-6'>
                      <div className="flex items-center">
                        <Image
                          src="/firstBankLogo.png"
                          alt="FirstBank"
                          width={90}
                          height={70}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-600">Account Number</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg text-gray-600 font-semibold">
                            {bankDetails.accountNumber}
                          </span>
                          <button
                            type="button"
                            onClick={() => copyToClipboard(bankDetails.accountNumber)}
                            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                            title="Copy account number"
                          >
                            <Copy
                              className={`w-4 h-4 ${copied ? 'text-green-500' : 'text-gray-400'}`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
  
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-600">Account Name</span>
                      <span className="text-sm text-gray-600 font-semibold">{bankDetails.accountName}</span>
                    </div>
  
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Upload your Receipt<span className='text-red-500'>*</span>
                      </label>
                      <div className="border-2 border-gray-400 rounded-lg p-10 text-center">
                        <input
                          type="file"
                          id="receipt"
                          accept="image/*,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="receipt"
                          className="cursor-pointer flex flex-col items-center"
                        >
                          <FilePlus className="w-12 h-12 text-gray-800 mb-2" />
                          <span className="text-sm text-gray-800">
                            {isReceiptUploaded ? 'Receipt uploaded' : 'Click to add file or drag any attachment here'}
                          </span>
                        </label>
                      </div>
                    </div>
  
                    
                  </div>
                </div>
              )}
              <button
                      type="submit"
                      className={`w-full py-2 rounded-full transition duration-300 ${
                        isFormValidAndToastVisible()
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-200 text-white cursor-not-allowed'
                      }`}
                      disabled={!isFormValidAndToastVisible()}
                    >
                      Submit Registration
                    </button>
            </div>
          </form>
        ) : (
          // Simplified form for free events
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name<span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your first and last name"
                className="w-full px-3 py-2 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address<span className='text-red-600'>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className={`w-full px-3 py-2 border ${
                  emailError  ? 'border-red-500' : 'border-gray-300'
                } text-sm rounded-md focus:outline-none focus:ring-2 ${
                  emailError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                }`}
  
              />
            </div>
            {emailError &&  (
              <div className="flex items-center mt-1">
                <CircleAlert
                  className="w-4 h-4 text-red-500 mr-1"
                  
                />
                <span className="text-red-500 text-sm">{emailError}</span>
              </div>
            )}
            <button
              type="submit"
              className={`w-full py-2 rounded-full transition duration-300 ${
                isNoFeeFormValid()
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-200 text-white cursor-not-allowed'
              }`}
              disabled={!isNoFeeFormValid()}
            >
              Submit Registration
            </button>
          </form>
        )}
  
        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          email={formData.email}
        />
      </div>
    </div>
  );}
 export default EventRegistration;