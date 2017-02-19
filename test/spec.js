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
        text: '测试子menu31'
      },
      {
        id: 32,
        text: '测试子menu32',
        hide: false,
        children: [
          {
            id: 321,
            text: '测试子menu321'
          },
          {
            id: 322,
            text: '测试子menu322',
            active: true
          }
        ]
      }
    ]
  }
];

let tree = new Tree(demoTree[1], {
  childrenAttr: 'children',
  idAttr: 'id',
  parentAttr: 'parent'
});

describe('tree', () => {
  it('traverseDF', () => {
    let result = [];
    tree.traverseDF(node => {
      result.push(node.id)
    });
    expect(result.length).to.be.equal(3);
    expect(result[0]).to.be.equal(2);
    expect(result[1]).to.be.equal(21);
    expect(result[2]).to.be.equal(22);
  });

  it('getNodeById', () => {
    let targerNode = tree.getNodeById(2);
    expect(targerNode.text).to.be.equal('测试父menu2');
  });

  it('traverseUp', () => {
    let result = [];
    tree.traverseUp({
      id: 22,
      text: '测试子menu12',
      parent: 2
    }, node => {
      result.push(node.id)
    });
    expect(result.length).to.be.equal(1);
    expect(result[0]).to.be.equal(2);
  });
});



