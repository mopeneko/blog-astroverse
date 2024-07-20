---
title: WordPressブログを Cleanweb, Onion Service 両対応にする
pubDate: 2024-02-11
description: なんとなく Privacy Guides を読んでいたら、このブログを Onion Service にしたくなったのでやりました。
cover: ../images/hacker-8858353_1280.png
coverAlt: ハッカーのイメージ画像
category:
  - ブログ
tags:
  - ブログ
  - Linux
author: mopeneko
---
なんとなく Privacy Guides を読んでいたら、このブログを Onion Service にしたくなったのでやりました。

## 環境

- OS: Ubuntu Server 22.04
- CPU Architecture: x86_64
- Web Server: nginx

## 手順

### Tor をインストールする

Tor で Onion Service を運用するには Tor が必要です。

[コミュニティページ](https://community.torproject.org/onion-services/setup/install/)に従ってインストールしてください。

### Onion Service を有効にする

同様に[コミュニティページ](https://community.torproject.org/onion-services/setup/)に従って Onion Service を有効にします。

### nginx にホストを指定して配信する

Clearweb 用のコンフィグを複製します。

`server_name` ディレクティブを Onion Service を有効にした際に生成された hostname ファイルを参考に設定します。

nginx を再起動すると、この時点で .onion ドメインにアクセスすると、リンクが Clearweb のものになっていると思います。

次の手順でそれを直していきます。

### wp-config.php を編集する

本来は nginx で出来れば良かったのですが、Ubuntu の nginx ではセキュリティ上の理由から Lua のサポートが切られたようなので、PHP を用いて実装します。

`$_SERVER['SERVER_NAME']`で nginx の `server_name` を参照できるので、それを用いて `SITE_URL` を置換してやります。

以下が私の実装です。

```php
$onion_host = '.onionドメイン';

if ($_SERVER['SERVER_NAME'] == $onion_host) {
	define('WP_SITEURL',"http://$onion_host");
	define('WP_HOME', "http://$onion_host");
}
```
