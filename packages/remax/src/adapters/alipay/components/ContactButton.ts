import factory from './factory';

export interface ContactButtonProps {
  readonly dataset?: DOMStringMap;
  tntInstId: string;
  scene: string;
  size?: string | number;
  color?: string;
  icon?: string;
  alipayCardNo?: string;
}

const ContractButton = factory<ContactButtonProps>('contact-button');

export default ContractButton;
