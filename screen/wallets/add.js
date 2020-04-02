/* global alert */
import React, { Component } from "react";
import {
  Alert,
  Text,
  LayoutAnimation,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  BlueTextCentered,
  BlueText,
  BitcoinButton,
  BlueFormLabel,
  BlueButton,
  SafeBlueArea,
  BlueFormInput,
  BlueNavigationStyle,
  BlueButtonLink,
  BlueSpacing20,
  BlueSpacing10
} from "../../BlueComponents";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import PropTypes from "prop-types";
import { HDSegwitP2SHWallet } from "../../class/hd-segwit-p2sh-wallet";
import {
  AppStorage,
  HDSegwitBech32Wallet,
  SegwitP2SHWallet
} from "../../class";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

let EV = require("../../events");
/** @type {AppStorage} */
const BlueApp = require("../../BlueApp");
const loc = require("../../loc");

export default class WalletsAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    ...BlueNavigationStyle(navigation, true),
    title: loc.wallets.add.title,
    headerLeft: null
  });

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      walletBaseURI: ""
    };
  }

  async componentDidMount() {
    let walletBaseURI = await AsyncStorage.getItem(AppStorage.LNDHUB);
    const isAdvancedOptionsEnabled = !!(await AsyncStorage.getItem(
      AppStorage.ADVANCED_MODE_ENABLED
    ));
    walletBaseURI = walletBaseURI || "";

    this.setState({
      isLoading: false,
      activeBitcoin: true,
      label: "",
      isAdvancedOptionsEnabled,
      walletBaseURI
    });
  }

  setLabel(text) {
    this.setState({
      label: text
    }); /* also, a hack to make screen update new typed text */
  }

  onSelect(index, value) {
    this.setState({
      selectedIndex: index,
      selectedValue: value
    });
  }

  showAdvancedOptions = () => {
    Keyboard.dismiss();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ isAdvancedOptionsEnabled: true });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeBlueArea
        forceInset={{ horizontal: "always" }}
        style={{ flex: 1, paddingTop: 40 }}
      >
        <KeyboardAvoidingView
          enabled
          behavior={Platform.OS === "ios" ? "position" : null}
          keyboardVerticalOffset={20}
        >
          <BlueFormLabel>{loc.wallets.add.wallet_name}</BlueFormLabel>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#d2d2d2",
              borderBottomColor: "#d2d2d2",
              borderWidth: 1.0,
              borderBottomWidth: 0.5,
              backgroundColor: "#f5f5f5",
              minHeight: 44,
              height: 44,
              marginHorizontal: 20,
              alignItems: "center",
              marginVertical: 16,
              borderRadius: 4
            }}
          >
            <TextInput
              value={this.state.label}
              placeholderTextColor="#81868e"
              placeholder="my first wallet"
              onChangeText={text => {
                this.setLabel(text);
              }}
              style={{ flex: 1, marginHorizontal: 8, color: "#81868e" }}
              editable={!this.state.isLoading}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={{ marginHorizontal: 20 }}>
            {(() => {
              if (
                this.state.activeBitcoin &&
                this.state.isAdvancedOptionsEnabled
              ) {
                return (
                  <View
                    style={{
                      height: 140
                    }}
                  >
                    <BlueSpacing20 />
                    <Text style={{ color: "#0c2550", fontWeight: "500" }}>
                      {loc.settings.advanced_options}
                    </Text>
                    <RadioGroup
                      onSelect={(index, value) => this.onSelect(index, value)}
                      selectedIndex={0}
                    >
                      <RadioButton value={HDSegwitP2SHWallet.type}>
                        <BlueText>
                          {HDSegwitP2SHWallet.typeReadable} - Multiple addresses
                        </BlueText>
                      </RadioButton>
                      <RadioButton value={SegwitP2SHWallet.type}>
                        <BlueText>
                          {SegwitP2SHWallet.typeReadable} - Single address
                        </BlueText>
                      </RadioButton>
                      <RadioButton value={HDSegwitBech32Wallet.type}>
                        <BlueText>
                          {HDSegwitBech32Wallet.typeReadable} - Multiple
                          addresses
                        </BlueText>
                      </RadioButton>
                    </RadioGroup>
                  </View>
                );
              } else if (
                this.state.activeBitcoin === undefined &&
                this.state.isAdvancedOptionsEnabled
              ) {
                return <View />;
              }
            })()}
            <View
              style={{
                alignItems: "center",
                flex: 1,
                marginVertical: 32
              }}
            >
              {!this.state.isLoading ? (
                <BlueButton
                  title={loc.wallets.add.create}
                  disabled={this.state.activeBitcoin === undefined}
                  onPress={() => {
                    this.setState(
                      { isLoading: true },
                      async () => {
                        let w;
                        if (this.state.selectedIndex === 2) {
                          // btc was selected
                          // index 2 radio - hd bip84
                          w = new HDSegwitBech32Wallet();
                          w.setLabel(
                            this.state.label || loc.wallets.details.title
                          );
                        } else if (this.state.selectedIndex === 1) {
                          // btc was selected
                          // index 1 radio - segwit single address
                          w = new SegwitP2SHWallet();
                          w.setLabel(
                            this.state.label || loc.wallets.details.title
                          );
                        } else {
                          // zero index radio - HD segwit
                          w = new HDSegwitP2SHWallet();
                          w.setLabel(
                            this.state.label || loc.wallets.details.title
                          );
                        }
                        if (this.state.activeBitcoin) {
                          await w.generate();
                          BlueApp.wallets.push(w);
                          await BlueApp.saveToDisk();
                          EV(EV.enum.WALLETS_COUNT_CHANGED);
                          ReactNativeHapticFeedback.trigger(
                            "notificationSuccess",
                            { ignoreAndroidSystemSettings: false }
                          );
                          if (
                            w.type === HDSegwitP2SHWallet.type ||
                            w.type === HDSegwitBech32Wallet.type
                          ) {
                            this.props.navigation.navigate("PleaseBackup", {
                              secret: w.getSecret()
                            });
                          } else {
                            this.props.navigation.dismiss();
                          }
                        }
                      },
                      1
                    );
                  }}
                />
              ) : (
                <ActivityIndicator />
              )}
            </View>
            <BlueSpacing10 />
            <BlueButtonLink
              title={loc.wallets.add.import_wallet}
              onPress={() => {
                this.props.navigation.navigate("ImportWallet");
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeBlueArea>
    );
  }
}

WalletsAdd.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    dismiss: PropTypes.func
  })
};
