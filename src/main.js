import App from './App'
import router from './routes/index'

// index.html 파일의 div#root
const root = document.querySelector("#root")
root.append(new App().el)

router()