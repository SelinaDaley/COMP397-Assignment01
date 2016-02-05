var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.INTRO = 0;
        //public static LEFT_CAVE: number = 1;
        //public static RIGHT_CAVE: number = 2;
        Scene.L_Scene = 1;
        Scene.R_Scene = 2;
        Scene.LL_Scene = 3;
        Scene.LR_Scene = 4;
        Scene.RL_Scene = 5;
        Scene.RR_Scene = 6;
        Scene.LLL_Scene = 7;
        Scene.LLR_Scene = 8;
        Scene.LRL_Scene = 9;
        Scene.LRR_Scene = 10;
        Scene.RLL_Scene = 11;
        Scene.RLR_Scene = 12;
        Scene.RRL_Scene = 13;
        Scene.RRR_Scene = 14;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
})(config || (config = {}));
