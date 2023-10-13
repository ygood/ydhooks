import createUseStroageState from '../createStroageState';
import isBrower from '../utils/isBrower';

const useLocalStorageState = createUseStroageState(() => (isBrower() ? localStorage : undefined));

export default useLocalStorageState;
