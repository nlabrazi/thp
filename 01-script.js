console.log("Game Morpion")

class Node {
  constructor(data) {
    this.data = data;
    this.childLeft = null;
    this.childRight = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.childLeft === null)
        node.childLeft = newNode;
      else
        this.insertNode(node.childLeft, newNode);
    } else {
      if(node.childRight === null)
        node.childRight = newNode;
      else
        this.insertNode(node.childRight, newNode);
    }
   }
  getRootNode() {
    return this.root;
  }
}

let myTree = new Tree();
console.log(myTree.insert(15));
console.log(myTree);

myTree.insert(15);
myTree.insert(25);
myTree.insert(10);
myTree.insert(7);
myTree.insert(22);
myTree.insert(17);
myTree.insert(13);
myTree.insert(5);
myTree.insert(9);
myTree.insert(27);


let root = myTree.getRootNode();

// Boucler
// Créer un node avec en data le 1er de l'array (if already use)
// Prendre en childLeft (random 0, 1 , 2)
// Prendre en childRight (random 0, 1 , 2)
// Fin boucle
