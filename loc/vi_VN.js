module.exports = {
  _: {
    storage_is_encrypted:
      "Lưu trữ của bạn được mã hoá. Mật khẩu được yêu cầu để giải mã",
    enter_password: "Nhập mật khẩu",
    bad_password: "Mật khẩu sai, vui lòng thử lại",
    never: "không bao giờ",
    continue: "Tiếp tục",
    ok: "OK"
  },
  wallets: {
    select_wallet: "Chọn Ví",
    options: "lựa chọn",
    createBitcoinWallet:
      "Hiện giờ quý khách không có Ví bitcoin. Để trả tiền cho ví Lightning, một ví Bitcoin cần được tạo hoặc nhập. Quý khách có muốn tiếp tục không?",
    list: {
      app_name: "GoldWallet",
      title: "ví",
      header:
        "Một ví đại diện cho cặp khóa bí mật ( khóa riêng tư) và một địa chỉ quý khách có thể chia sẻ để nhận tiền xu",
      add: "Thêm Ví",
      create_a_wallet: "Tạo ví",
      create_a_wallet1: "Miễn phí và quý khách có thể tạo",
      create_a_wallet2: "nhiều như quý khách muốn",
      latest_transaction: "giao dịch gần đây nhất",
      empty_txs1: "Giao dịch của quý khách sẽ xuất hiện tại đây.",
      empty_txs2: "không có tại thời điểm hiện tại",
      empty_txs1_lightning:
        "Ví Lightning nên được sử dụng cho giao dịch hàng ngày của quý khách. Phí rẻ và tốc độ nhanh",
      empty_txs2_lightning:
        '\n Để bắt đầu sử dụng nó chạm vào "quản lý tiền" và thêm tiền vào số dư của quý khách',
      tap_here_to_buy: "Chạm vào đây để mua Bitcoin"
    },
    reorder: {
      title: "Đặt hàng lại Ví "
    },
    add: {
      title: "thêm ví",
      description:
        "Quý khách có thể quét mặt sau của ví( ở WIF - Định dạng nhập Ví) hoặc tạo ví mới, Segwwit được hỗ trợ mặc định",
      scan: "Quét",
      create: "Tạo'",
      label_new_segwit: "Segwit mới",
      label_new_lightning: "Lightning mới",
      wallet_name: "tên",
      wallet_type: "nhập",
      or: "hoặc",
      import_wallet: "Nhập ví",
      imported: "Đã nhập",
      coming_soon: "Sắp tới",
      lightning: "Lightning ",
      bitcoin: "Bitcoin Vault"
    },
    details: {
      title: "Ví",
      address: "Địa chỉ",
      type: "Loại",
      label: "Nhãn",
      destination: "đến",
      description: "miêu tả",
      are_you_sure: "Quý khách có chắc chắn không?",
      yes_delete: "Có, xóa",
      no_cancel: "Không, hủy bỏ",
      delete: "Xóa",
      save: "Lưu",
      delete_this_wallet: "Xóa ví này",
      export_backup: "Xuất/ mặt sau",
      buy_bitcoin: "Mua Bitcoin",
      show_xpub: "Hiện ví XPUB"
    },
    export: {
      title: "xuất ví"
    },
    xpub: {
      title: "ví XPUB",
      copiedToClipboard: "Sao chép đến clipboard"
    },
    import: {
      title: "nhập",
      explanation:
        "Viết ở đây bản ghi nhớ, khóa riêng, WIF hoặc bất cứ thứ gì quý khách có. GoldWallet sẽ cố hết sức để đoán đúng định dạng và nhập ví của quý khách",
      imported: "Đã nhập",
      error:
        "Không thể nhập. Xin vui lòng đảm bảo rằng dữ liệu quý khách cung cấp là hợp lệ",
      success: "Thành công",
      do_import: "Nhập",
      scan_qr: "hoặc quét mã QR?"
    },
    scanQrWif: {
      go_back: "Trở lại",
      cancel: "Hủy bỏ",
      decoding: "Đang mã hóa",
      input_password: "Nhập mật khẩu",
      password_explain: "Đây là khóa riêng BIP38 được mã hóa ",
      bad_password: "Mật khẩu không tốt",
      wallet_already_exists: "Ví này tồn tại",
      bad_wif: "WIF không tốt",
      imported_wif: "Nhập WIF",
      with_address: "với địa chỉ",
      imported_segwit: "Nhập Segwit",
      imported_legacy: "Nhập Legacy",
      imported_watchonly: "Nhập watch-only"
    }
  },
  transactions: {
    list: {
      tabBarLabel: "Giao dịch",
      title: "giao dịch",
      description:
        "Danh sách các giao dịch đang được thực hiện hoặc gửi đi từ ví của quý khách ",
      conf: "conf"
    },
    details: {
      title: "Giao dịch",
      from: "Từ",
      to: "Đến",
      copy: "Sao chép",
      transaction_details: "Chi tiết giao dịch",
      show_in_block_explorer: "Xem ở block explorer"
    }
  },
  send: {
    header: "Gửi",
    success: {
      done: "Hoàn thành"
    },
    details: {
      title: "tạo giao dịch",
      amount_field_is_not_valid: "Số lượng không hợp lệ",
      fee_field_is_not_valid: "Phí không hợp lệ",
      address_field_is_not_valid: "Địa chỉ không hợp lệ",
      create_tx_error:
        "Đã xảy ra lỗi khi tạo giao dịch. Xin vui lòng đảm bảo rằng địa chỉ ví hợp lệ",
      address: "địa chỉ",
      amount_placeholder: "số tiền gửi ( bằng BTCV)",
      fee_placeholder: "cộng thêm phí giao dịch ( bằng BTCV)",
      note_placeholder: "tự ghi nhận",
      cancel: "Hủy",
      scan: "Quét",
      send: "Gửi",
      create: "tạo hóa đơn",
      remaining_balance: "Số dư còn lại",
      total_exceeds_balance: "Số tiền gửi vượt quá số dư khả dụng"
    },
    confirm: {
      header: "Xác nhận",
      sendNow: "Gửi ngay bây giờ"
    },
    create: {
      details: "Chi tiết",
      title: "tạo giao dịch",
      error:
        "Xảy ra lỗi khi tạo giao dịch. Địa chỉ không hợp lệ hoặc gửi tiền?",
      go_back: "Quay lại",
      this_is_hex:
        "Đây là giao dịch hex, đăng ký và chuẩn bị được phát lên mạng",
      to: "Đến",
      amount: "Số lượng",
      fee: "Phí",
      tx_size: "Kích thước TX",
      satoshi_per_byte: "Satoshi mỗi byte",
      memo: "Memo",
      broadcast: "Phát sóng",
      not_enough_fee: "Không đủ phí. Tăng phí"
    }
  },
  receive: {
    header: "Nhận",
    details: {
      title: "Chia sẻ địa chỉ này với ngưởi trả tiền",
      share: "chia sẻ",
      copiedToClipboard: "Sao chép đến clipboard",
      label: "Miêu tả",
      create: "Tạo",
      setAmount: "Nhận với số lượng"
    },
    scan_lnurl: "Quét để nhận"
  },
  buyBitcoin: {
    header: "Mua Bitcoin",
    tap_your_address:
      "Chạm vào địa chỉ của quý khách để sao chép đến clipboard",
    copied: "Sao chép đếnClipboard"
  },
  settings: {
    header: "cài đặt",
    plausible_deniability: "Từ chối hợp lý",
    storage_not_encrypted: "Lưu trữ không được mã hóa",
    storage_encrypted: "Lưu trữ được mã hóa",
    password: "Mật khẩu",
    password_explain:
      "Tạo mật khẩu cái mà quý khách sẽ sử dụng để giải mã hóa bộ nhớ",
    retype_password: "Nhập lại mật khẩu",
    passwords_do_not_match: "Mật khẩu không khớp",
    encrypt_storage: "Giải mã bộ nhớ",
    lightning_settings: "Cài đặt Lightning",
    electrum_settings: "Cài đặt Electrum",
    electrum_settings_explain: "Đặt khoảng trống để sử dụng mặc định",
    save: "Lưu",
    about: "Về",
    language: "Ngôn ngữ",
    currency: "Tiền tệ",
    advanced_options: "Tùy chọn nâng cao",
    enable_advanced_mode: "Kích hoạt chế độ nâng cao"
  },
  plausibledeniability: {
    title: "Từ chối hợp lý",
    help:
      "Trong một số trường hợp nhất định, quý khách có thể bắt buộc phải tiết lộ mật khẩu. Để giữ tiền xu của quý khách được an toàn, GoldWallet có thể tạo một bộ lưu trữ được mã hóa khác, với một mật khẩu khác. Dưới áp lực, quý khách có thể tiết lộ mật khẩu này cho bên thứ ba. Nếu được nhập vào GoldWallet, nó sẽ mở khóa bộ nhớ giả mới. Điều này có vẻ hợp pháp với bên thứ ba nhưng sẽ bí mật giữ bộ nhớ chính của quý khách với tiền xu an toàn",
    help2:
      "Bộ lưu trữ mới sẽ có đầy đủ chức năng và quý khách có thể lưu trữ một số lượng tối thiểu ở đó với thông tin đáng tin cậy hơn",
    create_fake_storage: "Tạo lưu trữ được mã hóa giả",
    go_back: "Quay lại",
    create_password: "Tạo mật khẩu",
    create_password_explanation:
      "Mật khẩu cho bộ nhớ giả không được khớp với mật khẩu cho bộ lưu trữ chính của quý khách",
    password_should_not_match:
      "Mật khẩu cho bộ nhớ giả không được khớp với mật khẩu cho bộ lưu trữ chính của quý khách",
    retype_password: "Nhập lại mật khẩu",
    passwords_do_not_match: "Mật khẩu không khớp, vui lòng thử lại",
    success: "Thành công"
  },
  lnd: {
    title: "quản lý tiền",
    choose_source_wallet: "Chọn nguồn ví",
    refill_lnd_balance: "Nạp lại số dự ví",
    refill: "Nạp lại",
    withdraw: "Rút tiền",
    placeholder: "Hóa đơn",
    expired: "Hết hạn",
    sameWalletAsInvoiceError:
      "Quý khách không thể thanh toán hóa đơn với cùng một ví được sử dụng để tạo hóa đơn"
  },
  pleasebackup: {
    title: "Ví của quý khách đã được tạo...",
    text:
      "Vui lòng dành chút thời gian để viết cụm ghi nhớ này trên một tờ giấy. Nó sẽ là bản sao lưu của quý khách, quý khách có thể sử dụng nó để khôi phục ví ở trên thiết bị khác",
    ok: "OK, tôi đã viết nó!"
  },
  lndViewInvoice: {
    wasnt_paid_and_expired: "Hóa đơn này không được thanh toán và đã hết hạn",
    has_been_paid: "Hóa đơn này đã được thanh toán cho",
    please_pay: "Vui lòng trả tiền",
    sats: "sats",
    for: "Cho",
    additional_info: "Thông tin thêm",
    open_direct_channel: "Mở kênh trực tiếp với nút này"
  }
};
