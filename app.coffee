#
# Copyright 2013 Kenichi Sato <ksato9700@gmail.com>
# 
express = require 'express'
app = express()

app.configure ->
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'jade'
  app.use express.static __dirname + '/public'

app.get '/', (req, res)->
  res.render 'index'

port = process.env.PORT || 5000
app.listen port, ->
  console.log "Listening on #{port}"
