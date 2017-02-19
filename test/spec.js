import {Tree, ArrayTree} from '../src/index.js'

let demoTree = [
  {
    id: 1,
    text: '测试父menu1',
    href: 'test'
  },
  {
    id: 2,
    text: '测试父menu2',
    children: [
      {
        id: 21,
        text: '测试子menu21',
        parent: 2
      },
      {
        id: 22,
        text: '测试子menu12',
        parent: 2
      }
    ]
  },
  {
    id: 3,
    text: '测试父menu3',
    children: [
      {
        id: 31,
        text: '测试子menu31',
        parent: 3
      },
      {
        id: 32,
        text: '测试子menu32',
        parent: 3,
        hide: false,
        children: [
          {
            id: 321,
            parent: 32,
            text: '测试子menu321'
          },
          {
            id: 322,
            parent: 32,
            text: '测试子menu322',
            active: true
          }
        ]
      }
    ]
  }
];

let config = {
  childrenAttr: 'children',
  idAttr: 'id',
  parentAttr: 'parent'
};

let data = {
  id: '_auto_root_',
  children: demoTree
};

let tree = new Tree(data, config);

describe('tree', () => {
  it('traverseDF', () => {
    let result = [];
    tree.traverseDF(node => {
      result.push(node.id)
    });
    expect(result.length).to.be.equal(10);
    expect(result[1]).to.be.equal(1);
    expect(result[2]).to.be.equal(2);
    expect(result[3]).to.be.equal(21);
  });

  it('getNodeById', () => {
    let targerNode = tree.getNodeById(32);
    expect(targerNode.text).to.be.equal('测试子menu32');
  });

  it('traverseUp', () => {
    let result = [];
    tree.traverseUp({
      id: 322,
      parent: 32,
      text: '测试子menu322',
      active: true
    }, node => {
      result.push(node.id)
    });
    expect(result.length).to.be.equal(2);
    expect(result[0]).to.be.equal(32);
  });
});



