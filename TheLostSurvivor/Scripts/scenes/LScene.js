var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// L SCENE
var scenes;
(function (scenes) {
    var lScene = (function (_super) {
        __extends(lScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function lScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        lScene.prototype.start = function () {
            // add L Scene Image
            this._lSceneImage = new createjs.Bitmap("../../Assets/images/Food.jpg");
            this.addChild(this._lSceneImage);
            // add the LEFT button to the LScene scene -----------------------------------------------------------------------------------------------
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the Right button to the LScene scene ----------------------------------------------------------------------------------------------
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        lScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Scene Button click event handler
        lScene.prototype._leftButtonClick = function (event) {
            // Switch to the LL Scene
            scene = config.Scene.LL_Scene;
            changeScene();
        };
        // RIGHT Scene Button click event handler
        lScene.prototype._rightButtonClick = function (event) {
            // Switch to the LR Scene
            scene = config.Scene.LR_Scene;
            changeScene();
        };
        return lScene;
    })(objects.Scene);
    scenes.lScene = lScene;
})(scenes || (scenes = {}));
