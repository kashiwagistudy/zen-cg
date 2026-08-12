# EXAMPLE

## 表

### 普通サイズ（80%）の表

````md
|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |
````

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

### 小さめサイズ(50%)の表

````md

<div class="small-table">

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

</div>

````

<div class="small-table">

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

</div>

### スクロール表示の表

画面幅が狭いとき、折り返し表示で見にくくなってしまう表に使う

````md

<div class="overflow-table">

| ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| データです | データです | データです | データです | データです | データです | データです | データです | データです | データです |
| データです | データです | データです | データです | データです | データです | データです | データです | データです | データです |

</div>

````

<div class="overflow-table">

| ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| データです | データです | データです | データです | データです | データです | データです | データです | データです | データです |
| データです | データです | データです | データです | データです | データです | データです | データです | データです | データです |

</div>

サンプル：通常のテーブルは折り返し表示になるので見にくい

| ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです | ヘッダです |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| データです | データです | データです | データです | データです | データです | データです | データです | データです | データです |
| データです | データです | データです | データです | データです | データです | データです | データです | データです | データです |

## ルビ

````md
{漢字|かんじ}
````

{漢字|かんじ}


## コードブロック

### デフォルト

`````md
```bash
touch app.js
```
`````

<br>

```bash
touch app.js
```

### ファイル名なしコピー機能付き

`````md
<div class="copy-target">

```html
<span>text</span>
```

</div>

`````

<br>

<div class="copy-target">

```html
<span>text</span>
```

</div>

### ファイル名付き

<details style="margin: 1em 0">
<summary> 詳細 </summary>

`````md
<div class="code-with-caption">
<span class="code-caption">filename.html</span>

```html
<span>text</span>
```

</div>
`````

<div class="code-with-caption">
<span class="code-caption">filename.html</span>

```html
<span>text</span>
```

</div>

</details>

### 行番号

`````md
<div class='code-decorate' topnum=8>

```html
<span>topnumは指定した数字から始まる</span>
```

</div>
`````

<div class='code-decorate' topnum=8>

```html
<span>topnumは指定した数字から始まる</span>
```

</div>

### 行番号 + ファイル名付き

`````md
<div class='code-decorate' topnum=9 fname='index.html'>

```html
<span>text</span>
```

</div>
`````

<br>

<div class='code-decorate' topnum=9 fname='index.html'>

```html
<span>text</span>
```

</div>

### 行番号 + ファイル名付き + 差分

`````md
<div class='code-decorate' topnum=9 fname='test.sh'>

```diff-bash
 #!/bin/bash
+ls
-date
+echo メッセージを入力して下さい。
```

</div>
`````

<br>

<div class='code-decorate' topnum=9 fname='test.sh'>

```diff-bash
 #!/bin/bash
+ls
 pwd
-date
+echo メッセージを入力して下さい。
```

</div>

### コードブロックのスクショ

````md
<div class="code-ss">
  <span class="name-tag-ss">ファイル名</span>
  <img src="image/image.png">
</div>

````

<div class="code-ss">
  <span class="name-tag-ss">ファイル名</span>
  <img src="https://user-images.githubusercontent.com/12495349/53553391-eb3ce500-3b80-11e9-98c6-63987ca201ea.png">
</div>

### 出力

`````md
<div class="output-code">

```
touch app.js
```

</div>
`````

<div class="output-code">

```
touch app.js
```

</div>

### 出力(等幅フォント)

`````md
<div class="output-code monospace">

```
             リレーション一覧
 スキーマ |   名前   |    型    |  所有者
----------+----------+----------+----------
 public   | comments | テーブル | postgres
 public   | diaries  | テーブル | postgres
(2 行)
```

</div>
`````

<div class="output-code monospace">

```
             リレーション一覧
 スキーマ |   名前   |    型    |  所有者
----------+----------+----------+----------
 public   | comments | テーブル | postgres
 public   | diaries  | テーブル | postgres
(2 行)
```

</div>

### 入力 (コンソール)

`````md
<div class="input-code">

```
touch app.js
```

</div>
`````

<div class="input-code">

```
touch app.js
```

</div>

### 入力 (コンソール) コピーボタンなし

`````md
<div class="input-code disable-copy">

```
touch app.js
```

</div>
`````

<div class="input-code disable-copy">

```
touch app.js
```

</div>

### 入力 (コンソール) copy表示

`````md
<div class="input-code lbl-copy">

```
touch app.js
```

</div>
`````

<div class="input-code lbl-copy">

