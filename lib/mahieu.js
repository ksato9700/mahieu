(function() {
  var GameMain,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  GameMain = (function(_super) {

    __extends(GameMain, _super);

    function GameMain() {
      GameMain.__super__.constructor.apply(this, arguments);
    }

    GameMain.prototype.initialize = function(params) {
      var ajax,
        _this = this;
      GameMain.__super__.initialize.call(this, params);
      ajax = new arc.Ajax();
      ajax.addEventListener(arc.Event.COMPLETE, function() {
        var mc;
        mc = new arc.display.JSONMovieClip(ajax.getResponseJSON());
        console.log(mc);
        return _this.addChild(mc);
      });
      return ajax.load('sample.json');
    };

    GameMain.prototype.update = function() {};

    return GameMain;

  })(arc.Game);

  window.addEventListener('DOMContentLoaded', function(e) {
    var system;
    system = new arc.System(320, 320, 'canvas', false, true);
    system.setGameClass(GameMain, {
      hp: 100,
      mp: 100
    });
    system.addEventListener(arc.Event.PROGRESS, function(e) {
      return console.log(e.loaded, e.total);
    });
    system.addEventListener(arc.Event.COMPLETE, function() {
      return console.log('loaded');
    });
    return system.load(['sample.png']);
  }, false);

}).call(this);
