import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得・取得後はテキストボックス初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 追加する要素の生成
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する要素の生成
const createIncompleteList = (text) => {
  // li生成
  const createLi = document.createElement("li");

  // list-row生成
  const createListRow = document.createElement("div");
  createListRow.className = "list-row";

  // list-text生成
  const createListText = document.createElement("p");
  createListText.innerText = text;
  createListText.className = "list-text";

  // 完了ボタン生成
  const COMPLETE_TEXT = "完了";
  const createCompleteButton = document.createElement("button");
  createCompleteButton.innerText = COMPLETE_TEXT;
  createCompleteButton.addEventListener("click", () => {
    // 押下された完了ボタンの祖先要素li取得
    const completeTarget = createCompleteButton.closest("li");
    // 押下された完了ボタンの親liを未完了リストから削除
    deleteFromIncompleteList(completeTarget);

    /**
     * Pattern1
     * 完了・削除ボタンを除却し戻すボタンを生成する場合
     */
    // 押下された完了ボタンの親liを完了リストへ移動
    document.getElementById("complete-list").appendChild(completeTarget);
    // 押下された完了ボタンの親要素list-row取得
    const completeParentTarget = createCompleteButton.parentNode;
    // 戻すボタン生成
    const RETURN_TEXT = "戻す";
    const createUndoButton = document.createElement("button");
    createUndoButton.innerText = RETURN_TEXT;
    createUndoButton.addEventListener("click", () => {
      // 押下された戻るボタンの親liを完了リストから削除
      const deleteTarget = createUndoButton.closest("li");
      document.getElementById("complete-list").removeChild(deleteTarget);

      // TODOのテキスト取得
      const todoText = createUndoButton.parentNode.firstElementChild.innerText;
      createIncompleteList(todoText);
    });
    completeParentTarget.appendChild(createUndoButton);

    // 押下された完了ボタンの次にある削除ボタンを削除
    createCompleteButton.nextSibling.remove();
    // 押下された完了ボタンを削除
    createCompleteButton.remove();

    /**
     * Pattern2
     * リストの中身を初期化してから完了用のDOMを生成する場合
     */
    // // 完了リストに追加する親要素list-row取得
    // const completeParentTarget = createCompleteButton.parentNode;
    // // TODOのテキスト取得
    // const todoText = completeParentTarget.firstElementChild.innerText;

    // // list-row以下の内容を初期化
    // completeTarget.firstChild.textContent = null;

    // // list-text生成
    // const createListText = document.createElement("p");
    // createListText.innerText = todoText;
    // createListText.className = "list-text";

    // // 戻すボタン生成
    // const UNDO_TEXT = "戻す";
    // const createUndoButton = document.createElement("button");
    // createUndoButton.innerText = UNDO_TEXT;
    // createUndoButton.addEventListener("click", () => {
    //   // 押下された戻るボタンの親liを完了リストから削除
    //   const deleteTarget = createUndoButton.closest("li");
    //   document.getElementById("complete-list").removeChild(deleteTarget);

    //   // TODOのテキスト取得
    //   const todoText = createUndoButton.parentNode.firstElementChild.innerText;
    //   createIncompleteList(todoText);
    // });

    // // list-rowに各要素を生成
    // completeTarget.firstChild.appendChild(createListText);
    // completeTarget.firstChild.appendChild(createUndoButton);

    // // 完了リストに追加
    // document.getElementById("complete-list").appendChild(completeTarget);
  });

  // 削除ボタン生成
  const DELETE_TEXT = "削除";
  const createDeleteButton = document.createElement("button");
  createDeleteButton.innerText = DELETE_TEXT;
  createDeleteButton.className = "button-delete";
  createDeleteButton.addEventListener("click", () => {
    // 押下された削除ボタンの親liを未完了リストから削除
    const deleteTarget = createDeleteButton.closest("li");
    deleteFromIncompleteList(deleteTarget);
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
