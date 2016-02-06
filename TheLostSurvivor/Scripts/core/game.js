/// <reference path = "_reference.ts" />
// global variables
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var intro;
var lscene;
var rscene;
var llscene;
var lrscene;
var rlscene;
var rrscene;
var lllscene;
var llrscene;
var lrlscene;
var lrrscene;
var rllscene;
var rlrscene;
var rrlscene;
var rrrscene;
var leftCave;
var rightCave;
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.INTRO;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.INTRO:
            // show the MENU scene
            stage.removeAllChildren();
            intro = new scenes.Intro();
            currentScene = intro;
            console.log("Starting INTRO Scene");
            break;
        case config.Scene.L_Scene:
            // show the L scene
            stage.removeAllChildren();
            lscene = new scenes.lScene();
            currentScene = lscene;
            console.log("Starting L Scene");
            break;
        case config.Scene.R_Scene:
            // show the R scene
            stage.removeAllChildren();
            rscene = new scenes.rScene();
            currentScene = rscene;
            console.log("Starting R Scene");
            break;
        case config.Scene.LL_Scene:
            // show the LL scene
            stage.removeAllChildren();
            llscene = new scenes.llScene();
            currentScene = llscene;
            console.log("Starting LL Scene");
            break;
        case config.Scene.LR_Scene:
            // show the LR scene
            stage.removeAllChildren();
            lrscene = new scenes.lrScene();
            currentScene = lrscene;
            console.log("Starting LR Scene");
            break;
        case config.Scene.RL_Scene:
            // show the RL scene
            stage.removeAllChildren();
            rlscene = new scenes.rlScene();
            currentScene = rlscene;
            console.log("Starting RL Scene");
            break;
        case config.Scene.RR_Scene:
            // show the RR scene
            stage.removeAllChildren();
            rrscene = new scenes.rrScene();
            currentScene = rrscene;
            console.log("Starting RR Scene");
            break;
        case config.Scene.LLL_Scene:
            // show the LLL scene
            stage.removeAllChildren();
            lllscene = new scenes.lllScene();
            currentScene = lllscene;
            console.log("Starting LLL Scene");
            break;
        case config.Scene.LLR_Scene:
            // show the LLR scene
            stage.removeAllChildren();
            llrscene = new scenes.llrScene();
            currentScene = llrscene;
            console.log("Starting LLR Scene");
            break;
        case config.Scene.LRL_Scene:
            // show the LRL scene
            stage.removeAllChildren();
            lrlscene = new scenes.lrlScene();
            currentScene = lrlscene;
            console.log("Starting LRL Scene");
            break;
        case config.Scene.LRR_Scene:
            // show theLRLR scene
            stage.removeAllChildren();
            lrrscene = new scenes.lrrScene();
            currentScene = lrrscene;
            console.log("Starting LRR Scene");
            break;
        case config.Scene.RLL_Scene:
            // show the RLL scene
            stage.removeAllChildren();
            rllscene = new scenes.rllScene();
            currentScene = rllscene;
            console.log("Starting RLL Scene");
            break;
        case config.Scene.RLR_Scene:
            // show the RLR scene
            stage.removeAllChildren();
            rlrscene = new scenes.rlrScene();
            currentScene = rlrscene;
            console.log("Starting RLR Scene");
            break;
        case config.Scene.RRL_Scene:
            // show the RRL scene
            stage.removeAllChildren();
            rrlscene = new scenes.rrlScene();
            currentScene = rrlscene;
            console.log("Starting RRL Scene");
            break;
        case config.Scene.RRR_Scene:
            // show the RRR scene
            stage.removeAllChildren();
            rrrscene = new scenes.rrrScene();
            currentScene = rrrscene;
            console.log("Starting RRR Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map