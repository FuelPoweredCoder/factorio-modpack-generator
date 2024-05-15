# Factorio ModPack Generate

これはFactorioのModPackを簡単に生成するツールです。最新のセーブデータで有効化されているMODをModPackとしてパッケージングしてzipファイルを作成します。
生成には`mod-list.json`が必要になりますが、これはmodsディレクトリの中にあります。modsディレクトリの場所がわからない方は`Location of mods directory`を参照してください。
具体的な使用方法は以下のとおりです。

1. `Please enter your name (or handle)`にあなたの名前もしくはハンドルネームを入力します
2. modsディレクトリの中にある`mod-list.json`を開いて内容をコピーし、`Please enter your mod-list.json`にペーストします。
3. `Process`のボタンを押すとzipファイルがダウンロードできます。
4. ダウンロードしたzipファイルをmodsディレクトリの中に移動します。
5. Factorioを起動すると作成したModPackが反映されます。Modの名前は`modpack-by-{あなたの名前}`となります。
