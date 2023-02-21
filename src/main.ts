import App from './App'
import router from './routes/index'

// index.html 파일의 div#root
const root = document.querySelector("#root")
// 선택적 체이닝 사용
root?.append(new App().el)

router()