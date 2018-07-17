const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  const app = express()

  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.post('/login', (req, res) => {
  if (req.body.username === 'demo@test.com' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }

    return res.json({ username: 'demo' })
  }

  res.status(401).json({ message: 'Bad Credentials' })
})

router.post('/logout', (req, res) => {
  delete req.session.authUser

  return res.json({ ok: true })
})

module.exports = {
  path: '/api',
  handler: router
}