```
touch app.js
```

</div>

### 入力 (コンソール) copy表示をデフォルトに

`````md
<div class="input-code lbl-copy lbl-default">

```
touch app.js
```

</div>

<div class="input-code">

```
touch app.js
```

</div>

<div class="input-code lbl-type lbl-default">

```
touch app.js
```

</div>
`````

<div class="input-code lbl-copy lbl-default">

```
touch app.js
```

</div>

<div class="input-code">

```
touch app.js
```

</div>

<div class="input-code lbl-type lbl-default">

```
touch app.js
```

</div>

### 入力 (win)

<details style="margin: 1em 0">
<summary> 詳細 </summary>

`````md
<div class="input-code-win">

```
touch app.js
```

</div>
`````

<div class="input-code-win">

```
touch app.js
```

</div>

</details>

### 入力 (mac)

<details style="margin: 1em 0">
<summary> 詳細 </summary>

`````md
<div class="input-code-mac">

```
touch app.js
```

</div>
`````

<div class="input-code-mac">

```
touch app.js
```

</div>

</details>

### 入力 (ubuntu)

<details style="margin: 1em 0">
<summary> 詳細 </summary>

`````md
<div class="input-code-ubuntu">

```
touch app.js
```

</div>
`````

<div class="input-code-ubuntu">

```
touch app.js
```

</div>

</details>

## 折り返し表示(テスト用パターン)

output-codeは、スクロール表示。それ以外は、初期が折り返し表示。  
コードブロックの親のクラスに、wrapで折り返し、scrollでスクロール表示に変更できる

### output-code

<div class="output-code">

```
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

wrapクラスを付けると、折り返し。

<div class="output-code wrap">

```
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

### input-code

<div class="input-code">

```
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

scrollクラスを付けると、スクロール。

<div class="input-code scroll">

```
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>


### 普通のコードブロック

```
touch app.js 12345678901234550912830913409702870
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

scrollクラスを付けると、スクロール。

<div class="scroll">

```
touch app.js 12345678901234550912830913409702870
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

### コードブロックのテストパターン

<details style="margin: 1em 0">
<summary> テストパターンを開く </summary>

### copy-target

<div class="copy-target">

```
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>


<div class="copy-target">

```bash
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

### 行番号ありのコードブロック

<div class='code-decorate' topnum=9>

```
touch app.js 12345678901234550912830913409702870

touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>


<div class='code-decorate' topnum=9>

```bash
touch app.js 12345678901234550912830913409702870

touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

### 行番号あり、ファイル名ありのコードブロック

<div class='code-decorate' topnum=9 fname='index.html'>

```
touch app.js 12345678901234550912830913409702870

touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

<div class='code-decorate' topnum=9 fname='index.html'>

```bash
touch app.js 12345678901234550912830913409702870

touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>


### 行番号なしのdiff

```diff
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
-touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
 touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

折り返しなしコードの場合、差分の背景色は右いっぱいまで広がる

```diff
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
 touch app.js 12345678901234550912830913409702870
```

<div class="scroll">

行番号なしのスクロール表示は背景が上手くあたらないバグは修正済み

```diff-bash
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
-touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
 touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```
</div>

```diff-bash
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
 touch app.js 12345678901234550912830913409702870
```

### 行番号ありのdiff

<div class='code-decorate' topnum=9>

```diff
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
 touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

<div class='code-decorate' topnum=9>

```diff
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
 touch app.js 12345678901234550912830913409702870
```

</div>

<div class='code-decorate' topnum=9>

```diff-bash
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
 touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

<div class='code-decorate' topnum=9>

```diff-bash
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
 touch app.js 12345678901234550912830913409702870
```

</div>

### 行番号あり、ファイル名ありのdiff

<div class='code-decorate' topnum=9 fname='index.html'>

```diff
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
 touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

<div class='code-decorate' topnum=9 fname='index.html'>

```diff
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
 touch app.js 12345678901234550912830913409702870
```

</div>

<div class='code-decorate' topnum=9 fname='index.html'>

```diff-bash
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
 touch app.js 12345678901234550912830913409702870173012983129381094710237120938109412093819238109371203710237120837108371204738739746193721
```

</div>

<div class='code-decorate' topnum=9 fname='index.html'>

```diff-bash
 touch app.js 12345678901234550912830913409702870

-touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
+touch app.js 12345678901234550912830913409702870
 touch app.js 12345678901234550912830913409702870
```

</div>

