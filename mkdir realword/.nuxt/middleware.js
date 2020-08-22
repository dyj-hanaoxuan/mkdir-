const middleware = {}

middleware['authenticated'] = require('..\\middleware\\authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['notAuthticated'] = require('..\\middleware\\notAuthticated.js')
middleware['notAuthticated'] = middleware['notAuthticated'].default || middleware['notAuthticated']

export default middleware
