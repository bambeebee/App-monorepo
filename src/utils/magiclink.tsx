import { ConnectExtension } from '@magic-ext/connect';
import { Magic, MagicSDKAdditionalConfiguration } from 'magic-sdk';
import Web3 from 'web3';

let magicInstance: any;

const public_key = '';

const options = {
  extensions: [new ConnectExtension()],
  network: {
    rpcUrl: '',
  },
  // testMode: true,
};

export const getMagicInstance = (
  magicApiKey: string = public_key,
  magicOptions: MagicSDKAdditionalConfiguration = options
) => {
  if (!magicInstance) {
    magicInstance = new Magic(magicApiKey,{
		network: "",
		locale: "en_US",
		extensions: [new ConnectExtension()]
	  });
  }

  return magicInstance;
};
