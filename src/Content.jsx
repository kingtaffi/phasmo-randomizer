//randomize pl speed, gh speed, evidence, map,
import React, { useState } from 'react'; //import useState
import './style.css'

const Content = (props) => {

    //map
    const map = ["6 Tanglewood Drive", "10 Ridgeview Court", "13 Willow Street", "42 Edgefield Road", "Camp Woodwind", "Grafton Farmhouse", "Bleasdale Farmhouse", "Maple Lodge Campsite", "Point Hope", "Prison", "Sunny Meadows Restricted", "Brownstone High School", "Sunny Meadows"];

    //player
    const Sanity = ["0%", "0%", "25%", "25%", "50%", "50%", "75%", "100%"];
    const Sanitypill = ["0","5","10","20","25","30","35","40","45","50","75"];
    const sanitydrain = ["50%","100%","150%","200%","150%","200%"];
    const sprint = ["sprint", "no sprint", "sprint", "sprint"];
    const playerspeed = ["50%", "75%", "100%", "125%", "75%", "100%", "125%", "150%"];
    const flashlight = ["yes","yes","yes","yes","yes","no"];

    //ghost
    const ghostspeed = ["50%", "75%", "100%", "125%", "150%", "75%", "100%", "125%"];
    const roamfreq = ["high", "medium", "low"];
    const changeroom = ["high", "medium", "low", "none"];
    const activitylevel = ["high", "medium", "low"];
    const eventfreq = ["high", "medium", "low"];
    const graceperiod = ["0","1","2","3","4","5"];
    const Huntdura = ["low", "medium", "high"];
    const evidende = ["3 evidence","2 evidence", "1 evidence", "No evidence"]

    //contract
    const setuptime = ["0","30","60","0","30","60","0","30","60","120","180","240","300"];
    const weather = ["random", "light rain", "heavy rain", "snow", "windy", "clear", "fog", "sunrise"];
    const doorstart = ["high", "medium", "low", "none"];
    const hideplace = ["very high","high", "medium", "low", "none"];
    const sanitymonitor = ["on","off"];
    const activitymonitor = ["on","off"];
    const fusebox = ["on","off"];
    const fuseboxvisi = ["on", "off"];
    const curseditems = ["2","1","0"];
    
    //map
    const [Map, setMap] = useState(map);
    const [MapCount, setMapCount] = useState(12);
    const [MapNumber, setMapNumber] = useState(0);
    const [mapTanglewood, setTanglewood] = useState(true);
    const [mapRidgeview, setRidgeview] = useState(true);
    const [mapWillowStreet, setWillowStreet] = useState(true);
    const [mapEdgefield, setEdgefield] = useState(true);
    const [mapCamp, setCamp] = useState(true);
    const [mapGrafton, setGrafton] = useState(true);
    const [mapBleasdale, setBleasdale] = useState(true);
    const [mapCampsite, setCampsite] = useState(true);
    const [mapHope, setHope] = useState(true);
    const [mapPrison, setPrison] = useState(true);
    const [mapRestricted, seRestricted] = useState(true);
    const [mapBrownstone, setBrownstone] = useState(true);
    const [mapMeadows, setMeadows] = useState(true);
    //player
    const [sanity, setSanity] = useState(0);
    const [pill, setPill] = useState(0)
    const [sanidrain, setsanidrain] = useState(0);
    const [sprint1, setSprint] = useState(0);
    const [plspeed, setPlspeed] = useState(0);
    const [fleshlight, setflashlight] = useState(0);
    //ghost
    const [ghspeed, setghspeed] = useState(0);
    const [roamfrequ, setroamfreq] = useState(0);
    const [changeroomfreq, setchangeroom] = useState(0);
    const [actilevel, setactilevel] = useState(0);
    const [eventfrequ, seteventfreq] = useState(0);
    const [graceperi, setgraceperi] = useState(0);
    const [huntdura, sethuntdura] = useState(0);
    const [evidence, setEvidence] = useState(0);
    //contract
    const [setuptimer, settime] = useState(0);
    const [weatherr, setweather] = useState(0);
    const [doorstarts, setdoorstart] = useState(0);
    const [hideplaces, sethideplace] = useState(0);
    const [sanimoni, setsanimoni] = useState(0);
    const [actimoni, setactimoni] = useState(0);
    const [fusebox1, setfusebox] = useState(0);
    const [fusevisi, setfusevisi] = useState(0);
    const [curseditem, setcurseditem] = useState(0);

    const randomizeNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const randomize = () => {
    
    //map
    setMapNumber(randomizeNum(0,MapCount))
    //player
    setSanity(randomizeNum(0,7))
    setPill(randomizeNum(0,10))
    setsanidrain(randomizeNum(0,5))
    setSprint(randomizeNum(0,3))
    setPlspeed(randomizeNum(0,7))
    setflashlight(randomizeNum(0,5))
    //ghost
    setghspeed(randomizeNum(0,7))
    setroamfreq(randomizeNum(0,2))
    setchangeroom(randomizeNum(0,3))
    setactilevel(randomizeNum(0,2))
    seteventfreq(randomizeNum(0,2))
    setgraceperi(randomizeNum(0,5))
    sethuntdura(randomizeNum(0,2))
    setEvidence(randomizeNum(0,3))
    //contract
    settime(randomizeNum(0,12))
    setweather(randomizeNum(0,7))
    setdoorstart(randomizeNum(0,3))
    sethideplace(randomizeNum(0,4))
    setsanimoni(randomizeNum(0,1))
    setactimoni(randomizeNum(0,1))
    setfusebox(randomizeNum(0,1))
    setfusevisi(randomizeNum(0,1))
    setcurseditem(randomizeNum(0,2))
    }
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_checkbox

    const MapSelection = (mapname) => {
        //console.log(Map);
        //small maps
        if(mapname === "6 Tanglewood Drive"){
            //console.log(mapname);
            if(mapTanglewood === true) {
                MapRemove(mapname);
                setTanglewood(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setTanglewood(true);
                //console.log("map added");
            }
        }
        if(mapname === "10 Ridgeview Court"){
            //console.log(mapname);
            if(mapRidgeview === true) {
                MapRemove(mapname);
                setRidgeview(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setRidgeview(true);
                //console.log("map added");
            }
        }
        if(mapname === "13 Willow Street"){
            //console.log(mapname);
            if(mapWillowStreet === true) {
                MapRemove(mapname);
                setWillowStreet(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setWillowStreet(true);
               //console.log("map added");
            }
        }
        if(mapname === "42 Edgefield Road"){
            //console.log(mapname);
            if(mapEdgefield === true) {
                MapRemove(mapname);
                setEdgefield(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setEdgefield(true);
                //console.log("map added");
            }
        }
        if(mapname === "Camp Woodwind"){
            //console.log(mapname);
            if(mapCamp === true) {
                MapRemove(mapname);
                setCamp(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setCamp(true);
                //console.log("map added");
            }
        }
        if(mapname === "Grafton Farmhouse"){
            //console.log(mapname);
            if(mapGrafton === true) {
                MapRemove(mapname);
                setGrafton(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setGrafton(true);
                //console.log("map added");
            }
        }
        //medium maps
        if(mapname === "Bleasdale Farmhouse"){
            //console.log(mapname);
            if(mapBleasdale === true) {
                MapRemove(mapname);
                setBleasdale(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setBleasdale(true);
                //console.log("map added");
            }
        }
        if(mapname === "Maple Lodge Campsite"){
            //console.log(mapname);
            if(mapCampsite === true) {
                MapRemove(mapname);
                setCampsite(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setCampsite(true);
                //console.log("map added");
            }
        }
        if(mapname === "Point Hope"){
            //console.log(mapname);
            if(mapHope === true) {
                MapRemove(mapname);
                setHope(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setHope(true);
                //console.log("map added");
            }
        }
        if(mapname === "Prison"){
            //console.log(mapname);
            if(mapPrison === true) {
                MapRemove(mapname);
                setPrison(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setPrison(true);
                //console.log("map added");
            }
        }
        if(mapname === "Sunny Meadows Restricted"){
            //console.log(mapname);
            if(mapRestricted === true) {
                MapRemove(mapname);
                seRestricted(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                seRestricted(true);
                //console.log("map added");
            }
        }
        //large maps
        if(mapname === "Brownstone High School"){
           // console.log(mapname);
            if(mapBrownstone === true) {
                MapRemove(mapname);
                setBrownstone(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setBrownstone(true);
                //console.log("map added");
            }
        }
        if(mapname === "Sunny Meadows"){
            //console.log(mapname);
            if(mapMeadows === true) {
                MapRemove(mapname);
                setMeadows(false);
                //console.log("map removed");
            }
            else {
                MapAdd(mapname);
                setMeadows(true);
                //console.log("map added");
            }
        }
    } 

    const MapAdd = (mapname) => {
        let newmapcount = MapCount + 1;
        setMap( Map => [...Map, mapname]);
        setMapCount(newmapcount)
    }

    const MapRemove = (mapname) => {
        let newmapcount = MapCount - 1;
        let newmaps = Map.filter((maps) => maps !== mapname);
        setMap(newmaps);
        setMapCount(newmapcount)
    }

    return (
        <div className='content'>
            <div className='header'> 
                <h1>Phasmo Randomizer</h1>
            </div>
            <h1>Map selection</h1>
            <div className='map-container' //small / medium / large selection
            >
                <div className="map-item">
                    <label className="container">6 Tanglewood Drive
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("6 Tanglewood Drive")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">10 Ridgeview Court
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("10 Ridgeview Court")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">13 Willow Street
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("13 Willow Street")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">42 Edgefield Road
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("42 Edgefield Road")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Camp Woodwind
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Camp Woodwind")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Grafton Farmhouse
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Grafton Farmhouse")}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="map-item">
                    <label className="container">Bleasdale Farmhouse
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Bleasdale Farmhouse")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Maple Lodge Campsite
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Maple Lodge Campsite")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Point Hope
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Point Hope")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Prison
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Prison")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Sunny Meadows Restricted
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Sunny Meadows Restricted")}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="map-item">
                    <label className="container">Brownstone High School
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Brownstone High School")}/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Sunny Meadows
                        <input type="checkbox" defaultChecked="checked" onClick={() => MapSelection("Sunny Meadows")}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <button className='randomize' onClick={() => randomize()}>randomize</button>
            <h1>Map: {Map[MapNumber]}</h1>
            <div className='flex-container'>
                <div className='flex-item'>
                    <h1>Player</h1>
                    <h2>Sanity: {Sanity[sanity]}</h2>
                    <h2>Sanity pill: {Sanitypill[pill]}</h2>
                    <h2>Sanity drain:{sanitydrain[sanidrain]} </h2>
                    <h2>Sprint: {sprint[sprint1]}</h2>
                    <h2>Player speed: {playerspeed[plspeed]}</h2>
                    <h2>Flashlight: {flashlight[fleshlight]}</h2>
                </div>
                <div className='flex-item'>
                    <h1>Ghost</h1>
                    <h2>Ghost speed: {ghostspeed[ghspeed]}</h2>
                    <h2>Roaming frequency: {roamfreq[roamfrequ]}</h2>
                    <h2>Changing favorite room: {changeroom[changeroomfreq]}</h2>
                    <h2>Activity level: {activitylevel[actilevel]}</h2>
                    <h2>Event frequency: {eventfreq[eventfrequ]}</h2>
                    <h2>Grace period: {graceperiod[graceperi]}</h2>
                    <h2>Hunt duration: {Huntdura[huntdura]}</h2>
                    <h2>Evidence: {evidende[evidence]}</h2>
                </div>
                <div className='flex-item'>
                    <h1>Contract</h1>
                    <h2>Setup time: {setuptime[setuptimer]}</h2>
                    <h2>Weather: {weather[weatherr]}</h2>
                    <h2>Doors open at start: {doorstart[doorstarts]}</h2>
                    <h2>Hiding places: {hideplace[hideplaces]}</h2>
                    <h2>Sanity monitor: {sanitymonitor[sanimoni]}</h2>
                    <h2>Activity monitor: {activitymonitor[actimoni]}</h2>
                    <h2>Fusebox: {fusebox[fusebox1]}</h2>
                    <h2>Fusebox visibility on map: {fuseboxvisi[fusevisi]}</h2>
                    <h2>Cursed items: {curseditems[curseditem]}</h2>
                </div>
            </div>
        </div>
    )
}

export default Content