import React from 'react';
import CTAButton from './CTAButton';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary-light to-white py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-secondary-dark animate-fade-in">
                Become a <span className="text-primary">Collectible</span> Legend
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Turn yourself, your pet, or loved ones into a premium action figure — sealed forever in a display-worthy collectible package.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CTAButton text="Create Your Collectible Now" size="lg" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-full animate-float">
              <img
                alt="MiniYou Collectible Package"
                className="mx-auto object-contain"
                src="/lovable-uploads/f75aa619-1fb3-45bd-9948-f8200ed0dc9b.png"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
