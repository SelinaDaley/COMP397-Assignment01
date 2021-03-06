﻿// RRR SCENE
module scenes {
    export class rrrScene extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _SceneImage: createjs.Bitmap;
        private _startOverButton: objects.Button;

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add RRR Scene Image
            this._SceneImage = new createjs.Bitmap("../../Assets/images/Car.jpg");
            this.addChild(this._SceneImage);

            // add the START_OVER button to the RRRScene scene -----------------------------------------------------------------------------------------------
            this._startOverButton = new objects.Button(
                "StartOverButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._startOverButton);
           
            // START_OVER Button event listener
            this._startOverButton.on("click", this._startOverButtonClick, this);
            

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _startOverButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.INTRO;
            changeScene();
        }
    }
}