import createHostComponent from '../../../createHostComponent';

export interface ContactButtonProps {
  readonly dataset?: DOMStringMap;
  tntInstId: string;
  scene: string;
  size?: string | number;
  color?: string;
  icon?: string;
  alipayCardNo?: string;
}

const ContractButton = createHostComponent<ContactButtonProps>(
  'contact-button'
);

export default ContractButton;
