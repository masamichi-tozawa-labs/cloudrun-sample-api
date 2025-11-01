import express from 'express'

// Cloud Run: Secret ManagerからENV_JSONを読み込んで環境変数に展開
if (process.env.ENV_JSON) {
  try {
    const envData = JSON.parse(process.env.ENV_JSON)
    Object.assign(process.env, envData)
    console.log('Loaded environment variables from ENV_JSON')
  } catch (error) {
    console.error('Failed to parse ENV_JSON:', error)
  }
}

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send(`Hello World! ${process.env.ENV_JSON}`)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
