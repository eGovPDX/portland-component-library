import React from 'react';
import '../styles/index.scss';

/**
 * Component to display a color swatch
 */
export const ColorSwatch = ({
  colorVar,
  name,
  description,
}) => {
  return (
    <div className="flex items-center mb-4">
      <div 
        className="w-16 h-16 rounded mr-4 shadow-md" 
        style={{ backgroundColor: `var(${colorVar})` }}
        aria-label={`Color swatch for ${name}`}
      ></div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-[var(--portland-color-neutral)]">{colorVar}</div>
        {description && (
          <div className="text-sm">{description}</div>
        )}
      </div>
    </div>
  );
};

/**
 * Component to display a collection of red color swatches
 */
export const RedColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Red Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-red-5" 
          name="Red 5" 
          description="#f9eeee"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-10" 
          name="Red 10" 
          description="#f8e1de"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-20" 
          name="Red 20" 
          description="#f7bbb6"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-30" 
          name="Red 30" 
          description="#f2938c"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-40" 
          name="Red 40" 
          description="#e66a64"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-50" 
          name="Red 50" 
          description="#d83933"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-60" 
          name="Red 60" 
          description="#b50909"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-70" 
          name="Red 70" 
          description="#8b0a03"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-80" 
          name="Red 80" 
          description="#5c1111"
        />
        <ColorSwatch 
          colorVar="--pgov-color-red-90" 
          name="Red 90" 
          description="#2e0c0a"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of orange color swatches
 */
export const OrangeColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Orange Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-orange-5" 
          name="Orange 5" 
          description="#f6efe9"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-10" 
          name="Orange 10" 
          description="#f2e4d4"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-20" 
          name="Orange 20" 
          description="#f3bf90"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-30" 
          name="Orange 30" 
          description="#f09860"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-40" 
          name="Orange 40" 
          description="#e88230"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-50" 
          name="Orange 50" 
          description="#d16b10"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-60" 
          name="Orange 60" 
          description="#a15600"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-70" 
          name="Orange 70" 
          description="#7d4200"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-80" 
          name="Orange 80" 
          description="#54360e"
        />
        <ColorSwatch 
          colorVar="--pgov-color-orange-90" 
          name="Orange 90" 
          description="#332010"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of gold color swatches
 */
export const GoldColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Gold Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-gold-5" 
          name="Gold 5" 
          description="#f5f5e3"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-10" 
          name="Gold 10" 
          description="#f5f0c4"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-20" 
          name="Gold 20" 
          description="#f5e641"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-30" 
          name="Gold 30" 
          description="#e6c502"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-40" 
          name="Gold 40" 
          description="#c9a600"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-50" 
          name="Gold 50" 
          description="#a88700"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-60" 
          name="Gold 60" 
          description="#8a6e00"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-70" 
          name="Gold 70" 
          description="#6b5500"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-80" 
          name="Gold 80" 
          description="#4d3d00"
        />
        <ColorSwatch 
          colorVar="--pgov-color-gold-90" 
          name="Gold 90" 
          description="#2e2500"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of yellow color swatches
 */
export const YellowColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Yellow Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-yellow-5" 
          name="Yellow 5" 
          description="#faf3d0"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-10" 
          name="Yellow 10" 
          description="#fee685"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-20" 
          name="Yellow 20" 
          description="#ffdb2e"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-30" 
          name="Yellow 30" 
          description="#e6c502"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-40" 
          name="Yellow 40" 
          description="#c9a600"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-50" 
          name="Yellow 50" 
          description="#a88700"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-60" 
          name="Yellow 60" 
          description="#8a6e00"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-70" 
          name="Yellow 70" 
          description="#6b5500"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-80" 
          name="Yellow 80" 
          description="#4d3d00"
        />
        <ColorSwatch 
          colorVar="--pgov-color-yellow-90" 
          name="Yellow 90" 
          description="#2e2500"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of green color swatches
 */
export const GreenColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Green Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-green-5" 
          name="Green 5" 
          description="#eaf4e9"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-10" 
          name="Green 10" 
          description="#dbebda"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-20" 
          name="Green 20" 
          description="#b4d0b5"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-30" 
          name="Green 30" 
          description="#8dc491"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-40" 
          name="Green 40" 
          description="#6ca870"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-50" 
          name="Green 50" 
          description="#4d8c4f"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-60" 
          name="Green 60" 
          description="#2e8130"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-70" 
          name="Green 70" 
          description="#286c2a"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-80" 
          name="Green 80" 
          description="#174f1a"
        />
        <ColorSwatch 
          colorVar="--pgov-color-green-90" 
          name="Green 90" 
          description="#0d2e0f"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of mint color swatches
 */
export const MintColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Mint Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-mint-5" 
          name="Mint 5" 
          description="#e0f7f6"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-10" 
          name="Mint 10" 
          description="#c4eeeb"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-20" 
          name="Mint 20" 
          description="#9bd4cf"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-30" 
          name="Mint 30" 
          description="#6fbab3"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-40" 
          name="Mint 40" 
          description="#4f9e99"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-50" 
          name="Mint 50" 
          description="#40807d"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-60" 
          name="Mint 60" 
          description="#376462"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-70" 
          name="Mint 70" 
          description="#2a4b48"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-80" 
          name="Mint 80" 
          description="#203434"
        />
        <ColorSwatch 
          colorVar="--pgov-color-mint-90" 
          name="Mint 90" 
          description="#111818"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of cyan color swatches
 */
export const CyanColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Cyan Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-cyan-5" 
          name="Cyan 5" 
          description="#e7f6f8"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-10" 
          name="Cyan 10" 
          description="#ccecf2"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-20" 
          name="Cyan 20" 
          description="#99deea"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-30" 
          name="Cyan 30" 
          description="#5dc0d1"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-40" 
          name="Cyan 40" 
          description="#449daa"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-50" 
          name="Cyan 50" 
          description="#168092"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-60" 
          name="Cyan 60" 
          description="#0d6b7a"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-70" 
          name="Cyan 70" 
          description="#044e5a"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-80" 
          name="Cyan 80" 
          description="#033642"
        />
        <ColorSwatch 
          colorVar="--pgov-color-cyan-90" 
          name="Cyan 90" 
          description="#001a1f"
        />
      </div>
    </div>
  );
};

/**
 * Component to display a collection of blue color swatches
 */
export const BlueColorSwatches = () => {
  return (
    <div className="p-6 bg-[var(--portland-background-color)] text-[var(--portland-text-color)]">
      <h2 className="text-xl font-bold mb-4">Blue Color Tokens</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ColorSwatch 
          colorVar="--pgov-color-blue-5" 
          name="Blue 5" 
          description="#eff6fb"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-10" 
          name="Blue 10" 
          description="#d9e8f6"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-20" 
          name="Blue 20" 
          description="#aacdec"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-30" 
          name="Blue 30" 
          description="#73b3e7"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-40" 
          name="Blue 40" 
          description="#4889e3"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-50" 
          name="Blue 50" 
          description="#0050d8"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-60" 
          name="Blue 60" 
          description="#1a4480"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-70" 
          name="Blue 70" 
          description="#162e51"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-80" 
          name="Blue 80" 
          description="#0f1c2d"
        />
        <ColorSwatch 
          colorVar="--pgov-color-blue-90" 
          name="Blue 90" 
          description="#040f1f"
        />
      </div>
    </div>
  );
};

export default ColorSwatch; 