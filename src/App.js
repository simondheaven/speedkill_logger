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
  const [results, setResults] = useState([])
  const [pagination, setPagination] = useState(0)
  const [showAllPageNumbers, setShowAllPageNumbers] = useState(false)
  const [paginationColumns, setPaginationColumns] = useState("1fr")
  const [selectingSpecs, setSelectingSpecs] = useState(false);
  const [sortType, setSortType] = useState("RANK");
  const [filteredClasses, setFilteredClasses] = useState(classSpecs.map(spec => {return {id: spec.id, name: spec.overallClass, selected: true}}))
  const audio = new Audio("/sounds/arrenjinsardamiyjd.ogg");
  const updateClassFilter = (overallClass) => {
    let tempfilt = [];
    let ofClass = [];
    for (var i=0; i<filteredClasses.length; i++){
      tempfilt[i] = filteredClasses[i];

      if(tempfilt[i].name == overallClass){
        ofClass.push({index: i, value:tempfilt[i].selected});
        //tempfilt[i].selected = !tempfilt[i].selected
      }
    }
    let isOn = false;
    for(var i=0; i<ofClass.length; i++){
      if(ofClass[i].value){
        isOn =true;
      }
    }
    for(var i=0; i<ofClass.length; i++){
      tempfilt[ofClass[i].index].selected = !isOn;
    }
    setFilteredClasses(tempfilt)
  }
  const updateSpecFilter = (id) => {
    let tempFilt = [];
    for (var i=0; i<filteredClasses.length; i++){
      tempFilt[i] = filteredClasses[i];
      if(tempFilt[i].id == id){
        tempFilt[i].selected = !tempFilt[i].selected
      }
    }
    setFilteredClasses(tempFilt)
  }

  const sortByRank = (a,b) => a.position == b.position ? a.name > b.name ? 1 : -1 : a.position > b.position ? 1 : -1;

  const sortByDPS = (a,b) => parseInt(a.dps) >= parseInt(b.dps) ? -1 : 1

  useEffect(()=>{
    let depth = []
    let entireList = generated.find(entry => entry.bossID == selectedBoss).ranks.filter(
      rank => searchFilter(rank)
    ).filter(
      rank => classFilter(rank)
    ).sort(sortType == "RANK" ? sortByRank : sortByDPS);
    let paginated = []
    let pcs = ""
    for(var i=0; i<entireList.length; i++){
      paginated.push(entireList[i]);
      if(i> 0 && i%9 == 0){
        depth.push(paginated);
        paginated = [];
      }
    }
    for(var i=0; i<depth.length; i++){
      if(i<31){
        pcs += " 1fr"
      }
    }
    if(paginated.length > 0){
      depth.push(paginated)
    }
    if(depth.length == 0){
      setPagination(0)
    } else if(pagination + 1 > depth.length){
      setPagination( depth.length -1)
    }
    setPaginationColumns(pcs.substr(1))
    setResults(depth)
  },[searchTerm, selectedBoss, filteredClasses, sortType])

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
      if(rank.guild.toLowerCase().indexOf(st) != -1){
        return true;
      }
    }
    return false;
  }

  const classFilter = (rank) => {
      let spec = null;
      for(var i=0; i<classSpecs.length; i++){
        if(classSpecs[i].bossKillUrlSuffix.indexOf(rank.subspec) != -1 && classSpecs[i].classImage == classSpecs.find(cs => cs.id == rank.classID).classImage){
          spec = classSpecs[i]
        }
      }
      let filteredClass = filteredClasses.find(fC => fC.id == spec.id);
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
        <img onClick={() => audio.play()} style={{height:150, cursor: "pointer"}} src="/img/catalogo.png" />
      </div>
      <div style={{paddingHorizontal: 24}}>
        <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
          {
            bosses.map(boss => <div onClick={() => setSelectedBoss(boss.id)} key={"bossbutton_"+boss.id} style={{textAlign:"center", padding: 8, backgroundColor: (selectedBoss == boss.id) ? "rgba(0,0,0,0.2)" : "transparent", borderBottom: (selectedBoss == boss.id) ? "2px gold solid" : "2px transparent solid"}}>
                <img src={boss.image} />
                <p style={{textAlign:"center",color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{boss.bossName}</p>
              </div>)
          }
        </div>
        <div style={{ padding: 16, display:"grid", gridTemplateColumns: "1fr 1fr", marginBottom: 16}}>
          <div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
            {
              classSpecs.filter((cs,i) => ((1+i) % 3 == 0) ? true : false).sort((a,b) => a.overallClass > b.overallClass ? 1 : -1)
              .map(classSpec => <div onClick={() => updateClassFilter(classSpec.overallClass)} style={{}}>
                  <img style={{width: "100%", height: "auto", opacity: (filteredClasses.find(filt => filt.name == classSpec.overallClass && filt.selected)) ? 1 : 0.4}} src={classSpec.classImage} />
                </div>)
            }
          </div>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"}}>
          {
            classSpecs.filter((cs,i) => ((1+i) % 3 == 0) ? true : false).sort((a,b) => a.overallClass > b.overallClass ? 1 : -1)
            .map(classSpec => <div onClick={() => {setSelectingSpecs((selectingSpecs == classSpec.overallClass) ? false : classSpec.overallClass)}} style={{backgroundImage: 'url("/img/buttonback.png")', backgroundSize:"cover", cursor:"pointer"}}>
                <p style={{color:"white", fontSize:10,textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)", marginTop: 1}}>Specs</p>
              </div>)
          }
          </div>
          </div>
          <div style={{textAlign:"left"}}>
            <input style={{height: "90%", width:"99%", fontSize: 16, backgroundColor:"transparent", color: "white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}} value={searchTerm} onChange={event => setSearchTerm(event.target.value)} placeholder="Search guild or character..." />

          </div>
          <div style={{display:"grid", textAlign:"center", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "0px", marginBottom: 0}}>
            {selectingSpecs && filteredClasses &&
              classSpecs.filter(cs => cs.overallClass == selectingSpecs).map(cs => {
                return (
                  <div className={filteredClasses.find(fc => fc.id == cs.id).selected ? "bg" : "nobg"} key={cs.id+filteredClasses.find(fc => fc.id == cs.id).selected ? "_true" : "_false"} onClick={() => updateSpecFilter(cs.id)} style={{marginTop: -8, cursor:"pointer"}}>
                    <p style={{color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{cs.name}</p>
                  </div>
                  )
              })
            }
          </div>
          {
            results.length > 0 &&
            <div className={"animatey"} key={"pagi_"+pagination} style={{display: "flex", flexWrap: "wrap",  flexDirection: "row",  justifyContent: "space-around",  alignItems: "center", alignContent: "start", maxHeight: 48, textAlign:"center" }}>
              <div onClick={() => setPagination(0)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != 0)  ?  "pointer" : "auto",backgroundColor: (pagination != 0)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&lt;&lt;</p></div>
              <div onClick={() => setPagination((pagination != 0) ? -1 + pagination : pagination)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != 0)  ?  "pointer" : "auto",backgroundColor: (pagination != 0)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&lt;</p></div>
                {results.length > 0 && results.filter((res,i) => {
                  return true
                }).map((page, i) => <div onClick={() => setPagination(i)} style={{height: 48, display: (pagination >= -5 + results.length && i >= -10 + results.length) ? "block" : (pagination <= 4 && i < 10) ? "block" : (i > -5 + pagination && i <= 5 + pagination) ? "block":"none", minWidth:48, flex: "1 0 auto", cursor: "pointer",backgroundColor: (pagination == i) ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{1+i}</p></div>)}
              <div onClick={() => setPagination((pagination != -1 + results.length) ? 1 + pagination : pagination)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != -1 + results.length)  ?  "pointer" : "auto",backgroundColor: (pagination != -1 + results.length)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&gt;</p></div>
              <div onClick={() => setPagination(-1 + results.length)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != -1 + results.length)  ?  "pointer" : "auto",backgroundColor: (pagination != -1 + results.length)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&gt;&gt;</p></div>
            </div>
          }
        </div>
      </div>
      <div style={{textAlign:"right", marginRight:24, marginTop: -24, background:"transparent"}}>
      <select style={{background:"transparent",color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}} onChange={(event) => setSortType(event.target.value)} value={sortType}>
        <option style={{background:"black", color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}} value={"RANK"}>SORT BY RANK</option>
        <option style={{background:"black",color:"white", textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}  value={"DPS"}>SORT BY DPS</option>
      </select>
      </div>
      <div style={{padding: 16}}>



    {
      results[pagination] && results[pagination].length > 0 && results[pagination].map(rank => {
        //const spec = classSpecs.find(cspec => cspec.id == rank.classID);
        let spec = null;
        for(var i=0; i<classSpecs.length; i++){
          if(classSpecs[i].bossKillUrlSuffix.indexOf(rank.subspec) != -1 && classSpecs[i].classImage == classSpecs.find(cs => cs.id == rank.classID).classImage){
            spec = classSpecs[i]
          }
        }
        return (
          <div style={{display:"grid", gridTemplateColumns:"1fr 4fr 1fr", backgroundImage: "url("+spec.specImage+")", backgroundSize:"cover", marginBottom: 16, borderRadius: 16, overflow:"hidden"}}>
            <AvatarFrame character={{name: rank.name}} classSpec={spec} />
            <div style={{padding: 40}}>
              <table>
                <thead>
                  <tr>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, width: 154, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>Guild</th>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>Avg. Item Lvl</th>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>Fight length</th>
                    <th style={{color:"white", paddingRight: 80, fontSize: 18, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>DPS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{color:"white", paddingRight: 80, wordBreak:"break-all", width: 154, fontSize: 14, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{rank.guild != "" ? rank.guild : "No guild"}</td>
                    <td style={{color:"white", paddingRight: 80, fontSize: 24, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{Math.floor(rank.avg_item_lvl)}</td>
                    <td style={{color:"white", paddingRight: 80, fontSize: 24, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{millisToMinutesAndSeconds(rank.length)}</td>
                    <td style={{color:"white", paddingRight: 80, fontSize: 32, textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{Math.round(rank.dps)}</td>
                  </tr>
                </tbody>

              </table>
            </div>
            <CircularProgress label={rank.position+" / 200"} value={(((200 - rank.position) / 200) * 100)} title={"Rank in spec"} classSpec={spec} />
          </div>
        )
      })
    }
    </div>
    {
      results.length > 0 &&
      <div className={"animatey"} key={"pagi_"+pagination} style={{display: "flex", flexWrap: "wrap",  flexDirection: "row",  justifyContent: "space-around",  alignItems: "center", alignContent: "start", maxHeight: 48, textAlign:"center" }}>
        <div onClick={() => setPagination(0)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != 0)  ?  "pointer" : "auto",backgroundColor: (pagination != 0)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&lt;&lt;</p></div>
        <div onClick={() => setPagination((pagination != 0) ? -1 + pagination : pagination)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != 0)  ?  "pointer" : "auto",backgroundColor: (pagination != 0)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&lt;</p></div>
          {results.length > 0 && results.filter((res,i) => {
            return true
          }).map((page, i) => <div onClick={() => setPagination(i)} style={{height: 48, display: (pagination >= -5 + results.length && i >= -10 + results.length) ? "block" : (pagination <= 4 && i < 10) ? "block" : (i > -5 + pagination && i <= 5 + pagination) ? "block":"none", minWidth:48, flex: "1 0 auto", cursor: "pointer",backgroundColor: (pagination == i) ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>{1+i}</p></div>)}
        <div onClick={() => setPagination((pagination != -1 + results.length) ? 1 + pagination : pagination)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != -1 + results.length)  ?  "pointer" : "auto",backgroundColor: (pagination != -1 + results.length)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&gt;</p></div>
        <div onClick={() => setPagination(-1 + results.length)} style={{height: 48, display: "block", minWidth:48, flex: "1 0 auto", cursor:(pagination != -1 + results.length)  ?  "pointer" : "auto",backgroundColor: (pagination != -1 + results.length)  ? "rgba(0,0,0,0.2)" : "transparent"}}><p style={{color:"white",textShadow: "-1px -1px 3px rgba(0, 0, 0, 1),2px 2px 3px rgba(0, 0, 0, 1)"}}>&gt;&gt;</p></div>
      </div>
    }
    </div>
  );
}

export default App;
