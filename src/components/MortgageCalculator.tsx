'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(12000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.25);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const calculations = useMemo(() => {
    const downPayment = (homePrice * downPaymentPercent) / 100;
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;

    let monthlyPrincipalAndInterest = 0;
    if (monthlyRate > 0) {
      monthlyPrincipalAndInterest =
        (principal *
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyPrincipalAndInterest = principal / numberOfPayments;
    }

    // Typical luxury property estimates
    const monthlyPropertyTax = (homePrice * 0.012) / 12; // 1.2% annual
    const monthlyInsurance = (homePrice * 0.0035) / 12; // 0.35% annual
    const monthlyHOAOrMaintenance = (homePrice * 0.001) / 12; // 0.1% annual

    const totalMonthly =
      monthlyPrincipalAndInterest +
      monthlyPropertyTax +
      monthlyInsurance +
      monthlyHOAOrMaintenance;

    return {
      downPayment,
      principal,
      monthlyPrincipalAndInterest,
      monthlyPropertyTax,
      monthlyInsurance,
      monthlyHOAOrMaintenance,
      totalMonthly,
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears]);

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Investment & Financing Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Luxury Mortgage Simulator
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Model private wealth financing structures, jumbo mortgages, and capital allocation across your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders & Controls */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Property Value */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
                  Target Acquisition Value
                </label>
                <span className="text-lg font-bold font-mono text-amber-400">
                  ${homePrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={1000000}
                max={50000000}
                step={250000}
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>$1,000,000</span>
                <span>$25,000,000</span>
                <span>$50,000,000</span>
              </div>
            </div>

            {/* Down Payment % */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
                  Equity Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-base font-bold font-mono text-white">
                  ${Math.round(calculations.downPayment).toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>10% (Jumbo Min)</span>
                <span>20% (Standard)</span>
                <span>50% (Private Wealth)</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider">
                  Anticipated Interest Rate
                </label>
                <span className="text-base font-bold font-mono text-white">
                  {interestRate}% Fixed
                </span>
              </div>
              <input
                type="range"
                min={3.5}
                max={9.0}
                step={0.125}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                <span>3.5%</span>
                <span>6.25%</span>
                <span>9.0%</span>
              </div>
            </div>

            {/* Loan Term Selection */}
            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Amortization Horizon
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[15, 20, 30].map((years) => (
                  <button
                    key={years}
                    onClick={() => setLoanTermYears(years)}
                    className={`py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                      loanTermYears === years
                        ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                        : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {years} Years
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-neutral-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              Estimated Monthly Outlay
            </div>
            <div className="text-4xl sm:text-5xl font-black font-mono text-white mb-6 tracking-tight">
              ${Math.round(calculations.totalMonthly).toLocaleString()}
              <span className="text-xs font-normal text-neutral-400 ml-1 font-sans">/ month</span>
            </div>

            {/* Breakdown item list */}
            <div className="space-y-3.5 pt-4 border-t border-neutral-800 text-xs">
              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  Principal & Interest
                </span>
                <span className="font-mono font-bold text-white">
                  ${Math.round(calculations.monthlyPrincipalAndInterest).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  Property Taxes (Est. 1.2%)
                </span>
                <span className="font-mono font-bold text-white">
                  ${Math.round(calculations.monthlyPropertyTax).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  Hazard & Homeowner Insurance
                </span>
                <span className="font-mono font-bold text-white">
                  ${Math.round(calculations.monthlyInsurance).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center text-neutral-300">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  Estate Maintenance Reserve
                </span>
                <span className="font-mono font-bold text-white">
                  ${Math.round(calculations.monthlyHOAOrMaintenance).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <a
                href="#contact"
                className="w-full block text-center py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-lg shadow-amber-500/20"
              >
                Connect With Private Wealth Lender
              </a>
              <p className="text-[10px] text-neutral-500 text-center mt-3 leading-relaxed">
                Calculations are strictly indicative estimates. Actual private bank terms vary based on client credit profile and sovereign asset structuring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
