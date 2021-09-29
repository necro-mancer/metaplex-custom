import { useMeta } from '../contexts';
import { StringPublicKey } from '@oyster/common';

export const useAccount = (id?: StringPublicKey) => {
  const { metadata } = useMeta();
  if (metadata.length == 0) {
    return 'unknown';
  } else {
    for (let i = 0; i < metadata.length; i++) {
      if (metadata[i].pubkey == id) {
        if (metadata[i].account != undefined) {
          const slicedArray = metadata[i].info.data.symbol;
          if (!slicedArray) {
            return 'Metaplex';
          } else {
            return 'SolSea';
          }
        } else {
          return 'unknown';
        }
      }
    }
  }
};
