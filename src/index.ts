import { IFrameEthereumProvider } from '@jadbox/iframe-provider';

/**
 * Return true if the current window context appears to be embedded within an iframe element.
 */
export function isEmbeddedInIFrame(): boolean {
  return window && window.parent && window.self && window.parent !== window.self;
}

console.log('isEmbeddedInIFrame()', isEmbeddedInIFrame());

if (isEmbeddedInIFrame()) {
  const target = window as any;

  const provider = new IFrameEthereumProvider();

  target.web3 = provider;
  target.ethereum = provider;
}