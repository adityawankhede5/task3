import './App.css';
import SceneComponent from 'babylonjs-hook';
import { Vector3, HemisphericLight, MeshBuilder, StandardMaterial, ArcRotateCamera,Color3, PointerDragBehavior, DynamicTexture, ActionManager, ExecuteCodeAction } from "@babylonjs/core";
import { useState } from 'react';
import Rectangle from './components/Rectangle';
import Lables from './components/Labels';

function App() {
  
  const font = "40px arial";
  
  const [scene, setScene] = useState(null);
  const [lableOptionsPositon, setLableOptionsPositon] = useState({top: 0, left: 0});
  const [selectedMesh, setSelectedMesh] = useState(null);
  
  const onSceneReady = (scene) => {      
    setScene(scene);
    scene.clearColor = Color3.FromHexString("#e5e5e5");
    new ArcRotateCamera("cam", -Math.PI / 2, Math.PI / 2, 3, new Vector3.Zero(), scene);
    scene.getEngine().getRenderingCanvas();
    new HemisphericLight("light", new Vector3(2,-1,-1), scene);
  }

  const showMeshName = (mesh) => {
    mesh.material.diffuseTexture.drawText(mesh.name, null, null, font, "black", "white", true, true);
    setTimeout(() => {
      mesh.material.diffuseTexture.drawText(mesh.name, null, null, font, "white", "white", true, true);
    },2000)
  }

  const updateMeshName = (mesh, name) => {
    mesh.name = name;
    setSelectedMesh(null);
    showMeshName(mesh);
  }

  const closeOptions = () => {
    setSelectedMesh(null);
  }
  
  const addPlane = () => {
    // CREATE PLANE
    const plane = MeshBuilder.CreatePlane("Plane", {size: 1}, scene);
    
    // ADD ABITLITY TO DRAG.
    const pointerDragBehavior = new PointerDragBehavior({dragPlaneNormal: new Vector3(0,0,1)});
    plane.addBehavior(pointerDragBehavior);
  	
    // ADD DEFAULT TEXT
    const planeTexture = new DynamicTexture("plane texture", {width:512, height:256}, scene);   
	  const planeMaterial = new StandardMaterial("plane", scene);    				
  	planeMaterial.diffuseTexture = planeTexture;
	  plane.material = planeMaterial;
    planeTexture.drawText("Plane", null, null, font, "white", "white", true, true);
    
    // ADD ACTION MANAGER TO HANDLE EVENTS
    plane.actionManager = new ActionManager(scene);

    // ADD EVENT LISTENERS
    // CLICK EVENT TO SHOW THE NAME OF THE PLANE.
    plane.actionManager.registerAction(new ExecuteCodeAction(
      ActionManager.OnPickTrigger,
      (ev) => {
        const mesh = ev.meshUnderPointer;
        showMeshName(mesh);
      }
    ))

    // DOUBLE CLICK TO SHOW THE RENAME OPTIONS.
    plane.actionManager.registerAction(new ExecuteCodeAction(
      ActionManager.OnDoublePickTrigger,
      (ev) => {
        setLableOptionsPositon({top: ev.pointerY, left: ev.pointerX});
        setSelectedMesh(ev.meshUnderPointer);
      }
    ))
  }


  return (
    <div className="main">
      {selectedMesh ? <Lables position={lableOptionsPositon} mesh={selectedMesh} updateMeshName={updateMeshName} closeOptions={closeOptions} /> : <></>}
      <div className="titleBar">
        Snaptrude
      </div>
      <div className="sceneContainer">
        <SceneComponent className="sceneComponent" antialias onSceneReady={onSceneReady} />
        
        <div className="sidecontrolContainer">
          <Rectangle addPlane={addPlane} />
        </div>
      </div>
    </div>
  );
}

export default App;
