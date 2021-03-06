/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Property Entity Base Parameters set.
 *
 */
class PropertyEntityBaseParameters {
  /**
   * Create a PropertyEntityBaseParameters.
   * @property {array} [tags] Optional tags that when provided can be used to
   * filter the property list.
   * @property {boolean} [secret] Determines whether the value is a secret and
   * should be encrypted or not. Default value is false.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyEntityBaseParameters
   *
   * @returns {object} metadata of PropertyEntityBaseParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyEntityBaseParameters',
      type: {
        name: 'Composite',
        className: 'PropertyEntityBaseParameters',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            constraints: {
              MaxItems: 32
            },
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          secret: {
            required: false,
            serializedName: 'secret',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PropertyEntityBaseParameters;
