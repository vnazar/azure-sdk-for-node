/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the NodeId class.
 * @constructor
 * The id
 * @member {string} [id]
 * 
 */
function NodeId() {
}

/**
 * Defines the metadata of NodeId
 *
 * @returns {object} metadata of NodeId
 *
 */
NodeId.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Node_Id',
    type: {
      name: 'Composite',
      className: 'NodeId',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'Id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NodeId;