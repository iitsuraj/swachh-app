/**
 * Show TaskScreen List
 * 1. From Submission
 * 2. Image Submission
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
import { Title, TextInput, RadioButton, Button } from 'react-native-paper';

const FormSubmission: React.FC = ({ route }) => {
  const [unitStatus, setUnitStatus] = React.useState('operational');
  const [nonOperationalStatus, setNonOperationalStatus] = React.useState(
    'temporary-closed',
  );
  const [etpStatus, setEtpStatus] = React.useState('operational');
  const [airConsent, setAirConset] = React.useState('valid');
  const [waterConsent, setWaterConset] = React.useState('valid');
  const [hazardousConsent, setHazardousConset] = React.useState('valid');
  const [cgwaConsent, setCgwaConset] = React.useState('valid');
  const [waterConsumption, setwaterConsumption] = React.useState('borewell');
  const [flowmeterBorewellStatus, setFlowmeterBorewellStatus] = React.useState(
    'installed-working',
  );
  const [flowmeterEtpInletStatus, setFlowmeterEtpInletStatus] = React.useState(
    'installed-working',
  );
  const [ocemsStatus, setOcemsStatus] = React.useState('installed-working');
  const [
    flowmeterEtpOutletStatus,
    setFlowmeterEtpOutletStatus,
  ] = React.useState('installed-working');
  const [reView, setReView] = useState(false);
  const [completeStatus, setCompleteStatus] = useState(false);
  const submitData = () => {
    if (reView) {
      ToastAndroid.show('Data Submitted to server', ToastAndroid.SHORT);
      setCompleteStatus(true);
    } else {
      ToastAndroid.show('review and resubmit', ToastAndroid.SHORT);
      setReView(true);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: '100%',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <View>
            <Title style={styles.inputContainerTitle}>Contacted Person</Title>
            <TextInput
              mode="outlined"
              style={styles.inputContainerStyle}
              label="Name"
              placeholder="Contact Person Name"
              // value={password}
              // onChangeText={onChangePassword}
              // error={passwordError}
            />
            <TextInput
              mode="outlined"
              style={styles.inputContainerStyle}
              label="Number"
              placeholder="Contact number"
              // value={password}
              // onChangeText={onChangePassword}
              // error={passwordError}
            />
            <TextInput
              mode="outlined"
              style={styles.inputContainerStyle}
              label="Email"
              placeholder="Contact email"
              // value={password}
              // onChangeText={onChangePassword}
              // error={passwordError}
            />
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Unit operational status
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setUnitStatus(value)}
              value={unitStatus}>
              <RadioButton.Item label="Operational" value="operational" />
              <RadioButton.Item
                label="Non Operational"
                value="non-operational"
              />
              <RadioButton.Item label="Others" value="others" />
            </RadioButton.Group>
            {unitStatus === 'others' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
            {unitStatus === 'non-operational' ? (
              <View>
                <Title style={styles.inputContainerTitle}>
                  Non Operational Unit status
                </Title>
                <RadioButton.Group
                  onValueChange={(value) => setNonOperationalStatus(value)}
                  value={nonOperationalStatus}>
                  <RadioButton.Item
                    label="Temporary Closed"
                    value="temporary-closed"
                  />
                  <RadioButton.Item label="Self Closed" value="self-closed" />
                  <RadioButton.Item label="Others" value="others" />
                </RadioButton.Group>
              </View>
            ) : null}
            {nonOperationalStatus === 'others' &&
            unitStatus === 'non-operational' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              ETP operational status
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setEtpStatus(value)}
              value={etpStatus}>
              <RadioButton.Item label="Operational" value="operational" />
              <RadioButton.Item
                label="Non Operational"
                value="non-operational"
              />
              <RadioButton.Item label="Others" value="others" />
            </RadioButton.Group>
            {etpStatus === 'others' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Consented Production capacity
            </Title>
            <TextInput
              style={styles.inputContainerStyle}
              placeholder={'Consented Production capacity'}
              label={'Capacity'}
              mode={'outlined'}
            />
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Consent Status Air consent
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setAirConset(value)}
              value={airConsent}>
              <RadioButton.Item label="Valid" value="valid" />
              <RadioButton.Item label="Invalid" value="invalid" />
              <RadioButton.Item label="Applied" value="applied" />
              <RadioButton.Item label="Not Provided" value="not-provided" />
            </RadioButton.Group>
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>Water consent</Title>
            <RadioButton.Group
              onValueChange={(value) => setWaterConset(value)}
              value={waterConsent}>
              <RadioButton.Item label="Valid" value="valid" />
              <RadioButton.Item label="Invalid" value="invalid" />
              <RadioButton.Item label="Applied" value="applied" />
              <RadioButton.Item label="Not Provided" value="not-provided" />
            </RadioButton.Group>
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>Hazardous consent</Title>
            <RadioButton.Group
              onValueChange={(value) => setHazardousConset(value)}
              value={hazardousConsent}>
              <RadioButton.Item label="Valid" value="valid" />
              <RadioButton.Item label="Invalid" value="invalid" />
              <RadioButton.Item label="Applied" value="applied" />
              <RadioButton.Item label="Not Provided" value="not-provided" />
            </RadioButton.Group>
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>CGWA consent</Title>
            <RadioButton.Group
              onValueChange={(value) => setCgwaConset(value)}
              value={cgwaConsent}>
              <RadioButton.Item label="Valid" value="valid" />
              <RadioButton.Item label="Invalid" value="invalid" />
              <RadioButton.Item label="Applied" value="applied" />
              <RadioButton.Item label="Not Provided" value="not-provided" />
            </RadioButton.Group>
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Source of fresh water consumption
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setwaterConsumption(value)}
              value={waterConsumption}>
              <RadioButton.Item label="Borewell" value="borewell" />
              <RadioButton.Item label="TubeWell" value="tubewell" />
              <RadioButton.Item label="River" value="river" />
              <RadioButton.Item label="Other" value="other" />
            </RadioButton.Group>
            {waterConsumption === 'other' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Flowmeter installed at Borewell
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setFlowmeterBorewellStatus(value)}
              value={flowmeterBorewellStatus}>
              <RadioButton.Item
                label={'Installed & Working'}
                value="installed-working"
              />
              <RadioButton.Item
                label={'Installed & not Working'}
                value="installed-not-working"
              />
              <RadioButton.Item label={'Not Installed'} value="not-installed" />
              <RadioButton.Item label="Other" value="other" />
            </RadioButton.Group>
            {flowmeterBorewellStatus === 'other' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Flowmeter installed at ETP inlet
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setFlowmeterEtpInletStatus(value)}
              value={flowmeterEtpInletStatus}>
              <RadioButton.Item
                label={'Installed & Working'}
                value="installed-working"
              />
              <RadioButton.Item
                label={'Installed & not Working'}
                value="installed-not-working"
              />
              <RadioButton.Item label={'Not Installed'} value="not-installed" />
              <RadioButton.Item label="Other" value="other" />
            </RadioButton.Group>
            {flowmeterEtpInletStatus === 'other' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Flowmeter installed at ETP outlet
            </Title>
            <RadioButton.Group
              onValueChange={(value) => setFlowmeterEtpOutletStatus(value)}
              value={flowmeterEtpOutletStatus}>
              <RadioButton.Item
                label={'Installed & Working'}
                value="installed-working"
              />
              <RadioButton.Item
                label={'Installed & not Working'}
                value="installed-not-working"
              />
              <RadioButton.Item label={'Not Installed'} value="not-installed" />
              <RadioButton.Item label="Other" value="other" />
            </RadioButton.Group>
            {flowmeterEtpOutletStatus === 'other' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>OCEMS status</Title>
            <RadioButton.Group
              onValueChange={(value) => setOcemsStatus(value)}
              value={ocemsStatus}>
              <RadioButton.Item
                label={'Installed & Working'}
                value="installed-working"
              />
              <RadioButton.Item
                label={'Installed & not Working'}
                value="installed-not-working"
              />
              <RadioButton.Item label={'Not Installed'} value="not-installed" />
              <RadioButton.Item label="Other" value="other" />
            </RadioButton.Group>
            {ocemsStatus === 'other' ? (
              <TextInput
                style={styles.inputContainerStyle}
                placeholder="Reason...."
                underlineColorAndroid="transparent"
                multiline={true}
                numberOfLines={2}
                // mode={'outlined'}
              />
            ) : null}
          </View>
          <View>
            <Title style={styles.inputContainerTitle}>
              Specific Observations
            </Title>
            <TextInput
              style={styles.inputContainerStyle}
              placeholder="Reason...."
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={2}
            />
          </View>
          {!completeStatus ? (
            <Button
              mode="contained"
              onPress={submitData}
              style={{ margin: 20 }}>
              {reView ? 'Complete' : 'Submit'}
            </Button>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormSubmission;

const styles = StyleSheet.create({
  inputContainerTitle: { margin: 10 },
  inputContainerStyle: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 10,
    marginRight: 10,
  },
});
