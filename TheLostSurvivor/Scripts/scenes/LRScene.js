var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LL SCENE
var scenes;
(function (scenes) {
    var lrScene = (function (_super) {
        __extends(lrScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function lrScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        lrScene.prototype.start = function () {
            // add LR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Cave.jpg");
            this.addChild(this._SceneImage);
            // add the LEFT button to the LRScene scene -----------------------------------------------------------------------------------------------
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the Right button to the LRScene scene ----------------------------------------------------------------------------------------------
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        lrScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Scene Button click event handler
        lrScene.prototype._leftButtonClick = function (event) {
            // Switch to the LRL Scene
            scene = config.Scene.LRL_Scene;
            changeScene();
        };
        // RIGHT Scene Button click event handler
        lrScene.prototype._rightButtonClick = function (event) {
            // Switch to the LRR Scene
            scene = config.Scene.LRR_Scene;
            changeScene();
        };
        return lrScene;
    })(objects.Scene);
    scenes.lrScene = lrScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=LRScene.js.map