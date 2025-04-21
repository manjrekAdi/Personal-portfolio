declare module 'vanta/dist/vanta.net.min' {
  interface VantaNetOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    color: number;
    backgroundColor: number;
    points: number;
    maxDistance: number;
    spacing: number;
    showDots: boolean;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  interface VantaExports {
    NET: (options: VantaNetOptions) => VantaEffect;
  }

  const Vanta: VantaExports;
  export default Vanta;
} 