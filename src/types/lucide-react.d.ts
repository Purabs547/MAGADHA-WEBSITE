declare module 'lucide-react' {
  // Minimal typings to satisfy TS when package types aren't found in the local environment.
  import * as React from 'react';

  // lucide-react icons accept normal SVG props plus a `size` prop (number|string).
  export type LucideIconProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
  };

  export const Home: React.FC<LucideIconProps>;
  export const Gamepad2: React.FC<LucideIconProps>;
  export const Menu: React.FC<LucideIconProps>;
  export const X: React.FC<LucideIconProps>;
  export const ChevronLeft: React.FC<LucideIconProps>;
  export const ChevronRight: React.FC<LucideIconProps>;
  export const Instagram: React.FC<LucideIconProps>;
  export const Linkedin: React.FC<LucideIconProps>;
  export const Twitter: React.FC<LucideIconProps>;
  export const Youtube: React.FC<LucideIconProps>;
  const _default: any;
  export default _default;
}
