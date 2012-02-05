class GameMain extends arc.Game
  initialize: (params)->
    super params
    ajax = new arc.Ajax()
    ajax.addEventListener arc.Event.COMPLETE, =>
      mc = new arc.display.JSONMovieClip ajax.getResponseJSON()
      console.log mc
      @addChild mc
    ajax.load 'sample.json'

  update: ->

window.addEventListener 'DOMContentLoaded', (e)->
  system = new arc.System 320, 320, 'canvas', false, true
  system.setGameClass GameMain,
    hp:100
    mp:100

  system.addEventListener arc.Event.PROGRESS, (e)->
    console.log e.loaded, e.total

  system.addEventListener arc.Event.COMPLETE, ->
    console.log 'loaded'

  system.load ['sample.png']

, false
