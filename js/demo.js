var graph = {"nodes":[
  {"view":{"position":{"x":66,"y":152}},"id":"start"},
  {"view":{"position":{"x":328,"y":152}},"id":"process"},
  {"view":{"position":{"x":328,"y":300}},"id":"end"},
  {"view":{"position":{"x":205,"y":51}},"id":"input 1","node_type":"input"},
  {"view":{"position":{"x":445,"y":51}},"id":"output 1","node_type":"output"}
 ],
 "edges":[
  ["start","input 1","get","a"],
  ["start","end","flo","ng"],
  ["process","end","flo","done"],
  ["process","input 1","get","a"],
  ["process","output 1","set","'Hello '+a"],
  ["start","process","flo","a.length"]
 ]
};
