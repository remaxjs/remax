import * as React from 'react';
import { View, Modal } from 'remax/one';

export default () => {
  return (
    <View id="page">
      <Modal>
        <View id="modal">modal component</View>
      </Modal>
      page modal
    </View>
  );
};
