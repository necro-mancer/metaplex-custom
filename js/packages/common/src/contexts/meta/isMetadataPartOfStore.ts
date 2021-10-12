import { Metadata } from '../../actions';
import { Store, WhitelistedCreator } from '../../models/metaplex';
import { ParsedAccount } from '../accounts/types';

export const isMetadataPartOfStore = (
  m: ParsedAccount<Metadata>,
  whitelistedCreatorsByCreator: Record<
    string,
    ParsedAccount<WhitelistedCreator>
  >,
) => {

  if (!m?.info?.data?.creators || !m?.account?.owner) {
    return false;
  }

  return m.info.data.creators.some(
    c =>
      (c.verified &&
      whitelistedCreatorsByCreator[c.address]?.info?.activated),
  );
};
