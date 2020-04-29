module.exports = {
  _: {
    storage_is_encrypted: 'Your storage is encrypted. Password is required to decrypt it',
    enter_password: 'Enter password',
    bad_password: 'Bad password, try again',
    never: 'never',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Select Wallet',
    options: 'options',
    createBitcoinWallet:
      'You currently do not have a Bitcoin wallet. In order to fund a Lightning wallet, a Bitcoin wallet needs to be created or imported. Would you like to continue anyway?',
    list: {
      app_name: 'GoldWallet',
      title: 'wallets',
      header: 'A wallet represents a pair of a secret (private key) and an address you can share to receive coins.',
      add: 'Add Wallet',
      create_a_wallet: 'Create a wallet',
      create_a_wallet1: "It's free and you can create",
      create_a_wallet2: 'as many as you like',
      latest_transaction: 'latest transaction',
      empty_txs1: 'Your transactions will appear here,',
      empty_txs2: 'none at the moment',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Tap here to buy Bitcoin',
    },
    reorder: {
      title: 'Reorder Wallets',
    },
    add: {
      title: 'Add new wallet',
      subtitle: 'Name your wallet',
      description: 'Please enter name for your new wallet.',
      inputLabel: 'Name',
      addWalletButton: 'Add new wallet',
      importWalletButton: 'Import wallet',
      advancedOptions: 'Advanced options',
      multipleAddresses: 'Multiple addresses',
      singleAddress: 'Single address',
    },
    addSuccess: {
      title: 'Add new wallet',
      subtitle: 'Success',
      description:
        'Your wallet has been created. Please take a moment to write down this mnemonic phrase on a piece of paper. It’s your backup. You can use it to restore the wallet on other devices.',
      okButton: 'OK, I wrote this down!',
    },
    details: {
      latestTransaction: 'Latest transaction',
      typeLabel: 'Type',
      nameLabel: 'Name',
      exportWallet: 'Export wallet',
      showWalletXPUB: 'Show wallet XPUB',
      deleteWallet: 'Delete wallet',
      nameEdit: 'Edit name',
    },
    export: {
      title: 'wallet export',
    },
    xpub: {
      title: 'wallet XPUB',
      copiedToClipboard: 'Copied to clipboard.',
    },
    import: {
      title: 'import',
      explanation:
        "Write here your mnemonic, private key, WIF, or anything you've got. GoldWallet will do its best to guess the correct format and import your wallet",
      imported: 'Imported',
      error: 'Failed to import. Please, make sure that the provided data is valid.',
      success: 'Success',
      do_import: 'Import',
      scan_qr: 'or scan QR code instead?',
    },
    scanQrWif: {
      go_back: 'Go Back',
      cancel: 'Cancel',
      decoding: 'Decoding',
      input_password: 'Input password',
      password_explain: 'This is BIP38 encrypted private key',
      bad_password: 'Bad password',
      wallet_already_exists: 'Such wallet already exists',
      bad_wif: 'Bad WIF',
      imported_wif: 'Imported WIF',
      with_address: 'with address',
      imported_segwit: 'Imported SegWit',
      imported_legacy: 'Imported Legacy',
      imported_watchonly: 'Imported Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transactions',
      title: 'transactions',
      description: 'A list of ingoing or outgoing transactions of your wallets',
      conf: 'Confirmations',
    },
    details: {
      title: 'Transaction',
      detailTitle: 'Transaction details',
      transactionHex: 'Transaction hex',
      transactionHexDescription: 'This is transaction hex, signed and ready to be broadcast to the network',
      copyAndBoriadcast: 'Copy and broadcast later',
      verify: 'Verify on coinb.in',
      amount: 'Amount',
      fee: 'Fee',
      txSize: 'TX size',
      satoshiPerByte: 'Satoshi per byte',
      from: 'From',
      to: 'To',
      bytes: 'bytes',
      copy: 'Copy',
      details: 'Details',
      transactionId: 'Transaction ID',
      confirmations: 'confirmations',
      transactionDetails: 'Transaction details',
      viewInBlockRxplorer: 'View in block explorer',
      addNote: 'Add note',
      note: 'Note',
      inputs: 'Inputs',
      ouputs: 'Outputs',
      sendCoins: 'Send coins',
    },
  },
  send: {
    header: 'Send coins',
    success: {
      title: 'Success',
      description: 'Hooray! You have successfully finished the transaction.',
      done: 'Done',
      return: 'Return to Dashboard',
    },
    details: {
      title: 'create transaction',
      amount_field_is_not_valid: 'Amount field is not valid',
      fee_field_is_not_valid: 'Fee field is not valid',
      address_field_is_not_valid: 'Address field is not valid',
      create_tx_error: 'There was an error creating the transaction. Please, make sure the address is valid.',
      address: 'address',
      amount_placeholder: 'amount to send (in BTCV)',
      fee_placeholder: 'plus transaction fee (in BTCV)',
      note_placeholder: 'note to self',
      cancel: 'Cancel',
      scan: 'Scan',
      send: 'Send',
      next: 'Next',
      to: 'to',
      feeUnit: 'Sat/B',
      fee: 'Fee: ',
      create: 'Create Invoice',
      remaining_balance: 'Remaining balance',
      total_exceeds_balance: 'The sending amount exceeds the available balance.',
    },
    confirm: {
      header: 'Confirm',
      sendNow: 'Send now',
    },
    create: {
      details: 'Details',
      title: 'create transaction',
      error: 'Error creating transaction. Invalid address or send amount?',
      go_back: 'Go Back',
      this_is_hex: 'This is transaction hex, signed and ready to be broadcast to the network.',
      to: 'To',
      amount: 'Amount',
      fee: 'Fee',
      tx_size: 'TX size',
      satoshi_per_byte: 'Satoshi per byte',
      memo: 'Memo',
      broadcast: 'Broadcast',
      not_enough_fee: 'Not enough fee. Increase the fee',
      setTransactionFee: 'Set a transaction fee',
      headerText:
        'When there is a large number of pending transaction on the network (>1500), the higher fee will result in your transaction being processed faster. The typical values are 1-500 sat/b',
    },
  },
  receive: {
    header: 'Receive coins',
    details: {
      title: 'Share this address with payer',
      share: 'Share',
      copiedToClipboard: 'Copied to clipboard.',
      label: 'Description',
      amount: 'Amount',
      create: 'Create',
      receiveWithAmount: 'Receive with amount',
    },
    scan_lnurl: 'Scan to receive',
  },
  buyBitcoin: {
    header: 'Buy Bitcoin',
    tap_your_address: 'Tap your address to copy it to clipboard',
    copied: 'Copied to Clipboard!',
  },
  settings: {
    language: 'Language',
    general: 'General',
    security: 'Security',
    about: 'About',
    electrumServer: 'Electrum server',
    advancedOptions: 'Advanced options',
    changePin: 'Change PIN',
    fingerprintLogin: 'Fingerprint login',
    aboutUs: 'About us',
    header: 'Settings',
  },
  aboutUs: {
    header: 'About us',
    releaseNotes: 'Release notes',
    runSelfTest: 'Run self test',
    buildWithAwesome: 'Build with awesome:',
    rateGoldWallet: 'Rate GoldWallet',
    goToOurGithub: 'Go to our Github',
    alwaysBackupYourKeys: 'Always backup your keys',
    title: 'Gold wallet is a free and open source Bitcoin wallet. Licensed MIT.',
  },
  electrumServer: {
    header: 'Electrum server',
    save: 'Save',
    useDefault: 'Use default',
    host: 'host',
    port: 'port',
    successfullSave: 'Your changes have been saved successfully. Restart may be required for changes to take effect.',
    connectionError: "Can't connect to provided Electrum server",
  },
  selectLanguage: {
    header: 'Language',
    restartInfo: 'When selecting a new language, restarting GoldWallet may be required for the change to take effect',
    confirmation: 'Confirmation',
    confirm: 'Confirm',
    alertDescription: 'Select language and restart the application?',
    cancel: 'Cancel',
  },
  plausibledeniability: {
    title: 'Plausible Deniability',
    help:
      'Under certain circumstances, you might be forced to disclose a password. To keep your coins safe, GoldWallet can create another encrypted storage, with a different password. Under pressure, you can disclose this password to a 3rd party. If entered in GoldWallet, it will unlock new fake storage. This will seem legit to a 3rd party, but will secretly keep your main storage with coins safe.',
    help2:
      'New storage will be fully functional, and you can store some minimum amounts there so it looks more believable.',
    create_fake_storage: 'Create fake encrypted storage',
    go_back: 'Go Back',
    create_password: 'Create a password',
    create_password_explanation: 'Password for fake storage should not match password for your main storage',
    password_should_not_match: 'Password for fake storage should not match password for your main storage',
    retype_password: 'Retype password',
    passwords_do_not_match: 'Passwords do not match, try again',
    success: 'Success',
  },
  lnd: {
    title: 'manage funds',
    choose_source_wallet: 'Choose a source wallet',
    refill_lnd_balance: 'Refill Lightning wallet balance',
    refill: 'Refill',
    withdraw: 'Withdraw',
    placeholder: 'Invoice',
    expired: 'Expired',
    sameWalletAsInvoiceError: 'You can not pay an invoice with the same wallet used to create it.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device.",
    ok: 'OK, I wrote this down!',
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: 'This invoice was not paid for and has expired',
    has_been_paid: 'This invoice has been paid for',
    please_pay: 'Please pay',
    sats: 'sats',
    for: 'For',
    additional_info: 'Additional Information',
    open_direct_channel: 'Open direct channel with this node',
  },
  contactList: {
    cancel: 'Cancel',
    search: 'Search',
    bottomNavigationLabel: 'Address book',
    screenTitle: 'Address book',
    noContacts: 'No contacts',
    noContactsDesc1: 'No contacts to show. \n Click ',
    noContactsDesc2: ' to add your first contact.',
    noResults: 'No results for',
  },
  contactCreate: {
    screenTitle: 'Add new contact',
    subtitle: 'New contact',
    description: 'Please enter name and address\nfor your new contact.',
    nameLabel: 'Name',
    addressLabel: 'Address',
    buttonLabel: 'Add new contact',
    successTitle: 'Success',
    successDescription: 'Hooray! You have successfully\nadded your contact.',
    successButton: 'Return to Address book',
  },
  contactDetails: {
    nameLabel: 'Name',
    addressLabel: 'Address',
    editName: 'Edit name',
    editAddress: 'Edit address',
    sendCoinsButton: 'Send coins',
    showQRCodeButton: 'Show QR code',
    deleteButton: 'Delete contact',
    share: 'Share',
  },
  contactDelete: {
    title: 'Delete your contact',
    header: 'Delete contact',
    description1: 'Are you sure you want to delete',
    description2: "?\nYou can't undone it.",
    no: 'No',
    yes: 'Yes',
    success: 'Success',
    successDescription: 'Your contact has been successfully deleted.\nYou can now return to Address book.',
    successButton: 'Return to Address book',
  },
};
