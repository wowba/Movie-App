import App from './App'
import router from './routes/index'

// index.html νμΌμ div#root
const root = document.querySelector("#root")
root.append(new App().el)

router()