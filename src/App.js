import { useState } from "react";
import { explorer } from "./data/folderData";
import { Folder } from "./components/Folder";
import "../src/style.css";
import { useTraverseTree } from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    console.log("finalTree", finalTree);
    setExplorerData(finalTree);
  };
  return (
    <>
      <Folder explorerData={explorerData} handleInsertNode={handleInsertNode} />
    </>
  );
}

export default App;
