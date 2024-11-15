export const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    console.log("tree", tree);
    if (tree.id === folderId && tree.isFolder) {
      tree?.items?.unshift({
        id: new Date().getTime().toString(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree?.items?.map((indvItem) => {
      return insertNode(indvItem, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }
  return { insertNode };
};
