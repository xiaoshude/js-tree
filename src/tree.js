/**
 * Created by fjywan on 17/2/19.
 */

export default class Tree {
  constructor(object, option) {
    if (!object) {
      throw new Error("Invalid argument" + object);
    }

    if (!option) {
      throw new Error("option argument should be provided in parse function");
    }

    if (!option.childrenAttr || !option.idAttr) { //parent
      throw new Error("option.childrenAttr & option.idAttr should be provided in option");
    }

    this.data = object;
    this.childrenAttr = option.childrenAttr;
    this.idAttr = option.idAttr;
    this.parentAttr = option.parentAttr;

    this.traverse = this.traverseDown = this.traverseDF;
  }

  traverseDF(callback = () => {}) {
    let recurse = currentNode => {
      if(callback(currentNode) === false) {
        return false;
      }
      if (currentNode[this.childrenAttr] && currentNode[this.childrenAttr].length) {
        for (var i = 0, length = currentNode[this.childrenAttr].length; i < length; i++) {
          recurse(currentNode[this.childrenAttr][i]);
        }
      }
    };
    // this is a recurse and immediately-invoking function
    recurse(this.data);
  }

  /**
   * 从给定节点开始向上遍历
   * @param node 向上遍历的起始节点
   * @param callback
   */
  traverseUp(node, callback) {
    if (this.parentAttr) {

      let recurse = node => {
        if (node && node[this.parentAttr]) {
          let parentNode = this.getNodeById(node[this.parentAttr]);
          callback(parentNode);
          recurse(parentNode);
        }
      };

      recurse(node);
    } else {
      // 没有parent id时需要通过记录向下查找路径实现 这个暂且不做 抛个错

      throw new Error("option.parentAttr should be provided in option");
    }
  }

  getNodeById(id) {
    let targetNode;
    this.traverse(node => {
      if(node[this.idAttr] === id) {
        targetNode = node;
        return false;
      }
    });

    return targetNode;
  }
}

