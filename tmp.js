// 擬似モデル（変数処理）
//本来は送らせてきたデータを精査し、問題なければDBにぶっこむというとこまでやる
var model = {
  title : "テンプレートエンジン作ってみた",
  description : "ようこそテンプレートエンジンの世界へ",
  hoge : "ほげ！"
};

// 擬似ビュー
var view = "<title>{{title}}</title>";

// 擬似コントローラー
// モデルから必要なだけのデータを設定しなければならない
var translate = function (view, model) {
  for (key in model) {
    var re = new RegExp('{{' + key + '}}', 'g');
    var check = re.test(view);
    if (check) {
      view = view.replace(re, model[key]);
    };
  };
  return view;
};

// 出力（いわゆるルート）
// 本来であれば、リクエストされたときのURLからビューと必要なモデルを判定しなければならない
console.log(translate(view, model));