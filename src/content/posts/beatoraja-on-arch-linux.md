---
title: Arch Linux で Beatoraja を動かす
pubDate: 2024-06-18
description: Arch Linux で Beatoraja を動かす
category:
  - ゲーム
tags:
  - ゲーム
  - beatoraja
  - BMS
  - Linux
author: mopeneko
---

## 概要

Oracle JDK を使いたくなかったので、Liberica JDK を用いて動かすようにした。

## 必須パッケージ

[liberica-jre-8-full-bin (AUR)](https://aur.archlinux.org/packages/liberica-jre-8-full-bin)

## ダウンロード

ModernChic 同梱版の JRE が同梱されていない方をダウンロードして解凍してください。

[Mocha-Repository : Home](https://www.mocha-repository.info/download.php)

## beatoraja-config.command の書き換え

```sh
#!/bin/bash
export _JAVA_OPTIONS='-Dsun.java2d.opengl=true -Dawt.useSystemAAFontSettings=on -Dswing.aatext=true -Dswing.defaultlaf=com.sun.java.swing.plaf.gtk.GTKLookAndFeel'
export PATH=/lib/jvm/liberica-jre-8-full/bin:$PATH
cd "$(dirname "$0")"
exec java -Xms1g -Xmx4g -jar beatoraja.jar
```

## プレイ動画

下手ですが…

<iframe width="560" height="315" src="https://www.youtube.com/embed/9Oa8oMuX58E?si=anKptPjBC2cLw79r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
