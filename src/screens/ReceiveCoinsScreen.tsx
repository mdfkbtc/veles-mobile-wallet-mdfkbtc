import bip21 from 'bip21';
import React, { Component } from 'react';
import { View, StyleSheet, Text, InteractionManager } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';
import { NavigationScreenProps, NavigationInjectedProps } from 'react-navigation';

import { Header, ScreenTemplate, Button } from 'app/components';
import { CopyButton } from 'app/components/CopyButton';
import { Transaction, Route } from 'app/consts';
import { typography, palette } from 'app/styles';

import BlueApp from '../../BlueApp';
import { Chain } from '../../models/bitcoinUnits';
import { DashboarContentdHeader } from './Dashboard/DashboarContentdHeader';

const i18n = require('../../loc');

type Props = NavigationInjectedProps<{ secret: string }>;

interface State {
  secret: string;
  bip21encoded: string;
  amount: number;
  address: string;
  wallet: any;
}
export class ReceiveCoinsScreen extends Component<Props, State> {
  static navigationOptions = (props: NavigationScreenProps<{ transaction: Transaction }>) => {
    return {
      header: <Header navigation={props.navigation} isBackArrow title={i18n.receive.header} />,
    };
  };

  constructor(props: Props) {
    super(props);
    const secret = props.navigation.getParam('secret') || '';
    this.state = {
      secret,
      bip21encoded: '',
      amount: 0,
      address: '',
      wallet: {},
    };
  }

  qrCodeSVG: any = null;

  async componentDidMount() {
    await this.updateData();
  }

  updateData = async () => {
    let address;
    let wallet;
    for (const w of BlueApp.getWallets()) {
      if (w.getSecret() === this.state.secret) {
        // found our wallet
        wallet = w;
      }
    }
    if (wallet) {
      if (wallet.getAddressForTransaction) {
        if (wallet.chain === Chain.ONCHAIN) {
          try {
            address = await Promise.race([wallet.getAddressForTransaction(), BlueApp.sleep(1000)]);
          } catch (_) {}
          if (!address) {
            // either sleep expired or getAddressAsync threw an exception
            console.warn('either sleep expired or getAddressAsync threw an exception');
            address = wallet.getAddressForTransaction();
          } else {
            BlueApp.saveToDisk(); // caching whatever getAddressAsync() generated internally
          }
          this.setState({ address });
        } else if (wallet.chain === Chain.OFFCHAIN) {
          try {
            await Promise.race([wallet.getAddressForTransaction(), BlueApp.sleep(1000)]);
            address = wallet.getAddress();
          } catch (_) {}
          if (!address) {
            // either sleep expired or getAddressAsync threw an exception
            console.warn('either sleep expired or getAddressAsync threw an exception');
            address = wallet.getAddress();
          } else {
            BlueApp.saveToDisk(); // caching whatever getAddressAsync() generated internally
          }
        }
        this.setState({ address, wallet });
      } else if (wallet.getAddress) {
        this.setState({
          address: wallet.getAddress(),
          wallet,
        });
      }
    }

    InteractionManager.runAfterInteractions(async () => {
      const bip21encoded = bip21.encode(this.state.address);
      this.setState({ bip21encoded });
    });
  };

  updateAmount = (amount: string) => {
    const bip21encoded = bip21.encode(this.state.address, {
      amount: amount.replace(',', '.'),
    });
    this.setState({
      amount: parseFloat(amount.replace(',', '.')),
      bip21encoded,
    });
  };

  validate = (value: string): string | undefined => !Number(value) && i18n.send.details.amount_field_is_not_valid;

  editAmount = () => {
    this.props.navigation.navigate(Route.EditText, {
      title: i18n.receive.header,
      label: i18n.receive.details.amount,
      onSave: this.updateAmount,
      keyboardType: 'numeric',
      validate: this.validate,
      value: this.state.amount && !!this.state.amount ? this.state.amount.toString() : '',
    });
  };

  get message(): string {
    const { address, amount } = this.state;
    return amount ? `${address}?amount=${amount}` : address;
  }

  share = async () => {
    const message = this.message;
    if (this.qrCodeSVG === undefined) {
      Share.open({
        message,
      }).catch(error => console.log(error));
    } else {
      InteractionManager.runAfterInteractions(async () => {
        this.qrCodeSVG.toDataURL((data: any) => {
          const shareImageBase64 = {
            message,
            url: `data:image/png;base64,${data}`,
          };
          Share.open(shareImageBase64).catch(error => console.log(error));
        });
      });
    }
  };

  chooseItemFromModal = async (index: number) => {
    const wallets = BlueApp.getWallets();

    const wallet = wallets[index];
    this.setState({ wallet, secret: wallet.getSecret() }, this.updateData);
  };

  showModal = () => {
    const wallets = BlueApp.getWallets();
    const selectedIndex = wallets.findIndex(wallet => wallet.label === this.state.wallet.label);
    this.props.navigation.navigate('ActionSheet', {
      wallets,
      selectedIndex,
      onPress: this.chooseItemFromModal,
    });
  };

  render() {
    const { amount, bip21encoded, wallet } = this.state;
    return (
      <ScreenTemplate
        footer={
          <Button title={i18n.receive.details.share} onPress={this.share} containerStyle={styles.buttonContainer} />
        }
      >
        <DashboarContentdHeader
          onSelectPress={this.showModal}
          balance={wallet.balance}
          label={wallet.label}
          unit={wallet.preferredBalanceUnit}
        />
        <View style={styles.qrcontainer}>
          {!!bip21encoded && (
            <QRCode
              quietZone={10}
              value={bip21encoded.replace('bitcoin:', '')}
              size={140}
              color={BlueApp.settings.foregroundColor}
              logoBackgroundColor={BlueApp.settings.brandingColor}
              ecl={'H'}
              getRef={c => (this.qrCodeSVG = c)}
            />
          )}
        </View>
        <Text style={styles.address}>{this.message}</Text>
        <CopyButton textToCopy={this.message} />
        <Text style={styles.inputTitle}>{i18n.receive.details.receiveWithAmount}</Text>
        <View style={styles.amountInput}>
          <Text style={styles.amount} onPress={this.editAmount}>
            {amount ? amount.toString() : i18n.receive.details.amount}
          </Text>
        </View>
      </ScreenTemplate>
    );
  }
}

const styles = StyleSheet.create({
  qrcontainer: {
    alignSelf: 'center',
    width: 140,
    height: 140,
  },
  address: { ...typography.headline9, alignSelf: 'center', marginTop: 30 },
  inputTitle: { ...typography.headline4, alignSelf: 'center', marginVertical: 20 },
  amountInput: { width: '100%', borderBottomColor: palette.grey, borderBottomWidth: 1, paddingBottom: 10 },
  amount: { ...typography.caption, color: palette.textGrey },
  buttonContainer: {
    marginBottom: 20,
  },
});
