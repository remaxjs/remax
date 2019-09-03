import factory from './factory';

export interface LifestyleProps {
  tntInstId: string;
  scene: string;
  size?: string | number;
  color?: string;
  icon?: string;
  alipayCardNo?: string;
}

const ContractButton = factory<LifestyleProps>('contact-button');

export default ContractButton;
