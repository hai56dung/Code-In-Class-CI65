import LoginScreen from "./screen/LoginScreen.js";
import RegisterScreen from "./screen/RegisterScreen.js";

let $app = document.getElementById('app');
$app.append((new LoginScreen()).render());