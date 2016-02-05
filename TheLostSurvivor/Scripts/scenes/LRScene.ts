// LL SCENE
module scenes {
    export class lrScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _SceneImage: createjs.Bitmap;
        private _leftButton: objects.Button;
        private _rightButton: objects.Button;

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add LR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Cave.jpg");
            this.addChild(this._SceneImage);

            // add the LEFT button to the LRScene scene -----------------------------------------------------------------------------------------------
            this._leftButton = new objects.Button(
                "LeftButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
           
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);


            // add the Right button to the LRScene scene ----------------------------------------------------------------------------------------------
            this._rightButton = new objects.Button(
                "RightButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._rightButton);
            
            // RIGHT Button event listener
            this._rightButton.on("click", this._rightButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT Scene Button click event handler
        private _leftButtonClick(event: createjs.MouseEvent) {
            // Switch to the LRL Scene
            scene = config.Scene.LRL_Scene;
            changeScene();
        }
        
        // RIGHT Scene Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            // Switch to the LRR Scene
            scene = config.Scene.LRR_Scene;
            changeScene();
        }
    }
}