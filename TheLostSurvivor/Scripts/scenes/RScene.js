var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// R SCENE
var scenes;
(function (scenes) {
    var rScene = (function (_super) {
        __extends(rScene, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function rScene() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        rScene.prototype.start = function () {
            // add R Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Walk.jpg");
            this.addChild(this._SceneImage);
            // add the LEFT button to the RScene scene -----------------------------------------------------------------------------------------------
            this._leftButton = new objects.Button("LeftButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);
            // add the Right button to the RScene scene ----------------------------------------------------------------------------------------------
            this._rightButton = new objects.Button("RightButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        rScene.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT Scene Button click event handler
        rScene.prototype._leftButtonClick = function (event) {
            // Switch to the RL Scene
            scene = config.Scene.RL_Scene;
            changeScene();
        };
        // RIGHT Scene Button click event handler
        rScene.prototype._rightButtonClick = function (event) {
            // Switch to the RR Scene
            scene = config.Scene.RR_Scene;
            changeScene();
        };
        return rScene;
    })(objects.Scene);
    scenes.rScene = rScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=RScene.js.map