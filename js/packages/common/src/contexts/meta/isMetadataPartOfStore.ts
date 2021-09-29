import { Metadata } from '../../actions';
import { Store, WhitelistedCreator } from '../../models/metaplex';
import { ParsedAccount } from '../accounts/types';

export const isMetadataPartOfStore = (
  m: ParsedAccount<Metadata>,
  whitelistedCreatorsByCreator: Record<
    string,
    ParsedAccount<WhitelistedCreator>
  >,
  store?: ParsedAccount<Store> | null,
) => {
<<<<<<< HEAD:js/packages/web/src/contexts/meta/isMetadataPartOfStore.ts
  if (useAll) {
    return true;
  }
  // console.log(m?.account?.owner)
  if (!m?.info?.data?.creators || !store?.info || !m?.account?.owner) {
=======
  if (!m?.info?.data?.creators) {
>>>>>>> a733ebb2262da68d3400f96861fe6ad199e48c3c:js/packages/common/src/contexts/meta/isMetadataPartOfStore.ts
    return false;
  }

  return m.info.data.creators.some(
    c =>
      c.verified &&
      (store?.info.public ||
        whitelistedCreatorsByCreator[c.address]?.info?.activated),
  );
};
