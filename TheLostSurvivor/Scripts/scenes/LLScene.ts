// LL SCENE
module scenes {
    export class llScene extends objects.Scene {
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
            // add LL Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Hill.jpg");
            this.addChild(this._SceneImage);

            // add the LEFT button to the LLScene scene -----------------------------------------------------------------------------------------------
            this._leftButton = new objects.Button(
                "LeftButton",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._leftButton);
           
            // LEFT Button event listener
            this._leftButton.on("click", this._leftButtonClick, this);


            // add the Right button to the LLScene scene ----------------------------------------------------------------------------------------------
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
            // Switch to the LLL Scene
            scene = config.Scene.LLL_Scene;
            changeScene();
        }
        
        // RIGHT Scene Button click event handler
        private _rightButtonClick(event: createjs.MouseEvent) {
            // Switch to the LLR Scene
            scene = config.Scene.LLR_Scene;
            changeScene();
        }
    }
}