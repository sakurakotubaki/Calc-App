import { useState } from "react";
import { Box, ChakraProvider, Input } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState<number>(0);

  //  入力フォームのボタンの機能を使う関数
  const handleChangeCalc = (e: any) => {
    // useStateの第二引数のメソッドを書く
    // この中に引数[e]が入ってきて保存される
    setCount(e.target.value);
  };

  return (
    <ChakraProvider>
      <Box className="App">
        <Box mt={10} mb={5} ml={5} p={5} w={300} bg='orange.200'>
        <Box mb={3}>1KB×入力された数値で計算を行う</Box>
        <Box mb={3}>1KBは1024バイトです</Box>
        <Box mb={3}>{count}KBは</Box>
        <Box mb={3}>{count * 1024}バイトです</Box>
        </Box>
        <FormControl>
          <FormLabel ml={5} color='red.600'> 数値を入力:</FormLabel>
          <Input w={200} ml={5} type="text" name="name" value={count} onChange={handleChangeCalc} />
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}

export default App;