</details>

---


## Tips 新

`````md
::: tip tip-name タイトル

markdown content

```bash
touch app.js
```

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

:::
`````

::: tip tip-name タイトル

markdown content

```bash
touch app.js
```

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

:::


## Tips 旧

<details style="margin: 1em 0">
<summary> 詳細 </summary>

`````md
<div class="tip"><a name="ID"></a>
<span class="tip-title">NAME</span>

markdown content

```bash
touch app.js
```

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

</div>
`````

<div class="tip"><a name="ID"></a>
<span class="tip-title">NAME</span>

markdown content

```bash
touch app.js
```

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

</div>

</details>

## 注意 新

```md
::: notice 注意

注意書きです

:::

::: warning 警告

警告です

:::


```

```html
<div class="notice-wrapper">
<div class="notice"><span class="notice-title">注意</span>

注意書きです

</div></div>

```

::: notice 注意

注意書きです

:::

::: warning 警告

警告です

:::


## 注意 旧

<details style="margin: 1em 0">
<summary> 詳細 </summary>

`````md
<div class="notice"><a name="handle-warning"></a>

<p><b>＊注意：</b></p>

注意書きです

</div>
`````

<div class="notice"><a name="handle-warning"></a>

<p><b>＊注意：</b></p>

注意書きです

</div>

</details>

## お知らせ的なスタイル

```md
::: information VS Code タブ設定の変更のお願い

VS Code のタブ設定を変更していない方は、[こちら](../ABIKZZ02_G003/ABIKZZ02_G003.html#vscode-config-tab-size)で設定の変更をお願いします。

:::
```

::: information VS Code タブ設定の変更のお願い

