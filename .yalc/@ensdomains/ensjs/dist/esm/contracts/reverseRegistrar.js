import { ReverseRegistrar__factory } from '../generated/factories/ReverseRegistrar__factory';
const defaultAddress = '0xAEfF4f4d8e2cB51854BEa2244B3C5Fb36b41C7fC';
export default (provider, address) => ReverseRegistrar__factory.connect(address || defaultAddress, provider);