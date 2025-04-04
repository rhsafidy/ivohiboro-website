'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<string>('50');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#e8e4d5]">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-center text-4xl font-medium tracking-wide text-[#3c4a3a]">
            SUPPORT IVOHIBORO
          </h1>

          <div className="mb-12 text-center">
            <p className="text-[#3c4a3a]">
              Your donation helps us protect the unique biodiversity of
              Ivohiboro, support local communities, and preserve sacred
              traditions passed down through generations.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm bg-[#f5f2e8] p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-600" />
                <h2 className="mb-2 text-2xl font-medium text-[#3c4a3a]">
                  Thank You!
                </h2>
                <p className="text-[#3c4a3a]">
                  Your contribution has been received. Together, we're making a
                  difference for Ivohiboro’s forests, wildlife, and people.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-medium text-[#3c4a3a]">
                    Choose Donation Amount
                  </h2>
                  <RadioGroup
                    value={donationAmount}
                    onValueChange={setDonationAmount}
                    className="flex flex-wrap gap-4"
                  >
                    {['25', '50', '100', '250', 'custom'].map((amount) => (
                      <div key={amount} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={amount}
                          id={`amount-${amount}`}
                          className="border-[#3c4a3a] text-[#3c4a3a]"
                        />
                        <Label
                          htmlFor={`amount-${amount}`}
                          className="text-[#3c4a3a]"
                        >
                          {amount === 'custom' ? 'Custom' : `$${amount}`}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {donationAmount === 'custom' && (
                    <div className="mt-4">
                      <Label htmlFor="custom-amount" className="text-[#3c4a3a]">
                        Enter custom amount ($)
                      </Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="mt-1 w-full max-w-xs border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-medium text-[#3c4a3a]">
                    Your Information
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="first-name" className="text-[#3c4a3a]">
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        required
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="text-[#3c4a3a]">
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        required
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#3c4a3a]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[#3c4a3a]">
                        Phone (optional)
                      </Label>
                      <Input
                        id="phone"
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-4 text-xl font-medium text-[#3c4a3a]">
                    Payment Information
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-2">
                      <Label htmlFor="card-number" className="text-[#3c4a3a]">
                        Card Number
                      </Label>
                      <Input
                        id="card-number"
                        required
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiry" className="text-[#3c4a3a]">
                        Expiration Date
                      </Label>
                      <Input
                        id="expiry"
                        required
                        placeholder="MM/YY"
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc" className="text-[#3c4a3a]">
                        CVC
                      </Label>
                      <Input
                        id="cvc"
                        required
                        placeholder="123"
                        className="mt-1 border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <Label htmlFor="message" className="text-[#3c4a3a]">
                    Message (optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Share why you're supporting the Ivohiboro Protected Area..."
                    className="mt-1 min-h-[100px] border-[#3c4a3a]/30 bg-white focus-visible:ring-[#3c4a3a]"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="min-w-[200px] bg-[#3c4a3a] text-white hover:bg-[#2a362a]"
                  >
                    COMPLETE DONATION
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