VS Code のタブ設定を変更していない方は、[こちら](../ABIKZZ02_G003/ABIKZZ02_G003.html#vscode-config-tab-size)で設定の変更をお願いします。

:::

## お知らせスタイル 旧

```html
<div class="information-box">
<span class="information-box-title">VS Code タブ設定の変更のお願い</span>

VS Code のタブ設定を変更していない方は、[こちら](../ABIKZZ02_G003/ABIKZZ02_G003.html#vscode-config-tab-size)で設定の変更をお願いします。

</div>
```

<div class="information-box">
<span class="information-box-title">VS Code タブ設定の変更のお願い</span>

VS Code のタブ設定を変更していない方は、[こちら](../ABIKZZ02_G003/ABIKZZ02_G003.html#vscode-config-tab-size)で設定の変更をお願いします。

</div>

## 強調

### 下線

```
<div class="underline red">

**この Tips は、Windows を利用している方向けの Tips です。macOS をご利用の方は読み飛ばしてください。**

</div>
```

<div class="underline red">

**この Tips は、Windows を利用している方向けの Tips です。macOS をご利用の方は読み飛ばしてください。**

</div>

</div>

### 傍点

```
この Tips は、<span class="dot">Windows</span> を利用している方向けの Tips です。macOS をご利用の方は<span class="dot">読み飛ばして</span>ください。
```

この Tips は、<span class="dot">Windows</span>
 を利用している方向けの Tips です。macOS をご利用の方は<span class="dot">読み飛ばして</span>ください。

## タブUI

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr auto; grid-auto-flow: column; grid-gap: 1em">
<div>

### 2 つ組

```md
::::: tab-ui

:::: tab-content win

**win** content

::::

:::: tab-content mac

*mac* content

::::

:::::
```

</div><div>

::::: tab-ui

:::: tab-content win

**win** content

::::

:::: tab-content mac

*mac* content

::::

:::::

</div><div>

### 3 つ組

```md
::::: tab-ui

:::: tab-content win11
**win11** content
::::

:::: tab-content win10
win10 content
::::

:::: tab-content mac
*mac* content
::::

:::::
```

</div><div>

::::: tab-ui

:::: tab-content win11
**win11** content
::::

:::: tab-content win10
win10 content
::::

:::: tab-content mac
*mac* content
::::

:::::

</div></div>

#### 備考

- `tab-ui` の直下には `tab-content` 以外のコンポーネントを入れないでください。
- `tab-content` には `win`, `win10`, `win11`, `mac` のみ指定できます。
- `tab-content` の順番によらず、タブは `win`, `win10`, `win11`, `mac` の順に並びます。(つまりどの順に書いてもOK)

### タブUIのカスタマイズ

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr auto; grid-auto-flow: column; grid-gap: 1em">
<div>

```md
::::: tab-ui group=editors

:::: tab-content vim Vim
*Vim*
::::

:::: tab-content emacs Emacs
**Emacs**
::::

:::: tab-content vsc VSCode
***Visual Studio Code***
::::

:::::
```

</div><div>

::::: tab-ui group=editors

:::: tab-content vim Vim
*Vim*
::::

:::: tab-content emacs Emacs
**Emacs**
::::

:::: tab-content vsc VSCode
***Visual Studio Code***
::::

:::::

</div><div>

```md
::::: tab-ui group=editors

:::: tab-content vim 𝑽𝒊𝒎
𝑽𝒊𝒎
::::

:::: tab-content emacs Ⓔⓜⓐⓒⓢ
Ⓔⓜⓐⓒⓢ
::::

:::: tab-content vsc 𝕍𝕊ℂ𝕠𝕕𝕖
𝕍𝕚𝕤𝕦𝕒𝕝 𝕊𝕥𝕦𝕕𝕚𝕠 ℂ𝕠𝕕𝕖
::::

:::::
```

</div><div>

::::: tab-ui group=editors

:::: tab-content vim 𝑽𝒊𝒎
𝑽𝒊𝒎
::::

:::: tab-content emacs Ⓔⓜⓐⓒⓢ
Ⓔⓜⓐⓒⓢ
::::

:::: tab-content vsc 𝕍𝕊ℂ𝕠𝕕𝕖
𝕍𝕚𝕤𝕦𝕒𝕝 𝕊𝕥𝕦𝕕𝕚𝕠 ℂ𝕠𝕕𝕖
::::

:::::

</div></div>



#### 備考

- 記法: `tab-content 任意の識別ID 表示名`
- `group=` にはタブの種類を表す任意の文字列を書きます。
- 同じグループ名のタブ情報が共有されます。
  - 例えば Emacs を選ぶと他の editor グループのタブUIもすべて Emacs になります。
- group をつけない場合はデフォルトグループになります。
- デフォルトグループでは教材全体で開いているタブの情報が共有されます。
  - この作用があるため、win, win11, win10, mac が入っているタブUI以外では必ず `group=` をつけるようにしてください。

<details style="margin: 1em 0">
<summary> 旧記法のタブUI (2 つ組, 3 つ組) </summary>

### 2 つ組 (旧記法)

`````md
<div class="tab">
<div class="tablinks">
<div class="tablink active" onclick="selectTab('win')" data-tablink-name="win">Windows</div>
<div class="tablink" onclick="selectTab('mac')" data-tablink-name="mac">Mac</div>
</div>
<div class="tabcontents" data-active="win">
<div class="tabcontent">

**win** content

</div>
<div class="tabcontent">

*mac* content

</div>
</div>
</div>
`````

<div class="tab">
<div class="tablinks">
<div class="tablink active" onclick="selectTab('win')" data-tablink-name="win">Windows</div>
<div class="tablink" onclick="selectTab('mac')" data-tablink-name="mac">Mac</div>
</div>
<div class="tabcontents" data-active="win">
<div class="tabcontent">

**win** content

</div>
<div class="tabcontent">

*mac* content

</div>
</div>
</div>

### 3 つ組 (旧記法)

`````md
<div class="tab">
<div class="tablinks">
<div class="tablink triple active" onclick="selectTab('win11')" data-tablink-name="win11">Win11</div>
<div class="tablink triple" onclick="selectTab('win10')" data-tablink-name="win10">Win10</div>
<div class="tablink triple" onclick="selectTab('mac')" data-tablink-name="mac">Mac</div>
</div>
<div class="tabcontents triple" data-active="win11">
<div class="tabcontent">

**win11** content

</div>
<div class="tabcontent">

win10 content

</div>
<div class="tabcontent">

*mac* content

</div>
</div>
</div>
`````

<div class="tab">
<div class="tablinks">
<div class="tablink triple active" onclick="selectTab('win11')" data-tablink-name="win11">Win11</div>
<div class="tablink triple" onclick="selectTab('win10')" data-tablink-name="win10">Win10</div>
<div class="tablink triple" onclick="selectTab('mac')" data-tablink-name="mac">Mac</div>
</div>
<div class="tabcontents triple" data-active="win11">
<div class="tabcontent">

**win11** content

</div>
<div class="tabcontent">

win10 content

</div>
<div class="tabcontent">

*mac* content

</div>
</div>
</div>

</details>

## 画像

### キャプションなし

`````md
<!-- リンクなし-->
![](image/issue.png)

<!-- リンクあり-->
[![](image/octcat.png)](https://github.co.jp)
`````

![image](https://user-images.githubusercontent.com/12495349/53553391-eb3ce500-3b80-11e9-98c6-63987ca201ea.png)


[![](https://user-images.githubusercontent.com/12495349/53553391-eb3ce500-3b80-11e9-98c6-63987ca201ea.png)](https://user-images.githubusercontent.com/12495349/53553391-eb3ce500-3b80-11e9-98c6-63987ca201ea.png)

### キャプションあり

```md
<!-- animation gif -->
<div class="image-with-caption data-gifffer">
  <img src="image/animation.gif">
  <span class="imagecaption animation">CAPTION</span>
</div>

<!-- image -->
<div class="image-with-caption">
  <img src="image/image.png">
  <span class="imagecaption screenshot">CAPTION</span>
</div>
```

<div class="image-with-caption data-gifffer">
  <img src="https://user-images.githubusercontent.com/12495349/64776951-27231f00-d594-11e9-9789-a793e80f7603.gif">
  <span class="imagecaption animation">CAPTION</span>
</div>

<div class="image-with-caption">
  <img src="https://user-images.githubusercontent.com/12495349/53553391-eb3ce500-3b80-11e9-98c6-63987ca201ea.png">
  <span class="imagecaption screenshot">CAPTION</span>
</div>

## ポップアップ表示

```md
<div class="popup" data-btext="こちらはサンプルです">
(略)
</div>
```

<div class="popup" data-btext="こちらはサンプルです">

`md` および `html`、`コードブロック`、`コピーボタン`、`折り返しボタン`などは使えます。

popup は、html を使ってラッパで包むので、要素につけたイベント類は飛ぶ。
現時点では、コピーボタン、折り返しボタンなどのイベントは popup の後に実行されるように順番をつけること

<div class="code-decorate copy-target" fname="test.sh" topnum=1>

```bash
touch app.js
```

</div>


<div class="tip"><a name="ID"></a>
<span class="tip-title">NAME</span>

markdown content

<div class="code-decorate copy-target" fname="test.sh" topnum=1>

```bash
touch app.js
```

</div>

|  TH  |  TH  |
| ---- | ---- |
|  TD  |  TD  |
|  TD  |  TD  |

</div>

diffコードのコピーボタンの位置も正しい位置に表示される。

<div class="code-decorate copy-target" topnum=1>

```diff-bash
 touch app.js
-touch app.js 12345678901234567890123456789012345678901234567890
+touch app.js
 touch app.js
```

</div>

</div>

## 練習問題 {.practice-h2}


`````md
:::: practice-answer

***answer here***

::::
`````

<details><summary>旧記法</summary>

`````md
## 練習の答え {.practice-h2}

<a id="show-answer-button" onclick="toggleAnswer()" class="game-book-button">解いてみたので、答えを表示する</a>

<div class="answer">

***answer here***

</div>
`````

</details>

:::: practice-answer

***answer here***

::::

## テンプレートブロック

`````md

<div class="templateBlock" template="forkClone" repo="intro-curriculum-3027" branch="main-2023"></div>

`````

<div class="templateBlock" template="forkClone" repo="intro-curriculum-3027" branch="main-2023"></div>

---

`````md

<div class="templateBlock" template="cloneCommand" repo="intro-curriculum-3027" branch="main-2023" user="$GITHUB_USER"></div>

`````

<div class="templateBlock" template="cloneCommand" repo="intro-curriculum-3027" branch="main-2023" user="$GITHUB_USER"></div>

---

`````md

<div class="templateBlock" template="yarnInstall"></div>

`````

<div class="templateBlock" template="yarnInstall"></div>

---

`````md

<div class="templateBlock" template="executeNode" file="index.js"></div>

`````

<div class="templateBlock" template="executeNode" file="index.js"></div>

---

`````md


<div class="templateBlock" template="executeNodeChrome" url="http://localhost:8000"></div>

`````

<div class="templateBlock" template="executeNodeChrome" url="http://localhost:8000"></div>

---

`````md

<div class="templateBlock" template="executeNodeChromeUser" url="http://localhost:8000/posts" user="admin" pass="apple"></div>

`````

<div class="templateBlock" template="executeNodeChromeUser" url="http://localhost:8000/posts" user="admin" pass="apple"></div>

---

`````md

<div class="templateBlock" template="push" branch="main-2023"></div>

`````

<div class="templateBlock" template="push" branch="main-2023"></div>
