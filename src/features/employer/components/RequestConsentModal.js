import React from 'react';
import {Modal, Button, Paragraph} from 'react-native-paper';

export default function RequestConsentModal({
  visible,
  onDismiss,
  studentName,
  onRequestConsent,
}) {
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={{
        backgroundColor: 'white',
        marginHorizontal: 30,
        padding: 40,
      }}>
      <Paragraph>
        You do not have the consent to view {studentName}'s portfolio.
      </Paragraph>
      <Button onPress={onRequestConsent} style={{marginTop: 20}}>
        Request Consent
      </Button>
    </Modal>
  );
}
