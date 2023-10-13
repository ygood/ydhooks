import createUseStroageState from '../createStroageState';
import isBrower from '../utils/isBrower';

const useSessionStorageState = createUseStroageState(() =>
  isBrower() ? sessionStorage : undefined,
);

export default useSessionStorageState;
