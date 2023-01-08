import { ChatGPTAPIBrowser } from 'chatgpt'


const api = new ChatGPTAPIBrowser({
  email: 'rainman_free@protonmail.com',
  password: '16uph306'
})
await api.initSession()

const result = await api.sendMessage('compinit:503: no such file or directory: /usr/share/zsh/vendor-completions/_docker')
console.log(result.response)
