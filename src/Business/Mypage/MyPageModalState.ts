export const cacheChargeModalStateFn = (
  cacheChargeModalState: boolean,
  pullCacheModalState: boolean,
  setcacheChargeModalState: React.Dispatch<React.SetStateAction<boolean>>,
  setpullCacheModalState: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (pullCacheModalState) setpullCacheModalState(false);
  setcacheChargeModalState(!cacheChargeModalState);
};

export const pullCacheModalStateFn = (
  pullCacheModalState: boolean,
  cacheChargeModalState: boolean,
  setcacheChargeModalState: React.Dispatch<React.SetStateAction<boolean>>,
  setpullCacheModalState: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (cacheChargeModalState) setcacheChargeModalState(false);
  setpullCacheModalState(!pullCacheModalState);
};
