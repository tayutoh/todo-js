import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得・取得後はテキストボックス初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const createLi = document.createElement("li");

  // list-row生成
  const createListRow = document.createElement("div");
  createListRow.className = "list-row";

  // list-text生成
  const createListText = document.createElement("p");
  createListText.innerText = inputText;
  createListText.className = "list-text";

  // 完了ボタン生成
  const COMPLETE_TEXT = "完了";
  const createCompleteButton = document.createElement("button");
  createCompleteButton.innerText = COMPLETE_TEXT;
  createCompleteButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタン生成
  const DELETE_TEXT = "削除";
  const createDeleteButton = document.createElement("button");
  createDeleteButton.innerText = DELETE_TEXT;
  createDeleteButton.className = "button-delete";
  createDeleteButton.addEventListener("click", () => {
    // 押下された削除ボタンの親liを未完了リストから削除
    const deleteTarget = createDeleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 各子要素を設定
  createLi.appendChild(createListRow);
  createListRow.appendChild(createListText);
  createListRow.appendChild(createCompleteButton);
  createListRow.appendChild(createDeleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(createLi);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
