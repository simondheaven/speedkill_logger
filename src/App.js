import './App.css';

import React, {useState, useEffect} from 'react'
import AvatarFrame from './components/AvatarFrame';
import CircularProgress from './components/CircularProgress'
import {classSpecs} from './data/specs';
import {bosses} from './data/bosses'
import {generated} from './generated';
import moment from 'moment'


function App() {
  const [selectedBoss, setSelectedBoss] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClasses, setFilteredClasses] = useState(classSpecs.filter((cs,i) => ((1+i) % 3 == 0) ? true : false).map(spec => {return {id: spec.id, name: spec.overallClass, selected: true}}))

  const updateClassFilter = (overallClass) => {
    let tempfilt = [];
    for (var i=0; i<filteredClasses.length; i++){
      tempfilt[i] = filteredClasses[i];
      if(tempfilt[i].name == overallClass){
        tempfilt[i].selected = !tempfilt[i].selected
      }
    }
    setFilteredClasses(tempfilt)
  }

  const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

  const searchFilter = (rank) => {
    if(searchTerm.trim() == ""){
      return true;
    } else {
      let st = searchTerm.toLowerCase();
      if(rank.name.toLowerCase().indexOf(st) != -1){
        return true
      }
    }
    return false;
  }

  const classFilter = (rank) => {
      let classObj = classSpecs.find(cS => cS.id == rank.classID)
      let filteredClass = filteredClasses.find(fC => fC.name == classObj.overallClass);
      if(filteredClass.selected){
        return true
      }

      return false;
  }

  return (
    <div style={{backgroundImage: "url('/img/catabg2.png')", marginBottom: 0, paddingBottom: 32, minHeight: "100vh"}} className="App">
      <div style={{
        width: "100%",
        height: "166px",
        paddingTop: 16,
      }}>
        <img style={{height:150}} src="/img/catalogo.png" />
      </div>
      <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
        {
          bosses.map(boss => <div onClick={() => setSelectedBoss(boss.id)} key={"bossbutton_"+boss.id} style={{textAlign:"center", padding: 8, backgroundColor: (selectedBoss == boss.id) ? "rgba(0,0,0,0.2)" : "transparent", borderBottom: (selectedBoss == boss.id) ? "2px gold solid" : "2px transparent solid"}}>
              <img src={boss.image} />
              <p style={{textAlign:"center",color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{boss.bossName}</p>
            </div>)
        }
      </div>
      <div style={{ padding: 16, display:"grid", gridTemplateColumns: "1fr 1fr"}}>
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
          {
            classSpecs.filter((cs,i) => ((1+i) % 3 == 0) ? true : false).sort((a,b) => a.overallClass > b.overallClass ? 1 : -1)
            .map(classSpec => <div onClick={() => updateClassFilter(classSpec.overallClass)} style={{}}>
                <img style={{width: "100%", height: "auto", opacity: (filteredClasses.find(filt => filt.name == classSpec.overallClass && filt.selected)) ? 1 : 0.4}} src={classSpec.classImage} />
              </div>)
          }
        </div>
        <div style={{textAlign:"left"}}>
          <input style={{height: "90%", width:"99%", fontSize: 16, backgroundColor:"transparent", color: "white"}} value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search character..." />
        </div>
      </div>
      <div style={{padding: 16}}>
    {
      /*
      classSpecs.map(spec => <div style={{display:"grid", gridTemplateColumns:"1fr 4fr 1fr", backgroundImage: "url("+spec.specImage+")", backgroundSize:"cover", marginBottom: 16}}>
                              <AvatarFrame character={{name: "Orctavo"}} classSpec={spec} />
                              <div>-</div>
                              <CircularProgress label={"34 / 300"} value={90} title={"Rank in spec"} classSpec={spec} />
                            </div>)
                            */
    }
    {
      generated.find(entry => entry.bossID == selectedBoss).ranks.filter(rank => searchFilter(rank)).filter(rank => classFilter(rank)).sort((a,b) => a.position > b.position ? 1 : -1).map(rank => {
        const spec = classSpecs.find(cspec => cspec.id == rank.classID)
        return (
          <div style={{display:"grid", gridTemplateColumns:"1fr 4fr 1fr", backgroundImage: "url("+spec.specImage+")", backgroundSize:"cover", marginBottom: 16}}>
            <AvatarFrame character={{name: rank.name}} classSpec={spec} />
            <div style={{padding: 40}}>
              <table>
                <thead>
                  <tr>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>Avg. Item Lvl</th>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>Fight length</th>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>DPS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{color:"white", paddingRight: 80, fontSize: 24, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{Math.floor(rank.avg_item_lvl)}</td>
                    <td style={{color:"white", paddingRight: 80, fontSize: 24, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{millisToMinutesAndSeconds(rank.length)}</td>
                    <td style={{color:"white", paddingRight: 80, fontSize: 32, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{Math.round(rank.dps)}</td>
                  </tr>
                </tbody>

              </table>
            </div>
            <CircularProgress label={rank.position+" / 300"} value={(((300 - rank.position) / 300) * 100)} title={"Rank in spec"} classSpec={spec} />
          </div>
        )
      })
    }
    </div>
    </div>
  );
}

export default App;