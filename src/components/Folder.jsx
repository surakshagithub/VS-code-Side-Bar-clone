import { useState } from "react";

export const Folder = (props) => {
  const { explorerData, handleInsertNode } = props;

  const [isExpand, setIsExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setIsExpand(true);
    console.log("isFolder", isFolder);
    setShowInput({ visible: true, isFolder });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      console.log("e.target.value", e.target.value);
      handleInsertNode(explorerData?.id, e?.target?.value, showInput?.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorerData?.isFolder) {
    return (
      <div style={{ marginTop: "5" }}>
        <div className="folder" onClick={() => setIsExpand(!isExpand)}>
          <span>📁 {explorerData?.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div
          style={{ display: isExpand ? "block" : "none", marginLeft: "20px" }}
        >
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "🗃️"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                className="inputContainer__input"
                autoFocus
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {explorerData?.items?.map((indvExplorerData) => {
            return (
              <Folder
                explorerData={indvExplorerData}
                key={indvExplorerData.id}
                handleInsertNode={handleInsertNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>🗃️{explorerData?.name}</span>
      </div>
    );
  }
};
