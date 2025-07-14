
import React from 'react';
import Header from '@/components/Header';
import ProblemForm from '@/components/ProblemForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700">
      <Header />
      
      {/* Main Hero Section */}
      <section className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Messaging */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              WE'LL HELP YOU
              <br />
              <span className="block">GET OUTTA THIS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-lg">
              Whatever problem you're facing, our experts are ready to help you find a solution and get back on track.
            </p>
            
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30">
              Share Your Problem
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="flex justify-center lg:justify-end">
            <ProblemForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
