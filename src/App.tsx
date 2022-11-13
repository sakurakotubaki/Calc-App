import { useState } from 'react'

function App() {
  const [count, setCount] = useState<number>(0)

  //  入力フォームのボタンの機能を使う関数
  const handleChangeCalc = (e: any) => {
    // useStateの第二引数のメソッドを書く
    // この中に引数[e]が入ってきて保存される
    setCount(e.target.value);
  };

  return (
    <div className="App">
      <p>1KB❎入力された数値で計算を行う</p>
      <p>1KBは1024バイトです</p>
      <p>{count}KBは</p>
      <p>{count * 1024}バイトです</p>
      <form>
        <label>
          数値を入力:
          {/* inputタグに、入力された値を保存する関数を書く */}
          <input type="text" name="name" value={count}
          onChange={handleChangeCalc} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
