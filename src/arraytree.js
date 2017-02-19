/**
 * Created by fjywan on 17/2/19.
 */

import Tree from './tree.js'

export default class ArrayTree {
  constructor(data, option) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid argument" + data);
    }
  }

}
